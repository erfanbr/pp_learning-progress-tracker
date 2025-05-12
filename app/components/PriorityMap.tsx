import colors from "@/app/components/Colors";
import { Priority } from "../generated/prisma/client";

export const PriorityMap: Record<Priority, {label: string, color: colors}> = {
    VERY_LOW: { label: 'Very Low', color: 'indigo'},
    LOW: { label: 'Low', color: 'blue'},
    MEDIUM: { label: 'Medium', color: 'red'},
    HIGH: { label: 'High', color: 'green'},
    VERY_HIGH: { label: 'Very High', color: 'green'},
    URGENT: { label: 'Urgent', color: 'green'},
};