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

const Sheet = styled.div<{
  open: boolean;
  dragging: boolean;
  animate: boolean;
}>`
  width: 100vw;
  max-width: 600px;
  min-height: 300px;
  background: var(--color-very-dark-gray-2);
  border-radius: 50px 50px 0 0;
  box-shadow: 0 -2px 24px rgba(0, 0, 0, 0.2);
  position: relative;
  transition:
    transform 1s cubic-bezier(0.4, 1.2, 0.4, 1),
    opacity 0.2s;
  opacity: ${(props) => (props.open ? 1 : 0)};
  padding: 14px 1.2rem 2rem 1.2rem;
  will-change: transform;
  ${(props) => props.dragging && "transition: none;"}
  ${(props) => !props.animate && "transition: none;"}
`;

const DragBar = styled.div`
  width: 125px;
  height: 4px;
  background: #444;
  border-radius: 3px;
  margin: 1px auto 1px auto;
  cursor: grab;
`;

const DRAG_CLOSE_THRESHOLD = 80;

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [sheetTranslate, setSheetTranslate] = useState("100vh");
  const [visible, setVisible] = useState(false);
  const startY = useRef<number | null>(null);
  const dragging = useRef(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  // Controla visibilidade e animação de entrada/saída
  useEffect(() => {
    if (isOpen) {
      //document.body.classList.add("body-no-scroll");
      setVisible(true);
      setSheetTranslate("100vh");
      setAnimate(false);
      setTimeout(() => {
        setAnimate(true);
        setSheetTranslate("0px");
      }, 20);
    } else if (visible) {
      // Só anima saída se estava visível
      
      setAnimate(true);
      setSheetTranslate("100vh");
      closeTimeout.current = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, 500); // tempo igual ao da animação
    }

    //if(!isOpen) document.body.classList.remove("body-no-scroll");
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
    // eslint-disable-next-line
  }, [isOpen]);

  // Mouse events
  function handleMouseDown(e: React.MouseEvent) {
    dragging.current = true;
    setIsDragging(true);
    startY.current = e.clientY;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  }
  function handleMouseMove(e: MouseEvent) {
    if (!dragging.current || startY.current === null) return;
    const delta = e.clientY - startY.current;
    setDragY(delta > 0 ? delta : 0);
    setSheetTranslate(`${delta > 0 ? delta : 0}px`);
  }
  function handleMouseUp() {
    dragging.current = false;
    setIsDragging(false);
    if (dragY > DRAG_CLOSE_THRESHOLD && isOpen) {
      setAnimate(true);
      setSheetTranslate("100vh");
      closeTimeout.current = setTimeout(() => {
        setDragY(0);
        if (onClose) onClose();
      }, 500);
    } else {
      setDragY(0);
      setSheetTranslate("0px");
    }
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  }

  // Touch events
  function handleTouchStart(e: React.TouchEvent) {
    dragging.current = true;
    setIsDragging(true);
    startY.current = e.touches[0].clientY;
  }
  function handleTouchMove(e: React.TouchEvent) {
    if (!dragging.current || startY.current === null) return;
    const delta = e.touches[0].clientY - startY.current;
    setDragY(delta > 0 ? delta : 0);
    setSheetTranslate(`${delta > 0 ? delta : 0}px`);
  }
  function handleTouchEnd() {
    dragging.current = false;
    setIsDragging(false);
    if (dragY > DRAG_CLOSE_THRESHOLD && isOpen) {
      setAnimate(true);
      setSheetTranslate("100vh");
      closeTimeout.current = setTimeout(() => {
        setDragY(0);
        if (onClose) onClose();
      }, 500);
    } else {
      setDragY(0);
      setSheetTranslate("0px");
    }
  }

  useEffect(() => {
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
    // eslint-disable-next-line
  }, []);

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget && isOpen) {
      setAnimate(true);
      setSheetTranslate("100vh");
      closeTimeout.current = setTimeout(() => {
        setDragY(0);
        if (onClose) onClose();
      }, 500);
    }
  }

  if (!visible) return null;

  return (
    <Overlay onClick={handleOverlayClick}>
      <Sheet
        open={isOpen || false}
        dragging={isDragging}
        animate={animate}
        style={{ transform: `translateY(${sheetTranslate})` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
      >
        <DragBar />
        {children}
      </Sheet>
    </Overlay>
  );
};

export default LoginModal;
