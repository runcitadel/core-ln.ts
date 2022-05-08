/// <reference lib="DOM" />

import type {
  ChannelOpenChannelResponse,
  ChannelOpenChannelRequestBody,
} from "./ChannelOpenChannel";
import type { ChannelListChannelsResponse } from "./ChannelListChannels";
import type {
  ChannelSetChannelFeeResponse,
  ChannelSetChannelFeeRequestBody,
} from "./ChannelSetChannelFee";
import type {
  ChannelCloseChannelResponse,
  ChannelCloseChannelRequestQuery,
} from "./ChannelCloseChannel";
import type {
  ChannelListForwardsResponse,
  ChannelListForwardsRequestQuery,
} from "./ChannelListForwards";
import type {
  ChannelListForwardsFilterResponse,
  ChannelListForwardsFilterRequestQuery,
} from "./ChannelListForwardsFilter";
import type {
  ChannelFunderUpdateResponse,
  ChannelFunderUpdateRequestBody,
} from "./ChannelFunderUpdate";
import type { ChannelLocalRemoteBalResponse } from "./ChannelLocalRemoteBal";
import type { DatastoreResponse, DatastoreRequestBody } from "./Datastore";
import type {
  DatastoreListDatastoreResponse,
  DatastoreListDatastoreRequestQuery,
} from "./DatastoreListDatastore";
import type {
  DatastoreDelDatastoreResponse,
  DatastoreDelDatastoreRequestQuery,
} from "./DatastoreDelDatastore";
import type { GetBalanceResponse } from "./GetBalance";
import type { GetFeesResponse } from "./GetFees";
import type { GetinfoResponse } from "./Getinfo";
import type {
  UtilitySignMessageResponse,
  UtilitySignMessageRequestBody,
} from "./UtilitySignMessage";
import type { UtilityCheckMessageResponse } from "./UtilityCheckMessage";
import type { UtilityDecodeResponse } from "./UtilityDecode";
import type { ListFundsResponse } from "./ListFunds";
import type {
  InvoiceGenInvoiceResponse,
  InvoiceGenInvoiceRequestBody,
} from "./InvoiceGenInvoice";
import type {
  InvoiceListInvoicesResponse,
  InvoiceListInvoicesRequestQuery,
} from "./InvoiceListInvoices";
import type {
  InvoiceDelExpiredInvoiceResponse,
  InvoiceDelExpiredInvoiceRequestQuery,
} from "./InvoiceDelExpiredInvoice";
import type { InvoiceDelInvoiceResponse } from "./InvoiceDelInvoice";
import type { InvoiceWaitInvoiceResponse } from "./InvoiceWaitInvoice";
import type { NetworkGetRouteResponse } from "./NetworkGetRoute";
import type { NetworkListNodeResponse } from "./NetworkListNode";
import type { NetworkListChannelResponse } from "./NetworkListChannel";
import type { NetworkFeeRatesResponse } from "./NetworkFeeRates";
import type { NetworkEstimateFeesResponse } from "./NetworkEstimateFees";
import type {
  NetworkListNodesResponse,
  NetworkListNodesRequestQuery,
} from "./NetworkListNodes";
import type { NewaddrResponse, NewaddrRequestQuery } from "./Newaddr";
import type { WithdrawResponse, WithdrawRequestBody } from "./Withdraw";
import type {
  OffersOfferResponse,
  OffersOfferRequestBody,
} from "./OffersOffer";
import type {
  OffersListOffersResponse,
  OffersListOffersRequestQuery,
} from "./OffersListOffers";
import type {
  OffersFetchInvoiceResponse,
  OffersFetchInvoiceRequestBody,
} from "./OffersFetchInvoice";
import type { OffersDisableOfferResponse } from "./OffersDisableOffer";
import type { PayResponse, PayRequestBody } from "./Pay";
import type {
  PayListPaysResponse,
  PayListPaysRequestQuery,
} from "./PayListPays";
import type {
  PayListPaymentsResponse,
  PayListPaymentsRequestQuery,
} from "./PayListPayments";
import type { PayDecodePayResponse } from "./PayDecodePay";
import type { PayKeysendResponse, PayKeysendRequestBody } from "./PayKeysend";
import type {
  PeerConnectResponse,
  PeerConnectRequestBody,
} from "./PeerConnect";
import type { PeerListPeersResponse } from "./PeerListPeers";
import type {
  PeerDisconnectResponse,
  PeerDisconnectRequestQuery,
} from "./PeerDisconnect";
import type { RpcResponse, RpcRequestBody } from "./Rpc";

import ApiClient, { transform, transformMap } from "@core-ln/base";

/**
 * An API client for the c-lightning REST plugin
 *
 * Only works when the rest-rpc option is set to *
 *
 * This is designed to be used in a browser and will not work server-side in Node versions < 18
 */
export default class RestApiClient extends ApiClient {
  /**
     * @param _apiUrl The URL where the rest API is available
     * @param _macaroon The base64-encoded macaroon
     * @param _transform Set this to false if you don't want any transformation to be done (like msat values from string to BigInt)
                        If false, some types may appear different than what they are in TypeScript
     */
  constructor(
    private _apiUrl: string,
    private _macaroon: string,
    private _transform = true
  ) {
    super();
  }

  async call<ReturnType>(method: string, params: unknown): Promise<ReturnType> {
    const data = await fetch(
      this._apiUrl.endsWith("/")
        ? `${this._apiUrl}v1/rpc`
        : `${this._apiUrl}/v1/rpc`,
      {
        headers: {
          "Content-Type": "application/json",
          macaroon: this._macaroon,
        },
        method: "POST",
        body: JSON.stringify({
          method,
          params,
        }),
      }
    );
    const parsedData = await data.json();
    return this._transform && transformMap[method]
      ? transform<ReturnType>(parsedData, transformMap[method])
      : (parsedData as ReturnType);
  }

  async req<ReturnType>(
    method: string,
    path: string,
    queryParams: unknown,
    bodyParams?: unknown
  ): Promise<ReturnType> {
    const generatedQuery = "?";
    const queryParamsTyped = queryParams as Record<string, string>;
    if (queryParams) {
      let isFirst = true;
      for (const param in queryParamsTyped) {
        if (isFirst) {
          queryParams += `${param}=${queryParamsTyped[param]}`;
        } else {
          queryParams += `&${param}=${queryParamsTyped[param]}`;
        }
        isFirst = false;
      }
    }
    if (generatedQuery !== "?") path += generatedQuery;
    const data = await fetch(
      this._apiUrl.endsWith("/")
        ? `${this._apiUrl}${path.substring(1)}`
        : `${this._apiUrl}${path}`,
      {
        headers: {
          macaroon: this._macaroon,
          ...(bodyParams ? { "Content-Type": "application/json" } : {}),
        },
        method,
        ...(bodyParams ? { body: JSON.stringify(bodyParams) } : {}),
      }
    );
    return (await data.json()) as ReturnType;
  }

  channelOpenChannel(bodyParams: ChannelOpenChannelRequestBody) {
    return this.req<ChannelOpenChannelResponse>(
      "POST",
      "/channel/openChannel",
      null,
      bodyParams
    );
  }

  channelListChannels() {
    return this.req<ChannelListChannelsResponse>(
      "GET",
      "/channel/listChannels",
      null
    );
  }

  channelSetChannelFee(bodyParams: ChannelSetChannelFeeRequestBody) {
    return this.req<ChannelSetChannelFeeResponse>(
      "POST",
      "/channel/setChannelFee",
      null,
      bodyParams
    );
  }

  channelCloseChannel(queryParams: ChannelCloseChannelRequestQuery) {
    return this.req<ChannelCloseChannelResponse>(
      "DELETE",
      "/channel/closeChannel",
      queryParams
    );
  }

  channelListForwards(queryParams: ChannelListForwardsRequestQuery) {
    return this.req<ChannelListForwardsResponse>(
      "GET",
      "/channel/listForwards",
      queryParams
    );
  }

  channelListForwardsFilter(
    queryParams: ChannelListForwardsFilterRequestQuery
  ) {
    return this.req<ChannelListForwardsFilterResponse>(
      "GET",
      "/channel/listForwardsFilter",
      queryParams
    );
  }

  channelFunderUpdate(bodyParams: ChannelFunderUpdateRequestBody) {
    return this.req<ChannelFunderUpdateResponse>(
      "POST",
      "/channel/funderUpdate",
      null,
      bodyParams
    );
  }

  channelLocalRemoteBal() {
    return this.req<ChannelLocalRemoteBalResponse>(
      "GET",
      "/channel/localRemoteBal",
      null
    );
  }

  restDatastore(bodyParams: DatastoreRequestBody) {
    return this.req<DatastoreResponse>("POST", "/datastore", null, bodyParams);
  }

  datastoreListDatastore(queryParams: DatastoreListDatastoreRequestQuery) {
    return this.req<DatastoreListDatastoreResponse>(
      "GET",
      "/datastore/listDatastore",
      queryParams
    );
  }

  datastoreDelDatastore(queryParams: DatastoreDelDatastoreRequestQuery) {
    return this.req<DatastoreDelDatastoreResponse>(
      "DELETE",
      "/datastore/delDatastore",
      queryParams
    );
  }

  getBalance() {
    return this.req<GetBalanceResponse>("GET", "/getBalance", null);
  }

  getFees() {
    return this.req<GetFeesResponse>("GET", "/getFees", null);
  }

  restGetinfo() {
    return this.req<GetinfoResponse>("GET", "/getinfo", null);
  }

  utilitySignMessage(bodyParams: UtilitySignMessageRequestBody) {
    return this.req<UtilitySignMessageResponse>(
      "POST",
      "/utility/signMessage",
      null,
      bodyParams
    );
  }

  utilityCheckMessage() {
    return this.req<UtilityCheckMessageResponse>(
      "GET",
      "/utility/checkMessage",
      null
    );
  }

  utilityDecode() {
    return this.req<UtilityDecodeResponse>("GET", "/utility/decode", null);
  }

  listFunds() {
    return this.req<ListFundsResponse>("GET", "/listFunds", null);
  }

  invoiceGenInvoice(bodyParams: InvoiceGenInvoiceRequestBody) {
    return this.req<InvoiceGenInvoiceResponse>(
      "POST",
      "/invoice/genInvoice",
      null,
      bodyParams
    );
  }

  invoiceListInvoices(queryParams: InvoiceListInvoicesRequestQuery) {
    return this.req<InvoiceListInvoicesResponse>(
      "GET",
      "/invoice/listInvoices",
      queryParams
    );
  }

  invoiceDelExpiredInvoice(queryParams: InvoiceDelExpiredInvoiceRequestQuery) {
    return this.req<InvoiceDelExpiredInvoiceResponse>(
      "DELETE",
      "/invoice/delExpiredInvoice",
      queryParams
    );
  }

  invoiceDelInvoice() {
    return this.req<InvoiceDelInvoiceResponse>(
      "DELETE",
      "/invoice/delInvoice",
      null
    );
  }

  invoiceWaitInvoice() {
    return this.req<InvoiceWaitInvoiceResponse>(
      "GET",
      "/invoice/waitInvoice",
      null
    );
  }

  networkGetRoute() {
    return this.req<NetworkGetRouteResponse>("GET", "/network/getRoute", null);
  }

  networkListNode() {
    return this.req<NetworkListNodeResponse>("GET", "/network/listNode", null);
  }

  networkListChannel() {
    return this.req<NetworkListChannelResponse>(
      "GET",
      "/network/listChannel",
      null
    );
  }

  networkFeeRates() {
    return this.req<NetworkFeeRatesResponse>("GET", "/network/feeRates", null);
  }

  networkEstimateFees() {
    return this.req<NetworkEstimateFeesResponse>(
      "GET",
      "/network/estimateFees",
      null
    );
  }

  networkListNodes(queryParams: NetworkListNodesRequestQuery) {
    return this.req<NetworkListNodesResponse>(
      "GET",
      "/network/listNodes",
      queryParams
    );
  }

  restNewaddr(queryParams: NewaddrRequestQuery) {
    return this.req<NewaddrResponse>("GET", "/newaddr", queryParams);
  }

  restWithdraw(bodyParams: WithdrawRequestBody) {
    return this.req<WithdrawResponse>("POST", "/withdraw", null, bodyParams);
  }

  offersOffer(bodyParams: OffersOfferRequestBody) {
    return this.req<OffersOfferResponse>(
      "POST",
      "/offers/offer",
      null,
      bodyParams
    );
  }

  offersListOffers(queryParams: OffersListOffersRequestQuery) {
    return this.req<OffersListOffersResponse>(
      "GET",
      "/offers/listOffers",
      queryParams
    );
  }

  offersFetchInvoice(bodyParams: OffersFetchInvoiceRequestBody) {
    return this.req<OffersFetchInvoiceResponse>(
      "POST",
      "/offers/fetchInvoice",
      null,
      bodyParams
    );
  }

  offersDisableOffer() {
    return this.req<OffersDisableOfferResponse>(
      "DELETE",
      "/offers/disableOffer",
      null
    );
  }

  restPay(bodyParams: PayRequestBody) {
    return this.req<PayResponse>("POST", "/pay", null, bodyParams);
  }

  payListPays(queryParams: PayListPaysRequestQuery) {
    return this.req<PayListPaysResponse>("GET", "/pay/listPays", queryParams);
  }

  payListPayments(queryParams: PayListPaymentsRequestQuery) {
    return this.req<PayListPaymentsResponse>(
      "GET",
      "/pay/listPayments",
      queryParams
    );
  }

  payDecodePay() {
    return this.req<PayDecodePayResponse>("GET", "/pay/decodePay", null);
  }

  payKeysend(bodyParams: PayKeysendRequestBody) {
    return this.req<PayKeysendResponse>(
      "POST",
      "/pay/keysend",
      null,
      bodyParams
    );
  }

  peerConnect(bodyParams: PeerConnectRequestBody) {
    return this.req<PeerConnectResponse>(
      "POST",
      "/peer/connect",
      null,
      bodyParams
    );
  }

  peerListPeers() {
    return this.req<PeerListPeersResponse>("GET", "/peer/listPeers", null);
  }

  peerDisconnect(queryParams: PeerDisconnectRequestQuery) {
    return this.req<PeerDisconnectResponse>(
      "DELETE",
      "/peer/disconnect",
      queryParams
    );
  }

  rpc(bodyParams: RpcRequestBody) {
    return this.req<RpcResponse>("POST", "/rpc", null, bodyParams);
  }
}
