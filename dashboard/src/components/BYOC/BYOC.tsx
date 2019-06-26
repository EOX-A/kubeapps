import { Location } from "history";
import * as React from "react";
import { Link } from "react-router-dom";

import PageHeader from "../PageHeader";

import "./BYOC.css";

// Icons
import { Edit } from "react-feather";

interface IBYOCProps {
  authenticated: boolean;
  authenticating: boolean;
  authenticationError: string | undefined;
  authenticate: (token: string) => any;
  tryToAuthenticateWithOIDC: () => void;
  location: Location;
}

interface IBYOCState {
  token: string;
}

class BYOC extends React.Component<IBYOCProps, IBYOCState> {
  public state: IBYOCState = {
    token: "",
  };

  public render() {
    return (
      <section className="BYOC">
        <PageHeader>
          <div className="col-9">
            <div className="row">
              <h1>Collections</h1>
            </div>
          </div>
          <div className="col-3 text-r align-center">
            <Link to="/byoc/collection/test">
              <button className="deploy-button button button-accent">New Collection</button>
            </Link>
          </div>
        </PageHeader>
        <main>
          <div className=" padding-v-big">
            <div className="row collapse-2-b-desktop collapse-b-tablet">
              <div className="col-3">
                <div className="card card-action shadow-1">
                  <h3 className="card__title">Test Collection</h3>
                  <p className="margin-reset">
                    <b>Bucket: bucket-name</b>
                  </p>
                  <p className="margin-reset">
                    <input
                      name="test"
                      type="text"
                      readOnly={true}
                      value="1cd162e4-ddaf-4e30-b082-063b3e92f9c2"
                    />
                  </p>
                  <p className="card__actions">
                    <a className="button">
                      <Edit size={16} className="icon margin-r-tiny" /> Edit
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    );
  }
}

export default BYOC;
