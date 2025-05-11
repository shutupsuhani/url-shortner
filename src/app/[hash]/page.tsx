// app/[hash]/page.tsx

import { redirect, notFound } from "next/navigation";
import { connectToDB } from "@/lib/db";
import Url, { IUrl } from "@/models/Url";

interface RedirectPageProps {
  params: {
    hash: string;
  };
}

export default async function RedirectPage({ params }: RedirectPageProps) {
  await connectToDB();

  const url = await Url.findOne({ hash: params.hash }).lean<IUrl>();
  
  if (!url) {
    notFound(); // 404 error page
  }

  redirect(url.longUrl); // navigate to original URL
}
