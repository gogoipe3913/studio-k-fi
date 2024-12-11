import { Lenis as ReactLenis, useLenis } from "@studio-freight/react-lenis";
import "./App.css";
import Templates from "./components/templates";
import { useEffect, useRef } from "react";

function App() {
  // ----Lenisの再計算処理↓----
  const lenis = useLenis();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const targetIdWorks = "forResizingByLenis1";
    const targetElementWorks = document.getElementById(targetIdWorks);
    const targetIdWorks2 = "forResizingByLenis2";
    const targetElementWorks2 = document.getElementById(targetIdWorks2);
    const targetIdWorks3 = "forResizingByLenis3";
    const targetElementWorks3 = document.getElementById(targetIdWorks3);
    const targetIdFlow = "orderFlow";
    const targetElementFlow = document.getElementById(targetIdFlow);

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
    if (targetElementWorks) {
      observerRef.current.observe(targetElementWorks);
    }
    if (targetElementWorks2) {
      observerRef.current.observe(targetElementWorks2);
    }
    if (targetElementWorks3) {
      observerRef.current.observe(targetElementWorks3);
    }
    if (targetElementFlow) {
      observerRef.current.observe(targetElementFlow);
    }

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
