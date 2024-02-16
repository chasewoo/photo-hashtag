"use client";

import { ImageCard } from "@/components/image-card";
import { Photo, groupPhotos } from "@/utils/group-photos";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const LoadMore = () => {
  const [photoGroups, setPhotoGroups] = useState<Photo[][]>([]);
  const [loadingPhoto, setLoadingPhoto] = useState(false);
  const [limit] = useState(9);
  const [page, setPage] = useState(1);
  const [isEnd, setIsEnd] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (isEnd || !inView || loadingPhoto) {
      return;
    }

    setLoadingPhoto(true);

    fetch(`/api/photos?offset=${page * limit}&limit=${limit}`)
      .then((response) => response.json())
      .then((rows) => {
        setPhotoGroups((previous) => [
          ...previous,
          ...groupPhotos(rows as Photo[]),
        ]);
        rows.length === 0 && setIsEnd(true);
      })
      .then(() => {
        setPage((previous) => previous + 1);
      })
      .finally(() => {
        setLoadingPhoto(false);
      });
  }, [inView, isEnd, limit, loadingPhoto, page]);

  return (
    <>
      <div>
        {photoGroups.map((group) => (
          <div className="flex mb-1" key={group[0].id}>
            {group.map((item, index) => (
              <ImageCard key={item.id} index={index} {...item} />
            ))}
          </div>
        ))}
      </div>

      <div className="font-medium text-center pt-2 h-30" ref={ref}>
        {loadingPhoto ? "loading..." : ""}
      </div>
    </>
  );
}
