function getCanvas(id: string): HTMLCanvasElement {
  const canvas = document.getElementById(id)

  if (!canvas) {
    throw `There is no canvas with id ${id} on this page.`
  }

  return canvas as HTMLCanvasElement
}

function getGLContext(canvas: HTMLCanvasElement): WebGL2RenderingContext {
  const context = canvas.getContext('webgl2')
  if (!context) {
    throw `WebGL2 is not available in your browser.`
  }
  return context
}

function getShader(gl: WebGL2RenderingContext, shaderString: string,
  shaderType: WebGL2RenderingContext['VERTEX_SHADER'] | WebGL2RenderingContext['FRAGMENT_SHADER']): WebGLShader {
  const shader = gl.createShader(shaderType)
  if (!shader) {
    throw 'can\'t create shader'
  }
  gl.shaderSource(shader, shaderString)
  gl.compileShader(shader)

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw gl.getShaderInfoLog(shader)
  }

  return shader
}

export default {
  getCanvas,
  getGLContext,
  getShader
}
