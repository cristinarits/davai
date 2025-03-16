import Image from "next/image";

export default function Home() {
  return(
    <div>
      <h1 className="text-4xl font-bold text-red-900"> This is Scribe</h1>
      <p className="mt-4 text-lg text-red-950">I have no idea what i'm doing</p>

      <Image 
        src = "/photo1.jpg"
        alt = "that's me btw"
        width={300}
        height={300}
        className="rounded-lg shadow-lg mt-4"
      />
    </div>
  );
}
