// src/config/providers.js
export const providerConfig = {
  ground: {
    ltl: {
      stg: {
        name: 'STG',
        apiUrl: process.env.REACT_APP_STG_API_URL,
        apiKey: process.env.REACT_APP_STG_API_KEY,
        enabled: true,
        features: ['liftgate', 'residential', 'inside-delivery', 'appointment']
      },
      southeastern: {
        name: 'Southeastern Freight Lines',
        apiUrl: process.env.REACT_APP_SEFL_API_URL,
        apiKey: process.env.REACT_APP_SEFL_API_KEY,
        enabled: true,
        features: ['liftgate', 'residential', 'notification', 'guaranteed']
      },
      // Easy to add more LTL providers
      fedex: {
        name: 'FedEx Freight',
        apiUrl: process.env.REACT_APP_FEDEX_API_URL,
        apiKey: process.env.REACT_APP_FEDEX_API_KEY,
        enabled: false,
        isCustomerAccount: true,
        features: ['priority', 'economy', 'direct']
      }
    },
    ftl: {
      // FTL providers
    },
    expedite: {
      // Expedite providers
    }
  },
  exports: {
    air: {
      // Export air carriers
    },
    ocean: {
      // Export ocean carriers
    }
  },
  imports: {
    air: {
      // Import air carriers
    },
    ocean: {
      // Import ocean carriers  
    }
  }
};

// Provider Factory
export const getProviders = (category, subCategory) => {
  const providers = providerConfig[category]?.[subCategory] || {};
  return Object.entries(providers)
    .filter(([key, config]) => config.enabled)
    .map(([key, config]) => ({ key, ...config }));
};
