import type {NextApiRequest, NextApiResponse} from 'next'
import { NextResponse } from 'next/server';

export async function GET (request:NextApiRequest){
    return new NextResponse(JSON.stringify({ message: "Welcome John Doe" }), {
    status: 200,
  });
} 
