export const formatDateDE = (dateString: string | number) =>
  new Date(dateString).toLocaleDateString("de-DE");
