import { DashStatsCard } from "@/components/DashStatsCard";
import RevenueBarChart from "@/components/stats/RevenueBarChart";
import RevenueGrowthAreaChart from "@/components/stats/RevenueGrowthAreaChart";
import SalesChart from "@/components/stats/SalesChart";
import UserDemographicsPieChart from "@/components/stats/UserDemographicsPieChart";
import { Switch } from "@/components/ui/switch";
import { BellRing, ShoppingCart, TrendingUp, Users } from "lucide-react";

export default function Home() {
  // Sample data
  const sampleData = [
    { name: "January", sales: 4000 },
    { name: "February", sales: 3000 },
    { name: "March", sales: 5000 },
    { name: "April", sales: 4000 },
    { name: "May", sales: 6000 },
    { name: "June", sales: 7000 },
    { name: "July", sales: 5000 },
    { name: "August", sales: 6000 },
    { name: "September", sales: 8000 },
    { name: "October", sales: 7000 },
    { name: "November", sales: 9000 },
    { name: "December", sales: 10000 },
  ];

  const revenueData = [
    { category: "Electronics", revenue: 1200 },
    { category: "Clothing", revenue: 800 },
    { category: "Furniture", revenue: 600 },
    { category: "Toys", revenue: 400 },
  ];

  const demographicsData = [
    { name: "18-24", value: 400 },
    { name: "25-34", value: 300 },
    { name: "35-44", value: 300 },
    { name: "45+", value: 200 },
  ];

  const revenueGrowthData = [
    { month: "Jan", revenue: 400 },
    { month: "Feb", revenue: 600 },
    { month: "Mar", revenue: 700 },
    { month: "Apr", revenue: 800 },
  ];
  return (
    <div className='text-white'>
      <div className='grid grid-cols-1 gap-4 my-3 md:grid-cols-3 lg:grid-cols-4'>
        <DashStatsCard
          icon={ShoppingCart}
          title='Total Sales'
          description='Track your sales performance.'
          color='#4CAF50'
          action={<p className='text-white font-semibold'>+25%</p>}
        />
        <DashStatsCard
          icon={Users}
          title='New Users'
          description='Number of new users.'
          color='#2196F3'
          action={<p className='text-white font-semibold'>120</p>}
        />
        <DashStatsCard
          icon={BellRing}
          title='Push Notifications'
          description='Send notifications to users.'
          color='#FF9800'
          action={<Switch />}
        />
        <DashStatsCard
          icon={TrendingUp}
          title='Revenue Growth'
          description='Increase in revenue.'
          color='#9C27B0'
          action={<p className='text-white font-semibold'>KES 5,300</p>}
        />
      </div>
      <div className='p-4 grid grid-cols-1 space-y-4 lg:space-y-4 lg:gap-4 lg:grid-cols-2'>
        <SalesChart data={sampleData} />
        <RevenueBarChart data={revenueData} />
        <UserDemographicsPieChart data={demographicsData} />
        <RevenueGrowthAreaChart data={revenueGrowthData} />
      </div>
    </div>
  );
}
