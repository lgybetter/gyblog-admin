export interface IPost {
  title: string,
  subTitle: string,
  image: string,
  created: number
}

export interface IPosts {
  totalCount: number,
  list: IPost[]
}