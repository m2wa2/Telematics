import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(messages.map((m:any) => m.content).join('\n'));
    let reply = result.response?.text?.() || "I'm unable to respond at the moment.";



    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
