import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import { MutableRefObject, ReactNode } from "react";

type CustomBottomSheetProps = {
  bottomsheetRef: MutableRefObject<BottomSheetModal>;
  children: ReactNode;
  snapPoint: (string | number)[];
};

export default function CustomBottomSheet(props: CustomBottomSheetProps) {
  const { bottomsheetRef, children, snapPoint } = props;
  return (
    <BottomSheetModal
      ref={bottomsheetRef}
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          onPress={() => bottomsheetRef.current?.close()}
          disappearsOnIndex={-1}
        />
      )}
      snapPoints={snapPoint}
      enablePanDownToClose
      index={0}
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 7
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15
      }}
    >
      {children}
    </BottomSheetModal>
  );
}
