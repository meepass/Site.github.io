// 0x0700F5C8 - 0x0700F6B8

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPVertex, gsSP2Triangles, gsSP1Triangle,
    gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode, gsDPSetTile,
    gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_DECALRGBA,
    G_LIGHTING, G_CULL_BACK, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE,
    G_ON, G_TX_CLAMP, G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../../../include/gbi"
import { spooky_09008000 } from "../../../../../textures/spooky"

const bbh_seg7_vertex_0700F5C8 = [
    [[  2130,      0,  -1248], 0, [  2216,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2130,    102,   -306], 0, [ -7184,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2130,      0,   -306], 0, [ -7184,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2683,      0,   1024], 0, [ 13050,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2683,    102,   1024], 0, [ 13050,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2683,    102,   -286], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2683,      0,   -286], 0, [     0,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2683,    102,   -286], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2765,    102,   -286], 0, [   172,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2765,      0,   -286], 0, [   172,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2683,      0,   -286], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  3174,    102,   -286], 0, [ -3914,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  3584,    102,   -286], 0, [ -8002,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  3584,      0,   -286], 0, [ -8002,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  3174,      0,   -286], 0, [ -3914,    990], [0xff, 0xff, 0xff, 0xff]],
];

// 0x0700F6B8 - 0x0700F7A8
const bbh_seg7_vertex_0700F6B8 = [
    [[  2130,      0,  -1248], 0, [ -5344,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2765,    102,  -1248], 0, [   990,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2130,    102,  -1248], 0, [ -5344,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2130,      0,  -1248], 0, [  2216,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  2130,    102,  -1248], 0, [  2216,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2130,    102,   -306], 0, [ -7184,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  3256,      0,  -1535], 0, [  5078,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  3256,    102,  -1535], 0, [  5078,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  3256,    102,  -1248], 0, [  2216,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  3256,      0,  -1248], 0, [  2216,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  3174,      0,  -1248], 0, [  5078,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  3256,      0,  -1248], 0, [  5896,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  3256,    102,  -1248], 0, [  5896,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  3174,    102,  -1248], 0, [  5078,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  2765,      0,  -1248], 0, [   990,    990], [0xff, 0xff, 0xff, 0xff]],
];

// 0x0700F7A8 - 0x0700F848
const bbh_seg7_dl_0700F7A8 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, spooky_09008000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(bbh_seg7_vertex_0700F5C8, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(11, 13, 14, 0x0),
    gsSPVertex(bbh_seg7_vertex_0700F6B8, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  7,  8, 0x0,  6,  8,  9, 0x0),
    gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
    gsSP1Triangle( 0, 14,  1, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x0700F848 - 0x0700F8B8
export const bbh_seg7_dl_0700F848 = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_DECALRGBA, G_CC_DECALRGBA),
    gsSPClearGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(bbh_seg7_dl_0700F7A8),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsSPEndDisplayList(),
].flat();

// 2021-05-29 19:32:09 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
