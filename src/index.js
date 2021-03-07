// import lifeTransition from '../node_modules/animejs/lib/anime.es.js'
import store from './animations/store/index.js'
import customCanvas from './plugins/canvas/index.js'
import playerAnimation from './animations/anime/player/timeline.js'

const canvas = customCanvas({
  canvasElement: 'canvas-player',
  width: 1000,
  height: 1000
})

store.mutations.setCanvas(canvas)

playerAnimation.start()
