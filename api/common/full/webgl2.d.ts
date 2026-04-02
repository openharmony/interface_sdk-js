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

import * as webgl from "./webgl";
/**
 * WebGL 2.0
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
 * @famodelonly
 * @since 7 dynamiconly
 */
type GLint64 = number;
/**
 * WebGL 2.0
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
 * @famodelonly
 * @since 7 dynamiconly
 */
type GLuint64 = number;
/**
 * WebGL 2.0
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
 * @famodelonly
 * @since 7 dynamiconly
 */
interface WebGLQuery {
}
/**
 * WebGL 2.0
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
 * @famodelonly
 * @since 7 dynamiconly
 */
interface WebGLSampler {
}
/**
 * WebGL 2.0
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
 * @famodelonly
 * @since 7 dynamiconly
 */
interface WebGLSync {
}
/**
 * WebGL 2.0
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
 * @famodelonly
 * @since 7 dynamiconly
 */
interface WebGLTransformFeedback {
}
/**
 * WebGL 2.0
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
 * @famodelonly
 * @since 7 dynamiconly
 */
interface WebGLVertexArrayObject {
}
/**
 * WebGL 2.0
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
 * @famodelonly
 * @since 7 dynamiconly
 */
type Uint32List = Uint32Array | webgl.GLuint[];
/**
 * WebGL 2.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
 * @famodelonly
 * @since 7 dynamiconly
 */
interface WebGL2RenderingContextBase {
    /**
     * Read buffer
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly READ_BUFFER: webgl.GLenum;
    /**
     * Unpack row length
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNPACK_ROW_LENGTH: webgl.GLenum;
    /**
     * Unpack skip rows
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNPACK_SKIP_ROWS: webgl.GLenum;
    /**
     * Unpack skip pixels
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNPACK_SKIP_PIXELS: webgl.GLenum;
    /**
     * Pack row length
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly PACK_ROW_LENGTH: webgl.GLenum;
    /**
     * Pack skip rows
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly PACK_SKIP_ROWS: webgl.GLenum;
    /**
     * Pack skip pixels
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly PACK_SKIP_PIXELS: webgl.GLenum;
    /**
     * Buffer: color
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COLOR: webgl.GLenum;
    /**
     * Buffer: depth
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DEPTH: webgl.GLenum;
    /**
     * Buffer: stencil
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STENCIL: webgl.GLenum;
    /**
     * Pixel format: red
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RED: webgl.GLenum;
    /**
     * Internal format: RGB8
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGB8: webgl.GLenum;
    /**
     * Internal format: RGBA8
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGBA8: webgl.GLenum;
    /**
     * Internal format: RGB10_A2
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGB10_A2: webgl.GLenum;
    /**
     * Texture binding 3D
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_BINDING_3D: webgl.GLenum;
    /**
     * Unpack skip images
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNPACK_SKIP_IMAGES: webgl.GLenum;
    /**
     * Unpack image height
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNPACK_IMAGE_HEIGHT: webgl.GLenum;
    /**
     * Texture target: 3D
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_3D: webgl.GLenum;
    /**
     * Texture wrap: R
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_WRAP_R: webgl.GLenum;
    /**
     * Max 3D texture size
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_3D_TEXTURE_SIZE: webgl.GLenum;
    /**
     * Data type: unsigned int 2_10_10_10 rev
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNSIGNED_INT_2_10_10_10_REV: webgl.GLenum;
    /**
     * Max elements vertices
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_ELEMENTS_VERTICES: webgl.GLenum;
    /**
     * Max elements indices
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_ELEMENTS_INDICES: webgl.GLenum;
    /**
     * Texture min LOD
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_MIN_LOD: webgl.GLenum;
    /**
     * Texture max LOD
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_MAX_LOD: webgl.GLenum;
    /**
     * Texture base level
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_BASE_LEVEL: webgl.GLenum;
    /**
     * Texture max level
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_MAX_LEVEL: webgl.GLenum;
    /**
     * Min value
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MIN: webgl.GLenum;
    /**
     * Max value
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX: webgl.GLenum;
    /**
     * Internal format: depth component24
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DEPTH_COMPONENT24: webgl.GLenum;
    /**
     * Max texture LOD bias
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_TEXTURE_LOD_BIAS: webgl.GLenum;
    /**
     * Texture compare mode
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_COMPARE_MODE: webgl.GLenum;
    /**
     * Texture compare function
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_COMPARE_FUNC: webgl.GLenum;
    /**
     * Current query
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly CURRENT_QUERY: webgl.GLenum;
    /**
     * Query result
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly QUERY_RESULT: webgl.GLenum;
    /**
     * Query result available
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly QUERY_RESULT_AVAILABLE: webgl.GLenum;
    /**
     * Buffer usage: stream read
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STREAM_READ: webgl.GLenum;
    /**
     * Buffer usage: stream copy
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STREAM_COPY: webgl.GLenum;
    /**
     * Buffer usage: static read
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STATIC_READ: webgl.GLenum;
    /**
     * Buffer usage: static copy
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly STATIC_COPY: webgl.GLenum;
    /**
     * Buffer usage: dynamic read
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DYNAMIC_READ: webgl.GLenum;
    /**
     * Buffer usage: dynamic copy
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DYNAMIC_COPY: webgl.GLenum;
    /**
     * Max draw buffers
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_DRAW_BUFFERS: webgl.GLenum;
    /**
     * Draw buffer 0
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DRAW_BUFFER0: webgl.GLenum;
    /**
     * Draw buffer 1
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DRAW_BUFFER1: webgl.GLenum;
    /**
     * Draw buffer 2
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DRAW_BUFFER2: webgl.GLenum;
    /**
     * Draw buffer 3
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DRAW_BUFFER3: webgl.GLenum;
    /**
     * Draw buffer 4
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DRAW_BUFFER4: webgl.GLenum;
    /**
     * Draw Buffer5
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DRAW_BUFFER5: webgl.GLenum;
    /**
     * Draw Buffer6
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DRAW_BUFFER6: webgl.GLenum;
    /**
     * Draw Buffer7
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DRAW_BUFFER7: webgl.GLenum;
    /**
     * Draw Buffer8
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DRAW_BUFFER8: webgl.GLenum;
    /**
     * Draw Buffer9
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DRAW_BUFFER9: webgl.GLenum;
    /**
     * Draw Buffer10
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DRAW_BUFFER10: webgl.GLenum;
    /**
     * Draw Buffer11
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DRAW_BUFFER11: webgl.GLenum;
    /**
     * Draw Buffer12
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DRAW_BUFFER12: webgl.GLenum;
    /**
     * Draw Buffer13
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DRAW_BUFFER13: webgl.GLenum;
    /**
     * Draw Buffer14
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DRAW_BUFFER14: webgl.GLenum;
    /**
     * Draw Buffer15
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DRAW_BUFFER15: webgl.GLenum;
    /**
     * Max Fragment Uniform Components
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_FRAGMENT_UNIFORM_COMPONENTS: webgl.GLenum;
    /**
     * Max Vertex Uniform Components
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_VERTEX_UNIFORM_COMPONENTS: webgl.GLenum;
    /**
     * Sampler 3D
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SAMPLER_3D: webgl.GLenum;
    /**
     * Sampler 2D Shadow
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SAMPLER_2D_SHADOW: webgl.GLenum;
    /**
     * Fragment Shader Derivative Hint
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRAGMENT_SHADER_DERIVATIVE_HINT: webgl.GLenum;
    /**
     * Pixel Pack Buffer
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly PIXEL_PACK_BUFFER: webgl.GLenum;
    /**
     * Pixel Unpack Buffer
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly PIXEL_UNPACK_BUFFER: webgl.GLenum;
    /**
     * Pixel Pack Buffer Binding
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly PIXEL_PACK_BUFFER_BINDING: webgl.GLenum;
    /**
     * Pixel Unpack Buffer Binding
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly PIXEL_UNPACK_BUFFER_BINDING: webgl.GLenum;
    /**
     * Float Mat2X3
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FLOAT_MAT2x3: webgl.GLenum;
    /**
     * Float Mat2X4
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FLOAT_MAT2x4: webgl.GLenum;
    /**
     * Float Mat3X2
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FLOAT_MAT3x2: webgl.GLenum;
    /**
     * Float Mat3X4
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FLOAT_MAT3x4: webgl.GLenum;
    /**
     * Float Mat4X2
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FLOAT_MAT4x2: webgl.GLenum;
    /**
     * Float Mat4X3
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FLOAT_MAT4x3: webgl.GLenum;
    /**
     * Srgb
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SRGB: webgl.GLenum;
    /**
     * Srgb8
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SRGB8: webgl.GLenum;
    /**
     * Srgb8 Alpha8
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SRGB8_ALPHA8: webgl.GLenum;
    /**
     * Compare Ref To Texture
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COMPARE_REF_TO_TEXTURE: webgl.GLenum;
    /**
     * Rgba32F
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGBA32F: webgl.GLenum;
    /**
     * Rgb32F
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGB32F: webgl.GLenum;
    /**
     * Rgba16F
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGBA16F: webgl.GLenum;
    /**
     * Rgb16F
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGB16F: webgl.GLenum;
    /**
     * Vertex Attrib Array Integer
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly VERTEX_ATTRIB_ARRAY_INTEGER: webgl.GLenum;
    /**
     * Max Array Texture Layers
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_ARRAY_TEXTURE_LAYERS: webgl.GLenum;
    /**
     * Min Program Texel Offset
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MIN_PROGRAM_TEXEL_OFFSET: webgl.GLenum;
    /**
     * Max Program Texel Offset
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_PROGRAM_TEXEL_OFFSET: webgl.GLenum;
    /**
     * Max Varying Components
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_VARYING_COMPONENTS: webgl.GLenum;
    /**
     * Texture 2D Array
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_2D_ARRAY: webgl.GLenum;
    /**
     * Texture Binding 2D Array
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_BINDING_2D_ARRAY: webgl.GLenum;
    /**
     * R11F G11F B10F
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly R11F_G11F_B10F: webgl.GLenum;
    /**
     * Unsigned Int 10F 11F 11F Rev
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNSIGNED_INT_10F_11F_11F_REV: webgl.GLenum;
    /**
     * Rgb9 E5
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGB9_E5: webgl.GLenum;
    /**
     * Unsigned Int 5 9 9 9 Rev
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNSIGNED_INT_5_9_9_9_REV: webgl.GLenum;
    /**
     * Transform Feedback Buffer Mode
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TRANSFORM_FEEDBACK_BUFFER_MODE: webgl.GLenum;
    /**
     * Max Transform Feedback Separate Components
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: webgl.GLenum;
    /**
     * Transform Feedback Varyings
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TRANSFORM_FEEDBACK_VARYINGS: webgl.GLenum;
    /**
     * Transform Feedback Buffer Start
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TRANSFORM_FEEDBACK_BUFFER_START: webgl.GLenum;
    /**
     * Transform Feedback Buffer Size
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TRANSFORM_FEEDBACK_BUFFER_SIZE: webgl.GLenum;
    /**
     * Transform Feedback Primitives Written
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: webgl.GLenum;
    /**
     * Rasterizer Discard
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RASTERIZER_DISCARD: webgl.GLenum;
    /**
     * Max Transform Feedback Interleaved Components
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: webgl.GLenum;
    /**
     * Max Transform Feedback Separate Attribs
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: webgl.GLenum;
    /**
     * Interleaved Attribs
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly INTERLEAVED_ATTRIBS: webgl.GLenum;
    /**
     * Separate Attribs
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SEPARATE_ATTRIBS: webgl.GLenum;
    /**
     * Transform Feedback Buffer
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TRANSFORM_FEEDBACK_BUFFER: webgl.GLenum;
    /**
     * Transform Feedback Buffer Binding
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TRANSFORM_FEEDBACK_BUFFER_BINDING: webgl.GLenum;
    /**
     * Rgba32Ui
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGBA32UI: webgl.GLenum;
    /**
     * Rgb32Ui
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGB32UI: webgl.GLenum;
    /**
     * Rgba16Ui
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGBA16UI: webgl.GLenum;
    /**
     * Rgb16Ui
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGB16UI: webgl.GLenum;
    /**
     * Rgba8Ui
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGBA8UI: webgl.GLenum;
    /**
     * Rgb8Ui
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGB8UI: webgl.GLenum;
    /**
     * Rgba32I
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGBA32I: webgl.GLenum;
    /**
     * Rgb32I
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGB32I: webgl.GLenum;
    /**
     * Rgba16I
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGBA16I: webgl.GLenum;
    /**
     * Rgb16I
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGB16I: webgl.GLenum;
    /**
     * Rgba8I
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGBA8I: webgl.GLenum;
    /**
     * Rgb8I
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGB8I: webgl.GLenum;
    /**
     * Red Integer
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RED_INTEGER: webgl.GLenum;
    /**
     * Rgb Integer
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGB_INTEGER: webgl.GLenum;
    /**
     * Rgba Integer
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGBA_INTEGER: webgl.GLenum;
    /**
     * Sampler 2D Array
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SAMPLER_2D_ARRAY: webgl.GLenum;
    /**
     * Sampler 2D Array Shadow
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SAMPLER_2D_ARRAY_SHADOW: webgl.GLenum;
    /**
     * Sampler Cube Shadow
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SAMPLER_CUBE_SHADOW: webgl.GLenum;
    /**
     * Unsigned Int Vec2
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNSIGNED_INT_VEC2: webgl.GLenum;
    /**
     * Unsigned Int Vec3
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNSIGNED_INT_VEC3: webgl.GLenum;
    /**
     * Unsigned Int Vec4
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNSIGNED_INT_VEC4: webgl.GLenum;
    /**
     * Int Sampler 2D
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly INT_SAMPLER_2D: webgl.GLenum;
    /**
     * Int Sampler 3D
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly INT_SAMPLER_3D: webgl.GLenum;
    /**
     * Int Sampler Cube
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly INT_SAMPLER_CUBE: webgl.GLenum;
    /**
     * Int Sampler 2D Array
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly INT_SAMPLER_2D_ARRAY: webgl.GLenum;
    /**
     * Unsigned Int Sampler 2D
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNSIGNED_INT_SAMPLER_2D: webgl.GLenum;
    /**
     * Unsigned Int Sampler 3D
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNSIGNED_INT_SAMPLER_3D: webgl.GLenum;
    /**
     * Unsigned Int Sampler Cube
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNSIGNED_INT_SAMPLER_CUBE: webgl.GLenum;
    /**
     * Unsigned Int Sampler 2D Array
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNSIGNED_INT_SAMPLER_2D_ARRAY: webgl.GLenum;
    /**
     * Depth Component32F
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DEPTH_COMPONENT32F: webgl.GLenum;
    /**
     * Depth32F Stencil8
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DEPTH32F_STENCIL8: webgl.GLenum;
    /**
     * Float 32 Unsigned Int 24 8 Rev
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FLOAT_32_UNSIGNED_INT_24_8_REV: webgl.GLenum;
    /**
     * Framebuffer Attachment Color Encoding
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: webgl.GLenum;
    /**
     * Framebuffer Attachment Component Type
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: webgl.GLenum;
    /**
     * Framebuffer Attachment Red Size
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRAMEBUFFER_ATTACHMENT_RED_SIZE: webgl.GLenum;
    /**
     * Framebuffer Attachment Green Size
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: webgl.GLenum;
    /**
     * Framebuffer Attachment Blue Size
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: webgl.GLenum;
    /**
     * Framebuffer Attachment Alpha Size
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: webgl.GLenum;
    /**
     * Framebuffer Attachment Depth Size
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: webgl.GLenum;
    /**
     * Framebuffer Attachment Stencil Size
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: webgl.GLenum;
    /**
     * Framebuffer Default
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRAMEBUFFER_DEFAULT: webgl.GLenum;
    /**
     * Unsigned Int 24 8
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNSIGNED_INT_24_8: webgl.GLenum;
    /**
     * Depth24 Stencil8
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DEPTH24_STENCIL8: webgl.GLenum;
    /**
     * Unsigned Normalized
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNSIGNED_NORMALIZED: webgl.GLenum;
    /**
     * Draw Framebuffer Binding
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DRAW_FRAMEBUFFER_BINDING: webgl.GLenum;
    /**
     * Read Framebuffer
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly READ_FRAMEBUFFER: webgl.GLenum;
    /**
     * Draw Framebuffer
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly DRAW_FRAMEBUFFER: webgl.GLenum;
    /**
     * Read Framebuffer Binding
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly READ_FRAMEBUFFER_BINDING: webgl.GLenum;
    /**
     * Renderbuffer Samples
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RENDERBUFFER_SAMPLES: webgl.GLenum;
    /**
     * Framebuffer Attachment Texture Layer
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: webgl.GLenum;
    /**
     * Max Color Attachments
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_COLOR_ATTACHMENTS: webgl.GLenum;
    /**
     * Color Attachment1
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COLOR_ATTACHMENT1: webgl.GLenum;
    /**
     * Color Attachment2
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COLOR_ATTACHMENT2: webgl.GLenum;
    /**
     * Color Attachment3
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COLOR_ATTACHMENT3: webgl.GLenum;
    /**
     * Color Attachment4
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COLOR_ATTACHMENT4: webgl.GLenum;
    /**
     * Color Attachment5
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COLOR_ATTACHMENT5: webgl.GLenum;
    /**
     * Color Attachment6
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COLOR_ATTACHMENT6: webgl.GLenum;
    /**
     * Color Attachment7
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COLOR_ATTACHMENT7: webgl.GLenum;
    /**
     * Color Attachment8
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COLOR_ATTACHMENT8: webgl.GLenum;
    /**
     * Color Attachment9
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COLOR_ATTACHMENT9: webgl.GLenum;
    /**
     * Color Attachment10
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COLOR_ATTACHMENT10: webgl.GLenum;
    /**
     * Color Attachment11
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COLOR_ATTACHMENT11: webgl.GLenum;
    /**
     * Color Attachment12
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COLOR_ATTACHMENT12: webgl.GLenum;
    /**
     * Color Attachment13
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COLOR_ATTACHMENT13: webgl.GLenum;
    /**
     * Color Attachment14
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COLOR_ATTACHMENT14: webgl.GLenum;
    /**
     * Color Attachment15
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COLOR_ATTACHMENT15: webgl.GLenum;
    /**
     * Framebuffer Incomplete Multisample
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: webgl.GLenum;
    /**
     * Max Samples
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_SAMPLES: webgl.GLenum;
    /**
     * Half Float
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly HALF_FLOAT: webgl.GLenum;
    /**
     * Rg
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RG: webgl.GLenum;
    /**
     * Rg Integer
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RG_INTEGER: webgl.GLenum;
    /**
     * R8
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly R8: webgl.GLenum;
    /**
     * Rg8
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RG8: webgl.GLenum;
    /**
     * R16F
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly R16F: webgl.GLenum;
    /**
     * R32F
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly R32F: webgl.GLenum;
    /**
     * Rg16F
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RG16F: webgl.GLenum;
    /**
     * Rg32F
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RG32F: webgl.GLenum;
    /**
     * R8I
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly R8I: webgl.GLenum;
    /**
     * R8Ui
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly R8UI: webgl.GLenum;
    /**
     * R16I
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly R16I: webgl.GLenum;
    /**
     * R16Ui
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly R16UI: webgl.GLenum;
    /**
     * R32I
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly R32I: webgl.GLenum;
    /**
     * R32Ui
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly R32UI: webgl.GLenum;
    /**
     * Rg8I
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RG8I: webgl.GLenum;
    /**
     * Rg8Ui
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RG8UI: webgl.GLenum;
    /**
     * Rg16I
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RG16I: webgl.GLenum;
    /**
     * Rg16Ui
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RG16UI: webgl.GLenum;
    /**
     * Rg32I
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RG32I: webgl.GLenum;
    /**
     * Rg32Ui
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RG32UI: webgl.GLenum;
    /**
     * Vertex Array Binding
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly VERTEX_ARRAY_BINDING: webgl.GLenum;
    /**
     * R8 Snorm
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly R8_SNORM: webgl.GLenum;
    /**
     * Rg8 Snorm
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RG8_SNORM: webgl.GLenum;
    /**
     * Rgb8 Snorm
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGB8_SNORM: webgl.GLenum;
    /**
     * Rgba8 Snorm
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGBA8_SNORM: webgl.GLenum;
    /**
     * Signed Normalized
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SIGNED_NORMALIZED: webgl.GLenum;
    /**
     * Copy Read Buffer
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COPY_READ_BUFFER: webgl.GLenum;
    /**
     * Copy Write Buffer
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COPY_WRITE_BUFFER: webgl.GLenum;
    /**
     * Copy Read Buffer Binding
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COPY_READ_BUFFER_BINDING: webgl.GLenum;
    /**
     * Copy Write Buffer Binding
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly COPY_WRITE_BUFFER_BINDING: webgl.GLenum;
    /**
     * Uniform Buffer
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNIFORM_BUFFER: webgl.GLenum;
    /**
     * Uniform Buffer Binding
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNIFORM_BUFFER_BINDING: webgl.GLenum;
    /**
     * Uniform Buffer Start
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNIFORM_BUFFER_START: webgl.GLenum;
    /**
     * Uniform Buffer Size
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNIFORM_BUFFER_SIZE: webgl.GLenum;
    /**
     * Max Vertex Uniform Blocks
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_VERTEX_UNIFORM_BLOCKS: webgl.GLenum;
    /**
     * Max Fragment Uniform Blocks
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_FRAGMENT_UNIFORM_BLOCKS: webgl.GLenum;
    /**
     * Max Combined Uniform Blocks
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_COMBINED_UNIFORM_BLOCKS: webgl.GLenum;
    /**
     * Max Uniform Buffer Bindings
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_UNIFORM_BUFFER_BINDINGS: webgl.GLenum;
    /**
     * Max Uniform Block Size
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_UNIFORM_BLOCK_SIZE: webgl.GLenum;
    /**
     * Max Combined Vertex Uniform Components
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: webgl.GLenum;
    /**
     * Max Combined Fragment Uniform Components
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: webgl.GLenum;
    /**
     * Uniform Buffer Offset Alignment
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNIFORM_BUFFER_OFFSET_ALIGNMENT: webgl.GLenum;
    /**
     * Active Uniform Blocks
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly ACTIVE_UNIFORM_BLOCKS: webgl.GLenum;
    /**
     * Uniform Type
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNIFORM_TYPE: webgl.GLenum;
    /**
     * Uniform Size
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNIFORM_SIZE: webgl.GLenum;
    /**
     * Uniform Block Index
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNIFORM_BLOCK_INDEX: webgl.GLenum;
    /**
     * Uniform Offset
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNIFORM_OFFSET: webgl.GLenum;
    /**
     * Uniform Array Stride
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNIFORM_ARRAY_STRIDE: webgl.GLenum;
    /**
     * Uniform Matrix Stride
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNIFORM_MATRIX_STRIDE: webgl.GLenum;
    /**
     * Uniform Is Row Major
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNIFORM_IS_ROW_MAJOR: webgl.GLenum;
    /**
     * Uniform Block Binding
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNIFORM_BLOCK_BINDING: webgl.GLenum;
    /**
     * Uniform Block Data Size
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNIFORM_BLOCK_DATA_SIZE: webgl.GLenum;
    /**
     * Uniform Block Active Uniforms
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNIFORM_BLOCK_ACTIVE_UNIFORMS: webgl.GLenum;
    /**
     * Uniform Block Active Uniform Indices
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: webgl.GLenum;
    /**
     * Uniform Block Referenced By Vertex Shader
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: webgl.GLenum;
    /**
     * Uniform Block Referenced By Fragment Shader
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: webgl.GLenum;
    /**
     * Invalid Index
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly INVALID_INDEX: webgl.GLenum;
    /**
     * Max Vertex Output Components
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_VERTEX_OUTPUT_COMPONENTS: webgl.GLenum;
    /**
     * Max Fragment Input Components
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_FRAGMENT_INPUT_COMPONENTS: webgl.GLenum;
    /**
     * Max Server Wait Timeout
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_SERVER_WAIT_TIMEOUT: webgl.GLenum;
    /**
     * Object Type
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly OBJECT_TYPE: webgl.GLenum;
    /**
     * Sync Condition
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SYNC_CONDITION: webgl.GLenum;
    /**
     * Sync Status
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SYNC_STATUS: webgl.GLenum;
    /**
     * Sync Flags
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SYNC_FLAGS: webgl.GLenum;
    /**
     * Sync Fence
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SYNC_FENCE: webgl.GLenum;
    /**
     * Sync Gpu Commands Complete
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SYNC_GPU_COMMANDS_COMPLETE: webgl.GLenum;
    /**
     * Unsignaled
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly UNSIGNALED: webgl.GLenum;
    /**
     * Signaled
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SIGNALED: webgl.GLenum;
    /**
     * Already Signaled
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly ALREADY_SIGNALED: webgl.GLenum;
    /**
     * Timeout Expired
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TIMEOUT_EXPIRED: webgl.GLenum;
    /**
     * Condition Satisfied
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly CONDITION_SATISFIED: webgl.GLenum;
    /**
     * Wait Failed
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly WAIT_FAILED: webgl.GLenum;
    /**
     * Sync Flush Commands Bit
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SYNC_FLUSH_COMMANDS_BIT: webgl.GLenum;
    /**
     * Vertex Attrib Array Divisor
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly VERTEX_ATTRIB_ARRAY_DIVISOR: webgl.GLenum;
    /**
     * Any Samples Passed
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly ANY_SAMPLES_PASSED: webgl.GLenum;
    /**
     * Any Samples Passed Conservative
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly ANY_SAMPLES_PASSED_CONSERVATIVE: webgl.GLenum;
    /**
     * Sampler Binding
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly SAMPLER_BINDING: webgl.GLenum;
    /**
     * Internal format: RGB10_A2UI
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly RGB10_A2UI: webgl.GLenum;
    /**
     * Data type: INT 2_10_10_10_REV
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly INT_2_10_10_10_REV: webgl.GLenum;
    /**
     * Transform feedback target
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TRANSFORM_FEEDBACK: webgl.GLenum;
    /**
     * Transform feedback paused
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TRANSFORM_FEEDBACK_PAUSED: webgl.GLenum;
    /**
     * Transform feedback active
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TRANSFORM_FEEDBACK_ACTIVE: webgl.GLenum;
    /**
     * Transform feedback binding
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TRANSFORM_FEEDBACK_BINDING: webgl.GLenum;
    /**
     * Texture immutable format
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_IMMUTABLE_FORMAT: webgl.GLenum;
    /**
     * Max element index
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_ELEMENT_INDEX: webgl.GLenum;
    /**
     * Texture immutable levels
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TEXTURE_IMMUTABLE_LEVELS: webgl.GLenum;
    /**
     * Timeout ignored
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly TIMEOUT_IGNORED: GLint64;
    /**
     * Max client wait timeout WebGL
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readonly MAX_CLIENT_WAIT_TIMEOUT_WEBGL: webgl.GLenum;
    /**
     * Copies data from one buffer to another
     *
     * @param { webgl.GLenum } readTarget - Read buffer target
     * @param { webgl.GLenum } writeTarget - Write buffer target
     * @param { webgl.GLintptr } readOffset - Read offset
     * @param { webgl.GLintptr } writeOffset - Write offset
     * @param { webgl.GLsizeiptr } size - Size to copy
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    copyBufferSubData(
      readTarget: webgl.GLenum,
      writeTarget: webgl.GLenum,
      readOffset: webgl.GLintptr,
      writeOffset: webgl.GLintptr,
      size: webgl.GLsizeiptr,
    ): void;
    /**
     * Gets buffer sub data
     *
     * @param { webgl.GLenum } target - Buffer target
     * @param { webgl.GLintptr } srcByteOffset - Source byte offset
     * @param { ArrayBufferView } dstBuffer - Destination buffer
     * @param { webgl.GLuint } dstOffset - Destination offset
     * @param { webgl.GLuint } length - Length
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    getBufferSubData(
      target: webgl.GLenum,
      srcByteOffset: webgl.GLintptr,
      dstBuffer: ArrayBufferView,
      dstOffset?: webgl.GLuint,
      length?: webgl.GLuint,
    ): void;
    /**
     * Blits framebuffer
     *
     * @param { webgl.GLint } srcX0 - Source X0
     * @param { webgl.GLint } srcY0 - Source Y0
     * @param { webgl.GLint } srcX1 - Source X1
     * @param { webgl.GLint } srcY1 - Source Y1
     * @param { webgl.GLint } dstX0 - Destination X0
     * @param { webgl.GLint } dstY0 - Destination Y0
     * @param { webgl.GLint } dstX1 - Destination X1
     * @param { webgl.GLint } dstY1 - Destination Y1
     * @param { webgl.GLbitfield } mask - Mask
     * @param { webgl.GLenum } filter - Filter
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    blitFramebuffer(
      srcX0: webgl.GLint,
      srcY0: webgl.GLint,
      srcX1: webgl.GLint,
      srcY1: webgl.GLint,
      dstX0: webgl.GLint,
      dstY0: webgl.GLint,
      dstX1: webgl.GLint,
      dstY1: webgl.GLint,
      mask: webgl.GLbitfield,
      filter: webgl.GLenum,
    ): void;
    /**
     * Attaches a texture layer to a framebuffer
     *
     * @param { webgl.GLenum } target - Framebuffer target
     * @param { webgl.GLenum } attachment - Attachment point
     * @param { webgl.WebGLTexture | null } texture - Texture
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLint } layer - Layer
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    framebufferTextureLayer(
      target: webgl.GLenum,
      attachment: webgl.GLenum,
      texture: webgl.WebGLTexture | null,
      level: webgl.GLint,
      layer: webgl.GLint,
    ): void;
    /**
     * Invalidates framebuffer attachments
     *
     * @param { webgl.GLenum } target - Framebuffer target
     * @param { webgl.GLenum[] } attachments - Attachments to invalidate
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    invalidateFramebuffer(target: webgl.GLenum, attachments: webgl.GLenum[]): void;
    /**
     * Invalidates sub framebuffer attachments
     *
     * @param { webgl.GLenum } target - Framebuffer target
     * @param { webgl.GLenum[] } attachments - Attachments to invalidate
     * @param { webgl.GLint } x - X coordinate
     * @param { webgl.GLint } y - Y coordinate
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    invalidateSubFramebuffer(
      target: webgl.GLenum,
      attachments: webgl.GLenum[],
      x: webgl.GLint,
      y: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
    ): void;
    /**
     * Sets the read buffer
     *
     * @param { webgl.GLenum } src - Read buffer
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readBuffer(src: webgl.GLenum): void;
    /**
     * Gets internal format parameter
     *
     * @param { webgl.GLenum } target - Target
     * @param { webgl.GLenum } internalformat - Internal format
     * @param { webgl.GLenum } pname - Parameter name
     * @returns { any } Parameter value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    getInternalformatParameter(target: webgl.GLenum, internalformat: webgl.GLenum, pname: webgl.GLenum): any;
    /**
     * Sets renderbuffer storage with multisampling
     *
     * @param { webgl.GLenum } target - Renderbuffer target
     * @param { webgl.GLsizei } samples - Number of samples
     * @param { webgl.GLenum } internalformat - Internal format
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    renderbufferStorageMultisample(
      target: webgl.GLenum,
      samples: webgl.GLsizei,
      internalformat: webgl.GLenum,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
    ): void;
    /**
     * Sets texture storage 2D
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLsizei } levels - Number of levels
     * @param { webgl.GLenum } internalformat - Internal format
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    texStorage2D(
      target: webgl.GLenum,
      levels: webgl.GLsizei,
      internalformat: webgl.GLenum,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
    ): void;
    /**
     * Sets texture storage 3D
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLsizei } levels - Number of levels
     * @param { webgl.GLenum } internalformat - Internal format
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLsizei } depth - Depth
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    texStorage3D(
      target: webgl.GLenum,
      levels: webgl.GLsizei,
      internalformat: webgl.GLenum,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      depth: webgl.GLsizei,
    ): void;
    /**
     * Sets texture image 3D from PBO offset
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLint } internalformat - Internal format
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLsizei } depth - Depth
     * @param { webgl.GLint } border - Border
     * @param { webgl.GLenum } format - Format
     * @param { webgl.GLenum } type - Type
     * @param { webgl.GLintptr } pboOffset - PBO offset
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    texImage3D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      depth: webgl.GLsizei,
      border: webgl.GLint,
      format: webgl.GLenum,
      type: webgl.GLenum,
      pboOffset: webgl.GLintptr,
    ): void;
    /**
     * Sets texture image 3D from TexImageSource
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLint } internalformat - Internal format
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLsizei } depth - Depth
     * @param { webgl.GLint } border - Border
     * @param { webgl.GLenum } format - Format
     * @param { webgl.GLenum } type - Type
     * @param { webgl.TexImageSource } source - Image source
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    texImage3D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      depth: webgl.GLsizei,
      border: webgl.GLint,
      format: webgl.GLenum,
      type: webgl.GLenum,
      source: webgl.TexImageSource,
    ): void;
    /**
     * Sets texture image 3D from ArrayBufferView
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLint } internalformat - Internal format
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLsizei } depth - Depth
     * @param { webgl.GLint } border - Border
     * @param { webgl.GLenum } format - Format
     * @param { webgl.GLenum } type - Type
     * @param { ArrayBufferView | null } srcData - Source data
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    texImage3D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      depth: webgl.GLsizei,
      border: webgl.GLint,
      format: webgl.GLenum,
      type: webgl.GLenum,
      srcData: ArrayBufferView | null,
    ): void;
    /**
     * Sets texture image 3D from ArrayBufferView with offset
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLint } internalformat - Internal format
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLsizei } depth - Depth
     * @param { webgl.GLint } border - Border
     * @param { webgl.GLenum } format - Format
     * @param { webgl.GLenum } type - Type
     * @param { ArrayBufferView } srcData - Source data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    texImage3D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      depth: webgl.GLsizei,
      border: webgl.GLint,
      format: webgl.GLenum,
      type: webgl.GLenum,
      srcData: ArrayBufferView,
      srcOffset: webgl.GLuint,
    ): void;
    /**
     * Sets texture sub image 3D from PBO offset
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLint } xoffset - X offset
     * @param { webgl.GLint } yoffset - Y offset
     * @param { webgl.GLint } zoffset - Z offset
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLsizei } depth - Depth
     * @param { webgl.GLenum } format - Format
     * @param { webgl.GLenum } type - Type
     * @param { webgl.GLintptr } pboOffset - PBO offset
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    texSubImage3D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      zoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      depth: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      pboOffset: webgl.GLintptr,
    ): void;
    /**
     * Sets texture sub image 3D from TexImageSource
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLint } xoffset - X offset
     * @param { webgl.GLint } yoffset - Y offset
     * @param { webgl.GLint } zoffset - Z offset
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLsizei } depth - Depth
     * @param { webgl.GLenum } format - Format
     * @param { webgl.GLenum } type - Type
     * @param { webgl.TexImageSource } source - Image source
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    texSubImage3D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      zoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      depth: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      source: webgl.TexImageSource,
    ): void;
    /**
     * Sets texture sub image 3D from ArrayBufferView
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLint } xoffset - X offset
     * @param { webgl.GLint } yoffset - Y offset
     * @param { webgl.GLint } zoffset - Z offset
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLsizei } depth - Depth
     * @param { webgl.GLenum } format - Format
     * @param { webgl.GLenum } type - Type
     * @param { ArrayBufferView | null } srcData - Source data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    texSubImage3D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      zoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      depth: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      srcData: ArrayBufferView | null,
      srcOffset?: webgl.GLuint,
    ): void;
    /**
     * Copies a portion of a 3D texture image
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLint } xoffset - X offset
     * @param { webgl.GLint } yoffset - Y offset
     * @param { webgl.GLint } zoffset - Z offset
     * @param { webgl.GLint } x - X coordinate
     * @param { webgl.GLint } y - Y coordinate
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    copyTexSubImage3D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      zoffset: webgl.GLint,
      x: webgl.GLint,
      y: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
    ): void;
    /**
     * Compressed texture image 3D from PBO offset
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLenum } internalformat - Internal format
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLsizei } depth - Depth
     * @param { webgl.GLint } border - Border
     * @param { webgl.GLsizei } imageSize - Image size
     * @param { webgl.GLintptr } offset - Offset
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    compressedTexImage3D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLenum,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      depth: webgl.GLsizei,
      border: webgl.GLint,
      imageSize: webgl.GLsizei,
      offset: webgl.GLintptr,
    ): void;
    /**
     * Compressed texture image 3D from ArrayBufferView
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLenum } internalformat - Internal format
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLsizei } depth - Depth
     * @param { webgl.GLint } border - Border
     * @param { ArrayBufferView } srcData - Source data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } srcLengthOverride - Source length override
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    compressedTexImage3D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLenum,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      depth: webgl.GLsizei,
      border: webgl.GLint,
      srcData: ArrayBufferView,
      srcOffset?: webgl.GLuint,
      srcLengthOverride?: webgl.GLuint,
    ): void;
    /**
     * Compressed texture sub image 3D from PBO offset
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLint } xoffset - X offset
     * @param { webgl.GLint } yoffset - Y offset
     * @param { webgl.GLint } zoffset - Z offset
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLsizei } depth - Depth
     * @param { webgl.GLenum } format - Format
     * @param { webgl.GLsizei } imageSize - Image size
     * @param { webgl.GLintptr } offset - Offset
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    compressedTexSubImage3D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      zoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      depth: webgl.GLsizei,
      format: webgl.GLenum,
      imageSize: webgl.GLsizei,
      offset: webgl.GLintptr,
    ): void;
    /**
     * Compressed texture sub image 3D from ArrayBufferView
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLint } xoffset - X offset
     * @param { webgl.GLint } yoffset - Y offset
     * @param { webgl.GLint } zoffset - Z offset
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLsizei } depth - Depth
     * @param { webgl.GLenum } format - Format
     * @param { ArrayBufferView } srcData - Source data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } srcLengthOverride - Source length override
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    compressedTexSubImage3D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      zoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      depth: webgl.GLsizei,
      format: webgl.GLenum,
      srcData: ArrayBufferView,
      srcOffset?: webgl.GLuint,
      srcLengthOverride?: webgl.GLuint,
    ): void;
    /**
     * Gets fragment data location
     *
     * @param { webgl.WebGLProgram } program - Program
     * @param { string } name - Name
     * @returns { webgl.GLint } Location
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    getFragDataLocation(program: webgl.WebGLProgram, name: string): webgl.GLint;
    /**
     * Sets uniform1ui value
     *
     * @param { webgl.WebGLUniformLocation | null } location - Uniform location
     * @param { webgl.GLuint } v0 - Value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform1ui(location: webgl.WebGLUniformLocation | null, v0: webgl.GLuint): void;
    /**
     * Sets uniform2ui value
     *
     * @param { webgl.WebGLUniformLocation | null } location - Uniform location
     * @param { webgl.GLuint } v0 - X value
     * @param { webgl.GLuint } v1 - Y value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform2ui(location: webgl.WebGLUniformLocation | null, v0: webgl.GLuint, v1: webgl.GLuint): void;
    /**
     * Sets uniform3ui value
     *
     * @param { webgl.WebGLUniformLocation | null } location - Uniform location
     * @param { webgl.GLuint } v0 - X value
     * @param { webgl.GLuint } v1 - Y value
     * @param { webgl.GLuint } v2 - Z value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform3ui(location: webgl.WebGLUniformLocation | null, v0: webgl.GLuint, v1: webgl.GLuint, v2: webgl.GLuint): void;
    /**
     * Sets uniform4ui value
     *
     * @param { webgl.WebGLUniformLocation | null } location - Uniform location
     * @param { webgl.GLuint } v0 - X value
     * @param { webgl.GLuint } v1 - Y value
     * @param { webgl.GLuint } v2 - Z value
     * @param { webgl.GLuint } v3 - W value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform4ui(
      location: webgl.WebGLUniformLocation | null,
      v0: webgl.GLuint,
      v1: webgl.GLuint,
      v2: webgl.GLuint,
      v3: webgl.GLuint,
    ): void;
    /**
     * Sets uniform1uiv value
     *
     * @param { webgl.WebGLUniformLocation | null } location - Uniform location
     * @param { Uint32List } data - Data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } srcLength - Source length
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform1uiv(
      location: webgl.WebGLUniformLocation | null,
      data: Uint32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void;
    /**
     * Sets uniform2uiv value
     *
     * @param { webgl.WebGLUniformLocation | null } location - Uniform location
     * @param { Uint32List } data - Data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } srcLength - Source length
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform2uiv(
      location: webgl.WebGLUniformLocation | null,
      data: Uint32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void;
    /**
     * Sets uniform3uiv value
     *
     * @param { webgl.WebGLUniformLocation | null } location - Uniform location
     * @param { Uint32List } data - Data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } srcLength - Source length
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform3uiv(
      location: webgl.WebGLUniformLocation | null,
      data: Uint32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void;
    /**
     * Sets uniform4uiv value
     *
     * @param { webgl.WebGLUniformLocation | null } location - Uniform location
     * @param { Uint32List } data - Data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } srcLength - Source length
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform4uiv(
      location: webgl.WebGLUniformLocation | null,
      data: Uint32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void;
    /**
     * Sets uniformMatrix3x2fv value
     *
     * @param { webgl.WebGLUniformLocation | null } location - Uniform location
     * @param { webgl.GLboolean } transpose - Transpose
     * @param { webgl.Float32List } data - Data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } srcLength - Source length
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniformMatrix3x2fv(
      location: webgl.WebGLUniformLocation | null,
      transpose: webgl.GLboolean,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void;
    /**
     * Sets uniformMatrix4x2fv value
     *
     * @param { webgl.WebGLUniformLocation | null } location - Uniform location
     * @param { webgl.GLboolean } transpose - Transpose
     * @param { webgl.Float32List } data - Data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } srcLength - Source length
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniformMatrix4x2fv(
      location: webgl.WebGLUniformLocation | null,
      transpose: webgl.GLboolean,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void;
    /**
     * Sets uniformMatrix2x3fv value
     *
     * @param { webgl.WebGLUniformLocation | null } location - Uniform location
     * @param { webgl.GLboolean } transpose - Transpose
     * @param { webgl.Float32List } data - Data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } srcLength - Source length
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniformMatrix2x3fv(
      location: webgl.WebGLUniformLocation | null,
      transpose: webgl.GLboolean,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void;
    /**
     * Sets uniformMatrix4x3fv value
     *
     * @param { webgl.WebGLUniformLocation | null } location - Uniform location
     * @param { webgl.GLboolean } transpose - Transpose
     * @param { webgl.Float32List } data - Data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } srcLength - Source length
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniformMatrix4x3fv(
      location: webgl.WebGLUniformLocation | null,
      transpose: webgl.GLboolean,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void;
    /**
     * Sets uniformMatrix2x4fv value
     *
     * @param { webgl.WebGLUniformLocation | null } location - Uniform location
     * @param { webgl.GLboolean } transpose - Transpose
     * @param { webgl.Float32List } data - Data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } srcLength - Source length
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniformMatrix2x4fv(
      location: webgl.WebGLUniformLocation | null,
      transpose: webgl.GLboolean,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void;
    /**
     * Sets uniformMatrix3x4fv value
     *
     * @param { webgl.WebGLUniformLocation | null } location - Uniform location
     * @param { webgl.GLboolean } transpose - Transpose
     * @param { webgl.Float32List } data - Data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } srcLength - Source length
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniformMatrix3x4fv(
      location: webgl.WebGLUniformLocation | null,
      transpose: webgl.GLboolean,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void;
    /**
     * Sets vertex attrib I4i value
     *
     * @param { webgl.GLuint } index - Vertex attribute index
     * @param { webgl.GLint } x - X value
     * @param { webgl.GLint } y - Y value
     * @param { webgl.GLint } z - Z value
     * @param { webgl.GLint } w - W value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    vertexAttribI4i(index: webgl.GLuint, x: webgl.GLint, y: webgl.GLint, z: webgl.GLint, w: webgl.GLint): void;
    /**
     * Sets vertex attrib I4iv value
     *
     * @param { webgl.GLuint } index - Vertex attribute index
     * @param { webgl.Int32List } values - Values
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    vertexAttribI4iv(index: webgl.GLuint, values: webgl.Int32List): void;
    /**
     * Sets vertex attrib I4ui value
     *
     * @param { webgl.GLuint } index - Vertex attribute index
     * @param { webgl.GLuint } x - X value
     * @param { webgl.GLuint } y - Y value
     * @param { webgl.GLuint } z - Z value
     * @param { webgl.GLuint } w - W value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    vertexAttribI4ui(index: webgl.GLuint, x: webgl.GLuint, y: webgl.GLuint, z: webgl.GLuint, w: webgl.GLuint): void;
    /**
     * Sets vertex attrib I4uiv value
     *
     * @param { webgl.GLuint } index - Vertex attribute index
     * @param { Uint32List } values - Values
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    vertexAttribI4uiv(index: webgl.GLuint, values: Uint32List): void;
    /**
     * Sets vertex attrib integer pointer
     *
     * @param { webgl.GLuint } index - Vertex attribute index
     * @param { webgl.GLint } size - Size
     * @param { webgl.GLenum } type - Type
     * @param { webgl.GLsizei } stride - Stride
     * @param { webgl.GLintptr } offset - Offset
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    vertexAttribIPointer(
      index: webgl.GLuint,
      size: webgl.GLint,
      type: webgl.GLenum,
      stride: webgl.GLsizei,
      offset: webgl.GLintptr,
    ): void;
    /**
     * Sets vertex attrib divisor
     *
     * @param { webgl.GLuint } index - Vertex attribute index
     * @param { webgl.GLuint } divisor - Divisor
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    vertexAttribDivisor(index: webgl.GLuint, divisor: webgl.GLuint): void;
    /**
     * Draws arrays instanced
     *
     * @param { webgl.GLenum } mode - Mode
     * @param { webgl.GLint } first - First
     * @param { webgl.GLsizei } count - Count
     * @param { webgl.GLsizei } instanceCount - Instance count
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    drawArraysInstanced(
      mode: webgl.GLenum,
      first: webgl.GLint,
      count: webgl.GLsizei,
      instanceCount: webgl.GLsizei,
    ): void;
    /**
     * Draws elements instanced
     *
     * @param { webgl.GLenum } mode - Mode
     * @param { webgl.GLsizei } count - Count
     * @param { webgl.GLenum } type - Type
     * @param { webgl.GLintptr } offset - Offset
     * @param { webgl.GLsizei } instanceCount - Instance count
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    drawElementsInstanced(
      mode: webgl.GLenum,
      count: webgl.GLsizei,
      type: webgl.GLenum,
      offset: webgl.GLintptr,
      instanceCount: webgl.GLsizei,
    ): void;
    /**
     * Draws range elements
     *
     * @param { webgl.GLenum } mode - Mode
     * @param { webgl.GLuint } start - Start
     * @param { webgl.GLuint } end - End
     * @param { webgl.GLsizei } count - Count
     * @param { webgl.GLenum } type - Type
     * @param { webgl.GLintptr } offset - Offset
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    drawRangeElements(
      mode: webgl.GLenum,
      start: webgl.GLuint,
      end: webgl.GLuint,
      count: webgl.GLsizei,
      type: webgl.GLenum,
      offset: webgl.GLintptr,
    ): void;
    /**
     * Sets draw buffers
     *
     * @param { webgl.GLenum[] } buffers - Buffers
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    drawBuffers(buffers: webgl.GLenum[]): void;
    /**
     * Clears bufferfv
     *
     * @param { webgl.GLenum } buffer - Buffer
     * @param { webgl.GLint } drawbuffer - Draw buffer
     * @param { webgl.Float32List } values - Values
     * @param { webgl.GLuint } srcOffset - Source offset
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    clearBufferfv(
      buffer: webgl.GLenum,
      drawbuffer: webgl.GLint,
      values: webgl.Float32List,
      srcOffset?: webgl.GLuint,
    ): void;
    /**
     * Clears bufferiv
     *
     * @param { webgl.GLenum } buffer - Buffer
     * @param { webgl.GLint } drawbuffer - Draw buffer
     * @param { webgl.Int32List } values - Values
     * @param { webgl.GLuint } srcOffset - Source offset
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    clearBufferiv(
      buffer: webgl.GLenum,
      drawbuffer: webgl.GLint,
      values: webgl.Int32List,
      srcOffset?: webgl.GLuint,
    ): void;
    /**
     * Clears bufferuiv
     *
     * @param { webgl.GLenum } buffer - Buffer
     * @param { webgl.GLint } drawbuffer - Draw buffer
     * @param { Uint32List } values - Values
     * @param { webgl.GLuint } srcOffset - Source offset
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    clearBufferuiv(buffer: webgl.GLenum, drawbuffer: webgl.GLint, values: Uint32List, srcOffset?: webgl.GLuint): void;
    /**
     * Clears bufferfi
     *
     * @param { webgl.GLenum } buffer - Buffer
     * @param { webgl.GLint } drawbuffer - Draw buffer
     * @param { webgl.GLfloat } depth - Depth
     * @param { webgl.GLint } stencil - Stencil
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    clearBufferfi(buffer: webgl.GLenum, drawbuffer: webgl.GLint, depth: webgl.GLfloat, stencil: webgl.GLint): void;
    /**
     * Creates a query
     *
     * @returns { WebGLQuery | null } The created query
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    createQuery(): WebGLQuery | null;
    /**
     * Deletes a query
     *
     * @param { WebGLQuery | null } query - Query to delete
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    deleteQuery(query: WebGLQuery | null): void;
    /**
     * Returns whether a query is valid
     *
     * @param { WebGLQuery | null } query - Query
     * @returns { webgl.GLboolean } Whether the query is valid
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    isQuery(query: WebGLQuery | null): webgl.GLboolean;
    /**
     * Begins a query
     *
     * @param { webgl.GLenum } target - Target
     * @param { WebGLQuery } query - Query
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    beginQuery(target: webgl.GLenum, query: WebGLQuery): void;
    /**
     * Ends a query
     *
     * @param { webgl.GLenum } target - Target
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    endQuery(target: webgl.GLenum): void;
    /**
     * Gets a query
     *
     * @param { webgl.GLenum } target - Target
     * @param { webgl.GLenum } pname - Parameter name
     * @returns { WebGLQuery | null } The query
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    getQuery(target: webgl.GLenum, pname: webgl.GLenum): WebGLQuery | null;
    /**
     * Gets query parameter
     *
     * @param { WebGLQuery } query - Query
     * @param { webgl.GLenum } pname - Parameter name
     * @returns { any } Parameter value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    getQueryParameter(query: WebGLQuery, pname: webgl.GLenum): any;
    /**
     * Creates a sampler
     *
     * @returns { WebGLSampler | null } The created sampler
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    createSampler(): WebGLSampler | null;
    /**
     * Deletes a sampler
     *
     * @param { WebGLSampler | null } sampler - Sampler to delete
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    deleteSampler(sampler: WebGLSampler | null): void;
    /**
     * Returns whether a sampler is valid
     *
     * @param { WebGLSampler | null } sampler - Sampler
     * @returns { webgl.GLboolean } Whether the sampler is valid
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    isSampler(sampler: WebGLSampler | null): webgl.GLboolean;
    /**
     * Binds a sampler
     *
     * @param { webgl.GLuint } unit - Texture unit
     * @param { WebGLSampler | null } sampler - Sampler
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    bindSampler(unit: webgl.GLuint, sampler: WebGLSampler | null): void;
    /**
     * Sets sampler parameteri
     *
     * @param { WebGLSampler } sampler - Sampler
     * @param { webgl.GLenum } pname - Parameter name
     * @param { webgl.GLint } param - Parameter value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    samplerParameteri(sampler: WebGLSampler, pname: webgl.GLenum, param: webgl.GLint): void;
    /**
     * Sets sampler parameterf
     *
     * @param { WebGLSampler } sampler - Sampler
     * @param { webgl.GLenum } pname - Parameter name
     * @param { webgl.GLfloat } param - Parameter value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    samplerParameterf(sampler: WebGLSampler, pname: webgl.GLenum, param: webgl.GLfloat): void;
    /**
     * Gets sampler parameter
     *
     * @param { WebGLSampler } sampler - Sampler
     * @param { webgl.GLenum } pname - Parameter name
     * @returns { any } Parameter value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    getSamplerParameter(sampler: WebGLSampler, pname: webgl.GLenum): any;
    /**
     * Creates a sync object
     *
     * @param { webgl.GLenum } condition - Condition
     * @param { webgl.GLbitfield } flags - Flags
     * @returns { WebGLSync | null } The created sync object
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    fenceSync(condition: webgl.GLenum, flags: webgl.GLbitfield): WebGLSync | null;
    /**
     * Returns whether a sync object is valid
     *
     * @param { WebGLSync | null } sync - Sync object
     * @returns { webgl.GLboolean } Whether the sync is valid
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    isSync(sync: WebGLSync | null): webgl.GLboolean;
    /**
     * Deletes a sync object
     *
     * @param { WebGLSync | null } sync - Sync object to delete
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    deleteSync(sync: WebGLSync | null): void;
    /**
     * Client waits for sync object
     *
     * @param { WebGLSync } sync - Sync object
     * @param { webgl.GLbitfield } flags - Flags
     * @param { GLuint64 } timeout - Timeout
     * @returns { webgl.GLenum } Result
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    clientWaitSync(sync: WebGLSync, flags: webgl.GLbitfield, timeout: GLuint64 ): webgl.GLenum;
    /**
     * Waits for sync object
     *
     * @param { WebGLSync } sync - Sync object
     * @param { webgl.GLbitfield } flags - Flags
     * @param { GLint64 } timeout - Timeout
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    waitSync(sync: WebGLSync, flags: webgl.GLbitfield, timeout: GLint64): void;
    /**
     * Gets sync parameter
     *
     * @param { WebGLSync } sync - Sync object
     * @param { webgl.GLenum } pname - Parameter name
     * @returns { any } Parameter value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    getSyncParameter(sync: WebGLSync, pname: webgl.GLenum): any;
    /**
     * Creates a transform feedback object
     *
     * @returns { WebGLTransformFeedback | null } The created transform feedback
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    createTransformFeedback(): WebGLTransformFeedback | null;
    /**
     * Deletes a transform feedback object
     *
     * @param { WebGLTransformFeedback | null } tf - Transform feedback to delete
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    deleteTransformFeedback(tf: WebGLTransformFeedback | null): void;
    /**
     * Returns whether a transform feedback is valid
     *
     * @param { WebGLTransformFeedback | null } tf - Transform feedback
     * @returns { webgl.GLboolean } Whether the transform feedback is valid
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    isTransformFeedback(tf: WebGLTransformFeedback | null): webgl.GLboolean;
    /**
     * Binds a transform feedback
     *
     * @param { webgl.GLenum } target - Target
     * @param { WebGLTransformFeedback | null } tf - Transform feedback
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    bindTransformFeedback(target: webgl.GLenum, tf: WebGLTransformFeedback | null): void;
    /**
     * Begins transform feedback
     *
     * @param { webgl.GLenum } primitiveMode - Primitive mode
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    beginTransformFeedback(primitiveMode: webgl.GLenum): void;
    /**
     * Ends transform feedback
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    endTransformFeedback(): void;
    /**
     * Sets transform feedback varyings
     *
     * @param { webgl.WebGLProgram } program - Program
     * @param { string[] } varyings - Varyings
     * @param { webgl.GLenum } bufferMode - Buffer mode
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    transformFeedbackVaryings(program: webgl.WebGLProgram, varyings: string[], bufferMode: webgl.GLenum): void;
    /**
     * Gets transform feedback varying
     *
     * @param { webgl.WebGLProgram } program - Program
     * @param { webgl.GLuint } index - Index
     * @returns { webgl.WebGLActiveInfo | null } Active info
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    getTransformFeedbackVarying(program: webgl.WebGLProgram, index: webgl.GLuint): webgl.WebGLActiveInfo | null;
    /**
     * Pauses transform feedback
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    pauseTransformFeedback(): void;
    /**
     * Resumes transform feedback
     *
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    resumeTransformFeedback(): void;
    /**
     * Binds buffer base
     *
     * @param { webgl.GLenum } target - Target
     * @param { webgl.GLuint } index - Index
     * @param { webgl.WebGLBuffer | null } buffer - Buffer
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    bindBufferBase(target: webgl.GLenum, index: webgl.GLuint, buffer: webgl.WebGLBuffer | null): void;
    /**
     * Binds buffer range
     *
     * @param { webgl.GLenum } target - Target
     * @param { webgl.GLuint } index - Index
     * @param { webgl.WebGLBuffer | null } buffer - Buffer
     * @param { webgl.GLintptr } offset - Offset
     * @param { webgl.GLsizeiptr } size - Size
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    bindBufferRange(
      target: webgl.GLenum,
      index: webgl.GLuint,
      buffer: webgl.WebGLBuffer | null,
      offset: webgl.GLintptr,
      size: webgl.GLsizeiptr,
    ): void;
    /**
     * Gets indexed parameter
     *
     * @param { webgl.GLenum } target - Target
     * @param { webgl.GLuint } index - Index
     * @returns { any } Parameter value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    getIndexedParameter(target: webgl.GLenum, index: webgl.GLuint): any;
    /**
     * Gets uniform indices
     *
     * @param { webgl.WebGLProgram } program - Program
     * @param { string[] } uniformNames - Uniform names
     * @returns { webgl.GLuint[] | null } Uniform indices
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    getUniformIndices(program: webgl.WebGLProgram, uniformNames: string[]): webgl.GLuint[] | null;
    /**
     * Gets active uniforms
     *
     * @param { webgl.WebGLProgram } program - Program
     * @param { webgl.GLuint[] } uniformIndices - Uniform indices
     * @param { webgl.GLenum } pname - Parameter name
     * @returns { any } Parameter value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    getActiveUniforms(program: webgl.WebGLProgram, uniformIndices: webgl.GLuint[], pname: webgl.GLenum): any;
    /**
     * Gets uniform block index
     *
     * @param { webgl.WebGLProgram } program - Program
     * @param { string } uniformBlockName - Uniform block name
     * @returns { webgl.GLuint } Uniform block index
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    getUniformBlockIndex(program: webgl.WebGLProgram, uniformBlockName: string): webgl.GLuint;
    /**
     * Gets active uniform block parameter
     *
     * @param { webgl.WebGLProgram } program - Program
     * @param { webgl.GLuint } uniformBlockIndex - Uniform block index
     * @param { webgl.GLenum } pname - Parameter name
     * @returns { any } Parameter value
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    getActiveUniformBlockParameter(
      program: webgl.WebGLProgram,
      uniformBlockIndex: webgl.GLuint,
      pname: webgl.GLenum,
    ): any;
    /**
     * Gets active uniform block name
     *
     * @param { webgl.WebGLProgram } program - Program
     * @param { webgl.GLuint } uniformBlockIndex - Uniform block index
     * @returns { string | null } Uniform block name
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    getActiveUniformBlockName(program: webgl.WebGLProgram, uniformBlockIndex: webgl.GLuint): string | null;
    /**
     * Sets uniform block binding
     *
     * @param { webgl.WebGLProgram } program - Program
     * @param { webgl.GLuint } uniformBlockIndex - Uniform block index
     * @param { webgl.GLuint } uniformBlockBinding - Uniform block binding
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniformBlockBinding(
      program: webgl.WebGLProgram,
      uniformBlockIndex: webgl.GLuint,
      uniformBlockBinding: webgl.GLuint,
    ): void;
    /**
     * Creates a vertex array object
     *
     * @returns { WebGLVertexArrayObject | null } The created vertex array object
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    createVertexArray(): WebGLVertexArrayObject | null;
    /**
     * Deletes a vertex array object
     *
     * @param { WebGLVertexArrayObject | null } vertexArray - Vertex array to delete
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    deleteVertexArray(vertexArray: WebGLVertexArrayObject | null): void;
    /**
     * Returns whether a vertex array is valid
     *
     * @param { WebGLVertexArrayObject | null } vertexArray - Vertex array
     * @returns { webgl.GLboolean } Whether the vertex array is valid
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    isVertexArray(vertexArray: WebGLVertexArrayObject | null): webgl.GLboolean;
    /**
     * Binds a vertex array
     *
     * @param { WebGLVertexArrayObject | null } array - Vertex array
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    bindVertexArray(array: WebGLVertexArrayObject | null): void;
}
/**
 * WebGL 2.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
 * @famodelonly
 * @since 7 dynamiconly
 */
interface WebGL2RenderingContextOverloads {
    /**
     * Sets buffer data
     *
     * @param { webgl.GLenum } target - Buffer target
     * @param { webgl.GLsizeiptr } size - Buffer size
     * @param { webgl.GLenum } usage - Buffer usage
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    bufferData(target: webgl.GLenum, size: webgl.GLsizeiptr, usage: webgl.GLenum): void;
    /**
     * Sets buffer data from BufferSource
     *
     * @param { webgl.GLenum } target - Buffer target
     * @param { BufferSource | null } srcData - Buffer data
     * @param { webgl.GLenum } usage - Buffer usage
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    bufferData(target: webgl.GLenum, srcData: BufferSource | null, usage: webgl.GLenum): void;
    /**
     * Sets buffer sub data
     *
     * @param { webgl.GLenum } target - Buffer target
     * @param { webgl.GLintptr } dstByteOffset - Destination byte offset
     * @param { BufferSource } srcData - Source data
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    bufferSubData(target: webgl.GLenum, dstByteOffset: webgl.GLintptr, srcData: BufferSource): void;
    /**
     * Sets buffer data from ArrayBufferView with offset
     *
     * @param { webgl.GLenum } target - Buffer target
     * @param { ArrayBufferView } srcData - Source data
     * @param { webgl.GLenum } usage - Buffer usage
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } length - Length
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    bufferData(
      target: webgl.GLenum,
      srcData: ArrayBufferView,
      usage: webgl.GLenum,
      srcOffset: webgl.GLuint,
      length?: webgl.GLuint,
    ): void;
    /**
     * Sets buffer sub data with offset
     *
     * @param { webgl.GLenum } target - Buffer target
     * @param { webgl.GLintptr } dstByteOffset - Destination byte offset
     * @param { ArrayBufferView } srcData - Source data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } length - Length
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    bufferSubData(
      target: webgl.GLenum,
      dstByteOffset: webgl.GLintptr,
      srcData: ArrayBufferView,
      srcOffset: webgl.GLuint,
      length?: webgl.GLuint,
    ): void;
    /**
     * Sets texture image 2D from pixels
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLint } internalformat - Internal format
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLint } border - Border
     * @param { webgl.GLenum } format - Pixel format
     * @param { webgl.GLenum } type - Pixel type
     * @param { ArrayBufferView | null } pixels - Pixel data
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    texImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      border: webgl.GLint,
      format: webgl.GLenum,
      type: webgl.GLenum,
      pixels: ArrayBufferView | null,
    ): void;
    /**
     * Sets texture image 2D from TexImageSource
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLint } internalformat - Internal format
     * @param { webgl.GLenum } format - Pixel format
     * @param { webgl.GLenum } type - Pixel type
     * @param { webgl.TexImageSource } source - Image source
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    texImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLint,
      format: webgl.GLenum,
      type: webgl.GLenum,
      source: webgl.TexImageSource,
    ): void;
    /**
     * Sets texture sub image 2D from pixels
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLint } xoffset - X offset
     * @param { webgl.GLint } yoffset - Y offset
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLenum } format - Pixel format
     * @param { webgl.GLenum } type - Pixel type
     * @param { ArrayBufferView | null } pixels - Pixel data
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    texSubImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      pixels: ArrayBufferView | null,
    ): void;
    /**
     * Sets texture sub image 2D from TexImageSource
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLint } xoffset - X offset
     * @param { webgl.GLint } yoffset - Y offset
     * @param { webgl.GLenum } format - Pixel format
     * @param { webgl.GLenum } type - Pixel type
     * @param { webgl.TexImageSource } source - Image source
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    texSubImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      format: webgl.GLenum,
      type: webgl.GLenum,
      source: webgl.TexImageSource,
    ): void;
    /**
     * Sets texture image 2D from PBO offset
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLint } internalformat - Internal format
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLint } border - Border
     * @param { webgl.GLenum } format - Pixel format
     * @param { webgl.GLenum } type - Pixel type
     * @param { webgl.GLintptr } pboOffset - PBO offset
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    texImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      border: webgl.GLint,
      format: webgl.GLenum,
      type: webgl.GLenum,
      pboOffset: webgl.GLintptr,
    ): void;
    /**
     * Sets texture image 2D from TexImageSource
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLint } internalformat - Internal format
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLint } border - Border
     * @param { webgl.GLenum } format - Pixel format
     * @param { webgl.GLenum } type - Pixel type
     * @param { webgl.TexImageSource } source - Image source
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    texImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      border: webgl.GLint,
      format: webgl.GLenum,
      type: webgl.GLenum,
      source: webgl.TexImageSource,
    ): void;
    /**
     * Sets texture image 2D from ArrayBufferView with offset
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLint } internalformat - Internal format
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLint } border - Border
     * @param { webgl.GLenum } format - Pixel format
     * @param { webgl.GLenum } type - Pixel type
     * @param { ArrayBufferView } srcData - Source data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    texImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      border: webgl.GLint,
      format: webgl.GLenum,
      type: webgl.GLenum,
      srcData: ArrayBufferView,
      srcOffset: webgl.GLuint,
    ): void;
    /**
     * Sets texture sub image 2D from PBO offset
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLint } xoffset - X offset
     * @param { webgl.GLint } yoffset - Y offset
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLenum } format - Pixel format
     * @param { webgl.GLenum } type - Pixel type
     * @param { webgl.GLintptr } pboOffset - PBO offset
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    texSubImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      pboOffset: webgl.GLintptr,
    ): void;
    /**
     * Sets texture sub image 2D from TexImageSource
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLint } xoffset - X offset
     * @param { webgl.GLint } yoffset - Y offset
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLenum } format - Pixel format
     * @param { webgl.GLenum } type - Pixel type
     * @param { webgl.TexImageSource } source - Image source
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    texSubImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      source: webgl.TexImageSource,
    ): void;
    /**
     * Sets texture sub image 2D from ArrayBufferView with offset
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLint } xoffset - X offset
     * @param { webgl.GLint } yoffset - Y offset
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLenum } format - Pixel format
     * @param { webgl.GLenum } type - Pixel type
     * @param { ArrayBufferView } srcData - Source data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    texSubImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      srcData: ArrayBufferView,
      srcOffset: webgl.GLuint,
    ): void;
    /**
     * Compressed texture image 2D from PBO offset
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLenum } internalformat - Internal format
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLint } border - Border
     * @param { webgl.GLsizei } imageSize - Image size
     * @param { webgl.GLintptr } offset - Offset
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    compressedTexImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLenum,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      border: webgl.GLint,
      imageSize: webgl.GLsizei,
      offset: webgl.GLintptr,
    ): void;
    /**
     * Compressed texture image 2D from ArrayBufferView
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLenum } internalformat - Internal format
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLint } border - Border
     * @param { ArrayBufferView } srcData - Source data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } srcLengthOverride - Source length override
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    compressedTexImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      internalformat: webgl.GLenum,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      border: webgl.GLint,
      srcData: ArrayBufferView,
      srcOffset?: webgl.GLuint,
      srcLengthOverride?: webgl.GLuint,
    ): void;
    /**
     * Compressed texture sub image 2D from PBO offset
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLint } xoffset - X offset
     * @param { webgl.GLint } yoffset - Y offset
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLenum } format - Format
     * @param { webgl.GLsizei } imageSize - Image size
     * @param { webgl.GLintptr } offset - Offset
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    compressedTexSubImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      imageSize: webgl.GLsizei,
      offset: webgl.GLintptr,
    ): void;
    /**
     * Compressed texture sub image 2D from ArrayBufferView
     *
     * @param { webgl.GLenum } target - Texture target
     * @param { webgl.GLint } level - Mipmap level
     * @param { webgl.GLint } xoffset - X offset
     * @param { webgl.GLint } yoffset - Y offset
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLenum } format - Format
     * @param { ArrayBufferView } srcData - Source data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } srcLengthOverride - Source length override
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    compressedTexSubImage2D(
      target: webgl.GLenum,
      level: webgl.GLint,
      xoffset: webgl.GLint,
      yoffset: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      srcData: ArrayBufferView,
      srcOffset?: webgl.GLuint,
      srcLengthOverride?: webgl.GLuint,
    ): void;
    /**
     * Sets uniform1fv value
     *
     * @param { webgl.WebGLUniformLocation | null } location - Uniform location
     * @param { webgl.Float32List } data - Data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } srcLength - Source length
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform1fv(
      location: webgl.WebGLUniformLocation | null,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void;
    /**
     * Sets uniform2fv value
     *
     * @param { webgl.WebGLUniformLocation | null } location - Uniform location
     * @param { webgl.Float32List } data - Data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } srcLength - Source length
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform2fv(
      location: webgl.WebGLUniformLocation | null,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void;
    /**
     * Sets uniform3fv value
     *
     * @param { webgl.WebGLUniformLocation | null } location - Uniform location
     * @param { webgl.Float32List } data - Data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } srcLength - Source length
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform3fv(
      location: webgl.WebGLUniformLocation | null,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void;
    /**
     * Sets uniform4fv value
     *
     * @param { webgl.WebGLUniformLocation | null } location - Uniform location
     * @param { webgl.Float32List } data - Data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } srcLength - Source length
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform4fv(
      location: webgl.WebGLUniformLocation | null,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void;
    /**
     * Sets uniform1iv value
     *
     * @param { webgl.WebGLUniformLocation | null } location - Uniform location
     * @param { webgl.Int32List } data - Data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } srcLength - Source length
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform1iv(
      location: webgl.WebGLUniformLocation | null,
      data: webgl.Int32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void;
    /**
     * Sets uniform2iv value
     *
     * @param { webgl.WebGLUniformLocation | null } location - Uniform location
     * @param { webgl.Int32List } data - Data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } srcLength - Source length
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform2iv(
      location: webgl.WebGLUniformLocation | null,
      data: webgl.Int32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void;
    /**
     * Sets uniform3iv value
     *
     * @param { webgl.WebGLUniformLocation | null } location - Uniform location
     * @param { webgl.Int32List } data - Data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } srcLength - Source length
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform3iv(
      location: webgl.WebGLUniformLocation | null,
      data: webgl.Int32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void;
    /**
     * Sets uniform4iv value
     *
     * @param { webgl.WebGLUniformLocation | null } location - Uniform location
     * @param { webgl.Int32List } data - Data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } srcLength - Source length
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniform4iv(
      location: webgl.WebGLUniformLocation | null,
      data: webgl.Int32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void;
    /**
     * Sets uniformMatrix2fv value
     *
     * @param { webgl.WebGLUniformLocation | null } location - Uniform location
     * @param { webgl.GLboolean } transpose - Transpose
     * @param { webgl.Float32List } data - Data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } srcLength - Source length
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniformMatrix2fv(
      location: webgl.WebGLUniformLocation | null,
      transpose: webgl.GLboolean,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void;
    /**
     * Sets uniformMatrix3fv value
     *
     * @param { webgl.WebGLUniformLocation | null } location - Uniform location
     * @param { webgl.GLboolean } transpose - Transpose
     * @param { webgl.Float32List } data - Data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } srcLength - Source length
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniformMatrix3fv(
      location: webgl.WebGLUniformLocation | null,
      transpose: webgl.GLboolean,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void;
    /**
     * Sets uniformMatrix4fv value
     *
     * @param { webgl.WebGLUniformLocation | null } location - Uniform location
     * @param { webgl.GLboolean } transpose - Transpose
     * @param { webgl.Float32List } data - Data
     * @param { webgl.GLuint } srcOffset - Source offset
     * @param { webgl.GLuint } srcLength - Source length
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    uniformMatrix4fv(
      location: webgl.WebGLUniformLocation | null,
      transpose: webgl.GLboolean,
      data: webgl.Float32List,
      srcOffset?: webgl.GLuint,
      srcLength?: webgl.GLuint,
    ): void;
    /**
     * Reads pixels from the framebuffer to ArrayBufferView
     *
     * @param { webgl.GLint } x - X coordinate
     * @param { webgl.GLint } y - Y coordinate
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLenum } format - Pixel format
     * @param { webgl.GLenum } type - Pixel type
     * @param { ArrayBufferView | null } dstData - Destination data
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readPixels(
      x: webgl.GLint,
      y: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      dstData: ArrayBufferView | null,
    ): void;
    /**
     * Reads pixels from the framebuffer to PBO offset
     *
     * @param { webgl.GLint } x - X coordinate
     * @param { webgl.GLint } y - Y coordinate
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLenum } format - Pixel format
     * @param { webgl.GLenum } type - Pixel type
     * @param { webgl.GLintptr } offset - Offset
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readPixels(
      x: webgl.GLint,
      y: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      offset: webgl.GLintptr,
    ): void;
    /**
     * Reads pixels from the framebuffer to ArrayBufferView with offset
     *
     * @param { webgl.GLint } x - X coordinate
     * @param { webgl.GLint } y - Y coordinate
     * @param { webgl.GLsizei } width - Width
     * @param { webgl.GLsizei } height - Height
     * @param { webgl.GLenum } format - Pixel format
     * @param { webgl.GLenum } type - Pixel type
     * @param { ArrayBufferView } dstData - Destination data
     * @param { webgl.GLuint } dstOffset - Destination offset
     * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
     * @famodelonly
     * @since 7 dynamiconly
     */
    readPixels(
      x: webgl.GLint,
      y: webgl.GLint,
      width: webgl.GLsizei,
      height: webgl.GLsizei,
      format: webgl.GLenum,
      type: webgl.GLenum,
      dstData: ArrayBufferView,
      dstOffset: webgl.GLuint,
    ): void;
}
/**
 * WebGL 2.0
 *
 * @syscap SystemCapability.Graphic.Graphic2D.WebGL2
 * @famodelonly
 * @since 7 dynamiconly
 */
export interface WebGL2RenderingContext extends WebGL2RenderingContextBase, WebGL2RenderingContextOverloads,
  WebGLRenderingContextBase {
}
