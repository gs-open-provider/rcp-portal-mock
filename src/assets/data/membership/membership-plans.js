const config = {
  description: 'A_YEARLY_FEE_ALLOWS_YOU_TO_BUY_MORE_THAN_150_MOST_POPULAR _DOMAIN_EXTENSIONS_AT_THE_SAME_PRICE_WE_GET_FROM_REGISTRIES._IN_ADDITION,_YOU_GET _UNLIMITED_SUPPORT_REQUESTS,_FREE_ACCESS_TO_OUR_CONTROL_PANEL,_POPULAR_DOMAIN_REGISTRATION _PLUGINS_SUCH_AS_WHMCS,_AND_OUR_BEST_PRICES_FOR_MORE_THAN_2,300_TLDS,_SSL_CERTIFICATES, _SPAMEXPERT,_PLESK_AND_VIRTUOZZO_LICENSES.',
  plans: [
    {
      title: 'BASIC_PLANS',
      backgroundColor: '#ff4444',
      value: 'FROM_€49/YEAR',
      desc: 'UP_TO_2,000_DOMAINS_AT_COST.COMPETITIVE_SSL_PRICING.COMPETITIVE_PLESK_PRICING.UNLIMITED_SUPPORT_REQUESTS.',
      viewPlan: [
        {
          type: 'SMALL',
          domains: '100',
          ssl_certicates: 'UNLIMITED',
          price: '€49/YEAR*'
        },
        {
          type: 'MEDIUM',
          domains: '500',
          ssl_certicates: 'UNLIMITED',
          price: '€199/YEAR*'
        },
        {
          type: 'LARGE',
          domains: '2000',
          ssl_certicates: 'UNLIMITED',
          price: '€499/YEAR*'
        }
      ]
    },
    {
      title: 'PRO_PLANS',
      backgroundColor: '#ffbb33',
      value: 'FROM_€999/YEAR',
      desc: 'UP_TO_15,000_DOMAINS_AT_COST.VERY_GOOD_SSL_PRICING.CHEAP_PLESK_LICENSES.UNLIMITED_SUPPORT_REQUESTS.',
      viewPlan: [
        {
          type: 'SMALL',
          domains: '5000',
          ssl_certicates: 'UNLIMITED',
          price: '€999/YEAR*'
        },
        {
          type: 'MEDIUM',
          domains: '10000',
          ssl_certicates: 'UNLIMITED',
          price: '€1,999/YEAR*'
        },
        {
          type: 'LARGE',
          domains: '15000',
          ssl_certicates: 'UNLIMITED',
          price: '€2,499/YEAR*'
        }
      ]
    },
    {
      title: 'EXPERT_PLANS',
      backgroundColor: '#00C851',
      value: 'FROM_€4,999/YEAR',
      desc: 'UP_TO_50,000_DOMAINS_AT_COST.EXCELLENT_SSL_PRICING.BEST_PRICE_PLESK_LICENSES.UNLIMITED_SUPPORT_REQUESTS.',
      viewPlan: [
        {
          type: 'MEDIUM',
          domains: '30000',
          ssl_certicates: 'UNLIMITED',
          price: '€4,999/YEAR*'
        },
        {
          type: 'LARGE',
          domains: '50000',
          ssl_certicates: 'UNLIMITED',
          price: '€7,999/YEAR*'
        }
      ]
    },
    {
      title: 'SUPREME_PLANS',
      backgroundColor: '#33b5e5',
      value: 'FROM_€9,999/YEAR',
      desc: 'FROM_125,000_DOMAINS_AT_COST.AMAZING_SSL_PRICING.CRAZY_PLESK_DISCOUNTS.UNLIMITED_SUPPORT_REQUESTS.',
      viewPlan: [
        {
          type: 'SUPREME_S',
          domains: '125000',
          ssl_certicates: '30000',
          price: '€9,999/YEAR*'
        },
        {
          type: 'SUPREME_M',
          domains: '250000',
          ssl_certicates: '60000',
          price: '€19,999/YEAR*'
        },
        {
          type: 'SUPREME_L',
          domains: '500000',
          ssl_certicates: '90000',
          price: '€49/YEAR*'
        }
      ]
    },
    {
      title: 'nTLD_PLANS',
      backgroundColor: '#ff6d00',
      value: 'FROM_€49/YEAR',
      desc: 'UP_TO_3,000_NEW_GTLDS_AT_COST.COMBIES_TO_SUPPLEMENT_BASIC,PRO_AND_EXPERT_PLANS.UNLIMITED_SUPPORT_REQUESTS.',
      viewPlan: [
        {
          type: 'XTRA_S.',
          domains: '100',
          ssl_certicates: '',
          price: '€49/YEAR*'
        },
        {
          type: 'SMALL',
          domains: '250000',
          ssl_certicates: '',
          price: '€499/YEAR*'
        },
        {
          type: 'MEDIUM',
          domains: '500000',
          ssl_certicates: '',
          price: '€999/YEAR*'
        },
        {
          type: 'LARGE',
          domains: '500000',
          ssl_certicates: '',
          price: '€1,999/YEAR*'
        }
      ]
    }
  ]
};

export default config;
