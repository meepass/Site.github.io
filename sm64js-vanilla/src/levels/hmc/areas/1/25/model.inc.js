// 0x0701E958 - 0x0701EA58

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPVertex, gsSP2Triangles, gsSP1Triangle,
    gsSPEndDisplayList, gsDPPipeSync, gsDPSetCycleType, gsDPSetRenderMode, gsDPSetDepthSource,
    gsDPSetFogColor, gsSPFogPosition, gsSPSetGeometryMode, gsDPSetCombineMode,
    gsSPClearGeometryMode, gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize,
    gsSPDisplayList,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CYC_2CYCLE,
    G_RM_FOG_SHADE_A, G_RM_AA_ZB_TEX_EDGE2, G_ZS_PIXEL, G_FOG, G_CC_DECALRGBA, G_CC_PASS2,
    G_LIGHTING, G_CULL_BACK, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE,
    G_ON, G_TEXTURE_IMAGE_FRAC, G_TX_CLAMP, G_OFF, G_CYC_1CYCLE, G_RM_AA_ZB_TEX_EDGE, G_RM_NOOP2,
    G_CC_SHADE
} from "../../../../../include/gbi"
import {
    cave_09001000, cave_09003000
} from "../../../../../textures/cave"

const hmc_seg7_vertex_0701E958 = [
    [[ -1391,  -4587,   6251], 0, [  6156,   1102], [0xff, 0xff, 0xff, 0xff]],
    [[ -1822,  -4484,   5893], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -1749,  -4587,   5893], 0, [   536,   1102], [0xff, 0xff, 0xff, 0xff]],
    [[ -1779,   1843,  -6545], 0, [ 16358,  10186], [0xff, 0xff, 0xff, 0xff]],
    [[ -1779,   2867,  -6545], 0, [ 16358,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2830,   2867,  -7807], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2830,   1843,  -7807], 0, [     0,  10186], [0xff, 0xff, 0xff, 0xff]],
    [[ -1209,  -4484,   5281], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[  -851,  -4587,   5712], 0, [  6156,   1102], [0xff, 0xff, 0xff, 0xff]],
    [[ -1209,  -4587,   5353], 0, [   536,   1102], [0xff, 0xff, 0xff, 0xff]],
    [[  -815,  -4484,   5676], 0, [  6156,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -1749,  -4587,   5893], 0, [  9000,   1102], [0xff, 0xff, 0xff, 0xff]],
    [[ -1822,  -4484,   5893], 0, [  9568,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -4290,   -511,  -5769], 0, [  7158,   1028], [0xff, 0xff, 0xff, 0xff]],
    [[ -4290,   -511,  -7285], 0, [     0,   1028], [0xff, 0xff, 0xff, 0xff]],
    [[ -4290,   -204,  -7285], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x0701EA58 - 0x0701EB38
const hmc_seg7_vertex_0701EA58 = [
    [[ -1391,  -4587,   6251], 0, [  6156,   1102], [0xff, 0xff, 0xff, 0xff]],
    [[ -1427,  -4484,   6288], 0, [  6156,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -1822,  -4484,   5893], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -1209,  -4484,   5281], 0, [  3034,   4518], [0xff, 0xff, 0xff, 0xff]],
    [[ -1822,  -4484,   5893], 0, [  3034,  -4120], [0xff, 0xff, 0xff, 0xff]],
    [[ -1427,  -4484,   6288], 0, [ -2534,  -4120], [0xff, 0xff, 0xff, 0xff]],
    [[  -815,  -4484,   5676], 0, [ -2534,   4518], [0xff, 0xff, 0xff, 0xff]],
    [[ -2774,   -511,  -5769], 0, [  7158,   1028], [0xff, 0xff, 0xff, 0xff]],
    [[ -4290,   -511,  -5769], 0, [     0,   1028], [0xff, 0xff, 0xff, 0xff]],
    [[ -4290,   -204,  -5769], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2774,   -204,  -5769], 0, [  7158,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -4290,   -511,  -5769], 0, [  7158,   1028], [0xff, 0xff, 0xff, 0xff]],
    [[ -4290,   -204,  -7285], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -4290,   -204,  -5769], 0, [  7158,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x0701EB38 - 0x0701EC28
const hmc_seg7_vertex_0701EB38 = [
    [[ -2774,    819,  -7285], 0, [  7158,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -4290,    512,  -7285], 0, [     0,   1028], [0xff, 0xff, 0xff, 0xff]],
    [[ -2774,    512,  -7285], 0, [  7158,   1028], [0xff, 0xff, 0xff, 0xff]],
    [[ -2774,   -204,  -7285], 0, [  7158,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -4290,   -204,  -7285], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -4290,   -511,  -7285], 0, [     0,   1028], [0xff, 0xff, 0xff, 0xff]],
    [[ -2774,   -511,  -7285], 0, [  7158,   1028], [0xff, 0xff, 0xff, 0xff]],
    [[ -2774,   -204,  -5769], 0, [  7158,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2774,   -511,  -7285], 0, [     0,   1028], [0xff, 0xff, 0xff, 0xff]],
    [[ -2774,   -511,  -5769], 0, [  7158,   1028], [0xff, 0xff, 0xff, 0xff]],
    [[ -2774,   -204,  -7285], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2774,    819,  -5769], 0, [  7158,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2774,    512,  -7285], 0, [     0,   1028], [0xff, 0xff, 0xff, 0xff]],
    [[ -2774,    512,  -5769], 0, [  7158,   1028], [0xff, 0xff, 0xff, 0xff]],
    [[ -2774,    819,  -7285], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x0701EC28 - 0x0701ED28
const hmc_seg7_vertex_0701EC28 = [
    [[ -2774,   1434,  -5769], 0, [  7158,   1028], [0xff, 0xff, 0xff, 0xff]],
    [[ -4290,   1741,  -5769], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2774,   1741,  -5769], 0, [  7158,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2774,    819,  -7285], 0, [  7158,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -4290,    819,  -7285], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -4290,    512,  -7285], 0, [     0,   1028], [0xff, 0xff, 0xff, 0xff]],
    [[ -4290,    512,  -5769], 0, [  7158,   1028], [0xff, 0xff, 0xff, 0xff]],
    [[ -4290,    819,  -5769], 0, [  7158,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2774,    512,  -5769], 0, [  7158,   1028], [0xff, 0xff, 0xff, 0xff]],
    [[ -4290,    512,  -5769], 0, [     0,   1028], [0xff, 0xff, 0xff, 0xff]],
    [[ -4290,    819,  -5769], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2774,    819,  -5769], 0, [  7158,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -4290,   1434,  -5769], 0, [     0,   1028], [0xff, 0xff, 0xff, 0xff]],
    [[ -4290,   1434,  -5769], 0, [  7158,   1028], [0xff, 0xff, 0xff, 0xff]],
    [[ -4290,   1741,  -7285], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -4290,   1741,  -5769], 0, [  7158,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x0701ED28 - 0x0701EDB8
const hmc_seg7_vertex_0701ED28 = [
    [[ -4290,   1434,  -5769], 0, [  7158,   1028], [0xff, 0xff, 0xff, 0xff]],
    [[ -4290,   1434,  -7285], 0, [     0,   1028], [0xff, 0xff, 0xff, 0xff]],
    [[ -4290,   1741,  -7285], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2774,   1741,  -7285], 0, [  7158,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2774,   1434,  -7285], 0, [  7158,   1028], [0xff, 0xff, 0xff, 0xff]],
    [[ -2774,   1741,  -5769], 0, [  7158,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2774,   1434,  -7285], 0, [     0,   1028], [0xff, 0xff, 0xff, 0xff]],
    [[ -2774,   1434,  -5769], 0, [  7158,   1028], [0xff, 0xff, 0xff, 0xff]],
    [[ -2774,   1741,  -7285], 0, [     0,      0], [0xff, 0xff, 0xff, 0xff]],
];

// 0x0701EDB8 - 0x0701EEB8
const hmc_seg7_vertex_0701EDB8 = [
    [[ -4477,  -4587,   3950], 0, [ 26110,    990], [0xff, 0xff, 0xff, 0xff]],
    [[ -4367,  -4279,   3245], 0, [ 23224,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -4477,  -4587,   3167], 0, [ 23074,    990], [0xff, 0xff, 0xff, 0xff]],
    [[ -4367,  -4279,   3872], 0, [ 25992,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -3845,  -4279,   2723], 0, [ 19852,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -3923,  -4587,   2613], 0, [ 19976,    990], [0xff, 0xff, 0xff, 0xff]],
    [[ -3219,  -4279,   2723], 0, [ 16964,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -3140,  -4587,   2613], 0, [ 16826,    990], [0xff, 0xff, 0xff, 0xff]],
    [[ -2587,  -4587,   3167], 0, [ 13682,    990], [0xff, 0xff, 0xff, 0xff]],
    [[ -2696,  -4279,   3245], 0, [ 13534,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -2587,  -4587,   3950], 0, [ 10586,    990], [0xff, 0xff, 0xff, 0xff]],
    [[ -2696,  -4279,   3872], 0, [ 10702,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -3219,  -4279,   4394], 0, [  7418,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -3140,  -4587,   4503], 0, [  7558,    990], [0xff, 0xff, 0xff, 0xff]],
    [[ -3845,  -4279,   4394], 0, [  4700,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -3923,  -4587,   4503], 0, [  4570,    990], [0xff, 0xff, 0xff, 0xff]],
];

// 0x0701EEB8 - 0x0701EF78
const hmc_seg7_vertex_0701EEB8 = [
    [[ -4367,  -4279,   3872], 0, [  1464,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -3923,  -4587,   4503], 0, [  4570,    990], [0xff, 0xff, 0xff, 0xff]],
    [[ -3845,  -4279,   4394], 0, [  4700,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -4477,  -4587,   3950], 0, [  1582,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  -819,  -4279,   5665], 0, [ -3606,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   563,  -4279,   5596], 0, [-13860,      0], [0xff, 0xff, 0xff, 0xff]],
    [[   563,  -4535,   5596], 0, [-13860,    990], [0xff, 0xff, 0xff, 0xff]],
    [[  -819,  -4535,   5665], 0, [ -3606,    990], [0xff, 0xff, 0xff, 0xff]],
    [[ -1437,  -4279,   6283], 0, [  5110,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -1437,  -4535,   6283], 0, [  5110,    990], [0xff, 0xff, 0xff, 0xff]],
    [[ -1494,  -4279,   7654], 0, [ 15190,      0], [0xff, 0xff, 0xff, 0xff]],
    [[ -1494,  -4535,   7654], 0, [ 15190,    990], [0xff, 0xff, 0xff, 0xff]],
];

// 0x0701EF78 - 0x0701F0D0
const hmc_seg7_dl_0701EF78 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, cave_09001000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(hmc_seg7_vertex_0701E958, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7, 10,  8, 0x0, 11, 12,  9, 0x0),
    gsSP2Triangles(12,  7,  9, 0x0, 13, 14, 15, 0x0),
    gsSPVertex(hmc_seg7_vertex_0701EA58, 14, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7,  9, 10, 0x0, 11, 12, 13, 0x0),
    gsSPVertex(hmc_seg7_vertex_0701EB38, 15, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
    gsSP1Triangle(11, 14, 12, 0x0),
    gsSPVertex(hmc_seg7_vertex_0701EC28, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  4,  7, 0x0,  6,  5,  4, 0x0),
    gsSP2Triangles( 8,  9, 10, 0x0,  8, 10, 11, 0x0),
    gsSP2Triangles( 0, 12,  1, 0x0, 13, 14, 15, 0x0),
    gsSPVertex(hmc_seg7_vertex_0701ED28, 9, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  1,  4, 0x0),
    gsSP2Triangles( 3,  2,  1, 0x0,  5,  6,  7, 0x0),
    gsSP1Triangle( 5,  8,  6, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x0701F0D0 - 0x0701F1B0
const hmc_seg7_dl_0701F0D0 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, cave_09003000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(hmc_seg7_vertex_0701EDB8, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 2,  1,  4, 0x0,  2,  4,  5, 0x0),
    gsSP2Triangles( 5,  4,  6, 0x0,  5,  6,  7, 0x0),
    gsSP2Triangles( 7,  6,  8, 0x0,  6,  9,  8, 0x0),
    gsSP2Triangles( 9, 10,  8, 0x0,  9, 11, 10, 0x0),
    gsSP2Triangles(12, 13, 11, 0x0, 13, 10, 11, 0x0),
    gsSP2Triangles(13, 14, 15, 0x0, 13, 12, 14, 0x0),
    gsSPVertex(hmc_seg7_vertex_0701EEB8, 12, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    gsSP2Triangles( 7,  8,  4, 0x0,  7,  9,  8, 0x0),
    gsSP2Triangles( 9, 10,  8, 0x0,  9, 11, 10, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x0701F1B0 - 0x0701F288
export const hmc_seg7_dl_0701F1B0 = [
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_2CYCLE),
    gsDPSetRenderMode(G_RM_FOG_SHADE_A, G_RM_AA_ZB_TEX_EDGE2),
    gsDPSetDepthSource(G_ZS_PIXEL),
    gsDPSetFogColor(0, 0, 0, 255),
    gsSPFogPosition(960, 1000),
    gsSPSetGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_DECALRGBA, G_CC_PASS2),
    gsSPClearGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(hmc_seg7_dl_0701EF78),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(hmc_seg7_dl_0701F0D0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_1CYCLE),
    gsDPSetRenderMode(G_RM_AA_ZB_TEX_EDGE, G_RM_NOOP2),
    gsSPClearGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING | G_CULL_BACK),
    gsSPEndDisplayList(),
].flat();

// 2021-06-14 16:20:25 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
