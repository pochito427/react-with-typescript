import { useState } from "react";
import { MouseEventHandler } from "react";
import Head from "next/head";
import { LazyImage } from "@/components/LazyImage";

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

 const [images, setImages] = useState<Array<ImageItem>>([]);

 const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
    const id = generateId();
    const url = `https://randomfox.ca/images/${randomNumber()}.jpg`;
    setImages([...images, {id, url}]);
 };

  return (
    <div>
      <main>
        <Head>
          <title>Random Fox Generator</title>
          <meta name="description" content="Fox images generated randomly" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="m-4">
          <button onClick={addNewFox} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Add new fox
          </button>
        </div>
        {images.map(({ id, url }) => (
          <div className="p-4" key={id}>
            <LazyImage src={url} width="320" height="auto" title="Random Fox" alt="Random Fox" className="mx-auto rounded-md bg-gray-300" />
          </div>
        ))}
      </main>
    </div>
  );
}
