import React, { Component } from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap/lib'
import ability_types, {costs} from '../constants/ability_types'
import * as actions from '../actions'

export default class Menu extends Component {
  constructor(props, context){
    super(props, context)
  }
  render() {
    let money = this.props.money;
    return (
      <div>
        <ButtonToolbar>
          <Button onClick={actions.playerHit} bsStyle='danger'>Ударить</Button>
          <Button
            bsStyle='info'
            disabled={money < 4}
            onClick={actions.buyHero}>Купить героя <b>4$</b></Button>
          <Button
            bsStyle='success'
            disabled={
              this.props.current_durations[ability_types.BLOCK_DAMAGE] ||
              money <  costs[ability_types.BLOCK_DAMAGE]
            }
            onClick={actions.buyAbility.bind(this, ability_types.BLOCK_DAMAGE)}>
            Заблокировать 20% урона <b>{costs[ability_types.BLOCK_DAMAGE]}$</b>
          </Button>
          <Button
            bsStyle='success'
            disabled={
              this.props.current_durations[ability_types.HITS] ||
              money <  costs[ability_types.HITS]
            }
            onClick={actions.buyAbility.bind(this, ability_types.HITS)}>
            10 ударов <b>{costs[ability_types.HITS]}$</b>
          </Button>
          <Button
            bsStyle='success'
            disabled={
              this.props.current_durations[ability_types.DAMAGE_IMPROVE] ||
              money <  costs[ability_types.DAMAGE_IMPROVE]
            }
            onClick={actions.buyAbility.bind(this, ability_types.DAMAGE_IMPROVE)}>
            Увеличить урон на 10% <b>{costs[ability_types.DAMAGE_IMPROVE]}$</b>
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}