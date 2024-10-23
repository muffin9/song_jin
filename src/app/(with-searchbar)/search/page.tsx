import SongListSkeleton from "@/components/skeleton/song-list-skeleton";
import SongItem from "@/components/song-item";
import { SearchSongData } from "@/types";
import { Suspense } from "react";

async function SearchResult({ q }: { q: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/search?q=${q}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GENIUS_ACCESS_TOKEN}`,
      },
      cache: "force-cache",
    }
  );

  if (!response.ok) {
    return <div>오류 발생...</div>;
  }

  const songs: SearchSongData[] = await response.json().then((response) => {
    return response.response.hits;
  });

  return (
    <div>
      {songs.map((song) => (
        <SongItem key={song.result.id} {...song.result} />
      ))}
    </div>
  );
}

export default async function Page({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  return (
    <Suspense key={searchParams.q} fallback={<SongListSkeleton count={3} />}>
      <SearchResult q={searchParams.q || ""} />
    </Suspense>
  );
}
