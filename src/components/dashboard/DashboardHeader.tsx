import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Bell, 
  Search,
  ChevronDown,
  Settings,
  LogOut,
  User as UserIcon
} from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Avatar from '@radix-ui/react-avatar';

export function DashboardHeader() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <Link to="/dashboard" className="flex items-center">
            <Sparkles className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-display font-bold">SocialPost AI</span>
          </Link>

          <div className="hidden md:flex relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-64 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <button className="relative p-2 text-gray-400 hover:text-gray-600">
            <Bell className="h-6 w-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="flex items-center gap-x-2">
                <Avatar.Root className="inline-flex h-8 w-8 select-none items-center justify-center overflow-hidden rounded-full bg-purple-100">
                  <Avatar.Image
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&fit=crop&crop=face"
                    alt="User avatar"
                  />
                  <Avatar.Fallback delayMs={600} className="text-purple-600">
                    JD
                  </Avatar.Fallback>
                </Avatar.Root>
                <span className="hidden md:block text-sm font-medium">John Doe</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="min-w-[220px] bg-white rounded-lg shadow-lg border border-gray-200 py-1"
                sideOffset={5}
                align="end"
              >
                <DropdownMenu.Item className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
                  <UserIcon className="mr-2 h-4 w-4" />
                  Profile Settings
                </DropdownMenu.Item>
                <DropdownMenu.Item className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  Account Settings
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="my-1 border-t border-gray-200" />
                <DropdownMenu.Item className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>
    </header>
  );
}