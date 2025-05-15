import colors from "@/app/components/types/Colors";
import { Priority } from "prisma-client-16c600e1c6a21a2f4e9317cb7ca27faf6723a54bb9e0795be4e0ebd736e10e40/client";

export const PriorityMap: Record<Priority, {label: string, color: colors}> = {
    VERY_LOW: { label: 'Very Low', color: 'indigo'},
    LOW: { label: 'Low', color: 'blue'},
    MEDIUM: { label: 'Medium', color: 'red'},
    HIGH: { label: 'High', color: 'green'},
    VERY_HIGH: { label: 'Very High', color: 'green'},
    URGENT: { label: 'Urgent', color: 'green'},
};