import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ILesson } from "../../models";
import LessonItem from "./LessonItem";

const LessonList = ({
  lessons,
  onRemove,
}: {
  lessons: ILesson[];
  onRemove: Function;
}) => {
  return (
    <div className="container">
      <TransitionGroup>
        {lessons.length ? (
          lessons.map((lesson) => (
            <CSSTransition key={lesson.id} timeout={500} classNames="item">
              <section className="mb-4">
                <LessonItem lesson={lesson} onRemove={() => onRemove(lesson.id)} />
              </section>
            </CSSTransition>
          ))
        ) : (
          <div className="alert alert-primary">No lessons</div>
        )}
      </TransitionGroup>
    </div>
  );
};

export default LessonList;
