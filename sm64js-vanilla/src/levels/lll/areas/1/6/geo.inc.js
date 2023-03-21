// Lll

import {
    GEO_CULLING_RADIUS, GEO_OPEN_NODE, GEO_DISPLAY_LIST, GEO_CLOSE_NODE, GEO_END,
    LAYER_OPAQUE
} from "../../../../../engine/GeoLayout"

import { lll_seg7_dl_07014BD8 } from "./model.inc"

// 0x0E000A10
export const lll_geo_000A10 = () => {return [
    GEO_CULLING_RADIUS(1200),
    GEO_OPEN_NODE(),
        GEO_DISPLAY_LIST(LAYER_OPAQUE, lll_seg7_dl_07014BD8),
    GEO_CLOSE_NODE(),
    GEO_END(),
]};

// 2021-07-08 16:08:31 -0400 (Convert.rb 2021-06-14 09:43:28 -0400)
