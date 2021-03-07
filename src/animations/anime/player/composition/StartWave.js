import lifeTransition from '../../../../../node_modules/animejs/lib/anime.es.js'
import store from '../../../store/index.js'

export default function StartWave () {
  const canvas = store.getters.getCanvas()

  const animations = store.getters.getAnimations()

  const lifeTransitions = lifeTransition({
    targets: animations,
    loop: true,
    easing: 'easeInOutQuad',
    direction: 'alternate',
    duration: 800,
    posY: e => e.posY - 50,
    height: 100,
    update: () => {
      canvas.native.clearRect(0, 0, window.innerWidth, window.innerHeight)
      animations.map(animation => {
        canvas.native.beginPath()
        canvas.native.fillStyle = animation.color
        canvas.custom.rectRounded(
          animation.posX,
          animation.posY,
          animation.width,
          animation.height,
          animation.radius
        )
        canvas.native.fill()
        canvas.native.closePath()
      })
    }
  })

  store.state.lifeTransitions = lifeTransitions
}
