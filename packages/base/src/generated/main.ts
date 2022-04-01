import { EventEmitter } from "events";

import type { AddgossipRequest, AddgossipResponse } from "./addgossip";
import type { AutocleaninvoiceRequest, AutocleaninvoiceResponse } from "./autocleaninvoice";
import type { CheckRequest, CheckResponse } from "./check";
import type { CheckmessageRequest, CheckmessageResponse } from "./checkmessage";
import type { CloseRequest, CloseResponse } from "./close";
import type { ConnectRequest, ConnectResponse } from "./connect";
import type { CreateinvoiceRequest, CreateinvoiceResponse } from "./createinvoice";
import type { CreateonionRequest, CreateonionResponse } from "./createonion";
import type { DatastoreRequest, DatastoreResponse } from "./datastore";
import type { DecodeRequest, DecodeResponse } from "./decode";
import type { DecodepayRequest, DecodepayResponse } from "./decodepay";
import type { DeldatastoreRequest, DeldatastoreResponse } from "./deldatastore";
import type { DelexpiredinvoiceRequest, DelexpiredinvoiceResponse } from "./delexpiredinvoice";
import type { DelinvoiceRequest, DelinvoiceResponse } from "./delinvoice";
import type { DelpayRequest, DelpayResponse } from "./delpay";
import type { DisableofferRequest, DisableofferResponse } from "./disableoffer";
import type { DisconnectRequest, DisconnectResponse } from "./disconnect";
import type { FeeratesRequest, FeeratesResponse } from "./feerates";
import type { FetchinvoiceRequest, FetchinvoiceResponse } from "./fetchinvoice";
import type { FundchannelRequest, FundchannelResponse } from "./fundchannel";
import type { FundchannelCancelRequest, FundchannelCancelResponse } from "./fundchannel_cancel";
import type { FundchannelCompleteRequest, FundchannelCompleteResponse } from "./fundchannel_complete";
import type { FundchannelStartRequest, FundchannelStartResponse } from "./fundchannel_start";
import type { FunderupdateRequest, FunderupdateResponse } from "./funderupdate";
import type { FundpsbtRequest, FundpsbtResponse } from "./fundpsbt";
import type { GetinfoRequest, GetinfoResponse } from "./getinfo";
import type { GetlogRequest, GetlogResponse } from "./getlog";
import type { GetrouteRequest, GetrouteResponse } from "./getroute";
import type { GetsharedsecretRequest, GetsharedsecretResponse } from "./getsharedsecret";
import type { HelpRequest, HelpResponse } from "./help";
import type { InvoiceRequest, InvoiceResponse } from "./invoice";
import type { KeysendRequest, KeysendResponse } from "./keysend";
import type { ListchannelsRequest, ListchannelsResponse } from "./listchannels";
import type { ListconfigsRequest, ListconfigsResponse } from "./listconfigs";
import type { ListdatastoreRequest, ListdatastoreResponse } from "./listdatastore";
import type { ListforwardsRequest, ListforwardsResponse } from "./listforwards";
import type { ListfundsRequest, ListfundsResponse } from "./listfunds";
import type { ListinvoicesRequest, ListinvoicesResponse } from "./listinvoices";
import type { ListnodesRequest, Node, ListnodesResponse } from "./listnodes";
import type { ListoffersRequest, ListoffersResponse } from "./listoffers";
import type { ListpaysRequest, ListpaysResponse } from "./listpays";
import type { ListpeersRequest, ListpeersResponse } from "./listpeers";
import type { ListsendpaysRequest, ListsendpaysResponse } from "./listsendpays";
import type { ListtransactionsRequest, ListtransactionsResponse } from "./listtransactions";
import type { MultifundchannelRequest, MultifundchannelResponse } from "./multifundchannel";
import type { MultiwithdrawRequest, MultiwithdrawResponse } from "./multiwithdraw";
import type { NotificationsRequest, NotificationsResponse } from "./notifications";
import type { OfferRequest, OfferResponse } from "./offer";
import type { OfferoutRequest, OfferoutResponse } from "./offerout";
import type { OpenchannelAbortRequest, OpenchannelAbortResponse } from "./openchannel_abort";
import type { OpenchannelBumpRequest, OpenchannelBumpResponse } from "./openchannel_bump";
import type { OpenchannelInitRequest, OpenchannelInitResponse } from "./openchannel_init";
import type { OpenchannelSignedRequest, OpenchannelSignedResponse } from "./openchannel_signed";
import type { OpenchannelUpdateRequest, OpenchannelUpdateResponse } from "./openchannel_update";
import type { ParsefeerateRequest, ParsefeerateResponse } from "./parsefeerate";
import type { PayRequest, PayResponse } from "./pay";
import type { PingRequest, PingResponse } from "./ping";
import type { PluginRequest, PluginResponse } from "./plugin";
import type { ReserveinputsRequest, ReserveinputsResponse } from "./reserveinputs";
import type { SendcustommsgRequest, SendcustommsgResponse } from "./sendcustommsg";
import type { SendinvoiceRequest, SendinvoiceResponse } from "./sendinvoice";
import type { SendonionRequest, SendonionResponse } from "./sendonion";
import type { SendonionmessageRequest, SendonionmessageResponse } from "./sendonionmessage";
import type { SendpayRequest, SendpayResponse } from "./sendpay";
import type { SendpsbtRequest, SendpsbtResponse } from "./sendpsbt";
import type { SetchannelRequest, SetchannelResponse } from "./setchannel";
import type { SetchannelfeeRequest, SetchannelfeeResponse } from "./setchannelfee";
import type { SignmessageRequest, SignmessageResponse } from "./signmessage";
import type { SignpsbtRequest, SignpsbtResponse } from "./signpsbt";
import type { StopRequest, StopResponse } from "./stop";
import type { TxdiscardRequest, TxdiscardResponse } from "./txdiscard";
import type { TxprepareRequest, TxprepareResponse } from "./txprepare";
import type { TxsendRequest, TxsendResponse } from "./txsend";
import type { UnreserveinputsRequest, UnreserveinputsResponse } from "./unreserveinputs";
import type { UtxopsbtRequest, UtxopsbtResponse } from "./utxopsbt";
import type { WaitanyinvoiceRequest, WaitanyinvoiceResponse } from "./waitanyinvoice";
import type { WaitblockheightRequest, WaitblockheightResponse } from "./waitblockheight";
import type { WaitinvoiceRequest, WaitinvoiceResponse } from "./waitinvoice";
import type { WaitsendpayRequest, WaitsendpayResponse } from "./waitsendpay";
import type { WithdrawRequest, WithdrawResponse } from "./withdraw";

export const transformMap: any = {
  "createinvoice": {
    "amount_msat": "msat",
    "amount_received_msat": "msat"
  },
  "decode": {
    "amount_msat": "msat"
  },
  "decodepay": {
    "amount_msat": "msat"
  },
  "delinvoice": {
    "amount_msat": "msat",
    "amount_received_msat": "msat"
  },
  "delpay": {
    "payments": {
      "amount_sent_msat": "msat",
      "amount_msat": "msat"
    }
  },
  "fetchinvoice": {
    "changes": {
      "msat": "msat"
    }
  },
  "funderupdate": {
    "min_their_funding_msat": "msat",
    "max_their_funding_msat": "msat",
    "per_channel_min_msat": "msat",
    "per_channel_max_msat": "msat",
    "reserve_tank_msat": "msat",
    "lease_fee_base_msat": "msat",
    "channel_fee_max_base_msat": "msat"
  },
  "fundpsbt": {
    "excess_msat": "msat"
  },
  "getinfo": {
    "fees_collected_msat": "msat"
  },
  "getroute": {
    "route": {
      "amount_msat": "msat"
    }
  },
  "keysend": {
    "amount_msat": "msat",
    "amount_sent_msat": "msat"
  },
  "listchannels": {
    "channels": {
      "amount_msat": "msat",
      "htlc_minimum_msat": "msat",
      "htlc_maximum_msat": "msat"
    }
  },
  "listconfigs": {
    "max-dust-htlc-exposure-msat": "msat"
  },
  "listforwards": {
    "forwards": {
      "in_msat": "msat",
      "fee_msat": "msat",
      "out_msat": "msat"
    }
  },
  "listfunds": {
    "outputs": {
      "amount_msat": "msat"
    },
    "channels": {
      "our_amount_msat": "msat",
      "amount_msat": "msat"
    }
  },
  "listinvoices": {
    "invoices": {
      "amount_msat": "msat",
      "amount_received_msat": "msat"
    }
  },
  "listnodes": {
    "nodes": {
      "option_will_fund": {
        "lease_fee_base_msat": "msat",
        "channel_fee_max_base_msat": "msat"
      }
    }
  },
  "listpays": {
    "pays": {
      "amount_msat": "msat",
      "amount_sent_msat": "msat"
    }
  },
  "listpeers": {
    "peers": {
      "channels": {
        "inflight": {
          "total_funding_msat": "msat",
          "our_funding_msat": "msat"
        },
        "funding": {
          "local_msat": "msat",
          "remote_msat": "msat",
          "pushed_msat": "msat"
        },
        "to_us_msat": "msat",
        "min_to_us_msat": "msat",
        "max_to_us_msat": "msat",
        "total_msat": "msat",
        "fee_base_msat": "msat",
        "dust_limit_msat": "msat",
        "max_total_htlc_in_msat": "msat",
        "their_reserve_msat": "msat",
        "our_reserve_msat": "msat",
        "spendable_msat": "msat",
        "receivable_msat": "msat",
        "minimum_htlc_in_msat": "msat",
        "minimum_htlc_out_msat": "msat",
        "maximum_htlc_out_msat": "msat",
        "in_offered_msat": "msat",
        "in_fulfilled_msat": "msat",
        "out_offered_msat": "msat",
        "out_fulfilled_msat": "msat",
        "htlcs": {
          "amount_msat": "msat"
        },
        "last_tx_fee_msat": "msat"
      }
    }
  },
  "listsendpays": {
    "payments": {
      "amount_msat": "msat",
      "amount_sent_msat": "msat"
    }
  },
  "listtransactions": {
    "transactions": {
      "outputs": {
        "msat": "msat"
      }
    }
  },
  "pay": {
    "amount_msat": "msat",
    "amount_sent_msat": "msat"
  },
  "sendinvoice": {
    "amount_msat": "msat",
    "amount_received_msat": "msat"
  },
  "sendonion": {
    "amount_msat": "msat",
    "amount_sent_msat": "msat"
  },
  "sendpay": {
    "amount_msat": "msat",
    "amount_sent_msat": "msat"
  },
  "setchannel": {
    "channels": {
      "fee_base_msat": "msat",
      "minimum_htlc_out_msat": "msat",
      "maximum_htlc_out_msat": "msat"
    }
  },
  "utxopsbt": {
    "excess_msat": "msat"
  },
  "waitanyinvoice": {
    "amount_msat": "msat",
    "amount_received_msat": "msat"
  },
  "waitinvoice": {
    "amount_msat": "msat",
    "amount_received_msat": "msat"
  },
  "waitsendpay": {
    "amount_msat": "msat",
    "amount_sent_msat": "msat"
  }
}


function transformOne(element: string, to: "msat" | string): string | number | bigint {
  if(!element) {
    return element;
  }
  if(to === "msat") {
    // If element ends with msat, remove it and convert to bigint
    return BigInt(element.endsWith("msat") ? element.slice(0, -4) : element);
  }
  throw new Error("Transform not supported");
}

export function transform<ReturnType = unknown>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transformMapData: any,
): ReturnType {
  if(typeof transformMapData === "string") return transformOne(data, transformMapData) as unknown as ReturnType;
  let key: string | Record<string, string> | Record<string, Record<string, string>>;
  for(key of Object.keys(transformMapData)) {
    if(!data[key]) continue;
    if(Array.isArray(data[key])) {
      //transformMapData[key] is an object.
      // For every key of that object, transform the value by converting every array element which matches the key
      // with _transformOne
      // data[key] is an array of objects
      data[key] = data[key].map((obj: Record<string, string | number | bigint>) => {
        for(const objKey of Object.keys(transformMapData[key as string])) {
          if(!obj || !obj[objKey] || !transformMapData[key as string][objKey]) continue;
          obj[objKey] = transform(obj[objKey] as string, transformMapData[key as string][objKey]);
        }
        return obj;
      });
    } else if(typeof data[key] !== "string") {
      // data[key] is an object
      //transformMapData[key] is an object.
      // For every key of transformMapData[key], transform the corresponing value of data[key] by converting with _transformOne
      for(const objKey of Object.keys(transformMapData[key as string])) {
        if(!data[key][objKey]) continue;
        data[key][objKey] = transform(data[key][objKey] as string, transformMapData[key as string][objKey]);
      }
    } else {
      data[key] = transformOne(data[key], transformMapData[key as string]);
    }
  }
    return data;
}
export default abstract class RPCClient extends EventEmitter {
  abstract call<ReturnType extends {} = {}>(method: string, params: unknown): Promise<ReturnType>

  /**
   * The **addgossip** RPC command injects a hex-encoded gossip message into
   * the gossip daemon.  It may return an error if it is malformed, or may
   * update its internal state using the gossip message.
   * 
   * Note that currently some paths will still silently reject the gossip: it
   * is best effort.
   * 
   * This is particularly used by plugins which may receive channel_update
   * messages within error replies.
  */
  addgossip(payload: AddgossipRequest): Promise<AddgossipResponse> {
    return this.call<AddgossipResponse>("addgossip", payload);
  }
    
  /**
   * The **autocleaninvoice** RPC command sets up automatic cleaning of
   * expired invoices.
   * 
   * Autoclean will be done every *cycle_seconds* seconds. Setting
   * *cycle_seconds* to 0 disables autoclean. If not specified, this
   * defaults to 3600 (one hour).
   * 
   * Every autoclean cycle, expired invoices, which have already been expired
   * for at least *expired_by* seconds, will be deleted. If *expired_by* is
   * not specified, this defaults to 86400 (one day).
   * 
   * On startup of the daemon, no autoclean is set up.
  */
  autocleaninvoice(payload: AutocleaninvoiceRequest = {}): Promise<AutocleaninvoiceResponse> {
    return this.call<AutocleaninvoiceResponse>("autocleaninvoice", payload);
  }
    
  /**
   * The **check** RPC command verifies another command's parameters without
   * running it.
   * 
   * The *command_to_check* is the name of the relevant command.
   * 
   * *parameters* is the command's parameters.
   * 
   * This does not guarantee successful execution of the command in all
   * cases. For example, a call to lightning-getroute(7) may still fail to
   * find a route even if checking the parameters succeeds.
  */
  check(payload: CheckRequest): Promise<CheckResponse> {
    return this.call<CheckResponse>("check", payload);
  }
    
  /**
   * The **checkmessage** RPC command is the counterpart to
   * **signmessage**: given a node id (*pubkey*), signature (*zbase*) and a
   * *message*, it verifies that the signature was generated by that node
   * for that message (more technically: by someone who knows that node's
   * secret).
   * 
   * As a special case, if *pubkey* is not specified, we will try every
   * known node key (as per *listnodes*), and verification succeeds if it
   * matches for any one of them.  Note: this is implemented far more
   * efficiently than trying each one, so performance is not a concern.
  */
  checkmessage(payload: CheckmessageRequest): Promise<CheckmessageResponse> {
    return this.call<CheckmessageResponse>("checkmessage", payload);
  }
    
  /**
   * The **close** RPC command attempts to close the channel cooperatively
   * with the peer, or unilaterally after *unilateraltimeout*, and the
   * to-local output will be sent to the address specified in *destination*.
   * 
   * If the given *id* is a peer ID (66 hex digits as a string), then it
   * applies to the active channel of the direct peer corresponding to the
   * given peer ID. If the given *id* is a channel ID (64 hex digits as a
   * string, or the short channel ID *blockheight:txindex:outindex* form),
   * then it applies to that channel.
   * 
   * If *unilateraltimeout* is not zero, the **close** command will
   * unilaterally close the channel when that number of seconds is reached.
   * If *unilateraltimeout* is zero, then the **close** command will wait
   * indefinitely until the peer is online and can negotiate a mutual close.
   * The default is 2 days (172800 seconds).
   * 
   * The *destination* can be of any Bitcoin accepted type, including bech32.
   * If it isn't specified, the default is a c-lightning wallet address.  If
   * the peer hasn't offered the `option_shutdown_anysegwit` feature, then
   * taproot addresses (or other v1+ segwit) are not allowed.  Tell your
   * friends to upgrade!
   * 
   * The *fee_negotiation_step* parameter controls how closing fee
   * negotiation is performed assuming the peer proposes a fee that is
   * different than our estimate.  (Note that modern peers use the quick-close protocol which does not allow negotiation: see *feerange* instead).
   * 
   * On every negotiation step we must give up
   * some amount from our proposal towards the peer's proposal. This parameter
   * can be an integer in which case it is interpreted as number of satoshis
   * to step at a time. Or it can be an integer followed by "%" to designate
   * a percentage of the interval to give up. A few examples, assuming the peer
   * proposes a closing fee of 3000 satoshi and our estimate shows it must be 4000:
   * * "10": our next proposal will be 4000-10=3990.
   * * "10%": our next proposal will be 4000-(10% of (4000-3000))=3900.
   * * "1": our next proposal will be 3999. This is the most extreme case when we
   * insist on our fee as much as possible.
   * * "100%": our next proposal will be 3000. This is the most relaxed case when
   * we quickly accept the peer's proposal.
   *  
   * The default is "50%".
   * 
   * *wrong_funding_txid* can only be specified if both sides have offered
   * the "shutdown_wrong_funding" feature (enabled by the
   * **experimental-shutdown-wrong-funding** option): it must be a
   * transaction id followed by a colon then the output number.  Instead of
   * negotiating a shutdown to spend the expected funding transaction, the
   * shutdown transaction will spend this output instead.  This is only
   * allowed if this peer opened the channel and the channel is unused: it
   * can rescue openings which have been manually miscreated.
   * 
   * *force_lease_closed* if the channel has funds leased to the peer
   * (option_will_fund), we prevent initiation of a mutual close
   * unless this flag is passed in. Defaults to false.
   * 
   * *feerange* is an optional array [ *min*, *max* ], indicating the
   * minimum and maximum feerates to offer: the peer will obey these if it
   * supports the quick-close protocol.  *slow* and *unilateral_close* are
   * the defaults.
   * 
   * Rates are one of the strings *urgent* (aim for next block), *normal*
   * (next 4 blocks or so) or *slow* (next 100 blocks or so) to use
   * lightningd's internal estimates, or one of the names from
   * lightning-feerates(7).  Otherwise, they can be numbers with
   * an optional suffix: *perkw* means the number is interpreted as
   * satoshi-per-kilosipa (weight), and *perkb* means it is interpreted
   * bitcoind-style as satoshi-per-kilobyte. Omitting the suffix is
   * equivalent to *perkb*.
   * 
   * Note that the maximum fee will be capped at the final commitment
   * transaction fee (unless the experimental anchor-outputs option is
   * negotiated).
   * 
   * The peer needs to be live and connected in order to negotiate a mutual
   * close. The default of unilaterally closing after 48 hours is usually a
   * reasonable indication that you can no longer contact the peer.
   * 
   * NOTES
   * -----
   * 
   * Prior to 0.7.2, **close** took two parameters: *force* and *timeout*.
   * *timeout* was the number of seconds before *force* took effect (default,
   * 30), and *force* determined whether the result was a unilateral close or
   * an RPC error (default). Even after the timeout, the channel would be
   * closed if the peer reconnected.
   * 
   * NOTIFICATIONS
   * -------------
   * Notifications may be returned indicating what is going on, especially
   * if the peer is offline and we are waiting.
  */
  close(payload: CloseRequest): Promise<CloseResponse> {
    return this.call<CloseResponse>("close", payload);
  }
    
  /**
   * The **connect** RPC command establishes a new connection with another
   * node in the Lightning Network.
   * 
   * *id* represents the target node's public key. As a convenience, *id* may
   * be of the form *id@host* or *id@host:port*. In this case, the *host* and
   * *port* parameters must be omitted.
   * 
   * *host* is the peer's hostname or IP address.
   * 
   * If not specified, the *port* defaults to 9735.
   * 
   * If *host* is not specified (or doesn't work), the connection will be attempted to an IP
   * belonging to *id* obtained through gossip with other already connected
   * peers.
   * This can fail if your C-lightning node is a fresh install that has not
   * connected to any peers yet (your node has no gossip yet),
   * or if the target *id* is a fresh install that has no channels yet
   * (nobody will gossip about a node until it has one published channel).
   * 
   * If *host* begins with a *\/* it is interpreted as a local path, and the
   * connection will be made to that local socket (see **bind-addr** in
   * lightningd-config(5)).
   * 
   * Connecting to a node is just the first step in opening a channel with
   * another node. Once the peer is connected a channel can be opened with
   * lightning-fundchannel(7).
   * 
   * If there are active channels with the peer, **connect** returns once
   * all the subdaemons are in place to handle the channels, not just once
   * it's connected.
  */
  connect(payload: ConnectRequest): Promise<ConnectResponse> {
    return this.call<ConnectResponse>("connect", payload);
  }
    
  /**
   * The **createinvoice** RPC command signs and saves an invoice into the
   * database.
   * 
   * The *invstring* parameter is of bolt11 form, but without the final
   * signature appended.  Minimal sanity checks are done.  (Note: if
   * **experimental-offers** is enabled, *invstring* can actually be an
   * unsigned bolt12 invoice).
   * 
   * The *label* must be a unique string or number (which is treated as a
   * string, so "01" is different from "1"); it is never revealed to other
   * nodes on the lightning network, but it can be used to query the status
   * of this invoice.
   * 
   * The *preimage* is the preimage to supply upon successful payment of
   * the invoice.
  */
  createinvoice(payload: CreateinvoiceRequest): Promise<CreateinvoiceResponse> {
    return this.call<CreateinvoiceResponse>("createinvoice", payload);
  }
    
  /**
   * The **createonion** RPC command allows the caller to create a custom onion
   * with custom payloads at each hop in the route. A custom onion can be used to
   * implement protocol extensions that are not supported by c-lightning directly.
   * 
   * The *hops* parameter is a JSON list of dicts, each specifying a node and the
   * payload destined for that node. The following is an example of a 3 hop onion:
   * 
   * ```json
   * [
   * 	{
   * 		"pubkey": "022d223620a359a47ff7f7ac447c85c46c923da53389221a0054c11c1e3ca31d59",
   * 		"payload": "00000067000001000100000000000003e90000007b000000000000000000000000000000000000000000000000"
   * 	}, {
   * 		"pubkey": "035d2b1192dfba134e10e540875d366ebc8bc353d5aa766b80c090b39c3a5d885d",
   * 		"payload": "00000067000003000100000000000003e800000075000000000000000000000000000000000000000000000000"
   * 	}, {
   * 		"style": "legacy",
   * 		"pubkey": "0382ce59ebf18be7d84677c2e35f23294b9992ceca95491fcf8a56c6cb2d9de199",
   * 		"payload": "00000067000003000100000000000003e800000075000000000000000000000000000000000000000000000000"
   * 	}
   * ]
   * ```
   * 
   * The *hops* parameter is very similar to the result from `getroute` however it
   * needs to be modified slightly. The following is the `getroute` response from
   * which the above *hops* parameter was generated:
   * 
   * ```json
   * [
   * 	{
   * 		"id": "022d223620a359a47ff7f7ac447c85c46c923da53389221a0054c11c1e3ca31d59",
   * 		"channel": "103x2x1",
   * 		"direction": 1,
   * 		"msatoshi": 1002,
   * 		"amount_msat": "1002msat",
   * 		"delay": 21,
   * 	}, {
   * 		"id": "035d2b1192dfba134e10e540875d366ebc8bc353d5aa766b80c090b39c3a5d885d",
   * 		"channel": "103x1x1",
   * 		"direction": 0,
   * 		"msatoshi": 1001,
   * 		"amount_msat": "1001msat",
   * 		"delay": 15,
   * 	}, {
   * 		"id": "0382ce59ebf18be7d84677c2e35f23294b9992ceca95491fcf8a56c6cb2d9de199",
   * 		"channel": "103x3x1",
   * 		"direction": 0,
   * 		"msatoshi": 1000,
   * 		"amount_msat": "1000msat",
   * 		"delay": 9,
   * 	}
   * ]
   * ```
   * 
   *  - Notice that the payload in the *hops* parameter is the hex-encoded version
   *    of the parameters in the `getroute` response.
   *  - Except for the pubkey, the values are shifted left by one, i.e., the 1st
   *    payload in `createonion` corresponds to the 2nd set of values from `getroute`.
   *  - The final payload is a copy of the last payload sans `channel`
   * 
   * These rules are directly derived from the onion construction. Please refer
   * [BOLT 04][bolt04] for details and rationale.
   * 
   * The *assocdata* parameter specifies the associated data that the onion should
   * commit to. If the onion is to be used to send a payment later it MUST match
   * the `payment_hash` of the payment in order to be valid.
   * 
   * The optional *session_key* parameter can be used to specify a secret that is
   * used to generate the shared secrets used to encrypt the onion for each hop. It
   * should only be used for testing or if a specific shared secret is
   * important. If not specified it will be securely generated internally, and the
   * shared secrets will be returned.
   * 
   * The optional *onion_size* parameter specifies a size different from the default
   * payment onion (1300 bytes). May be used for custom protocols like trampoline
   * routing.
  */
  createonion(payload: CreateonionRequest): Promise<CreateonionResponse> {
    return this.call<CreateonionResponse>("createonion", payload);
  }
    
  /**
   * The **datastore** RPC command allows plugins to store data in the
   * c-lightning database, for later retrieval.
   * 
   * *key* is an array of values (though a single value is treated as a
   * one-element array), to form a hierarchy.  Using the first element of
   * the key as the plugin name (e.g. `[ "summary" ]`) is recommended.
   * A key can either have children or a value, never both: parents are
   * created and removed automatically.
   * 
   * *mode* is one of "must-create" (default, fails if it already exists),
   * "must-replace" (fails if it doesn't already exist),
   * "create-or-replace" (never fails), "must-append" (must already exist,
   * append this to what's already there) or "create-or-append" (append if
   * anything is there, otherwise create).
   * 
   * *generation*, if specified, means that the update will fail if the
   * previously-existing data is not exactly that generation.  This allows
   * for simple atomicity.  This is only legal with *mode* "must-replace"
   * or "must-append".
  */
  datastore(payload: DatastoreRequest): Promise<DatastoreResponse> {
    return this.call<DatastoreResponse>("datastore", payload);
  }
    
  /**
   * The **decode** RPC command checks and parses a *bolt11* or *bolt12*
   * string (optionally prefixed by `lightning:` or `LIGHTNING:`) as
   * specified by the BOLT 11 and BOLT 12 specifications.  It may decode
   * other formats in future.
  */
  decode(payload: DecodeRequest): Promise<DecodeResponse> {
    return this.call<DecodeResponse>("decode", payload);
  }
    
  /**
   * The **decodepay** RPC command checks and parses a *bolt11* string as
   * specified by the BOLT 11 specification.
  */
  decodepay(payload: DecodepayRequest): Promise<DecodepayResponse> {
    return this.call<DecodepayResponse>("decodepay", payload);
  }
    
  /**
   * The **deldatastore** RPC command allows plugins to delete data it has
   * stored in the c-lightning database.
   * 
   * The command fails if the *key* isn't present, or if *generation*
   * is specified and the generation of the data does not exactly match.
  */
  deldatastore(payload: DeldatastoreRequest): Promise<DeldatastoreResponse> {
    return this.call<DeldatastoreResponse>("deldatastore", payload);
  }
    
  /**
   * The **delexpiredinvoice** RPC command removes all invoices that have
   * expired on or before the given *maxexpirytime*.
   * 
   * If *maxexpirytime* is not specified then all expired invoices are
   * deleted.
  */
  delexpiredinvoice(payload: DelexpiredinvoiceRequest = {}): Promise<DelexpiredinvoiceResponse> {
    return this.call<DelexpiredinvoiceResponse>("delexpiredinvoice", payload);
  }
    
  /**
   * The **delinvoice** RPC command removes an invoice with *status* as given
   * in **listinvoices**, or with *desconly* set, removes its description.
   * 
   * The caller should be particularly aware of the error case caused by the
   * *status* changing just before this command is invoked!
   * 
   * If *desconly* is set, the invoice is not deleted, but has its
   * description removed (this can save space with very large descriptions,
   * as would be used with lightning-invoice(7) *deschashonly*.
  */
  delinvoice(payload: DelinvoiceRequest): Promise<DelinvoiceResponse> {
    return this.call<DelinvoiceResponse>("delinvoice", payload);
  }
    
  /**
   * The **delpay** RPC command deletes a payment with the given `payment_hash` if its status is either `complete` or `failed`. Deleting a `pending` payment is an error.
   * 
   * - *payment_hash*: The unique identifier of a payment.
   * - *status*: Expected status of the payment. 
   * Only deletes if the payment status matches.
   * 
   * EXAMPLE JSON REQUEST
   * ------------
   * ```json
   * {
   *   "id": 82,
   *   "method": "delpay",
   *   "params": {
   *     "payment_hash": "4fa2f1b001067ec06d7f95b8695b8acd9ef04c1b4d1110e3b94e1fa0687bb1e0",
   *     "status": "complete"
   *   }
   * }
   * ```
  */
  delpay(payload: DelpayRequest): Promise<DelpayResponse> {
    return this.call<DelpayResponse>("delpay", payload);
  }
    
  /**
   * The **disableoffer** RPC command disables an offer, so that no further
   * invoices will be given out (if made with lightning-offer(7)) or
   * invoices accepted  (if made with lightning-offerout(7)).
   * 
   * We currently don't support deletion of offers, so offers are not
   * forgotten entirely (there may be invoices which refer to this offer).
   * 
   * EXAMPLE JSON REQUEST
   * ------------
   * ```json
   * {
   *   "id": 82,
   *   "method": "disableoffer",
   *   "params": {
   *     "offer_id": "713a16ccd4eb10438bdcfbc2c8276be301020dd9d489c530773ba64f3b33307d ",
   *   }
   * }
   * ```
  */
  disableoffer(payload: DisableofferRequest): Promise<DisableofferResponse> {
    return this.call<DisableofferResponse>("disableoffer", payload);
  }
    
  /**
   * The disconnect RPC command closes an existing connection to a peer,
   * identified by *id*, in the Lightning Network, as long as it doesn't have
   * an active channel. If *force* is set then it will disconnect even with
   * an active channel.
   * 
   * The *id* can be discovered in the output of the listpeers command, which
   * returns a set of peers:
   * 
   *     {
   *          "peers": [
   *               {
   *                    "id": "0563aea81...",
   *                    "connected": true,
   *                    ...
   *               }
   *          ]
   *     }
   * 
   * Passing the *id* attribute of a peer to *disconnect* will terminate the
   * connection.
  */
  disconnect(payload: DisconnectRequest): Promise<DisconnectResponse> {
    return this.call<DisconnectResponse>("disconnect", payload);
  }
    
  /**
   * The **feerates** command returns the feerates that C-lightning will use.
   * The feerates will be based on the recommended feerates from the backend.
   * The backend may fail to provide estimates, but if it was able to provide
   * estimates in the past, C-lightning will continue to use those for a while.
   * C-lightning will also smoothen feerate estimations from the backend.
   * 
   * *style* is either of the two strings:
   * 
   * * *perkw* - provide feerate in units of satoshis per 1000 weight.
   * * *perkb* - provide feerate in units of satoshis per 1000 virtual bytes.
   * 
   * Bitcoin transactions have non-witness and witness bytes:
   * 
   * * Non-witness bytes count as 4 weight, 1 virtual byte.
   *   All bytes other than SegWit witness count as non-witness bytes.
   * * Witness bytes count as 1 weight, 0.25 virtual bytes.
   * 
   * Thus, all *perkb* feerates will be exactly 4 times *perkw* feerates.
   * 
   * To compute the fee for a transaction, multiply its weight or virtual bytes
   * by the appropriate *perkw* or *perkw* feerate
   * returned by this command,
   * then divide by 1000.
   * 
   * There is currently no way to change these feerates from the RPC.
   * If you need custom control over onchain feerates,
   * you will need to provide your own plugin
   * that replaces the `bcli` plugin backend.
   * For commands like lightning-withdraw(7) or lightning-fundchannel(7) you
   * can provide a preferred feerate directly as a parameter,
   * which will override the recommended feerates returned by **feerates**.
  */
  feerates(payload: FeeratesRequest): Promise<FeeratesResponse> {
    return this.call<FeeratesResponse>("feerates", payload);
  }
    
  /**
   * The **fetchinvoice** RPC command contacts the issuer of an *offer* to get
   * an actual invoice that can be paid.  It highlights any changes between the
   * offer and the returned invoice.
   * 
   * If **fetchinvoice-noconnect** is not specified in the configuation, it
   * will connect to the destination in the (currently common!) case where it
   * cannot find a route which supports `option_onion_messages`.
   * 
   * The offer must not contain *send_invoice*; see lightning-sendinvoice(7).
   * 
   * *msatoshi* is required if the *offer* does not specify
   * an amount at all, otherwise it is not allowed.
   * 
   * *quantity* is is required if the *offer* specifies
   * *quantity_min* or *quantity_max*, otherwise it is not allowed.
   * 
   * *recurrence_counter* is required if the *offer*
   * specifies *recurrence*, otherwise it is not allowed.
   * *recurrence_counter* should first be set to 0, and incremented for
   * each successive invoice in a given series.
   * 
   * *recurrence_start* is required if the *offer*
   * specifies *recurrence_base* with *start_any_period* set, otherwise it
   * is not allowed.  It indicates what period number to start at.
   * 
   * *recurrence_label* is required if *recurrence_counter* is set, and
   * otherwise is not allowed.  It must be the same as prior fetchinvoice
   * calls for the same recurrence, as it is used to link them together.
   * 
   * *timeout* is an optional timeout; if we don't get a reply before this
   * we fail (default, 60 seconds).
   * 
   * *payer_note* is an optional payer note to include in the fetched invoice.
  */
  fetchinvoice(payload: FetchinvoiceRequest): Promise<FetchinvoiceResponse> {
    return this.call<FetchinvoiceResponse>("fetchinvoice", payload);
  }
    
  /**
   * The **fundchannel** RPC command opens a payment channel with a peer by
   * committing a funding transaction to the blockchain as defined in BOLT
   * #2.
   * If not already connected, **fundchannel** will automatically attempt
   * to connect if C-lightning knows a way to contact the node (either from
   * normal gossip, or from a previous **connect** call).
   * This auto-connection can fail if C-lightning does not know how to contact
   * the target node; see lightning-connect(7).
   * Once the
   * transaction is confirmed, normal channel operations may begin. Readiness
   * is indicated by **listpeers** reporting a *state* of `CHANNELD_NORMAL`
   * for the channel.
   * 
   * *id* is the peer id obtained from **connect**.
   * 
   * *amount* is the amount in satoshis taken from the internal wallet to
   * fund the channel. The string *all* can be used to specify all available
   * funds (or 16777215 satoshi if more is available and large channels were not negotiated with the peer). Otherwise, it is in
   * satoshi precision; it can be a whole number, a whole number ending in
   * *sat*, a whole number ending in *000msat*, or a number with 1 to 8
   * decimal places ending in *btc*. The value cannot be less than the dust
   * limit, currently set to 546, nor more than 16777215 satoshi (unless large
   * channels were negotiated with the peer).
   * 
   * *feerate* is an optional feerate used for the opening transaction and as
   * initial feerate for commitment and HTLC transactions. It can be one of
   * the strings *urgent* (aim for next block), *normal* (next 4 blocks or
   * so) or *slow* (next 100 blocks or so) to use lightningd's internal
   * estimates: *normal* is the default.
   * 
   * Otherwise, *feerate* is a number, with an optional suffix: *perkw* means
   * the number is interpreted as satoshi-per-kilosipa (weight), and *perkb*
   * means it is interpreted bitcoind-style as satoshi-per-kilobyte. Omitting
   * the suffix is equivalent to *perkb*.
   * 
   * *announce* is an optional flag that triggers whether to announce this
   * channel or not. Defaults to `true`. An unannounced channel is considered
   * private.
   * 
   * *minconf* specifies the minimum number of confirmations that used
   * outputs should have. Default is 1.
   * 
   * *utxos* specifies the utxos to be used to fund the channel, as an array
   * of "txid:vout".
   * 
   * *push_msat* is the amount of millisatoshis to push to the channel peer at
   * open. Note that this is a gift to the peer -- these satoshis are
   * added to the initial balance of the peer at channel start and are largely
   * unrecoverable once pushed.
   * 
   * *close_to* is a Bitcoin address to which the channel funds should be sent to
   * on close. Only valid if both peers have negotiated `option_upfront_shutdown_script`.
   * Returns `close_to` set to closing script iff is negotiated.
   * 
   * *request_amt* is an amount of liquidity you'd like to lease from the peer.
   * If peer supports `option_will_fund`, indicates to them to include this
   * much liquidity into the channel. Must also pass in *compact_lease*.
   * 
   * *compact_lease* is a compact represenation of the peer's expected
   * channel lease terms. If the peer's terms don't match this set, we will
   * fail to open the channel.
   * 
   * 
   * 
   * This example shows how to use lightning-cli to open new channel with peer 03f...fc1 from one whole utxo bcc1...39c:0
   * (you can use **listfunds** command to get txid and vout):
   * 
   * 	lightning-cli -k fundchannel id=03f...fc1 amount=all feerate=normal utxos='["bcc1...39c:0"]'
  */
  fundchannel(payload: FundchannelRequest): Promise<FundchannelResponse> {
    return this.call<FundchannelResponse>("fundchannel", payload);
  }
    
  /**
   * `fundchannel_cancel` is a lower level RPC command. It allows channel opener
   * to cancel a channel before funding broadcast with a connected peer.
   * 
   * *id* is the node id of the remote peer with which to cancel.
   * 
   * Note that the funding transaction MUST NOT be broadcast before
   * `fundchannel_cancel`. Broadcasting transaction before `fundchannel_cancel`
   * WILL lead to unrecoverable loss of funds.
   * 
   * If `fundchannel_cancel` is called after `fundchannel_complete`, the remote
   * peer may disconnect when command succeeds. In this case, user need to connect
   * to remote peer again before opening channel.
  */
  fundchannelCancel(payload: FundchannelCancelRequest): Promise<FundchannelCancelResponse> {
    return this.call<FundchannelCancelResponse>("fundchannel_cancel", payload);
  }
    
  /**
   * `fundchannel_complete` is a lower level RPC command. It allows a user to
   * complete an initiated channel establishment with a connected peer.
   * 
   * *id* is the node id of the remote peer.
   * 
   * *psbt* is the transaction to use for funding (does not need to be
   * signed but must be otherwise complete).
   * 
   * Note that the funding transaction MUST NOT be broadcast until after
   * channel establishment has been successfully completed, as the commitment
   * transactions for this channel are not secured until this command
   * successfully completes. Broadcasting transaction before can lead to
   * unrecoverable loss of funds.
  */
  fundchannelComplete(payload: FundchannelCompleteRequest): Promise<FundchannelCompleteResponse> {
    return this.call<FundchannelCompleteResponse>("fundchannel_complete", payload);
  }
    
  /**
   * `fundchannel_start` is a lower level RPC command. It allows a user to
   * initiate channel establishment with a connected peer.
   * 
   * *id* is the node id of the remote peer.
   * 
   * *amount* is the satoshi value that the channel will be funded at. This
   * value MUST be accurate, otherwise the negotiated commitment transactions
   * will not encompass the correct channel value.
   * 
   * *feerate* is an optional field. Sets the feerate for subsequent
   * commitment transactions: see **fundchannel**.
   * 
   * *announce* whether or not to announce this channel.
   * 
   * *close_to* is a Bitcoin address to which the channel funds should be sent to
   * on close. Only valid if both peers have negotiated `option_upfront_shutdown_script`.
   * Returns `close_to` set to closing script iff is negotiated.
   * 
   * *push_msat* is the amount of millisatoshis to push to the channel peer at
   * open. Note that this is a gift to the peer -- these satoshis are
   * added to the initial balance of the peer at channel start and are largely
   * unrecoverable once pushed.
   * 
   * Note that the funding transaction MUST NOT be broadcast until after
   * channel establishment has been successfully completed by running
   * `fundchannel_complete`, as the commitment transactions for this channel
   * are not secured until the complete command succeeds. Broadcasting
   * transaction before that can lead to unrecoverable loss of funds.
  */
  fundchannelStart(payload: FundchannelStartRequest): Promise<FundchannelStartResponse> {
    return this.call<FundchannelStartResponse>("fundchannel_start", payload);
  }
    
  /**
   * For channel open requests using
   * 
   * 
   * *policy*, *policy_mod* is the policy the funder plugin will use to decide
   * how much capital to commit to a v2 open channel request. There are three
   * policy options, detailed below: `match`, `available`, and `fixed`.
   * The *policy_mod* is the number or 'modification' to apply to the policy.
   * Default is (fixed, 0sats).
   * 
   * * `match` -- Contribute *policy_mod* percent of their requested funds.
   *    Valid *policy_mod* values are 0 to 200. If this is a channel lease
   *    request, we match based on their requested funds. If it is not a
   *    channel lease request (and *lease_only* is false), then we match
   *    their funding amount. Note: any lease match less than 100 will
   *    likely fail, as clients will not accept a lease less than their request.
   * * `available` -- Contribute *policy_mod* percent of our available
   *    node wallet funds. Valid *policy_mod* values are 0 to 100.
   * * `fixed` -- Contributes a fixed  *policy_mod* sats to v2 channel open requests.
   * 
   * Note: to maximize channel leases, best policy setting is (match, 100).
   * 
   * *leases_only* will only contribute funds to `option_will_fund` requests
   * which pay to lease funds. Defaults to false, will fund any v2 open request
   * using *policy* even if it's they're not seeking to lease funds. Note that
   * `option_will_fund` commits funds for 4032 blocks (~1mo). Must also set
   * *lease_fee_base_msat*, *lease_fee_basis*, *funding_weight*,
   * *channel_fee_max_base_msat*, and *channel_fee_max_proportional_thousandths*
   * to advertise available channel leases.
   * 
   * *min_their_funding_msat* is the minimum funding sats that we require in order
   * to activate our contribution policy to the v2 open.  Defaults to 10k sats.
   * 
   * *max_their_funding_msat* is the maximum funding sats that we will consider
   * to activate our contribution policy to the v2 open. Any channel open above this
   * will not be funded.  Defaults to no max (`UINT_MAX`).
   * 
   * *per_channel_min_msat* is the minimum amount that we will contribute to a
   * channel open. Defaults to 10k sats.
   * 
   * *per_channel_max_msat* is the maximum amount that we will contribute to a
   * channel open. Defaults to no max (`UINT_MAX`).
   * 
   * *reserve_tank_msat* is the amount of sats to leave available in the node wallet.
   * Defaults to zero sats.
   * 
   * *fuzz_percent* is a percentage to fuzz the resulting contribution amount by.
   * Valid values are 0 to 100. Note that turning this on with (match, 100) policy
   * will randomly fail `option_will_fund` leases, as most clients
   * expect an exact or greater match of their `requested_funds`.
   * Defaults to 0% (no fuzz).
   * 
   * *fund_probability* is the percent of v2 channel open requests to apply our
   * policy to. Valid values are integers from 0 (fund 0% of all open requests)
   * to 100 (fund every request). Useful for randomizing opens that receive funds.
   * Defaults to 100.
   * 
   * Setting any of the next 5 options will activate channel leases for this node,
   * and advertise these values via the lightning gossip network. If any one is set,
   * the other values will be the default.
   * 
   * *lease_fee_base_msat* is the flat fee for a channel lease. Node will
   * receive this much extra added to their channel balance, paid by the opening
   * node. Defaults to 2k sats. Note that the minimum is 1sat.
   * 
   * *lease_fee_basis* is a basis fee that's calculated as 1/10k of the total
   * requested funds the peer is asking for. Node will receive the total of
   * *lease_fee_basis* times requested funds / 10k satoshis added to their channel
   * balance, paid by the opening node.  Default is 0.65% (65 basis points)
   * 
   * *funding_weight* is used to calculate the fee the peer will compensate your
   * node for its contributing inputs to the funding transaction. The total fee
   * is calculated as the `open_channel2`.`funding_feerate_perkw` times this
   * *funding_weight* divided by 1000. Node will have this funding fee added
   * to their channel balance, paid by the opening node.  Default is
   * 2 inputs + 1 P2WPKH output.
   * 
   * *channel_fee_max_base_msat* is a commitment to a maximum
   * `channel_fee_base_msat` that your node will charge for routing payments
   * over this leased channel during the lease duration.  Default is 5k sats.
   * 
   * *channel_fee_max_proportional_thousandths* is a commitment to a maximum
   * `channel_fee_proportional_millionths` that your node will charge for
   * routing payments over this leased channel during the lease duration.
   * Note that it's denominated in 'thousandths'. A setting of `1` is equal
   * to 1k ppm; `5` is 5k ppm, etc.  Default is 100 (100k ppm).
   * 
   * *compact_lease* is a compact description of the channel lease params. When
   * opening a channel, passed in to `fundchannel` to indicate the terms we
   * expect from the peer.
  */
  funderupdate(payload: FunderupdateRequest = {}): Promise<FunderupdateResponse> {
    return this.call<FunderupdateResponse>("funderupdate", payload);
  }
    
  /**
   * `fundpsbt` is a low-level RPC command which creates a PSBT using unreserved
   * inputs in the wallet, optionally reserving them as well.
   * 
   * *satoshi* is the minimum satoshi value of the output(s) needed (or the
   * string "all" meaning use all unreserved inputs).  If a value, it can
   * be a whole number, a whole number ending in *sat*, a whole number
   * ending in *000msat*, or a number with 1 to 8 decimal places ending in
   * *btc*.
   * 
   * *feerate* can be one of the feerates listed in lightning-feerates(7),
   * or one of the strings *urgent* (aim for next block), *normal* (next 4
   * blocks or so) or *slow* (next 100 blocks or so) to use lightningd's
   * internal estimates.  It can also be a *feerate* is a number, with an
   * optional suffix: *perkw* means the number is interpreted as
   * satoshi-per-kilosipa (weight), and *perkb* means it is interpreted
   * bitcoind-style as satoshi-per-kilobyte. Omitting the suffix is
   * equivalent to *perkb*.
   * 
   * *startweight* is the weight of the transaction before *fundpsbt* has
   * added any inputs.
   * 
   * *minconf* specifies the minimum number of confirmations that used
   * outputs should have. Default is 1.
   * 
   * *reserve* is either boolean or a number: if *true* or a non-zero
   * number then *reserveinputs* is called (successfully, with
   * *exclusive* true) on the returned PSBT for this number of blocks (or
   * 72 blocks if *reserve* is simply *true*).
   * 
   * *locktime* is an optional locktime: if not set, it is set to a recent
   * block height.
   * 
   * *min_witness_weight* is an optional minimum weight to use for a UTXO's
   * witness. If the actual witness weight is greater than the provided minimum,
   * the actual witness weight will be used.
   * 
   * *excess_as_change* is an optional boolean to flag to add a change output
   * for the excess sats.
   * 
   * EXAMPLE USAGE
   * -------------
   * 
   * Let's assume the caller is trying to produce a 100,000 satoshi output.
   * 
   * First, the caller estimates the weight of the core (typically 42) and
   * known outputs of the transaction (typically (9 + scriptlen) * 4).  For
   * a simple P2WPKH it's a 22 byte scriptpubkey, so that's 124 weight.
   * 
   * It calls "*fundpsbt* 100000sat slow 166", which succeeds, and returns
   * the *psbt* and *feerate_per_kw* it used, the *estimated_final_weight*
   * and any *excess_msat*.
   * 
   * If *excess_msat* is greater than the cost of adding a change output,
   * the caller adds a change output randomly to position 0 or 1 in the
   * PSBT.  Say *feerate_per_kw* is 253, and the change output is a P2WPKH
   * (weight 124), the cost is around 31 sats.  With the dust limit disallowing
   * payments below 546 satoshis, we would only create a change output
   * if *excess_msat* was greater or equal to 31 + 546.
  */
  fundpsbt(payload: FundpsbtRequest): Promise<FundpsbtResponse> {
    return this.call<FundpsbtResponse>("fundpsbt", payload);
  }
    
  /**
   * The **getinfo** gives a summary of the current running node.
   * 
   * 
   * EXAMPLE JSON REQUEST
   * ------------
   * ```json
   * {
   *   "id": 82,
   *   "method": "getinfo",
   *   "params": {}
   * }
   * ```
  */
  getinfo(payload: GetinfoRequest = {}): Promise<GetinfoResponse> {
    return this.call<GetinfoResponse>("getinfo", payload);
  }
    
  /**
   * The **getlog** the RPC command to show logs, with optional log *level*.
   * 
   * - *level*: A string that represents the log level (*broken*, *unusual*, *info*, *debug*, or *io*).  The default is *info*.
   * 
   * EXAMPLE JSON REQUEST
   * --------------------
   * ```json
   * {
   *   "id": 82,
   *   "method": "getlog",
   *   "params": {
   *     "level": "debug"
   *   }
   * }
   * ```
  */
  getlog(payload: GetlogRequest = {}): Promise<GetlogResponse> {
    return this.call<GetlogResponse>("getlog", payload);
  }
    
  /**
   * The **getroute** RPC command attempts to find the best route for the
   * payment of *msatoshi* to lightning node *id*, such that the payment will
   * arrive at *id* with *cltv*-blocks to spare (default 9).
   * 
   * *msatoshi* is in millisatoshi precision; it can be a whole number, or a
   * whole number ending in *msat* or *sat*, or a number with three decimal
   * places ending in *sat*, or a number with 1 to 11 decimal places ending
   * in *btc*.
   * 
   * There are two considerations for how good a route is: how low the fees
   * are, and how long your payment will get stuck in a delayed output if a
   * node goes down during the process. The *riskfactor* non-negative
   * floating-point field controls this tradeoff; it is the annual cost of
   * your funds being stuck (as a percentage).
   * 
   * For example, if you thought the convenience of keeping your funds liquid
   * (not stuck) was worth 20% per annum interest, *riskfactor* would be 20.
   * 
   * If you didn't care about risk, *riskfactor* would be zero.
   * 
   * *fromid* is the node to start the route from: default is this node.
   * 
   * The *fuzzpercent* is a non-negative floating-point number, representing a
   * percentage of the actual fee. The *fuzzpercent* is used to distort
   * computed fees along each channel, to provide some randomization to the
   * route generated. 0.0 means the exact fee of that channel is used, while
   * 100.0 means the fee used might be from 0 to twice the actual fee. The
   * default is 5.0, or up to 5% fee distortion.
   * 
   * *exclude* is a JSON array of short-channel-id/direction (e.g. [
   * "564334x877x1/0", "564195x1292x0/1" ]) or node-id which should be excluded
   * from consideration for routing. The default is not to exclude any channels
   * or nodes. Note if the source or destination is excluded, the command result
   * is undefined.
   * 
   * *maxhops* is the maximum number of channels to return; default is 20.
   * 
   * RISKFACTOR EFFECT ON ROUTING
   * ----------------------------
   * 
   * The risk factor is treated as if it were an additional fee on the route,
   * for the purposes of comparing routes.
   * 
   * The formula used is the following approximation:
   * 
   *     risk-fee = amount x blocks-timeout x per-block-cost
   * 
   * We are given a *riskfactor* expressed as a percentage. There are 52596
   * blocks per year, thus *per-block-cost* is *riskfactor* divided by
   * 5,259,600.
   * 
   * The final result is:
   * 
   *     risk-fee = amount x blocks-timeout x riskfactor / 5259600
   * 
   * Here are the risk fees in millisatoshis, using various parameters. I
   * assume a channel charges the default of 1000 millisatoshis plus 1
   * part-per-million. Common to_self_delay values on the network at 14 and
   * 144 blocks.
   * 
   * <table>
   * <colgroup>
   * <col style="width: 20%" />
   * <col style="width: 20%" />
   * <col style="width: 20%" />
   * <col style="width: 20%" />
   * <col style="width: 20%" />
   * </colgroup>
   * <thead>
   * <tr class="header">
   * <th style="text-align: left;">Amount (msat)</th>
   * <th style="text-align: left;">Riskfactor</th>
   * <th style="text-align: left;">Delay</th>
   * <th style="text-align: left;">Risk Fee</th>
   * <th style="text-align: left;">Route fee</th>
   * </tr>
   * </thead>
   * <tbody>
   * <tr class="odd">
   * <td style="text-align: left;"><p>10,000</p></td>
   * <td style="text-align: left;"><p>1</p></td>
   * <td style="text-align: left;"><p>14</p></td>
   * <td style="text-align: left;"><p>0</p></td>
   * <td style="text-align: left;"><p>1001</p></td>
   * </tr>
   * <tr class="even">
   * <td style="text-align: left;"><p>10,000</p></td>
   * <td style="text-align: left;"><p>10</p></td>
   * <td style="text-align: left;"><p>14</p></td>
   * <td style="text-align: left;"><p>0</p></td>
   * <td style="text-align: left;"><p>1001</p></td>
   * </tr>
   * <tr class="odd">
   * <td style="text-align: left;"><p>10,000</p></td>
   * <td style="text-align: left;"><p>100</p></td>
   * <td style="text-align: left;"><p>14</p></td>
   * <td style="text-align: left;"><p>2</p></td>
   * <td style="text-align: left;"><p>1001</p></td>
   * </tr>
   * <tr class="even">
   * <td style="text-align: left;"><p>10,000</p></td>
   * <td style="text-align: left;"><p>1000</p></td>
   * <td style="text-align: left;"><p>14</p></td>
   * <td style="text-align: left;"><p>26</p></td>
   * <td style="text-align: left;"><p>1001</p></td>
   * </tr>
   * <tr class="odd">
   * <td style="text-align: left;"><p>1,000,000</p></td>
   * <td style="text-align: left;"><p>1</p></td>
   * <td style="text-align: left;"><p>14</p></td>
   * <td style="text-align: left;"><p>2</p></td>
   * <td style="text-align: left;"><p>1001</p></td>
   * </tr>
   * <tr class="even">
   * <td style="text-align: left;"><p>1,000,000</p></td>
   * <td style="text-align: left;"><p>10</p></td>
   * <td style="text-align: left;"><p>14</p></td>
   * <td style="text-align: left;"><p>26</p></td>
   * <td style="text-align: left;"><p>1001</p></td>
   * </tr>
   * <tr class="odd">
   * <td style="text-align: left;"><p>1,000,000</p></td>
   * <td style="text-align: left;"><p>100</p></td>
   * <td style="text-align: left;"><p>14</p></td>
   * <td style="text-align: left;"><p>266</p></td>
   * <td style="text-align: left;"><p>1001</p></td>
   * </tr>
   * <tr class="even">
   * <td style="text-align: left;"><p>1,000,000</p></td>
   * <td style="text-align: left;"><p>1000</p></td>
   * <td style="text-align: left;"><p>14</p></td>
   * <td style="text-align: left;"><p>2661</p></td>
   * <td style="text-align: left;"><p>1001</p></td>
   * </tr>
   * <tr class="odd">
   * <td style="text-align: left;"><p>100,000,000</p></td>
   * <td style="text-align: left;"><p>1</p></td>
   * <td style="text-align: left;"><p>14</p></td>
   * <td style="text-align: left;"><p>266</p></td>
   * <td style="text-align: left;"><p>1100</p></td>
   * </tr>
   * <tr class="even">
   * <td style="text-align: left;"><p>100,000,000</p></td>
   * <td style="text-align: left;"><p>10</p></td>
   * <td style="text-align: left;"><p>14</p></td>
   * <td style="text-align: left;"><p>2661</p></td>
   * <td style="text-align: left;"><p>1100</p></td>
   * </tr>
   * <tr class="odd">
   * <td style="text-align: left;"><p>100,000,000</p></td>
   * <td style="text-align: left;"><p>100</p></td>
   * <td style="text-align: left;"><p>14</p></td>
   * <td style="text-align: left;"><p>26617</p></td>
   * <td style="text-align: left;"><p>1100</p></td>
   * </tr>
   * <tr class="even">
   * <td style="text-align: left;"><p>100,000,000</p></td>
   * <td style="text-align: left;"><p>1000</p></td>
   * <td style="text-align: left;"><p>14</p></td>
   * <td style="text-align: left;"><p>266179</p></td>
   * <td style="text-align: left;"><p>1100</p></td>
   * </tr>
   * <tr class="odd">
   * <td style="text-align: left;"><p>10,000</p></td>
   * <td style="text-align: left;"><p>1</p></td>
   * <td style="text-align: left;"><p>144</p></td>
   * <td style="text-align: left;"><p>0</p></td>
   * <td style="text-align: left;"><p>1001</p></td>
   * </tr>
   * <tr class="even">
   * <td style="text-align: left;"><p>10,000</p></td>
   * <td style="text-align: left;"><p>10</p></td>
   * <td style="text-align: left;"><p>144</p></td>
   * <td style="text-align: left;"><p>2</p></td>
   * <td style="text-align: left;"><p>1001</p></td>
   * </tr>
   * <tr class="odd">
   * <td style="text-align: left;"><p>10,000</p></td>
   * <td style="text-align: left;"><p>100</p></td>
   * <td style="text-align: left;"><p>144</p></td>
   * <td style="text-align: left;"><p>27</p></td>
   * <td style="text-align: left;"><p>1001</p></td>
   * </tr>
   * <tr class="even">
   * <td style="text-align: left;"><p>10,000</p></td>
   * <td style="text-align: left;"><p>1000</p></td>
   * <td style="text-align: left;"><p>144</p></td>
   * <td style="text-align: left;"><p>273</p></td>
   * <td style="text-align: left;"><p>1001</p></td>
   * </tr>
   * <tr class="odd">
   * <td style="text-align: left;"><p>1,000,000</p></td>
   * <td style="text-align: left;"><p>1</p></td>
   * <td style="text-align: left;"><p>144</p></td>
   * <td style="text-align: left;"><p>27</p></td>
   * <td style="text-align: left;"><p>1001</p></td>
   * </tr>
   * <tr class="even">
   * <td style="text-align: left;"><p>1,000,000</p></td>
   * <td style="text-align: left;"><p>10</p></td>
   * <td style="text-align: left;"><p>144</p></td>
   * <td style="text-align: left;"><p>273</p></td>
   * <td style="text-align: left;"><p>1001</p></td>
   * </tr>
   * <tr class="odd">
   * <td style="text-align: left;"><p>1,000,000</p></td>
   * <td style="text-align: left;"><p>100</p></td>
   * <td style="text-align: left;"><p>144</p></td>
   * <td style="text-align: left;"><p>2737</p></td>
   * <td style="text-align: left;"><p>1001</p></td>
   * </tr>
   * <tr class="even">
   * <td style="text-align: left;"><p>1,000,000</p></td>
   * <td style="text-align: left;"><p>1000</p></td>
   * <td style="text-align: left;"><p>144</p></td>
   * <td style="text-align: left;"><p>27378</p></td>
   * <td style="text-align: left;"><p>1001</p></td>
   * </tr>
   * <tr class="odd">
   * <td style="text-align: left;"><p>100,000,000</p></td>
   * <td style="text-align: left;"><p>1</p></td>
   * <td style="text-align: left;"><p>144</p></td>
   * <td style="text-align: left;"><p>2737</p></td>
   * <td style="text-align: left;"><p>1100</p></td>
   * </tr>
   * <tr class="even">
   * <td style="text-align: left;"><p>100,000,000</p></td>
   * <td style="text-align: left;"><p>10</p></td>
   * <td style="text-align: left;"><p>144</p></td>
   * <td style="text-align: left;"><p>27378</p></td>
   * <td style="text-align: left;"><p>1100</p></td>
   * </tr>
   * <tr class="odd">
   * <td style="text-align: left;"><p>100,000,000</p></td>
   * <td style="text-align: left;"><p>100</p></td>
   * <td style="text-align: left;"><p>144</p></td>
   * <td style="text-align: left;"><p>273785</p></td>
   * <td style="text-align: left;"><p>1100</p></td>
   * </tr>
   * <tr class="even">
   * <td style="text-align: left;"><p>100,000,000</p></td>
   * <td style="text-align: left;"><p>1000</p></td>
   * <td style="text-align: left;"><p>144</p></td>
   * <td style="text-align: left;"><p>2737850</p></td>
   * <td style="text-align: left;"><p>1100</p></td>
   * </tr>
   * </tbody>
   * </table>
   * 
   * RECOMMENDED RISKFACTOR VALUES
   * -----------------------------
   * 
   * The default *fuzz* factor is 5%, so as you can see from the table above,
   * that tends to overwhelm the effect of *riskfactor* less than about 5.
   * 
   * 1 is a conservative value for a stable lightning network with very few
   * failures.
   * 
   * 1000 is an aggressive value for trying to minimize timeouts at all
   * costs.
   * 
   * The default for lightning-pay(7) is 10, which starts to become a major
   * factor for larger amounts, and is basically ignored for tiny ones.
  */
  getroute(payload: GetrouteRequest): Promise<GetrouteResponse> {
    return this.call<GetrouteResponse>("getroute", payload);
  }
    
  /**
   * The **getsharedsecret** RPC command computes a shared secret from a
   * given public *point*, and the secret key of this node.
   * The *point* is a hexadecimal string of the compressed public
   * key DER-encoding of the SECP256K1 point.
  */
  getsharedsecret(payload: GetsharedsecretRequest): Promise<GetsharedsecretResponse> {
    return this.call<GetsharedsecretResponse>("getsharedsecret", payload);
  }
    
  /**
   * The **help** is a RPC command which is possible consult all information about the RPC commands, or a specific command if *command* is given.
   * 
   * Note that the lightning-cli(1) tool will prefer to list a man page when a
   * specific *command* is specified, and will only return the JSON if the man
   * page is not found.
   * 
   * EXAMPLE JSON REQUEST
   * --------------------
   * ```json
   * {
   *   "id": 82,
   *   "method": "help",
   *   "params": {}
   * }
   * ```
  */
  help(payload: HelpRequest = {}): Promise<HelpResponse> {
    return this.call<HelpResponse>("help", payload);
  }
    
  /**
   * The **invoice** RPC command creates the expectation of a payment of a
   * given amount of milli-satoshi: it returns a unique token which another
   * lightning daemon can use to pay this invoice. This token includes a
   * *route hint* description of an incoming channel with capacity to pay the
   * invoice, if any exists.
   * 
   * The *msatoshi* parameter can be the string "any", which creates an
   * invoice that can be paid with any amount. Otherwise it is a positive value in
   * millisatoshi precision; it can be a whole number, or a whole number
   * ending in *msat* or *sat*, or a number with three decimal places ending
   * in *sat*, or a number with 1 to 11 decimal places ending in *btc*.
   * 
   * The *label* must be a unique string or number (which is treated as a
   * string, so "01" is different from "1"); it is never revealed to other
   * nodes on the lightning network, but it can be used to query the status
   * of this invoice.
   * 
   * The *description* is a short description of purpose of payment, e.g. *1
   * cup of coffee*. This value is encoded into the BOLT11 invoice and is
   * viewable by any node you send this invoice to (unless *deschashonly* is
   * true as described below). It must be UTF-8, and cannot use *u* JSON 
   * escape codes.
   * 
   * The *expiry* is optionally the time the invoice is valid for; without a
   * suffix it is interpreted as seconds, otherwise suffixes *s*, *m*, *h*,
   * *d*, *w* indicate seconds, minutes, hours, days and weeks respectively.
   * If no value is provided the default of 604800 (1w) is used.
   * 
   * The *fallbacks* array is one or more fallback addresses to include in
   * the invoice (in order from most-preferred to least): note that these
   * arrays are not currently tracked to fulfill the invoice.
   * 
   * The *preimage* is a 64-digit hex string to be used as payment preimage
   * for the created invoice. By default, if unspecified, lightningd will
   * generate a secure pseudorandom preimage seeded from an appropriate
   * entropy source on your system. **IMPORTANT**: if you specify the
   * *preimage*, you are responsible, to ensure appropriate care for
   * generating using a secure pseudorandom generator seeded with sufficient
   * entropy, and keeping the preimage secret. This parameter is an advanced
   * feature intended for use with cutting-edge cryptographic protocols and
   * should not be used unless explicitly needed.
   * 
   * If specified, *exposeprivatechannels* overrides the default route hint
   * logic, which will use unpublished channels only if there are no
   * published channels. If *true* unpublished channels are always considered
   * as a route hint candidate; if *false*, never.  If it is a short channel id
   * (e.g. *1x1x3*) or array of short channel ids, only those specific channels
   * will be considered candidates, even if they are public or dead-ends.
   * 
   * The route hint is selected from the set of incoming channels of which:
   * peer's balance minus their reserves is at least *msatoshi*, state is
   * normal, the peer is connected and not a dead end (i.e. has at least one
   * other public channel). The selection uses some randomness to prevent
   * probing, but favors channels that become more balanced after the
   * payment.
   * 
   * If specified, *cltv* sets the *min_final_cltv_expiry* for the invoice.
   * Otherwise, it's set to the parameter **cltv-final**.
   * 
   * If *deschash* is true (default false), then the bolt11 returned
   * contains a hash of the *description*, rather than the *description*
   * itself: this allows much longer descriptions, but they must be
   * communicated via some other mechanism.
  */
  invoice(payload: InvoiceRequest): Promise<InvoiceResponse> {
    return this.call<InvoiceResponse>("invoice", payload);
  }
    
  /**
   * The **keysend** RPC command attempts to find a route to the given destination,
   * and send the specified amount to it. Unlike the `pay` RPC command the
   * `keysend` command does not require an invoice, instead it uses the
   * `destination` node ID, and `amount` to find a route to the specified node.
   * 
   * In order for the destination to be able to claim the payment, the
   * `payment_key` is randomly generated by the sender and included in the
   * encrypted payload for the destination. As a consequence there is not
   * proof-of-payment, like there is with an invoice where the `payment_key` is
   * generated on the destination, and the only way sender could have it is by
   * sending a payment. Please ensure that this matches your use-case when using
   * `keysend`.
   * 
   * `destination` is the 33 byte, hex-encoded, node ID of the node that the payment should go to.
   * `msatoshi` is in millisatoshi precision; it can be a whole number, or a whole number with suffix `msat` or `sat`, or a three decimal point number with suffix `sat`, or an 1 to 11 decimal point number suffixed by `btc`.
   * 
   * The `label` field is used to attach a label to payments, and is returned in lightning-listpays(7) and lightning-listsendpays(7).
   * The `maxfeepercent` limits the money paid in fees as percentage of the total amount that is to be transferred, and defaults to *0.5*.
   * The `exemptfee` option can be used for tiny payments which would be dominated by the fee leveraged by forwarding nodes.
   * Setting `exemptfee` allows the `maxfeepercent` check to be skipped on fees that are smaller than *exemptfee* (default: 5000 millisatoshi).
   * 
   * The response will occur when the payment fails or succeeds.
   * Unlike lightning-pay(7), issuing the same `keysend` commands multiple times will result in multiple payments being sent.
   * 
   * Until *retry_for* seconds passes (default: 60), the command will keep finding routes and retrying the payment.
   * However, a payment may be delayed for up to `maxdelay` blocks by another node; clients should be prepared for this worst case.
   * 
   * When using *lightning-cli*, you may skip optional parameters by using
   * *null*. Alternatively, use **-k** option to provide parameters by name.
   * 
   * RANDOMIZATION
   * -------------
   * 
   * To protect user privacy, the payment algorithm performs some randomization.
   * 
   * 1: Route Randomization
   * 
   * Route randomization means the payment algorithm does not always use the
   * lowest-fee or shortest route. This prevents some highly-connected node
   * from learning all of the user payments by reducing their fees below the
   * network average.
   * 
   * 2: Shadow Route
   * 
   * Shadow route means the payment algorithm will virtually extend the route
   * by adding delays and fees along it, making it appear to intermediate nodes
   * that the route is longer than it actually is. This prevents intermediate
   * nodes from reliably guessing their distance from the payee.
   * 
   * Route randomization will never exceed *maxfeepercent* of the payment.
   * Route randomization and shadow routing will not take routes that would
   * exceed *maxdelay*.
  */
  keysend(payload: KeysendRequest): Promise<KeysendResponse> {
    return this.call<KeysendResponse>("keysend", payload);
  }
    
  /**
   * The **listchannels** RPC command returns data on channels that are known
   * to the node. Because channels may be bidirectional, up to 2 objects will
   * be returned for each channel (one for each direction).
   * 
   * If *short_channel_id* is a short channel id, then only known channels with a
   * matching *short_channel_id* are returned.  Otherwise, it must be null.
   * 
   * If *source* is a node id, then only channels leading from that node id
   * are returned.
   * 
   * If *destination* is a node id, then only channels leading to that node id
   * are returned.
   * 
   * Only one of *short_channgel_id*, *source* or *destination* can be supplied.
   * If nothing is supplied, data on all lightning channels known to this
   * node, are returned. These can be local channels or public channels
   * broadcast on the gossip network.
  */
  listchannels(payload: ListchannelsRequest = {}): Promise<ListchannelsResponse> {
    return this.call<ListchannelsResponse>("listchannels", payload);
  }
    
  /**
   * The **listconfigs** RPC command to list all configuration options, or with *config*, just that one.
   * 
   * The returned values reflect the current configuration, including
   * showing default values (`dev-` options are not shown).
   * 
   * EXAMPLE JSON REQUEST
   * --------------------
   * 
   * ```json
   * {
   *   "id": 82,
   *   "method": "listconfigs",
   *   "params": {
   *     "config": "network"
   *   }
   * }
   * ```
  */
  listconfigs(payload: ListconfigsRequest = {}): Promise<ListconfigsResponse> {
    return this.call<ListconfigsResponse>("listconfigs", payload);
  }
    
  /**
   * The **listdatastore** RPC command allows plugins to fetch data which was
   * stored in the c-lightning database.
   * 
   * All immediate children of the *key* (or root children) are returned:
   * a *key* with children won't have a *hex* or *generation* entry.
  */
  listdatastore(payload: ListdatastoreRequest = {}): Promise<ListdatastoreResponse> {
    return this.call<ListdatastoreResponse>("listdatastore", payload);
  }
    
  /**
   * The **listforwards** RPC command displays all htlcs that have been
   * attempted to be forwarded by the c-lightning node.
   * 
   * If *status* is specified, then only the forwards with the given status are returned.
   * *status* can be either *offered* or *settled* or *failed* or *local_failed*
   * 
   * If *in_channel* or *out_channel* is specified, then only the matching forwards
   * on the given in/out channel are returned.
  */
  listforwards(payload: ListforwardsRequest = {}): Promise<ListforwardsResponse> {
    return this.call<ListforwardsResponse>("listforwards", payload);
  }
    
  /**
   * The **listfunds** RPC command displays all funds available, either in
   * unspent outputs (UTXOs) in the internal wallet or funds locked in
   * currently open channels.
   * 
   * *spent* is a boolean: if true, then the *outputs* will include spent outputs
   * in addition to the unspent ones. Default is false.
  */
  listfunds(payload: ListfundsRequest = {}): Promise<ListfundsResponse> {
    return this.call<ListfundsResponse>("listfunds", payload);
  }
    
  /**
   * The **listinvoices** RPC command gets the status of a specific invoice,
   * if it exists, or the status of all invoices if given no argument.
   * 
   * A specific invoice can be queried by providing either the `label`
   * provided when creating the invoice, the `invstring` string representing
   * the invoice, the `payment_hash` of the invoice, or the local `offer_id`
   * this invoice was issued for. Only one of the query parameters can be used at once.
  */
  listinvoices(payload: ListinvoicesRequest = {}): Promise<ListinvoicesResponse> {
    return this.call<ListinvoicesResponse>("listinvoices", payload);
  }
    
  /**
   * The **listnodes** command returns nodes the node has learned about via gossip messages.
   * 
   * To get a single node, check out {@link getnode}.
  */
  listnodes(): Promise<ListnodesResponse> {
    return this.call<ListnodesResponse>("listnodes", {});
  }
  
  /**
   * Gets information learned via gossip about a node by a given pubkey.
   *
   * @param id The node's pubkkey
   * @returns Information about the node
   */
  async getnode(id: string): Promise<Node | undefined> {
    return (await this.call<ListnodesResponse>("listnodes", { id })).nodes[0];
  } 

  /**
   * The **listoffers** RPC command list all offers, or with `offer_id`,
   * only the offer with that offer_id (if it exists).  If `active_only` is
   * set and is true, only offers with `active` true are returned.
   * 
   * EXAMPLE JSON REQUEST
   * ------------
   * ```json
   * {
   *   "id": 82,
   *   "method": "listoffers",
   *   "params": {
   * 	"active_only": false
   *   }
   * }
   * ```
  */
  listoffers(payload: ListoffersRequest = {}): Promise<ListoffersResponse> {
    return this.call<ListoffersResponse>("listoffers", payload);
  }
    
  /**
   * The **listpay** RPC command gets the status of all *pay* commands, or a
   * single one if either *bolt11* or *payment_hash* was specified.
   * It is possible filter the payments also by *status*.
  */
  listpays(payload: ListpaysRequest = {}): Promise<ListpaysResponse> {
    return this.call<ListpaysResponse>("listpays", payload);
  }
    
  /**
   * The **listpeers** RPC command returns data on nodes that are connected
   * or are not connected but have open channels with this node.
   * 
   * Once a connection to another lightning node has been established, using
   * the **connect** command, data on the node can be returned using
   * **listpeers** and the *id* that was used with the **connect** command.
   * 
   * If no *id* is supplied, then data on all lightning nodes that are
   * connected, or not connected but have open channels with this node, are
   * returned.
   * 
   * Supplying *id* will filter the results to only return data on a node
   * with a matching *id*, if one exists.
   * 
   * Supplying *level* will show log entries related to that peer at the
   * given log level. Valid log levels are "io", "debug", "info", and
   * "unusual".
   * 
   * If a channel is open with a node and the connection has been lost, then
   * the node will still appear in the output of the command and the value of
   * the *connected* attribute of the node will be "false".
   * 
   * The channel will remain open for a set blocktime, after which if the
   * connection has not been re-established, the channel will close and the
   * node will no longer appear in the command output.
  */
  listpeers(payload: ListpeersRequest = {}): Promise<ListpeersResponse> {
    return this.call<ListpeersResponse>("listpeers", payload);
  }
    
  /**
   * The **listsendpays** RPC command gets the status of all *sendpay*
   * commands (which is also used by the *pay* command), or with *bolt11* or
   * *payment_hash* limits results to that specific payment. You cannot
   * specify both. It is possible filter the payments also by *status*.
   * 
   * Note that in future there may be more than one concurrent *sendpay*
   * command per *pay*, so this command should be used with caution.
  */
  listsendpays(payload: ListsendpaysRequest = {}): Promise<ListsendpaysResponse> {
    return this.call<ListsendpaysResponse>("listsendpays", payload);
  }
    
  /**
   * The **listtransactions** command returns transactions tracked in the wallet. This includes deposits, withdrawals and transactions related to channels. A transaction may have multiple types, e.g., a transaction may both be a close and a deposit if it closes the channel and returns funds to the wallet.
   * 
   * EXAMPLE JSON REQUEST
   * ------------
   * ```json
   * {
   *   "id": 82,
   *   "method": "listtransactions",
   *   "params": {}
   * }
   * ```
  */
  listtransactions(payload: ListtransactionsRequest = {}): Promise<ListtransactionsResponse> {
    return this.call<ListtransactionsResponse>("listtransactions", payload);
  }
    
  /**
   * The **multifundchannel** RPC command opens multiple payment channels
   * with nodes by committing a single funding transaction to the blockchain
   * that is shared by all channels.
   * 
   * If not already connected, **multifundchannel** will automatically attempt
   * to connect; you may provide a *@host:port* hint appended to the node ID
   * so that c-lightning can learn how to connect to the node;
   * see lightning-connect(7).
   * 
   * Once the transaction is confirmed, normal channel operations may begin.
   * Readiness is indicated by **listpeers** reporting a *state* of
   * `CHANNELD_NORMAL` for the channel.
   * 
   * *destinations* is an array of objects, with the fields:
   * 
   * * *id* is the node ID, with an optional *@host:port* appended to it
   *   in a manner understood by **connect**; see lightning-connect(7).
   *   Each entry in the *destinations* array must have a unique node *id*.
   * * *amount* is the amount in satoshis taken from the internal wallet
   *   to fund the channel.
   *   The string *all* can be used to specify all available funds
   *   (or 16,777,215 satoshi if more is available and large channels were
   *   not negotiated with the peer).
   *   Otherwise it is in satoshi precision; it can be
   *    a whole number,
   *    a whole number ending in *sat*,
   *    a whole number ending in *000msat*, or
   *    a number with 1 to 8 decimal places ending in *btc*.
   *   The value cannot be less than the dust limit, currently 546 satoshi
   *   as of this writing, nor more than 16,777,215 satoshi
   *   (unless large channels were negotiated with the peer).
   * * *announce* is an optional flag that indicates whether to announce
   *   the channel with this, default `true`.
   *   If set to `false`, the channel is unpublished.
   * * *push_msat* is the amount of millisatoshis to outright give to the
   *   node.
   *   This is a gift to the peer, and you do not get a proof-of-payment
   *   out of this.
   * * *close_to* is a Bitcoin address to which the channel funds should be sent to
   *   on close. Only valid if both peers have negotiated
   *   `option_upfront_shutdown_script`.  Returns `close_to` set to
   *   closing script iff is negotiated.
   * * *request_amt* is the amount of liquidity you'd like to lease from peer.
   *   If peer supports `option_will_fund`, indicates to them to include this
   *   much liquidity into the channel. Must also pass in *compact_lease*.
   * * *compact_lease* is a compact represenation of the peer's expected
   *   channel lease terms. If the peer's terms don't match this set, we will
   *   fail to open the channel to this destination.
   * 
   * There must be at least one entry in *destinations*;
   * it cannot be an empty array.
   * 
   * *feerate* is an optional feerate used for the opening transaction and, if
   * *commitment_feerate* is not set, as the initial feerate for
   * commitment and HTLC transactions. It can be one of
   * the strings *urgent* (aim for next block), *normal* (next 4 blocks or
   * so) or *slow* (next 100 blocks or so) to use lightningd's internal
   * estimates: *normal* is the default.
   * 
   * Otherwise, *feerate* is a number, with an optional suffix: *perkw* means
   * the number is interpreted as satoshi-per-kilosipa (weight), and *perkb*
   * means it is interpreted bitcoind-style as satoshi-per-kilobyte. Omitting
   * the suffix is equivalent to *perkb*.
   * 
   * *minconf* specifies the minimum number of confirmations that used
   * outputs should have. Default is 1.
   * 
   * *utxos* specifies the utxos to be used to fund the channel, as an array
   * of "txid:vout".
   * 
   * *minchannels*, if specified, will re-attempt funding as long as at least
   * this many peers remain (must not be zero).
   * The **multifundchannel** command will only fail if too many peers fail
   * the funding process.
   * 
   * *commitment_feerate* is the initial feerate for commitment and HTLC
   * transactions. See *feerate* for valid values.
  */
  multifundchannel(payload: MultifundchannelRequest): Promise<MultifundchannelResponse> {
    return this.call<MultifundchannelResponse>("multifundchannel", payload);
  }
    
  /**
   * The **multiwithdraw** RPC command sends funds from c-lightning's internal
   * wallet to the addresses specified in *outputs*,
   * which is an array containing objects of the form `{address: amount}`.
   * The `amount` may be the string *"all"*, indicating that all onchain funds
   * be sent to the specified address.
   * Otherwise, it is in satoshi precision;
   * it can be
   * a whole number,
   * a whole number ending in *sat*,
   * a whole number ending in *000msat*,
   * or a number with 1 to 8 decimal places ending in *btc*.
   * 
   * *feerate* is an optional feerate to use. It can be one of the strings
   * *urgent* (aim for next block), *normal* (next 4 blocks or so) or *slow*
   * (next 100 blocks or so) to use lightningd's internal estimates: *normal*
   * is the default.
   * 
   * Otherwise, *feerate* is a number, with an optional suffix: *perkw* means
   * the number is interpreted as satoshi-per-kilosipa (weight), and *perkb*
   * means it is interpreted bitcoind-style as satoshi-per-kilobyte. Omitting
   * the suffix is equivalent to *perkb*.
   * 
   * *minconf* specifies the minimum number of confirmations that used
   * outputs should have. Default is 1.
   * 
   * *utxos* specifies the utxos to be used to be withdrawn from, as an array
   * of "txid:vout". These must be drawn from the node's available UTXO set.
  */
  multiwithdraw(payload: MultiwithdrawRequest): Promise<MultiwithdrawResponse> {
    return this.call<MultiwithdrawResponse>("multiwithdraw", payload);
  }
    
  /**
   * The **newaddr** RPC command generates a new address which can
   * subsequently be used to fund channels managed by the c-lightning node.
   * 
   * The funding transaction needs to be confirmed before funds can be used.
   * 
   * *addresstype* specifies the type of address wanted; i.e. *p2sh-segwit*
   * (e.g. `2MxaozoqWwiUcuD9KKgUSrLFDafLqimT9Ta` on bitcoin testnet or
   * `3MZxzq3jBSKNQ2e7dzneo9hy4FvNzmMmt3` on bitcoin mainnet) or *bech32*
   * (e.g. `tb1qu9j4lg5f9rgjyfhvfd905vw46eg39czmktxqgg` on bitcoin testnet
   * or `bc1qwqdg6squsna38e46795at95yu9atm8azzmyvckulcc7kytlcckxswvvzej` on
   * bitcoin mainnet). The special value *all* generates both address types
   * for the same underlying key.
   * 
   * If no *addresstype* is specified the address generated is a *bech32* address.
  */
  async newaddr(addressType: "p2sh-segwit" | "bech32" = "bech32"): Promise<string> {
    return (
      await this.call<{
        bech32: string;
        "p2sh-segwit": string;
      }>("newaddr", {
        addresstype: addressType,
      })
    )[addressType];
  }
    
  /**
   * The **notifications** the RPC command enabled notifications for this JSON-RPC
   * connection.  By default (and for backwards-compatibility) notifications are
   * disabled.
   * 
   * Various commands, especially complex and slow ones, offer
   * notifications which indicate their progress.
   * 
   * - *enable*: *true* to enable notifications, *false* to disable them.
   * 
   * EXAMPLE JSON REQUEST
   * --------------------
   * ```json
   * {
   *   "id": 82,
   *   "method": "notifications",
   *   "params": {
   *     "enable": true
   *   }
   * }
   * ```
   * 
   * NOTIFICATIONS
   * -------------
   * 
   * Notifications are JSON-RPC objects without an *id* field.  *lightningd* sends
   * notifications (once enabled with this *notifications* command) with a *params*
   * *id* field indicating which command the notification refers to.
   * 
   * Implementations should ignore notifications without an *id* parameter, or
   * unknown *method*.
   * 
   * Common *method*s include:
   * 
   * - *message*: param *message*: a descriptional string indicating something
   *   which occurred relating to the command. Param *level* indicates the level,
   *   as per lightning-getlog(7): *info* and *debug* are typical.
   * - *progress*: param *num* and *total*, where *num* starts at 0 and is always
   *   less than *total*. Optional param *stage* with fields *num* and *total*,
   *   indicating what stage we are progressing through.
  */
  notifications(payload: NotificationsRequest): Promise<NotificationsResponse> {
    return this.call<NotificationsResponse>("notifications", payload);
  }
    
  /**
   * The **offer** RPC command creates an offer (or returns an existing
   * one), which is a precursor to creating one or more invoices.  It
   * automatically enables the processing of an incoming invoice_request,
   * and issuing of invoices.
   * 
   * Note that it creates two variants of the offer: a signed and an
   * unsigned one (which is smaller).  Wallets should accept both: the
   * current specification allows either.
   * 
   * The *amount* parameter can be the string "any", which creates an offer
   * that can be paid with any amount (e.g. a donation).  Otherwise it can
   * be a positive value in millisatoshi precision; it can be a whole
   * number, or a whole number ending in *msat* or *sat*, or a number with
   * three decimal places ending in *sat*, or a number with 1 to 11 decimal
   * places ending in *btc*.
   * 
   * *amount* can also have an ISO 4217 postfix (i.e. USD), in which case
   * currency conversion will need to be done for the invoice itself.  A
   * plugin is needed which provides the "currencyconvert" API for this
   * currency, otherwise the offer creation will fail.
   * 
   * The *description* is a short description of purpose of the offer,
   * e.g. *coffee*. This value is encoded into the resulting offer and is
   * viewable by anyone you expose this offer to. It must be UTF-8, and
   * cannot use *u* JSON escape codes.
   * 
   * The *issuer* is another (optional) field exposed in the offer, and
   * reflects who is issuing this offer (i.e. you) if appropriate.
   * 
   * The *label* field is an internal-use name for the offer, which can
   * be any UTF-8 string.
   * 
   * The present of *quantity_min* or *quantity_max* indicates that the
   * invoice can specify more than one of the items within this (inclusive)
   * range.  The *amount* for the invoice will need to be multiplied
   * accordingly.  These are encoded in the offer.
   * 
   * The *absolute_expiry* is optionally the time the offer is valid until,
   * in seconds since the first day of 1970 UTC.  If not set, the offer
   * remains valid (though it can be deactivated by the issuer of course).
   * This is encoded in the offer.
   * 
   * *recurrence* means that an invoice is expected at regular intervals.
   * The argument is a positive number followed by one of "seconds",
   * "minutes", "hours", "days", "weeks", "months" or "years" (variants
   * without the trailing "s" are also permitted).  This is encoded in the
   * offer.  The semantics of recurrence is fairly predictable, but fully
   * documented in BOLT 12.  e.g. "4weeks".
   * 
   * *recurrence_base* is an optional time in seconds since the first day
   * of 1970 UTC, optionally with a "@" prefix.  This indicates when the
   * first period begins; without this, the recurrence periods start from
   * the first invoice.  The "@" prefix means that the invoice must start
   * by paying the first period; otherwise it is permitted to start at any
   * period.  This is encoded in the offer.  e.g. "@1609459200" indicates
   * you must start paying on the 1st January 2021.
   * 
   * *recurrence_paywindow* is an optional argument of form
   * '-time+time[%]'.  The first time is the number of seconds before the
   * start of a period in which an invoice and payment is valid, the second
   * time is the number of seconds after the start of the period.  For
   * example *-604800+86400* means you can fetch an pay the invoice 4 weeks
   * before the given period starts, and up to 1 day afterwards.  The
   * optional *%* indicates that the amount of the invoice will be scaled
   * by the time remaining in the period.  If this is not specified, the
   * default is that payment is allowed during the current and previous
   * periods.  This is encoded in the offer.
   * 
   * *recurrence_limit* is an optional argument to indicate the maximum
   * period which exists.  eg. "12" means there are 13 periods, from 0 to
   * 12 inclusive.  This is encoded in the offer.
   * 
   * *refund_for* is the payment_preimage of a previous (paid) invoice.
   * This implies *send_invoice* and *single_use*.  This is encoded in the
   * offer.
   * 
   * *single_use* (default false) indicates that the offer is only valid
   * once; we may issue multiple invoices, but as soon as one is paid all other
   * invoices will be expired (i.e. only one person can pay this offer).
  */
  offer(payload: OfferRequest): Promise<OfferResponse> {
    return this.call<OfferResponse>("offer", payload);
  }
    
  /**
   * The **offerout** RPC command creates an offer, which is a request to
   * send an invoice for us to pay (technically, this is referred to as a
   * `send_invoice` offer to distinguish a normal lightningd-offer(7)
   * offer).  It automatically enables the accepting and payment of
   * corresponding invoice message (we will only pay once, however!).
   * 
   * Note that it creates two variants of the offer: a signed and an
   * unsigned one (which is smaller).  Wallets should accept both: the
   * current specification allows either.
   * 
   * The *amount* parameter can be the string "any", which creates an offer
   * that can be paid with any amount (e.g. a donation).  Otherwise it can
   * be a positive value in millisatoshi precision; it can be a whole
   * number, or a whole number ending in *msat* or *sat*, or a number with
   * three decimal places ending in *sat*, or a number with 1 to 11 decimal
   * places ending in *btc*.
   * 
   * The *description* is a short description of purpose of the offer,
   * e.g. *withdrawl from ATM*. This value is encoded into the resulting offer and is
   * viewable by anyone you expose this offer to. It must be UTF-8, and
   * cannot use *u* JSON escape codes.
   * 
   * The *issuer* is another (optional) field exposed in the offer, and
   * reflects who is issuing this offer (i.e. you) if appropriate.
   * 
   * The *label* field is an internal-use name for the offer, which can
   * be any UTF-8 string.
   * 
   * The *absolute_expiry* is optionally the time the offer is valid until,
   * in seconds since the first day of 1970 UTC.  If not set, the offer
   * remains valid (though it can be deactivated by the issuer of course).
   * This is encoded in the offer.
   * 
   * *refund_for* is a previous (paid) invoice of ours.  The
   * payment_preimage of this is encoded in the offer, and redemption
   * requires that the invoice we receive contains a valid signature using
   * that previous `payer_key`.
  */
  offerout(payload: OfferoutRequest): Promise<OfferoutResponse> {
    return this.call<OfferoutResponse>("offerout", payload);
  }
    
  /**
   * `openchannel_init` is a low level RPC command which initiates a channel
   * open with a specified peer. It uses the openchannel protocol
   * which allows for interactive transaction construction.
   * 
   * *channel_id* is id of this channel.
   * 
  */
  openchannelAbort(payload: OpenchannelAbortRequest): Promise<OpenchannelAbortResponse> {
    return this.call<OpenchannelAbortResponse>("openchannel_abort", payload);
  }
    
  /**
   * `openchannel_bump` is a RPC command which initiates a channel
   * RBF (Replace-By-Fee) for the specified channel. It uses the openchannel protocol
   * which allows for interactive transaction construction.
   * 
   * *id* is the id of the channel to RBF.
   * 
   * *amount* is the satoshi value that we will contribute to the channel.
   * This value will be _added_ to the provided PSBT in the output which is
   * encumbered by the 2-of-2 script for this channel.
   * 
   * *initialpsbt* is the funded, incomplete PSBT that specifies the UTXOs and
   * change output for our channel contribution. It can be updated,
   * see `openchannel_update`; *initialpsbt* must have at least one input.
   * Must have the Non-Witness UTXO (PSBT_IN_NON_WITNESS_UTXO) set for
   * every input. An error (code 309) will be returned if this requirement
   * is not met.
   * 
   * *funding_feerate* is an optional field. Sets the feerate for the
   * funding transaction. Defaults to 1/64th greater than the last
   * feerate used for this channel.
   * 
   * Warning: bumping a leased channel will lose the lease.
  */
  openchannelBump(payload: OpenchannelBumpRequest): Promise<OpenchannelBumpResponse> {
    return this.call<OpenchannelBumpResponse>("openchannel_bump", payload);
  }
    
  /**
   * `openchannel_init` is a low level RPC command which initiates a channel
   * open with a specified peer. It uses the openchannel protocol
   * which allows for interactive transaction construction.
   * 
   * *id* is the node id of the remote peer.
   * 
   * *amount* is the satoshi value that we will contribute to the channel.
   * This value will be _added_ to the provided PSBT in the output which is
   * encumbered by the 2-of-2 script for this channel.
   * 
   * *initialpsbt* is the funded, incomplete PSBT that specifies the UTXOs and
   * change output for our channel contribution. It can be updated,
   * see `openchannel_update`; *initialpsbt* must have at least one input.
   * Must have the Non-Witness UTXO (PSBT_IN_NON_WITNESS_UTXO) set for
   * every input. An error (code 309) will be returned if this requirement
   * is not met.
   * 
   * *commitment_feerate* is an optional field. Sets the feerate for
   * commitment transactions: see **fundchannel**.
   * 
   * *funding_feerate* is an optional field. Sets the feerate for the
   * funding transaction. Defaults to 'opening' feerate.
   * 
   * *announce* is an optional field. Whether or not to announce this channel.
   * 
   * *close_to* is a Bitcoin address to which the channel funds should be
   * sent on close. Only valid if both peers have negotiated
   * `option_upfront_shutdown_script`.
   * 
   * *request_amt* is an amount of liquidity you'd like to lease from the peer.
   * If peer supports `option_will_fund`, indicates to them to include this
   * much liquidity into the channel. Must also pass in *compact_lease*.
   * 
   * *compact_lease* is a compact represenation of the peer's expected
   * channel lease terms. If the peer's terms don't match this set, we will
   * fail to open the channel.
   * 
  */
  openchannelInit(payload: OpenchannelInitRequest): Promise<OpenchannelInitResponse> {
    return this.call<OpenchannelInitResponse>("openchannel_init", payload);
  }
    
  /**
   * `openchannel_signed` is a low level RPC command which concludes a channel
   * open with the specified peer. It uses the v2 openchannel protocol, which
   * allows for interactive transaction construction.
   * 
   * This command should be called after `openchannel_update` returns
   * *commitments_secured* `true`.
   * 
   * This command will broadcast the finalized funding transaction,
   * if we receive valid signatures from the peer.
   * 
   * *channel_id* is the id of the channel.
   * 
   * *signed_psbt* is the PSBT returned from `openchannel_update` (where
   * *commitments_secured* was true) with partial signatures or finalized
   * witness stacks included for every input that we contributed to the
   * PSBT.
  */
  openchannelSigned(payload: OpenchannelSignedRequest): Promise<OpenchannelSignedResponse> {
    return this.call<OpenchannelSignedResponse>("openchannel_signed", payload);
  }
    
  /**
   * `openchannel_update` is a low level RPC command which continues an open
   * channel, as specified by *channel_id*. An updated  *psbt* is passed in; any
   * changes from the PSBT last returned (either from `openchannel_init` or
   * a previous call to `openchannel_update`) will be communicated to the peer.
   * 
   * Must be called after `openchannel_init` and before `openchannel_signed`.
   * 
   * Must be called until *commitments_secured* is returned as true, at which point
   * `openchannel_signed` should be called with a signed version of the PSBT
   * returned by the last call to `openchannel_update`.
   * 
   * *channel_id* is the id of the channel.
   * 
   * *psbt* is the updated PSBT to be sent to the peer. May be identical to
   * the PSBT last returned by either `openchannel_init` or `openchannel_update`.
  */
  openchannelUpdate(payload: OpenchannelUpdateRequest): Promise<OpenchannelUpdateResponse> {
    return this.call<OpenchannelUpdateResponse>("openchannel_update", payload);
  }
    
  /**
   * The **parsefeerate** command returns the current feerate for any valid
   * *feerate_str*. This is useful for finding the current feerate that a
   * **fundpsbt** or **utxopsbt** command might use.
  */
  parsefeerate(payload: ParsefeerateRequest): Promise<ParsefeerateResponse> {
    return this.call<ParsefeerateResponse>("parsefeerate", payload);
  }
    
  /**
   * The **pay** RPC command attempts to find a route to the given
   * destination, and send the funds it asks for. If the *bolt11* does not
   * contain an amount, *msatoshi* is required, otherwise if it is specified
   * it must be *null*. *msatoshi* is in millisatoshi precision; it can be a
   * whole number, or a whole number with suffix *msat* or *sat*, or a three
   * decimal point number with suffix *sat*, or an 1 to 11 decimal point
   * number suffixed by *btc*.
   * 
   * (Note: if **experimental-offers** is enabled, *bolt11* can actually be
   * a bolt12 invoice, such as one received from lightningd-fetchinvoice(7)).
   * 
   * The *label* field is used to attach a label to payments, and is returned
   * in lightning-listpays(7) and lightning-listsendpays(7). The *riskfactor*
   * is described in detail in lightning-getroute(7), and defaults to 10. The
   * *maxfeepercent* limits the money paid in fees, and defaults to 0.5. The
   * `maxfeepercent` is a percentage of the amount that is to be paid. The `exemptfee`
   * option can be used for tiny payments which would be dominated by the fee
   * leveraged by forwarding nodes. Setting `exemptfee` allows the
   * `maxfeepercent` check to be skipped on fees that are smaller than
   * `exemptfee` (default: 5000 millisatoshi).
   * 
   * The response will occur when the payment fails or succeeds. Once a
   * payment has succeeded, calls to **pay** with the same *bolt11* will
   * succeed immediately.
   * 
   * Until *retry_for* seconds passes (default: 60), the command will keep
   * finding routes and retrying the payment. However, a payment may be
   * delayed for up to `maxdelay` blocks by another node; clients should be
   * prepared for this worst case.
   * 
   * *exclude* is a JSON array of short-channel-id/direction (e.g. [
   * "564334x877x1/0", "564195x1292x0/1" ]) or node-id which should be excluded
   * from consideration for routing. The default is not to exclude any channels
   * or nodes.
   * 
   * When using *lightning-cli*, you may skip optional parameters by using
   * *null*. Alternatively, use **-k** option to provide parameters by name.
   * 
   * RANDOMIZATION
   * -------------
   * 
   * To protect user privacy, the payment algorithm performs some
   * randomization.
   * 
   * 1: Route Randomization
   * 
   * Route randomization means the payment algorithm does not always use the
   * lowest-fee or shortest route. This prevents some highly-connected node
   * from learning all of the user payments by reducing their fees below the
   * network average.
   * 
   * 2: Shadow Route
   * 
   * Shadow route means the payment algorithm will virtually extend the route
   * by adding delays and fees along it, making it appear to intermediate nodes
   * that the route is longer than it actually is. This prevents intermediate
   * nodes from reliably guessing their distance from the payee.
   * 
   * Route randomization will never exceed *maxfeepercent* of the payment.
   * Route randomization and shadow routing will not take routes that would
   * exceed *maxdelay*.
  */
  pay(payload: PayRequest): Promise<PayResponse> {
    return this.call<PayResponse>("pay", payload);
  }
    
  /**
   * The **ping** command checks if the node with *id* is ready to talk. 
   * It currently only works for peers we have a channel with.
   * 
   * It accepts the following parameters:
   * 
   * - *id*: A string that represents the node id;
   * - *len*: A integer that represents the length of the ping (default 128);
   * - *pongbytes*: An integer that represents the length of the reply (default 128).
   *   A value of 65532 to 65535 means "don't reply".
   * 
   * EXAMPLE JSON REQUEST
   * ------------
   * ```json
   * {
   *   "id": 82,
   *   "method": "ping",
   *   "params": {
   *     "len": 128,
   *     "pongbytes": 128
   *   }
   * }
   * ```
  */
  ping(payload: PingRequest): Promise<PingResponse> {
    return this.call<PingResponse>("ping", payload);
  }
    
  /**
   * The **plugin** RPC command allows to manage plugins without having to
   * restart lightningd. It takes 1 to 3 parameters: a command
   * (start/stop/startdir/rescan/list) which describes the action to take and
   * optionally one or two parameters which describes the plugin on which the
   * action has to be taken.
   * 
   * The *start* command takes a path as the first parameter and will load
   * the plugin available from this path.  Any additional parameters are
   * passed to the plugin. It will wait for the plugin to complete the
   * handshake with `lightningd` for 20 seconds at the most.
   * 
   * The *stop* command takes a plugin name as parameter. It will kill and
   * unload the specified plugin.
   * 
   * The *startdir* command takes a directory path as first parameter and will
   * load all plugins this directory contains. It will wait for each plugin to
   * complete the handshake with `lightningd` for 20 seconds at the most.
   * 
   * The *rescan* command starts all not-already-loaded plugins from the
   * default plugins directory (by default *~/.lightning/plugins*).
   * 
   * The *list* command will return all the active plugins.
  */
  plugin(payload: PluginRequest): Promise<PluginResponse> {
    return this.call<PluginResponse>("plugin", payload);
  }
    
  /**
   * The **reserveinputs** RPC command places (or increases) reservations on any
   * inputs specified in *psbt* which are known to lightningd.  It will fail
   * with an error if any of the inputs are known to be spent, and ignore inputs
   * which are unknown.
   * 
   * Normally the command will fail (with no reservations made) if an input
   * is already reserved.  If *exclusive* is set to *False*, then existing
   * reservations are simply extended, rather than causing failure.
   * 
   * By default, reservations are for the next 72 blocks (approximately 6
   * hours), but this can be changed by setting *reserve*.
  */
  reserveinputs(payload: ReserveinputsRequest): Promise<ReserveinputsResponse> {
    return this.call<ReserveinputsResponse>("reserveinputs", payload);
  }
    
  /**
   * The `sendcustommsg` RPC method allows the user to inject a custom message
   * into the communication with the peer with the given `node_id`. This is
   * intended as a low-level interface to implement custom protocol extensions on
   * top, not for direct use by end-users.
   * 
   * The message must be a hex encoded well-formed message, including the 2-byte
   * type prefix, but excluding the length prefix which will be added by the RPC
   * method. The messages must not use even-numbered types, since these may require
   * synchronous handling on the receiving side, and can cause the connection to be
   * dropped. The message types may also not use one of the internally handled
   * types, since that may cause issues with the internal state tracking of
   * c-lightning.
   * 
   * The node specified by `node_id` must be a peer, i.e., it must have a direct
   * connection with the node receiving the RPC call, and the connection must be
   * established. For a method to send arbitrary messages over multiple hops,
   * including hops that do not understand the custom message, see the
   * `createonion` and `sendonion` RPC methods. Messages can only be injected if
   * the connection is handled by `openingd` or `channeld`. Messages cannot be
   * injected when the peer is handled by `onchaind` or `closingd` since these do
   * not have a connection, or are synchronous daemons that do not handle
   * spontaneous messages.
   * 
   * On the reveiving end a plugin may implement the `custommsg` plugin hook and
   * get notified about incoming messages.
  */
  sendcustommsg(payload: SendcustommsgRequest): Promise<SendcustommsgResponse> {
    return this.call<SendcustommsgResponse>("sendcustommsg", payload);
  }
    
  /**
   * The **sendinvoice** RPC command creates and sends an invoice to the
   * issuer of an *offer* for it to pay: the offer must contain
   * *send_invoice*; see lightning-fetchinvoice(7).
   * 
   * If **fetchinvoice-noconnect** is not specified in the configuation, it
   * will connect to the destination in the (currently common!) case where it
   * cannot find a route which supports `option_onion_messages`.
   * 
   * *offer* is the bolt12 offer string beginning with "lno1".
   * 
   * *label* is the unique label to use for this invoice.
   * 
   * *msatoshi* is optional: it is required if the *offer* does not specify
   * an amount at all, or specifies it in a different currency.  Otherwise
   * you may set it (e.g. to provide a tip), and if not it defaults to the
   * amount contained in the offer (multiplied by *quantity* if any).
   * 
   * *timeout* is how many seconds to wait for the offering node to pay the
   * invoice or return an error, default 90 seconds.  This will also be the
   * timeout on the invoice that is sent.
   * 
   * *quantity* is optional: it is required if the *offer* specifies
   * *quantity_min* or *quantity_max*, otherwise it is not allowed.
  */
  sendinvoice(payload: SendinvoiceRequest): Promise<SendinvoiceResponse> {
    return this.call<SendinvoiceResponse>("sendinvoice", payload);
  }
    
  /**
   * The **sendonion** RPC command can be used to initiate a payment attempt with a
   * custom onion packet. The onion packet is used to deliver instructions for hops
   * along the route on how to behave. Normally these instructions are indications
   * on where to forward a payment and what parameters to use, or contain details
   * of the payment for the final hop. However, it is possible to add arbitrary
   * information for hops in the custom onion, allowing for custom extensions that
   * are not directly supported by c-lightning.
   * 
   * The onion is specific to the route that is being used and the *payment_hash*
   * used to construct, and therefore cannot be reused for other payments or to
   * attempt a separate route. The custom onion can generally be created using the
   * `devtools/onion` CLI tool, or the **createonion** RPC command.
   * 
   * The *onion* parameter is a hex-encoded 1366 bytes long blob that was returned
   * by either of the tools that can generate onions. It contains the payloads
   * destined for each hop and some metadata. Please refer to [BOLT 04][bolt04] for
   * further details.
   * 
   * The *first_hop* parameter instructs c-lightning which peer to send the onion
   * to. It is a JSON dictionary that corresponds to the first element of the route
   * array returned by *getroute*. The following is a minimal example telling
   * c-lightning to use any available channel to `022d223620a359a47ff7f7ac447c85c46c923da53389221a0054c11c1e3ca31d59`
   * to add an HTLC for 1002 millisatoshis and a delay of 21 blocks on top of the current blockheight:
   * 
   * ```json
   * {
   *   "id": "022d223620a359a47ff7f7ac447c85c46c923da53389221a0054c11c1e3ca31d59",
   *   "amount_msat": "1002msat",
   *   "delay": 21,
   * }
   * ```
   * 
   * The *payment_hash* parameter specifies the 32 byte hex-encoded hash to use as
   * a challenge to the HTLC that we are sending. It is specific to the onion and
   * has to match the one the onion was created with.
   * 
   * The *label* parameter can be used to provide a human readable reference to
   * retrieve the payment at a later time.
   * 
   * The *shared_secrets* parameter is a JSON list of 32 byte hex-encoded secrets
   * that were used when creating the onion. c-lightning can send a payment with a
   * custom onion without the knowledge of these secrets, however it will not be
   * able to parse an eventual error message since that is encrypted with the
   * shared secrets used in the onion. If *shared_secrets* is provided c-lightning
   * will decrypt the error, act accordingly, e.g., add a `channel_update` included
   * in the error to its network view, and set the details in *listsendpays*
   * correctly. If it is not provided c-lightning will store the encrypted onion,
   * and expose it in *listsendpays* allowing the caller to decrypt it
   * externally. The following is an example of a 3 hop onion:
   * 
   * ```json
   * [
   * 	"298606954e9de3e9d938d18a74fed794c440e8eda82e52dc08600953c8acf9c4",
   * 	"2dc094de72adb03b90894192edf9f67919cb2691b37b1f7d4a2f4f31c108b087",
   * 	"a7b82b240dbd77a4ac8ea07709b1395d8c510c73c17b4b392bb1f0605d989c85"
   * ]
   * ```
   * 
   * If *shared_secrets* is not provided the c-lightning node does not know how
   * long the route is, which channels or nodes are involved, and what an eventual
   * error could have been. It can therefore be used for oblivious payments.
   * 
   * The *partid* value, if provided and non-zero, allows for multiple parallel
   * partial payments with the same *payment_hash*.
   * 
   * The *bolt11* parameter, if provided, will be returned in
   * *waitsendpay* and *listsendpays* results.
   * 
   * The *destination* parameter, if provided, will be returned in **listpays** result.
   * 
   * The *msatoshi* parameter is used to annotate the payment, and is returned by
   * *waitsendpay* and *listsendpays*.
  */
  sendonion(payload: SendonionRequest): Promise<SendonionResponse> {
    return this.call<SendonionResponse>("sendonion", payload);
  }
    
  /**
   * The **sendonionmessage** RPC command can be used to send a message via
   * the lightning network.  These are currently used by *offers* to request
   * and receive invoices.
   * 
   * *hops* is an array of json objects: *id* as a public key of the node,
   * and *tlv* contains a hexidecimal TLV to include.
  */
  sendonionmessage(payload: SendonionmessageRequest): Promise<SendonionmessageResponse> {
    return this.call<SendonionmessageResponse>("sendonionmessage", payload);
  }
    
  /**
   * The **sendpay** RPC command attempts to send funds associated with the
   * given *payment_hash*, along a route to the final destination in the
   * route.
   * 
   * Generally, a client would call lightning-getroute(7) to resolve a route,
   * then use **sendpay** to send it. If it fails, it would call
   * lightning-getroute(7) again to retry.
   * 
   * The response will occur when the payment is on its way to the
   * destination. The **sendpay** RPC command does not wait for definite
   * success or definite failure of the payment. Instead, use the
   * **waitsendpay** RPC command to poll or wait for definite success or
   * definite failure.
   * 
   * The *label* and *bolt11* parameters, if provided, will be returned in
   * *waitsendpay* and *listsendpays* results.
   * 
   * The *msatoshi* amount must be provided if *partid* is non-zero, otherwise
   * it must be equal to the final
   * amount to the destination. By default it is in millisatoshi precision; it can be a whole number, or a whole number
   * ending in *msat* or *sat*, or a number with three decimal places ending
   * in *sat*, or a number with 1 to 11 decimal places ending in *btc*.
   * 
   * The *payment_secret* is the value that the final recipient requires to
   * accept the payment, as defined by the `payment_data` field in BOLT 4
   * and the `s` field in the BOLT 11 invoice format.  It is required if
   * *partid* is non-zero.
   * 
   * The *partid* value, if provided and non-zero, allows for multiple parallel
   * partial payments with the same *payment_hash*.  The *msatoshi* amount
   * (which must be provided) for each **sendpay** with matching
   * *payment_hash* must be equal, and **sendpay** will fail if there are
   * already *msatoshi* worth of payments pending.
   * 
   * Once a payment has succeeded, calls to **sendpay** with the same
   * *payment_hash* but a different *msatoshi* or destination will fail;
   * this prevents accidental multiple payments. Calls to **sendpay** with
   * the same *payment_hash*, *msatoshi*, and destination as a previous
   * successful payment (even if a different route or *partid*) will return immediately
   * with success.
  */
  sendpay(payload: SendpayRequest): Promise<SendpayResponse> {
    return this.call<SendpayResponse>("sendpay", payload);
  }
    
  /**
   * The **sendpsbt** is a low-level RPC command which sends a fully-signed PSBT.
   * 
   * - *psbt*: A string that represents psbt value.
   * - *reserve*: an optional number of blocks to increase reservation of any of our inputs by; default is 72.
   * 
   * EXAMPLE JSON REQUEST
   * --------------------
   * 
   * ```json
   * {
   *   "id": 82,
   *   "method": "sendpsbt",
   *   "params": {
   *     "psbt": "some_psbt"
   *   }
   * }
   * ```
  */
  sendpsbt(payload: SendpsbtRequest): Promise<SendpsbtResponse> {
    return this.call<SendpsbtResponse>("sendpsbt", payload);
  }
    
  /**
   * The **setchannel** RPC command sets channel specific routing fees, and
   * `htlc_minimum_msat` or `htlc_maximum_msat` as defined in BOLT #7. The channel has to be in
   * normal or awaiting state.  This can be checked by **listpeers**
   * reporting a *state* of CHANNELD_NORMAL or CHANNELD_AWAITING_LOCKIN
   * for the channel.
   * 
   * These changes (for a public channel) will be broadcast to the rest of
   * the network (though many nodes limit the rate of such changes they
   * will accept: we allow 2 a day, with a few extra occasionally).
   * 
   * *id* is required and should contain a scid (short channel ID), channel
   * id or peerid (pubkey) of the channel to be modified. If *id* is set to
   * "all", the updates are applied to all channels in states
   * CHANNELD_NORMAL CHANNELD_AWAITING_LOCKIN or DUALOPEND_AWAITING_LOCKIN.
   * If *id* is a peerid, all channels with the +peer in those states are
   * changed.
   * 
   * *feebase* is an optional value in millisatoshi that is added as base fee to
   * any routed payment: if omitted, it is unchanged.  It can be a whole number, or a whole
   * number ending in *msat* or *sat*, or a number with three decimal places
   * ending in *sat*, or a number with 1 to 11 decimal places ending in
   * *btc*.
   * 
   * *feeppm* is an optional value that is added proportionally per-millionths
   * to any routed payment volume in satoshi. For example, if ppm is 1,000
   * and 1,000,000 satoshi is being routed through the channel, an
   * proportional fee of 1,000 satoshi is added, resulting in a 0.1% fee.
   * 
   * *htlcmin* is an optional value that limits how small an HTLC we will
   * send: if omitted, it is unchanged (the default is no lower limit). It
   * can be a whole number, or a whole number ending in *msat* or *sat*, or
   * a number with three decimal places ending in *sat*, or a number with 1
   * to 11 decimal places ending in *btc*.  The peer also enforces a
   * minimum for the channel: setting it below will be ignored.
   * 
   * *htlcmax* is an optional value that limits how large an HTLC we will
   * send: if omitted, it is unchanged (the default is no effective
   * limit). It can be a whole number, or a whole number ending in *msat*
   * or *sat*, or a number with three decimal places ending in *sat*, or a
   * number with 1 to 11 decimal places ending in *btc*.
   * 
   * *enforcedelay* is the number of seconds to delay before enforcing the
   * new fees/htlc max (default 600, which is ten minutes).  This gives the
   * network a chance to catch up with the new rates and avoids rejecting
   * HTLCs before they do.  This only has an effect if rates are increased
   * (we always allow users to overpay fees) or *htlcmax* is decreased, and
   * only applied to a single rate increase per channel (we don't remember
   * an arbitrary number of prior feerates) and if the node is restarted
   * the updated configuration is enforced immediately.
   * 
   * @since c-lightning 0.10.3 (UNRELEASED)
  */
  setchannel(payload: SetchannelRequest): Promise<SetchannelResponse> {
    return this.call<SetchannelResponse>("setchannel", payload);
  }
    
  /**
   * The **setchannelfee** RPC command sets channel specific routing fees as
   * defined in BOLT #7. The channel has to be in normal or awaiting state.
   * This can be checked by **listpeers** reporting a *state* of
   * CHANNELD_NORMAL, CHANNELD_AWAITING_LOCKIN or DUALOPEND_AWAITING_LOCKIN for the channel.
   * 
   * *id* is required and should contain a scid (short channel ID), channel
   * id or peerid (pubkey) of the channel to be modified. If *id* is set to
   * "all", the fees for all channels are updated that are in state
   * CHANNELD_NORMAL, CHANNELD_AWAITING_LOCKIN or
   * DUALOPEND_AWAITING_LOCKIN.  If *id* is a peerid, all channels with the
   * peer in those states are changed.
   * 
   * *base* is an optional value in millisatoshi that is added as base fee to
   * any routed payment. If the parameter is left out, the global config
   * value fee-base will be used again. It can be a whole number, or a whole
   * number ending in *msat* or *sat*, or a number with three decimal places
   * ending in *sat*, or a number with 1 to 11 decimal places ending in
   * *btc*.
   * 
   * *ppm* is an optional value that is added proportionally per-millionths
   * to any routed payment volume in satoshi. For example, if ppm is 1,000
   * and 1,000,000 satoshi is being routed through the channel, an
   * proportional fee of 1,000 satoshi is added, resulting in a 0.1% fee. If
   * the parameter is left out, the global config value will be used again.
   * 
   * *enforcedelay* is the number of seconds to delay before enforcing the
   * new fees (default 600, which is ten minutes).  This gives the network
   * a chance to catch up with the new rates and avoids rejecting HTLCs
   * before they do.  This only has an effect if rates are increased (we
   * always allow users to overpay fees), only applies to a single rate
   * increase per channel (we don't remember an arbitrary number of prior
   * feerates) and if the node is restarted the updated fees are enforced
   * immediately.
  */
  setchannelfee(payload: SetchannelfeeRequest): Promise<SetchannelfeeResponse> {
    return this.call<SetchannelfeeResponse>("setchannelfee", payload);
  }
    
  /**
   * The **signmessage** RPC command creates a digital signature of
   * *message* using this node's secret key.  A receiver who knows your
   * node's *id* and the *message* can be sure that the resulting signature could
   * only be created by something with access to this node's secret key.
   * 
   * *message* must be less that 65536 characters.
  */
  signmessage(payload: SignmessageRequest): Promise<SignmessageResponse> {
    return this.call<SignmessageResponse>("signmessage", payload);
  }
    
  /**
   * **signpsbt** is a low-level RPC command which signs a PSBT as defined by
   * BIP-174.
   * 
   * - *psbt*: A string that represents the PSBT value.
   * - *signonly*: An optional array of input numbers to sign.
   * 
   * By default, all known inputs are signed, and others ignored: with
   * *signonly*, only those inputs are signed, and an error is returned if
   * one of them cannot be signed.
   * 
   * Note that the command will fail if there are no inputs to sign, or
   * if the inputs to be signed were not previously reserved.
   * 
   * 
   * EXAMPLE JSON REQUEST
   * --------------------
   * ```json
   * {
   *   "id": 82,
   *   "method": "signpsbt",
   *   "params": {
   *     "psbt": "some_psbt"
   *   }
   * }
   * ```
  */
  signpsbt(payload: SignpsbtRequest): Promise<SignpsbtResponse> {
    return this.call<SignpsbtResponse>("signpsbt", payload);
  }
    
  /**
   * The **stop** is a RPC command to shut off the c-lightning node.
   * 
   * EXAMPLE JSON REQUEST
   * ------------
   * ```json
   * {
   *   "id": 82,
   *   "method": "stop",
   *   "params": {}
   * }
   * ```
  */
  stop(payload: StopRequest = {}): Promise<StopResponse> {
    return this.call<StopResponse>("stop", payload);
  }
    
  /**
   * The **txdiscard** RPC command releases inputs which were reserved for
   * use of the *txid* from lightning-txprepare(7).
  */
  txdiscard(payload: TxdiscardRequest): Promise<TxdiscardResponse> {
    return this.call<TxdiscardResponse>("txdiscard", payload);
  }
    
  /**
   * The **txprepare** RPC command creates an unsigned transaction which
   * spends funds from c-lightning's internal wallet to the outputs specified
   * in *outputs*.
   * 
   * The *outputs* is the array of output that include *destination*
   * and *amount*({*destination*: *amount*}). Its format is like:
   * [{address1: amount1}, {address2: amount2}]
   * or
   * [{address: *all*}].
   * It supports any number of **confirmed** outputs.
   * 
   * The *destination* of output is the address which can be of any Bitcoin accepted
   * type, including bech32.
   * 
   * The *amount* of output is the amount to be sent from the internal wallet
   * (expressed, as name suggests, in amount). The string *all* can be used to specify
   * all available funds. Otherwise, it is in amount precision; it can be a whole
   * number, a whole number ending in *sat*, a whole number ending in *000msat*,
   * or a number with 1 to 8 decimal places ending in *btc*.
   * 
   * *feerate* is an optional feerate to use. It can be one of the strings
   * *urgent* (aim for next block), *normal* (next 4 blocks or so) or *slow*
   * (next 100 blocks or so) to use lightningd's internal estimates: *normal*
   * is the default.
   * 
   * Otherwise, *feerate* is a number, with an optional suffix: *perkw* means
   * the number is interpreted as satoshi-per-kilosipa (weight), and *perkb*
   * means it is interpreted bitcoind-style as satoshi-per-kilobyte. Omitting
   * the suffix is equivalent to *perkb*.
   * 
   * *minconf* specifies the minimum number of confirmations that used
   * outputs should have. Default is 1.
   * 
   * *utxos* specifies the utxos to be used to fund the transaction, as an array
   * of "txid:vout". These must be drawn from the node's available UTXO set.
   * 
   * **txprepare** is similar to the first part of a **withdraw** command, but
   * supports multiple outputs and uses *outputs* as parameter. The second part
   * is provided by **txsend**.
  */
  txprepare(payload: TxprepareRequest): Promise<TxprepareResponse> {
    return this.call<TxprepareResponse>("txprepare", payload);
  }
    
  /**
   * The **txsend** RPC command signs and broadcasts a transaction created by
   * **txprepare**.
  */
  txsend(payload: TxsendRequest): Promise<TxsendResponse> {
    return this.call<TxsendResponse>("txsend", payload);
  }
    
  /**
   * The **unreserveinputs** RPC command releases (or reduces reservation)
   * on UTXOs which were previously marked as reserved, generally by
   * lightning-reserveinputs(7).
   * 
   * The inputs to unreserve are the inputs specified in the passed-in *psbt*.
   * 
   * If *reserve* is specified, it is the number of blocks to decrease
   * reservation by; default is 72.
  */
  unreserveinputs(payload: UnreserveinputsRequest): Promise<UnreserveinputsResponse> {
    return this.call<UnreserveinputsResponse>("unreserveinputs", payload);
  }
    
  /**
   * *utxopsbt* is a low-level RPC command which creates a PSBT using unreserved
   * inputs in the wallet, optionally reserving them as well.
   * 
   * It deliberately mirrors the parameters and output of
   * lightning-fundpsbt(7) except instead of an optional *minconf*
   * parameter to select unreserved outputs from the wallet, it takes a
   * compulsory list of outputs to use.
   * 
   * *utxos* must be an array of "txid:vout", each of which must be
   * reserved or available: the total amount must be sufficient to pay for
   * the resulting transaction plus *startweight* at the given *feerate*,
   * with at least *satoshi* left over (unless *satoshi* is **all**, which
   * is equivalent to setting it to zero).
   * 
   * *reserve* is either boolean or a number: if *true* or a non-zero
   * number then *reserveinputs* is called (successfully, with
   * *exclusive* true) on the returned PSBT for this number of blocks (or
   * 72 blocks if *reserve* is simply *true*).
   * 
   * Unless *reservedok* is set to true (default is false) it will also fail
   * if any of the *utxos* are already reserved.
   * 
   * *locktime* is an optional locktime: if not set, it is set to a recent
   * block height.
   * 
   * *min_witness_weight* is an optional minimum weight to use for a UTXO's
   * witness. If the actual witness weight is greater than the provided minimum,
   * the actual witness weight will be used.
   * 
   * *excess_as_change* is an optional boolean to flag to add a change output
   * for the excess sats.
  */
  utxopsbt(payload: UtxopsbtRequest): Promise<UtxopsbtResponse> {
    return this.call<UtxopsbtResponse>("utxopsbt", payload);
  }
    
  /**
   * The **waitanyinvoice** RPC command waits until an invoice is paid, then
   * returns a single entry as per **listinvoice**. It will not return for
   * any invoices paid prior to or including the *lastpay_index*.
   * 
   * This is usually called iteratively: once with no arguments, then
   * repeatedly with the returned *pay_index* entry. This ensures that no
   * paid invoice is missed.
   * 
   * The *pay_index* is a monotonically-increasing number assigned to an
   * invoice when it gets paid. The first valid *pay_index* is 1; specifying
   * *lastpay_index* of 0 equivalent to not specifying a *lastpay_index*.
   * Negative *lastpay_index* is invalid.
   * 
   * If *timeout* is specified, wait at most that number of seconds, which
   * must be an integer.
   * If the specified *timeout* is reached, this command will return with an
   * error.
   * You can specify this to 0 so that **waitanyinvoice** will return
   * immediately with an error if no pending invoice is available yet.
   * If unspecified, this command will wait indefinitely.
  */
  waitanyinvoice(payload: WaitanyinvoiceRequest = {}): Promise<WaitanyinvoiceResponse> {
    return this.call<WaitanyinvoiceResponse>("waitanyinvoice", payload);
  }
    
  /**
   * The **waitblockheight** RPC command waits until the blockchain
   * has reached the specified *blockheight*.
   * It will only wait up to *timeout* seconds (default 60).
   * 
   * If the *blockheight* is a present or past block height, then this
   * command returns immediately.
  */
  waitblockheight(payload: WaitblockheightRequest): Promise<WaitblockheightResponse> {
    return this.call<WaitblockheightResponse>("waitblockheight", payload);
  }
    
  /**
   * The **waitinvoice** RPC command waits until a specific invoice is paid,
   * then returns that single entry as per **listinvoice**.
  */
  waitinvoice(payload: WaitinvoiceRequest): Promise<WaitinvoiceResponse> {
    return this.call<WaitinvoiceResponse>("waitinvoice", payload);
  }
    
  /**
   * The **waitsendpay** RPC command polls or waits for the status of an
   * outgoing payment that was initiated by a previous **sendpay**
   * invocation.
   * 
   * The *partid* argument must match that of the **sendpay** command.
   * 
   * Optionally the client may provide a *timeout*, an integer in seconds,
   * for this RPC command to return. If the *timeout* is provided and the
   * given amount of time passes without the payment definitely succeeding or
   * definitely failing, this command returns with a 200 error code (payment
   * still in progress). If *timeout* is not provided this call will wait
   * indefinitely.
   * 
   * Indicating a *timeout* of 0 effectively makes this call a pollable query
   * of the status of the payment.
   * 
   * If the payment completed with success, this command returns with
   * success. Otherwise, if the payment completed with failure, this command
   * returns an error.
  */
  waitsendpay(payload: WaitsendpayRequest): Promise<WaitsendpayResponse> {
    return this.call<WaitsendpayResponse>("waitsendpay", payload);
  }
    
  /**
   * The **withdraw** RPC command sends funds from c-lightning's internal
   * wallet to the address specified in *destination*.
   * 
   * The address can be of any Bitcoin accepted type, including bech32.
   * 
   * *satoshi* is the amount to be withdrawn from the internal wallet
   * (expressed, as name suggests, in satoshi). The string *all* can be used
   * to specify withdrawal of all available funds. Otherwise, it is in
   * satoshi precision; it can be a whole number, a whole number ending in
   * *sat*, a whole number ending in *000msat*, or a number with 1 to 8
   * decimal places ending in *btc*.
   * 
   * *feerate* is an optional feerate to use. It can be one of the strings
   * *urgent* (aim for next block), *normal* (next 4 blocks or so) or *slow*
   * (next 100 blocks or so) to use lightningd's internal estimates: *normal*
   * is the default.
   * 
   * Otherwise, *feerate* is a number, with an optional suffix: *perkw* means
   * the number is interpreted as satoshi-per-kilosipa (weight), and *perkb*
   * means it is interpreted bitcoind-style as satoshi-per-kilobyte. Omitting
   * the suffix is equivalent to *perkb*.
   * 
   * *minconf* specifies the minimum number of confirmations that used
   * outputs should have. Default is 1.
   * 
   * *utxos* specifies the utxos to be used to be withdrawn from, as an array
   * of "txid:vout". These must be drawn from the node's available UTXO set.
  */
  withdraw(payload: WithdrawRequest): Promise<WithdrawResponse> {
    return this.call<WithdrawResponse>("withdraw", payload);
  }
    
}


export type { AddgossipRequest, AddgossipResponse } from "./addgossip";
export type { AutocleaninvoiceRequest, AutocleaninvoiceResponse } from "./autocleaninvoice";
export type { CheckRequest, CheckResponse } from "./check";
export type { CheckmessageRequest, CheckmessageResponse } from "./checkmessage";
export type { CloseRequest, CloseResponse, Type as CloseType } from "./close";
export type { ConnectRequest, ConnectResponse, Address as ConnectAddress, Type as ConnectType, Direction as ConnectDirection } from "./connect";
export type { CreateinvoiceRequest, CreateinvoiceResponse, Status as CreateinvoiceStatus } from "./createinvoice";
export type { CreateonionRequest, CreateonionResponse } from "./createonion";
export type { DatastoreRequest, DatastoreResponse } from "./datastore";
export type { DecodeRequest, DecodeResponse } from "./decode";
export type { DecodepayRequest, DecodepayResponse, Extra as DecodepayExtra, Fallback as DecodepayFallback, Type as DecodepayType, Route as DecodepayRoute } from "./decodepay";
export type { DeldatastoreRequest, DeldatastoreResponse } from "./deldatastore";
export type { DelexpiredinvoiceRequest, DelexpiredinvoiceResponse } from "./delexpiredinvoice";
export type { DelinvoiceRequest, DelinvoiceResponse, Status as DelinvoiceStatus } from "./delinvoice";
export type { DelpayRequest, DelpayResponse, Payment as DelpayPayment, Status as DelpayStatus } from "./delpay";
export type { DisableofferRequest, DisableofferResponse } from "./disableoffer";
export type { DisconnectRequest, DisconnectResponse } from "./disconnect";
export type { FeeratesRequest, FeeratesResponse, OnchainFeeEstimates as FeeratesOnchainFeeEstimates, Perkb as FeeratesPerkb, Perkw as FeeratesPerkw } from "./feerates";
export type { FetchinvoiceRequest, FetchinvoiceResponse, Changes as FetchinvoiceChanges, NextPeriod as FetchinvoiceNextPeriod } from "./fetchinvoice";
export type { FundchannelRequest, FundchannelResponse } from "./fundchannel";
export type { FundchannelCancelRequest, FundchannelCancelResponse } from "./fundchannel_cancel";
export type { FundchannelCompleteRequest, FundchannelCompleteResponse } from "./fundchannel_complete";
export type { FundchannelStartRequest, FundchannelStartResponse } from "./fundchannel_start";
export type { FunderupdateRequest, FunderupdateResponse, Policy as FunderupdatePolicy } from "./funderupdate";
export type { FundpsbtRequest, FundpsbtResponse, Reservation as FundpsbtReservation } from "./fundpsbt";
export type { GetinfoRequest, GetinfoResponse, Address as GetinfoAddress, AddressType as GetinfoAddressType, Binding as GetinfoBinding, BindingType as GetinfoBindingType, OurFeatures as GetinfoOurFeatures } from "./getinfo";
export type { GetlogRequest, GetlogResponse, Log as GetlogLog, Type as GetlogType } from "./getlog";
export type { GetrouteRequest, GetrouteResponse, Route as GetrouteRoute, Style as GetrouteStyle } from "./getroute";
export type { GetsharedsecretRequest, GetsharedsecretResponse } from "./getsharedsecret";
export type { HelpRequest, HelpResponse, Help as HelpHelp } from "./help";
export type { InvoiceRequest, InvoiceResponse } from "./invoice";
export type { KeysendRequest, KeysendResponse, Status as KeysendStatus } from "./keysend";
export type { ListchannelsRequest, ListchannelsResponse, Channel as ListchannelsChannel } from "./listchannels";
export type { ListconfigsRequest, ListconfigsResponse, ImportantPlugin as ListconfigsImportantPlugin, Plugin as ListconfigsPlugin } from "./listconfigs";
export type { ListdatastoreRequest, ListdatastoreResponse, Datastore as ListdatastoreDatastore } from "./listdatastore";
export type { ListforwardsRequest, ListforwardsResponse, Forward as ListforwardsForward, Status as ListforwardsStatus } from "./listforwards";
export type { ListfundsRequest, ListfundsResponse, Channel as ListfundsChannel, State as ListfundsState, Output as ListfundsOutput, Status as ListfundsStatus } from "./listfunds";
export type { ListinvoicesRequest, ListinvoicesResponse, Invoice as ListinvoicesInvoice, Status as ListinvoicesStatus } from "./listinvoices";
export type { ListnodesRequest, ListnodesResponse, Node as ListnodesNode } from "./listnodes";
export type { ListoffersRequest, ListoffersResponse, Offer as ListoffersOffer } from "./listoffers";
export type { ListpaysRequest, ListpaysResponse, Pay as ListpaysPay, Status as ListpaysStatus } from "./listpays";
export type { ListpeersRequest, ListpeersResponse, Peer as ListpeersPeer, Channel as ListpeersChannel, Closer as ListpeersCloser, Feature as ListpeersFeature, Feerate as ListpeersFeerate, Funding as ListpeersFunding, Htlc as ListpeersHtlc, Direction as ListpeersDirection, Inflight as ListpeersInflight, State as ListpeersState, StateChange as ListpeersStateChange, Cause as ListpeersCause, Log as ListpeersLog, Type as ListpeersType } from "./listpeers";
export type { ListsendpaysRequest, ListsendpaysResponse, Payment as ListsendpaysPayment, Status as ListsendpaysStatus } from "./listsendpays";
export type { ListtransactionsRequest, ListtransactionsResponse, Transaction as ListtransactionsTransaction, Input as ListtransactionsInput, Type as ListtransactionsType, Output as ListtransactionsOutput } from "./listtransactions";
export type { MultifundchannelRequest, MultifundchannelResponse, ChannelID as MultifundchannelChannelID, Failed as MultifundchannelFailed, Error as MultifundchannelError, Method as MultifundchannelMethod } from "./multifundchannel";
export type { MultiwithdrawRequest, MultiwithdrawResponse } from "./multiwithdraw";
export type { NotificationsRequest, NotificationsResponse } from "./notifications";
export type { OfferRequest, OfferResponse } from "./offer";
export type { OfferoutRequest, OfferoutResponse } from "./offerout";
export type { OpenchannelAbortRequest, OpenchannelAbortResponse } from "./openchannel_abort";
export type { OpenchannelBumpRequest, OpenchannelBumpResponse } from "./openchannel_bump";
export type { OpenchannelInitRequest, OpenchannelInitResponse } from "./openchannel_init";
export type { OpenchannelSignedRequest, OpenchannelSignedResponse } from "./openchannel_signed";
export type { OpenchannelUpdateRequest, OpenchannelUpdateResponse } from "./openchannel_update";
export type { ParsefeerateRequest, ParsefeerateResponse } from "./parsefeerate";
export type { PayRequest, PayResponse, Status as PayStatus } from "./pay";
export type { PingRequest, PingResponse } from "./ping";
export type { PluginRequest, PluginResponse, Command as PluginCommand } from "./plugin";
export type { ReserveinputsRequest, ReserveinputsResponse, Reservation as ReserveinputsReservation } from "./reserveinputs";
export type { SendcustommsgRequest, SendcustommsgResponse } from "./sendcustommsg";
export type { SendinvoiceRequest, SendinvoiceResponse, Status as SendinvoiceStatus } from "./sendinvoice";
export type { SendonionRequest, SendonionResponse, Status as SendonionStatus } from "./sendonion";
export type { SendonionmessageRequest, SendonionmessageResponse } from "./sendonionmessage";
export type { SendpayRequest, SendpayResponse, Status as SendpayStatus } from "./sendpay";
export type { SendpsbtRequest, SendpsbtResponse } from "./sendpsbt";
export type { SetchannelRequest, SetchannelResponse, Channel as SetchannelChannel } from "./setchannel";
export type { SetchannelfeeRequest, SetchannelfeeResponse, Channel as SetchannelfeeChannel } from "./setchannelfee";
export type { SignmessageRequest, SignmessageResponse } from "./signmessage";
export type { SignpsbtRequest, SignpsbtResponse } from "./signpsbt";
export type { StopRequest, StopResponse } from "./stop";
export type { TxdiscardRequest, TxdiscardResponse } from "./txdiscard";
export type { TxprepareRequest, TxprepareResponse } from "./txprepare";
export type { TxsendRequest, TxsendResponse } from "./txsend";
export type { UnreserveinputsRequest, UnreserveinputsResponse, Reservation as UnreserveinputsReservation } from "./unreserveinputs";
export type { UtxopsbtRequest, UtxopsbtResponse, Reservation as UtxopsbtReservation } from "./utxopsbt";
export type { WaitanyinvoiceRequest, WaitanyinvoiceResponse, Status as WaitanyinvoiceStatus } from "./waitanyinvoice";
export type { WaitblockheightRequest, WaitblockheightResponse } from "./waitblockheight";
export type { WaitinvoiceRequest, WaitinvoiceResponse, Status as WaitinvoiceStatus } from "./waitinvoice";
export type { WaitsendpayRequest, WaitsendpayResponse, Status as WaitsendpayStatus } from "./waitsendpay";
export type { WithdrawRequest, WithdrawResponse } from "./withdraw";
