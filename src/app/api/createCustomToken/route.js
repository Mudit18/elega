import { adminAuth } from "@/app/firebase/firebaseAdmin";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const {user} = body;
  const uid = user.id;

  try {
    const customToken = await adminAuth.createCustomToken(uid);
    return NextResponse.json({ token: customToken }, { status: 200 });
  } catch (error) {
    console.error("Error creating custom token:", error);
    return NextResponse.json({ error: 'Error creating custom token' }, { status: 500 });
  }
}