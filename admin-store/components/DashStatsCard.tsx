import {
  LucideIcon,
} from "lucide-react";
import React from "react";

type DashStatsCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  action?: React.ReactNode;
};

export function DashStatsCard({
  icon: Icon,
  title,
  description,
  color,
  action,
}: DashStatsCardProps) {
  return (
    <div
      className={`flex items-center space-x-4 rounded-md border p-4`}
      style={{ backgroundColor: color }}
    >
      <Icon className='text-white' />
      <div className='flex-1 space-y-1'>
        <p className='text-sm font-medium leading-none text-white'>{title}</p>
        <p className='text-sm text-gray-200'>{description}</p>
      </div>
      {action}
    </div>
  );
}
