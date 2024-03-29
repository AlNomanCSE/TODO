import connectedDB from "@/config/database";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";
export async function PUT(request, { params }) {
  await connectedDB();
  const { title, description } = await request.json();
  const todos = await Topic.findByIdAndUpdate(params.id, {
    title,
    description,
  });
  return NextResponse.json({ message: "Updated!" }, { status: 200 });
}

export async function GET(request, { params }) {
  await connectedDB();
  const todo = await Topic.findById({ _id: params.id });
  return NextResponse.json(todo, { status: 200 });
}