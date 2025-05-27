import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {
  const fullText = "Initializing secure shell... welcome :)";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(interval);
        if (typeof onFinish === "function") {
          setTimeout(onFinish, 1000);
        }
      }
    }, 80);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50 text-green-400 text-lg font-mono">
      <span>{text || ""}</span>
      <span className="animate-pulse ml-1">▊</span>
    </div>
  );
}
