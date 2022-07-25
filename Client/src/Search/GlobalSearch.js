import React from "react";
import { Input } from "semantic-ui-react";

export default class DropDownComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }

  handleChange = event => {
    this.setState({ searchInput: event.target.value }, () =>
      this.globalSearch()
    );
  };

  globalSearch = () => {
    let { searchInput } = this.state;
    let filteredData = this.props.data.filter(value => {
      return (
        value.tags.toLowerCase().includes(searchInput.toLowerCase())
        
      );
    });
    this.props.handleSetData(filteredData);
  };

  render() {
    return (
      <>
     
        <Input
          size="large"
          name="searchInput"
          placeholder="Enter Item Name"
          value={this.state.searchInput || ""}
          onChange={this.handleChange}
          style={{marginLeft:"20px",marginRight:"40px",marginTop:"8px"}}
        />
        
      </>
    );
  }
}
