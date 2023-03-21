// Hmc

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../../../include/surface_terrains"

// 0x0702B65C - 0x0702B6E0
export const hmc_seg7_collision_0702B65C = [
#ifdef VERSION_JP
    COL_INIT(),
    COL_VERTEX_INIT(0x8),
    COL_VERTEX(410, 0, 51),
    COL_VERTEX(410, 819, -50),
    COL_VERTEX(410, 819, 51),
    COL_VERTEX(0, 819, 51),
    COL_VERTEX(0, 0, 51),
    COL_VERTEX(0, 819, -50),
    COL_VERTEX(410, 0, -50),
    COL_VERTEX(0, 0, -50),
    COL_TRI_INIT(SURFACE_DEFAULT, 12),
    COL_TRI(0, 1, 2),
    COL_TRI(2, 3, 4),
    COL_TRI(2, 4, 0),
    COL_TRI(2, 1, 5),
    COL_TRI(2, 5, 3),
    COL_TRI(6, 5, 1),
    COL_TRI(0, 6, 1),
    COL_TRI(6, 7, 5),
    COL_TRI(3, 5, 7),
    COL_TRI(3, 7, 4),
    COL_TRI(4, 7, 6),
    COL_TRI(4, 6, 0),
    COL_TRI_STOP(),
    COL_END(),
#else
    COL_INIT(),
    COL_VERTEX_INIT(0x8),
    COL_VERTEX(410, 0, 51),
    COL_VERTEX(410, 719, -50),
    COL_VERTEX(410, 719, 51),
    COL_VERTEX(0, 719, 51),
    COL_VERTEX(0, 0, 51),
    COL_VERTEX(0, 719, -50),
    COL_VERTEX(410, 0, -50),
    COL_VERTEX(0, 0, -50),
    COL_TRI_INIT(SURFACE_DEFAULT, 12),
    COL_TRI(0, 1, 2),
    COL_TRI(2, 3, 4),
    COL_TRI(2, 4, 0),
    COL_TRI(2, 1, 5),
    COL_TRI(2, 5, 3),
    COL_TRI(6, 5, 1),
    COL_TRI(0, 6, 1),
    COL_TRI(6, 7, 5),
    COL_TRI(3, 5, 7),
    COL_TRI(3, 7, 4),
    COL_TRI(4, 7, 6),
    COL_TRI(4, 6, 0),
    COL_TRI_STOP(),
    COL_END(),
#endif
].flat();

// 2021-06-14 16:20:25 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
