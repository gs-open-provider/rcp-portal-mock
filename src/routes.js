import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import asyncComponent from './components/async.component';
import Classic from './layouts/layout-classic/layout-classic.component';
import Compact from './layouts/layout-compact/layout-compact.component';
import Toolbar from './layouts/layout-toolbar/layout-toolbar.component';
import Boxed from './layouts/layout-boxed/layout-boxed.component';
import Funky from './layouts/layout-funky/layout-funky.component';
import Tabbed from './layouts/layout-tabbed/layout-tabbed.component';
import NoLayout from './layouts/layout-none/layout-none.component';

// DASHBOARD ROUTE
const AsyncAnalyticsDashboard = asyncComponent(() => import('./containers/dashboards/analytics/analytics.component'));

// AUTHENTICATION ROUTES
const AsyncLogin = asyncComponent(() => import('./containers/authentication/login/login.component'));
const AsyncRegister = asyncComponent(() => import('./containers/authentication/register/register.component'));
const AsyncProfile = asyncComponent(() => import('./containers/authentication/profile/profile.component'));
const AsyncLock = asyncComponent(() => import('./containers/authentication/lock/lock.component'));
const AsyncForgot = asyncComponent(() => import('./containers/authentication/forgot-password/forgot-password.component'));

// ERROR ROUTES
const AsyncError404 = asyncComponent(() => import('./containers/errors/404.component'));
const AsyncError500 = asyncComponent(() => import('./containers/errors/500.component'));
const AsyncNotFound = asyncComponent(() => import('./containers/not-found/not-found.component'));


// MEMBERSHIPS ROUTES
const AsyncMemberships = asyncComponent(() => import('./containers/memberships/memberships.component'));

// NEW-GTLDS ROUTES
const AsyncNewGTLDsOverview = asyncComponent(() => import('./containers/new-gtlds/overview/overview.component'));
const AsyncNewGTLDsSortPreregistrations = asyncComponent(() => import('./containers/new-gtlds/sort-preregitrations/sort-preregistrations.component'));
const AsyncNewGTLDsNewPreregistrations = asyncComponent(() => import('./containers/new-gtlds/new-preregistrations/new-preregistrations.component'));
const AsyncNewGTLDsPreregistrationWidget = asyncComponent(() => import('./containers/new-gtlds/preregistration-widget/preregistration-widget.component'));
const AsyncNewGTLDsDomainApplication = asyncComponent(() => import('./containers/new-gtlds/domain-application/domain-application.component'));
const AsyncNewGTLDsTrademarkClearinghouse = asyncComponent(() => import('./containers/new-gtlds/trademark-clearinghouse/trademark-clearinghouse.component'));


const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const ClassicLayout = props => (
  <Classic>{props.children}</Classic>
);

const CompactLayout = props => (
  <Compact>{props.children}</Compact>
);

const ToolbarLayout = props => (
  <Toolbar>{props.children}</Toolbar>
);

const BoxedLayout = props => (
  <Boxed>{props.children}</Boxed>
);

const FunkyLayout = props => (
  <Funky>{props.children}</Funky>
);

const TabbedLayout = props => (
  <Tabbed>{props.children}</Tabbed>
);

// TODO: Consider looping through an object containing all routes
const ApplicationRoutes = ({ childProps, layout }) => {
  let activeLayout;
  switch (layout.currentLayout) {
  case 'classic':
    activeLayout = ClassicLayout;
    break;
  case 'compact':
    activeLayout = CompactLayout;
    break;
  case 'toolbar':
    activeLayout = ToolbarLayout;
    break;
  case 'boxed':
    activeLayout = BoxedLayout;
    break;
  case 'funky':
    activeLayout = FunkyLayout;
    break;
  case 'tabbed':
    activeLayout = TabbedLayout;
    break;
  default:
    activeLayout = ClassicLayout;
  }

  return (
    <Switch>
      {/* Auth Routes */}
      <AppRoute path="/" exact component={AsyncLogin} props={childProps} layout={NoLayout} />
      <AppRoute path="/register" exact component={AsyncRegister} props={childProps} layout={NoLayout} />
      <AppRoute path="/lock" exact component={AsyncLock} props={childProps} layout={NoLayout} />
      <AppRoute path="/forgot-password" exact component={AsyncForgot} props={childProps} layout={NoLayout} />
      <AppRoute path="/profile" exact component={AsyncProfile} props={childProps} layout={activeLayout} />

      {/* Error Routes */}
      <AppRoute path="/errors/404" exact component={AsyncError404} props={childProps} layout={NoLayout} />
      <AppRoute path="/errors/500" exact component={AsyncError500} props={childProps} layout={NoLayout} />

      {/* After Login Routes */}
      <AppRoute path="/dashboard" exact component={AsyncAnalyticsDashboard} props={childProps} layout={activeLayout} />
      <AppRoute path="/memberships" exact component={AsyncMemberships} props={childProps} layout={activeLayout} />

      <AppRoute path="/newgtlds/overview" exact component={AsyncNewGTLDsOverview} props={childProps} layout={activeLayout} />
      <AppRoute path="/newgtlds/preregistrations/sort" exact component={AsyncNewGTLDsSortPreregistrations} props={childProps} layout={activeLayout} />
      <AppRoute path="/newgtlds/preregistrations/new" exact component={AsyncNewGTLDsNewPreregistrations} props={childProps} layout={activeLayout} />
      <AppRoute path="/newgtlds/preregistrations/widget" exact component={AsyncNewGTLDsPreregistrationWidget} props={childProps} layout={activeLayout} />
      <AppRoute path="/newgtlds/domainapplication" exact component={AsyncNewGTLDsDomainApplication} props={childProps} layout={activeLayout} />
      <AppRoute path="/newgtlds/trademark" exact component={AsyncNewGTLDsTrademarkClearinghouse} props={childProps} layout={activeLayout} />

      {/* Any Unhandled Route */}
      <AppRoute component={AsyncNotFound} layout={activeLayout} />
    </Switch>);
};

AppRoute.propTypes = {
  layout: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  component: PropTypes.func.isRequired
};

ClassicLayout.propTypes = {
  children: PropTypes.shape({}).isRequired
};

CompactLayout.propTypes = {
  children: PropTypes.shape({}).isRequired
};

ToolbarLayout.propTypes = {
  children: PropTypes.shape({}).isRequired
};

BoxedLayout.propTypes = {
  children: PropTypes.shape({}).isRequired
};

FunkyLayout.propTypes = {
  children: PropTypes.shape({}).isRequired
};

TabbedLayout.propTypes = {
  children: PropTypes.shape({}).isRequired
};

ApplicationRoutes.propTypes = {
  childProps: PropTypes.shape({}).isRequired,
  layout: PropTypes.shape({
    currentLayout: PropTypes.string
  }).isRequired
};

export default ApplicationRoutes;
