import React, { useState } from "react";

import MyInput from "../UI/MyInput";
import { ILesson } from "../../models";

const ModalCreateLesson = ({
  visible,
  setVisible,
  onCreateLesson,
}: {
  visible: boolean;
  setVisible: Function;
  onCreateLesson: Function;
}) => {
  const rootClasses = ["modal", "fade"];
  if (visible) {
    rootClasses.push("show");
  }

  const [lesson, setLesson] = useState<ILesson>({} as ILesson);

  const addNewLesson = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!lesson.name || !lesson.startDate || !lesson.endDate) {
      return;
    }

    setLesson({} as ILesson);

    onCreateLesson({...lesson, startDate: new Date(lesson.startDate).toISOString(), endDate: new Date(lesson.endDate).toISOString()});
    setVisible(false);
  };

  return (
    <div
      className={rootClasses.join(" ")}
      style={{ display: visible ? "block" : "none" }}
      onClick={() => setVisible(false)}
    >
      <div className="modal-dialog" onClick={(e: any) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setVisible(false)}
            ></button>
          </div>
          <div className="modal-body">
            <form action="" onSubmit={addNewLesson}>
              <div className="mb-2">
                <MyInput
                  value={lesson.name || ""}
                  onChange={(e: any) =>
                    setLesson({ ...lesson, name: e.target.value })
                  }
                  type="text"
                  placeholder="Lesson name"
                />
              </div>

              <div className="mb-2">
                <MyInput
                  value={lesson.startDate || ""}
                  onChange={(e: any) =>
                    setLesson({ ...lesson, startDate: e.target.value })
                  }
                  type="datetime-local"
                  placeholder="StartDate"
                />
              </div>

              <div className="mb-2">
                <MyInput
                  type="datetime-local"
                  value={lesson.endDate || ""}
                  onChange={(e: any) =>
                    setLesson({ ...lesson, endDate: e.target.value })
                  }
                  placeholder="EndDate"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => setVisible(false)}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                addNewLesson();
              }}
            >
              Add lesson
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCreateLesson;
