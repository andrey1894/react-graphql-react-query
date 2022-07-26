import { useEffect, useState } from "react";
import { LessonService } from "../api";
import PageLayout from "../components/layout/PageLayout";
import LessonList from "../components/lesson/LessonList";
import ModalCreateLesson from "../components/lesson/ModalCreateLesson";
import SearchLesson from "../components/lesson/SearchLesson";
import Loader from "../components/UI/Loader/Loader";
import { useFetching, useFilteredLessons } from "../hooks";
import { ILesson } from "../models";

function Lessons() {
  const [_lessons, setLessons] = useState<ILesson[]>([]);
  const [lessonFilter, searchLesson] = useState("");
  const [visibleCreateLessonModal, changeVisibleCreateLessonModal] = useState(false);
  const lessons = useFilteredLessons(_lessons, lessonFilter);


  const [fetchLessons, isLessonsLoading, lessonError] = useFetching(async () => {
    const response = await LessonService.getLessons();
    setLessons(response)
  });

  useEffect(() => {
    fetchLessons();
  }, []);

  async function createLesson(lesson: ILesson) {
    const response = await LessonService.addLesson(lesson);
    setLessons([..._lessons, response]);
  }

  async function removeLesson(id: string) {
    const response = await LessonService.deleteLesson(id);
    setLessons(_lessons.filter((lesson) => lesson.id !== response));
  }

  return (
    <PageLayout>
      <div className="container">
        <button
          className="btn btn-primary"
          onClick={() => changeVisibleCreateLessonModal(true)}
        >
          Add lesson
        </button>
      </div>
      <SearchLesson onSearchLesson={searchLesson} />
      {lessonError && <div className="alert alert-danger">{lessonError}</div>}
      {isLessonsLoading ? (
        <section className="d-flex justify-content-center"><Loader /></section>
      ) : (
        <LessonList lessons={lessons} onRemove={removeLesson} />
      )}

      <ModalCreateLesson
        visible={visibleCreateLessonModal}
        onCreateLesson={createLesson}
        setVisible={(visible: boolean) => changeVisibleCreateLessonModal(visible)}
      />
    </PageLayout>
  );
}
export default Lessons;
