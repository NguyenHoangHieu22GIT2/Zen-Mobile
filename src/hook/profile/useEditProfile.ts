import http from "@/libs/axios.base";
import {
  zEditProfileInputs,
  ztEditProfileInputs
} from "@/libs/zod/profile/edit-profile.zod";
import { useAuthStore } from "@/libs/zustand/auth.zustand";
import { trycatchAxios } from "@/utils/funcs/trycatchAxios";
import toast from "@/utils/toast/toast";
import { router } from "expo-router";
import { useState } from "react";

export function useEditProfile() {
  const authStore = useAuthStore((state) => state);

  const [inputs, setInputs] = useState<ztEditProfileInputs>({
    username: authStore.endUser.username,
    description: authStore.endUser.description
  });

  function changeInputs(type: keyof ztEditProfileInputs, value: string) {
    setInputs((oldInputs) => ({ ...oldInputs, [type]: value }));
  }

  async function submitEditProfile() {
    const zodResult = zEditProfileInputs.safeParse(inputs);

    if (!zodResult.success) {
      toast.danger({
        message: "Invalid inputs",
        subMessage: "Please check your inputs",
        duration: 3000
      });
    }

    return trycatchAxios(async () => {
      const result = await http.patch("endusers/change-information", inputs);
      toast.success({
        message: "Profile updated",
        subMessage: "Your profile has been updated",
        duration: 3000
      });

      authStore.setEndUser(result.data);

      router.push("/profile/" + authStore.endUser._id);

      return result;
    });
  }

  return {
    inputs,
    changeInputs,
    submitEditProfile
  };
}
