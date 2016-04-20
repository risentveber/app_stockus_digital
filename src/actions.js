import action_types from './constants/action_types'

export function buyHero() {
  document.dispatch({type: action_types.BUY_HERO})
}

export function buyAbility(ability_type) {
  document.dispatch({type: action_types.BUY_ABILITY, ability_type: ability_type})
}

export function playerHit(){
  document.dispatch({type: action_types.PLAYER_HIT})
}

export function everySecond(){
  document.dispatch({type: action_types.EVERY_SECOND})
}
