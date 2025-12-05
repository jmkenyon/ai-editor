"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ClipLoader } from "react-spinners";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ImprovementOption = "option1" | "option2" | "option3";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState<ImprovementOption>("option1");
  const options = [
    { id: "option1", label: "Spelling and Grammar Only" },
    { id: "option2", label: "Spelling, Grammar, and Minor Readability" },
    { id: "option3", label: "Completely Transform your Blog" },
  ] as const;
  const [edittedBlog, setEdittedBlog] = useState<string | null>(null);
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setEdittedBlog("");
    setContent("")
    if (!content) {
      setEdittedBlog("Please enter a blog post");
      return;
    }
    setIsLoading(true);
    const res = await fetch("/api/edit-blog", {
      method: "POST",
      body: JSON.stringify({ content, selectedValue }),
    });

    const data = await res.json();
    setEdittedBlog(data.edited);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-brown-100 ">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center sm:p-16 p-8 bg-white ">
        <section className="flex flex-row gap-10 w-full sm:justify-center justify-start items-center">
          <h2 className="text-4xl font-bold text-brown-700">Blog editor</h2>
          <Image
            className="hidden sm:block"
            alt="Pencil Icon"
            src="/pencil.png"
            width={50}
            height={50}
          />
        </section>
        <div className="pt-5 flex flex-col items-center justify-center">
          <p>
            Paste your blog below and let AI magic transform it into a
            masterpiece
          </p>

          {isLoading ? (
            <ClipLoader
              loading={isLoading}
              size={150}
              color="#4b371b"
              aria-label="Loading Spinner"
              data-testid="loader"
              className="my-50 border-2"
            />
          ) : (
            <textarea
              className="bg-[#F8F5EE] rounded border-brown-800  p-2 border-2 my-5 w-full h-150"
              onChange={(e) => setContent(e.target.value)}
              required
            />
          )}
        </div>
        <div className="flex flex-col w-full px-32 gap-1">
          {options.map((button) => (
            <Button
              key={button.id}
              className={cn(
                "text-brown-800 border-2 border-brown-800 w-full hover:bg-brown-600 transition-colors duration-200 hover:text-white",
                selectedValue === button.id && "bg-brown-600 text-white"
              )}
              onClick={() => setSelectedValue(button.id)}
            >
              {button.label}
            </Button>
          ))}
        </div>

        <Button
          className="text-brown-800 mt-5 border-brown-800 border-2"
          variant={"elevated"}
          onClick={handleClick}
        >
          Edit Blog
        </Button>

        {edittedBlog && (
          <div className="prose prose-neutral mt-10">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{edittedBlog}</ReactMarkdown>
          </div>
        )}
      </main>
      <footer className="bg-brown-400 p-5 min-w-full">
        <h2>© Write Magic. All Rights Reserved</h2>
      </footer>
    </div>
  );
}
