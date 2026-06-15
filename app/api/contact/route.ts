import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import type { ContactFormData } from "@/types";

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseClient();

    if (supabase) {
      const { error } = await supabase.from("contact_messages").insert({
        name: body.name,
        email: body.email,
        phone: body.phone || null,
        message: body.message,
      });

      if (error) {
        console.error("Supabase contact error:", error);
        return NextResponse.json(
          { error: "Failed to save message" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
