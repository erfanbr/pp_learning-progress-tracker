import colors from "@/app/components/types/Colors";
import { Difficulty } from "@/app/generated/prisma";


export const difficultyMap: Record<Difficulty, {label: string, color: colors}> = {
    BEGINNER: { label: 'Beginner', color: 'indigo'},
    INTERMEDIATE: { label: 'Intermediate', color: 'blue'},
    ADVANCED: { label: 'Advanced', color: 'red'},
    MASTERY: { label: 'Mastery', color: 'green'},
};