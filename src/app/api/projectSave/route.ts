import { NextRequest, NextResponse } from "next/server";
import { db } from "@vercel/postgres";

// SE USARA ESTA FUNCION CON UN USEEEFFECT CUANDO SE CREA UN NUEVO PROYECTO PARA MANTENER ACTUALIZADOS O GUARDADOS LOS PROYECTOS PREVIO AL CAMBIO DE RUTA DINAMICA
// CUANDO SE EJECUTE Y SE VALLA A LA RUTA DINAMICA ESTE PROJECT ID VA A SER EL MISMO QUE EL DE LA RUTA DINAMICA Y LO VA A RECIBIR EL CARD LOAD PARA CARGAR LOS COMPS
export async function POST(req: NextRequest) {
  try {
    const { user_id, projectId, projectName, description, members, category } =
      await req.json();

    const client = await db.connect();

    // Check if the record exists
    const checkQuery =
      "SELECT id FROM projects WHERE user_id = $1 AND projectId = $2";
    const checkResult = await client.query(checkQuery, [user_id, projectId]);

    if (checkResult.rows.length > 0) {
      // Update existing record
      const updateQuery = `
      UPDATE projects
      SET projectName = $3,
          description = $4,
          members = $5,
          category = $6
      WHERE user_id = $1 AND projectId = $2
    `;
      await client.query(updateQuery, [
        user_id,
        projectId,
        projectName,
        description,
        members,
        category,
      ]);
    } else {
      // Insert new record
      const insertQuery = `
      INSERT INTO projects (user_id, projectId, projectName, description, members, category)
      VALUES ($1, $2, $3, $4, $5, $6)
    `;
      await client.query(insertQuery, [
        user_id,
        projectId,
        projectName,
        description,
        members,
        category,
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
