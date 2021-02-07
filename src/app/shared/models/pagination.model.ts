export interface PaginationModel <T> {
  count: number;
  next: string;
  previous: string;
  results: T;
}
