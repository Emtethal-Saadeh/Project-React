/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable new-cap */
/* eslint-disable @typescript-eslint/ban-types */
import React, { Component } from "react";
import Chart from "react-apexcharts";
import { transactionsAPI } from "../dashboard/transactions-api";
import { Container, Row, Col } from "react-bootstrap";

interface State {
  options: object;
  series: Array<{ name: string; data: number[] }>;
}

class BarComponent extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [] // Initialize with empty categories
        }
      },
      series: [] // Initialize with empty series
    };
  }

  componentDidMount() {
    this.updateChartData();
  }

  updateChartData = () => {
    const api = new transactionsAPI();
    const monthlyTotal = api.getMonthlyTotal();
    console.log(monthlyTotal); // Log the fetched data to the console
  
    const categories = Object.keys(monthlyTotal);
    const seriesData = Object.values(monthlyTotal);
  
    this.setState({
      options: {
        ...this.state.options,
        xaxis: {
          categories
        }
      },
      series: [{ name: "Total Amount", data: seriesData }]
    });
  };
  
  render() {
    return (
      <Container className="d-flex justify-content-center align-items-center">
      <Row>
        <Col>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            width="450"
          />
        </Col>
      </Row>
    </Container>
    );
  }
}

export default BarComponent;
