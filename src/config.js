import React from 'react';

// import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
// import LockIcon from '@material-ui/icons/Lock';
// import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// import PinDropIcon from '@material-ui/icons/PinDrop';
// import EmailIcon from '@material-ui/icons/Email';
// import ExtensionIcon from '@material-ui/icons/Extension';
// import MenuIcon from '@material-ui/icons/Menu';
// import ViewModuleIcon from '@material-ui/icons/ViewModule';
// import InfoIcon from '@material-ui/icons/Info';
// import BuildIcon from '@material-ui/icons/Build';
// import TextFormatIcon from '@material-ui/icons/TextFormat';
// import PaletteIcon from '@material-ui/icons/Palette';
// import PersonIcon from '@material-ui/icons/Person';
// import EventNoteIcon from '@material-ui/icons/EventNote';
// import FaceIcon from '@material-ui/icons/Face';
// import ChatIcon from '@material-ui/icons/Chat';
// import DateRangeIcon from '@material-ui/icons/DateRange';

import themes from './themes';

export const configuredTheme = themes[0].theme;

export const configuredLayout = {
  currentLayout: 'classic',
  notificationsOpen: false
};

const iconStyle = {
  fontSize: 16
};

export const menuItems = [{
  title: 'DASHBOARD',
  href: '/dashboard',
  icon: <DashboardIcon style={iconStyle} />
}, {
  title: 'MEMBERSHIP_PLAN',
  icon: <EuroSymbolIcon style={iconStyle} />,
  children: [{
    title: 'BASIC',
    info: 'UP_TO_2000_DOMAINS',
    href: '/memberships/basic'
    // icon: <DashboardIcon style={iconStyle} />
  }, {
    title: 'PROFESSIONAL',
    info: 'UP_TO_15000_DOMAINS',
    href: '/memberships/professional'
    // icon: <ShoppingCartIcon style={iconStyle} />
  }, {
    title: 'EXPERT',
    info: 'UP_TO_50000_DOMAINS',
    href: '/memberships/expert'
    // icon: <EuroSymbolIcon style={iconStyle} />
  }, {
    title: 'SUPREME_PLAN',
    info: 'ALL_PRODUCTS_AT_COST_PRICE',
    href: '/memberships/supreme'
    // icon: <EventNoteIcon style={iconStyle} />
  }, {
    title: 'NEW_GTLDS_PACKAGES',
    info: 'ALL_NEW_GTLDS_AT_COST_PRICE',
    href: '/memberships/gtlds'
    // icon: <DashboardIcon style={iconStyle} />
  }, {
    title: 'OUR_COST_PRICES',
    info: '',
    href: '/memberships/costprices'
    // icon: <DashboardIcon style={iconStyle} />
  }]
}, {
  title: 'NEW_GTLDS_OVERVIEW',
  icon: <EuroSymbolIcon style={iconStyle} />,
  children: [{
    title: 'NEW_GTLDS_OVERVIEW',
    info: '',
    href: '/newgtlds/overview'
    // icon: <DashboardIcon style={iconStyle} />
  }, {
    title: 'SORT_YOUR_PREREGISTRATIONS',
    info: '',
    href: '/newgtlds/preregistrations/sort'
    // icon: <DashboardIcon style={iconStyle} />
  }, {
    title: 'NEW_PRE_REGISTRATIONS',
    info: '',
    href: '/newgtlds/preregistrations/new'
    // icon: <DashboardIcon style={iconStyle} />
  }, {
    title: 'PREREGISTRATION_WIDGET',
    info: '',
    href: '/newgtlds/preregistrations/widget'
    // icon: <DashboardIcon style={iconStyle} />
  }, {
    title: 'DOMAIN_APPLICATION',
    info: '',
    href: '/newgtlds/domainapplication'
    // icon: <DashboardIcon style={iconStyle} />
  }, {
    title: 'TRADEMARK_CLEARINGHOUSE',
    info: '',
    href: '/newgtlds/trademark'
    // icon: <DashboardIcon style={iconStyle} />
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
    // icon: <DashboardIcon style={iconStyle} />
  }, {
    title: 'ORDER_NEW_LICENSE',
    info: '',
    href: '/license/new'
    // icon: <DashboardIcon style={iconStyle} />
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
// }, {
//   title: 'Theming',
//   href: '/theming',
//   icon: <BuildIcon style={iconStyle} />
// }, {
//   title: 'APPS',
//   type: 'header'
// }, {
//   title: 'Apps',
//   icon: <DesktopWindowsIcon style={iconStyle} />,
//   children: [{
//     title: 'Email',
//     href: '/apps/email',
//     icon: <EmailIcon style={iconStyle} />
//   }, {
//     title: 'Todo',
//     href: '/apps/todo',
//     icon: <CheckCircleIcon style={iconStyle} />
//   }, {
//     title: 'Maps',
//     href: '/apps/maps',
//     icon: <PinDropIcon style={iconStyle} />
//   }, {
//     title: 'Calendar',
//     href: '/apps/calendar',
//     icon: <DateRangeIcon style={iconStyle} />
//   }, {
//     title: 'Notes',
//     href: '/apps/notes',
//     icon: <EventNoteIcon style={iconStyle} />
//   }, {
//     title: 'Contacts',
//     href: '/apps/contacts',
//     icon: <FaceIcon style={iconStyle} />
//   }, {
//     title: 'Chat',
//     href: '/apps/chat',
//     icon: <ChatIcon style={iconStyle} />
//   }]
// }, {
//   title: 'USER INTERFACE',
//   type: 'header'
// }, {
//   title: 'Typography',
//   href: '/pages/typography',
//   icon: <TextFormatIcon style={iconStyle} />
// }, {
//   title: 'Colors',
//   href: '/pages/colors',
//   icon: <PaletteIcon style={iconStyle} />
// }, {
//   title: 'ELEMENTS',
//   type: 'header'
// }, {
//   title: 'Form Controls',
//   icon: <ExtensionIcon style={iconStyle} />,
//   children: [{
//     title: 'Autocomplete',
//     href: '/elements/autocomplete'
//   }, {
//     title: 'Selection Controls',
//     href: '/elements/selection-controls'
//   }, {
//     title: 'Picker',
//     href: '/elements/picker'
//   }, {
//     title: 'Text Fields',
//     href: '/elements/text-fields'
//   }, {
//     title: 'Selects',
//     href: '/elements/selects'
//   }]
// }, {
//   title: 'Navigation',
//   icon: <MenuIcon style={iconStyle} />,
//   children: [{
//     title: 'App Bar',
//     href: '/elements/app-bar'
//   }, {
//     title: 'Menu',
//     href: '/elements/menu'
//   }]
// }, {
//   title: 'Layout',
//   icon: <ViewModuleIcon style={iconStyle} />,
//   children: [{
//     title: 'List',
//     href: '/elements/list'
//   }, {
//     title: 'Cards',
//     href: '/elements/cards'
//   }, {
//     title: 'Paper',
//     href: '/elements/paper'
//   }, {
//     title: 'Avatars',
//     href: '/elements/avatars'
//   }, {
//     title: 'Steppers',
//     href: '/elements/steppers'
//   }]
// }, {
//   title: 'Buttons & Indicators',
//   icon: <InfoIcon style={iconStyle} />,
//   children: [{
//     title: 'Buttons',
//     href: '/elements/buttons'
//   }, {
//     title: 'Progress',
//     href: '/elements/progress'
//   }]
// }, {
//   title: 'PAGES',
//   type: 'header'
// }, {
//   title: 'Authentication',
//   icon: <PersonIcon style={iconStyle} />,
//   children: [{
//     title: 'Login',
//     href: '/login'
//   }, {
//     title: 'Register',
//     href: '/register'
//   }, {
//     title: 'Forgot Password',
//     href: '/forgot-password'
//   }, {
//     title: 'Profile',
//     href: '/profile'
//   }, {
//     title: 'Lock Screen',
//     href: '/lock'
//   }]
// }, {
//   title: 'Errors',
//   icon: <InfoIcon style={iconStyle} />,
//   children: [{
//     title: '404',
//     href: '/errors/404'
//   }, {
//     title: '500',
//     href: '/errors/500'
//   }]
}
];
