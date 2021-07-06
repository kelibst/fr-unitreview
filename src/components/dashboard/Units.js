import React, { Component } from "react";
import Chart from "react-google-charts";
import { connect } from "react-redux";
import { getUnits } from "../../store/actions/fetchAction";
import "./Dashboard.scss";

class Units extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    const { getUnits } = this.props
    let jwtToken = localStorage.getItem('jwt')
    jwtToken = JSON.parse(jwtToken)
    getUnits(jwtToken)
  }
  render() {
    
    return (
      <div className="unit-cont">
        <div className="d-flex">
          <div className="col-md-5 stat-chart">
            <Chart
              height={"400px"}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["x", "dogs", "cats"],
                [0, 0, 0],
                [1, 10, 5],
                [2, 23, 15],
                [3, 17, 9],
                [4, 18, 10],
                [5, 9, 5],
                [6, 11, 3],
                [7, 27, 19],
              ]}
              options={{
                hAxis: {
                  title: "Time",
                },
                vAxis: {
                  title: "Popularity",
                },
                series: {
                  1: { curveType: "function" },
                },
              }}
              rootProps={{ "data-testid": "2" }}
            />
          </div>
          <div className="col-md-7 d-flex">
            <div className="col-md-6 mx-4 stat-chart">
              <Chart
                height={"400px"}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ["Language", "Speakers (in millions)"],
                  ["German", 5.85],
                  ["French", 1.66],
                  ["Italian", 0.316],
                  ["Romansh", 0.0791],
                ]}
                options={{
                  legend: "none",
                  pieSliceText: "label",
                  title: "Swiss Language Use (100 degree rotation)",
                  pieStartAngle: 100,
                }}
                rootProps={{ "data-testid": "4" }}
              />
            </div>
            <div className="col-md-5 stat-chart">
              <Chart
                height={"200px"}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ["Language", "Speakers (in millions)"],
                  ["German", 5.85],
                  ["French", 1.66],
                  ["Italian", 0.316],
                  ["Romansh", 0.0791],
                ]}
                options={{
                  legend: "none",
                  pieSliceText: "label",
                  title: "Swiss Language Use (100 degree rotation)",
                  pieStartAngle: 100,
                }}
                rootProps={{ "data-testid": "4" }}
              />
              <Chart
                height={"200px"}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ["Language", "Speakers (in millions)"],
                  ["German", 5.85],
                  ["French", 1.66],
                  ["Italian", 0.316],
                  ["Romansh", 0.0791],
                ]}
                options={{
                  legend: "none",
                  pieSliceText: "label",
                  title: "Swiss Language Use (100 degree rotation)",
                  pieStartAngle: 100,
                }}
                rootProps={{ "data-testid": "4" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  hospital: state.hospital,
  currentUser: state.userData.currentUser,
  success: state.success,
  error: state.errors.err
});
export default connect (mapStateToProps, {getUnits})(Units);
