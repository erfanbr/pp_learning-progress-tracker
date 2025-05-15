import colors from "@/app/components/types/Colors";
import { Difficulty } from "prisma-client-16c600e1c6a21a2f4e9317cb7ca27faf6723a54bb9e0795be4e0ebd736e10e40/client";

export const difficultyMap: Record<Difficulty, {label: string, color: colors}> = {
    BEGINNER: { label: 'Beginner', color: 'indigo'},
    INTERMEDIATE: { label: 'Intermediate', color: 'blue'},
    ADVANCED: { label: 'Advanced', color: 'red'},
    MASTERY: { label: 'Mastery', color: 'green'},
};