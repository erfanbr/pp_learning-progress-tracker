import colors from "@/app/components/Colors";
import { Difficulty } from "../generated/prisma/client";

export const difficultyMap: Record<Difficulty, {label: string, color: colors}> = {
    BEGINNER: { label: 'Beginner', color: 'indigo'},
    INTERMEDIATE: { label: 'Intermediate', color: 'blue'},
    ADVANCED: { label: 'Advanced', color: 'red'},
    MASTERY: { label: 'Mastery', color: 'green'},
};