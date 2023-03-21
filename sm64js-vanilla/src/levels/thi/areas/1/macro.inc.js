// Thi

import {
    MACRO_OBJECT_WITH_BEH_PARAM, MACRO_OBJECT, MACRO_OBJECT_END
} from "../../../../game/MacroSpecialObjects"
import {
    DIALOG_091, DIALOG_165, DIALOG_166
} from "../../../../text/us/dialogs"


// 0x0700DD50 - 0x0700DEE2
export const thi_seg7_area_1_macro_objs = [
    MACRO_OBJECT_WITH_BEH_PARAM(/*preset*/ 'macro_cannon_closed',        /*yaw*/   0, /*pos*/  6656, -2832,  6964, /*behParam*/ 0x80),
    MACRO_OBJECT(/*preset*/ 'macro_coin_line_horizontal', /*yaw*/   0, /*pos*/   870,  -502,  2828),
    MACRO_OBJECT(/*preset*/ 'macro_hidden_1up_in_pole',   /*yaw*/   0, /*pos*/  4800,  -110,  2250),
    MACRO_OBJECT_WITH_BEH_PARAM(/*preset*/ 'macro_wooden_signpost',      /*yaw*/  90, /*pos*/  6728, -2559,  1561, /*behParam*/ DIALOG_091),
    MACRO_OBJECT(/*preset*/ 'macro_coin_line_horizontal', /*yaw*/  90, /*pos*/   -66, -1637, -4944),
    //MACRO_OBJECT(/*preset*/ 'macro_huge_goomba',          /*yaw*/   0, /*pos*/  7069, -1535, -4758),
    //MACRO_OBJECT(/*preset*/ 'macro_huge_goomba',          /*yaw*/   0, /*pos*/  7177, -1535, -3522),
    MACRO_OBJECT(/*preset*/ 'macro_coin_line_horizontal', /*yaw*/   0, /*pos*/  5711, -1677, -2944),
    MACRO_OBJECT(/*preset*/ 'macro_yellow_coin_2',        /*yaw*/   0, /*pos*/ -1200, -1540,  1150),
    MACRO_OBJECT(/*preset*/ 'macro_yellow_coin_2',        /*yaw*/   0, /*pos*/  -250, -1540,  1150),
    MACRO_OBJECT(/*preset*/ 'macro_hidden_1up_trigger',   /*yaw*/   0, /*pos*/ -1200, -1540,  1150),
    MACRO_OBJECT(/*preset*/ 'macro_hidden_1up_trigger',   /*yaw*/   0, /*pos*/  -250, -1550,  1150),
    MACRO_OBJECT_WITH_BEH_PARAM(/*preset*/ 'macro_hidden_1up',           /*yaw*/   0, /*pos*/  -777, -1544,  1233, /*behParam*/ 2),
    //MACRO_OBJECT(/*preset*/ 'macro_huge_goomba',          /*yaw*/   0, /*pos*/  4600, -1544,  3455),
    //MACRO_OBJECT(/*preset*/ 'macro_huge_goomba',          /*yaw*/   0, /*pos*/  3444,  -522,  3011),
    //MACRO_OBJECT(/*preset*/ 'macro_huge_goomba',          /*yaw*/   0, /*pos*/ -3622,  -511,  3100),
    MACRO_OBJECT(/*preset*/ 'macro_coin_line_horizontal', /*yaw*/   0, /*pos*/ -4911,  -395, -1433),
    MACRO_OBJECT(/*preset*/ 'macro_coin_line_horizontal', /*yaw*/  90, /*pos*/   199,  2233,   433),
    //MACRO_OBJECT(/*preset*/ 'macro_huge_goomba',          /*yaw*/   0, /*pos*/ -3177,  1255, -2366),
    MACRO_OBJECT(/*preset*/ 'macro_chuckya',              /*yaw*/   0, /*pos*/ -1800,  2233,  -322),
    MACRO_OBJECT(/*preset*/ 'macro_fish_group',           /*yaw*/   0, /*pos*/ -6222, -3400, -1455),
    MACRO_OBJECT(/*preset*/ 'macro_enemy_lakitu',         /*yaw*/   0, /*pos*/ -1905, -2223,  6541),
    MACRO_OBJECT(/*preset*/ 'macro_fire_fly_guy',         /*yaw*/   0, /*pos*/ -1911,     0, -5822),
    MACRO_OBJECT(/*preset*/ 'macro_fire_fly_guy',         /*yaw*/   0, /*pos*/  6493, -2186,  5189),
    MACRO_OBJECT(/*preset*/ 'macro_1up',                  /*yaw*/   0, /*pos*/ -6000, -3566, -1320),
    MACRO_OBJECT(/*preset*/ 'macro_fish_group',           /*yaw*/   0, /*pos*/ -6550, -3450,  4100),
    MACRO_OBJECT(/*preset*/ 'macro_fish_group',           /*yaw*/   0, /*pos*/ -1750, -3450,  7800),
    MACRO_OBJECT(/*preset*/ 'macro_fish_group',           /*yaw*/   0, /*pos*/  1950, -3500,  7600),
    MACRO_OBJECT(/*preset*/ 'macro_box_1up_running_away', /*yaw*/   0, /*pos*/ -5712, -2190,  1100),
    MACRO_OBJECT(/*preset*/ 'macro_box_1up_running_away', /*yaw*/   0, /*pos*/  6022, -1722,  -633),
    MACRO_OBJECT(/*preset*/ 'macro_wooden_post',          /*yaw*/   0, /*pos*/ -5822, -2969,  5822),
    MACRO_OBJECT_WITH_BEH_PARAM(/*preset*/ 'macro_wooden_signpost',      /*yaw*/  90, /*pos*/  -886, -2559,  6655, /*behParam*/ DIALOG_165),
    MACRO_OBJECT_WITH_BEH_PARAM(/*preset*/ 'macro_wooden_signpost',      /*yaw*/   0, /*pos*/ -2370,  -511,  2320, /*behParam*/ DIALOG_166),
    MACRO_OBJECT(/*preset*/ 'macro_box_star_2',           /*yaw*/   0, /*pos*/  2600,  3500, -2400),
    //MACRO_OBJECT(/*preset*/ 'macro_huge_goomba',          /*yaw*/   0, /*pos*/ -3180,  -511,  2080),
    MACRO_OBJECT(/*preset*/ 'macro_fly_guy',              /*yaw*/   0, /*pos*/  -300, -2340,  3940),
    MACRO_OBJECT(/*preset*/ 'macro_wooden_post',          /*yaw*/   0, /*pos*/  -520, -2560,  6660),
    MACRO_OBJECT(/*preset*/ 'macro_koopa',                /*yaw*/   0, /*pos*/  -800, -2236,  3080),
    MACRO_OBJECT(/*preset*/ 'macro_butterfly_triplet',    /*yaw*/   0, /*pos*/ -3111,  -511,  2400),
    MACRO_OBJECT(/*preset*/ 'macro_butterfly_triplet',    /*yaw*/   0, /*pos*/  4844,  -533,  2266),
    MACRO_OBJECT_END(),
]; //goombas commented out due to uncaught attack type when stomping them

// 2021-05-31 09:29:31 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
