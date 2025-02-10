"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Building2, 
  Map, 
  ClipboardList, 
  Settings, 
  BarChart3,
  AlertCircle,
  Calendar,
  Users
} from "lucide-react"

export function DashboardNav() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/dashboard",
      label: "Overview",
      icon: BarChart3,
    },
    {
      href: "/dashboard/assets",
      label: "Assets",
      icon: Building2,
    },
    {
      href: "/dashboard/map",
      label: "GIS Map",
      icon: Map,
    },
    {
      href: "/dashboard/maintenance",
      label: "Maintenance",
      icon: ClipboardList,
    },
    {
      href: "/dashboard/schedule",
      label: "Schedule",
      icon: Calendar,
    },
    {
      href: "/dashboard/compliance",
      label: "Compliance",
      icon: AlertCircle,
    },
    {
      href: "/dashboard/team",
      label: "Team",
      icon: Users,
    },
    {
      href: "/dashboard/settings",
      label: "Settings",
      icon: Settings,
    },
  ]

  return (
    <ScrollArea className="h-full py-6">
      <div className="flex flex-col gap-2">
        {routes.map((route) => (
          <Button
            key={route.href}
            variant={pathname === route.href ? "secondary" : "ghost"}
            className={cn(
              "justify-start gap-2",
              pathname === route.href && "bg-muted"
            )}
            asChild
          >
            <Link href={route.href}>
              <route.icon className="h-4 w-4" />
              {route.label}
            </Link>
          </Button>
        ))}
      </div>
    </ScrollArea>
  )
}