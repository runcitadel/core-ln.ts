export interface PeerConnectRequestBody {
  /** Pubkey of the peer */
  id: string;
}

export interface PeerConnectResponse {
  /** id */
  id?: string;
}
