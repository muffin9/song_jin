import style from "./song-item-skeleton.module.css";

export default function SongItemSkeleton() {
  return (
    <div className={style.container}>
      <div className={style.song_art_image_url}></div>
      <div className={style.info_container}>
        <div className={style.title}></div>
        <div className={style.title_with_featured}></div>
        <br />
        <div className={style.artist_names}></div>
      </div>
    </div>
  );
}
