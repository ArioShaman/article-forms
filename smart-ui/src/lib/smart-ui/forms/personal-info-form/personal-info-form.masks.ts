import { PersonalInfoFormControls } from './personal-info-form.controls';
import { IMasks } from '@article-workspace/types';

export const personalInfoMasks: IMasks = {
  [PersonalInfoFormControls.inn]: {
    mask: [
      ...new Array(12).fill(/\d/),
    ],
  },
  [PersonalInfoFormControls.snils]: {
    mask: [
      ...new Array(3).fill(/\d/),
      '-',
      ...new Array(3).fill(/\d/),
      '-',
      ...new Array(3).fill(/\d/),
      ' ',
      ...new Array(2).fill(/\d/),
    ],
  },
  [PersonalInfoFormControls.passport]: {
    mask: [
      ...new Array(4).fill(/\d/),
      ' ',
      ...new Array(6).fill(/\d/),
    ],
  },
}
