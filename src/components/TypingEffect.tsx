import { useState, useEffect } from "react";

interface TypingEffectProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
  className?: string;
}

export const TypingEffect = ({
  texts,
  speed = 100,
  deleteSpeed = 50,
  delay = 2000,
  className = "",
}: TypingEffectProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const fullText = texts[currentTextIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing forward
          if (currentText.length < fullText.length) {
            setCurrentText(fullText.slice(0, currentText.length + 1));
          } else {
            // Start deleting after delay
            setTimeout(() => setIsDeleting(true), delay);
          }
        } else {
          // Deleting backward
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            // Move to next text
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    currentTextIndex,
    texts,
    speed,
    deleteSpeed,
    delay,
  ]);

  return (
    <span className={className}>
      {currentText}
      <span
        className={`${
          showCursor ? "opacity-100" : "opacity-0"
        } transition-opacity duration-100`}
      >
        |
      </span>
    </span>
  );
};
