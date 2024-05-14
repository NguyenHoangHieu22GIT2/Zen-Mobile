import http from "@/libs/axios.base";
import { zLoginInputs, ztLoginInputs } from "@/libs/zod/auth/login.zod";
import { useAuthStore } from "@/libs/zustand/auth.zustand";
import { EndUser } from "@/types/enduser.type";
import toast from "@/utils/toast/toast";
import { router } from "expo-router";
import { useState } from "react";

export function useLogin() {
  const authStore = useAuthStore((state) => state);
  const [inputs, setInputs] = useState<ztLoginInputs>({
    email: "hoanghieufro@gmail.com",
    password: "SonGoku@1"
  });
  const [isLoading, setIsLoading] = useState(false);

  function changeInputs(type: keyof ztLoginInputs, value: string) {
    setInputs((oldInputs) => ({ ...oldInputs, [type]: value }));
  }

  async function submitLogin() {
    setIsLoading(true);
    console.log(process.env.EXPO_PUBLIC_BASE_URL, inputs);
    const zodResult = zLoginInputs.safeParse(inputs);
    if (!zodResult.success) {
      toast.danger({
        message: "Invalid inputs",
        subMessage: "Please check your inputs",
        duration: 3000
      });
      return;
    }
    try {
      const result = await http.patch<EndUser>(
        process.env.EXPO_PUBLIC_HTTP_ENDPOIND_LOGIN,
        inputs
      );
      console.log("cho nhat:", result.data);
      authStore.setEndUser(result.data);
      toast.success({
        message: "Login successfully!",
        subMessage: "Redirecting to popular page...",
        duration: 3000
      });
      router.push("/popular/");
    } catch (error) {
      toast.danger({
        message: error.code,
        subMessage: error.response?.data.message || "Please check your inputs",
        duration: 3000
      });
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    changeInputs,
    inputs,
    isLoading,
    submitLogin
  };
}
