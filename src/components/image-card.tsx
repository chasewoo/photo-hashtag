"use client";

import { IconHeartFilled, IconMessageCircle2Filled } from "@tabler/icons-react";
import Image from "next/image";

export const ImageCard = ({
  index,
  url,
  likes,
  comments,
}: {
  index: number;
  url: string;
  likes: number;
  comments: number;
}) => {
  return (
    <div className="flex-1 mr-1">
      <a
        href="#"
        className="group"
        style={{
          display: "block",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <Image src={url} width={640} height={640} alt={url} />
        <div
            className="hidden items-center justify-center text-white text-lg font-medium group-hover:flex"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "rgba(255,255,255,0.3)",
              top: 0,
              left: 0,
              zIndex: 10,
            }}
          >
            <div className="flex align-items"><IconHeartFilled className="pr-1" /> 66</div>
            <div className="flex align-items ml-4"><IconMessageCircle2Filled className="pr-1" />8</div>
          </div>
      </a>
    </div>
  );
};
