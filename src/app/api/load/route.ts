// import { NextRequest, NextResponse } from 'next/server';
// import { db } from '@vercel/postgres';

// export async function GET(req: NextRequest) {
//   try {
//     const { user_idR } = req.nextUrl.searchParams;
//     const user_id = user_idR.match(/\d+/)?.[0];
//     console.log('user_id:', user_id);
//     const client = await db.connect();

//     const query = 'SELECT data FROM projects WHERE user_id = $1 LIMIT 1';
//     const result = await client.query(query, [user_id]);

//     client.release();

//     if (result.rows.length > 0) {
//       return NextResponse.json(JSON.parse(result.rows[0].data), { status: 200 });
//     } else {
//       return NextResponse.json([], { status: 200 });
//     }
//   } catch (error) {
//     console.error('Error loading data:', error);
//     return NextResponse.json({ message: 'Failed to load data' }, { status: 500 });
//   }
// }
import { NextRequest, NextResponse } from "next/server";
import { db } from "@vercel/postgres";

export async function GET(req: NextRequest) {
  try {
    // Extract user_id from request headers
    const user_id = req.headers.get("user_id");
    const projectId = req.headers.get("projectId");
    // Alternatively, you can extract user_id from the body if it's a POST request
    // const { user_id } = await req.json();

    // Log the user_id for debugging purposes
    console.log("user_id:", user_id);

    // Ensure user_id is present and valid
    if (!user_id && !projectId) {
      return NextResponse.json(
        { message: "Missing or invalid user_id, projectId" },
        { status: 400 }
      );
    }

    const client = await db.connect();
    const query =
      "SELECT data FROM projects WHERE user_id = $1 AND projectId = $2 LIMIT 1";
    const result = await client.query(query, [user_id, projectId]);

    client.release();

    if (result.rows.length > 0) {
      return NextResponse.json(result.rows[0].data, { status: 200 });
    } else {
      return NextResponse.json([], { status: 200 });
    }
  } catch (error) {
    console.error("Error loading data:", error);
    return NextResponse.json(
      { message: "Failed to load data" },
      { status: 500 }
    );
  }
}
