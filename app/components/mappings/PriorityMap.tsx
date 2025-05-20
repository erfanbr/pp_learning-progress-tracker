import colors from "@/app/components/types/Colors";
import { Priority } from "@/app/generated/prisma";


export const priorityMap: Record<Priority, {label: string, color: colors}> = {
    VERY_LOW: { label: 'Very Low', color: 'indigo'},
    LOW: { label: 'Low', color: 'blue'},
    MEDIUM: { label: 'Medium', color: 'red'},
    HIGH: { label: 'High', color: 'green'},
    VERY_HIGH: { label: 'Very High', color: 'green'},
    URGENT: { label: 'Urgent', color: 'green'},
};