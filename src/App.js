import React, { Component } from "react";
import ExampleCanvas from "./ExampleCanvas";
import ModeRadioGroup from "./ModeRadioGroup";
import SourceCodeLink from "./SourceCodeLink";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 0,
      shouldShowScreen: false
    };
  }

  handleModeChange(value) {
    this.setState({
      mode: value
    });
  }

  handleModalScreenOpen() {
    this.setState({
      shouldShowScreen: true
    });
  }

  handleModalScreenClose() {
    this.setState({
      shouldShowScreen: false
    });
  }

  render() {
    return (
      <div className="app">
        <ModeRadioGroup
          mode={this.state.mode}
          onModeChange={this.handleModeChange.bind(this)}
        />
        <ExampleCanvas
          mode={this.state.mode}
          shouldShowScreen={this.state.shouldShowScreen}
          onModalScreenOpen={this.handleModalScreenOpen.bind(this)}
          onModalScreenClose={this.handleModalScreenClose.bind(this)}
        />
        <SourceCodeLink />
      </div>
    );
  }
}

export default App;
