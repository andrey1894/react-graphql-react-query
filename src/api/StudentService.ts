import { GraphQLClient, gql } from "graphql-request";

import { ILesson } from "../models";

const API_URL = `http://localhost:5001/graphql`;

const graphQLClient = new GraphQLClient(API_URL, {
  headers: {
    // Authorization: `Bearer ${process.env.API_KEY}`
  },
});

export class LessonService {
  static async getLessons(limit = 10, page = 1): Promise<ILesson[]> {
    const { lessons } = await graphQLClient.request<{ lessons: ILesson[] }>(gql`
      query {
        lessons {
          id
          name
          startDate
          endDate
          students {
            id
          }
        }
      }
    `);
    return lessons;
  }

  static async addLesson(lesson: ILesson): Promise<ILesson> {
    const { createLesson } = await graphQLClient.request<{
      createLesson: ILesson;
    }>(gql`
      mutation {
        createLesson(createLessonInput: {
          name: "${lesson.name}",
          startDate: "${lesson.startDate}",
          endDate: "${lesson.endDate}",
        }) {
          id
          name
          startDate
          endDate
          students {
            id
          }
        }
      }
    `);
    return createLesson;
  }

  static async deleteLesson(lessonId: string): Promise<string> {
    const { deleteLesson } = await graphQLClient.request<{
      deleteLesson: { id: string };
    }>(gql`
      mutation {
        deleteLesson(id: "${lessonId}") {
          id
        }
      }
    `);
    return deleteLesson.id;
  }
}
