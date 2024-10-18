import { ResponsiveWidth, ResponsiveHeight, CoordX, CoordY } from "./Tools.jsx";
import { icons } from "../../constants/icons.js";

export const getButtonsData = (router) => ({
  "backTraining": {
    top: CoordY(0),
    left: CoordX(340),
    width: ResponsiveWidth(73),
    height: ResponsiveHeight(62),
    source: icons.backTraining,
    action: () => router.push("/"),
    effect: true
  }
});

export const levelsData = [
  {
    id: 5,
    top: CoordY(208),
    left: CoordX(191),
    width: ResponsiveWidth(107),
    height: ResponsiveHeight(106),
    source: icons.level_5,
    action: () => console.log("level 5"),
    effect: false
  },
  {
    id: 4,
    top: CoordY(482),
    left: CoordX(101),
    width: ResponsiveWidth(109),
    height: ResponsiveHeight(103),
    source: icons.level_4,
    action: () => console.log("level 4"),
    effect: false
  },
  {
    id: 3,
    top: CoordY(728),
    left: CoordX(258),
    width: ResponsiveWidth(111),
    height: ResponsiveHeight(96),
    source: icons.level_3,
    action: () => console.log("level 3"),
    effect: false
  },
  {
    id: 2,
    top: CoordY(912.97),
    left: CoordX(72.2),
    width: ResponsiveWidth(102),
    height: ResponsiveHeight(109),
    source: icons.level_2,
    action: () => console.log("level 2"),
    effect: false
  },
  {
    id: 1,
    top: CoordY(1114),
    left: CoordX(133),
    width: ResponsiveWidth(98),
    height: ResponsiveHeight(110),
    source: icons.level_1,
    action: () => console.log("level 1"),
    effect: false
  }
];

export const imagesMenuData = [
  {
    id: 1,
    top: CoordY(0),
    left: CoordX(0),
    width: ResponsiveWidth(412),
    height: ResponsiveHeight(84.21),
    source: icons.lawn,
    styleProps: { transform: [{ rotate: "180deg" }] }
  },
  {
    id: 2,
    top: CoordY(80),
    left: CoordX(171),
    width: ResponsiveWidth(136),
    height: ResponsiveHeight(178),
    source: icons.forest_path_50,
    zIndex: -1
  },
  {
    id: 3,
    top: CoordY(90),
    left: CoordX(284),
    width: ResponsiveWidth(62),
    height: ResponsiveHeight(47),
    source: icons.flowers
  },
  {
    id: 4,
    top: CoordY(44),
    left: CoordX(3),
    width: ResponsiveWidth(199),
    height: ResponsiveHeight(257),
    source: icons.christmas_tree
  },
  {
    id: 5,
    top: CoordY(301),
    left: CoordX(127),
    width: ResponsiveWidth(55),
    height: ResponsiveHeight(43),
    source: icons.stump
  },
  {
    id: 6,
    top: CoordY(416),
    left: CoordX(129),
    width: ResponsiveWidth(62),
    height: ResponsiveHeight(47),
    source: icons.flowers
  },
  {
    id: 7,
    top: CoordY(296),
    left: CoordX(67),
    width: ResponsiveWidth(186),
    height: ResponsiveHeight(236),
    source: icons.forest_path_45
  },
  {
    id: 8,
    top: CoordY(304),
    left: CoordX(222),
    width: ResponsiveWidth(180),
    height: ResponsiveHeight(293),
    source: icons.tree_2,
    zIndex: 1
  },
  {
    id: 9,
    top: CoordY(544),
    left: CoordX(155),
    width: ResponsiveWidth(177),
    height: ResponsiveHeight(194),
    source: icons.forest_path_34
  },
  {
    id: 10,
    top: CoordY(613),
    left: CoordX(12),
    width: ResponsiveWidth(250),
    height: ResponsiveHeight(242),
    source: icons.tree_1
  },
  {
    id: 11,
    top: CoordY(800),
    left: CoordX(115),
    width: ResponsiveWidth(213),
    height: ResponsiveHeight(144),
    source: icons.forest_path_23
  },
  {
    id: 12,
    top: CoordY(960),
    left: CoordX(29),
    width: ResponsiveWidth(118),
    height: ResponsiveHeight(240),
    source: icons.forest_path_12
  },
  {
    id: 13,
    top: CoordY(889),
    left: CoordX(163),
    width: ResponsiveWidth(227),
    height: ResponsiveHeight(234),
    source: icons.christmas_trees_2
  },
  {
    id: 14,
    top: CoordY(1150),
    left: CoordX(175),
    width: ResponsiveWidth(151),
    height: ResponsiveHeight(198),
    source: icons.forest_path_01
  },
  {
    id: 15,
    top: CoordY(1143),
    left: CoordX(7),
    width: ResponsiveWidth(181),
    height: ResponsiveHeight(194),
    source: icons.christmas_trees_1
  },
  {
    id: 16,
    top: CoordY(1337),
    left: CoordX(175),
    width: ResponsiveWidth(63),
    height: ResponsiveHeight(63),
    source: icons.hedgehog,
    zIndex: 1
  },
  {
    id: 17,
    top: CoordY(1344),
    left: CoordX(0),
    width: ResponsiveWidth(412),
    height: ResponsiveHeight(84.21),
    source: icons.lawn
  }
];
