export interface ResponseModel<T>{
  count: number;
  next: string;
  previous: string;
  results: T;
}
