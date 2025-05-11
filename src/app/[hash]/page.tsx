import { redirect, notFound } from "next/navigation";
import { connectToDB } from "@/lib/db";
import Url, { IUrl } from "@/models/Url";

interface Props {
  params: { hash: string };
}

export default async function RedirectPage({ params }: Props) {
  await connectToDB();

  const url = await Url.findOne({ hash: params.hash }).lean<IUrl>();
  if (!url) {
    notFound();
  }

  redirect(url.longUrl);
}
