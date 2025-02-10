import { Button } from "@/components/ui/button"
import { Building2, ShieldCheck, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6" />
            <span className="text-xl font-semibold">Municipal Asset Manager</span>
          </div>
          <Button asChild>
            <Link href="/dashboard">Sign In</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-24 space-y-8 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Asset Management & Infrastructure Planning
            <br className="hidden sm:inline" />
            for Modern Municipalities
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Streamline your municipal asset management, ensure compliance, and make data-driven infrastructure decisions.
          </p>
          <div className="mx-auto max-w-max space-x-4">
            <Button size="lg" asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline">
              Request Demo
            </Button>
          </div>
        </section>
        <section className="container py-12 space-y-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Asset Management</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Comprehensive tracking and management of municipal infrastructure and assets.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Compliance Ready</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Built to meet BC Local Government Act and Asset Management BC guidelines.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Data-Driven Insights</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Make informed decisions with powerful analytics and reporting tools.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 Municipal Asset Manager. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Terms of Service</Link>
            <Link href="#" className="hover:underline">Contact</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}