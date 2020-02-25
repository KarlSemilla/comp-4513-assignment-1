import React from "react";
import SingleFavourite from "./SingleFavourite";
import "../css/FavouritesList.css";

class FavouritesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.favourites === null) {
      return <div className="favourites container"></div>;
    }
    return (
      <div className="favourites container">
        {this.props.favourites.map((f, index) => (
          <SingleFavourite
            poster={f}
            key={index}
            index={index}
            deleteFavourite={this.props.deleteFavourite}
          />
        ))}
      </div>
    );
  }
}

export default FavouritesList;
