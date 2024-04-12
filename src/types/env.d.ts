declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_HTTP_ENDPOINT_REGISTER: string;
      EXPO_PUBLIC_HTTP_ENDPOIND_LOGIN: string;
      EXPO_PUBLIC_HTTP_POST_SUCCESS: string;
      EXPO_PUBLIC_HTTP_POST_ERROR: string;
      EXPO_PUBLIC_BASE_URL: string;
    }
  }
}

export {};
