import http from "../axios.base";

export const fetcher = (url: string) => http.get(url).then((res) => res.data);
