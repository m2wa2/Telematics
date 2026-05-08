import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(bookings);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const newBooking = await prisma.booking.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        service: data.service,
        date: new Date(data.date),
        notes: data.notes || null,
      },
    });
    return NextResponse.json(newBooking, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 });
  }
}
