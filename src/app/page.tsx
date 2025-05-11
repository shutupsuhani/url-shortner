'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, Layout, Zap, Shield } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Shortly⚡</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link>
              <Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
              <Link href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</Link>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-16 text-center md:py-24">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Shorten URLs Instantly,<br />
            <span className="text-primary">Track Clicks in Real Time</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Create branded short links, monitor performance, and simplify your sharing experience with Shortly.
          </p>
          <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <Link href={'/shorten'}>
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Use Shortly?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Layout className="h-6 w-6" />,
                title: "Simple Dashboard",
                description: "Easily manage all your shortened URLs in one intuitive interface."
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: "Real-Time Analytics",
                description: "Track clicks, location, and performance of every link you share."
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Secure & Reliable",
                description: "Built with security best practices to protect your data and links."
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100M+", label: "Links Shortened" },
              { number: "75M+", label: "Clicks Tracked" },
              { number: "99.99%", label: "Uptime Guarantee" },
              { number: "24/7", label: "Customer Support" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Shortening Smarter</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join businesses and individuals who trust Shortly to simplify their link sharing.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <Button size="lg">Shorten Your First Link</Button>
            <Button size="lg" variant="outline">View Pricing</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">API</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">API Docs</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Use</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="font-semibold">Shortly</span>
              </div>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Shortly. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
