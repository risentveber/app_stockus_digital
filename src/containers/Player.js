import React, { Component, PropTypes } from 'react'
import { Button, ProgressBar, Row, Col} from 'react-bootstrap/lib'
import Hero from './Hero'

export default class Player extends Component {
  static propTypes = {
    damage: PropTypes.number.isRequired,
    hp: PropTypes.number.isRequired,
    full_hp: PropTypes.number.isRequired,
    money: PropTypes.number.isRequired
  };
  constructor(props, context){
    super(props, context)
  }
  render() {
    let {hp, full_hp, money} = this.props;
    let hero_key = 0;
    return (
      <div>
        <h1>Player <small>{money}$</small></h1>
        <ProgressBar bsStyle='success' now={hp/full_hp * 100} label={hp} />
        <Row>
          {this.props.heroes.map((h)=>{
            return(<Hero key={hero_key++} {...h} />);
          })}
        </Row>
      </div>
    );
  }
}