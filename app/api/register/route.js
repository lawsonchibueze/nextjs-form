import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
  const { username, email, password } = await request.json();

  const user = await prisma.user.create({
    data: {
      username,
      email,
      password,
    },
  });

  return NextResponse.json({ message: "User created successfully", user });
}
