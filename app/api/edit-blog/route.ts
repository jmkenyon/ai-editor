import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


type ImprovementOption = "option1" | "option2" | "option3";


export async function POST(req: Request) {
  const { content, selectedValue } = await req.json() as {
    content: string;
    selectedValue: ImprovementOption;
  };

  const improvementInstructions: Record<ImprovementOption, string> = {
    option1: "Fix only spelling and grammar. Do NOT rewrite any sentences.",
    option2: "Fix grammar and spelling. Improve readability slightly. Keep the original tone.",
    option3: "Transform the blog fully. Improve clarity, structure, and tone. Rephrase as needed.",
  };
  
  
  const chosenInstruction = improvementInstructions[selectedValue]

  const response = await client.chat.completions.create({
    model: "gpt-4.1",
    messages: [
      { role: "system", content: `You are a blog editor. Only provide updated blog in response. Improve the blog by the following pramaters: ${chosenInstruction}` },
      { role: "user", content },
    ],
  });

  return Response.json({ edited: response.choices[0].message.content });
}