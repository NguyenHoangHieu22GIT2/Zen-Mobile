import { ztAddPostInputs } from "@/libs/zod";
import { useState } from "react";

export default function useAddGroupPost() {
  const [inputs, setInputs] = useState<ztAddPostInputs>({
    title: "",
    body: "",
    images: []
  });

  function changeInputs(type: keyof ztAddPostInputs, value: string | string[]) {
    setInputs((oldInputs) => ({ ...oldInputs, [type]: value }));
  }
  return { inputs, changeInputs };
}
