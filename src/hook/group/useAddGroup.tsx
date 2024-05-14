import http from "@/libs/axios.base";
import { zAddGroupInputs, ztAddGroupInputs } from "@/libs/zod";
import { trycatchAxios } from "@/utils/funcs/trycatchAxios";
import toast from "@/utils/toast/toast";
import { router } from "expo-router";
import { useState } from "react";

export default function useAddGroup() {
  const [inputs, setInputs] = useState<ztAddGroupInputs>({
    name: "",
    avatar: "",
    isVisible: null,
    description: ""
  });

  function changeInputs(type: keyof ztAddGroupInputs, value: string | boolean) {
    setInputs((oldInputs) => ({ ...oldInputs, [type]: value }));
  }

  async function submitAddGroup() {
    const zodResult = zAddGroupInputs.safeParse(inputs);
    if (!zodResult.success) {
      toast.danger({
        message: "Invalid inputs",
        subMessage: "Please check your inputs",
        duration: 3000
      });
      return;
    }
    const formData = new FormData();
    formData.append("name", inputs.name);
    formData.append("description", inputs.description);
    formData.append("isVisible", inputs.isVisible.toString());
    const uri = inputs.avatar;
    const fileName = uri.split("/").pop();
    const fileType = fileName.split(".").pop();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    formData.append("files", {
      uri,
      name: fileName,
      type: `image/${fileType}`
    });
    return trycatchAxios(async () => {
      const result = await http.post(
        process.env.EXPO_PUBLIC_HTTP_ENDPOINT_BASE_GROUP,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      toast.success({
        message: "Post added",
        subMessage: "Your post has been added",
        duration: 3000
      });
      console.log(result);
      router.push("/group");
      return result;
    });
  }

  return { inputs, changeInputs, submitAddGroup };
}
