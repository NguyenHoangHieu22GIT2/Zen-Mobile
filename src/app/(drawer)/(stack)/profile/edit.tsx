import {
  AuthTextInput,
  BackSvg,
  FontText,
  ProfileAvatarImage,
  RectangleButton,
  TopWrapperView
} from "@/components";
import { COLORS, IMAGES } from "@/constants";

export default function edit() {
  return (
    <TopWrapperView style={{ width: "100%" }} className="justify-center px-3">
      <ProfileAvatarImage source={IMAGES.fakeavatar} />
      <FontText className="font-bold text-xl">John Doe</FontText>
      <AuthTextInput
        SVGIconElement={<></>}
        label="Username"
        selectionColor={COLORS.primary}
        className="mb-3"
      />
      <AuthTextInput
        SVGIconElement={<></>}
        label="Email"
        selectionColor={COLORS.primary}
        className="mb-3"
      />
      <AuthTextInput
        SVGIconElement={<></>}
        label="About me..."
        selectionColor={COLORS.primary}
        className="mb-3"
      />
      <RectangleButton text="Save" onPress={() => {}} />
    </TopWrapperView>
  );
}
