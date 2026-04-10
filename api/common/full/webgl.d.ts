/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit ArkGraphics2D
 */

/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
type GLenum = number;
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
type GLboolean = boolean;
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
type GLbitfield = number;
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
type GLbyte = number;
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
type GLshort = number;
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
type GLint = number;
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
type GLsizei = number;
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
type GLintptr = number;
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
type GLsizeiptr = number;
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
type GLubyte = number;
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
type GLushort = number;
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
type GLuint = number;
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
type GLfloat = number;
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
type GLclampf = number;
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
type TexImageSource = ImageData;
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
type Float32List = Float32Array | GLfloat[];
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
type Int32List = Int32Array | GLint[];
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
type WebGLPowerPreference = "default" | "low-power" | "high-performance";
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
export interface WebGLContextAttributes {
  /**
   * If true, the drawing buffer has an alpha channel for the purposes of storing
   * both color and alpha values.
   *
   * @syscap SystemCapability.Graphic.Graphic2D.WebGL
   * @famodelonly
   * @since 7 dynamiconly
   */
  alpha?: boolean;
  /**
   * If true, the drawing buffer has a depth buffer of at least 16 bits.
   *
   * @syscap SystemCapability.Graphic.Graphic2D.WebGL
   * @famodelonly
   * @since 7 dynamiconly
   */
  depth?: boolean;
  /**
   * If true, the drawing buffer has a stencil buffer of at least 8 bits.
   *
   * @syscap SystemCapability.Graphic.Graphic2D.WebGL
   * @famodelonly
   * @since 7 dynamiconly
   */
  stencil?: boolean;
  /**
   * If true, request antialiasing.
   *
   * @syscap SystemCapability.Graphic.Graphic2D.WebGL
   * @famodelonly
   * @since 7 dynamiconly
   */
  antialias?: boolean;
  /**
   * If true, the alpha values in the drawing buffer are premultiplied.
   *
   * @syscap SystemCapability.Graphic.Graphic2D.WebGL
   * @famodelonly
   * @since 7 dynamiconly
   */
  premultipliedAlpha?: boolean;
  /**
   * If true, the drawing buffer is preserved after rendering.
   *
   * @syscap SystemCapability.Graphic.Graphic2D.WebGL
   * @famodelonly
   * @since 7 dynamiconly
   */
  preserveDrawingBuffer?: boolean;
  /**
   * Hint for power preference.
   *
   * @syscap SystemCapability.Graphic.Graphic2D.WebGL
   * @famodelonly
   * @since 7 dynamiconly
   */
  powerPreference?: WebGLPowerPreference;
  /**
   * If true, a context creation fails if the implementation determines that
   * the performance would be dramatically low.
   *
   * @syscap SystemCapability.Graphic.Graphic2D.WebGL
   * @famodelonly
   * @since 7 dynamiconly
   */
  failIfMajorPerformanceCaveat?: boolean;
  /**
   * If true, the drawing buffer is not synchronized with the display's refresh.
   *
   * @syscap SystemCapability.Graphic.Graphic2D.WebGL
   * @famodelonly
   * @since 7 dynamiconly
   */
  desynchronized?: boolean;
}
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
interface WebGLBuffer {
}
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
interface WebGLFramebuffer {
}
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
interface WebGLProgram {
}
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
interface WebGLRenderbuffer {
}
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
interface WebGLShader {
}
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
interface WebGLTexture {
}
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
interface WebGLUniformLocation {
}
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
interface WebGLActiveInfo {
    /**
     * Size of the attribute
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly size: GLint;
    /**
     * Type of the attribute
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly type: GLenum;
    /**
     * Name of the attribute
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly name: string;
}
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
interface WebGLShaderPrecisionFormat {
    /**
     * Minimum range
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly rangeMin: GLint;
    /**
     * Maximum range
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly rangeMax: GLint;
    /**
     * Precision
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly precision: GLint;
}

/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
interface WebGLRenderingContextBase {
    /**
     * Depth buffer clear value
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DEPTH_BUFFER_BIT: GLenum;
    /**
     * Stencil buffer clear value
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STENCIL_BUFFER_BIT: GLenum;
    /**
     * Color buffer clear value
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COLOR_BUFFER_BIT: GLenum;
    /**
     * Primitive type: points
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly POINTS: GLenum;
    /**
     * Primitive type: lines
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly LINES: GLenum;
    /**
     * Primitive type: line strip
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly LINE_LOOP: GLenum;
    /**
     * Primitive type: line strip
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly LINE_STRIP: GLenum;
    /**
     * Primitive type: triangles
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TRIANGLES: GLenum;
    /**
     * Primitive type: triangle strip
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TRIANGLE_STRIP: GLenum;
    /**
     * Primitive type: triangle fan
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TRIANGLE_FAN: GLenum;
    /**
     * Zero value
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly ZERO: GLenum;
    /**
     * One value
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly ONE: GLenum;
    /**
     * Source color blend factor
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SRC_COLOR: GLenum;
    /**
     * One minus source color blend factor
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly ONE_MINUS_SRC_COLOR: GLenum;
    /**
     * Source alpha blend factor
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SRC_ALPHA: GLenum;
    /**
     * One minus source alpha blend factor
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly ONE_MINUS_SRC_ALPHA: GLenum;
    /**
     * Destination alpha blend factor
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DST_ALPHA: GLenum;
    /**
     * One minus destination alpha blend factor
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly ONE_MINUS_DST_ALPHA: GLenum;
    /**
     * Destination color blend factor
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DST_COLOR: GLenum;
    /**
     * One minus destination color blend factor
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly ONE_MINUS_DST_COLOR: GLenum;
    /**
     * Source alpha saturate blend factor
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SRC_ALPHA_SATURATE: GLenum;
    /**
     * Blend equation: add
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FUNC_ADD: GLenum;
    /**
     * Blend equation
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly BLEND_EQUATION: GLenum;
    /**
     * Blend equation for RGB
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly BLEND_EQUATION_RGB: GLenum;
    /**
     * Blend equation for alpha
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly BLEND_EQUATION_ALPHA: GLenum;
    /**
     * Blend equation: subtract
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FUNC_SUBTRACT: GLenum;
    /**
     * Blend equation: reverse subtract
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FUNC_REVERSE_SUBTRACT: GLenum;
    /**
     * Destination RGB blend factor
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly BLEND_DST_RGB: GLenum;
    /**
     * Source RGB blend factor
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly BLEND_SRC_RGB: GLenum;
    /**
     * Destination alpha blend factor
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly BLEND_DST_ALPHA: GLenum;
    /**
     * Source alpha blend factor
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly BLEND_SRC_ALPHA: GLenum;
    /**
     * Constant color blend factor
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly CONSTANT_COLOR: GLenum;
    /**
     * One minus constant color blend factor
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly ONE_MINUS_CONSTANT_COLOR: GLenum;
    /**
     * Constant alpha blend factor
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly CONSTANT_ALPHA: GLenum;
    /**
     * One minus constant alpha blend factor
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly ONE_MINUS_CONSTANT_ALPHA: GLenum;
    /**
     * Blend color
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly BLEND_COLOR: GLenum;
    /**
     * Buffer target: array buffer
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly ARRAY_BUFFER: GLenum;
    /**
     * Buffer target: element array buffer
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly ELEMENT_ARRAY_BUFFER: GLenum;
    /**
     * Array buffer binding point
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly ARRAY_BUFFER_BINDING: GLenum;
    /**
     * Element array buffer binding point
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly ELEMENT_ARRAY_BUFFER_BINDING: GLenum;
    /**
     * Buffer usage: stream draw
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STREAM_DRAW: GLenum;
    /**
     * Buffer usage: static draw
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STATIC_DRAW: GLenum;
    /**
     * Buffer usage: dynamic draw
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DYNAMIC_DRAW: GLenum;
    /**
     * Buffer parameter: buffer size
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly BUFFER_SIZE: GLenum;
    /**
     * Buffer parameter: buffer usage
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly BUFFER_USAGE: GLenum;
    /**
     * Current vertex attribute
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly CURRENT_VERTEX_ATTRIB: GLenum;
    /**
     * Face mode: front
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRONT: GLenum;
    /**
     * Face mode: back
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly BACK: GLenum;
    /**
     * Face mode: front and back
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRONT_AND_BACK: GLenum;
    /**
     * Enable cap: cull face
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly CULL_FACE: GLenum;
    /**
     * Enable cap: blend
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly BLEND: GLenum;
    /**
     * Enable cap: dither
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DITHER: GLenum;
    /**
     * Enable cap: stencil test
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STENCIL_TEST: GLenum;
    /**
     * Enable cap: depth test
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DEPTH_TEST: GLenum;
    /**
     * Enable cap: scissor test
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SCISSOR_TEST: GLenum;
    /**
     * Enable cap: polygon offset fill
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly POLYGON_OFFSET_FILL: GLenum;
    /**
     * Enable cap: sample alpha to coverage
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SAMPLE_ALPHA_TO_COVERAGE: GLenum;
    /**
     * Enable cap: sample coverage
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SAMPLE_COVERAGE: GLenum;
    /**
     * Error code: no error
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly NO_ERROR: GLenum;
    /**
     * Error code: invalid enum
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly INVALID_ENUM: GLenum;
    /**
     * Error code: invalid value
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly INVALID_VALUE: GLenum;
    /**
     * Error code: invalid operation
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly INVALID_OPERATION: GLenum;
    /**
     * Error code: out of memory
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly OUT_OF_MEMORY: GLenum;
    /**
     * Front face: clockwise
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly CW: GLenum;
    /**
     * Front face: counter-clockwise
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly CCW: GLenum;
    /**
     * Line width
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly LINE_WIDTH: GLenum;
    /**
     * Aliased point size range
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly ALIASED_POINT_SIZE_RANGE: GLenum;
    /**
     * Aliased line width range
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly ALIASED_LINE_WIDTH_RANGE: GLenum;
    /**
     * Cull face mode
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly CULL_FACE_MODE: GLenum;
    /**
     * Front face mode
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRONT_FACE: GLenum;
    /**
     * Depth range
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DEPTH_RANGE: GLenum;
    /**
     * Depth write mask
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DEPTH_WRITEMASK: GLenum;
    /**
     * Depth clear value
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DEPTH_CLEAR_VALUE: GLenum;
    /**
     * Depth function
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DEPTH_FUNC: GLenum;
    /**
     * Stencil clear value
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STENCIL_CLEAR_VALUE: GLenum;
    /**
     * Stencil function
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STENCIL_FUNC: GLenum;
    /**
     * Stencil fail operation
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STENCIL_FAIL: GLenum;
    /**
     * Stencil pass depth fail operation
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STENCIL_PASS_DEPTH_FAIL: GLenum;
    /**
     * Stencil pass depth pass operation
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STENCIL_PASS_DEPTH_PASS: GLenum;
    /**
     * Stencil reference value
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STENCIL_REF: GLenum;
    /**
     * Stencil value mask
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STENCIL_VALUE_MASK: GLenum;
    /**
     * Stencil write mask
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STENCIL_WRITEMASK: GLenum;
    /**
     * Stencil back function
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STENCIL_BACK_FUNC: GLenum;
    /**
     * Stencil back fail operation
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STENCIL_BACK_FAIL: GLenum;
    /**
     * Stencil back pass depth fail operation
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STENCIL_BACK_PASS_DEPTH_FAIL: GLenum;
    /**
     * Stencil back pass depth pass operation
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STENCIL_BACK_PASS_DEPTH_PASS: GLenum;
    /**
     * Stencil back reference value
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STENCIL_BACK_REF: GLenum;
    /**
     * Stencil back value mask
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STENCIL_BACK_VALUE_MASK: GLenum;
    /**
     * Stencil back write mask
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STENCIL_BACK_WRITEMASK: GLenum;
    /**
     * Viewport
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly VIEWPORT: GLenum;
    /**
     * Scissor box
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SCISSOR_BOX: GLenum;
    /**
     * Color clear value
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COLOR_CLEAR_VALUE: GLenum;
    /**
     * Color write mask
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COLOR_WRITEMASK: GLenum;
    /**
     * Unpack alignment
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNPACK_ALIGNMENT: GLenum;
    /**
     * Pack alignment
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly PACK_ALIGNMENT: GLenum;
    /**
     * Max texture size
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_TEXTURE_SIZE: GLenum;
    /**
     * Max viewport dims
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_VIEWPORT_DIMS: GLenum;
    /**
     * Subpixel bits
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SUBPIXEL_BITS: GLenum;
    /**
     * Red bits
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RED_BITS: GLenum;
    /**
     * Green bits
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly GREEN_BITS: GLenum;
    /**
     * Blue bits
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly BLUE_BITS: GLenum;
    /**
     * Alpha bits
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly ALPHA_BITS: GLenum;
    /**
     * Depth bits
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DEPTH_BITS: GLenum;
    /**
     * Stencil bits
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STENCIL_BITS: GLenum;
    /**
     * Polygon offset units
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly POLYGON_OFFSET_UNITS: GLenum;
    /**
     * Polygon offset factor
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly POLYGON_OFFSET_FACTOR: GLenum;
    /**
     * Texture binding 2D
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_BINDING_2D: GLenum;
    /**
     * Sample buffers
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SAMPLE_BUFFERS: GLenum;
    /**
     * Samples
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SAMPLES: GLenum;
    /**
     * Sample coverage value
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SAMPLE_COVERAGE_VALUE: GLenum;
    /**
     * Sample coverage invert
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SAMPLE_COVERAGE_INVERT: GLenum;
    /**
     * Compressed texture formats
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COMPRESSED_TEXTURE_FORMATS: GLenum;
    /**
     * Hint: don't care
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DONT_CARE: GLenum;
    /**
     * Hint: fastest
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FASTEST: GLenum;
    /**
     * Hint: nicest
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly NICEST: GLenum;
    /**
     * Generate mipmap hint
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly GENERATE_MIPMAP_HINT: GLenum;
    /**
     * Data type: byte
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly BYTE: GLenum;
    /**
     * Data type: unsigned byte
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNSIGNED_BYTE: GLenum;
    /**
     * Data type: short
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SHORT: GLenum;
    /**
     * Data type: unsigned short
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNSIGNED_SHORT: GLenum;
    /**
     * Data type: int
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly INT: GLenum;
    /**
     * Data type: unsigned int
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNSIGNED_INT: GLenum;
    /**
     * Data type: float
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FLOAT: GLenum;
    /**
     * Pixel format: depth component
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DEPTH_COMPONENT: GLenum;
    /**
     * Pixel format: alpha
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly ALPHA: GLenum;
    /**
     * Pixel format: RGB
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGB: GLenum;
    /**
     * Pixel format: RGBA
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGBA: GLenum;
    /**
     * Pixel format: luminance
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly LUMINANCE: GLenum;
    /**
     * Pixel format: luminance alpha
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly LUMINANCE_ALPHA: GLenum;
    /**
     * Unsigned short 5_5_5_1
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNSIGNED_SHORT_4_4_4_4: GLenum;
    /**
     * Unsigned short 5_5_5_1
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNSIGNED_SHORT_5_5_5_1: GLenum;
    /**
     * Unsigned short 5_6_5
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNSIGNED_SHORT_5_6_5: GLenum;
    /**
     * Shader type: fragment shader
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRAGMENT_SHADER: GLenum;
    /**
     * Shader type: vertex shader
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly VERTEX_SHADER: GLenum;
    /**
     * Max vertex attribs
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_VERTEX_ATTRIBS: GLenum;
    /**
     * Max vertex uniform vectors
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_VERTEX_UNIFORM_VECTORS: GLenum;
    /**
     * Max varying vectors
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_VARYING_VECTORS: GLenum;
    /**
     * Max combined texture image units
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: GLenum;
    /**
     * Max Vertex Texture Image Units
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: GLenum;
    /**
     * Max Texture Image Units
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_TEXTURE_IMAGE_UNITS: GLenum;
    /**
     * Max Fragment Uniform Vectors
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_FRAGMENT_UNIFORM_VECTORS: GLenum;
    /**
     * Shader Type
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SHADER_TYPE: GLenum;
    /**
     * Delete Status
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DELETE_STATUS: GLenum;
    /**
     * Link Status
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly LINK_STATUS: GLenum;
    /**
     * Validate Status
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly VALIDATE_STATUS: GLenum;
    /**
     * Attached Shaders
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly ATTACHED_SHADERS: GLenum;
    /**
     * Active Uniforms
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly ACTIVE_UNIFORMS: GLenum;
    /**
     * Active Attributes
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly ACTIVE_ATTRIBUTES: GLenum;
    /**
     * Shading Language Version
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SHADING_LANGUAGE_VERSION: GLenum;
    /**
     * Current Program
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly CURRENT_PROGRAM: GLenum;
    /**
     * Never
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly NEVER: GLenum;
    /**
     * Comparison function: less
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly LESS: GLenum;
    /**
     * Comparison function: equal
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly EQUAL: GLenum;
    /**
     * Comparison function: less or equal
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly LEQUAL: GLenum;
    /**
     * Comparison function: greater
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly GREATER: GLenum;
    /**
     * Comparison function: not equal
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly NOTEQUAL: GLenum;
    /**
     * Comparison function: greater or equal
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly GEQUAL: GLenum;
    /**
     * Comparison function: always
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly ALWAYS: GLenum;
    /**
     * Stencil operation: keep
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly KEEP: GLenum;
    /**
     * Stencil operation: replace
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly REPLACE: GLenum;
    /**
     * Stencil operation: increment
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly INCR: GLenum;
    /**
     * Stencil operation: decrement
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DECR: GLenum;
    /**
     * Stencil operation: invert
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly INVERT: GLenum;
    /**
     * Stencil operation: increment wrap
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly INCR_WRAP: GLenum;
    /**
     * Stencil operation: decrement wrap
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DECR_WRAP: GLenum;
    /**
     * Renderer vendor
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly VENDOR: GLenum;
    /**
     * Renderer name
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RENDERER: GLenum;
    /**
     * WebGL version
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly VERSION: GLenum;
    /**
     * Filter: nearest
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly NEAREST: GLenum;
    /**
     * Filter: linear
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly LINEAR: GLenum;
    /**
     * Mipmap filter: nearest mipmap nearest
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly NEAREST_MIPMAP_NEAREST: GLenum;
    /**
     * Mipmap filter: linear mipmap nearest
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly LINEAR_MIPMAP_NEAREST: GLenum;
    /**
     * Mipmap filter: nearest mipmap linear
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly NEAREST_MIPMAP_LINEAR: GLenum;
    /**
     * Mipmap filter: linear mipmap linear
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly LINEAR_MIPMAP_LINEAR: GLenum;
    /**
     * Texture parameter: mag filter
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_MAG_FILTER: GLenum;
    /**
     * Texture parameter: min filter
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_MIN_FILTER: GLenum;
    /**
     * Texture parameter: wrap s
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_WRAP_S: GLenum;
    /**
     * Texture parameter: wrap t
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_WRAP_T: GLenum;
    /**
     * Texture target: 2D
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_2D: GLenum;
    /**
     * Texture target: texture
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE: GLenum;
    /**
     * Texture target: cube map
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_CUBE_MAP: GLenum;
    /**
     * Texture binding cube map
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_BINDING_CUBE_MAP: GLenum;
    /**
     * Texture cube map positive X
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_CUBE_MAP_POSITIVE_X: GLenum;
    /**
     * Texture cube map negative X
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_CUBE_MAP_NEGATIVE_X: GLenum;
    /**
     * Texture cube map positive Y
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_CUBE_MAP_POSITIVE_Y: GLenum;
    /**
     * Texture cube map negative Y
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: GLenum;
    /**
     * Texture cube map positive Z
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_CUBE_MAP_POSITIVE_Z: GLenum;
    /**
     * Texture cube map negative Z
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: GLenum;
    /**
     * Max cube map texture size
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_CUBE_MAP_TEXTURE_SIZE: GLenum;
    /**
     * Texture unit 0
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE0: GLenum;
    /**
     * Texture unit 1
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE1: GLenum;
    /**
     * Texture unit 2
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE2: GLenum;
    /**
     * Texture unit 3
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE3: GLenum;
    /**
     * Texture unit 4
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE4: GLenum;
    /**
     * Texture unit 5
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE5: GLenum;
    /**
     * Texture unit 6
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE6: GLenum;
    /**
     * Texture unit 7
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE7: GLenum;
    /**
     * Texture unit 8
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE8: GLenum;
    /**
     * Texture unit 9
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE9: GLenum;
    /**
     * Texture unit 10
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE10: GLenum;
    /**
     * Texture unit 11
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE11: GLenum;
    /**
     * Texture unit 12
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE12: GLenum;
    /**
     * Texture unit 13
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE13: GLenum;
    /**
     * Texture unit 14
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE14: GLenum;
    /**
     * Texture unit 15
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE15: GLenum;
    /**
     * Texture unit 16
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE16: GLenum;
    /**
     * Texture unit 17
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE17: GLenum;
    /**
     * Texture unit 18
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE18: GLenum;
    /**
     * Texture unit 19
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE19: GLenum;
    /**
     * Texture unit 20
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE20: GLenum;
    /**
     * Texture unit 21
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE21: GLenum;
    /**
     * Texture unit 22
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE22: GLenum;
    /**
     * Texture unit 23
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE23: GLenum;
    /**
     * Texture unit 24
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE24: GLenum;
    /**
     * Texture unit 25
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE25: GLenum;
    /**
     * Texture unit 26
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE26: GLenum;
    /**
     * Texture unit 27
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE27: GLenum;
    /**
     * Texture unit 28
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE28: GLenum;
    /**
     * Texture unit 29
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE29: GLenum;
    /**
     * Texture unit 30
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE30: GLenum;
    /**
     * Texture unit 31
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE31: GLenum;
    /**
     * Active texture
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly ACTIVE_TEXTURE: GLenum;
    /**
     * Texture wrap: repeat
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly REPEAT: GLenum;
    /**
     * Texture wrap: clamp to edge
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly CLAMP_TO_EDGE: GLenum;
    /**
     * Texture wrap: mirrored repeat
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MIRRORED_REPEAT: GLenum;
    /**
     * Uniform type: float vec2
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FLOAT_VEC2: GLenum;
    /**
     * Uniform type: float vec3
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FLOAT_VEC3: GLenum;
    /**
     * Uniform type: float vec4
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FLOAT_VEC4: GLenum;
    /**
     * Uniform type: int vec2
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly INT_VEC2: GLenum;
    /**
     * Uniform type: int vec3
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly INT_VEC3: GLenum;
    /**
     * Uniform type: int vec4
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly INT_VEC4: GLenum;
    /**
     * Uniform type: bool
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly BOOL: GLenum;
    /**
     * Uniform type: bool vec2
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly BOOL_VEC2: GLenum;
    /**
     * Uniform type: bool vec3
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly BOOL_VEC3: GLenum;
    /**
     * Uniform type: bool vec4
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly BOOL_VEC4: GLenum;
    /**
     * Uniform type: float mat2
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FLOAT_MAT2: GLenum;
    /**
     * Uniform type: float mat3
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FLOAT_MAT3: GLenum;
    /**
     * Uniform type: float mat4
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FLOAT_MAT4: GLenum;
    /**
     * Sampler type: 2D
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SAMPLER_2D: GLenum;
    /**
     * Sampler type: cube
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SAMPLER_CUBE: GLenum;
    /**
     * Vertex attrib array: enabled
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly VERTEX_ATTRIB_ARRAY_ENABLED: GLenum;
    /**
     * Vertex attrib array: size
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly VERTEX_ATTRIB_ARRAY_SIZE: GLenum;
    /**
     * Vertex attrib array: stride
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly VERTEX_ATTRIB_ARRAY_STRIDE: GLenum;
    /**
     * Vertex attrib array: type
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly VERTEX_ATTRIB_ARRAY_TYPE: GLenum;
    /**
     * Vertex attrib array: normalized
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: GLenum;
    /**
     * Vertex attrib array: pointer
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly VERTEX_ATTRIB_ARRAY_POINTER: GLenum;
    /**
     * Vertex attrib array: buffer binding
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: GLenum;
    /**
     * Implementation color read type
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly IMPLEMENTATION_COLOR_READ_TYPE: GLenum;
    /**
     * Implementation color read format
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly IMPLEMENTATION_COLOR_READ_FORMAT: GLenum;
    /**
     * Compile status
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COMPILE_STATUS: GLenum;
    /**
     * Precision: low float
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly LOW_FLOAT: GLenum;
    /**
     * Precision: medium float
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MEDIUM_FLOAT: GLenum;
    /**
     * Precision: high float
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly HIGH_FLOAT: GLenum;
    /**
     * Precision: low int
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly LOW_INT: GLenum;
    /**
     * Precision: medium int
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MEDIUM_INT: GLenum;
    /**
     * Precision: high int
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly HIGH_INT: GLenum;
    /**
     * Framebuffer target
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRAMEBUFFER: GLenum;
    /**
     * Renderbuffer target
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RENDERBUFFER: GLenum;
    /**
     * Renderbuffer internal format: RGBA4
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGBA4: GLenum;
    /**
     * Renderbuffer internal format: RGB5_A1
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGB5_A1: GLenum;
    /**
     * Renderbuffer internal format: RGB565
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGB565: GLenum;
    /**
     * Renderbuffer internal format: depth component16
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DEPTH_COMPONENT16: GLenum;
    /**
     * Renderbuffer internal format: stencil index8
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STENCIL_INDEX8: GLenum;
    /**
     * Renderbuffer internal format: depth stencil
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DEPTH_STENCIL: GLenum;
    /**
     * Renderbuffer parameter: width
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RENDERBUFFER_WIDTH: GLenum;
    /**
     * Renderbuffer parameter: height
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RENDERBUFFER_HEIGHT: GLenum;
    /**
     * Renderbuffer parameter: internal format
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RENDERBUFFER_INTERNAL_FORMAT: GLenum;
    /**
     * Renderbuffer parameter: red size
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RENDERBUFFER_RED_SIZE: GLenum;
    /**
     * Renderbuffer parameter: green size
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RENDERBUFFER_GREEN_SIZE: GLenum;
    /**
     * Renderbuffer parameter: blue size
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RENDERBUFFER_BLUE_SIZE: GLenum;
    /**
     * Renderbuffer parameter: alpha size
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RENDERBUFFER_ALPHA_SIZE: GLenum;
    /**
     * Renderbuffer parameter: depth size
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RENDERBUFFER_DEPTH_SIZE: GLenum;
    /**
     * Renderbuffer parameter: stencil size
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RENDERBUFFER_STENCIL_SIZE: GLenum;
    /**
     * Framebuffer attachment parameter: object type
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: GLenum;
    /**
     * Framebuffer attachment parameter: object name
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: GLenum;
    /**
     * Framebuffer Attachment Texture Level
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: GLenum;
    /**
     * Framebuffer Attachment Texture Cube Map Face
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: GLenum;
    /**
     * Color Attachment0
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COLOR_ATTACHMENT0: GLenum;
    /**
     * Depth Attachment
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DEPTH_ATTACHMENT: GLenum;
    /**
     * Stencil Attachment
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STENCIL_ATTACHMENT: GLenum;
    /**
     * Depth Stencil Attachment
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DEPTH_STENCIL_ATTACHMENT: GLenum;
    /**
     * None
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly NONE: GLenum;
    /**
     * Framebuffer Complete
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRAMEBUFFER_COMPLETE: GLenum;
    /**
     * Framebuffer status: incomplete attachment
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: GLenum;
    /**
     * Framebuffer status: incomplete missing attachment
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: GLenum;
    /**
     * Framebuffer status: incomplete dimensions
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: GLenum;
    /**
     * Framebuffer status: unsupported
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRAMEBUFFER_UNSUPPORTED: GLenum;
    /**
     * Framebuffer binding
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRAMEBUFFER_BINDING: GLenum;
    /**
     * Renderbuffer binding
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RENDERBUFFER_BINDING: GLenum;
    /**
     * Max renderbuffer size
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_RENDERBUFFER_SIZE: GLenum;
    /**
     * Error code: invalid framebuffer operation
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly INVALID_FRAMEBUFFER_OPERATION: GLenum;
    /**
     * Unpack option: flip Y WebGL
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNPACK_FLIP_Y_WEBGL: GLenum;
    /**
     * Unpack option: premultiply alpha WebGL
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: GLenum;
    /**
     * Context lost WebGL
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly CONTEXT_LOST_WEBGL: GLenum;
    /**
     * Unpack option: colorspace conversion WebGL
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: GLenum;
    /**
     * Browser default WebGL
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly BROWSER_DEFAULT_WEBGL: GLenum;
    /**
     * The canvas element
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly canvas: HTMLCanvasElement | OffscreenCanvas;
    /**
     * Drawing buffer width
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly drawingBufferWidth: GLsizei;
    /**
     * Drawing buffer height
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly drawingBufferHeight: GLsizei;
    /**
     * Returns the WebGLContextAttributes for the current context
     *
     * @returns { WebGLContextAttributes | null } The WebGLContextAttributes object
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    getContextAttributes(): WebGLContextAttributes | null;
    /**
     * Returns whether the context is lost
     *
     * @returns { boolean } Whether the context is lost
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    isContextLost(): boolean;
    /**
     * Returns a list of supported extensions
     *
     * @returns { string[] | null } List of supported extensions
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    getSupportedExtensions(): string[] | null;
    /**
     * Enables a WebGL extension
     *
     * @param { string } name - The name of the extension
     * @returns { any } The extension object if available
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    getExtension(name: string): any;
    /**
     * Selects active texture unit
     *
     * @param { GLenum } texture - Texture unit to activate
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    activeTexture(texture: GLenum): void;
    /**
     * Attaches a shader to a program
     *
     * @param { WebGLProgram } program - The program to attach the shader to
     * @param { WebGLShader } shader - The shader to attach
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    attachShader(program: WebGLProgram, shader: WebGLShader): void;
    /**
     * Binds a generic vertex index to a named attribute variable
     *
     * @param { WebGLProgram } program - The program to bind the attribute location
     * @param { GLuint } index - The index of the generic vertex attribute
     * @param { string } name - The name of the attribute variable
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    bindAttribLocation(program: WebGLProgram, index: GLuint, name: string): void;
    /**
     * Binds a buffer to a target
     *
     * @param { GLenum } target - The target to bind the buffer to
     * @param { WebGLBuffer | null } buffer - The buffer to bind
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    bindBuffer(target: GLenum, buffer: WebGLBuffer | null): void;
    /**
     * Binds a framebuffer to a target
     *
     * @param { GLenum } target - The target to bind the framebuffer to
     * @param { WebGLFramebuffer | null } framebuffer - The framebuffer to bind
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    bindFramebuffer(target: GLenum, framebuffer: WebGLFramebuffer | null): void;
    /**
     * Binds a renderbuffer to a target
     *
     * @param { GLenum } target - The target to bind the renderbuffer to
     * @param { WebGLRenderbuffer | null } renderbuffer - The renderbuffer to bind
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    bindRenderbuffer(target: GLenum, renderbuffer: WebGLRenderbuffer | null): void;
    /**
     * Binds a texture to a target
     *
     * @param { GLenum } target - The target to bind the texture to
     * @param { WebGLTexture | null } texture - The texture to bind
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    bindTexture(target: GLenum, texture: WebGLTexture | null): void;
    /**
     * Sets the blend color
     *
     * @param { GLclampf } red - Red component
     * @param { GLclampf } green - Green component
     * @param { GLclampf } blue - Blue component
     * @param { GLclampf } alpha - Alpha component
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    blendColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    /**
     * Sets the blend function
     *
     * @param { GLenum } sfactor - Source blend factor
     * @param { GLenum } dfactor - Destination blend factor
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    blendFunc(sfactor: GLenum, dfactor: GLenum): void;
    /**
     * Sets the blend function for RGB and alpha separately
     *
     * @param { GLenum } srcRGB - Source RGB blend factor
     * @param { GLenum } dstRGB - Destination RGB blend factor
     * @param { GLenum } srcAlpha - Source alpha blend factor
     * @param { GLenum } dstAlpha - Destination alpha blend factor
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    blendFuncSeparate(srcRGB: GLenum, dstRGB: GLenum, srcAlpha: GLenum, dstAlpha: GLenum): void;
    /**
     * Returns the framebuffer status
     *
     * @param { GLenum } target - The target framebuffer
     * @returns { GLenum } The framebuffer status
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    checkFramebufferStatus(target: GLenum): GLenum;
    /**
     * Clears buffers
     *
     * @param { GLbitfield } mask - Which buffers to clear
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    clear(mask: GLbitfield): void;
    /**
     * Sets the clear color
     *
     * @param { GLclampf } red - Red component
     * @param { GLclampf } green - Green component
     * @param { GLclampf } blue - Blue component
     * @param { GLclampf } alpha - Alpha component
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    clearColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    /**
     * Sets the clear depth
     *
     * @param { GLclampf } depth - Depth clear value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    clearDepth(depth: GLclampf): void;
    /**
     * Sets the clear stencil
     *
     * @param { GLint } s - Stencil clear value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    clearStencil(s: GLint): void;
    /**
     * Sets the color mask
     *
     * @param { GLboolean } red - Whether to write red
     * @param { GLboolean } green - Whether to write green
     * @param { GLboolean } blue - Whether to write blue
     * @param { GLboolean } alpha - Whether to write alpha
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    colorMask(red: GLboolean, green: GLboolean, blue: GLboolean, alpha: GLboolean): void;
    /**
     * Compiles a shader
     *
     * @param { WebGLShader } shader - The shader to compile
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    compileShader(shader: WebGLShader): void;
    /**
     * Copies pixels from the framebuffer into a 2D texture image
     *
     * @param { GLenum } target - Texture target
     * @param { GLint } level - Mipmap level
     * @param { GLenum } internalformat - Internal format
     * @param { GLint } x - X coordinate
     * @param { GLint } y - Y coordinate
     * @param { GLsizei } width - Width
     * @param { GLsizei } height - Height
     * @param { GLint } border - Border width
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    copyTexImage2D(
      target: GLenum,
      level: GLint,
      internalformat: GLenum,
      x: GLint,
      y: GLint,
      width: GLsizei,
      height: GLsizei,
      border: GLint,
    ): void;
    /**
     * Copies a portion of a texture image
     *
     * @param { GLenum } target - Texture target
     * @param { GLint } level - Mipmap level
     * @param { GLint } xoffset - X offset
     * @param { GLint } yoffset - Y offset
     * @param { GLint } x - X coordinate
     * @param { GLint } y - Y coordinate
     * @param { GLsizei } width - Width
     * @param { GLsizei } height - Height
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    copyTexSubImage2D(
      target: GLenum,
      level: GLint,
      xoffset: GLint,
      yoffset: GLint,
      x: GLint,
      y: GLint,
      width: GLsizei,
      height: GLsizei,
    ): void;
    /**
     * Creates a buffer
     *
     * @returns { WebGLBuffer | null } The created buffer
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    createBuffer(): WebGLBuffer | null;
    /**
     * Creates a framebuffer
     *
     * @returns { WebGLFramebuffer | null } The created framebuffer
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    createFramebuffer(): WebGLFramebuffer | null;
    /**
     * Creates a program
     *
     * @returns { WebGLProgram | null } The created program
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    createProgram(): WebGLProgram | null;
    /**
     * Creates a renderbuffer
     *
     * @returns { WebGLRenderbuffer | null } The created renderbuffer
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    createRenderbuffer(): WebGLRenderbuffer | null;
    /**
     * Creates a shader
     *
     * @param { GLenum } type - Shader type
     * @returns { WebGLShader | null } The created shader
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    createShader(type: GLenum): WebGLShader | null;
    /**
     * Creates a texture
     *
     * @returns { WebGLTexture | null } The created texture
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    createTexture(): WebGLTexture | null;
    /**
     * Sets the cull face mode
     *
     * @param { GLenum } mode - Cull face mode
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    cullFace(mode: GLenum): void;
    /**
     * Deletes a buffer
     *
     * @param { WebGLBuffer | null } buffer - The buffer to delete
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    deleteBuffer(buffer: WebGLBuffer | null): void;
    /**
     * Deletes a framebuffer
     *
     * @param { WebGLFramebuffer | null } framebuffer - The framebuffer to delete
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    deleteFramebuffer(framebuffer: WebGLFramebuffer | null): void;
    /**
     * Deletes a program
     *
     * @param { WebGLProgram | null } program - The program to delete
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    deleteProgram(program: WebGLProgram | null): void;
    /**
     * Deletes a renderbuffer
     *
     * @param { WebGLRenderbuffer | null } renderbuffer - The renderbuffer to delete
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    deleteRenderbuffer(renderbuffer: WebGLRenderbuffer | null): void;
    /**
     * Deletes a shader
     *
     * @param { WebGLShader | null } shader - The shader to delete
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    deleteShader(shader: WebGLShader | null): void;
    /**
     * Deletes a texture
     *
     * @param { WebGLTexture | null } texture - The texture to delete
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    deleteTexture(texture: WebGLTexture | null): void;
    /**
     * Sets the depth function
     *
     * @param { GLenum } func - Depth function
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    depthFunc(func: GLenum): void;
    /**
     * Sets the depth mask
     *
     * @param { GLboolean } flag - Whether to write to depth buffer
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    depthMask(flag: GLboolean): void;
    /**
     * Sets the depth range
     *
     * @param { GLclampf } zNear - Near depth
     * @param { GLclampf } zFar - Far depth
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    depthRange(zNear: GLclampf, zFar: GLclampf): void;
    /**
     * Detaches a shader from a program
     *
     * @param { WebGLProgram } program - The program
     * @param { WebGLShader } shader - The shader to detach
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    detachShader(program: WebGLProgram, shader: WebGLShader): void;
    /**
     * Disables a capability
     *
     * @param { GLenum } cap - The capability to disable
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    disable(cap: GLenum): void;
    /**
     * Disables a vertex attribute array
     *
     * @param { GLuint } index - The index of the vertex attribute
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    disableVertexAttribArray(index: GLuint): void;
    /**
     * Draws arrays
     *
     * @param { GLenum } mode - Drawing mode
     * @param { GLint } first - Starting index
     * @param { GLsizei } count - Number of indices
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    drawArrays(mode: GLenum, first: GLint, count: GLsizei): void;
    /**
     * Draws elements
     *
     * @param { GLenum } mode - Drawing mode
     * @param { GLsizei } count - Number of indices
     * @param { GLenum } type - Type of indices
     * @param { GLintptr } offset - Offset in the buffer
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    drawElements(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr): void;
    /**
     * Enables a capability
     *
     * @param { GLenum } cap - The capability to enable
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    enable(cap: GLenum): void;
    /**
     * Enables a vertex attribute array
     *
     * @param { GLuint } index - The index of the vertex attribute
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    enableVertexAttribArray(index: GLuint): void;
    /**
     * Signals the completion of GL rendering
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    finish(): void;
    /**
     * Forces all pending GL commands to be executed
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    flush(): void;
    /**
     * Attaches a renderbuffer to a framebuffer
     *
     * @param { GLenum } target - Framebuffer target
     * @param { GLenum } attachment - Attachment point
     * @param { GLenum } renderbuffertarget - Renderbuffer target
     * @param { WebGLRenderbuffer | null } renderbuffer - The renderbuffer to attach
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    framebufferRenderbuffer(
      target: GLenum,
      attachment: GLenum,
      renderbuffertarget: GLenum,
      renderbuffer: WebGLRenderbuffer | null,
    ): void;
    /**
     * Attaches a texture to a framebuffer
     *
     * @param { GLenum } target - Framebuffer target
     * @param { GLenum } attachment - Attachment point
     * @param { GLenum } textarget - Texture target
     * @param { WebGLTexture | null } texture - The texture to attach
     * @param { GLint } level - Mipmap level
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    framebufferTexture2D(
      target: GLenum,
      attachment: GLenum,
      textarget: GLenum,
      texture: WebGLTexture | null,
      level: GLint,
    ): void;
    /**
     * Sets the front face direction
     *
     * @param { GLenum } mode - Front face mode
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    frontFace(mode: GLenum): void;
    /**
     * Generates mipmaps for a texture
     *
     * @param { GLenum } target - Texture target
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    generateMipmap(target: GLenum): void;
    /**
     * Returns information about an active attribute
     *
     * @param { WebGLProgram } program - The program
     * @param { GLuint } index - The index of the attribute
     * @returns { WebGLActiveInfo | null } Information about the active attribute
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    getActiveAttrib(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    /**
     * Returns information about an active uniform
     *
     * @param { WebGLProgram } program - The program
     * @param { GLuint } index - The index of the uniform
     * @returns { WebGLActiveInfo | null } Information about the active uniform
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    getActiveUniform(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    /**
     * Returns the shaders attached to a program
     *
     * @param { WebGLProgram } program - The program
     * @returns { WebGLShader[] | null } Array of attached shaders
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    getAttachedShaders(program: WebGLProgram): WebGLShader[] | null;
    /**
     * Returns the location of an attribute variable
     *
     * @param { WebGLProgram } program - The program
     * @param { string } name - The name of the attribute
     * @returns { GLint } The location of the attribute
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    getAttribLocation(program: WebGLProgram, name: string): GLint;
    /**
     * Returns a buffer parameter
     *
     * @param { GLenum } target - Buffer target
     * @param { GLenum } pname - Parameter name
     * @returns { any } The buffer parameter value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    getBufferParameter(target: GLenum, pname: GLenum): any;
    /**
     * Returns a parameter value
     *
     * @param { GLenum } pname - Parameter name
     * @returns { any } The parameter value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    getParameter(pname: GLenum): any;
    /**
     * Returns the error code
     *
     * @returns { GLenum } The error code
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    getError(): GLenum;
    /**
     * Returns a framebuffer attachment parameter
     *
     * @param { GLenum } target - Framebuffer target
     * @param { GLenum } attachment - Attachment point
     * @param { GLenum } pname - Parameter name
     * @returns { any } The attachment parameter value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    getFramebufferAttachmentParameter(target: GLenum, attachment: GLenum, pname: GLenum): any;
    /**
     * Returns a program parameter
     *
     * @param { WebGLProgram } program - The program
     * @param { GLenum } pname - Parameter name
     * @returns { any } The program parameter value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    getProgramParameter(program: WebGLProgram, pname: GLenum): any;
    /**
     * Returns the program info log
     *
     * @param { WebGLProgram } program - The program
     * @returns { string | null } The program info log
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    getProgramInfoLog(program: WebGLProgram): string | null;
    /**
     * Returns a renderbuffer parameter
     *
     * @param { GLenum } target - Renderbuffer target
     * @param { GLenum } pname - Parameter name
     * @returns { any } The renderbuffer parameter value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    getRenderbufferParameter(target: GLenum, pname: GLenum): any;
    /**
     * Returns a shader parameter
     *
     * @param { WebGLShader } shader - The shader
     * @param { GLenum } pname - Parameter name
     * @returns { any } The shader parameter value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    getShaderParameter(shader: WebGLShader, pname: GLenum): any;
    /**
     * Returns the shader precision format
     *
     * @param { GLenum } shadertype - Shader type
     * @param { GLenum } precisiontype - Precision type
     * @returns { WebGLShaderPrecisionFormat | null } The precision format
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    getShaderPrecisionFormat(shadertype: GLenum, precisiontype: GLenum): WebGLShaderPrecisionFormat | null;
    /**
     * Returns the shader info log
     *
     * @param { WebGLShader } shader - The shader
     * @returns { string | null } The shader info log
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    getShaderInfoLog(shader: WebGLShader): string | null;
    /**
     * Returns the shader source
     *
     * @param { WebGLShader } shader - The shader
     * @returns { string | null } The shader source
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    getShaderSource(shader: WebGLShader): string | null;
    /**
     * Returns a texture parameter
     *
     * @param { GLenum } target - Texture target
     * @param { GLenum } pname - Parameter name
     * @returns { any } The texture parameter value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    getTexParameter(target: GLenum, pname: GLenum): any;
    /**
     * Returns the value of a uniform
     *
     * @param { WebGLProgram } program - The program
     * @param { WebGLUniformLocation } location - The uniform location
     * @returns { any } The uniform value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    getUniform(program: WebGLProgram, location: WebGLUniformLocation): any;
    /**
     * Returns the location of a uniform variable
     *
     * @param { WebGLProgram } program - The program
     * @param { string } name - The name of the uniform
     * @returns { WebGLUniformLocation | null } The uniform location
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation | null;
    /**
     * Returns a vertex attribute parameter
     *
     * @param { GLuint } index - The index of the vertex attribute
     * @param { GLenum } pname - Parameter name
     * @returns { any } The vertex attribute parameter value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    getVertexAttrib(index: GLuint, pname: GLenum): any;
    /**
     * Returns the offset of a vertex attribute
     *
     * @param { GLuint } index - The index of the vertex attribute
     * @param { GLenum } pname - Parameter name
     * @returns { GLintptr } The vertex attribute offset
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    getVertexAttribOffset(index: GLuint, pname: GLenum): GLintptr;
    /**
     * Sets a hint
     *
     * @param { GLenum } target - Hint target
     * @param { GLenum } mode - Hint mode
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    hint(target: GLenum, mode: GLenum): void;
    /**
     * Returns whether a buffer is valid
     *
     * @param { WebGLBuffer | null } buffer - The buffer
     * @returns { GLboolean } Whether the buffer is valid
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    isBuffer(buffer: WebGLBuffer | null): GLboolean;
    /**
     * Returns whether a capability is enabled
     *
     * @param { GLenum } cap - The capability
     * @returns { GLboolean } Whether the capability is enabled
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    isEnabled(cap: GLenum): GLboolean;
    /**
     * Returns whether a framebuffer is valid
     *
     * @param { WebGLFramebuffer | null } framebuffer - The framebuffer
     * @returns { GLboolean } Whether the framebuffer is valid
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    isFramebuffer(framebuffer: WebGLFramebuffer | null): GLboolean;
    /**
     * Returns whether a program is valid
     *
     * @param { WebGLProgram | null } program - The program
     * @returns { GLboolean } Whether the program is valid
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    isProgram(program: WebGLProgram | null): GLboolean;
    /**
     * Returns whether a renderbuffer is valid
     *
     * @param { WebGLRenderbuffer | null } renderbuffer - The renderbuffer
     * @returns { GLboolean } Whether the renderbuffer is valid
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    isRenderbuffer(renderbuffer: WebGLRenderbuffer | null): GLboolean;
    /**
     * Returns whether a shader is valid
     *
     * @param { WebGLShader | null } shader - The shader
     * @returns { GLboolean } Whether the shader is valid
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    isShader(shader: WebGLShader | null): GLboolean;
    /**
     * Returns whether a texture is valid
     *
     * @param { WebGLTexture | null } texture - The texture
     * @returns { GLboolean } Whether the texture is valid
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    isTexture(texture: WebGLTexture | null): GLboolean;
    /**
     * Sets the line width
     *
     * @param { GLfloat } width - Line width
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    lineWidth(width: GLfloat): void;
    /**
     * Links a program
     *
     * @param { WebGLProgram } program - The program to link
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    linkProgram(program: WebGLProgram): void;
    /**
     * Sets pixel storage parameters
     *
     * @param { GLenum } pname - Parameter name
     * @param { GLint | GLboolean } param - Parameter value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    pixelStorei(pname: GLenum, param: GLint | GLboolean): void;
    /**
     * Sets the polygon offset
     *
     * @param { GLfloat } factor - Scale factor
     * @param { GLfloat } units - Units
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    polygonOffset(factor: GLfloat, units: GLfloat): void;
    /**
     * Sets the renderbuffer storage
     *
     * @param { GLenum } target - Renderbuffer target
     * @param { GLenum } internalformat - Internal format
     * @param { GLsizei } width - Width
     * @param { GLsizei } height - Height
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    renderbufferStorage(target: GLenum, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
    /**
     * Sets the sample coverage
     *
     * @param { GLclampf } value - Coverage value
     * @param { GLboolean } invert - Invert coverage
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    sampleCoverage(value: GLclampf, invert: GLboolean): void;
    /**
     * Sets the scissor box
     *
     * @param { GLint } x - X coordinate
     * @param { GLint } y - Y coordinate
     * @param { GLsizei } width - Width
     * @param { GLsizei } height - Height
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    scissor(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    /**
     * Sets the shader source
     *
     * @param { WebGLShader } shader - The shader
     * @param { string } source - The source code
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    shaderSource(shader: WebGLShader, source: string): void;
    /**
     * Sets the stencil function
     *
     * @param { GLenum } func - Stencil function
     * @param { GLint } ref - Reference value
     * @param { GLuint } mask - Mask
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    stencilFunc(func: GLenum, ref: GLint, mask: GLuint): void;
    /**
     * Sets the stencil function separately for front and back faces
     *
     * @param { GLenum } face - Face mode
     * @param { GLenum } func - Stencil function
     * @param { GLint } ref - Reference value
     * @param { GLuint } mask - Mask
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    stencilFuncSeparate(face: GLenum, func: GLenum, ref: GLint, mask: GLuint): void;
    /**
     * Sets the stencil mask
     *
     * @param { GLuint } mask - Stencil mask
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    stencilMask(mask: GLuint): void;
    /**
     * Sets the stencil mask separately for front and back faces
     *
     * @param { GLenum } face - Face mode
     * @param { GLuint } mask - Stencil mask
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    stencilMaskSeparate(face: GLenum, mask: GLuint): void;
    /**
     * Sets the stencil operation
     *
     * @param { GLenum } fail - Operation when stencil test fails
     * @param { GLenum } zfail - Operation when depth test fails
     * @param { GLenum } zpass - Operation when depth test passes
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    stencilOp(fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    /**
     * Sets the stencil operation separately for front and back faces
     *
     * @param { GLenum } face - Face mode
     * @param { GLenum } fail - Operation when stencil test fails
     * @param { GLenum } zfail - Operation when depth test fails
     * @param { GLenum } zpass - Operation when depth test passes
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    stencilOpSeparate(face: GLenum, fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    /**
     * Sets a texture parameter (float)
     *
     * @param { GLenum } target - Texture target
     * @param { GLenum } pname - Parameter name
     * @param { GLfloat } param - Parameter value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    texParameterf(target: GLenum, pname: GLenum, param: GLfloat): void;
    /**
     * Sets a texture parameter (int)
     *
     * @param { GLenum } target - Texture target
     * @param { GLenum } pname - Parameter name
     * @param { GLint } param - Parameter value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    texParameteri(target: GLenum, pname: GLenum, param: GLint): void;
    /**
     * Sets a uniform1f value
     *
     * @param { WebGLUniformLocation | null } location - Uniform location
     * @param { GLfloat } x - X value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform1f(location: WebGLUniformLocation | null, x: GLfloat): void;
    /**
     * Sets a uniform2f value
     *
     * @param { WebGLUniformLocation | null } location - Uniform location
     * @param { GLfloat } x - X value
     * @param { GLfloat } y - Y value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform2f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat): void;
    /**
     * Sets a uniform3f value
     *
     * @param { WebGLUniformLocation | null } location - Uniform location
     * @param { GLfloat } x - X value
     * @param { GLfloat } y - Y value
     * @param { GLfloat } z - Z value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform3f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat): void;
    /**
     * Sets a uniform4f value
     *
     * @param { WebGLUniformLocation | null } location - Uniform location
     * @param { GLfloat } x - X value
     * @param { GLfloat } y - Y value
     * @param { GLfloat } z - Z value
     * @param { GLfloat } w - W value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform4f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    /**
     * Sets a uniform1i value
     *
     * @param { WebGLUniformLocation | null } location - Uniform location
     * @param { GLint } x - X value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform1i(location: WebGLUniformLocation | null, x: GLint): void;
    /**
     * Sets a uniform2i value
     *
     * @param { WebGLUniformLocation | null } location - Uniform location
     * @param { GLint } x - X value
     * @param { GLint } y - Y value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform2i(location: WebGLUniformLocation | null, x: GLint, y: GLint): void;
    /**
     * Sets a uniform3i value
     *
     * @param { WebGLUniformLocation | null } location - Uniform location
     * @param { GLint } x - X value
     * @param { GLint } y - Y value
     * @param { GLint } z - Z value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform3i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint): void;
    /**
     * Sets a uniform4i value
     *
     * @param { WebGLUniformLocation | null } location - Uniform location
     * @param { GLint } x - X value
     * @param { GLint } y - Y value
     * @param { GLint } z - Z value
     * @param { GLint } w - W value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform4i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint, w: GLint): void;
    /**
     * Uses a program
     *
     * @param { WebGLProgram | null } program - The program to use
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    useProgram(program: WebGLProgram | null): void;
    /**
     * Validates a program
     *
     * @param { WebGLProgram } program - The program to validate
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    validateProgram(program: WebGLProgram): void;
    /**
     * Sets a vertex attrib1f value
     *
     * @param { GLuint } index - Vertex attribute index
     * @param { GLfloat } x - X value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    vertexAttrib1f(index: GLuint, x: GLfloat): void;
    /**
     * Sets a vertex attrib2f value
     *
     * @param { GLuint } index - Vertex attribute index
     * @param { GLfloat } x - X value
     * @param { GLfloat } y - Y value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    vertexAttrib2f(index: GLuint, x: GLfloat, y: GLfloat): void;
    /**
     * Sets a vertex attrib3f value
     *
     * @param { GLuint } index - Vertex attribute index
     * @param { GLfloat } x - X value
     * @param { GLfloat } y - Y value
     * @param { GLfloat } z - Z value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    vertexAttrib3f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat): void;
    /**
     * Sets a vertex attrib4f value
     *
     * @param { GLuint } index - Vertex attribute index
     * @param { GLfloat } x - X value
     * @param { GLfloat } y - Y value
     * @param { GLfloat } z - Z value
     * @param { GLfloat } w - W value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    vertexAttrib4f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    /**
     * Sets a vertex attrib1fv value
     *
     * @param { GLuint } index - Vertex attribute index
     * @param { Float32List } values - Values
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    vertexAttrib1fv(index: GLuint, values: Float32List): void;
    /**
     * Sets a vertex attrib2fv value
     *
     * @param { GLuint } index - Vertex attribute index
     * @param { Float32List } values - Values
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    vertexAttrib2fv(index: GLuint, values: Float32List): void;
    /**
     * Sets a vertex attrib3fv value
     *
     * @param { GLuint } index - Vertex attribute index
     * @param { Float32List } values - Values
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    vertexAttrib3fv(index: GLuint, values: Float32List): void;
    /**
     * Sets a vertex attrib4fv value
     *
     * @param { GLuint } index - Vertex attribute index
     * @param { Float32List } values - Values
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    vertexAttrib4fv(index: GLuint, values: Float32List): void;
    /**
     * Sets vertex attrib pointer
     *
     * @param { GLuint } index - Vertex attribute index
     * @param { GLint } size - Number of components
     * @param { GLenum } type - Data type
     * @param { GLboolean } normalized - Whether to normalize
     * @param { GLsizei } stride - Stride
     * @param { GLintptr } offset - Offset
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    vertexAttribPointer(
      index: GLuint,
      size: GLint,
      type: GLenum,
      normalized: GLboolean,
      stride: GLsizei,
      offset: GLintptr,
    ): void;
    /**
     * Sets the viewport
     *
     * @param { GLint } x - X coordinate
     * @param { GLint } y - Y coordinate
     * @param { GLsizei } width - Width
     * @param { GLsizei } height - Height
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    viewport(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
}
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
interface WebGLRenderingContextOverloads {
    /**
     * Sets buffer data
     *
     * @param { GLenum } target - Buffer target
     * @param { GLsizeiptr } size - Buffer size
     * @param { GLenum } usage - Buffer usage
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
    /**
     * Sets buffer data from BufferSource
     *
     * @param { GLenum } target - Buffer target
     * @param { BufferSource | null } data - Buffer data
     * @param { GLenum } usage - Buffer usage
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    bufferData(target: GLenum, data: BufferSource | null, usage: GLenum): void;
    /**
     * Sets buffer sub data
     *
     * @param { GLenum } target - Buffer target
     * @param { GLintptr } offset - Offset
     * @param { BufferSource } data - Data to set
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    bufferSubData(target: GLenum, offset: GLintptr, data: BufferSource): void;
    /**
     * Compressed texture image 2D
     *
     * @param { GLenum } target - Texture target
     * @param { GLint } level - Mipmap level
     * @param { GLenum } internalformat - Internal format
     * @param { GLsizei } width - Width
     * @param { GLsizei } height - Height
     * @param { GLint } border - Border
     * @param { ArrayBufferView } data - Compressed image data
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    compressedTexImage2D(
      target: GLenum,
      level: GLint,
      internalformat: GLenum,
      width: GLsizei,
      height: GLsizei,
      border: GLint,
      data: ArrayBufferView,
    ): void;
    /**
     * Compressed texture sub image 2D
     *
     * @param { GLenum } target - Texture target
     * @param { GLint } level - Mipmap level
     * @param { GLint } xoffset - X offset
     * @param { GLint } yoffset - Y offset
     * @param { GLsizei } width - Width
     * @param { GLsizei } height - Height
     * @param { GLenum } format - Format
     * @param { ArrayBufferView } data - Compressed image data
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    compressedTexSubImage2D(
      target: GLenum,
      level: GLint,
      xoffset: GLint,
      yoffset: GLint,
      width: GLsizei,
      height: GLsizei,
      format: GLenum,
      data: ArrayBufferView,
    ): void;
    /**
     * Reads pixels from the framebuffer
     *
     * @param { GLint } x - X coordinate
     * @param { GLint } y - Y coordinate
     * @param { GLsizei } width - Width
     * @param { GLsizei } height - Height
     * @param { GLenum } format - Pixel format
     * @param { GLenum } type - Pixel type
     * @param { ArrayBufferView | null } pixels - Pixel buffer
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    readPixels(
      x: GLint,
      y: GLint,
      width: GLsizei,
      height: GLsizei,
      format: GLenum,
      type: GLenum,
      pixels: ArrayBufferView | null,
    ): void;
    /**
     * Sets texture image 2D from pixels
     *
     * @param { GLenum } target - Texture target
     * @param { GLint } level - Mipmap level
     * @param { GLint } internalformat - Internal format
     * @param { GLsizei } width - Width
     * @param { GLsizei } height - Height
     * @param { GLint } border - Border
     * @param { GLenum } format - Pixel format
     * @param { GLenum } type - Pixel type
     * @param { ArrayBufferView | null } pixels - Pixel data
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    texImage2D(
      target: GLenum,
      level: GLint,
      internalformat: GLint,
      width: GLsizei,
      height: GLsizei,
      border: GLint,
      format: GLenum,
      type: GLenum,
      pixels: ArrayBufferView | null,
    ): void;
    /**
     * Sets texture image 2D from TexImageSource
     *
     * @param { GLenum } target - Texture target
     * @param { GLint } level - Mipmap level
     * @param { GLint } internalformat - Internal format
     * @param { GLenum } format - Pixel format
     * @param { GLenum } type - Pixel type
     * @param { TexImageSource } source - Image source
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    texImage2D(
      target: GLenum,
      level: GLint,
      internalformat: GLint,
      format: GLenum,
      type: GLenum,
      source: TexImageSource,
    ): void;
    /**
     * Sets texture sub image 2D from pixels
     *
     * @param { GLenum } target - Texture target
     * @param { GLint } level - Mipmap level
     * @param { GLint } xoffset - X offset
     * @param { GLint } yoffset - Y offset
     * @param { GLsizei } width - Width
     * @param { GLsizei } height - Height
     * @param { GLenum } format - Pixel format
     * @param { GLenum } type - Pixel type
     * @param { ArrayBufferView | null } pixels - Pixel data
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    texSubImage2D(
      target: GLenum,
      level: GLint,
      xoffset: GLint,
      yoffset: GLint,
      width: GLsizei,
      height: GLsizei,
      format: GLenum,
      type: GLenum,
      pixels: ArrayBufferView | null,
    ): void;
    /**
     * Sets texture sub image 2D from TexImageSource
     *
     * @param { GLenum } target - Texture target
     * @param { GLint } level - Mipmap level
     * @param { GLint } xoffset - X offset
     * @param { GLint } yoffset - Y offset
     * @param { GLenum } format - Pixel format
     * @param { GLenum } type - Pixel type
     * @param { TexImageSource } source - Image source
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    texSubImage2D(
      target: GLenum,
      level: GLint,
      xoffset: GLint,
      yoffset: GLint,
      format: GLenum,
      type: GLenum,
      source: TexImageSource,
    ): void;
    /**
     * Sets uniform1fv value
     *
     * @param { WebGLUniformLocation | null } location - Uniform location
     * @param { Float32List } v - Value array
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform1fv(location: WebGLUniformLocation | null, v: Float32List): void;
    /**
     * Sets uniform2fv value
     *
     * @param { WebGLUniformLocation | null } location - Uniform location
     * @param { Float32List } v - Value array
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform2fv(location: WebGLUniformLocation | null, v: Float32List): void;
    /**
     * Sets uniform3fv value
     *
     * @param { WebGLUniformLocation | null } location - Uniform location
     * @param { Float32List } v - Value array
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform3fv(location: WebGLUniformLocation | null, v: Float32List): void;
    /**
     * Sets uniform4fv value
     *
     * @param { WebGLUniformLocation | null } location - Uniform location
     * @param { Float32List } v - Value array
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform4fv(location: WebGLUniformLocation | null, v: Float32List): void;
    /**
     * Sets uniform1iv value
     *
     * @param { WebGLUniformLocation | null } location - Uniform location
     * @param { Int32List } v - Value array
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform1iv(location: WebGLUniformLocation | null, v: Int32List): void;
    /**
     * Sets uniform2iv value
     *
     * @param { WebGLUniformLocation | null } location - Uniform location
     * @param { Int32List } v - Value array
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform2iv(location: WebGLUniformLocation | null, v: Int32List): void;
    /**
     * Sets uniform3iv value
     *
     * @param { WebGLUniformLocation | null } location - Uniform location
     * @param { Int32List } v - Value array
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform3iv(location: WebGLUniformLocation | null, v: Int32List): void;
    /**
     * Sets uniform4iv value
     *
     * @param { WebGLUniformLocation | null } location - Uniform location
     * @param { Int32List } v - Value array
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform4iv(location: WebGLUniformLocation | null, v: Int32List): void;
    /**
     * Sets uniformMatrix2fv value
     *
     * @param { WebGLUniformLocation | null } location - Uniform location
     * @param { GLboolean } transpose - Whether to transpose
     * @param { Float32List } value - Matrix value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    /**
     * Sets uniformMatrix3fv value
     *
     * @param { WebGLUniformLocation | null } location - Uniform location
     * @param { GLboolean } transpose - Whether to transpose
     * @param { Float32List } value - Matrix value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    /**
     * Sets uniformMatrix4fv value
     *
     * @param { WebGLUniformLocation | null } location - Uniform location
     * @param { GLboolean } transpose - Whether to transpose
     * @param { Float32List } value - Matrix value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
}
/**
 * WebGL 1.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL
 * @famodelonly
 * @since 7 dynamiconly
 */
export interface WebGLRenderingContext extends WebGLRenderingContextBase, WebGLRenderingContextOverloads {
}
