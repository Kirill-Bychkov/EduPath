const EDUCATION = {
  theory: require('../assets/icons/theory.png'),
  question: require('../assets/icons/question.png'),
  back: require('../assets/icons/back.png'),
  index: require("../assets/icons/index.png"),
  game: require("../assets/icons/game.png"),
  progress: require("../assets/icons/progress.png"),
  settings: require("../assets/icons/settings.png"),
  dark_mode: require("../assets/icons/dark_mode.png"),
  light_mode: require("../assets/icons/light_mode.png"),
  volume_on: require("../assets/icons/volume_on.png"),
  volume_off: require("../assets/icons/volume_off.png"),
  help: require("../assets/icons/help.png")
};

const GAME = {
  level_buttons: {
    1: {
      source: require("../assets/icons/game/level_1/level_1.png"),
      top: 1114,
      left: 133,
      width: 98,
      height: 110,
      position: "absolute",
      zIndex: 1
    },
    2: {
      source: require("../assets/icons/game/level_2/level_2.png"),
      top: 912.97,
      left: 72.2,
      width: 101,
      height: 109,
      position: "absolute",
      zIndex: 1
    },
    3: {
      source: require("../assets/icons/game/level_3/level_3.png"),
      top: 728,
      left: 258,
      width: 109,
      height: 95,
      position: "absolute",
      zIndex: 1
    },
    4: {
      source: require("../assets/icons/game/level_4/level_4.png"),
      top: 482,
      left: 101,
      width: 108,
      height: 102,
      position: "absolute",
      zIndex: 1
    },
    5: {
      source: require("../assets/icons/game/level_5/level_5.png"),
      top: 208,
      left: 191,
      width: 105,
      height: 106,
      position: "absolute",
      zIndex: 1
    }
  },
  buttons: {
    b_back_training: {
      source: require("../assets/icons/game/b_back_training/b_back_training.png"),
      top: 0,
      left: 340,
      width: 73,
      height: 62,
      position: "absolute",
      zIndex: 1
    },
    b_close: {
      source: require("../assets/icons/game/b_close/b_close.png"),
      width: 32,
      height: 32
    },
    b_start: {
      source: require("../assets/icons/game/b_start/b_start.png"),
      width: 80,
      height: 42
    },
    b_exit: {
      source: require("../assets/icons/game/b_exit/b_exit.png"),
      width: 50,
      height: 42
    },
    b_task: {
      source: require("../assets/icons/game/b_task/b_task.png"),
      width: 70,
      height: 42
    },
    b_task_mark: {
      source: require("../assets/icons/game/b_task_mark/b_task_mark.png"),
      width: 70,
      height: 42
    },
    b_clear: {
      source: require("../assets/icons/game/b_clear/b_clear.png"),
      width: 50,
      height: 42
    },
    b_copy: {
      source: require("../assets/icons/game/b_copy/b_copy.png"),
      width: 50,
      height: 42
    },
    b_run: {
      source: require("../assets/icons/game/b_run/b_run.png"),
      width: 70,
      height: 42
    },
    b_stop: {
      source: require("../assets/icons/game/b_stop/b_stop.png"),
      width: 70,
      height: 42
    }
  },
  menu_images: {
    lawn_start: {
      source: require("../assets/icons/game/lawn/lawn.png"),
      top: 1344,
      left: 0,
      width: 412,
      height: 84,
      position: "absolute"
    },
    lawn_end: {
      source: require("../assets/icons/game/lawn/lawn.png"),
      top: 0,
      left: 0,
      width: 412,
      height: 84,
      transform: [{ rotate: "180deg" }],
      position: "absolute"
    },
    forest_path_01: {
      source: require("../assets/icons/game/forest_path_01/forest_path_01.png"),
      top: 1150,
      left: 175,
      width: 151,
      height: 198,
      position: "absolute"
    },
    forest_path_12: {
      source: require("../assets/icons/game/forest_path_12/forest_path_12.png"),
      top: 960,
      left: 29,
      width: 118,
      height: 240,
      position: "absolute"
    },
    forest_path_23: {
      source: require("../assets/icons/game/forest_path_23/forest_path_23.png"),
      top: 800,
      left: 115,
      width: 213,
      height: 144,
      position: "absolute"
    },
    forest_path_34: {
      source: require("../assets/icons/game/forest_path_34/forest_path_34.png"),
      top: 544,
      left: 155,
      width: 177,
      height: 194,
      position: "absolute"
    },
    forest_path_45: {
      source: require("../assets/icons/game/forest_path_45/forest_path_45.png"),
      top: 296,
      left: 67,
      width: 186,
      height: 236,
      position: "absolute"
    },
    forest_path_50: {
      source: require("../assets/icons/game/forest_path_50/forest_path_50.png"),
      top: 80,
      left: 171,
      width: 136,
      height: 178,
      position: "absolute"
    },
    flowers_1: {
      source: require("../assets/icons/game/flowers/flowers.png"),
      top: 416,
      left: 129,
      width: 62,
      height: 47,
      position: "absolute"
    },
    flowers_2: {
      source: require("../assets/icons/game/flowers/flowers.png"),
      top: 90,
      left: 284,
      width: 62,
      height: 47,
      position: "absolute"
    },
    stump: {
      source: require("../assets/icons/game/stump/stump.png"),
      top: 301,
      left: 127,
      width: 55,
      height: 43,
      position: "absolute"
    },
    tree_1: {
      source: require("../assets/icons/game/tree_1/tree_1.png"),
      top: 613,
      left: 12,
      width: 250,
      height: 242,
      position: "absolute"
    },
    tree_2: {
      source: require("../assets/icons/game/tree_2/tree_2.png"),
      top: 304,
      left: 222,
      width: 180,
      height: 293,
      position: "absolute"
    },
    christmas_trees_1: {
      source: require("../assets/icons/game/christmas_trees_1/christmas_trees_1.png"),
      top: 1143,
      left: 7,
      width: 181,
      height: 194,
      position: "absolute"
    },
    christmas_trees_2: {
      source: require("../assets/icons/game/christmas_trees_2/christmas_trees_2.png"),
      top: 889,
      left: 163,
      width: 227,
      height: 234,
      position: "absolute"
    },
    christmas_tree: {
      source: require("../assets/icons/game/christmas_tree/christmas_tree.png"),
      top: 44,
      left: 3,
      width: 199,
      height: 257,
      position: "absolute"
    },
    hedgehog: {
      source: require("../assets/icons/game/hedgehog/hedgehog.png"),
      top: 1337,
      left: 175,
      width: 63,
      height: 63,
      transform: [{ rotate: "180deg" }],
      position: "absolute",
      zIndex: 2
    }
  },
  level_images: {
    playing_field: {
      source: require("../assets/icons/game/playing_field/playing_field.png"),
      width: 400,
      height: 400
    },
    apple: {
      source: require("../assets/icons/game/apple/apple.png"),
      width: 40,
      height: 40,
      position: "absolute",
      zIndex: 1
    },
    mushroom: {
      source: require("../assets/icons/game/mushroom/mushroom.png"),
      width: 40,
      height: 40,
      position: "absolute",
      zIndex: 1
    },
    portal: {
      source: require("../assets/icons/game/portal/portal.png"),
      width: 40,
      height: 40,
      position: "absolute",
      zIndex: 1
    },
    stone: {
      source: require("../assets/icons/game/stone/stone.png"),
      width: 40,
      height: 40,
      position: "absolute",
      zIndex: 1
    },
    question: {
      source: require("../assets/icons/game/question/question.png"),
      width: 40,
      height: 40,
      position: "absolute",
      zIndex: 1
    },
    hedgehog: {
      source: require("../assets/icons/game/hedgehog/hedgehog.png"),
      width: 40,
      height: 40,
      position: "absolute",
      zIndex: 2
    },
    rip: {
      source: require("../assets/icons/game/rip/rip.png"),
      width: 40,
      height: 40,
      position: "absolute",
      zIndex: 1
    },
    glow: {
      source: require("../assets/icons/game/glow/glow.png"),
      width: 302,
      height: 302
    },
    check_mark: {
      source: require("../assets/icons/game/check_mark/check_mark.png"),
      width: 20,
      height: 20
    }
  },
  animations: {
    anim_hedgehog: {
      source: require("../assets/animations/game/anim_hedgehog/anim_hedgehog.gif"),
      width: 112,
      height: 112
    }
  }
};

const IMAGES = { EDUCATION, GAME };
export default IMAGES;
