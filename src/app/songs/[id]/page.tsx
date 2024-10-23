import { SongData } from "@/types";
import style from "./page.module.css";
import { notFound } from "next/navigation";
import Image from "next/image";

// export const dynamicParams = false;

// 정적인 파라미터를 내보내는 함수
// URL parameter의 값을 명시할때는 문자열데이터만 가능하다.
// 1,3을 제외한 다른 id에 대한 페이지는 dynamic page로써 동작 된다.
export function generateStaticParams() {
  return [{ id: "1" }, { id: "3" }];
}

export default async function Page({
  params,
}: {
  params: { id: string | string[] };
}) {
  // 아래와 같이 캐싱이 존재하지 않은 데이터 페칭 함수가 존재하더라도 이 컴포넌트 에서 generateStaticParams 함수를 내보내고 있어서 -> Static Page로 강제로 설정된다.
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/songs/${params.id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GENIUS_ACCESS_TOKEN}`,
      },
      cache: "force-cache",
    }
  );

  if (!response.ok) {
    notFound();
  }

  const song: SongData = await response
    .json()
    .then((response) => response.response.song);

  const {
    id,
    title,
    title_with_featured,
    artist_names,
    song_art_image_url,
    full_title,
  } = song;

  return (
    <div className={style.container} key={id}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${song_art_image_url}')` }}
      >
        <Image src={song_art_image_url} alt={title} width={350} height={350} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.title_with_featured}>{title_with_featured}</div>
      <div className={style.artist_names}>{artist_names}</div>
      <div className={style.full_title}>{full_title}</div>
    </div>
  );
}
