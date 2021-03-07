import RectRounded from './RectRounded.js'

export default function Canvas ({ canvasElement, width = window.innerWidth, height = window.innerHeight }) {
  const canvas = document.getElementsByClassName(canvasElement)[0]
  const ctx = canvas.getContext('2d')

  canvas.width = width
  canvas.height = height

  const rectRounded = RectRounded.bind(ctx)

  return {
    native: ctx,
    custom: {
      rectRounded
    }
  }
}
