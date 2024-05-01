import { CheckSVG, ErrorSVG, FontText, InforSVG } from "@/components";
import { SHOW_TOAST_EVENT_NAME } from "@/constants/toast";
import { ToastDataType } from "@/types/toast.types";
import { useEffect, useRef, useState } from "react";
import {
  DeviceEventEmitter,
  TouchableOpacity,
  Platform,
  ToastAndroid,
  View
} from "react-native";

import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";

const icons = {
  infor: <InforSVG />,
  success: <CheckSVG />,
  danger: <ErrorSVG />
};

const Toast = () => {
  const [messageType, setMessageType] = useState<string | null>(null);
  const timeOutRef = useRef(null);

  const [timeOutDuration, setTimeOutDuration] = useState<number>(5000);

  const [message, setMessage] = useState<string | null>(null);
  const [subMessage, setSubMessage] = useState<string | null>(null);

  const onNewToast = (data: ToastDataType) => {
    if (Platform.OS === "android" && data.useDefaultNativeToast) {
      //show default toast from react-native
      return ToastAndroid.show(data.message, ToastAndroid.LONG);
    }
    if (data.duration) {
      setTimeOutDuration(data.duration);
    }
    setMessage(data.message);
    setSubMessage(data.subMessage);
    setMessageType(data.type);
  };

  const closeToast = () => {
    setMessage(null);
    setTimeOutDuration(5000);
    clearInterval(timeOutRef.current);
  };

  //timer count down
  useEffect(() => {
    if (message) {
      timeOutRef.current = setInterval(() => {
        if (timeOutDuration === 0) {
          closeToast();
        } else {
          setTimeOutDuration((prev) => prev - 1000);
        }
      }, 1000);
    }

    return () => {
      clearInterval(timeOutRef.current);
    };
  }, [closeToast, message, timeOutDuration]);

  //Catch the show_toast_event_name event
  useEffect(() => {
    DeviceEventEmitter.addListener(SHOW_TOAST_EVENT_NAME, onNewToast);

    return () => {
      DeviceEventEmitter.removeAllListeners();
    };
  }, []);

  if (!message) {
    return null;
  }

  return (
    <Animated.View
      exiting={FadeOutUp.delay(200).duration(1000).springify()}
      entering={FadeInUp.delay(200).duration(1000).springify()}
      className="rounded-2xl absolute top-10 mx-auto bg-white self-center shadow-xl shadow-gray-600 z-1 px-2.5 py-2 overflow-hidden"
    >
      <TouchableOpacity
        onPress={closeToast}
        className="flex-row items-center justify-around"
      >
        {icons[messageType]}
        <View className=" max-w-[280] mx-2">
          <FontText className="font-bold">{message}</FontText>
          {subMessage && (
            <FontText className="font-bold text-gray-500">
              {subMessage}
            </FontText>
          )}
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Toast;
