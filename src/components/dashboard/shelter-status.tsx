"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Home } from "lucide-react";

const shelters = [
    { name: "Community Center", capacity: "150 / 200", status: "Open" },
    { name: "High School Gym", capacity: "280 / 300", status: "Open" },
    { name: "City Hall Annex", capacity: "50 / 50", status: "Full" },
];

export default function ShelterStatus() {
    return (
         <Card>
            <CardHeader>
                <CardTitle>Shelter Status</CardTitle>
                <CardDescription>Occupancy of nearby emergency shelters.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                {shelters.map(shelter => (
                    <div key={shelter.name} className="flex items-center justify-between">
                       <div className="flex items-center gap-3">
                            <Home className="w-5 h-5 text-muted-foreground" />
                            <div>
                                <p className="font-medium">{shelter.name}</p>
                                <p className="text-sm text-muted-foreground">Capacity: {shelter.capacity}</p>
                            </div>
                       </div>
                       <div className={`text-sm font-semibold ${shelter.status === 'Open' ? 'text-green-600' : 'text-red-600'}`}>
                           {shelter.status}
                       </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
