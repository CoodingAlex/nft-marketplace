import React from 'react'
import { NftMeta } from '../../../types'
import NftItem from '../item'

type NftListProps = {
  nfts: NftMeta[]
}

const NftList: React.FC<NftListProps> = ({ nfts }) => {
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {nfts.map((nft: any) => (
        <div
          className="flex flex-col rounded-lg shadow-lg overflow-hidden"
          key={nft.image}
        >
          <NftItem item={nft} />
        </div>
      ))}
    </div>
  )
}

export default NftList
