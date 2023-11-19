import { IMasks, LegalEntityFormControls } from "@article-workspace/types";

export const legalEntityMasks: IMasks = {
  [LegalEntityFormControls.inn]: {
    mask: [
      ...new Array(12).fill(/\d/),
    ],
  },
  [LegalEntityFormControls.ogrn]: {
    mask: [
      ...new Array(13).fill(/\d/),
    ],
  },
  [LegalEntityFormControls.kpp]: {
    mask: [
      ...new Array(11).fill(/\d/),
    ],
  },
}
