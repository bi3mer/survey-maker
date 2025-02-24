import { SurveyItem } from "./surveyItem";

export class SurveyPage {
  items: SurveyItem[] = [];

  public isValid(): boolean {
    let allItemsAreValid: boolean = true;
    const length = this.items.length;
    for (let i = 0; i < length; ++i) {
      const item = this.items[i];
      allItemsAreValid &&= item.isValid();
    }

    return allItemsAreValid;
  }

  public render(): string {
    let html = "";
    const length = this.items.length;
    for (let i = 0; i < length; ++i) {
      html += this.items[i].render();
    }

    return html;
  }
}
