import { ILesson } from "../../models";

const LessonItem = ({ lesson, onRemove }: { lesson: ILesson, onRemove: Function }) => {
  return (
    <div className="card">
      <div className="card-header">{lesson.name}</div>
      <div className="card-body">
        <p className="card-text">Start date: {lesson.startDate}</p>
        <p className="card-text">End date: {lesson.endDate}</p>
        <p className="card-text">Students: {lesson.students.length}</p>
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="">
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
            <div className="">
              <button onClick={() => onRemove()} className="btn btn-danger">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonItem;
