import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const GoToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="Go to top"
      onClick={handleClick}
      className={`fixed bottom-20 right-6 z-40 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-opacity duration-200 ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      } bg-primary text-white`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default GoToTop;
