import { CryptoHookFactory } from '@types/hooks'
import useSWR from 'swr'

// deps -> provider, ethereum, contract (web3State)
export const hookFactory: CryptoHookFactory<string, string> = (deps: any) => (params: string) => {
  const swrRes = useSWR('web3/useAccount', () => {
    console.log(deps)
    console.log(params)

    return 'Test User'
  })
  return swrRes
}

export const useAccount = hookFactory({
  ethereum: undefined,
  contract: undefined,
  provider: undefined,
})
