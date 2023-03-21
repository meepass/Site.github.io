// Bitfs

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../../../engine/GeoLayout"

import { bitfs_seg7_dl_07007958 } from "./model.inc"

// 0x0E000570
export const bitfs_geo_000570 = () => {return [
    GEO_CULLING_RADIUS(500),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, bitfs_seg7_dl_07007958),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-07-09 10:07:11 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
