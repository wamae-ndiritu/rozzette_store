import {
  Home,
  ChevronUp,
  User2,
  ChevronDown,
  LucideIcon,
  List,
  Plus,
  Settings,
  ShoppingBag,
  PackageSearch,
  Folder,
  FolderPlus,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import Link from "next/link";
import React from "react";

// Define types
type NavItem = {
  id: number;
  title: string;
  url: string;
  icon: LucideIcon;
};

type NavGroup = {
  id: number;
  group: string | null;
  navItems: NavItem[];
};

// Menu items
const navs: NavGroup[] = [
  {
    id: 0,
    group: null,
    navItems: [
      {
        id: 0,
        title: "Dashboard",
        url: "/",
        icon: Home,
      },
    ],
  },
  {
    id: 1,
    group: "Orders",
    navItems: [
      {
        id: 0,
        title: "New Orders",
        url: "/orders/new",
        icon: ShoppingBag,
      },
      {
        id: 1,
        title: "All Orders",
        url: "/orders",
        icon: PackageSearch,
      },
    ],
  },
  {
    id: 2,
    group: "Products",
    navItems: [
      {
        id: 0,
        title: "Product List",
        url: "/products",
        icon: List,
      },
      {
        id: 1,
        title: "Add Product",
        url: "/products/new",
        icon: Plus,
      },
    ],
  },
  {
    id: 3,
    group: "Categories",
    navItems: [
      {
        id: 0,
        title: "Category List",
        url: "/categories",
        icon: Folder,
      },
      {
        id: 1,
        title: "Create Category",
        url: "/categories/new",
        icon: FolderPlus,
      },
    ],
  },
  {
    id: 4,
    group: null,
    navItems: [
      {
        id: 0,
        title: "Settings",
        url: "/settings",
        icon: Settings,
      },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className='font-semibold text-2xl'>Rozzette Store</h1>
      </SidebarHeader>
      <SidebarContent>
        {navs.map((nav) => (
          <React.Fragment key={nav.id}>
            {nav.group ? (
              <Collapsible defaultOpen className='group/collapsible'>
                <SidebarGroup>
                  <SidebarGroupLabel className='text-md' asChild>
                    <CollapsibleTrigger>
                      
                      {nav.group}
                      <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
                    </CollapsibleTrigger>
                  </SidebarGroupLabel>
                  <CollapsibleContent>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        {nav.navItems.map((navItem) => (
                          <SidebarMenuItem key={navItem.id}>
                            <SidebarMenuButton asChild>
                              <Link href={navItem.url}>
                                <navItem.icon />
                                <span>{navItem.title}</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </CollapsibleContent>
                </SidebarGroup>
              </Collapsible>
            ) : (
              nav.navItems.map((navItem) => (
                <SidebarGroup key={navItem.id}>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href={navItem.url}>
                          <navItem.icon />
                          <span className='text-md'>{navItem.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroup>
              ))
            )}
          </React.Fragment>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className='ml-auto' />
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
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
