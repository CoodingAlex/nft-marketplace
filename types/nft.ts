export interface NftAttribute {
  trait_type: string
  value: string
}

export interface NftMeta {
  description: string
  image: string
  name: string
  attributes: NftAttribute[]
}
