import { HTTP_POST_SUCCESS } from "@/constants/http.status";
import http from "@/libs/axios.base";
import { zRegisterInputs, ztRegisterInputs } from "@/libs/zod";
import { useState } from "react";
import { router } from "expo-router";
import toast from "@/utils/toast/toast";
import { EndUser } from "@/types/enduser.type";
export function useRegister() {
  const [inputs, setInputs] = useState<ztRegisterInputs>({
    username: "brangto",
    email: "hoanghieufro@gmail.com",
    password: "SonGoku@1",
    confirmPassword: "SonGoku@1",
    gender: "male"
  });
  const [isLoading, setIsLoading] = useState(false);

  function changeInputs(type: keyof ztRegisterInputs, value: string) {
    setInputs((oldInputs) => ({ ...oldInputs, [type]: value }));
  }

  //apply loading for submitRegister
  async function submitRegister() {
    const zodResult = zRegisterInputs.safeParse(inputs);
    if (!zodResult.success) {
      toast.danger({
        message: "Invalid inputs",
        subMessage: "Please check your inputs",
        duration: 3000
      });
      return;
    }
    try {
      setIsLoading(true);
      const result = await http.post<EndUser>(
        process.env.EXPO_PUBLIC_HTTP_ENDPOINT_REGISTER,
        inputs
      );
      if (result.status !== HTTP_POST_SUCCESS) {
        toast.danger({ message: "Failed signed up!" });
      } else {
        toast.success({ message: "Successfully signed up!" });
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
      toast.danger({
        message: error.message,
        subMessage: error.response?.data.message || "Please check your inputs",
        duration: 3000
      });
    } finally {
      setIsLoading(false);
    }
  }
  return {
    inputs,
    isLoading,
    changeInputs,
    submitRegister
  };
}
