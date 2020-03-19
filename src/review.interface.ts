/** Interfaz para las reviews */
export interface Review
{
  id_review: number,
  rating: number,
  author: string,
  date: Date,
  comment: string,
  useful_count: number
}
