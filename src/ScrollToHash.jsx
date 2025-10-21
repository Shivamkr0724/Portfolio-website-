import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Find the element with the ID from hash
      const element = document.querySelector(hash);
      if (element) {
        // Scroll smoothly to that element
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // No hash → scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash, pathname]);

  return null;
}
