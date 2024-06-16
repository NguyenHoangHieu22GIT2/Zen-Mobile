import { z } from "zod";

const zAddGroupInputs = z.object({
  name: z
    .string()
    .min(2)
    .max(50, { message: "Name must be between 2 and 50 characters" }),
  avatar: z.string().optional(),
  isVisible: z.boolean(),
  description: z
    .string()
    .min(5)
    .max(1000, { message: "Description must be between 5 and 1000 characters" })
});

type ztAddGroupInputs = z.infer<typeof zAddGroupInputs>;

export { zAddGroupInputs, ztAddGroupInputs };
