"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RevenueGrowthAreaChart = ({
  data,
}: {
  data: { month: string; revenue: number }[];
}) => {
  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>Monthly Revenue Growth</CardTitle>
      </CardHeader>
      <CardContent className='h-64'>
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='month' />
            <YAxis />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='revenue'
              stroke='#8884d8'
              fill='#8884d8'
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RevenueGrowthAreaChart;
