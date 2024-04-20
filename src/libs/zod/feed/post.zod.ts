import { z } from "zod";

const zAddPostInputs = z.object({
  title: z.string().min(10).max(100),
  body: z.string().min(50).max(1000),
});

type ztAddPostInputs = z.infer<typeof zAddPostInputs>;

export { zAddPostInputs, ztAddPostInputs };
