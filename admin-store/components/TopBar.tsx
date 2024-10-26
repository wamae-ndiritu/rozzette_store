import { Menubar } from "@/components/ui/menubar";
import React from "react";
import { SidebarMenuButton, SidebarTrigger } from "./ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Bell, ChevronDown, ShoppingCart } from "lucide-react";
import NotificationSheet from "./NotificationSheet";

const TopBar = () => {
  return (
    <div className=''>
      <Menubar className='flex h-auto justify-between py-2 px-4'>
        <div className='flex gap-2 items-center'>
          <SidebarTrigger />
          <h1 className='text-sm font-semibold text-gray-800 uppercase my-auto'>
            Rozzette Admin Dashboard
          </h1>
        </div>
        <div className='flex items-center'>
          <div className='flex'>
            <div className='mx-2 h-8 w-8 flex justify-center items-center bg-slate-200 rounded-full relative'>
              <ShoppingCart size={18} />
              <h4 className='h-5 w-5 flex justify-center items-center text-xs font-semibold bg-red-500 rounded-full text-white absolute top-0 right-0 translate-x-1/2 -translate-y-1/2'>
                0
              </h4>
            </div>
            <NotificationSheet>
              <div className='mx-2 h-8 w-8 flex justify-center items-center bg-slate-200 rounded-full relative'>
                <Bell size={18} />
                <h4 className='h-5 w-5 flex justify-center items-center text-xs font-semibold bg-red-500 rounded-full text-white absolute top-0 right-0 translate-x-1/2 -translate-y-1/2'>
                  0
                </h4>
              </div>
            </NotificationSheet>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton className='h-full'>
                Admin
                <ChevronDown className='ml-auto' />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side='top'
              className='w-[--radix-popper-anchor-width]'
            >
              <DropdownMenuItem>
                <span>Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Avatar className='ml-0.5'>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </Menubar>
    </div>
  );
};

export default TopBar;
