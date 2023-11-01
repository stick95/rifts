export interface Occ {
  id: number,
  name: string,
  rccs: [],
  stats?: {}
}

export interface Rcc {
  id: number,
  name: string,
  occs: [],
  stats?: {}
}
