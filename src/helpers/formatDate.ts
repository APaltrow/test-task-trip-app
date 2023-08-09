/* Format Date from "yyyy-mm-dd" to "dd.mm.yyy" */

export const formatDate = (date: string): string => {
  return date.split('-').reverse().join('.');
};
