// 0x070010B0 - 0x070011B0

import {
    gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPVertex, gsSP2Triangles, gsSP1Triangle,
    gsSPEndDisplayList, gsDPPipeSync, gsDPSetCycleType, gsDPSetRenderMode, gsDPSetDepthSource,
    gsDPSetFogColor, gsSPFogPosition, gsSPSetGeometryMode, gsDPSetCombineMode,
    gsSPClearGeometryMode, gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize,
    gsSPDisplayList,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CYC_2CYCLE,
    G_RM_FOG_SHADE_A, G_RM_AA_ZB_OPA_SURF2, G_ZS_PIXEL, G_FOG, G_CC_MODULATERGB, G_CC_PASS2,
    G_LIGHTING, G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON,
    G_TEXTURE_IMAGE_FRAC, G_OFF, G_CYC_1CYCLE, G_RM_AA_ZB_OPA_SURF, G_RM_NOOP2, G_CC_SHADE
} from "../../../../../include/gbi"
import { bowser_2_seg7_texture_07000000 } from "../../../texture.inc"

import { fire_09005800 } from "../../../../../textures/fire"

const bowser_2_seg7_vertex_070010B0 = [
    [[  6546,   -511,   2618], 0, [  4910,    248], [0xff, 0xff, 0xff, 0xff]],
    [[  6480,  -3071,  -2776], 0, [  8112,    772], [0xff, 0xff, 0xff, 0xff]],
    [[  6480,   -511,  -2776], 0, [  8100,    232], [0xff, 0xff, 0xff, 0xff]],
    [[ -6545,   -511,  -2617], 0, [ 17484,    232], [0xff, 0xff, 0xff, 0xff]],
    [[ -6545,  -3071,  -2617], 0, [ 17472,    772], [0xff, 0xff, 0xff, 0xff]],
    [[ -6479,  -3071,   2777], 0, [ 20664,    790], [0xff, 0xff, 0xff, 0xff]],
    [[ -6479,   -511,   2777], 0, [ 20676,    248], [0xff, 0xff, 0xff, 0xff]],
    [[ -2776,   -511,  -6479], 0, [ 14348,    220], [0xff, 0xff, 0xff, 0xff]],
    [[ -2617,  -3071,   6546], 0, [ 23924,    800], [0xff, 0xff, 0xff, 0xff]],
    [[ -2617,   -511,   6546], 0, [ 23930,    260], [0xff, 0xff, 0xff, 0xff]],
    [[ -2776,  -3071,  -6479], 0, [ 14342,    762], [0xff, 0xff, 0xff, 0xff]],
    [[  2618,   -511,  -6545], 0, [ 11236,    220], [0xff, 0xff, 0xff, 0xff]],
    [[  2618,  -3071,  -6545], 0, [ 11240,    762], [0xff, 0xff, 0xff, 0xff]],
    [[ -2776,   -511,  -6479], 0, [   782,   1298], [0xff, 0xff, 0xff, 0xff]],
    [[  2777,   -511,   6480], 0, [ -1526,  -4090], [0xff, 0xff, 0xff, 0xff]],
    [[  6546,   -511,   2618], 0, [ -3092,  -2484], [0xff, 0xff, 0xff, 0xff]],
];

// 0x070011B0 - 0x070012B0
const bowser_2_seg7_vertex_070011B0 = [
    [[  6546,   -511,   2618], 0, [  4910,    248], [0xff, 0xff, 0xff, 0xff]],
    [[  6546,  -3071,   2618], 0, [  4924,    788], [0xff, 0xff, 0xff, 0xff]],
    [[  6480,  -3071,  -2776], 0, [  8112,    772], [0xff, 0xff, 0xff, 0xff]],
    [[  2777,   -511,   6480], 0, [  1658,    260], [0xff, 0xff, 0xff, 0xff]],
    [[  2777,  -3071,   6480], 0, [  1664,    800], [0xff, 0xff, 0xff, 0xff]],
    [[ -2617,   -511,   6546], 0, [ 23930,    260], [0xff, 0xff, 0xff, 0xff]],
    [[ -2617,  -3071,   6546], 0, [ 23924,    800], [0xff, 0xff, 0xff, 0xff]],
    [[  2777,  -3071,   6480], 0, [ 27214,    800], [0xff, 0xff, 0xff, 0xff]],
    [[  2777,   -511,   6480], 0, [ 27208,    260], [0xff, 0xff, 0xff, 0xff]],
    [[ -2776,   -511,  -6479], 0, [   782,   1298], [0xff, 0xff, 0xff, 0xff]],
    [[ -6545,   -511,  -2617], 0, [  2350,   -306], [0xff, 0xff, 0xff, 0xff]],
    [[ -6479,   -511,   2777], 0, [  2322,  -2550], [0xff, 0xff, 0xff, 0xff]],
    [[ -2617,   -511,   6546], 0, [   716,  -4116], [0xff, 0xff, 0xff, 0xff]],
    [[  2777,   -511,   6480], 0, [ -1526,  -4090], [0xff, 0xff, 0xff, 0xff]],
    [[  6546,   -511,   2618], 0, [ -3092,  -2484], [0xff, 0xff, 0xff, 0xff]],
    [[  6480,   -511,  -2776], 0, [ -3066,   -240], [0xff, 0xff, 0xff, 0xff]],
];

// 0x070012B0 - 0x070012E0
const bowser_2_seg7_vertex_070012B0 = [
    [[ -2776,   -511,  -6479], 0, [   782,   1298], [0xff, 0xff, 0xff, 0xff]],
    [[  6480,   -511,  -2776], 0, [ -3066,   -240], [0xff, 0xff, 0xff, 0xff]],
    [[  2618,   -511,  -6545], 0, [ -1460,   1326], [0xff, 0xff, 0xff, 0xff]],
];

// 0x070012E0 - 0x070013E0
const bowser_2_seg7_vertex_070012E0 = [
    [[ -3512,   -511,   -889], 0, [  -356,    984], [0xfd, 0x42, 0x34, 0xff]],
    [[ -3159,   -511,   -886], 0, [  -360,    440], [0xfd, 0x42, 0x34, 0xff]],
    [[ -3323,    399,  -1105], 0, [   -26,    692], [0xfd, 0x42, 0x34, 0xff]],
    [[  1240,   -511,  -5279], 0, [  -356,    984], [0xfd, 0x42, 0x34, 0xff]],
    [[  1593,   -511,  -5276], 0, [  -360,    440], [0xfd, 0x42, 0x34, 0xff]],
    [[  1429,    399,  -5496], 0, [   -26,    692], [0xfd, 0x42, 0x34, 0xff]],
    [[  1152,   -511,  -5616], 0, [   160,   1116], [0xfd, 0x42, 0x34, 0xff]],
    [[  1732,   -511,  -5615], 0, [   158,    228], [0xfd, 0x42, 0x34, 0xff]],
    [[  1344,   -511,  -5811], 0, [   458,    824], [0xfd, 0x42, 0x34, 0xff]],
    [[ -3407,   -511,   3474], 0, [   458,    824], [0xfd, 0x42, 0x34, 0xff]],
    [[ -3600,   -511,   3669], 0, [   160,   1116], [0xfd, 0x42, 0x34, 0xff]],
    [[ -3322,    399,   3790], 0, [   -26,    692], [0xfd, 0x42, 0x34, 0xff]],
    [[ -3511,   -511,   4006], 0, [  -356,    984], [0xfd, 0x42, 0x34, 0xff]],
    [[ -3158,   -511,   4009], 0, [  -360,    440], [0xfd, 0x42, 0x34, 0xff]],
    [[ -3019,   -511,   3670], 0, [   158,    228], [0xfd, 0x42, 0x34, 0xff]],
    [[ -3021,   -511,  -1224], 0, [   158,    228], [0xfd, 0x42, 0x34, 0xff]],
];

// 0x070013E0 - 0x070014E0
const bowser_2_seg7_vertex_070013E0 = [
    [[ -3021,   -511,  -1224], 0, [   158,    228], [0xfd, 0x42, 0x34, 0xff]],
    [[ -3408,   -511,  -1420], 0, [   458,    824], [0xfd, 0x42, 0x34, 0xff]],
    [[ -3323,    399,  -1105], 0, [   -26,    692], [0xfd, 0x42, 0x34, 0xff]],
    [[ -3601,   -511,  -1226], 0, [   160,   1116], [0xfd, 0x42, 0x34, 0xff]],
    [[ -3512,   -511,   -889], 0, [  -356,    984], [0xfd, 0x42, 0x34, 0xff]],
    [[  4200,   -511,   -835], 0, [   160,   1116], [0xfd, 0x42, 0x34, 0xff]],
    [[  4288,   -511,   -498], 0, [  -356,    984], [0xfd, 0x42, 0x34, 0xff]],
    [[  4478,    399,   -715], 0, [   -26,    692], [0xfd, 0x42, 0x34, 0xff]],
    [[  4392,   -511,  -1030], 0, [   458,    824], [0xfd, 0x42, 0x34, 0xff]],
    [[  4642,   -511,   -495], 0, [  -360,    440], [0xfd, 0x42, 0x34, 0xff]],
    [[  4780,   -511,   -834], 0, [   158,    228], [0xfd, 0x42, 0x34, 0xff]],
    [[  2820,   -511,   2679], 0, [   160,   1116], [0xfd, 0x42, 0x34, 0xff]],
    [[  2909,   -511,   3016], 0, [  -356,    984], [0xfd, 0x42, 0x34, 0xff]],
    [[  3098,    399,   2799], 0, [   -26,    692], [0xfd, 0x42, 0x34, 0xff]],
    [[  3262,   -511,   3019], 0, [  -360,    440], [0xfd, 0x42, 0x34, 0xff]],
    [[  3400,   -511,   2680], 0, [   158,    228], [0xfd, 0x42, 0x34, 0xff]],
];

// 0x070014E0 - 0x070015E0
const bowser_2_seg7_vertex_070014E0 = [
    [[  3013,   -511,   2484], 0, [   458,    824], [0xfd, 0x42, 0x34, 0xff]],
    [[  2820,   -511,   2679], 0, [   160,   1116], [0xfd, 0x42, 0x34, 0xff]],
    [[  3098,    399,   2799], 0, [   -26,    692], [0xfd, 0x42, 0x34, 0xff]],
    [[  3400,   -511,   2680], 0, [   158,    228], [0xfd, 0x42, 0x34, 0xff]],
    [[  -130,   -511,  -4068], 0, [   762,    860], [0xfd, 0x42, 0x34, 0xff]],
    [[  -426,   -511,  -3769], 0, [   464,    564], [0xfd, 0x42, 0x34, 0xff]],
    [[     0,   1229,  -3583], 0, [   278,    990], [0xfd, 0x42, 0x34, 0xff]],
    [[  -290,   -511,  -3250], 0, [   -52,    700], [0xfd, 0x42, 0x34, 0xff]],
    [[   253,   -511,  -3245], 0, [   -56,   1242], [0xfd, 0x42, 0x34, 0xff]],
    [[   465,   -511,  -3767], 0, [   462,   1454], [0xfd, 0x42, 0x34, 0xff]],
    [[  -126,   -511,   3113], 0, [   324,    450], [0xfd, 0x42, 0x34, 0xff]],
    [[  -422,   -511,   3412], 0, [   326,    748], [0xfd, 0x42, 0x34, 0xff]],
    [[     4,   1229,   3598], 0, [   632,    628], [0xfd, 0x42, 0x34, 0xff]],
    [[  -286,   -511,   3931], 0, [   652,    938], [0xfd, 0x42, 0x34, 0xff]],
    [[   256,   -511,   3936], 0, [   926,    670], [0xfd, 0x42, 0x34, 0xff]],
    [[   469,   -511,   3415], 0, [   772,    304], [0xfd, 0x42, 0x34, 0xff]],
];

// 0x070015E0 - 0x070016A0
const bowser_2_seg7_vertex_070015E0 = [
    [[  3453,   -511,   -484], 0, [   458,    824], [0xfd, 0x42, 0x34, 0xff]],
    [[  3157,   -511,   -185], 0, [   160,   1116], [0xfd, 0x42, 0x34, 0xff]],
    [[  3584,   1229,      0], 0, [   -26,    692], [0xfd, 0x42, 0x34, 0xff]],
    [[  3293,   -511,    333], 0, [  -356,    984], [0xfd, 0x42, 0x34, 0xff]],
    [[  3837,   -511,    338], 0, [  -360,    440], [0xfd, 0x42, 0x34, 0xff]],
    [[  4049,   -511,   -183], 0, [   158,    228], [0xfd, 0x42, 0x34, 0xff]],
    [[ -3714,   -511,   -484], 0, [  -516,    396], [0xfd, 0x42, 0x34, 0xff]],
    [[ -4010,   -511,   -185], 0, [  -218,    692], [0xfd, 0x42, 0x34, 0xff]],
    [[ -3583,   1229,      0], 0, [     0,    266], [0xfd, 0x42, 0x34, 0xff]],
    [[ -3874,   -511,    333], 0, [   298,    556], [0xfd, 0x42, 0x34, 0xff]],
    [[ -3118,   -511,   -183], 0, [  -216,   -198], [0xfd, 0x42, 0x34, 0xff]],
    [[ -3330,   -511,    338], 0, [   302,     14], [0xfd, 0x42, 0x34, 0xff]],
];

// 0x070016A0 - 0x07001788
const bowser_2_seg7_dl_070016A0 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, bowser_2_seg7_texture_07000000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(bowser_2_seg7_vertex_070010B0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  5,  6, 0x0,  7,  4,  3, 0x0),
    gsSP2Triangles( 6,  5,  8, 0x0,  6,  8,  9, 0x0),
    gsSP2Triangles( 7, 10,  4, 0x0, 11, 10,  7, 0x0),
    gsSP2Triangles(11, 12, 10, 0x0,  2, 12, 11, 0x0),
    gsSP2Triangles( 2,  1, 12, 0x0, 13, 14, 15, 0x0),
    gsSPVertex(bowser_2_seg7_vertex_070011B0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  1,  0, 0x0),
    gsSP2Triangles( 3,  4,  1, 0x0,  5,  6,  7, 0x0),
    gsSP2Triangles( 5,  7,  8, 0x0,  9, 10, 11, 0x0),
    gsSP2Triangles( 9, 11, 12, 0x0,  9, 12, 13, 0x0),
    gsSP1Triangle( 9, 14, 15, 0x0),
    gsSPVertex(bowser_2_seg7_vertex_070012B0, 3, 0),
    gsSP1Triangle( 0,  1,  2, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07001788 - 0x07001930
const bowser_2_seg7_dl_07001788 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, fire_09005800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(bowser_2_seg7_vertex_070012E0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 6,  3,  5, 0x0,  4,  7,  5, 0x0),
    gsSP2Triangles( 7,  8,  5, 0x0,  8,  6,  5, 0x0),
    gsSP2Triangles( 9, 10, 11, 0x0, 10, 12, 11, 0x0),
    gsSP2Triangles(12, 13, 11, 0x0, 14,  9, 11, 0x0),
    gsSP2Triangles(13, 14, 11, 0x0,  1, 15,  2, 0x0),
    gsSPVertex(bowser_2_seg7_vertex_070013E0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
    gsSP2Triangles( 3,  4,  2, 0x0,  5,  6,  7, 0x0),
    gsSP2Triangles( 8,  5,  7, 0x0,  6,  9,  7, 0x0),
    gsSP2Triangles( 9, 10,  7, 0x0, 10,  8,  7, 0x0),
    gsSP2Triangles(11, 12, 13, 0x0, 12, 14, 13, 0x0),
    gsSP1Triangle(14, 15, 13, 0x0),
    gsSPVertex(bowser_2_seg7_vertex_070014E0, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  5,  7,  6, 0x0),
    gsSP2Triangles( 7,  8,  6, 0x0,  8,  9,  6, 0x0),
    gsSP2Triangles( 9,  4,  6, 0x0, 10, 11, 12, 0x0),
    gsSP2Triangles(11, 13, 12, 0x0, 13, 14, 12, 0x0),
    gsSP2Triangles(15, 10, 12, 0x0, 14, 15, 12, 0x0),
    gsSPVertex(bowser_2_seg7_vertex_070015E0, 12, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  1,  3,  2, 0x0),
    gsSP2Triangles( 3,  4,  2, 0x0,  4,  5,  2, 0x0),
    gsSP2Triangles( 5,  0,  2, 0x0,  6,  7,  8, 0x0),
    gsSP2Triangles( 7,  9,  8, 0x0, 10,  6,  8, 0x0),
    gsSP2Triangles(11, 10,  8, 0x0,  9, 11,  8, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x07001930 - 0x070019F0
export const bowser_2_seg7_dl_07001930 = [
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_2CYCLE),
    gsDPSetRenderMode(G_RM_FOG_SHADE_A, G_RM_AA_ZB_OPA_SURF2),
    gsDPSetDepthSource(G_ZS_PIXEL),
    gsDPSetFogColor(200, 50, 0, 255),
    gsSPFogPosition(960, 1000),
    gsSPSetGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_PASS2),
    gsSPClearGeometryMode(G_LIGHTING),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(bowser_2_seg7_dl_070016A0),
    gsSPDisplayList(bowser_2_seg7_dl_07001788),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_1CYCLE),
    gsDPSetRenderMode(G_RM_AA_ZB_OPA_SURF, G_RM_NOOP2),
    gsSPClearGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPSetGeometryMode(G_LIGHTING),
    gsSPEndDisplayList(),
].flat();

// 2021-08-02 18:37:25 -0400 (Convert.rb 2021-07-22 11:15:52 -0400)
