import Enum from 'es6-enum'

const types = Enum('DAMAGE_IMPROVE', 'HITS', 'BLOCK_DAMAGE');

export default types;

export const durations = {
  [types.DAMAGE_IMPROVE]: 30,
  [types.HITS]: 10,
  [types.BLOCK_DAMAGE]: 20
}

export const costs = {
  [types.DAMAGE_IMPROVE]: 3,
  [types.HITS]: 1,
  [types.BLOCK_DAMAGE]: 2
}