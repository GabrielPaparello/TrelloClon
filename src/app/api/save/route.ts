import { NextRequest, NextResponse } from 'next/server';
import { db } from '@vercel/postgres';

export async function POST(req: NextRequest) {
  try {
    const { user_id, data } = await req.json();

    const client = await db.connect();

    // Check if the record exists
    const checkQuery = 'SELECT id FROM projects WHERE user_id = $1';
    const checkResult = await client.query(checkQuery, [user_id]);

    if (checkResult.rows.length > 0) {
      // Update existing record
      const updateQuery = 'UPDATE projects SET data = $2 WHERE user_id = $1';
      await client.query(updateQuery, [user_id, JSON.stringify(data)]);
    } else {
      // Insert new record
      const insertQuery = 'INSERT INTO projects (user_id, data) VALUES ($1, $2)';
      await client.query(insertQuery, [user_id, JSON.stringify(data)]);
    }

    client.release();
    return NextResponse.json({ message: 'Data saved successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error saving data:', error);
    return NextResponse.json({ message: 'Failed to save data' }, { status: 500 });
  }
}
