import { NextRequest } from "next/server";
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { SYSTEM_PROMPT } from "@/lib/prompt";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const { messages = [] } = await req.json();

  const result = await streamText({
    model: openai("gpt-4o-mini"),
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages,
    ],
  });

  return result.toAIStreamResponse();
}