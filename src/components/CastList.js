import React from "react";
import SingleCast from "./SingleCast";

class CastList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ListContent">
        {this.props.cast.map(this.createSingleCast)}
      </div>
    );
  }

  createSingleCast = c => {
    return (
      <SingleCast
        id={c.id}
        character={c.character}
        name={c.name}
        key={c.id}
        changeToCastView={this.props.changeToCastView}
      />
    );
  };
}

export default CastList;
