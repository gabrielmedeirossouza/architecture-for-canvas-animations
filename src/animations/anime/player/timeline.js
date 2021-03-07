import { StartWave, PopuleWave } from './composition/index.js'

const animes = {
  start () {
    PopuleWave(40)
    StartWave()
  }
}

export default animes
