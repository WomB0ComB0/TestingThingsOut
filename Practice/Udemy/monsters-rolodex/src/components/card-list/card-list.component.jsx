import * as React from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = (props) => {
  return (
    <div className='card-list'>
      {props.monsters.map((monster) => { 
        return (
          <Card monster={monster}/>
        )
      }
    )}
    </div>
  );
}

// class CardList extends React.Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//     <div className='card-list'>{monsters.map((monster) => { return (<Card monster={monster}/>)})}</div>
//     );
//   }
// }
export default CardList;