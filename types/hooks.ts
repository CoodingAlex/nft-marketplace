import { MetaMaskInpageProvider } from '@metamask/providers'
import { Contract, providers } from 'ethers'
import { SWRResponse } from 'swr'

export type Web3Dependencies = {
  provider?: providers.Web3Provider
  contract?: Contract
  ethereum?: MetaMaskInpageProvider
}

export type CryptoHookFactory<P = any, D = any> = {
  (d: Partial<Web3Dependencies>): CryptoHandlerHook<P, D>
}

export type CryptoHandlerHook<P, D> = (params: P) => CryptoSWRResponse<D>

export type CryptoSWRResponse<D> = SWRResponse<D>
