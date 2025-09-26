import React from "react";
import Gallery from "./components/gallery";

export default function Home() {
  return (
    <div className="flex-col">
      <main className="flex-col">
        <div>
          <Gallery />
        </div>

      </main>
      <footer className="row-start-3 text-xs text-center text-black/50 dark:text-white/50">
      </footer>
    </div>
  );
}
