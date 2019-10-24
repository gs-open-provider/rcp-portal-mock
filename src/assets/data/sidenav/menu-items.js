import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';


const iconStyle = {
  fontSize: 16
};

export const companyLogo = 'https://ml53mkyvknmd.i.optimole.com/w:561/h:300/q:auto/https://www.openprovider.com/wp-content/uploads/2018/10/op-logo.png';

export const menuItems = [{
  title: 'DASHBOARD',
  href: '/dashboard',
  icon: <DashboardIcon style={iconStyle} />
}, {
  title: 'MEMBERSHIP_PLAN',
  icon: <EuroSymbolIcon style={iconStyle} />,
  href: '/memberships',
  children: [{
    title: 'BASIC',
    info: 'UP_TO_2000_DOMAINS',
    href: '/memberships/basic'
  }, {
    title: 'PROFESSIONAL',
    info: 'UP_TO_15000_DOMAINS',
    href: '/memberships/professional'
  }, {
    title: 'EXPERT',
    info: 'UP_TO_50000_DOMAINS',
    href: '/memberships/expert'
  }, {
    title: 'SUPREME_PLAN',
    info: 'ALL_PRODUCTS_AT_COST_PRICE',
    href: '/memberships/supreme'
  }, {
    title: 'NEW_GTLDS_PACKAGES',
    info: 'ALL_NEW_GTLDS_AT_COST_PRICE',
    href: '/memberships/gtlds'
  }, {
    title: 'OUR_COST_PRICES',
    info: '',
    href: '/memberships/costprices'
  }]
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
  href: '/domains',
  icon: <EuroSymbolIcon style={iconStyle} />,
  children: [{
    title: 'DOMAIN_OVERVIEW',
    href: '/domains/overview'
  }, {
    title: 'DOMAIN_REGISTRATION',
    href: '/domains/registration'
  }, {
    title: 'TRANSFER',
    href: '/domains/transfer'
  }, {
    title: 'PORTFOLIO_CONSOLIDATION',
    href: '/domains/portfolio'
  }, {
    title: 'TRADE',
    href: '/domains/trade'
  }, {
    title: 'BULK_OPERATIONS',
    href: '/domains/bulk-operations'
  }, {
    title: 'RQ_NEW_REGISTRATION',
    href: '/domains/rq-registration'
  }, {
    title: 'RQ_TRANSFERS_AND_TRADES',
    href: '/domains/rq-transfers-trades'
  }, {
    title: 'RQ_RENEWALS',
    href: '/domains/rqrenewals'
  }, {
    title: 'RQ_RESTORES',
    href: '/domains/rqoverview'
  }, {
    title: 'CONTACT_VERIFICATION_OVERVIEW',
    href: '/domains/contact-verification'
  }, {
    title: 'IDN_CONVERTION',
    href: '/domains/idn'
  }, {
    title: 'AUTHORIZATION_CODE_MANAGEMENT',
    href: '/domains/authcode'
  }, {
    title: 'NAMESERVERS',
    href: '/domains/nameservers'
  }, {
    title: 'WHOIS',
    href: '/domains/whois'
  }]
}, {
  title: 'DNS_MANAGEMENT',
  href: '/dns',
  icon: <EuroSymbolIcon style={iconStyle} />,
  children: [{
    title: 'DNS_ZONES_OVERVIEW',
    href: '/dns/'
  }, {
    title: 'NEW_DNS_ZONE',
    href: '/dns/'
  }, {
    title: 'MANAGE_DNS_TEMPLATES',
    href: '/dns/'
  }, {
    title: 'DNS_CHECKS',
    href: '/dns/'
  }, {
    title: 'MANAGE_NAMESERVER_GROUPS',
    href: '/dns/'
  }]
}, {
  title: 'SSL_CERTIFICATES',
  href: '/ssl',
  icon: <EuroSymbolIcon style={iconStyle} />,
  children: [{
    title: 'ORDER_SSL_CERTIFICATE',
    href: '/ssl/orders'
  }, {
    title: 'OVERVIEW_ORDERS',
    href: '/ssl/overview'
  }, {
    title: 'SSL_WIZARD',
    href: '/ssl/wizard'
  }, {
    title: 'CSR_DECODER',
    href: '/ssl/csr-decoder'
  }, {
    title: 'CSR_GENERATION_TOOL',
    href: '/ssl/csr-generation'
  }]
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
  icon: <EuroSymbolIcon style={iconStyle} />,
  children: [{
    title: 'FILTERS_OVERVIEW',
    href: '/spam/overview'
  }, {
    title: 'ADD_NEW_FILTER',
    href: '/spam/new'
  }]
}, {
  title: 'PRICES',
  href: '/dns',
  icon: <EuroSymbolIcon style={iconStyle} />
}, {
  title: 'CUSTOMER_MANAGEMENT',
  href: '/customer',
  icon: <EuroSymbolIcon style={iconStyle} />,
  children: [{
    title: 'CUSTOMER_OVERVIEW',
    href: '/customer/overview'
  }, {
    title: 'NEW_CUSTOMER',
    href: '/customer/new'
  }]
}, {
  title: 'ACCOUNT',
  href: '/account',
  icon: <EuroSymbolIcon style={iconStyle} />,
  children: [{
    title: 'ACCOUNT_OVERVIEW',
    href: '/account/overview'
  }, {
    title: 'FINANCIAL',
    href: '/account/financial'
  }, {
    title: 'CONTRACTS',
    href: '/account/contracts'
  }, {
    title: 'SECURITY',
    href: '/account/security'
  }, {
    title: 'SETTINGS',
    href: '/account/settings'
  }]
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

export default menuItems;
