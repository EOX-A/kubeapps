import * as React from "react";
import { Redirect, Route, RouteComponentProps, RouteProps, Switch } from "react-router";

import NotFound from "../../components/NotFound";
import AppListContainer from "../../containers/AppListContainer";
import AppNewContainer from "../../containers/AppNewContainer";
import AppUpgradeContainer from "../../containers/AppUpgradeContainer";
import AppViewContainer from "../../containers/AppViewContainer";
import ChartViewContainer from "../../containers/ChartViewContainer";
import LandingPageContainer from "../../containers/LandingPageContainer";
import LoginFormContainer from "../../containers/LoginFormContainer";
import MarketplaceContainer from "../../containers/MarketplaceContainer";
import PrivateRouteContainer from "../../containers/PrivateRouteContainer";
import RepoListContainer from "../../containers/RepoListContainer";
import ServiceBrokerListContainer from "../../containers/ServiceBrokerListContainer";
import ServiceClassListContainer from "../../containers/ServiceClassListContainer";
import ServiceClassViewContainer from "../../containers/ServiceClassViewContainer";
import ServiceInstanceListContainer from "../../containers/ServiceInstanceListContainer";
import ServiceInstanceViewContainer from "../../containers/ServiceInstanceViewContainer";

type IRouteComponentPropsAndRouteProps = RouteProps & RouteComponentProps<any>;

const privateRoutes: {
  [route: string]: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
} = {
  "/apps/ns/:namespace": AppListContainer,
  "/apps/ns/:namespace/:releaseName": AppViewContainer,
  "/apps/ns/:namespace/new/:repo/:id/versions/:version": AppNewContainer,
  "/apps/ns/:namespace/upgrade/:releaseName": AppUpgradeContainer,
  "/marketplace": MarketplaceContainer,
  "/marketplace/:repo": MarketplaceContainer,
  "/config/brokers": ServiceBrokerListContainer,
  "/config/repos": RepoListContainer,
  "/services/brokers/:brokerName/classes/:className": ServiceClassViewContainer,
  "/services/brokers/:brokerName/instances/ns/:namespace/:instanceName": ServiceInstanceViewContainer,
  "/services/classes": ServiceClassListContainer,
  "/services/instances/ns/:namespace": ServiceInstanceListContainer,
};

// Public routes that don't require authentication
const routes: {
  [route: string]: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
} = {
  "/landingpage": LandingPageContainer,
  "/login": LoginFormContainer,
  "/charts/:repo/:id": ChartViewContainer,
  "/charts/:repo/:id/versions/:version": ChartViewContainer,
};

interface IRoutesProps extends IRouteComponentPropsAndRouteProps {
  namespace: string;
}

class Routes extends React.Component<IRoutesProps> {
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/" render={this.rootNamespacedRedirect} />
        {Object.keys(routes).map(route => (
          <Route key={route} exact={true} path={route} component={routes[route]} />
        ))}
        {Object.keys(privateRoutes).map(route => (
          <PrivateRouteContainer
            key={route}
            exact={true}
            path={route}
            component={privateRoutes[route]}
          />
        ))}
        {/* If the route doesn't match any expected path redirect to a 404 page  */}
        <Route component={NotFound} />
      </Switch>
    );
  }
  private rootNamespacedRedirect = (props: any) => {
    return <Redirect to={"/landingpage"} />;
  };
}

export default Routes;
