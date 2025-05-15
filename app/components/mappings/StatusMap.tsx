import colors from "@/app/components/types/Colors";
import { Status } from "prisma-client-16c600e1c6a21a2f4e9317cb7ca27faf6723a54bb9e0795be4e0ebd736e10e40/client";

export const statusMap: Record<Status, {label: string, color: colors}> = {
    NOT_STARTED_YET: { label: 'Not Started Yet', color: 'indigo'},
    IN_PROGRESS: { label: 'In Progress', color: 'blue'},
    BLOCKED: { label: 'Blocked', color: 'red'},
    DONE: { label: 'Done', color: 'green'},
    ABANDONED: { label: 'Abandoned', color: 'yellow'}
};
