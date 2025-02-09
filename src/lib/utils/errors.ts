import { NextResponse } from "next/server";

export class ApiError extends Error {
  constructor(
    public status: number,
    public message: string,
    public details?: any
  ) {
    super(message);
  }

  toResponse() {
    return NextResponse.json(
      { error: this.message, ...(this.details && { details: this.details}) },
      { status: this.status }
    );
  }
}

try {
  // ...Logic
} catch (error) {
  if (error instanceof ApiError) {
    return error.toResponse();
  }
  return new ApiError(500, 'Internal server error').toResponse();
}