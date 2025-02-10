"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Plus, Search, Building2, Building, Loader as Road, Trees as Tree } from "lucide-react"

// Mock data remains the same...
const assets = [
  {
    id: "1",
    name: "City Hall",
    type: "Building",
    location: "2167 Oak Bay Ave",
    status: "Operational",
    condition: "Good",
    lastInspection: "2024-02-15",
    nextMaintenance: "2024-06-15",
  },
  {
    id: "2",
    name: "Oak Bay Recreation Centre",
    type: "Facility",
    location: "1975 Bee Street",
    status: "Operational",
    condition: "Fair",
    lastInspection: "2024-01-20",
    nextMaintenance: "2024-05-20",
  },
  {
    id: "3",
    name: "Windsor Park",
    type: "Park",
    location: "Windsor Road",
    status: "Operational",
    condition: "Excellent",
    lastInspection: "2024-03-01",
    nextMaintenance: "2024-07-01",
  },
  {
    id: "4",
    name: "Beach Drive",
    type: "Road",
    location: "Beach Drive",
    status: "Maintenance Required",
    condition: "Fair",
    lastInspection: "2024-02-28",
    nextMaintenance: "2024-04-15",
  },
]

const assetTypes = [
  { value: "all", label: "All Types", icon: Building2 },
  { value: "building", label: "Buildings", icon: Building },
  { value: "road", label: "Roads", icon: Road },
  { value: "park", label: "Parks", icon: Tree },
]

export default function AssetsPage() {
  const [search, setSearch] = useState("")
  const [selectedType, setSelectedType] = useState("all")

  return (
    <div className="flex-1 space-y-6 p-6 md:p-10">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#6256d5]">Assets</h2>
          <p className="text-muted-foreground mt-1">Manage and monitor municipal assets</p>
        </div>
        <Button className="gradient-primary gap-2">
          <Plus className="h-4 w-4" />
          Add Asset
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="dashboard-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
            <Building2 className="h-4 w-4 text-[#6256d5]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,324</div>
            <p className="text-xs text-muted-foreground">
              Across all categories
            </p>
          </CardContent>
        </Card>
        <Card className="dashboard-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Maintenance Due</CardTitle>
            <Building2 className="h-4 w-4 text-[#00ce4e]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">
              Within next 30 days
            </p>
          </CardContent>
        </Card>
        <Card className="dashboard-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Updates</CardTitle>
            <Building2 className="h-4 w-4 text-[#6256d5]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">
              Require immediate attention
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm">
        <CardHeader className="border-b bg-muted/50">
          <CardTitle>Asset Inventory</CardTitle>
          <CardDescription>
            Manage and monitor all municipal assets across Oak Bay.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search assets..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-8 border-muted bg-background"
                />
              </div>
            </div>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Asset Type" />
              </SelectTrigger>
              <SelectContent>
                {assetTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    <div className="flex items-center gap-2">
                      <type.icon className="h-4 w-4" />
                      {type.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border border-muted bg-background">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">Name</TableHead>
                  <TableHead className="font-semibold">Type</TableHead>
                  <TableHead className="font-semibold">Location</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold">Condition</TableHead>
                  <TableHead className="font-semibold">Last Inspection</TableHead>
                  <TableHead className="font-semibold">Next Maintenance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assets.map((asset) => (
                  <TableRow 
                    key={asset.id} 
                    className="cursor-pointer transition-colors hover:bg-muted/50"
                  >
                    <TableCell className="font-medium">{asset.name}</TableCell>
                    <TableCell>{asset.type}</TableCell>
                    <TableCell>{asset.location}</TableCell>
                    <TableCell>
                      <div className={
                        asset.status === "Operational" 
                          ? "status-badge status-badge-success"
                          : "status-badge status-badge-warning"
                      }>
                        {asset.status}
                      </div>
                    </TableCell>
                    <TableCell>{asset.condition}</TableCell>
                    <TableCell>{asset.lastInspection}</TableCell>
                    <TableCell>{asset.nextMaintenance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}