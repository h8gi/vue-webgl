<template>
<div class="">
  Chap 02 01
  <canvas
    :id="canvasID"
    width="800"
    height="600"
    class="border-dotted border-blue-500 border-4"
  />
</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import utils from '../utils'
import vertexShaderString from '../glsl/vertex-shader.glsl?raw'
import fragmentShaderString from '../glsl/fragment-shader.glsl?raw'

function initBuffers(gl: WebGL2RenderingContext) {
  const vertices = [
    -0.5, 0.5, 0,		// 0
    -0.5, -0.5, 0,		// 1
    0.5, -0.5, 0,		// 2
    0.5, 0.5, 0,		// 3
  ]

  const indices = [0, 1, 2, 0, 2, 3]

  // VBO
  const squareVertexBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)

  // IBO
  const squareIndexBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, squareIndexBuffer)
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW)

  // clear
  gl.bindBuffer(gl.ARRAY_BUFFER, null)
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null)
}

export default defineComponent({
  name: 'Chap0201',

  setup() {
    const canvasID = 'webgl-canvas'

    onMounted(() => {
      const canvas = utils.getCanvas(canvasID)
      const gl = utils.getGLContext(canvas)

      const vertexShader = utils.getShader(gl, vertexShaderString, gl.VERTEX_SHADER)
      const fragmentShader = utils.getShader(gl, fragmentShaderString, gl.FRAGMENT_SHADER)

      const program = gl.createProgram()

      if (!program) {
        return
      }

      gl.attachShader(program, vertexShader)
      gl.attachShader(program, fragmentShader)
      gl.linkProgram(program)



      initBuffers(gl)
    })

    return {
      canvasID
    }
  }
})

</script>
