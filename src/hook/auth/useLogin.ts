import http from "@/libs/axios.base";
import { zLoginInputs, ztLoginInputs } from "@/libs/zod/auth/login.type";
import toast from "@/utils/toast/toast";
import { useState } from "react";

export function useLogin() {
  const [inputs, setInputs] = useState<ztLoginInputs>({
    email: "hoanghieufro@gmail.com",
    password: "SonGoku@1",
  });

  function changeInputs(type: keyof ztLoginInputs, value: string) {
    setInputs((oldInputs) => ({ ...oldInputs, [type]: value }));
  }

  async function submitLogin() {
    const zodResult = zLoginInputs.safeParse(inputs);
    if (!zodResult.success) {
      toast.danger({
        message: "Invalid inputs",
        subMessage: "Please check your inputs",
        duration: 3000,
      });
      return;
    }
    try {
      const result = await http.patch("auth/login-account", inputs);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    changeInputs,
    inputs,
    submitLogin,
  };
}
