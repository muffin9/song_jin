import style from "./modal.module.css";

interface ModalProps {
  isOpen: boolean,
  onClose: () => void
  text: string | null;
}

export default function Modal({ isOpen, onClose, text }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={style.overlay} onClick={onClose}>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        <h2>가사</h2>
        <p>{text}</p>
        <button onClick={onClose} className={style.close_button}>
          닫기
        </button>
      </div>
    </div>
  );
}