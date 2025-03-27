import React from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart2,
  TrendingUp,
  Users,
  Calendar,
  PlusCircle,
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 600 },
  { name: 'Thu', value: 800 },
  { name: 'Fri', value: 500 },
  { name: 'Sat', value: 700 },
  { name: 'Sun', value: 900 },
];

const stats = [
  {
    name: 'Total Posts',
    value: '2,345',
    change: '+12.5%',
    trend: 'up',
    icon: BarChart2,
  },
  {
    name: 'Engagement Rate',
    value: '4.2%',
    change: '+2.3%',
    trend: 'up',
    icon: TrendingUp,
  },
  {
    name: 'Followers',
    value: '12.5K',
    change: '-0.5%',
    trend: 'down',
    icon: Users,
  },
];

const upcomingPosts = [
  {
    id: 1,
    title: 'New Product Launch',
    platform: 'Instagram',
    scheduledFor: '2024-03-20T10:00:00Z',
  },
  {
    id: 2,
    title: 'Weekly Tips & Tricks',
    platform: 'Facebook',
    scheduledFor: '2024-03-21T14:30:00Z',
  },
  {
    id: 3,
    title: 'Customer Success Story',
    platform: 'LinkedIn',
    scheduledFor: '2024-03-22T09:00:00Z',
  },
];

export function DashboardHome() {
  return (
    <div className="space-y-8 pt-16">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-gray-900">
            Welcome back, John! 👋
          </h1>
          <p className="mt-1 text-gray-600">
            Here's what's happening with your social media presence today.
          </p>
        </div>
        <Link
          to="/dashboard/create"
          className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <PlusCircle className="w-5 h-5 mr-2" />
          Create New Post
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white p-6 rounded-xl border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <stat.icon className="h-8 w-8 text-purple-600" />
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${
                  stat.trend === 'up'
                    ? 'text-green-600 bg-green-50'
                    : 'text-red-600 bg-red-50'
                }`}
              >
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 mr-1" />
                )}
                {stat.change}
              </span>
            </div>
            <p className="mt-4 text-2xl font-semibold text-gray-900">
              {stat.value}
            </p>
            <p className="text-sm text-gray-600">{stat.name}</p>
          </div>
        ))}
      </div>

      {/* Engagement Chart */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Engagement Overview
          </h2>
          <select className="text-sm border border-gray-200 rounded-lg px-3 py-2">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
          </select>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#7C3AED"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Upcoming Posts */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Upcoming Posts
          </h2>
          <Link
            to="/dashboard/schedule"
            className="text-purple-600 hover:text-purple-700 text-sm font-medium"
          >
            View all
          </Link>
        </div>
        <div className="space-y-4">
          {upcomingPosts.map((post) => (
            <div
              key={post.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <Clock className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">{post.title}</p>
                  <p className="text-sm text-gray-600">{post.platform}</p>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                {new Date(post.scheduledFor).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}