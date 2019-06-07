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
        <div>Hello World!</div>
      </section>
    );
  }
}

export default Profile;
