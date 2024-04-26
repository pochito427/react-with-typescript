"use client";
import { useState } from "react";
import { RandomFox } from "@/components/RandomFox";

export default function Home() {

  // generates a random number between 1 and 122
 const randomNumber = (): number => Math.floor(Math.random()*122)+1;

 const [images, setImages] = useState<string[]>([
  `https://randomfox.ca/images/${randomNumber()}.jpg`,
  `https://randomfox.ca/images/${randomNumber()}.jpg`,
  `https://randomfox.ca/images/${randomNumber()}.jpg`,
  `https://randomfox.ca/images/${randomNumber()}.jpg`
 ]);

  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      {images.map((image, index) => (
        <div className="p-4" key={index}>
          <RandomFox image={image} />
        </div>
      ))}
    </main>
  );
}
