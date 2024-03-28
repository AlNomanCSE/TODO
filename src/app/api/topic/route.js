import connectedDB from "@/config/database";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";
export async function GET() {
  await connectedDB();
  const todos = await Topic.find();
  return NextResponse.json(todos, { status: 201 });
}
export async function DELETE(request) {
  await connectedDB();
  const id = request.nextUrl.searchParams.get("id");
  try {
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: "Deleted!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error);
  }
}
