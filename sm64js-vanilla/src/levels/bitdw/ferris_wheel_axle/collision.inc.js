// Bitdw

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x0700F7F0 - 0x0700F898
export const bitdw_seg7_collision_0700F7F0 = [
    COL_INIT(),
    COL_VERTEX_INIT(0xA),
    COL_VERTEX(0, 389, -50),
    COL_VERTEX(-101, 102, -50),
    COL_VERTEX(0, 0, 0),
    COL_VERTEX(102, 102, -50),
    COL_VERTEX(-388, 0, -50),
    COL_VERTEX(-101, -101, -50),
    COL_VERTEX(389, 0, -50),
    COL_VERTEX(102, -101, -50),
    COL_VERTEX(0, -388, -50),
    COL_VERTEX(0, 0, -101),
    COL_TRI_INIT(SURFACE_DEFAULT, 16),
    COL_TRI(0, 1, 2),
    COL_TRI(2, 3, 0),
    COL_TRI(2, 1, 4),
    COL_TRI(4, 5, 2),
    COL_TRI(6, 3, 2),
    COL_TRI(2, 7, 6),
    COL_TRI(8, 7, 2),
    COL_TRI(2, 5, 8),
    COL_TRI(0, 3, 9),
    COL_TRI(9, 3, 6),
    COL_TRI(6, 7, 9),
    COL_TRI(9, 7, 8),
    COL_TRI(4, 1, 9),
    COL_TRI(9, 1, 0),
    COL_TRI(8, 5, 9),
    COL_TRI(9, 5, 4),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 2021-05-28 06:03:18 -0700 (Convert.rb 2021-05-28 06:02:15 -0700)
