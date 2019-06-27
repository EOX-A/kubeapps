import { Location } from "history";
import * as React from "react";
import "./Profile.css";

import PageHeader from "../PageHeader";

// Icons
import { Download } from "react-feather";

interface IProfileProps {
  authenticated: boolean;
  authenticating: boolean;
  authenticationError: string | undefined;
  authenticate: (token: string) => any;
  tryToAuthenticateWithOIDC: () => void;
  location: Location;
}

interface IProfileState {
  token: string;
}

class Profile extends React.Component<IProfileProps, IProfileState> {
  public state: IProfileState = { token: "" };

  public render() {
    return (
      <section className="Profile">
        <PageHeader>
          <div className="col-9">
            <div className="row">
              <h1>Profile</h1>
            </div>
          </div>
        </PageHeader>
        <main>
          <div className="padding-v-big">
            <div className="row collapse-2-b-desktop collapse-b-tablet">
              <div className="col-6">
                <div className="row padding-r-big">
                  <div className="profile-list margin-v-big">
                    <div className="profile-list__avatar">
                      <img
                        className="avatar avatar-circle avatar-enormous padding-normal"
                        src="https://i.pravatar.cc/128"
                        alt="Person name avatar"
                      />
                    </div>
                    <div className="profile-list__info padding-l-big">
                      <h4>
                        John Doe
                        <span className="type-color-iron"> / </span>
                        <span className="profile__info__company type-capitalize">Free Plan</span>
                      </h4>
                      <p>EOX IT Services GmbH</p>
                      <hr className="separator-50 bg-iron margin-l-reset" />
                    </div>
                  </div>
                </div>
                <div className="row padding-r-big">
                  <div style={{ width: "100%" }}>
                    <h5>Account Info</h5>
                    <p>
                      Subscription Plan: <span className="type-bold">Free Plan</span> (9.90€ / month
                      + VAT)
                    </p>
                    <p>OGC requests: 1000, API calls: 10000</p>
                    <div className="text-r">
                      <input type="submit" value="Change plan" className="button button-accent" />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row padding-r-big">
                  <form action="">
                    <h5>Profile Settings</h5>
                    <label htmlFor="username">Username</label>
                    <input name="username" id="username" placeholder="Username" value="jdoe" />
                    <label htmlFor="first">First Name</label>
                    <input name="first" id="first" placeholder="First name" value="John" />
                    <label htmlFor="last">Last Name</label>
                    <input name="last" id="last" placeholder="Last name" value="Doe" />
                    <label htmlFor="email">E-mail</label>
                    <input name="email" id="email" placeholder="E-mail" value="jdoe@eox.at" />
                    <label htmlFor="password">Password</label>
                    <div className="input-group">
                      <input id="password" placeholder="Password" value="•••••••" readOnly={true} />
                      <button className="button">Change</button>
                    </div>
                    <div className="text-r">
                      <input type="submit" value="Save changes" className="button button-accent" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-6">
                <div className="row padding-l-big">
                  <h5>Usage Statistics (01.06.2019 - 30.6.2019)</h5>
                  <table className="striped">
                    <tbody>
                      <tr>
                        <td>
                          <p>OGC requests</p>
                        </td>
                        <td>
                          <p className="text-r type-bold">24/1000</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>API calls</p>
                        </td>
                        <td>
                          <p className="text-r type-bold">128/10000</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <hr />
                <div className="row padding-l-big">
                  <form action="">
                    <h5>Billing Settings</h5>
                    <label htmlFor="company">Company Name</label>
                    <input
                      name="company"
                      id="company"
                      placeholder="Company"
                      value="EOX IT Services GmbH"
                    />
                    <label htmlFor="address">Address</label>
                    <input
                      name="address"
                      id="address"
                      placeholder="Address"
                      value="Thurngasse 8/4, 1090 Wien, Austria"
                    />
                    <label htmlFor="vat">VAT Number</label>
                    <input name="vat" id="vat" placeholder="VAT Number" value="ATU1234567" />
                    <label htmlFor="payment">Payment Method</label>
                    <p className="type-bold">Credit Card </p>
                    <span className="type-small">**** **** **** 1234 (11/22)</span>
                    <div className="text-r">
                      <input type="submit" value="Save changes" className="button button-accent" />
                    </div>
                  </form>
                </div>
                <hr />
                <div className="row padding-l-big">
                  <h5>Invoice History</h5>
                  <table className="striped">
                    <tbody>
                      <tr>
                        <td>
                          <span className="type-bold">Invoice 06/2019</span>
                          <div className="type-small">01.05.2019 - 31.05.2019</div>
                        </td>
                        <td className="text-r">
                          <a className="button button-accent">
                            <Download size={16} className="icon margin-r-tiny" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="type-bold">Invoice 05/2019</span>
                          <div className="type-small">01.04.2019 - 30.04.2019</div>
                        </td>
                        <td className="text-r">
                          <a className="button button-accent">
                            <Download size={16} className="icon margin-r-tiny" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="type-bold">Invoice 04/2019</span>
                          <div className="type-small">01.03.2019 - 31.03.2019</div>
                        </td>
                        <td className="text-r">
                          <a className="button button-accent">
                            <Download size={16} className="icon margin-r-tiny" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    );
  }
}

export default Profile;
