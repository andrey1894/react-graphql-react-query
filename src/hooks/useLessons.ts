import { useMemo } from "react";

import { ILesson } from "../models";

export const useFilteredLessons = (lesson: ILesson[], lessonFilter: string) => {
    const resultLessons = useMemo(() => {
        const filteredLessons = lesson.filter(lesson => lesson.name.toLowerCase().includes(lessonFilter.toLowerCase()));
        return filteredLessons;
      }, [lesson, lessonFilter]);

    return resultLessons;
}