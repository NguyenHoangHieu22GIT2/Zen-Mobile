import { Image, ImageProps } from "react-native";

export default function MyAddPostAvatar(props: ImageProps) {
  const { className, ...otherProps } = props;
  return (
    <Image
      className={`rounded-full w-10 h-10 ${className}`}
      resizeMode="cover"
      {...otherProps}
    />
  );
}
