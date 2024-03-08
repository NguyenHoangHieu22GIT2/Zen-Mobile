declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HTTP_ENDPOINT_REGISTER: string;
    }
  }
}

export { };
