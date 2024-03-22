import { z } from "zod";

const zGender = z.union([
  z.literal("male"),
  z.literal("female"),
  z.literal("other"),
]);

const zRegisterInputs = z
  .object({
    username: z.string().min(5),
    email: z.string().email(),
    password: z
      .string()
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
    confirmPassword: z.string(),
    gender: zGender,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ["confirmPassword"],
  });

type ztRegisterInputs = z.infer<typeof zRegisterInputs>;

export { zRegisterInputs, ztRegisterInputs };
