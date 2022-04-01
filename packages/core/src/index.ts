import ApiClient, { transform, transformMap } from "@core-ln/base";
import { createConnection, type Socket } from "net";
// @ts-expect-error No type definition for this yet
import JSONParser from "jsonparse";

/**
 * An API client for c-lightning over an unix socket
 *
 * Doesn't require a c-lightning plugin, but doesn't work in web apps
 */
export default class SocketApiClient extends ApiClient {
  private _reconnectWait = 0.5;
  private _client: Socket;
  private _reqcount = 0;
  private _parser: any;
  private _reconnectTimeout: NodeJS.Timeout | null = null;
  private _clientConnectionPromise: Promise<void>;
  constructor(private _socketPath: string, private _transform = true) {
    super();
    this._reconnectWait = 0.5;
    this._reconnectTimeout = null;
    this._parser = new JSONParser();

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _self = this;

    this._client = createConnection(_socketPath);
    this._clientConnectionPromise = new Promise((resolve) => {
      this._client.on("connect", () => {
        this._reconnectWait = 1;
        resolve();
      });

      this._client.on("end", () => {
        this.increaseWaitTime();
        this.reconnect();
      });

      this._client.on("error", (error) => {
        this.emit("error", error);
        this.increaseWaitTime();
        this.reconnect();
      });
    });

    this._client.on("data", (data) => this._handledata(data));

    this._parser.onValue = function (val: any) {
      if (this.stack.length) return; // top-level objects only
      _self.emit("res:" + val.id, val);
    };
  }

  increaseWaitTime() {
    if (this._reconnectWait >= 16) {
      this._reconnectWait = 16;
    } else {
      this._reconnectWait *= 2;
    }
  }

  reconnect() {
    if (this._reconnectTimeout) {
      return;
    }

    this._reconnectTimeout = setTimeout(() => {
      this._client.connect(this._socketPath);
      this._reconnectTimeout = null;
    }, this._reconnectWait * 1000);
  }

  call<ReturnType>(method: string, params: unknown): Promise<ReturnType> {
    const callInt = ++this._reqcount;
    const sendObj = {
      jsonrpc: "2.0",
      method,
      params,
      id: `${callInt}`,
    };

    // Wait for the client to connect
    return this._clientConnectionPromise.then(
      () =>
        new Promise((resolve, reject) => {
          // Send the command
          this._client.write(JSON.stringify(sendObj));

          // Wait for a response
          this.once("res:" + callInt, (res) =>
            res.error == null
              ? resolve(
                  this._transform && transformMap[method]
                    ? transform<ReturnType>(res.result, transformMap[method])
                    : res.result
                )
              : reject(res.error)
          );
        })
    );
  }

  private _handledata(data: unknown) {
    this._parser.write(data);
  }
}

export {
  AddgossipRequest,
  AddgossipResponse,
  AutocleaninvoiceRequest,
  AutocleaninvoiceResponse,
  CheckRequest,
  CheckResponse,
  CheckmessageRequest,
  CheckmessageResponse,
  CloseRequest,
  CloseResponse,
  CloseType,
  ConnectAddress,
  ConnectDirection,
  ConnectRequest,
  ConnectResponse,
  ConnectType,
  CreateinvoiceRequest,
  CreateinvoiceResponse,
  CreateinvoiceStatus,
  CreateonionRequest,
  CreateonionResponse,
  DatastoreRequest,
  DatastoreResponse,
  DecodeRequest,
  DecodeResponse,
  DecodepayExtra,
  DecodepayFallback,
  DecodepayRequest,
  DecodepayResponse,
  DecodepayRoute,
  DecodepayType,
  DeldatastoreRequest,
  DeldatastoreResponse,
  DelexpiredinvoiceRequest,
  DelexpiredinvoiceResponse,
  DelinvoiceRequest,
  DelinvoiceResponse,
  DelinvoiceStatus,
  DelpayPayment,
  DelpayRequest,
  DelpayResponse,
  DelpayStatus,
  DisableofferRequest,
  DisableofferResponse,
  DisconnectRequest,
  DisconnectResponse,
  FeeratesOnchainFeeEstimates,
  FeeratesPerkb,
  FeeratesPerkw,
  FeeratesRequest,
  FeeratesResponse,
  FetchinvoiceChanges,
  FetchinvoiceNextPeriod,
  FetchinvoiceRequest,
  FetchinvoiceResponse,
  FundchannelCancelRequest,
  FundchannelCancelResponse,
  FundchannelCompleteRequest,
  FundchannelCompleteResponse,
  FundchannelRequest,
  FundchannelResponse,
  FundchannelStartRequest,
  FundchannelStartResponse,
  FunderupdatePolicy,
  FunderupdateRequest,
  FunderupdateResponse,
  FundpsbtRequest,
  FundpsbtReservation,
  FundpsbtResponse,
  GetinfoAddress,
  GetinfoAddressType,
  GetinfoBinding,
  GetinfoBindingType,
  GetinfoRequest,
  GetinfoResponse,
  GetlogLog,
  GetlogRequest,
  GetlogResponse,
  GetlogType,
  GetrouteRequest,
  GetrouteResponse,
  GetrouteRoute,
  GetrouteStyle,
  GetsharedsecretRequest,
  GetsharedsecretResponse,
  HelpHelp,
  HelpRequest,
  HelpResponse,
  InvoiceRequest,
  InvoiceResponse,
  KeysendRequest,
  KeysendResponse,
  KeysendStatus,
  ListchannelsChannel,
  ListchannelsRequest,
  ListchannelsResponse,
  ListconfigsImportantPlugin,
  ListconfigsPlugin,
  ListconfigsRequest,
  ListconfigsResponse,
  ListdatastoreDatastore,
  ListdatastoreRequest,
  ListdatastoreResponse,
  ListforwardsForward,
  ListforwardsRequest,
  ListforwardsResponse,
  ListforwardsStatus,
  ListfundsChannel,
  ListfundsOutput,
  ListfundsRequest,
  ListfundsResponse,
  ListfundsState,
  ListfundsStatus,
  ListinvoicesInvoice,
  ListinvoicesRequest,
  ListinvoicesResponse,
  ListinvoicesStatus,
  ListnodesNode,
  ListnodesResponse,
  ListoffersOffer,
  ListoffersRequest,
  ListoffersResponse,
  ListpaysPay,
  ListpaysRequest,
  ListpaysResponse,
  ListpaysStatus,
  ListpeersCause,
  ListpeersChannel,
  ListpeersCloser,
  ListpeersDirection,
  ListpeersFeature,
  ListpeersFeerate,
  ListpeersFunding,
  ListpeersHtlc,
  ListpeersInflight,
  ListpeersLog,
  ListpeersPeer,
  ListpeersRequest,
  ListpeersResponse,
  ListpeersState,
  ListpeersStateChange,
  ListpeersType,
  ListsendpaysPayment,
  ListsendpaysRequest,
  ListsendpaysResponse,
  ListsendpaysStatus,
  ListtransactionsInput,
  ListtransactionsOutput,
  ListtransactionsRequest,
  ListtransactionsResponse,
  ListtransactionsTransaction,
  ListtransactionsType,
  MultifundchannelChannelID,
  MultifundchannelError,
  MultifundchannelFailed,
  MultifundchannelMethod,
  MultifundchannelRequest,
  MultifundchannelResponse,
  MultiwithdrawRequest,
  MultiwithdrawResponse,
  NotificationsRequest,
  NotificationsResponse,
  OfferRequest,
  OfferResponse,
  OfferoutRequest,
  OfferoutResponse,
  OpenchannelAbortRequest,
  OpenchannelAbortResponse,
  OpenchannelBumpRequest,
  OpenchannelBumpResponse,
  OpenchannelInitRequest,
  OpenchannelInitResponse,
  OpenchannelSignedRequest,
  OpenchannelSignedResponse,
  OpenchannelUpdateRequest,
  OpenchannelUpdateResponse,
  ParsefeerateRequest,
  ParsefeerateResponse,
  PayRequest,
  PayResponse,
  PayStatus,
  PingRequest,
  PingResponse,
  PluginCommand,
  PluginRequest,
  PluginResponse,
  ReserveinputsRequest,
  ReserveinputsReservation,
  ReserveinputsResponse,
  SendcustommsgRequest,
  SendcustommsgResponse,
  SendinvoiceRequest,
  SendinvoiceResponse,
  SendinvoiceStatus,
  SendonionRequest,
  SendonionResponse,
  SendonionStatus,
  SendonionmessageRequest,
  SendonionmessageResponse,
  SendpayRequest,
  SendpayResponse,
  SendpayStatus,
  SendpsbtRequest,
  SendpsbtResponse,
  SetchannelfeeChannel,
  SetchannelfeeRequest,
  SetchannelfeeResponse,
  SignmessageRequest,
  SignmessageResponse,
  SignpsbtRequest,
  SignpsbtResponse,
  StopRequest,
  StopResponse,
  TxdiscardRequest,
  TxdiscardResponse,
  TxprepareRequest,
  TxprepareResponse,
  TxsendRequest,
  TxsendResponse,
  UnreserveinputsRequest,
  UnreserveinputsReservation,
  UnreserveinputsResponse,
  UtxopsbtRequest,
  UtxopsbtReservation,
  UtxopsbtResponse,
  WaitanyinvoiceRequest,
  WaitanyinvoiceResponse,
  WaitanyinvoiceStatus,
  WaitblockheightRequest,
  WaitblockheightResponse,
  WaitinvoiceRequest,
  WaitinvoiceResponse,
  WaitinvoiceStatus,
  WaitsendpayRequest,
  WaitsendpayResponse,
  WaitsendpayStatus,
  WithdrawRequest,
  WithdrawResponse,
} from "@core-ln/base";
