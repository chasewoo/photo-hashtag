import Image from "next/image";

export default function Home() {
  return (
    <>
      <header
        style={{ borderBottom: "solid 1px rgb(219, 219, 219)" }}
      >
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
              <div className="flex">
                {new Array(3).fill(0).map((item, index) => (
                  <ImageCard key={index} index={index} />
                ))}
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}

const ImageCard = ({ index }: { index: number }) => {
  return (
    <div className="flex-1 mr-1">
      <a
        href="#"
        style={{
          display: "block",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          src="https://picsum.photos/640/640"
          width={640}
          height={640}
          alt="xx"
        />
        {/* <div
          className="flex items-center justify-center color-white"
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
          <div>66</div>
          <div className="ml-4">8</div>
        </div> */}
      </a>
    </div>
  );
};
