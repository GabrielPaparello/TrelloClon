import { NextRequest, NextResponse } from "next/server";
import { db } from "@vercel/postgres";

export async function POST(req: NextRequest) {
  try {
    const { user_id, data, projectId } = await req.json();

    const client = await db.connect();

    // Check if the record exists
    const checkQuery =
      "SELECT id FROM projectdata WHERE user_id = $1 AND projectId = $2";
    const checkResult = await client.query(checkQuery, [user_id, projectId]);

    if (checkResult.rows.length > 0) {
      // Update existing record
      const updateQuery =
        "UPDATE projectdata SET data = $3 WHERE user_id = $1 AND projectId = $2";
      await client.query(updateQuery, [
        user_id,
        projectId,
        JSON.stringify(data),
      ]);
    } else {
      // Insert new record
      const insertQuery =
        "INSERT INTO projectdata (user_id, projectId , data) VALUES ($1, $2 , $3)";
      await client.query(insertQuery, [
        user_id,
        projectId,
        JSON.stringify(data),
      ]);
    }

    client.release();
    return NextResponse.json(
      { message: "Data saved successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving data:", error);
    return NextResponse.json(
      { message: "Failed to save data" },
      { status: 500 }
    );
  }
}
