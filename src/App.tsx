import { Lenis as ReactLenis, useLenis } from "@studio-freight/react-lenis";
import "./App.css";
import Templates from "./components/templates";
import { useEffect } from "react";

function App() {
  // ----Lenisの再計算処理↓----
  const lenis = useLenis();

  useEffect(() => {
    // 全画像読み込み確認してresize
    const images = Array.from(document.images);
    let loadedCount = 0;

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        lenis?.resize();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener("load", handleImageLoad);
      }
    });

    // safety fallback
    setTimeout(() => lenis?.resize(), 3000);

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
      });
    };
  }, [lenis]);
  // ----Lenisの再計算処理↑----
  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      <Templates />
    </ReactLenis>
  );
}

export default App;
