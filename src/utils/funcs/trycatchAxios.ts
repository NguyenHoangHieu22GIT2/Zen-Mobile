import { AxiosResponse } from "axios";
import toast from "../toast/toast";
export async function trycatchAxios<T>(
  fn: () => Promise<AxiosResponse<T, unknown>>
) {
  try {
    const result = await fn();
    return result;
  } catch (error) {
    console.log(error);
    toast.danger({
      message: error.message,
      subMessage: error.message,
      duration: 3000,
    });
  }
}
