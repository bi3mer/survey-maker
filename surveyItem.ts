export abstract class SurveyItem {
  public abstract render(): string;
  public abstract isValid(): boolean;
}
