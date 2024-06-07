import http from "@/libs/axios.base";
import { zAddPostInputs, ztAddPostInputs } from "@/libs/zod";
import { PostJson } from "@/types/post.type";
import { trycatchAxios } from "@/utils/funcs/trycatchAxios";
import toast from "@/utils/toast/toast";
import { router } from "expo-router";
import { useEffect, useState } from "react";

const FormData = global.FormData;

export function useEditPost(post: PostJson) {
  const [inputs, setInputs] = useState<ztAddPostInputs>({
    title: post?.title ?? "",
    body: post?.body ?? "",
    images: post?.images ?? []
  });
  useEffect(() => {
    console.log(post);
    setInputs({
      title: post?.title ?? "",
      body: post?.body ?? "",
      images: post?.images ?? []
    });
  }, [post]);

  function changeInputs(type: keyof ztAddPostInputs, value: string | string[]) {
    setInputs((oldInputs) => ({ ...oldInputs, [type]: value }));
  }

  async function submitEditPost() {
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
    formData.append("postId", post._id);
    formData.append("body", inputs.body);
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
      const result = await http.patch(
        process.env.EXPO_PUBLIC_HTTP_ENDPOINT_BASE_POST,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      toast.success({
        message: "Post edited",
        subMessage: "Your post has been edited",
        duration: 3000
      });
      console.log(result);
      router.push("/popular");
      return result;
    });
  }

  return {
    inputs,
    changeInputs,
    submitEditPost
  };
}
