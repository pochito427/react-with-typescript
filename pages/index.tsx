import { useState } from "react";
import { RandomFox } from "@/components/RandomFox";

export default function Home() {

  // generates a random number between 1 and 122
 const randomNumber = (): number => Math.floor(Math.random()*122)+1;

 // generates a simple unique id
 const generateId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15)
  );
 };

 type ImageItem = {
    id: string;
    url: string;
 };

 const [images, setImages] = useState<Array<ImageItem>>([
  { id: generateId(), url: `https://randomfox.ca/images/${randomNumber()}.jpg` },
  { id: generateId(), url: `https://randomfox.ca/images/${randomNumber()}.jpg` },
  { id: generateId(), url: `https://randomfox.ca/images/${randomNumber()}.jpg` },
  { id: generateId(), url: `https://randomfox.ca/images/${randomNumber()}.jpg` }
 ]);

  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      {images.map(({ id, url }) => (
        <div className="p-4" key={id}>
          <RandomFox image={url} />
        </div>
      ))}
    </main>
  );
}
