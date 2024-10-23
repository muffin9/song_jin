import SongItemSkeleton from "./song-item-skeleton";

export default function SongListSkeleton({ count }: { count: number }) {
  return new Array(count)
    .fill(0)
    .map((_, idx) => <SongItemSkeleton key={`song-item-skeleton-${idx}`} />);
}
