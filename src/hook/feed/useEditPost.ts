import http from "@/libs/axios.base";
import { fetcher } from "@/libs/swr/fetcher";
import { zAddPostInputs, ztAddPostInputs } from "@/libs/zod";
import { PostJson } from "@/types/post.type";
import { trycatchAxios } from "@/utils/funcs/trycatchAxios";
import toast from "@/utils/toast/toast";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const FormData = global.FormData;

export function useEditPost(id: string) {
  const { data: post } = useSWR<PostJson>(`/post/${id as string}`, fetcher);
  const [inputs, setInputs] = useState<ztAddPostInputs>({
    title: post?.title ?? "",
    body: post?.body ?? "",
    images: post?.images ?? []
  });
  const isInitialImage = (image: string) => {
    return post?.images.includes(image);
  };
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
      console.log(inputs.images);
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
    const existingImages = [];
    inputs.images.forEach((uri) => {
      if (isInitialImage(uri)) {
        existingImages.push(uri);
        return;
      }
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
    formData.append("existingImages", JSON.stringify(existingImages));

    return trycatchAxios(async () => {
      const result = await http.patch("/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      toast.success({
        message: "Post edited",
        subMessage: "Your post has been edited",
        duration: 3000
      });
      router.push("/popular");
      return result;
    });
  }

  return {
    inputs,
    changeInputs,
    submitEditPost,
    isInitialImage
  };
}
