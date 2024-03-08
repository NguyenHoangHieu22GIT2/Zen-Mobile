import { HTTP_POST_SUCCESS } from "@/constants/http.status";
import http from "@/libs/axios.base";
import { zRegisterInputs, ztRegisterInputs } from "@/libs/zod";
import { useState } from "react";
import { router } from "expo-router";
export function useRegister() {
  const [inputs, setInputs] = useState<ztRegisterInputs>({
    username: "brangto",
    email: "hoanghieufro@gmail.com",
    password: "SonGoku@1",
    confirmPassword: "SonGoku@1",
    gender: "male",
  });

  function changeInputs(type: keyof ztRegisterInputs, value: string) {
    setInputs((oldInputs) => ({ ...oldInputs, [type]: value }));
  }

  // TODO: FINISH WITH NOTIFICATION
  async function submitRegister() {
    const zodResult = zRegisterInputs.safeParse(inputs);
    if (!zodResult.success) return false;
    const result = await http.post(process.env.HTTP_ENDPOINT_REGISTER, inputs);
    if (result.status !== HTTP_POST_SUCCESS) {
      console.log("Failed Register");
    } else {
      console.log("Register successfully");
      router.push("/login");
    }
  }

  return {
    inputs,
    changeInputs,
    submitRegister,
  };
}
