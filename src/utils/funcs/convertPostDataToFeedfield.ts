import { Post } from "@/types/post.type";
import { timeAgo } from "./timeAgo";

export function convertPostDataToFeedfield(post: Post) {
  const { createdAt, updatedAt, images, ...otherPostField } = post;
  const newCreatedAt = new Date(createdAt);
  const newUpdatedAt = new Date(updatedAt);

  const postAge = timeAgo(newCreatedAt);
  const imageSources = images.map(
    (image) => process.env.EXPO_PUBLIC_HTTP_UPLOADS + image
  );
  return {
    updatedAt: newUpdatedAt,
    createdAt: newCreatedAt,
    postAge,
    images: imageSources,
    ...otherPostField
  };
}
