import { DeviceEventEmitter } from "react-native";
import { SHOW_TOAST_EVENT_NAME } from "@/constants/toast";
import { ToastOptionType } from "@/types/toast.types";

const toast = {
  infor: (options: ToastOptionType) => {
    DeviceEventEmitter.emit(SHOW_TOAST_EVENT_NAME, {
      ...options,
      type: "infor"
    });
  },
  success: (options: ToastOptionType) => {
    DeviceEventEmitter.emit(SHOW_TOAST_EVENT_NAME, {
      ...options,
      type: "success"
    });
  },
  danger: (options: ToastOptionType) => {
    DeviceEventEmitter.emit(SHOW_TOAST_EVENT_NAME, {
      ...options,
      type: "danger"
    });
  }
};

export default toast;
