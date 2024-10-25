import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React, { ReactNode } from "react";
import { Switch } from "./ui/switch";
import { BellRing, Check } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";

interface NotificationSheetProps {
  children: ReactNode;
}

const NotificationSheet: React.FC<NotificationSheetProps> = ({children}) => {

    const notifications = [
      {
        title: "Your call has been confirmed.",
        description: "1 hour ago",
      },
      {
        title: "You have a new message!",
        description: "1 hour ago",
      },
      {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
      },
      {
        title: "New Admin added!",
        description: "2 hours ago",
      },
      {
        title: "20 Products updated!",
        description: "2 hours ago",
      },
    ];
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className='h-full'>
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>You have 3 unread messages.</SheetDescription>
        </SheetHeader>
        <div className='flex items-center space-x-4 rounded-md border p-4 my-3'>
          <BellRing />
          <div className='flex-1 space-y-1'>
            <p className='text-sm font-medium leading-none'>
              Push Notifications
            </p>
            <p className='text-sm text-muted-foreground'>
              Send notifications to device.
            </p>
          </div>
          <Switch />
        </div>
        <ScrollArea className='h-[50vh] w-full rounded-md border p-4'>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className='mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0 border border-gray-100 rounded p-2 cursor-pointer'
            >
              <span className='flex h-2 w-2 translate-y-1 rounded-full bg-sky-500' />
              <div className='space-y-1'>
                <p className='text-sm font-medium leading-none'>
                  {notification.title}
                </p>
                <p className='text-sm text-muted-foreground'>
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </ScrollArea>
        <Button className='w-full mt-4'>
          <Check /> Mark all as read
        </Button>
      </SheetContent>
    </Sheet>
  );
};

export default NotificationSheet;
