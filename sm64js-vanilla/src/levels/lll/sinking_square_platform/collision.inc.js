// Lll

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x0701D450 - 0x0701D510
export const lll_seg7_collision_sinking_pyramids = [
    COL_INIT(),
    COL_VERTEX_INIT(0xE),
    COL_VERTEX(0, 0, -1023),
    COL_VERTEX(-1, 0, 0),
    COL_VERTEX(514, 41, -511),
    COL_VERTEX(1024, 0, 0),
    COL_VERTEX(1024, 0, -1023),
    COL_VERTEX(514, 41, 512),
    COL_VERTEX(0, 0, 0),
    COL_VERTEX(1024, 0, 1024),
    COL_VERTEX(0, 0, 1024),
    COL_VERTEX(-509, 41, -511),
    COL_VERTEX(-1023, 0, 0),
    COL_VERTEX(-1023, 0, -1023),
    COL_VERTEX(-1023, 0, 1024),
    COL_VERTEX(-509, 41, 512),
    COL_TRI_INIT(SURFACE_DEFAULT, 16),
    COL_TRI(10, 12, 13),
    COL_TRI(0, 1, 2),
    COL_TRI(1, 3, 2),
    COL_TRI(4, 2, 3),
    COL_TRI(5, 3, 6),
    COL_TRI(7, 3, 5),
    COL_TRI(4, 0, 2),
    COL_TRI(8, 5, 6),
    COL_TRI(8, 7, 5),
    COL_TRI(9, 10, 1),
    COL_TRI(11, 10, 9),
    COL_TRI(0, 11, 9),
    COL_TRI(12, 8, 13),
    COL_TRI(13, 8, 6),
    COL_TRI(10, 13, 6),
    COL_TRI(0, 9, 1),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-07-08 16:08:31 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
