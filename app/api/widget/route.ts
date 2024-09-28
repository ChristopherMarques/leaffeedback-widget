import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";
import { getAuth } from "firebase-admin/auth";
import { WidgetConfig } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const widgetConfig: WidgetConfig = await request.json();
    const authHeader = request.headers.get("Authorization");

    if (!authHeader) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split("Bearer ")[1];
    const decodedToken = await getAuth().verifyIdToken(token);
    const userId = decodedToken.uid;

    const newWidget = {
      ...widgetConfig,
      userId,
      createdAt: new Date(),
    };

    const widgetsCollectionRef = db.collection("widgets");
    const widgetsSnapshot = await widgetsCollectionRef.limit(1).get();

    if (widgetsSnapshot.empty) {
      await db.collection("widgets").doc("placeholder").set({});
      await db.collection("widgets").doc("placeholder").delete();
    }

    const widgetRef = await widgetsCollectionRef.add(newWidget);
    const widgetId = widgetRef.id;

    await db
      .collection("projects")
      .where("projectId", "==", widgetConfig.projectId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.update({ widgetId });
        });
      });

    return NextResponse.json({ ...newWidget, id: widgetId }, { status: 201 });
  } catch (error) {
    console.error("Error creating widget:", error);
    return NextResponse.json(
      { error: "Failed to create widget" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const widgetId = request.nextUrl.searchParams.get("id");

    if (!widgetId) {
      return NextResponse.json(
        { error: "Widget ID is required" },
        { status: 400 }
      );
    }

    const authHeader = request.headers.get("Authorization");

    if (!authHeader) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split("Bearer ")[1];
    const decodedToken = await getAuth().verifyIdToken(token);
    const userId = decodedToken.uid;

    const widgetDoc = await db.collection("widgets").doc(widgetId).get();

    if (!widgetDoc.exists) {
      return NextResponse.json({ error: "Widget not found" }, { status: 404 });
    }

    const widgetData = widgetDoc.data() as WidgetConfig & { userId: string };

    if (widgetData.userId !== userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    return NextResponse.json({ ...widgetData, id: widgetId }, { status: 200 });
  } catch (error) {
    console.error("Error fetching widget:", error);
    return NextResponse.json(
      { error: "Failed to fetch widget" },
      { status: 500 }
    );
  }
}
