
import './globals.css'
import { Outfit } from 'next/font/google'

const inter = Outfit({ subsets: ['latin'] });
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'shortly - URL Shortner Appication',
  description:
    "Streamline your workflow, collaborate seamlessly, and achieve more with Efficio's intelligent task management platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <html lang="en">
        <body className={inter.className}>
         
          
          {children}
        </body>
      </html>
    
  );
}
