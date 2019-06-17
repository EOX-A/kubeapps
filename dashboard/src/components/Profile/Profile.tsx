import { Location } from "history";
import * as React from "react";
import "./Profile.css";

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
        <div className="row">
          <div className="col-6">
            <div className="row">
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
                    <span className="profile__info__company type-capitalize">EOX</span>
                  </h4>
                  <p>
                    John Doe is a core contributor to the Helm and Monocular projects & Senior
                    Software Engineer at EOX.
                  </p>
                  <hr className="separator-50 bg-iron margin-l-reset" />
                </div>
              </div>
            </div>
            <div className="row">
              <div>
                <label htmlFor="username">Username</label>
                <input name="username" id="username" placeholder="jdoe" />
                <label htmlFor="first">First Name</label>
                <input name="first" id="first" placeholder="John" />
                <label htmlFor="last">Last Name</label>
                <input name="last" id="last" placeholder="Doe" />
                <label htmlFor="email">E-mail</label>
                <input name="email" id="email" placeholder="jdoe@eox.at" />
                <input type="submit" value="Save Changes" className="button" />
              </div>
            </div>
          </div>
          <div className="col-6">
            <h2>Usage Statistics</h2>
            <p>Hello World!</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
