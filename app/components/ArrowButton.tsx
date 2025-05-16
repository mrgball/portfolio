'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";

const ArrowButton = ({ route, isBack = false }: { route: string; isBack?: boolean }) => {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      router.push(route);
    }, 300);
  };

  return (
    <div className={`transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
      <button
        onClick={handleClick}
        className={`absolute bottom-8 ${isBack ? 'left-8' : 'right-8'} text-black bg-white px-4 py-2 rounded-full text-2xl`}
      >
        {isBack ? '←' : '→'}
      </button>
    </div>
  );
};

export default ArrowButton;
