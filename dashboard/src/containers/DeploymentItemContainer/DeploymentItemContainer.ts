import * as _ from "lodash";
import { connect } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

import actions from "../../actions";
import DeploymentItem from "../../components/AppView/DeploymentsTable/DeploymentItem";
import ResourceRef from "../../shared/ResourceRef";
import { IStoreState } from "../../shared/types";

interface IDeploymentItemContainerProps {
  deployRef: ResourceRef;
}

function mapStateToProps({ kube }: IStoreState, props: IDeploymentItemContainerProps) {
  const { deployRef } = props;
  return {
    name: deployRef.name,
    deployment: kube.items[deployRef.getResourceURL()],
  };
}

function mapDispatchToProps(
  dispatch: ThunkDispatch<IStoreState, null, Action>,
  props: IDeploymentItemContainerProps,
) {
  const { deployRef } = props;
  return {
    watchDeployment: () => dispatch(actions.kube.getAndWatchResource(deployRef)),
    closeWatch: () => dispatch(actions.kube.closeWatchResource(deployRef)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeploymentItem);
