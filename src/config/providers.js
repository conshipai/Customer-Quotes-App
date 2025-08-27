// src/config/providers.js
export const providerConfig = {
  ground: {
    ltl: {
      stg: { /* ... */ },
      southeastern: { /* ... */ }
    },
    ftl: {
      // FTL providers
    },
    expedite: {
      // Expedite providers
    },
    project: {
      specialized: {
        name: 'Specialized Carriers',
        capabilities: ['heavy-haul', 'oversized', 'multi-axle'],
        maxWeight: '200000', // lbs
        equipment: ['lowboy', 'rgn', 'multi-axle', 'schnabel']
      },
      landstar: {
        name: 'Landstar Heavy Haul',
        capabilities: ['permits', 'escorts', 'engineering'],
        coverage: 'nationwide'
      }
    }
  },
  exports: {
    air: {
      // Export air carriers
    },
    ocean: {
      // Export ocean carriers  
    },
    project: {
      bbc: {
        name: 'BBC Chartering',
        vesselTypes: ['heavy-lift', 'multipurpose'],
        maxLift: '1400mt'
      },
      cosco: {
        name: 'COSCO Heavy Lift',
        vesselTypes: ['heavy-lift', 'semi-submersible'],
        routes: ['transpacific', 'asia-europe']
      }
    }
  },
  imports: {
    air: {
      // Import air carriers
    },
    ocean: {
      // Import ocean carriers
    },
    project: {
      // Same as export providers plus customs brokers
    }
  },
  project: {
    multimodal: {
      kuehneNagel: {
        name: 'Kuehne + Nagel Project Logistics',
        services: ['turnkey', 'engineering', 'multimodal'],
        global: true
      },
      dhl: {
        name: 'DHL Industrial Projects',
        services: ['charter', 'breakbulk', 'door-to-door'],
        specialties: ['energy', 'mining', 'infrastructure']
      }
    }
  }
};
