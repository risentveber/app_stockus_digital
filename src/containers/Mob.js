import React, { Component } from 'react'
import {Button, ProgressBar, ButtonToolbar} from 'react-bootstrap/lib'
import ability_types from '../constants/ability_types'
import * as actions from '../actions'

export default class Mob extends Component {
  constructor(props, context){
    super(props, context)
  }
  render() {
    let {hp, full_hp} = this.props;
    return (
      <div>
        <h1>Mob</h1>
        <ProgressBar
          bsStyle='danger'
          now={hp/full_hp * 100}
          label={hp} />

      </div>
    );
  }
}