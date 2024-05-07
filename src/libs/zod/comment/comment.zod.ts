import { z } from "zod";

//using zod to validate string

const zAddCommentInputs = z.string().min(5).max(50);

type ztAddCommentInputs = z.infer<typeof zAddCommentInputs>;

export { zAddCommentInputs, ztAddCommentInputs };
