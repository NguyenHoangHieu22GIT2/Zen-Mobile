import { Image, ImageProps } from "react-native";

export default function ProfileAvatarImage({
  source,
  className,
  ...otherProps
}: ImageProps) {
  return (
    <Image
      source={source}
      className={`rounded-full h-36 w-36 ${className}`}
      {...otherProps}
    />
  );
}
