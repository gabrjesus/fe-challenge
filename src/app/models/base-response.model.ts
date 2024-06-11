export interface IBaseResponse<T> {
  info: IBaseResponseInfo;
  results: T;
}

export interface IBaseResponseInfo {
  count: number;
  pages: number;
  next: string;
  prev: null;
}
