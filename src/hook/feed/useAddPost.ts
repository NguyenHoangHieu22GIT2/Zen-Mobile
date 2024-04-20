import http from "@/libs/axios.base";
import { zAddPostInputs, ztAddPostInputs } from "@/libs/zod";
import { trycatchAxios } from "@/utils/funcs/trycatchAxios";
import toast from "@/utils/toast/toast";
import { useState } from "react";

export function useAddPost() {
  const [inputs, setInputs] = useState<ztAddPostInputs>({
    title: "",
    body: "",
  });

  function changeInputs(type: keyof ztAddPostInputs, value: string) {
    setInputs((oldInputs) => ({ ...oldInputs, [type]: value }));
  }

  async function submitAddPost() {
    const zodResult = zAddPostInputs.safeParse(inputs);
    if (!zodResult.success) {
      toast.danger({
        message: "Invalid inputs",
        subMessage: "Please check your inputs",
        duration: 3000,
      });
      return;
    }
    return trycatchAxios(async () => {
      const result = await http.post(
        process.env.EXPO_PUBLIC_HTTP_ENDPOINT_BASE_POST,
        inputs
      );
      toast.success({
        message: "Post added",
        subMessage: "Your post has been added",
        duration: 3000,
      });
      console.log(result);
      return result;
    });
  }

  return {
    inputs,
    changeInputs,
    submitAddPost,
  };
}
