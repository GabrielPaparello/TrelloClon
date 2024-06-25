import { NextRequest, NextResponse } from 'next/server';
import { db } from '@vercel/postgres';

export async function POST(req: NextRequest) {
  try {
    const { project_name, project_description, project_type, project_status, project_priority, project_team } = await req.json();

    if (!project_name || !project_description || !project_type || !project_status || !project_priority || !project_team) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const client = await db.connect();
    const query = `
      INSERT INTO projects 
      (project_name, project_description, project_type, project_status, project_priority, project_team) 
      VALUES ($1, $2, $3, $4, $5, $6) 
      RETURNING id;
    `;

    const result = await client.query(query, [
      project_name,
      project_description,
      project_type,
      project_status,
      project_priority,
      project_team
    ]);

    client.release();

    return NextResponse.json({ message: 'Project created successfully', projectId: result.rows[0].id }, { status: 200 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json({ message: 'Failed to create project', error: error }, { status: 500 });
  }
}
