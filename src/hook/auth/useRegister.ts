import { HTTP_POST_SUCCESS } from "@/constants/http.status";
import http from "@/libs/axios.base";
import { zRegisterInputs, ztRegisterInputs } from "@/libs/zod";
import { useState } from "react";
import { router } from "expo-router";
import toast from "@/utils/toast/toast";
import { CanceledError } from "axios";
export function useRegister() {
  const [inputs, setInputs] = useState<ztRegisterInputs>({
    username: "brangto",
    email: "hoanghieufro@gmail.com",
    password: "SonGoku@1",
    confirmPassword: "SonGoku@1",
    gender: "male"
  });

  function changeInputs(type: keyof ztRegisterInputs, value: string) {
    setInputs((oldInputs) => ({ ...oldInputs, [type]: value }));
  }

  // TODO: FINISH WITH NOTIFICATION
  async function submitRegister() {
    // toast.success({ message: "Successfully signed up!" });
    // router.push("/popular");
    const zodResult = zRegisterInputs.safeParse(inputs);
    if (!zodResult.success) return false;
    try {
      const result = await http.post(
        process.env.HTTP_ENDPOINT_REGISTER,
        inputs
      );
      console.log(result);
      // if (result.status !== HTTP_POST_SUCCESS) {
      //   console.log("Failed Register");
      // } else {
      toast.success({ message: "Successfully signed up!" });
      router.push("/login");
      // }
    } catch (error) {
      toast.danger({
        message: error.message,
        subMessage: "Breh",
        duration: 3000
      });
      console.log(error.message);
      console.log(error.request);
      console.log(error.error);
    }
  }

  return {
    inputs,
    changeInputs,
    submitRegister
  };
}
