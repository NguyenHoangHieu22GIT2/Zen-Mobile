import OptionMenuSVG from "@/components/svg/OptionMenuSVG";
import { Pressable, View } from "react-native";
import CustomBottomSheet from "./CustomBottomSheet";
import { ReactElement, ReactNode, useRef } from "react";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import FontText from "../FontText";
import { COLORS } from "@/constants";

type OptionProps = {
  icon: ReactNode;
  label: string;
  onPress: () => void;
  onCloseModal?: () => void;
};
type OptionMenuProps = {
  children: ReactElement<OptionProps> | ReactElement<OptionProps>[];
  snapPoint: number[];
};

export default function OptionMenu(props: OptionMenuProps) {
  const modalizeRef = useRef<BottomSheetModal>();
  const closeModal = () => {
    modalizeRef.current?.close();
  };
  return (
    <View>
      <Pressable
        android_ripple={{
          color: COLORS.gray2,
          borderless: false,
          foreground: true
        }}
        className="overflow-hidden px-2.5 py-3 mr-2 rounded-full"
        onPress={() => modalizeRef.current?.present()}
      >
        <OptionMenuSVG />
      </Pressable>
      <CustomBottomSheet
        bottomsheetRef={modalizeRef}
        snapPoint={props.snapPoint}
      >
        <FontText className="font-bold text-center border-dashed border-b border-gray-300 py-3 text-xl">
          Options
        </FontText>
        <BottomSheetView>
          {Array.isArray(props.children) ? (
            props.children.map((child) => (
              <Option
                key={Math.random()}
                onCloseModal={closeModal}
                {...child.props}
              />
            ))
          ) : (
            <Option onCloseModal={closeModal} {...props.children.props} />
          )}
        </BottomSheetView>
      </CustomBottomSheet>
    </View>
  );
}

export const Option = ({ label, icon, onPress, onCloseModal }: OptionProps) => {
  return (
    <View className="px-1 py-1 border-dashed border-b border-gray-300">
      <Pressable
        android_ripple={{
          color: COLORS.gray2,
          borderless: false,
          foreground: true
        }}
        onPress={() => {
          onPress();
          onCloseModal();
        }}
        className="overflow-hidden rounded-lg px-4 py-3 flex-row items-center gap-2"
      >
        {icon}
        <FontText className="text-lg">{label}</FontText>
      </Pressable>
    </View>
  );
};
