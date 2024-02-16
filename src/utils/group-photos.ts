export type Photo = {
  id: string;
  url: string;
  likes: number;
  comments: number;
};

export const groupPhotos = (photos: Photo[]): Photo[][] => {
  const groupedUrls: Photo[][] = [];
  for (let i = 0; i < photos.length; i += 3) {
    groupedUrls.push(photos.slice(i, i + 3));
  }
  return groupedUrls;
};
