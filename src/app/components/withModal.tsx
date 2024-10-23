import React, { useState } from "react";
import Modal from "./Modal";

interface WithModalProps {
    text: string;
  }

  
export function withModal<P extends WithModalProps>(Component: React.ComponentType<P & { openModal: () => void }>) {
  return function WrappedComponent(props: P) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
      <>
        <Component {...props} openModal={openModal} />
        <Modal isOpen={isOpen} onClose={closeModal} text={props.text} />
      </>
    );
  };
}