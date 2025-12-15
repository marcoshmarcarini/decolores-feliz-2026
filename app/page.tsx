"use client";

//import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const redirectToYoutube = () =>{
      router.push("https://youtu.be/b7mTvLtDXSM");
    }
    redirectToYoutube();
  }, [router]);

  /* Video menor que 100mb */

  return (
    <>
      {/* <div className={`bg-green-900 flex items-center justify-center h-screen`}>
        <video
          src="/videos/decolores_fim_de_ano_2025.mp4"
          autoPlay
          controls
        ></video>
      </div> */}
    </>
  );
}
