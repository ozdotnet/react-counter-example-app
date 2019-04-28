import React, { Component } from "react";

class Counter extends Component {
  // Binding event handlers to 'this':
  // →
  // By using a constructor like below:
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // →
  // Or by using arrow function:
  // handleIncrement = () => {
  //   console.log("Increment Clicked ", this);
  // };

  // This phase is called after a component is updated. Which means we have new states or new props, so we can compare old against new
  // In this phase, we can decide to make an Ajax call to the server by comparing old props or states against new ones.
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  // Before removing this component from the DOM, React will call this phase. Disposing should happen here to prevent memory leaks.
  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    // props shows all elements passed to this component (value and selected, not key because it's a special element)
    // console.log("props", this.props);
    console.log("Counter - Rendered");

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
