import { Lenis as ReactLenis, useLenis } from "@studio-freight/react-lenis";
import "./App.css";
import Templates from "./components/templates";
import { useEffect, useRef } from "react";

function App() {
  // ----Lenisの再計算処理↓----
  const lenis = useLenis();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const targetId = "orderFlow";
    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
      return;
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          lenis?.resize();
        }
      });
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });

    // ターゲットを監視
    observerRef.current.observe(targetElement);

    // クリーンアップ
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [lenis]);
  // ----Lenisの再計算処理↑----
  return (
    <ReactLenis root>
      <Templates />
    </ReactLenis>
  );
}

export default App;
