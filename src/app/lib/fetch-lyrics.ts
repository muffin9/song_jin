import { load } from "cheerio";

export default async function fetchLyrics(url: string): Promise<any> {
  try {
    const response = await fetch(url, {
      cache: "force-cache",
    });

    if (!response.ok) {
      throw new Error();
    }
    const pageHtml = await response.text(); // HTML 콘텐츠를 문자열 형태로 가져옵니다.
    const lyricsDom = load(pageHtml); // 가져온 HTML 문자열을 Cheerio를 사용하여 파싱

    const lyrics = lyricsDom("[data-lyrics-container]").text(); // 가사 추출

    return lyrics || "가사를 찾을 수 없습니다."; // 가사를 반환하거나 기본 메시지 반환
  } catch (err) {
    console.error(err);
    return [];
  }
}
