// src/components/project/ProjectDashboard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Globe,
  Package,
  Truck,
  Zap,
  ChevronLeft,
  AlertTriangle,
  Anchor,
  Weight,
  Ruler,
  MapPin,
  Shield,
  FileText
} from 'lucide-react';

const ProjectDashboard = () => {
  const navigate = useNavigate();

  const projectTypes = [
    {
      id: 'export',
      title: 'Project Export',
      description: 'International project cargo export with specialized handling',
      icon: Globe,
      color: 'blue',
      path: '/project/export/new',
      features: [
        'Heavy-lift vessel booking',
        'Export documentation',
        'Port handling & stevedoring',
        'Marine insurance'
      ],
      examples: 'Construction equipment, industrial machinery, power generation'
    },
    {
      id: 'import',
      title: 'Project Import',
      description: 'Complex import operations with customs and delivery',
      icon: Package,
      color: 'purple',
      path: '/project/import/new',
      features: [
        'Customs clearance',
        'Import permits & licenses',
        'Inland transportation',
        'Site delivery coordination'
      ],
      examples: 'Manufacturing lines, wind turbines, mining equipment'
    },
    {
      id: 'domestic',
      title: 'Domestic Project',
      description: 'Oversized and heavy haul transportation within the US',
      icon: Truck,
      color: 'green',
      path: '/project/domestic/new',
      features: [
        'Route surveys & planning',
        'State permits',
        'Escort vehicles',
        'Specialized equipment'
      ],
      examples: 'Transformers, bridge beams, prefab structures'
    },
    {
      id: 'multimodal',
      title: 'Multimodal Project',
      description: 'Complex shipments requiring multiple transport modes',
      icon: Zap,
      color: 'orange',
      path: '/project/multimodal/new',
      features: [
        'Ocean + inland transport',
        'Air charter + trucking',
        'Rail + final mile',
        'Complete door-to-door'
      ],
      examples: 'Oil & gas modules, aerospace components, plant relocations'
    }
  ];

  const capabilities = [
    { icon: Weight, label: 'Up to 2,000 MT', description: 'Single piece weight' },
    { icon: Ruler, label: '150m length', description: 'Maximum dimensions' },
    { icon: Shield, label: 'Full insurance', description: 'Comprehensive coverage' },
    { icon: MapPin, label: 'Global network', description: '120+ countries' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-4"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Main Dashboard
        </button>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
            <Anchor className="h-8 w-8 text-orange-600 dark:text-orange-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Project Cargo Solutions
            </h1>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Specialized handling for oversized, heavy-lift, and complex shipments
            </p>
          </div>
        </div>
      </div>

      {/* Capabilities Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {capabilities.map((cap, index) => {
          const Icon = cap.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-2">
                <Icon className="h-5 w-5 text-orange-600 dark:text-orange-400 mr-2" />
                <span className="font-semibold text-gray-900 dark:text-white">
                  {cap.label}
                </span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {cap.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Important Notice */}
      <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 border border-amber-200 dark:border-amber-800 mb-8">
        <div className="flex items-start">
          <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-1">
              Project Cargo Requirements
            </h3>
            <p className="text-sm text-amber-800 dark:text-amber-200">
              All project cargo quotes require detailed specifications including exact dimensions, 
              weight, center of gravity, lifting points, and cargo drawings. Our specialists will 
              contact you within 2 hours of submission to review requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Project Type Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {projectTypes.map((type) => {
          const Icon = type.icon;
          
          return (
            <div
              key={type.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-${type.color}-100 dark:bg-${type.color}-900/30`}>
                    <Icon className={`h-6 w-6 text-${type.color}-600 dark:text-${type.color}-400`} />
                  </div>
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
                    Specialized
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {type.title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {type.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-2">
                    Services Include:
                  </p>
                  <ul className="space-y-1">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <span className={`inline-block w-1.5 h-1.5 rounded-full bg-${type.color}-500 mt-1.5 mr-2 flex-shrink-0`} />
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Examples */}
                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg mb-4">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-1">
                    Common Cargo:
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {type.examples}
                  </p>
                </div>

                {/* CTA */}
                <button
                  onClick={() => navigate(type.path)}
                  className={`w-full px-4 py-2 bg-${type.color}-600 hover:bg-${type.color}-700 text-white rounded-lg font-medium transition-colors`}
                >
                  Start {type.title} Quote
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Documentation Requirements */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center mb-4">
          <FileText className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Required Documentation
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">
              Technical Documents
            </hح�>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li>• Detailed cargo specifications</li>
              <li>• Weight certificates</li>
              <li>• Engineering drawings</li>
              <li>• Center of gravity calculations</li>
              <li>• Lifting/lashing plans</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">
              Commercial Documents
            </h4>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li>• Commercial invoice</li>
              <li>• Packing list</li>
              <li>• Insurance requirements</li>
              <li>• Special permits (if applicable)</li>
              <li>• Site access requirements</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;
