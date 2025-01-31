import { NextResponse } from "next/server";
import { getResources, addResource } from "@/lib/utils/resources";

export async function GET() {
  try {
    const resources = await getResources()
    return NextResponse.json(resources)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch resources'
      },
      { status: 500 }
    )
  }
}

export async function POSt(request: Request) {
  try {
    const body = await request.json()
    const newResource = await addResource(body)
    return NextResponse.json(newResource, { status:201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create resource' },
      { status: 500 }
    )
  }
}