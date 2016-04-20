import React, { Component} from 'react'
import {Col, Row} from 'react-bootstrap/lib'
import Player from './Player'
import Menu from './Menu'
import Mob from './Mob'
import * as actions from '../actions'

export default class App extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = document.store
  }
  componentDidMount(){
    window.setInterval(actions.everySecond, 1000);
    document.addEventListener('storeChange', () => {
      this.setState(document.store)
    })
  }
  render() {
    return (
      <Row>
        <Col md={12}>
          <Player {...this.state.player}/>
        </Col>
        <Col md={12}>
          <Mob {...this.state.mob}/>
        </Col>
        <Col md={12}>
          <Menu
            money={this.state.player.money}
            current_durations={this.state.player.abilities}
            ability_disabled={this.state.active}
          />
        </Col>
      </Row>
    );
  }
}