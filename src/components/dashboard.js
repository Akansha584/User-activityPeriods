import React, { Component } from "react";
import { receive_userData } from "../store/actions/fetch_userData";
import ModalData from "./modal";
import { connect } from "react-redux";
import "./style.css";

class Dashboard extends Component {
  componentDidMount() {
    this.props.receive_userData();
  }
  render() {
    return (
      <div>
        {this.props.userData.map((key) => {
          return (
            <div className="margin">
              <ModalData
                name={key.real_name}
                location={key.tz}
                activityPeriods={key.activity_periods}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  receive_userData: () => dispatch(receive_userData()),
});

const mapStateToProps = (state) => {
  return {
    userData: state.dataReducer.userData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
