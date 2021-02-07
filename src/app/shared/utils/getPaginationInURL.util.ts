export const getPaginationInURL = (
  url: string
): { offset: number; limit: number } => {
  if (!url) {
    return { offset: 0, limit: 20 };
  }
  const urlObject = new URL(url);
  const offset =
    urlObject.searchParams.get('offset') !== undefined
      ? Number(urlObject.searchParams.get('offset'))
      : 0;
  const limit =
    urlObject.searchParams.get('limit') !== undefined
      ? Number(urlObject.searchParams.get('limit'))
      : 20;
  return { offset, limit };
};
