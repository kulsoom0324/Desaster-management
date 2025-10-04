"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Siren, Package, Home } from "lucide-react";

const stats = [
    { title: "Active Incidents", value: "3", icon: <Siren className="w-6 h-6 text-destructive" /> },
    { title: "Volunteers Deployed", value: "1,254", icon: <Users className="w-6 h-6 text-primary" /> },
    { title: "Aid Packages Distributed", value: "8,320", icon: <Package className="w-6 h-6 text-green-500" /> },
    { title: "Shelters Active", value: "48", icon: <Home className="w-6 h-6 text-yellow-500" /> },
];

export default function OverviewStats() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map(stat => (
                <Card key={stat.title}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                        {stat.icon}
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stat.value}</div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
