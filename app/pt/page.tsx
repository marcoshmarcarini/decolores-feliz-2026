'use client';


import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Pt() {
  const router = useRouter();

  useEffect(() => {
    const redirectToYoutube = () =>{
      router.push("https://www.youtube.com/watch?v=7_9s4fbtBRM");
    }
    redirectToYoutube();
  }, [router]);
  return (
    <></>
  );
}