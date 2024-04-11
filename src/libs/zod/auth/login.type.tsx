import { z } from "zod";

const zLoginInputs = z.object({
  email: z.string().email(),
  password: z
    .string()
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
});

type ztLoginInputs = z.infer<typeof zLoginInputs>;

export { zLoginInputs, ztLoginInputs };
