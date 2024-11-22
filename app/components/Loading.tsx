import { useEffect, useState } from "react";

const Loading = () => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const lines = [
      "Initializing Plug...",
      "Loading assets...",
      "Plugging into network...",
      "Launch successful...",
    ];

    let lineIndex = 0;
    let charIndex = 0;

    const typeNextChar = () => {
      if (lineIndex >= lines.length) {
        return;
      }

      const currentLine = lines[lineIndex];
      const completedLines = lines.slice(0, lineIndex);
      const currentProgress = currentLine.slice(0, charIndex + 1);

      setDisplayText([...completedLines, currentProgress].join("\n"));

      charIndex++;

      if (charIndex >= currentLine.length) {
        lineIndex++;
        charIndex = 0;
      }
    };

    const typingInterval = setInterval(typeNextChar, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <pre className="text-green-500 text-lg font-mono whitespace-pre-wrap">
        {displayText}
        <span className="animate-pulse">|</span>
      </pre>
    </div>
  );
};

export default Loading;
