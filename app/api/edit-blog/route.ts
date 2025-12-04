import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { content } = await req.json();

  const response = await client.chat.completions.create({
    model: "gpt-4.1",
    messages: [
      { role: "system", content: "You are a blog editor. Only provide updated blog in response" },
      { role: "user", content },
    ],
  });

  return Response.json({ edited: response.choices[0].message.content });
}