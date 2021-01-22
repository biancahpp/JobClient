export interface JobRaw{
  title: string,
  company: string,
  img: string,
  type: string,
  location: string,
  tags: string[],
  salary: number,
  featured: boolean,
}

export interface Job extends JobRaw {
  _id: string,
  __v?: number,
  isAvailable: boolean,
  date: string
}