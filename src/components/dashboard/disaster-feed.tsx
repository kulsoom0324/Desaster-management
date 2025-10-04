import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const events = [
  { time: "2m ago", "desc": "New flood warning issued for Sector 7." },
  { time: "15m ago", "desc": "Medical team dispatched to West Zone." },
  { time: "30m ago", "desc": "Aftershock detected, magnitude 3.2." },
  { time: "1h ago", "desc": "Power outage reported in Sector 4." },
  { time: "2h ago", "desc": "Aid convoy arrived at Central Hub." },
];

export default function DisasterFeed() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Events</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {events.map(event => (
                         <div key={event.time} className="flex gap-3 text-sm">
                            <div className="font-semibold w-20 text-muted-foreground">{event.time}</div>
                            <div className="flex-1">{event.desc}</div>
                         </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
