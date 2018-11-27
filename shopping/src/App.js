import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import Subtotal from "./components/Subtotal/Subtotal";
import PickupSavins from "./components/PickupSavings/PickupSavings";
import TaxesFees from "./components/TaxesFees/TaxesFess";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal";
import ItemDetails from "./components/ItemDetails/ItemDetails";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      PickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0
    };
  }
  render() {
    return (
      <div className="container">
        <Grid className="purchase-card">
          <Subtotal price={this.state.total.toFixed(2)} />
          <PickupSavins price={this.state.PickupSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails />
        </Grid>
      </div>
    );
  }
}

export default App;
