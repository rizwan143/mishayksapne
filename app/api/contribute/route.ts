import { NextRequest, NextResponse } from "next/server";

interface ContributeBody {
  name: string;
  amount: number;
  message?: string;
  paymentMethod: string;
}

// Mock in-memory store (would be a real DB in production)
const contributions: ContributeBody[] = [];

export async function POST(req: NextRequest) {
  try {
    const body: ContributeBody = await req.json();

    if (!body.name || !body.amount || body.amount < 100) {
      return NextResponse.json({ error: "Invalid contribution data" }, { status: 400 });
    }

    contributions.push(body);

    return NextResponse.json({
      success: true,
      message: "Contribution recorded",
      id: `contrib_${Date.now()}`,
    });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    total: contributions.reduce((acc, c) => acc + c.amount, 0) + 450000,
    count: contributions.length + 3,
    target: 1000000,
  });
}
