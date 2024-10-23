import { SearchSongData } from "@/types";
import style from "./page.module.css";
import SongItem from "@/components/song-item";
import { Suspense } from "react";
import SongListSkeleton from "@/components/skeleton/song-list-skeleton";

async function PopularSongs() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/search?q=Kelly Clarkson`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GENIUS_ACCESS_TOKEN}`,
      },
      cache: "force-cache", // default option
    }
  );

  if (!response.ok) {
    return <div>오류 발생...</div>;
  }

  const popularSongs: SearchSongData[] = await response
    .json()
    .then((response) => {
      return response.response.hits;
    });

  return (
    <div>
      {popularSongs &&
        popularSongs.map((song) => (
          <SongItem key={song.result.id} {...song.result} />
        ))}
    </div>
  );
}

export default async function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 노래</h3>
        <Suspense fallback={<SongListSkeleton count={10} />}>
          <PopularSongs />
        </Suspense>
      </section>
    </div>
  );
}
