import RestRPC from "./generated/index.js";
export default RestRPC;

export {
  ChannelOpenChannelResponse,
  ChannelOpenChannelRequestBody,
} from "./generated/ChannelOpenChannel";
export { ChannelListChannelsResponse } from "./generated/ChannelListChannels";
export {
  ChannelSetChannelFeeResponse,
  ChannelSetChannelFeeRequestBody,
} from "./generated/ChannelSetChannelFee";
export {
  ChannelCloseChannelResponse,
  ChannelCloseChannelRequestQuery,
} from "./generated/ChannelCloseChannel";
export {
  ChannelListForwardsResponse,
  ChannelListForwardsRequestQuery,
} from "./generated/ChannelListForwards";
export {
  ChannelListForwardsFilterResponse,
  ChannelListForwardsFilterRequestQuery,
} from "./generated/ChannelListForwardsFilter";
export {
  ChannelFunderUpdateResponse,
  ChannelFunderUpdateRequestBody,
} from "./generated/ChannelFunderUpdate";
export { ChannelLocalRemoteBalResponse } from "./generated/ChannelLocalRemoteBal";
export {
  DatastoreResponse as RestDataStoreResponse,
  DatastoreRequestBody,
} from "./generated/Datastore";
export {
  DatastoreListDatastoreResponse,
  DatastoreListDatastoreRequestQuery,
} from "./generated/DatastoreListDatastore";
export {
  DatastoreDelDatastoreResponse,
  DatastoreDelDatastoreRequestQuery,
} from "./generated/DatastoreDelDatastore";
export { GetBalanceResponse } from "./generated/GetBalance";
export { GetFeesResponse } from "./generated/GetFees";
export { GetinfoResponse as RestGetInfoResponse } from "./generated/Getinfo";
export {
  UtilitySignMessageResponse,
  UtilitySignMessageRequestBody,
} from "./generated/UtilitySignMessage";
export { UtilityCheckMessageResponse } from "./generated/UtilityCheckMessage";
export { UtilityDecodeResponse } from "./generated/UtilityDecode";
export { ListFundsResponse } from "./generated/ListFunds";
export {
  InvoiceGenInvoiceResponse,
  InvoiceGenInvoiceRequestBody,
} from "./generated/InvoiceGenInvoice";
export {
  InvoiceListInvoicesResponse,
  InvoiceListInvoicesRequestQuery,
} from "./generated/InvoiceListInvoices";
export {
  InvoiceDelExpiredInvoiceResponse,
  InvoiceDelExpiredInvoiceRequestQuery,
} from "./generated/InvoiceDelExpiredInvoice";
export { InvoiceDelInvoiceResponse } from "./generated/InvoiceDelInvoice";
export { InvoiceWaitInvoiceResponse } from "./generated/InvoiceWaitInvoice";
export { NetworkGetRouteResponse } from "./generated/NetworkGetRoute";
export { NetworkListNodeResponse } from "./generated/NetworkListNode";
export { NetworkListChannelResponse } from "./generated/NetworkListChannel";
export { NetworkFeeRatesResponse } from "./generated/NetworkFeeRates";
export { NetworkEstimateFeesResponse } from "./generated/NetworkEstimateFees";
export {
  NetworkListNodesResponse,
  NetworkListNodesRequestQuery,
} from "./generated/NetworkListNodes";
export { NewaddrResponse, NewaddrRequestQuery } from "./generated/Newaddr";
export {
  WithdrawResponse as RestWithdrawResponse,
  WithdrawRequestBody,
} from "./generated/Withdraw";
export {
  OffersOfferResponse,
  OffersOfferRequestBody,
} from "./generated/OffersOffer";
export {
  OffersListOffersResponse,
  OffersListOffersRequestQuery,
} from "./generated/OffersListOffers";
export {
  OffersFetchInvoiceResponse,
  OffersFetchInvoiceRequestBody,
} from "./generated/OffersFetchInvoice";
export { OffersDisableOfferResponse } from "./generated/OffersDisableOffer";
export {
  PayResponse as RestPayResponse,
  PayRequestBody,
} from "./generated/Pay";
export {
  PayListPaysResponse,
  PayListPaysRequestQuery,
} from "./generated/PayListPays";
export {
  PayListPaymentsResponse,
  PayListPaymentsRequestQuery,
} from "./generated/PayListPayments";
export { PayDecodePayResponse } from "./generated/PayDecodePay";
export {
  PayKeysendResponse,
  PayKeysendRequestBody,
} from "./generated/PayKeysend";
export {
  PeerConnectResponse,
  PeerConnectRequestBody,
} from "./generated/PeerConnect";
export { PeerListPeersResponse } from "./generated/PeerListPeers";
export {
  PeerDisconnectResponse,
  PeerDisconnectRequestQuery,
} from "./generated/PeerDisconnect";
export { RpcResponse, RpcRequestBody } from "./generated/Rpc";

export * from "@core-ln/base";
