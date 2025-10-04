import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, Users, Package, Home, Map } from "lucide-react";
import OverviewStats from "@/components/dashboard/overview-stats";
import VolunteersTable from "@/components/dashboard/volunteers-table";
import AidInventory from "@/components/dashboard/aid-inventory";
import ShelterStatus from "@/components/dashboard/shelter-status";
import LiveMap from "@/components/dashboard/live-map";
import DisasterFeed from "@/components/dashboard/disaster-feed";


export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 py-8">
            <h1 className="text-3xl font-bold mb-6">Disaster Response Dashboard</h1>
            
            <OverviewStats />

            <div className="grid lg:grid-cols-3 gap-6 mt-6">
              <div className="lg:col-span-2">
                <VolunteersTable />
              </div>
              <div className="space-y-6">
                <AidInventory />
                <ShelterStatus />
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mt-6">
                <div className="lg:col-span-2">
                   <LiveMap />
                </div>
                <div>
                   <DisasterFeed />
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
