const state = {
  canvas: '',
  lifeTransitions: [],
  animations: []
}

const mutations = {
  setCanvas: payload => state.canvas = payload,
  addAnimation: payload => state.animations.push(payload),
  updateAnimation: (node, data) => state.animations[node] = data
}

const getters = {
  getCanvas: () => state.canvas,
  getAnimations: () => state.animations
}

Object.freeze(mutations)
Object.freeze(getters)

export default {
  state,
  mutations,
  getters
}
