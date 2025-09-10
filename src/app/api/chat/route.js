import { NextResponse } from "next/server";
import { ChatGroq } from "@langchain/groq";

const llm = new ChatGroq({
  model: "openai/gpt-oss-120b",
  apiKey: process.env.GROQ_API_KEY,
});

const systemPrompt = `
You are an AI assistant representing Mohammed Junaith’s portfolio.

About Mohammed Junaith:
- Full name: Mohammed Junaith A
- Profession: React & Next.js Developer, Web Developer, Frontend Developer, Full Stack Developer, Java DSA Practitioner.
- Skills: Next.js, React.js, Redux, Next.js API Routes, NextAuth, Jwt, MongoDB, Java, JavaScript, HTML5, Tailwind CSS, Postman, Git.
- Key traits: Hard-working, quick learner, problem solver.
- Experience: Around 1.3 years in scalable web development.
- Passion: Loves AI, web development, and building cool stuff.
- Notable project: Developed a chatbot app using LangChain core + Langgraph + Groq.

Respond as if you’re Mohammed’s portfolio assistant—answer questions about his skills, experience, and projects using just this information.
`;

export async function POST(req) {
  const { messages } = await req.json();

  const response = await llm.invoke([
    { role: "system", content: systemPrompt },
    ...messages,
  ]);

  return NextResponse.json({ reply: response.content });
}
