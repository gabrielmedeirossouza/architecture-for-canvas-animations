import store from '../../../store/index.js'

export default function PopuleWave (waves = 20) {
  for (let index = 0; index < waves; index++) {
    const animation = {
      posX: 100 + index * 20,
      posY: 400,
      width: 10,
      height: 20,
      radius: -1,
      color: 'tomato'
    }

    store.mutations.addAnimation(animation)
  }
}
