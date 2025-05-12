import colors from "@/app/components/Colors";
import { Status } from "../generated/prisma/client";

export const statusMap: Record<Status, {label: string, color: colors}> = {
    NOT_STARTED_YET: { label: 'Not Started Yet', color: 'indigo'},
    IN_PROGRESS: { label: 'In Progress', color: 'blue'},
    BLOCKED: { label: 'Blocked', color: 'red'},
    DONE: { label: 'Done', color: 'green'},
    ABANDONED: { label: 'Abandoned', color: 'yellow'}
};
