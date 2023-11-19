import { ControlContainer, FormGroup } from "@angular/forms";

export interface ISubFormComponent {
  controlContainer: ControlContainer;
  parentForm: FormGroup;
  addSubformFields: () => void;
  readonly controls: unknown;
}
