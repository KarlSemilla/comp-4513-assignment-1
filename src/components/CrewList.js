import React from "react";

class CrewList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ListContent">
        {this.props.crew.sort(this.sortCrew).map((c, index) => {
          return (
            <div key={index}>
              <p>{c.department}</p>
              <p>{c.job}</p>
              <p>{c.name}</p>
            </div>
          );
        })}
      </div>
    );
  }

  sortCrew(a, b) {
    if (a.department > b.department) return 1;
    else if (a.department < b.department) return -1;
    else return a.name.localeCompare(b.name);
  }
}

export default CrewList;
