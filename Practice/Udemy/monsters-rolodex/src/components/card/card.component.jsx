import * as React from 'react';
import './card.styles.css';
class Card extends React.Component {
  render () {
    const {id, name, email} = this.props.monster;
    return (
      <div className='card-container' key={id}><img src={`https://robohash.org/${id}?set=set2&size=200x200`} alt={`Monster: ${name}`} /><h2>{name}</h2><p>{email}</p></div>
    )
  }
}
export default Card;