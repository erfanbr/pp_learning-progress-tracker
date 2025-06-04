import colors from "@/app/components/types/Colors";
import { Difficulty } from "@/app/generated/prisma";


export const difficultyMap: Record<Difficulty, {label: string, color: colors}> = {
    BEGINNER: { label: 'Beginner', color: 'green'},
    INTERMEDIATE: { label: 'Intermediate', color: 'indigo'},
    ADVANCED: { label: 'Advanced', color: 'pink'},
    MASTERY: { label: 'Mastery', color: 'yellow'},
};