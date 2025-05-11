'use client';

import { useState } from "react";
import { Loader2, ClipboardCheck, Copy } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function ShortenPage() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setCopied(false);

    try {
      const res = await fetch("/api/shorten", {
        method: "POST",
        body: JSON.stringify({ longUrl }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (res.ok) {
        setShortUrl(data.shortUrl);
        toast.success("URL shortened successfully!");
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (err) {
      toast.error("Error shortening the URL.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    toast("Copied to clipboard!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-slate-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-xl border space-y-6"
      >
        <h1 className="text-3xl font-bold text-center text-blue-600">Shorten Your URL</h1>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="Enter your long URL"
            className="border border-gray-300 p-3 rounded-md flex-1 outline-blue-500"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 transition"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Shorten"}
          </button>
        </form>

        {shortUrl && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-md"
          >
            <a href={shortUrl} target="_blank" className="text-blue-700 font-medium hover:underline">
              {shortUrl}
            </a>
            <button onClick={handleCopy} className="text-gray-600 hover:text-black transition">
              {copied ? <ClipboardCheck className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
