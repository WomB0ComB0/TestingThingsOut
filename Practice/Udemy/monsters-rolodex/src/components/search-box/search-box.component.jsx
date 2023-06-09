import * as React from 'react';
import './search-box.styles.css';
class SearchBox extends React.Component {
  render() {
    // const { placeholder, handleChange } = this.props;
    return (
      <input 
          className={`search-box ${this.props.className}`}
          type="search" 
          placeholder={this.props.placeholder} 
          onChange={this.props.onChangeHandler} 
      />
    );
  }
}
export default SearchBox;