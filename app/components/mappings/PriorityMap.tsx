import colors from "@/app/components/types/Colors";
import { Priority } from "@/app/generated/prisma";


export const priorityMap: Record<Priority, {label: string, color: colors}> = {
    VERY_LOW: { label: 'Very Low', color: 'indigo'},
    LOW: { label: 'Low', color: 'green'},
    MEDIUM: { label: 'Medium', color: 'blue'},
    HIGH: { label: 'High', color: 'yellow'},
    VERY_HIGH: { label: 'Very High', color: 'pink'},
    URGENT: { label: 'Urgent', color: 'red'},
};