import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';


const iconStyle = {
  fontSize: 16
};

export default [{
  title: 'DASHBOARD',
  href: '/dashboard',
  icon: <DashboardIcon style={iconStyle} />
}, {
  title: 'MEMBERSHIP_PLAN',
  icon: <EuroSymbolIcon style={iconStyle} />,
  href: '/memberships'
  // children: [{
  //   title: 'BASIC',
  //   info: 'UP_TO_2000_DOMAINS',
  //   href: '/memberships/basic'
  // }, {
  //   title: 'PROFESSIONAL',
  //   info: 'UP_TO_15000_DOMAINS',
  //   href: '/memberships/professional'
  // }, {
  //   title: 'EXPERT',
  //   info: 'UP_TO_50000_DOMAINS',
  //   href: '/memberships/expert'
  // }, {
  //   title: 'SUPREME_PLAN',
  //   info: 'ALL_PRODUCTS_AT_COST_PRICE',
  //   href: '/memberships/supreme'
  // }, {
  //   title: 'NEW_GTLDS_PACKAGES',
  //   info: 'ALL_NEW_GTLDS_AT_COST_PRICE',
  //   href: '/memberships/gtlds'
  // }, {
  //   title: 'OUR_COST_PRICES',
  //   info: '',
  //   href: '/memberships/costprices'
  // }]
}, {
  title: 'NEW_GTLDS_OVERVIEW',
  icon: <EuroSymbolIcon style={iconStyle} />,
  children: [{
    title: 'NEW_GTLDS_OVERVIEW',
    info: '',
    href: '/newgtlds/overview'
  }, {
    title: 'SORT_YOUR_PREREGISTRATIONS',
    info: '',
    href: '/newgtlds/preregistrations/sort'
  }, {
    title: 'NEW_PRE_REGISTRATIONS',
    info: '',
    href: '/newgtlds/preregistrations/new'
  }, {
    title: 'PREREGISTRATION_WIDGET',
    info: '',
    href: '/newgtlds/preregistrations/widget'
  }, {
    title: 'DOMAIN_APPLICATION',
    info: '',
    href: '/newgtlds/domainapplication'
  }, {
    title: 'TRADEMARK_CLEARINGHOUSE',
    info: '',
    href: '/newgtlds/trademark'
  }]
}, {
  title: 'DOMAIN_MANAGEMENT',
  href: '/domain',
  icon: <EuroSymbolIcon style={iconStyle} />
}, {
  title: 'DNS_MANAGEMENT',
  href: '/dns',
  icon: <EuroSymbolIcon style={iconStyle} />
}, {
  title: 'SSL_CERTIFICATES',
  href: '/ssl',
  icon: <EuroSymbolIcon style={iconStyle} />
}, {
  title: 'LICENSE_MANAGEMENT',
  icon: <EuroSymbolIcon style={iconStyle} />,
  children: [{
    title: 'OVERVIEW_ORDERS',
    info: '',
    href: '/license/overview'
  }, {
    title: 'ORDER_NEW_LICENSE',
    info: '',
    href: '/license/new'
  }]
}, {
  title: 'POWER_PANEL',
  href: '/powerpanel',
  icon: <EuroSymbolIcon style={iconStyle} />
}, {
  title: 'SMB_INVOICES',
  href: '/smb',
  icon: <EuroSymbolIcon style={iconStyle} />
}, {
  title: 'SPAM_EXPERTS',
  href: '/spam',
  icon: <EuroSymbolIcon style={iconStyle} />
}, {
  title: 'PRICES',
  href: '/dns',
  icon: <EuroSymbolIcon style={iconStyle} />
}, {
  title: 'CUSTOMER_MANAGEMENT',
  href: '/customer',
  icon: <EuroSymbolIcon style={iconStyle} />
}, {
  title: 'ACCOUNT',
  href: '/account',
  icon: <EuroSymbolIcon style={iconStyle} />
}, {
  title: 'NOTIFICATION_CENTER',
  href: '/notifications',
  icon: <EuroSymbolIcon style={iconStyle} />
}, {
  title: 'KNOWLEDGE_BASE',
  href: '/knowledgebase',
  icon: <EuroSymbolIcon style={iconStyle} />
}
];
