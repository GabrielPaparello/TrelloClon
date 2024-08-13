import { NextRequest, NextResponse } from "next/server";
import { db } from "@vercel/postgres";

export async function GET(req: NextRequest) {
  try {
    const user_id = req.headers.get("user_id");

    // Ensure user_id is present and valid
    if (!user_id) {
      return NextResponse.json(
        { message: "Missing or invalid user_id" },
        { status: 400 }
      );
    }

    const client = await db.connect();
    const query =
      "SELECT projectid, projectname, description, members, category FROM projects WHERE user_id = $1";
    const result = await client.query(query, [user_id]);

    client.release();

    if (result.rows.length > 0) {
      // return NextResponse.json(result.rows, { status: 200 });
      const projects = result.rows.map((row) => ({
        user_id: user_id, // Since user_id is a filter parameter, it should be added manually
        projectId: row.projectid,
        projectName: row.projectname,
        description: row.description,
        members: row.members ? row.members.split(",") : [], // Convert comma-separated string to array
        category: row.category,
      }));

      return NextResponse.json(projects, { status: 200 });
    } else {
      return NextResponse.json([], { status: 200 });
    }
  } catch (error) {
    console.error("Error loading project data:", error);
    return NextResponse.json(
      { message: "Failed to load project data" },
      { status: 500 }
    );
  }
}
