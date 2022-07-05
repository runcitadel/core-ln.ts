import AbstractApiClient from "./generated/main.ts";
export default AbstractApiClient;

export type { transformMap, transform } from "./generated/main.ts";

export type { AddgossipRequest, AddgossipResponse } from "./generated/addgossip.ts";
export type {
  AutocleaninvoiceRequest,
  AutocleaninvoiceResponse,
} from "./generated/autocleaninvoice.ts";
export type { CheckRequest, CheckResponse } from "./generated/check.ts";
export type {
  CheckmessageRequest,
  CheckmessageResponse,
} from "./generated/checkmessage.ts";
export type {
  CloseRequest,
  CloseResponse,
  Type as CloseType,
} from "./generated/close.ts";
export type {
  ConnectRequest,
  ConnectResponse,
  Address as ConnectAddress,
  Type as ConnectType,
  Direction as ConnectDirection,
} from "./generated/connect.ts";
export type {
  CreateinvoiceRequest,
  CreateinvoiceResponse,
  Status as CreateinvoiceStatus,
} from "./generated/createinvoice.ts";
export type {
  CreateonionRequest,
  CreateonionResponse,
} from "./generated/createonion.ts";
export type { DatastoreRequest, DatastoreResponse } from "./generated/datastore.ts";
export type { DecodeRequest, DecodeResponse } from "./generated/decode.ts";
export type {
  DecodepayRequest,
  DecodepayResponse,
  Extra as DecodepayExtra,
  Fallback as DecodepayFallback,
  Type as DecodepayType,
  Route as DecodepayRoute,
} from "./generated/decodepay.ts";
export type {
  DeldatastoreRequest,
  DeldatastoreResponse,
} from "./generated/deldatastore.ts";
export type {
  DelexpiredinvoiceRequest,
  DelexpiredinvoiceResponse,
} from "./generated/delexpiredinvoice.ts";
export type {
  DelinvoiceRequest,
  DelinvoiceResponse,
  Status as DelinvoiceStatus,
} from "./generated/delinvoice.ts";
export type {
  DelpayRequest,
  DelpayResponse,
  Payment as DelpayPayment,
  Status as DelpayStatus,
} from "./generated/delpay.ts";
export type {
  DisableofferRequest,
  DisableofferResponse,
} from "./generated/disableoffer.ts";
export type { DisconnectRequest, DisconnectResponse } from "./generated/disconnect.ts";
export type {
  FeeratesRequest,
  FeeratesResponse,
  OnchainFeeEstimates as FeeratesOnchainFeeEstimates,
  Perkb as FeeratesPerkb,
  Perkw as FeeratesPerkw,
} from "./generated/feerates.ts";
export type {
  FetchinvoiceRequest,
  FetchinvoiceResponse,
  Changes as FetchinvoiceChanges,
  NextPeriod as FetchinvoiceNextPeriod,
} from "./generated/fetchinvoice.ts";
export type {
  FundchannelRequest,
  FundchannelResponse,
} from "./generated/fundchannel.ts";
export type {
  FundchannelCancelRequest,
  FundchannelCancelResponse,
} from "./generated/fundchannel_cancel.ts";
export type {
  FundchannelCompleteRequest,
  FundchannelCompleteResponse,
} from "./generated/fundchannel_complete.ts";
export type {
  FundchannelStartRequest,
  FundchannelStartResponse,
} from "./generated/fundchannel_start.ts";
export type {
  FunderupdateRequest,
  FunderupdateResponse,
  Policy as FunderupdatePolicy,
} from "./generated/funderupdate.ts";
export type {
  FundpsbtRequest,
  FundpsbtResponse,
  Reservation as FundpsbtReservation,
} from "./generated/fundpsbt.ts";
export type {
  GetinfoRequest,
  GetinfoResponse,
  Address as GetinfoAddress,
  AddressType as GetinfoAddressType,
  Binding as GetinfoBinding,
  BindingType as GetinfoBindingType,
} from "./generated/getinfo.ts";
export type {
  GetlogRequest,
  GetlogResponse,
  Log as GetlogLog,
  Type as GetlogType,
} from "./generated/getlog.ts";
export type {
  GetrouteRequest,
  GetrouteResponse,
  Route as GetrouteRoute,
  Style as GetrouteStyle,
} from "./generated/getroute.ts";
export type {
  GetsharedsecretRequest,
  GetsharedsecretResponse,
} from "./generated/getsharedsecret.ts";
export type { HelpRequest, HelpResponse, Help as HelpHelp } from "./generated/help.ts";
export type { InvoiceRequest, InvoiceResponse } from "./generated/invoice.ts";
export type {
  KeysendRequest,
  KeysendResponse,
  Status as KeysendStatus,
} from "./generated/keysend.ts";
export type {
  ListchannelsRequest,
  ListchannelsResponse,
  Channel as ListchannelsChannel,
} from "./generated/listchannels.ts";
export type {
  ListconfigsRequest,
  ListconfigsResponse,
  ImportantPlugin as ListconfigsImportantPlugin,
  Plugin as ListconfigsPlugin,
} from "./generated/listconfigs.ts";
export type {
  ListdatastoreRequest,
  ListdatastoreResponse,
  Datastore as ListdatastoreDatastore,
} from "./generated/listdatastore.ts";
export type {
  ListforwardsRequest,
  ListforwardsResponse,
  Forward as ListforwardsForward,
  Status as ListforwardsStatus,
} from "./generated/listforwards.ts";
export type {
  ListfundsRequest,
  ListfundsResponse,
  Channel as ListfundsChannel,
  State as ListfundsState,
  Output as ListfundsOutput,
  Status as ListfundsStatus,
} from "./generated/listfunds.ts";
export type {
  ListinvoicesRequest,
  ListinvoicesResponse,
  Invoice as ListinvoicesInvoice,
  Status as ListinvoicesStatus,
} from "./generated/listinvoices.ts";
export type {
  ListnodesResponse,
  Node as ListnodesNode,
} from "./generated/listnodes.ts";
export type {
  ListoffersRequest,
  ListoffersResponse,
  Offer as ListoffersOffer,
} from "./generated/listoffers.ts";
export type {
  ListpaysRequest,
  ListpaysResponse,
  Pay as ListpaysPay,
  Status as ListpaysStatus,
} from "./generated/listpays.ts";
export type {
  ListpeersRequest,
  ListpeersResponse,
  Peer as ListpeersPeer,
  Channel as ListpeersChannel,
  Closer as ListpeersCloser,
  Feature as ListpeersFeature,
  Feerate as ListpeersFeerate,
  Funding as ListpeersFunding,
  Htlc as ListpeersHtlc,
  Direction as ListpeersDirection,
  Inflight as ListpeersInflight,
  State as ListpeersState,
  StateChange as ListpeersStateChange,
  Cause as ListpeersCause,
  Log as ListpeersLog,
  Type as ListpeersType,
} from "./generated/listpeers.ts";
export type {
  ListsendpaysRequest,
  ListsendpaysResponse,
  Payment as ListsendpaysPayment,
  Status as ListsendpaysStatus,
} from "./generated/listsendpays.ts";
export type {
  ListtransactionsRequest,
  ListtransactionsResponse,
  Transaction as ListtransactionsTransaction,
  Input as ListtransactionsInput,
  Type as ListtransactionsType,
  Output as ListtransactionsOutput,
} from "./generated/listtransactions.ts";
export type {
  MultifundchannelRequest,
  MultifundchannelResponse,
  ChannelID as MultifundchannelChannelID,
  Failed as MultifundchannelFailed,
  Error as MultifundchannelError,
  Method as MultifundchannelMethod,
} from "./generated/multifundchannel.ts";
export type {
  MultiwithdrawRequest,
  MultiwithdrawResponse,
} from "./generated/multiwithdraw.ts";
export type {
  NotificationsRequest,
  NotificationsResponse,
} from "./generated/notifications.ts";
export type { OfferRequest, OfferResponse } from "./generated/offer.ts";
export type { OfferoutRequest, OfferoutResponse } from "./generated/offerout.ts";
export type {
  OpenchannelAbortRequest,
  OpenchannelAbortResponse,
} from "./generated/openchannel_abort.ts";
export type {
  OpenchannelBumpRequest,
  OpenchannelBumpResponse,
} from "./generated/openchannel_bump.ts";
export type {
  OpenchannelInitRequest,
  OpenchannelInitResponse,
} from "./generated/openchannel_init.ts";
export type {
  OpenchannelSignedRequest,
  OpenchannelSignedResponse,
} from "./generated/openchannel_signed.ts";
export type {
  OpenchannelUpdateRequest,
  OpenchannelUpdateResponse,
} from "./generated/openchannel_update.ts";
export type {
  ParsefeerateRequest,
  ParsefeerateResponse,
} from "./generated/parsefeerate.ts";
export type { PayRequest, PayResponse, Status as PayStatus } from "./generated/pay.ts";
export type { PingRequest, PingResponse } from "./generated/ping.ts";
export type {
  PluginRequest,
  PluginResponse,
  Command as PluginCommand,
} from "./generated/plugin.ts";
export type {
  ReserveinputsRequest,
  ReserveinputsResponse,
  Reservation as ReserveinputsReservation,
} from "./generated/reserveinputs.ts";
export type {
  SendcustommsgRequest,
  SendcustommsgResponse,
} from "./generated/sendcustommsg.ts";
export type {
  SendinvoiceRequest,
  SendinvoiceResponse,
  Status as SendinvoiceStatus,
} from "./generated/sendinvoice.ts";
export type {
  SendonionRequest,
  SendonionResponse,
  Status as SendonionStatus,
} from "./generated/sendonion.ts";
export type {
  SendonionmessageRequest,
  SendonionmessageResponse,
} from "./generated/sendonionmessage.ts";
export type {
  SendpayRequest,
  SendpayResponse,
  Status as SendpayStatus,
} from "./generated/sendpay.ts";
export type { SendpsbtRequest, SendpsbtResponse } from "./generated/sendpsbt.ts";
export type {
  SetchannelfeeRequest,
  SetchannelfeeResponse,
  Channel as SetchannelfeeChannel,
} from "./generated/setchannelfee.ts";
export type {
  SignmessageRequest,
  SignmessageResponse,
} from "./generated/signmessage.ts";
export type { SignpsbtRequest, SignpsbtResponse } from "./generated/signpsbt.ts";
export type { StopRequest, StopResponse } from "./generated/stop.ts";
export type { TxdiscardRequest, TxdiscardResponse } from "./generated/txdiscard.ts";
export type { TxprepareRequest, TxprepareResponse } from "./generated/txprepare.ts";
export type { TxsendRequest, TxsendResponse } from "./generated/txsend.ts";
export type {
  UnreserveinputsRequest,
  UnreserveinputsResponse,
  Reservation as UnreserveinputsReservation,
} from "./generated/unreserveinputs.ts";
export type {
  UtxopsbtRequest,
  UtxopsbtResponse,
  Reservation as UtxopsbtReservation,
} from "./generated/utxopsbt.ts";
export type {
  WaitanyinvoiceRequest,
  WaitanyinvoiceResponse,
  Status as WaitanyinvoiceStatus,
} from "./generated/waitanyinvoice.ts";
export type {
  WaitblockheightRequest,
  WaitblockheightResponse,
} from "./generated/waitblockheight.ts";
export type {
  WaitinvoiceRequest,
  WaitinvoiceResponse,
  Status as WaitinvoiceStatus,
} from "./generated/waitinvoice.ts";
export type {
  WaitsendpayRequest,
  WaitsendpayResponse,
  Status as WaitsendpayStatus,
} from "./generated/waitsendpay.ts";
export type { WithdrawRequest, WithdrawResponse } from "./generated/withdraw.ts";
