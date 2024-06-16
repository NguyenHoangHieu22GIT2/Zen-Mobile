import http from "@/libs/axios.base";
import { ztAddPostInputs, zAddPostInputs } from "@/libs/zod";
import { trycatchAxios } from "@/utils/funcs/trycatchAxios";
import toast from "@/utils/toast/toast";
import { router } from "expo-router";
import { useState } from "react";

export default function useAddGroupPost(groupId: string) {
  const [inputs, setInputs] = useState<ztAddPostInputs>({
    title: "",
    body: "",
    images: []
  });

  function changeInputs(type: keyof ztAddPostInputs, value: string | string[]) {
    setInputs((oldInputs) => ({ ...oldInputs, [type]: value }));
  }

  async function submitAddGroupPost() {
    const zodResult = zAddPostInputs.safeParse(inputs);
    if (!zodResult.success) {
      toast.danger({
        message: "Invalid inputs",
        subMessage: "Please check your inputs",
        duration: 3000
      });
      return;
    }
    const formData = new FormData();
    formData.append("title", inputs.title);
    formData.append("body", inputs.body);
    formData.append("groupId", groupId);
    inputs.images.forEach((uri) => {
      const fileName = uri.split("/").pop();
      const fileType = fileName.split(".").pop();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      formData.append("files", {
        uri,
        name: fileName,
        type: `image/${fileType}`
      });
    });

    return trycatchAxios(async () => {
      const result = await http.post("/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      toast.success({
        message: "Post added to your group",
        duration: 3000
      });
      console.log("groupId", groupId);
      router.push("/group/" + groupId);
      return result;
    });
  }

  return { inputs, changeInputs, submitAddGroupPost };
}
