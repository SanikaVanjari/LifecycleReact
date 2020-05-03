import React from "react";

class Basic extends React.Component {
  //Mounting Phase: Start
  constructor(props) {
    super(props);
    this.state = { hello: "World!" };
  }

  // These methods are considered legacy and you should avoid them in new code
  // 1. componentWillMount and 2.componentWillReceiveProps
  componentWillMount() {
    console.log("componentWillMount()");
  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }

  componentDidMount() {
    console.log("componentDidMount()");
  }

  //Mounting Phase: End

  // setState is part of render()
  changeState() {
    this.setState({ hello: "Geek!" });
  }

  // Render lifecycle event is part of mounting and update phase, ref diagram
  render() {
    return (
      <div>
        <h1>GeeksForGeeks.org, Hello{this.state.hello}</h1>
        <h2>
          <a onClick={this.changeState.bind(this)}>Press Here!</a>
        </h2>
      </div>
    );
  }

  //Update Phase: Start
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate()");
    return true;
  }
  // These methods are considered legacy and you should avoid them in new code
  // 1.   componentWillUpdate
  componentWillUpdate() {
    console.log("componentWillUpdate()");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }
  //Update Phase: End

  //Unmounting Phase: Start
  componentWillUnmount() {
    console.log("componentWillUnmount()");
  }
  //Unmounting Phase: End
}

export default Basic;
