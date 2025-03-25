import React from "react";
import { cn } from "@/lib/utils";

export interface TypewriterEffectProps {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}

const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: TypewriterEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [typingSpeed, setTypingSpeed] = React.useState(150);

  React.useEffect(() => {
    const word = words[currentWordIndex]?.text || "";

    const type = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(word.substring(0, currentText.length + 1));
        setTypingSpeed(150);

        // If word is complete, start deleting after a delay
        if (currentText === word) {
          // Don't delete for the name, keep it visible
          return;
        }
      } else {
        // Deleting
        setCurrentText(word.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        // If deleted, move to next word
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, currentWordIndex, isDeleting, words, typingSpeed]);

  return (
    <span className={cn("inline-block", className)}>
      {currentText}
      <span
        className={cn(
          "ml-1 inline-block w-[4px] h-5 bg-primary animate-blink",
          cursorClassName
        )}
      />
    </span>
  );
};

export default TypewriterEffect;
