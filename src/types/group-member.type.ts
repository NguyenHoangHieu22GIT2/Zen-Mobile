import { EndUserMinimal } from "./enduser.type";

type GroupMember = EndUserMinimal & { isOwner: string };

export { GroupMember };
