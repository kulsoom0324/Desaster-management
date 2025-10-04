"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

const volunteers = [
  { name: "John Doe", role: "Medical Staff", location: "Sector 5", status: "Active" },
  { name: "Jane Smith", role: "Logistics", location: "North Zone", status: "Active" },
  { name: "Sam Wilson", role: "Search & Rescue", location: "Sector 2", status: "Standby" },
  { name: "Emily Brown", role: "Medical Staff", location: "West Zone", status: "Active" },
  { name: "Chris Green", role: "Communications", location: "Central Hub", status: "Inactive" },
  { name: "Alex Johnson", role: "Search & Rescue", location: "Sector 5", status: "Active" },
];

export default function VolunteersTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Volunteer Management</CardTitle>
        <CardDescription>Monitor and manage deployed volunteer personnel.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead><span className="sr-only">Actions</span></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {volunteers.map((volunteer) => (
              <TableRow key={volunteer.name}>
                <TableCell className="font-medium">{volunteer.name}</TableCell>
                <TableCell>{volunteer.role}</TableCell>
                <TableCell>{volunteer.location}</TableCell>
                <TableCell>
                  <Badge variant={
                    volunteer.status === "Active" ? "default" 
                    : volunteer.status === "Standby" ? "secondary" 
                    : "destructive"
                  } className={volunteer.status === "Active" ? "bg-green-500/20 text-green-700" : ""}>
                    {volunteer.status}
                  </Badge>
                </TableCell>
                 <TableCell>
                    <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                 </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
