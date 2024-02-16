import { Photo } from "./group-photos";

const PHOTO_WIDTH = 640;
const PHOTO_HEIGHT = 640;

export const fetchPhotos = async (limit: number, offset: number): Promise<Photo[]> => {
  const page = Math.floor(offset / limit) + 1;
  const response = await fetch(
    `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
  );
  const rows = await response.json();

  return rows.map((item: { id: string; download_url: string }) => ({
    id: item.id.toString(),
    url: updateSize(item.download_url, PHOTO_WIDTH, PHOTO_HEIGHT),
    likes: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 100),
  }));
};

const updateSize = (url: string, width: number, height: number) => {
    const paths = url.split('/')
    return paths.slice(0, paths.length - 2).join('/') + `/${width}/${height}`
}