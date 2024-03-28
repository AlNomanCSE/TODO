import connectedDB from "@/config/database";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";
export async function POST(request) {
  const { title, description } = await request.json();
  await connectedDB();
  const newData = await Topic.create({ title, description });
  return NextResponse.json({ message: "Created!" }, { status: 201 });
}
