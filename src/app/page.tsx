import { ImageCard } from "@/components/image-card";
import { LoadMore } from "@/components/load-more";
import { fetchPhotos } from "@/utils/fetch-photos";
import { Photo, groupPhotos } from "@/utils/group-photos";
import Image from "next/image";

export default async function Home() {
  const limit = 9;
  const offset = 0;
  const rows = await fetchPhotos(limit, offset);
  const photoGroups = groupPhotos(rows as Photo[]);

  return (
    <>
      <header style={{ borderBottom: "solid 1px rgb(219, 219, 219)" }}>
        <div
          className="max-w-screen-lg flex items-center justify-between ml-auto mr-auto"
          style={{ height: 60 }}
        >
          <div className="font-bold">logo</div>
          <div>
            <button
              className="text-white pl-4 pr-4 h-8 rounded-lg text-sm font-medium"
              style={{ backgroundColor: "rgb(0, 149, 246)" }}
            >
              Log In
            </button>
            <button
              className="text-sm font-medium ml-4"
              style={{ color: "rgb(0, 149, 246)" }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>

      <main>
        <div className="max-w-screen-lg ml-auto mr-auto">
          <section
            className="flex items-center"
            style={{ paddingTop: 30, paddingBottom: 44 }}
          >
            <div style={{ width: 152, height: 152 }}>
              <Image
                src="https://picsum.photos/640/640"
                width={640}
                height={640}
                alt="xx"
                className="w-full h-full rounded-full"
              />
            </div>
            <div style={{ marginLeft: 50 }}>
              <div style={{ fontSize: 30 }}>#houseplants</div>
              <div className="font-medium" style={{ fontSize: 16 }}>
                10,503,659
              </div>
              <div>posts</div>
            </div>
          </section>

          <article>
            <h2
              className="text-sm font-medium mb-4"
              style={{ color: "rgb(115, 115, 115)" }}
            >
              Top posts
            </h2>
            <div>
              {photoGroups.map((group) => (
                <div className="flex mb-1" key={group[0].id}>
                  {group.map((item, index) => (
                    <ImageCard key={item.id} index={index} {...item} />
                  ))}
                </div>
              ))}
            </div>
            <LoadMore />
          </article>
        </div>
      </main>
    </>
  );
}

