import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";
import { getAuth } from "firebase-admin/auth";

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get("userId");
  if (!userId) {
    return NextResponse.json({ error: "UserId is required" }, { status: 400 });
  }

  try {
    const projectsSnapshot = await db
      .collection("projects")
      .where("userId", "==", userId)
      .orderBy("createdAt", "desc")
      .get();
    const projects = projectsSnapshot.docs.map((doc) => doc.data());
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get("userId");
  if (!userId) {
    return NextResponse.json({ error: "UserId is required" }, { status: 400 });
  }

  try {
    const { name, id } = await request.json();
    if (!name) {
      return NextResponse.json(
        { error: "Project name is required" },
        { status: 400 }
      );
    }

    const newProject = {
      id,
      name,
      userId,
      createdAt: new Date(),
    };

    await db.collection("projects").add(newProject);
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  const { id, widgetId } = await request.json();
  if (!id || !widgetId) {
    return NextResponse.json(
      { error: "Project ID and Widget ID are required" },
      { status: 400 }
    );
  }

  try {
    const projectsRef = db.collection("projects");
    const querySnapshot = await projectsRef
      .where("id", "==", id)
      .limit(1)
      .get();

    if (querySnapshot.empty) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    const projectDoc = querySnapshot.docs[0];
    await projectDoc.ref.update({ widgetId });

    return NextResponse.json(
      { message: "Project updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}
