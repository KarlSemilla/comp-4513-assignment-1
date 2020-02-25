import React from "react";

class SingleCast extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  render() {
    return (
      <div>
        <p>{this.props.character}</p>
        <p>{this.props.name}</p>
        <button onClick={this.clickHandler}>View</button>
      </div>
    );
  }

  clickHandler = () => {
    this.props.changeToCastView(this.props.id);
  };
}

export default SingleCast;
