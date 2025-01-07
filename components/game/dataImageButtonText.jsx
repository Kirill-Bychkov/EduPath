import { Responsive, getResponsiveDimensions } from "./tools.jsx";
import { icons } from "../../constants/icons.js";

export const getButtonsMenu = (windowWidth) => (
  {
    "backTraining": {
      ...getResponsiveDimensions({
        top: 0,
        left: 340,
        width: 73,
        height: 62
      }, windowWidth),
      source: icons.backTraining,
      effect: true
    },
    "b_close": {
      width: Responsive(32, windowWidth),
      height: Responsive(32, windowWidth),
      source: icons.b_close,
      effect: true
    },
    "b_start": {
      width: Responsive(80, windowWidth),
      height: Responsive(41.97, windowWidth),
      source: icons.b_start,
      effect: true
    }
  }
);

export const getButtonsLevelsMenu = (windowWidth) => [
  ["5", {
    ...getResponsiveDimensions({
      top: 208,
      left: 191,
      width: 105,
      height: 106
    }, windowWidth),
    source: icons.level_5
  }],
  ["4", {
    ...getResponsiveDimensions({
      top: 482,
      left: 101,
      width: 108,
      height: 102
    }, windowWidth),
    source: icons.level_4
  }],
  ["3", {
    ...getResponsiveDimensions({
      top: 728,
      left: 258,
      width: 109,
      height: 95
    }, windowWidth),
    source: icons.level_3
  }],
  ["2", {
    ...getResponsiveDimensions({
      top: 912.97,
      left: 72.2,
      width: 101,
      height: 109
    }, windowWidth),
    source: icons.level_2
  }],
  ["1", {
    ...getResponsiveDimensions({
      top: 1114,
      left: 133,
      width: 98,
      height: 110
    }, windowWidth),
    source: icons.level_1
  }]
];

export const getTextLevels = [
  {
    title: `Уровень 1
Обход препятствий`,
    description: `Использование циклов и условий
для обхода камней.`
  },
  {
    title: `Уровень 2
Тайные клетки`,
    description: `Работа с неопределённостью,
циклы и условия.`
  },
  {
    title: `Уровень 3
Портал спасения`,
    description: `Использование портала
хотя бы один раз
для сбора яблок.`
  },
  {
    title: `Уровень 4
Секретный сбор`,
    description: `Применение декораторов для автоматического сбора яблок
при проверке клетки.`
  },
  {
    title: `Уровень 5
Лабиринт решений`,
    description: `Рекурсия и поиск пути
через сложный лабиринт.`
  },
];

export const getImagesMenu = (windowWidth) => [
  ["1", {
    ...getResponsiveDimensions({
      top: 0,
      left: 0,
      width: 412,
      height: 84.21
    }, windowWidth),
    source: icons.lawn,
    styleProps: { transform: [{ rotate: "180deg" }] }
  }],
  ["2", {
    ...getResponsiveDimensions({
      top: 80,
      left: 171,
      width: 136,
      height: 178
    }, windowWidth),
    source: icons.forest_path_50,
    zIndex: -1
  }],
  ["3", {
    ...getResponsiveDimensions({
      top: 90,
      left: 284,
      width: 62,
      height: 47
    }, windowWidth),
    source: icons.flowers
  }],
  ["4", {
    ...getResponsiveDimensions({
      top: 44,
      left: 3,
      width: 199,
      height: 257
    }, windowWidth),
    source: icons.christmas_tree
  }],
  ["5", {
    ...getResponsiveDimensions({
      top: 301,
      left: 127,
      width: 55,
      height: 43
    }, windowWidth),
    source: icons.stump
  }],
  ["6", {
    ...getResponsiveDimensions({
      top: 416,
      left: 129,
      width: 62,
      height: 47
    }, windowWidth),
    source: icons.flowers
  }],
  ["7", {
    ...getResponsiveDimensions({
      top: 296,
      left: 67,
      width: 186,
      height: 236
    }, windowWidth),
    source: icons.forest_path_45
  }],
  ["8", {
    ...getResponsiveDimensions({
      top: 304,
      left: 222,
      width: 180,
      height: 293
    }, windowWidth),
    source: icons.tree_2,
    zIndex: 1
  }],
  ["9", {
    ...getResponsiveDimensions({
      top: 544,
      left: 155,
      width: 177,
      height: 194
    }, windowWidth),
    source: icons.forest_path_34
  }],
  ["10", {
    ...getResponsiveDimensions({
      top: 613,
      left: 12,
      width: 250,
      height: 242
    }, windowWidth),
    source: icons.tree_1
  }],
  ["11", {
    ...getResponsiveDimensions({
      top: 800,
      left: 115,
      width: 213,
      height: 144
    }, windowWidth),
    source: icons.forest_path_23
  }],
  ["12", {
    ...getResponsiveDimensions({
      top: 960,
      left: 29,
      width: 118,
      height: 240
    }, windowWidth),
    source: icons.forest_path_12
  }],
  ["13", {
    ...getResponsiveDimensions({
      top: 889,
      left: 163,
      width: 227,
      height: 234
    }, windowWidth),
    source: icons.christmas_trees_2
  }],
  ["14", {
    ...getResponsiveDimensions({
      top: 1150,
      left: 175,
      width: 151,
      height: 198
    }, windowWidth),
    source: icons.forest_path_01
  }],
  ["15", {
    ...getResponsiveDimensions({
      top: 1143,
      left: 7,
      width: 181,
      height: 194
    }, windowWidth),
    source: icons.christmas_trees_1
  }],
  ["16", {
    ...getResponsiveDimensions({
      top: 1337,
      left: 175,
      width: 63,
      height: 63
    }, windowWidth),
    source: icons.hedgehog,
    zIndex: 1
  }],
  ["17", {
    ...getResponsiveDimensions({
      top: 1344,
      left: 0,
      width: 412,
      height: 84.21
    }, windowWidth),
    source: icons.lawn
  }]
];
