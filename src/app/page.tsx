import Image from "next/image";

export default function Home() {
  return(
    <div>
      <h1 className="text-4xl font-bold text-white"> This is davai</h1>
      <p className="mt-4 text-lg text-white">and this is albert</p>

      <Image 
        src = "https://cpyxqewlkqmiuwwmlzaz.supabase.co/storage/v1/object/public/pictures//albert.jpg"
        alt = "that's me btw"
        width={300}
        height={300}
        className="rounded-lg shadow-lg mt-4"
      />
    </div>
  );
}
