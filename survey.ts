import { SurveyPage } from "./surveyPage";

export class Survey {
  pages: SurveyPage[] = [];
  pageNumber: number = 0;
  renderToId: string = "";
}
