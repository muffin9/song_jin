import type { SongData } from "@/types";
import Link from "next/link";
import style from "./song-item.module.css";
import Image from "next/image";
import LyricsButton from "./lyricsbutton";
import fetchLyrics from "@/lib/fetch-lyrics";

// SongItem을 서버 컴포넌트로 유지하고, 모달과 상태 관리는 클라이언트 컴포넌트로 이동합니다.
export default async function SongItem({
  id,
  title,
  title_with_featured,
  artist_names,
  song_art_image_url,
  url,
}: SongData) {
  const lyrics = await fetchLyrics(url);
  // text로 뽑아낸 lyrics를 모달창에 뿌려주기.
  return (
    <div className={style.container}>
      <Link href={`/songs/${id}`} className={style.box}>
        <Image src={song_art_image_url} alt={title} width={80} height={80} />
        <div>
          <div className={style.title}>{title}</div>
          <div className={style.title_with_featured}>{title_with_featured}</div>
          <br />
          <div className={style.item_footer}>
            <div className={style.artist_names}>{artist_names}</div>
          </div>
        </div>
      </Link>
      <div className-={style.lyrics_button}>
        <LyricsButton text={lyrics} />
      </div>
    </div>
  );
}
