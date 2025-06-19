import styled from "styled-components";
import React, { useRef, useEffect, useState } from "react";

interface LoginModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Sheet = styled.div<{ open: boolean }>`
  width: 100vw;
  max-width: 500px;
  min-height: 300px;
  background: var(--color-very-dark-gray-2);
  border-radius: 32px 32px 0 0;
  box-shadow: 0 -2px 24px rgba(0, 0, 0, 0.2);
  position: relative;
  transition:
    transform 0.35s cubic-bezier(0.4, 1.2, 0.4, 1),
    opacity 0.2s;
  transform: translateY(${(props) => (props.open ? "0%" : "100%")});
  opacity: ${(props) => (props.open ? 1 : 0)};
  padding: 2rem 1.2rem 2rem 1.2rem;
  will-change: transform;
`;

const DragBar = styled.div`
  width: 60px;
  height: 6px;
  background: #444;
  border-radius: 3px;
  margin: 0 auto 1.2rem auto;
  cursor: grab;
`;

const DRAG_CLOSE_THRESHOLD = 80;

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const [dragY, setDragY] = useState(0);
  const startY = useRef<number | null>(null);
  const dragging = useRef(false);

  // Mouse events
  function handleMouseDown(e: React.MouseEvent) {
    dragging.current = true;
    startY.current = e.clientY;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  }
  function handleMouseMove(e: MouseEvent) {
    if (!dragging.current || startY.current === null) return;
    const delta = e.clientY - startY.current;
    setDragY(delta > 0 ? delta : 0);
  }
  function handleMouseUp() {
    dragging.current = false;
    if (dragY > DRAG_CLOSE_THRESHOLD && onClose) onClose();
    setDragY(0);
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  }

  // Touch events
  function handleTouchStart(e: React.TouchEvent) {
    dragging.current = true;
    startY.current = e.touches[0].clientY;
  }
  function handleTouchMove(e: React.TouchEvent) {
    if (!dragging.current || startY.current === null) return;
    const delta = e.touches[0].clientY - startY.current;
    setDragY(delta > 0 ? delta : 0);
  }
  function handleTouchEnd() {
    dragging.current = false;
    if (dragY > DRAG_CLOSE_THRESHOLD && onClose) onClose();
    setDragY(0);
  }

  useEffect(() => {
    if (!isOpen) setDragY(0);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
    // eslint-disable-next-line
  }, [isOpen]);

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget && onClose) onClose();
  }

  return isOpen ? (
    <Overlay onClick={handleOverlayClick}>
      <Sheet
        open={isOpen}
        style={{ transform: `translateY(${isOpen ? dragY : 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
      >
        <DragBar />
        {children}
      </Sheet>
    </Overlay>
  ) : null;
};

export default LoginModal;
