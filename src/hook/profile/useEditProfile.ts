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
  const [image, setImage] = useState(authStore.endUser.avatar);

  function changeInputs(type: keyof ztEditProfileInputs, value: string) {
    setInputs((oldInputs) => ({ ...oldInputs, [type]: value }));
  }

  async function submitEditProfile() {
    const zodResult = zEditProfileInputs.safeParse(inputs);

    if (image !== authStore.endUser.avatar) {
      const formData = new FormData();
      const uri = image;
      const fileName = uri.split("/").pop();
      const fileType = fileName.split(".").pop();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      formData.append("file", {
        uri,
        name: fileName,
        type: `image/${fileType}`
      });
      await trycatchAxios(async () => {
        const result = await http.patch("/endusers/change-avatar", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });

        return result;
      });
    }

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
    submitEditProfile,
    image,
    setImage
  };
}
