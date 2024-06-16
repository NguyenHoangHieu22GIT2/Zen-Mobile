import { z } from "zod";

const zAddPostInputs = z.object({
  title: z.string().min(5).max(100),
  body: z.string().min(10).max(1000),
  images: z.array(z.string().optional()).min(0).max(5)
});

type ztAddPostInputs = z.infer<typeof zAddPostInputs>;

export { zAddPostInputs, ztAddPostInputs };
