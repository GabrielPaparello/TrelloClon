import { NextRequest, NextResponse } from 'next/server';
import { db } from '@vercel/postgres';

export async function GET() {
  try {
    const client = await db.connect();
    
    const result = await client.query('SELECT data FROM projects ORDER BY id DESC ');
    
    
    
    client.release();
    
    if (result.rows.length > 0) {
      return NextResponse.json(result.rows[0].data, { status: 200 });
    } else {
      return NextResponse.json([], { status: 200 });
    }
  } catch (error) {
    console.error('Error loading data:', error);
    return NextResponse.json({ message: 'Failed to load data' }, { status: 500 });
  }
}
