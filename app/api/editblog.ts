import client from "./openai";
import type {ChatCompletionMessageParam} from "openai/resources/chat"

export async function EditBlog() {
  const messages: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content:
        "You are a blog editor. Only provide the updated blog in the response.",
    },
    {
      role: "user",
      content:
        "I am a happy boy who likes eateing fish and climbing and bycycling. I live in Francancisco with my mum and dad I also dont like homework",
    },
  ];

  const response = await client.chat.completions.create({
    model: "gpt-4.1",
    messages,
  });

  return response.choices[0].message.content;

}


