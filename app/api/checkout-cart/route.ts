import { stripe } from "@/app/lib/stripe";
import type { NextApiRequest, NextApiResponse } from "next";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: "price_1SIvD2PlqGjudXY97nbBjSVt",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/success`,
      cancel_url: `${origin}/failure`,
    });
    console.log("Session URL:", session.url);
    return NextResponse.redirect(session.url || "/", { status: 303 });
  } catch (error) {
    res.status(500).json({ error: "error" });
  }
}
