// 0x07024CD8 - 0x07024DC8

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPVertex, gsSP2Triangles, gsSP1Triangle,
    gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode, gsDPSetTile,
    gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_IA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATEIA,
    G_LIGHTING, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TX_CLAMP, G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../../../include/gbi"
import { lll_seg7_texture_0700D200 } from "../../../texture.inc"

const lll_seg7_vertex_07024CD8 = [
    [[ -2912,   4617,    781], 0, [  2523,    479], [0xff, 0xff, 0xff, 0xff]],
    [[ -2132,   5248,   2133], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2132,   4617,   2133], 0, [     0,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  -780,   4617,  -2892], 0, [  2523,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  -780,   5248,  -2892], 0, [  2523,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2132,   5248,  -2132], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2132,   4617,  -2132], 0, [     0,    479], [0xff, 0xff, 0xff, 0xff]],
    [[ -2132,   4617,  -2132], 0, [  2523,    479], [0xff, 0xff, 0xff, 0xff]],
    [[ -2132,   5248,  -2132], 0, [  2523,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2912,   5248,   -780], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2912,   4617,   -780], 0, [     0,    479], [0xff, 0xff, 0xff, 0xff]],
    [[ -2912,   4617,   -780], 0, [  2523,    479], [0xff, 0xff, 0xff, 0xff]],
    [[ -2912,   5248,   -780], 0, [  2523,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2912,   5248,    781], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2912,   4617,    781], 0, [     0,    479], [0xff, 0xff, 0xff, 0xff]],
];

// 0x07024DC8 - 0x07024EB8
const lll_seg7_vertex_07024DC8 = [
    [[   781,   4617,   2913], 0, [  2523,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  2133,   5248,   2133], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2133,   4617,   2133], 0, [     0,    479], [0xff, 0xff, 0xff, 0xff]],
    [[ -2912,   4617,    781], 0, [  2523,    479], [0xff, 0xff, 0xff, 0xff]],
    [[ -2912,   5248,    781], 0, [  2523,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2132,   5248,   2133], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2132,   4617,   2133], 0, [  2523,    479], [0xff, 0xff, 0xff, 0xff]],
    [[ -2132,   5248,   2133], 0, [  2523,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -780,   5248,   2913], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -780,   4617,   2913], 0, [     0,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  -780,   4617,   2913], 0, [  2523,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  -780,   5248,   2913], 0, [  2523,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   781,   5248,   2913], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   781,   4617,   2913], 0, [     0,    479], [0xff, 0xff, 0xff, 0xff]],
    [[   781,   5248,   2913], 0, [  2523,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x07024EB8 - 0x07024FA8
const lll_seg7_vertex_07024EB8 = [
    [[  2913,   4617,   -780], 0, [  2523,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  2913,   5248,   -780], 0, [  2523,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2133,   5248,  -2132], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2133,   4617,   2133], 0, [  2523,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  2133,   5248,   2133], 0, [  2523,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2913,   5248,    781], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2913,   4617,    781], 0, [     0,    479], [0xff, 0xff, 0xff, 0xff]],
    [[   781,   4617,  -2892], 0, [  2523,    479], [0xff, 0xff, 0xff, 0xff]],
    [[   781,   5248,  -2892], 0, [  2523,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -780,   5248,  -2892], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -780,   4617,  -2892], 0, [     0,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  2133,   4617,  -2132], 0, [  2523,    479], [0xff, 0xff, 0xff, 0xff]],
    [[   781,   5248,  -2892], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   781,   4617,  -2892], 0, [     0,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  2133,   5248,  -2132], 0, [  2523,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x07024FA8 - 0x07025098
const lll_seg7_vertex_07024FA8 = [
    [[  -780,   -204,  -2912], 0, [  4567,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   781,   -204,  -2912], 0, [ -3223,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   781,   -101,  -2912], 0, [ -3223,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  2913,   4617,   -780], 0, [  2523,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  2133,   5248,  -2132], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2133,   4617,  -2132], 0, [     0,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  2386,   5248,   -475], 0, [   963,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2913,   5248,   -780], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2913,   4617,   -780], 0, [     0,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  2386,   4617,   -475], 0, [   963,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  2913,   4617,    781], 0, [  2012,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  2913,   5248,    781], 0, [  2012,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2386,   5248,   -475], 0, [  -218,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2386,   4617,   -475], 0, [  -218,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  -780,   -101,  -2912], 0, [  4567,    479], [0xff, 0xff, 0xff, 0xff]],
];

// 0x07025098 - 0x07025188
const lll_seg7_vertex_07025098 = [
    [[ -2132,   -101,  -2132], 0, [  4056,    479], [0xff, 0xff, 0xff, 0xff]],
    [[ -2132,   -204,  -2132], 0, [  4056,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -780,   -204,  -2912], 0, [ -3734,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2133,   -101,   2133], 0, [  4056,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  2133,   -204,   2133], 0, [  4056,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   781,   -204,   2913], 0, [ -3734,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   781,   -101,   2913], 0, [ -3734,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  2913,   -101,    781], 0, [  4056,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  2913,   -204,    781], 0, [  4056,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2133,   -204,   2133], 0, [ -3734,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2133,   -101,   2133], 0, [ -3734,    479], [0xff, 0xff, 0xff, 0xff]],
    [[   781,   -101,  -2912], 0, [  4056,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  2126,   -204,  -2136], 0, [ -3695,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2111,   -101,  -2144], 0, [ -3611,    479], [0xff, 0xff, 0xff, 0xff]],
    [[   781,   -204,  -2912], 0, [  4056,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x07025188 - 0x07025278
const lll_seg7_vertex_07025188 = [
    [[ -2132,   -101,   2133], 0, [  4056,    479], [0xff, 0xff, 0xff, 0xff]],
    [[ -2912,   -204,    781], 0, [ -3734,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2912,   -101,    781], 0, [ -3734,    479], [0xff, 0xff, 0xff, 0xff]],
    [[ -2132,   -101,  -2132], 0, [  4056,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  -780,   -204,  -2912], 0, [ -3734,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -780,   -101,  -2912], 0, [ -3734,    479], [0xff, 0xff, 0xff, 0xff]],
    [[ -2912,   -101,   -780], 0, [  4567,    479], [0xff, 0xff, 0xff, 0xff]],
    [[ -2912,   -204,   -780], 0, [  4567,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2132,   -204,  -2132], 0, [ -3223,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2132,   -101,  -2132], 0, [ -3223,    479], [0xff, 0xff, 0xff, 0xff]],
    [[ -2912,   -101,    781], 0, [  4056,    479], [0xff, 0xff, 0xff, 0xff]],
    [[ -2912,   -204,    781], 0, [  4056,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2912,   -204,   -780], 0, [ -3734,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2912,   -101,   -780], 0, [ -3734,    479], [0xff, 0xff, 0xff, 0xff]],
    [[ -2132,   -204,   2133], 0, [  4056,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x07025278 - 0x07025378
const lll_seg7_vertex_07025278 = [
    [[  1966,   -204,  -1704], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2111,   -101,  -2144], 0, [  2162,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  2126,   -204,  -2136], 0, [  2162,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -780,   -101,   2913], 0, [  4056,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  -780,   -204,   2913], 0, [  4056,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2132,   -204,   2133], 0, [ -3734,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2132,   -101,   2133], 0, [ -3734,    479], [0xff, 0xff, 0xff, 0xff]],
    [[   781,   -101,   2913], 0, [  4567,    479], [0xff, 0xff, 0xff, 0xff]],
    [[   781,   -204,   2913], 0, [  4567,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -780,   -204,   2913], 0, [ -3223,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -780,   -101,   2913], 0, [ -3223,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  1936,   -101,  -1692], 0, [   -90,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  2576,   -204,   -686], 0, [ -5111,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2913,   -204,    781], 0, [ -5312,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2571,   -101,   -655], 0, [  1857,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  2576,   -204,   -686], 0, [  2012,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x07025378 - 0x070253D8
const lll_seg7_vertex_07025378 = [
    [[  2576,   -204,   -686], 0, [ -5111,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2571,   -101,   -655], 0, [ -5265,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  1936,   -101,  -1692], 0, [   -90,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  2913,   -204,    781], 0, [ -5312,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2913,   -101,    781], 0, [ -5312,    479], [0xff, 0xff, 0xff, 0xff]],
    [[  2571,   -101,   -655], 0, [  1857,    479], [0xff, 0xff, 0xff, 0xff]],
];

// 0x070253D8 - 0x070255D8
const lll_seg7_dl_070253D8 = [
    gsDPSetTextureImage(G_IM_FMT_IA, G_IM_SIZ_16b, 1, lll_seg7_texture_0700D200),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 16 * 16 - 1, CALC_DXT(16, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(lll_seg7_vertex_07024CD8, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(11, 13, 14, 0x0),
    gsSPVertex(lll_seg7_vertex_07024DC8, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
    gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
    gsSP1Triangle( 0, 14,  1, 0x0),
    gsSPVertex(lll_seg7_vertex_07024EB8, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(11, 14, 12, 0x0),
    gsSPVertex(lll_seg7_vertex_07024FA8, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  9,  6,  8, 0x0),
    gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
    gsSP1Triangle( 0,  2, 14, 0x0),
    gsSPVertex(lll_seg7_vertex_07025098, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(11, 14, 12, 0x0),
    gsSPVertex(lll_seg7_vertex_07025188, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
    gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
    gsSP1Triangle( 0, 14,  1, 0x0),
    gsSPVertex(lll_seg7_vertex_07025278, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7,  9, 10, 0x0,  0, 11,  1, 0x0),
    gsSP2Triangles(12, 11,  0, 0x0, 13, 14, 15, 0x0),
    gsSPVertex(lll_seg7_vertex_07025378, 6, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x070255D8 - 0x07025648
export const lll_seg7_dl_070255D8 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATEIA, G_CC_MODULATEIA),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetTile(G_IM_FMT_IA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_IA, G_IM_SIZ_16b, 4, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 4, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 4, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (16 - 1) << G_TEXTURE_IMAGE_FRAC, (16 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(lll_seg7_dl_070253D8),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING),
    gsSPEndDisplayList(),
].flat();

// 2021-07-08 16:08:31 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
