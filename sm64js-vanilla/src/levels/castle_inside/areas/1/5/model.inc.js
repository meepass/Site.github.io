

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPVertex, gsSP2Triangles,
    gsSPEndDisplayList, gsDPPipeSync, gsDPSetCombineMode, gsSPClearGeometryMode, gsDPSetTile,
    gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList, gsSPSetGeometryMode,
    G_IM_FMT_IA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CC_MODULATEIA,
    G_LIGHTING, G_CULL_BACK, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE,
    G_ON, G_TX_CLAMP, G_TEXTURE_IMAGE_FRAC, G_OFF, G_CC_SHADE
} from "../../../../../include/gbi"
import { texture_castle_light } from "../../../texture.inc"

const dl_castle_lobby_wing_cap_light_vertex_group = [
    [[ -1075,   1741,   -380], 0, [  -360,    -62], [0xff, 0xff, 0xff, 0x80]],
    [[ -1125,    -50,    461], 0, [   478,    990], [0xff, 0xff, 0xff, 0x80]],
    [[ -1279,    -50,    594], 0, [   612,    990], [0xff, 0xff, 0xff, 0x80]],
    [[ -1075,   1741,   -130], 0, [  -110,    -62], [0xff, 0xff, 0xff, 0x80]],
    [[  -921,    -50,    973], 0, [   990,    990], [0xff, 0xff, 0xff, 0x80]],
    [[  -968,   1741,   -130], 0, [  -110,    -62], [0xff, 0xff, 0xff, 0x80]],
    [[  -767,    -50,    819], 0, [   836,    990], [0xff, 0xff, 0xff, 0x80]],
    [[  -896,   1741,   -201], 0, [  -180,    -62], [0xff, 0xff, 0xff, 0x80]],
    [[ -1125,    -50,    973], 0, [   990,    990], [0xff, 0xff, 0xff, 0x80]],
    [[  -767,    -50,    614], 0, [   632,    990], [0xff, 0xff, 0xff, 0x80]],
    [[  -896,   1741,   -309], 0, [  -288,    -62], [0xff, 0xff, 0xff, 0x80]],
    [[  -921,    -50,    461], 0, [   478,    990], [0xff, 0xff, 0xff, 0x80]],
    [[  -968,   1741,   -380], 0, [  -360,    -62], [0xff, 0xff, 0xff, 0x80]],
    [[ -1147,   1741,   -201], 0, [  -180,    -62], [0xff, 0xff, 0xff, 0x80]],
    [[ -1147,   1741,   -309], 0, [  -288,    -62], [0xff, 0xff, 0xff, 0x80]],
    [[ -1279,    -50,    819], 0, [   836,    990], [0xff, 0xff, 0xff, 0x80]],
];

const dl_castle_lobby_wing_cap_light_model = [
    gsDPSetTextureImage(G_IM_FMT_IA, G_IM_SIZ_16b, 1, texture_castle_light),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(dl_castle_lobby_wing_cap_light_vertex_group, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 5,  4,  6, 0x0,  5,  6,  7, 0x0),
    gsSP2Triangles( 3,  8,  4, 0x0,  7,  6,  9, 0x0),
    gsSP2Triangles( 7,  9, 10, 0x0, 10,  9, 11, 0x0),
    gsSP2Triangles(10, 11, 12, 0x0, 12, 11,  1, 0x0),
    gsSP2Triangles(12,  1,  0, 0x0, 13,  8,  3, 0x0),
    gsSP2Triangles( 0,  2, 14, 0x0, 14,  2, 15, 0x0),
    gsSP2Triangles(14, 15, 13, 0x0, 13, 15,  8, 0x0),
    gsSPEndDisplayList(),
].flat();

export const dl_castle_lobby_wing_cap_light = [
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_MODULATEIA, G_CC_MODULATEIA),
    gsSPClearGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsDPSetTile(G_IM_FMT_IA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_IA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(dl_castle_lobby_wing_cap_light_model),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsSPEndDisplayList(),
].flat();

// 1621726940 - 2021-05-22 16:42:23 -0700
