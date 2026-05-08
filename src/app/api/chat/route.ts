import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    
    // In a real application, you would integrate OpenAI or Gemini SDK here
    // Example:
    // const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    // const result = await model.generateContent(messages.map(m => m.content).join('\n'));

    // We will return a mock response indicating basic logic functionality
    const lastMessage = messages[messages.length - 1].content.toLowerCase();
    let reply = "I'm a placeholder AI. In production, I would connect to an LLM provider to help with your TIMS/eTIMS or Booking needs!";
    
    if (lastMessage.includes('price') || lastMessage.includes('cost')) {
      reply = "Our Safety Pro package starts at KES 50,000 + VAT. Would you like me to book a demo for you?";
    } else if (lastMessage.includes('book') || lastMessage.includes('demo')) {
      reply = "Great! Someone from our sales team will reach out. You can also visit our bookings page.";
    }

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
