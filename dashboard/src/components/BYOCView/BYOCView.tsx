import { Location } from "history";
import * as React from "react";
import { Link } from "react-router-dom";

import PageHeader from "../PageHeader";

import "./BYOCView.css";

// Icons
import { Trash } from "react-feather";

interface IBYOCViewProps {
  authenticated: boolean;
  authenticating: boolean;
  authenticationError: string | undefined;
  authenticate: (token: string) => any;
  tryToAuthenticateWithOIDC: () => void;
  location: Location;
}

interface IBYOCViewState {
  token: string;
}

class BYOCView extends React.Component<IBYOCViewProps, IBYOCViewState> {
  public state: IBYOCViewState = {
    token: "",
  };

  public render() {
    return (
      <section className="BYOCView">
        <PageHeader>
          <div className="col-9">
            <div className="row">
              <h1>Test Collection</h1>
            </div>
          </div>
          <div className="col-3 text-r align-center">
            <Link to="/catalog">
              <button className="deploy-button button button-danger">Delete Collection</button>
            </Link>
          </div>
        </PageHeader>
        <main>
          <div className=" padding-v-big">
            <div className="row collapse-2-b-desktop collapse-b-tablet">
              <div className="col-6">
                <p>Id: 1cd162e4-ddaf-4e30-b082-063b3e92f9c2</p>
                <hr />
                <form action="">
                  <h5>Collection name</h5>
                  <input name="name" id="test" value="Test Collection" />
                  <div className="text-r">
                    <input type="submit" value="Save Changes" className="button button-accent" />
                  </div>
                </form>
                <hr />
                <h5>Collection setup</h5>
                <table>
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Bucket name</td>
                      <td>test-1</td>
                    </tr>
                    <tr>
                      <td>No data</td>
                      <td>Will be set to the first found value in GDAL_NO_DATA tiff tag.</td>
                    </tr>
                  </tbody>
                </table>
                <hr />
                <h5>Band LC08_L1TP_189027_20170403_20170414_01_T1_B2</h5>
                <table>
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tile size</td>
                      <td>512</td>
                    </tr>
                    <tr>
                      <td>Resolution levels</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>Units per pixel</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>Bit depth</td>
                      <td>16</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-6">
                <h3>Collection tiles</h3>
                <hr />
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <a>(bucket root)</a>
                        <div className="type-small">No sensing time • FAILED</div>
                        <div className="type-small">
                          Failed to ingested due to following errors. Did not find any file.
                        </div>
                      </td>
                      <td>
                        <a className="button button-danger">
                          <Trash size={16} className="icon margin-r-tiny" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a>test/(BAND).TIF</a>
                        <div className="type-small">No sensing time • FAILED</div>
                      </td>
                      <td>
                        <a className="button button-danger">
                          <Trash size={16} className="icon margin-r-tiny" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </section>
    );
  }
}

export default BYOCView;
