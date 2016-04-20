import AT from './constants/action_types'
import ability_types from './constants/ability_types'
import actions, {costs, durations} from './constants/ability_types'
/*begin of initializing the store*/
document.store = {
  player: {
    abilities: {},
    hp: 150,
    full_hp: 150,
    money: 20,
    damage: 1,
    heroes: [
      {
        hp: 100,
        full_hp: 100,
        damage: 1
      }
    ]
  },
  mob: {
    hp: 200,
    full_hp: 200,
    damage: 1
  }
}
var s = document.store;

/*end of initializing the store*/
document.addEventListener('storeChange', () => {
  console.info('STORE::AFTER', document.store);
})

var StoreChanegeEvent = new CustomEvent('storeChange');


document.dispatch = function(action){
  console.info('STORE::BEFORE', s);
  console.log('STORE::DISPATCH', action)
  let index_max_hp_hero, max_hp_hero, hero_damage_sum;
  let player_damage_factor = 1, mob_damage_factor = 1;
  if (s.player.abilities[ability_types.DAMAGE_IMPROVE])
    player_damage_factor = 1.1
  if (s.player.abilities[ability_types.BLOCK_DAMAGE])
    mob_damage_factor = 0.8
  //alert()
  switch(action.type) {
    case AT.BUY_HERO:
      s.player.heroes.push({hp: 30, full_hp: 30, damage: 1})
      s.player.money -= 4;
      break;
    case AT.PLAYER_HIT:
      s.mob.hp -= s.player.damage * player_damage_factor;
      break;
    case AT.EVERY_SECOND:
      // Hit hero with the biggest hp
      index_max_hp_hero = 0
      for(let i in s.player.heroes)
        if (s.player.heroes[i]  > s.player.heroes[index_max_hp_hero])
          index_max_hp_hero = i;

      max_hp_hero = s.player.heroes[index_max_hp_hero]
      if (max_hp_hero){ //hero with max hp index exists
        max_hp_hero.hp -= s.mob.damage * mob_damage_factor;
        if (max_hp_hero.hp <= 0)
          s.player.heroes.splice(index_max_hp_hero, 1) //remove killed hero
      }else{
        s.player.hp -= s.mob.damage * mob_damage_factor;
      }
      // heroes damage Mob
      hero_damage_sum = 0;
      for(let i in s.player.heroes)
        hero_damage_sum += s.player.heroes[i].damage;
      s.mob.hp -= hero_damage_sum * player_damage_factor;
      if (s.player.abilities[ability_types.HITS])
        s.mob.hp -=  s.player.damage * player_damage_factor;
      break;
    case AT.BUY_ABILITY:
      s.player.abilities[action.ability_type] = durations[action.ability_type]
      s.player.money -= costs[action.ability_type]
      break;
  }
  if(s.mob.hp <= 0)
    alert('Вы выиграли')
  if(s.player.hp <= 0)
    alert('Вы проиграли')

  if (s.mob.hp <= 0 || s.player.hp <= 0)
    window.location.reload()
  //decrement current ability durations
  if (s.player.abilities[ability_types.HITS]) --(s.player.abilities[ability_types.HITS])
  if (s.player.abilities[ability_types.DAMAGE_IMPROVE]) --(s.player.abilities[ability_types.DAMAGE_IMPROVE])
  if (s.player.abilities[ability_types.BLOCK_DAMAGE]) --(s.player.abilities[ability_types.BLOCK_DAMAGE])
  document.dispatchEvent(StoreChanegeEvent);
}