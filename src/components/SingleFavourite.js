import React from "react";

class SingleFavourite extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className="delFavourite" onClick={this.clickHandle}>
          x
        </button>
        <img src={"https://image.tmdb.org/t/p/w92" + this.props.poster} />
      </div>
    );
  }

  clickHandle = () => {
    this.props.deleteFavourite(this.props.index);
  };
}

export default SingleFavourite;
