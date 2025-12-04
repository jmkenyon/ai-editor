import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brown-100 ">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center sm:p-16 p-8 bg-white ">
        <section className="flex flex-row gap-10 w-full sm:justify-center justify-start items-center">
          <h1 className="text-4xl font-bold text-brown-700">Blog editor</h1>
          <Image className="hidden sm:block" alt="Pencil Icon" src="/pencil.png" width={50} height={50} />
        </section>
          <div className="pt-5" >
            <p>Paste your blog below and let AI magic transform it into a masterpiece</p>
            <textarea className="bg-[#F8F5EE] rounded border-brown-800  p-2 border-2 mt-5 w-full h-150"
            
            />
          </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}
