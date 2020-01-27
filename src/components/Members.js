import React from "react";
import "./styles/Members.css";
import { useHistory } from "react-router-dom";

class Members extends React.Component {
  handleGoTo = member => {
    let history = useHistory();
    history.push("/");
  };

  render() {
    if (!this.props) return;
    let data = this.props.members[this.props.type];
    return (
      <div className="members">
        <div className="members__container">
          {data.map(member => {
            return (
              <div className="member_card" key={member.id}>
                <div className="member_card--logo"></div>
                <div className="member_card--name">
                  <h3>{member.name}</h3>
                </div>
                <div className="member_card--description">
                  <p>{member.description.slice(0, 100)}...</p>
                </div>
                <div className="member_card--button">
                  <button
                    className="btn btn-info"
                    onClick={() => {
                      this.handleGoTo(member);
                    }}
                  >
                    ver mas...
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Members;
