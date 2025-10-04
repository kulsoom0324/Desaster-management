"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const inventory = [
    { name: "Medical Kits", level: 75 },
    { name: "Food Rations", level: 40 },
    { name: "Clean Water", level: 60 },
    { name: "Tents & Shelter", level: 25 },
];

export default function AidInventory() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Aid & Inventory</CardTitle>
                <CardDescription>Live stock levels of critical supplies.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {inventory.map(item => (
                    <div key={item.name} className="space-y-1">
                        <div className="flex justify-between items-center text-sm">
                            <span className="font-medium">{item.name}</span>
                            <span>{item.level}%</span>
                        </div>
                        <Progress value={item.level} />
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
