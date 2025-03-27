import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Image,
  Calendar,
  Settings,
  PlusCircle,
  BarChart2,
  MessageSquare,
  HelpCircle
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { name: 'My Posts', icon: Image, href: '/dashboard/posts' },
  { name: 'Create Post', icon: PlusCircle, href: '/dashboard/create' },
  { name: 'Schedule', icon: Calendar, href: '/dashboard/schedule' },
  { name: 'Analytics', icon: BarChart2, href: '/dashboard/analytics' },
  { name: 'Messages', icon: MessageSquare, href: '/dashboard/messages' },
  { name: 'Settings', icon: Settings, href: '/dashboard/settings' },
  { name: 'Help & Support', icon: HelpCircle, href: '/dashboard/support' },
];

export function DashboardSidebar() {
  return (
    <aside className="fixed left-0 w-64 h-screen pt-16 bg-white border-r border-gray-200">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <nav className="space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-purple-50 text-purple-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}