"use client";

import { withModal } from "@/components/withModal";

function LyricsButton({ text, openModal }: { text: string; openModal: () => void }) {
  return (
    <button onClick={openModal}>가사 보기</button>
  );
}

export default withModal(LyricsButton);