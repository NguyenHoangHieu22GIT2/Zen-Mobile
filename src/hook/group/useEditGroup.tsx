import http from "@/libs/axios.base";
import { ztAddGroupInputs, zAddGroupInputs } from "@/libs/zod";
import { trycatchAxios } from "@/utils/funcs/trycatchAxios";
import toast from "@/utils/toast/toast";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import useFetchGroupDetail from "./useFetchGroupDetail";

export default function useEditGroup(groupId: string) {
  const { data } = useFetchGroupDetail(groupId);
  const [inputs, setInputs] = useState<ztAddGroupInputs>({
    name: "",
    avatar: "",
    isVisible: true,
    description: ""
  });
  const isInitialAvatar = inputs.avatar === data?.group.avatar;
  useEffect(() => {
    if (data) {
      setInputs({
        name: data.group.name ?? "",
        avatar: data.group.avatar ?? "",
        isVisible: data.group.isVisible ?? true,
        description: data.group.description ?? ""
      });
    }
  }, [data]);

  function changeInputs(type: keyof ztAddGroupInputs, value: string | boolean) {
    setInputs((oldInputs) => ({ ...oldInputs, [type]: value }));
  }

  async function submitEditGroup() {
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
    if (!isInitialAvatar) {
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
    }
    return trycatchAxios(async () => {
      const result = await http.patch("/group/" + groupId, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      toast.success({
        message: "Group edited",
        duration: 3000
      });
      router.push("/group/" + groupId);
      return result;
    });
  }

  return { inputs, changeInputs, submitEditGroup, isInitialAvatar };
}
