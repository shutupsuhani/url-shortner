import { NextResponse } from 'next/server';
import { connectToDB } from '@/lib/db';
import Url from '@/models/Url';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const { longUrl } = await request.json();

    if (!longUrl || !longUrl.startsWith('http')) {
      return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
    }

    await connectToDB();

    // Check if it already exists
    const existing = await Url.findOne({ longUrl });
    if (existing) {
      return NextResponse.json({ shortUrl: existing.shortUrl });
    }

    const hash = crypto.randomBytes(4).toString('hex');
    const shortUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${hash}`;

    await Url.create({ longUrl, shortUrl, hash });

    return NextResponse.json({ shortUrl });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
