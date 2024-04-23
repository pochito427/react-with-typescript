import { RandomFox } from "@/components/RandomFox";

export default function Home() {

  // generates a random number between 1 and 122
 const randomNumber = (): number => Math.floor(Math.random()*122)+1;

  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <RandomFox image={`https://randomfox.ca/images/${randomNumber()}.jpg`}/>
    </main>
  );
}
