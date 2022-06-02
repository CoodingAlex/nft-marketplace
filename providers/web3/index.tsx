import { ethers } from 'ethers'
import { useEffect } from 'react'
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react'
import { createDefaultState, loadContract, Web3State } from './utils'

const Web3Context = createContext<Web3State>(createDefaultState())

const Web3Provider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [web3Api, setWeb3Api] = useState<Web3State>(createDefaultState())

  useEffect(() => {
    async function initWeb3() {
      const provider = new ethers.providers.Web3Provider(window.ethereum as any)
      const contract = await loadContract('NftMarket', provider)
      

      setWeb3Api({
        ethereum: window.ethereum,
        provider: provider,
        contract: contract,
        isLoading: false,
      })
    }
    initWeb3()
  }, [])

  return <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>
}

export const useWeb3 = () => {
  return useContext(Web3Context)
}

export default Web3Provider
