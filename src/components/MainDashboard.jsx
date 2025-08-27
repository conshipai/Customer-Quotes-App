// src/components/MainDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Globe, 
  Package, 
  Truck,
  Plane,
  Ship,
  ArrowRight,
  TrendingUp,
  Clock,
  DollarSign
} from 'lucide-react';

const MainDashboard = () => {
  const navigate = useNavigate();
  const [recentQuotes, setRecentQuotes] = useState([]);
  const [stats, setStats] = useState({
    totalQuotes: 0,
    pendingQuotes: 0,
    avgSavings: 0
  });

  const mainServices = [
    {
      id: 'exports',
      title: 'Export Shipments',
      description: 'International outbound shipping via air and ocean',
      icon: Globe,
      color: 'blue',
      stats: { active: 12, pending: 3 },
      subServices: [
        { name: 'Air Export', icon: Plane, path: '/exports/air/new' },
        { name: 'Ocean Export', icon: Ship, path: '/exports/ocean/new' }
      ],
      path: '/exports'
    },
    {
      id: 'imports',
      title: 'Import Shipments',
      description: 'International inbound shipping with customs clearance',
      icon: Package,
      color: 'purple',
      stats: { active: 8, pending: 2 },
      subServices: [
        { name: 'Air Import', icon: Plane, path: '/imports/air/new' },
        { name: 'Ocean Import', icon: Ship, path: '/imports/ocean/new' }
      ],
      path: '/imports'
    },
    {
      id: 'ground',
      title: 'Ground Transport',
      description: 'Domestic trucking services - LTL, FTL, and expedited',
      icon: Truck,
      color: 'green',
      stats: { active: 24, pending: 5 },
      subServices: [
        { name: 'LTL', description: 'Less Than Truckload', path: '/ground/ltl/new' },
        { name: 'FTL', description: 'Full Truckload', path: '/ground/ftl/new' },
        { name: 'Expedite', description: 'Time-Critical', path: '/ground/expedite/new' }
      ],
      path: '/ground'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Freight Quote Portal
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Create and manage your shipping quotes
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active Quotes</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {stats.totalQuotes}
              </p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pending Review</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {stats.pendingQuotes}
              </p>
            </div>
            <Clock className="h-8 w-8 text-yellow-500" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Avg. Savings</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                ${stats.avgSavings}
              </p>
            </div>
            <DollarSign className="h-8 w-8 text-blue-500" />
          </div>
        </div>
      </div>

      {/* Main Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {mainServices.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all cursor-pointer"
              onClick={() => navigate(service.path)}
            >
              <div className="p-6">
                <div className={`inline-flex p-3 rounded-lg bg-${service.color}-100 dark:bg-${service.color}-900/30 mb-4`}>
                  <Icon className={`h-8 w-8 text-${service.color}-600 dark:text-${service.color}-400`} />
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {service.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-gray-500 dark:text-gray-400">
                    {service.stats.active} active
                  </span>
                  <span className="text-yellow-600 dark:text-yellow-400">
                    {service.stats.pending} pending
                  </span>
                </div>

                {/* Sub-services preview */}
                <div className="space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {service.subServices.map((sub) => (
                    <button
                      key={sub.name}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(sub.path);
                      }}
                      className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-center">
                        {sub.icon && <sub.icon className="h-4 w-4 text-gray-400 mr-2" />}
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {sub.name}
                        </span>
                        {sub.description && (
                          <span className="text-xs text-gray-500 dark:text-gray-500 ml-2">
                            ({sub.description})
                          </span>
                        )}
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Recent Quotes
        </h3>
        {recentQuotes.length > 0 ? (
          <div className="space-y-3">
            {recentQuotes.map((quote) => (
              <div
                key={quote.id}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                onClick={() => navigate(`/quotes/${quote.requestId}`)}
              >
                <div className="flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-3 ${
                    quote.status === 'completed' ? 'bg-green-500' :
                    quote.status === 'pending' ? 'bg-yellow-500' : 'bg-gray-400'
                  }`} />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {quote.requestId}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {quote.type} • {quote.origin} → {quote.destination}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    ${quote.bestRate}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {quote.timeAgo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 py-8">
            No recent quotes. Create your first quote to get started.
          </p>
        )}
      </div>
    </div>
  );
};

export default MainDashboard;
