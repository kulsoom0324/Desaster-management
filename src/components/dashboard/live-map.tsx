import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function LiveMap() {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Live Disaster Map</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                    <Image 
                        src="https://picsum.photos/seed/livemap/1200/600" 
                        alt="Live map of disaster area" 
                        fill
                        className="object-cover"
                        data-ai-hint="satellite map"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
            </CardContent>
        </Card>
    );
}
