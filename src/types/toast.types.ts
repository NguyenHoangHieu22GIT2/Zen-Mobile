export interface ToastOptionType {
  message: string;
  subMessage?: string;
  duration?: number;
  useDefaultNativeToast?: boolean;
}
export interface ToastDataType extends ToastOptionType {
  type: string;
}
