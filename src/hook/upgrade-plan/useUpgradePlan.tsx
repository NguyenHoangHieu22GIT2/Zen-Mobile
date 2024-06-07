import http from "@/libs/axios.base";
import { trycatchAxios } from "@/utils/funcs/trycatchAxios";
import toast from "@/utils/toast/toast";

export default function useUpgradePlan() {
  const upgradePlan = () => {
    return trycatchAxios(async () => {
      const result = await http.post("/receipt", {
        subscriptionId: "66633e5c6890b8290d2dc8f3"
      });
      toast.success({
        message: "Plan upgraded",
        subMessage: "Your plan has been upgraded"
      });
      return result;
    });
  };
  return {
    upgradePlan
  };
}
