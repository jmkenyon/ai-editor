"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("option1");
  const options = [
    { id: "option1", label: "Spelling and Grammar Only" },
    { id: "option2", label: "Spelling, Grammar, and Minor Readability" },
    { id: "option3", label: "Completely Transform your Blog" },
  ];

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
        <div className="pt-5">
          <p>
            Paste your blog below and let AI magic transform it into a
            masterpiece
          </p>
          <textarea className="bg-[#F8F5EE] rounded border-brown-800  p-2 border-2 mt-5 w-full h-150" />
        </div>
        <div className="flex flex-col w-full px-32 gap-1">
          {options.map((button) => (
            <Button key={button.id}
              className={cn("text-brown-800 border-2 border-brown-800 w-full hover:bg-brown-600 transition-colors duration-200 hover:text-white",
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
        
        >
          Edit Blog
        </Button>
      </main>
      <footer className="bg-brown-400 p-5 min-w-full">
        <h2>© Write Magic. All Rights Reserved</h2>
      </footer>
    </div>
  );
}
