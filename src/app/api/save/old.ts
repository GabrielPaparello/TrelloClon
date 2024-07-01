import { db } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest) {
  try {
    const cards = await req.json();

    const client = await db.connect();
    // Assuming you have a table setup to store your cards data
    // Here is a simple example to save JSON data as a string in a column
    await client.query('INSERT INTO projects (data) VALUES ($1)', [JSON.stringify(cards)]);
    client.release();

    return NextResponse.json({ message: 'Data saved successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error saving data:', error);
    return NextResponse.json({ message: 'Failed to save data' }, { status: 500 });
  }
}