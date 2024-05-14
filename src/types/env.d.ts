declare global {
  namespace NodeJS {
    interface ProcessEnv {
      //Auth
      EXPO_PUBLIC_HTTP_ENDPOINT_REGISTER: string;
      EXPO_PUBLIC_HTTP_ENDPOIND_LOGIN: string;
      //Post
      EXPO_PUBLIC_HTTP_ENDPOINT_BASE_POST: string;
      EXPO_PUBLIC_HTTP_ENDPOINT_GET_USER_POSTS_FROM_GROUP: string;
      EXPO_PUBLIC_HTTP_ENDPOINT_GET_USER_POSTS_FROM_PROFILE: string;
      EXPO_PUBLIC_HTTP_ENDPOINT_GET_RECOMMENDED_POST: string;
      //Like
      EXPO_PUBLIC_HTTP_ENDPOINT_BASE_LIKE: string;
      //Enviroment
      EXPO_PUBLIC_HTTP_POST_SUCCESS: string;
      EXPO_PUBLIC_HTTP_POST_ERROR: string;
      EXPO_PUBLIC_BASE_URL: string;
    }
  }
}

export { };
