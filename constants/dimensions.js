const GAME = {
    menu: {
        maxCoordY: 1344,
        heightBottomObj: 84
    },
    window_modal: {
        width: 340,
        minHeight: 165,
        maxHeight: 245,
        borderRadius: 15,
        topCloseButton: -16,
        leftCloseButton: 324,
        fontSizeTitle: 24,
        lineHeightTitle: 35,
        marginTopTitle: 10,
        fontSizeDescription: 18,
        marginBottomDescription: 16,
        marginBottomStartButton: 16
    },
    level: {
        paddingHorizontal: 6,
        paddingVertical: 15,
        paddingEndButtonExit: 5,
        paddingStartButtonTask: 5
    },
    bottomsheet: {
        borderRadius: 20,
        paddingScrollContent: 10,
        fontSizeTitle: 24,
        fontSizeMain: 18,
        lineHeightTitle: 40,
        marginText: 12
    },
    food_backlight_screen: {
        widthFood: 120,
        heightFood: 120
    }
};

const LEVEL_GRIDS = {
    1: [
        [
          { id: 400, objs: ["rip"], top: 22, left: 11 },
          { id: 401, objs: ["rip"], top: 22, left: 61 },
          { id: 402, objs: ["rip"], top: 22, left: 111 },
          { id: 403, objs: ["rip"], top: 22, left: 161 },
          { id: 404, objs: ["rip"], top: 22, left: 211 },
          { id: 405, objs: ["rip"], top: 22, left: 261 },
          { id: 406, objs: ["rip"], top: 22, left: 311 },
          { id: 407, objs: ["rip"], top: 22, left: 361 }
        ],
        [
          { id: 408, objs: ["rip"], top: 72, left: 11 },
          { id: 1, objs: ["hedgehog"], top: 72, left: 61 },
          { id: 0, objs: ["empty"], top: 72, left: 111 },
          { id: 0, objs: ["empty"], top: 72, left: 161 },
          { id: 0, objs: ["empty"], top: 72, left: 211 },
          { id: 0, objs: ["empty"], top: 72, left: 261 },
          { id: 0, objs: ["empty"], top: 72, left: 311 },
          { id: 409, objs: ["rip"], top: 72, left: 361 }
        ],
        [
          { id: 410, objs: ["rip"], top: 122, left: 11 },
          { id: 0, objs: ["empty"], top: 122, left: 61 },
          { id: 100, objs: ["stone", "rip"], top: 122, left: 111 },
          { id: 0, objs: ["empty"], top: 122, left: 161 },
          { id: 101, objs: ["stone", "rip"], top: 122, left: 211 },
          { id: 0, objs: ["empty"], top: 122, left: 261 },
          { id: 0, objs: ["empty"], top: 122, left: 311 },
          { id: 411, objs: ["rip"], top: 122, left: 361 }
        ],
        [
          { id: 412, objs: ["rip"], top: 172, left: 11 },
          { id: 0, objs: ["empty"], top: 172, left: 61 },
          { id: 0, objs: ["empty"], top: 172, left: 111 },
          { id: 200, objs: ["apple"], top: 172, left: 161 },
          { id: 0, objs: ["empty"], top: 172, left: 211 },
          { id: 102, objs: ["stone", "rip"], top: 172, left: 261 },
          { id: 0, objs: ["empty"], top: 172, left: 311 },
          { id: 413, objs: ["rip"], top: 172, left: 361 }
        ],
        [
          { id: 414, objs: ["rip"], top: 222, left: 11 },
          { id: 0, objs: ["empty"], top: 222, left: 61 },
          { id: 0, objs: ["empty"], top: 222, left: 111 },
          { id: 0, objs: ["empty"], top: 222, left: 161 },
          { id: 103, objs: ["stone", "rip"], top: 222, left: 211 },
          { id: 0, objs: ["empty"], top: 222, left: 261 },
          { id: 0, objs: ["empty"], top: 222, left: 311 },
          { id: 415, objs: ["rip"], top: 222, left: 361 }
        ],
        [
          { id: 416, objs: ["rip"], top: 272, left: 11 },
          { id: 0, objs: ["empty"], top: 272, left: 61 },
          { id: 104, objs: ["stone", "rip"], top: 272, left: 111 },
          { id: 0, objs: ["empty"], top: 272, left: 161 },
          { id: 0, objs: ["empty"], top: 272, left: 211 },
          { id: 0, objs: ["empty"], top: 272, left: 261 },
          { id: 201, objs: ["apple"], top: 272, left: 311 },
          { id: 417, objs: ["rip"], top: 272, left: 361 }
        ],
        [
          { id: 418, objs: ["rip"], top: 322, left: 11 },
          { id: 0, objs: ["empty"], top: 322, left: 61 },
          { id: 0, objs: ["empty"], top: 322, left: 111 },
          { id: 0, objs: ["empty"], top: 322, left: 161 },
          { id: 0, objs: ["empty"], top: 322, left: 211 },
          { id: 0, objs: ["empty"], top: 322, left: 261 },
          { id: 0, objs: ["empty"], top: 322, left: 311 },
          { id: 419, objs: ["rip"], top: 322, left: 361 }
        ],
        [
          { id: 420, objs: ["rip"], top: 372, left: 11 },
          { id: 421, objs: ["rip"], top: 372, left: 61 },
          { id: 422, objs: ["rip"], top: 372, left: 111 },
          { id: 423, objs: ["rip"], top: 372, left: 161 },
          { id: 424, objs: ["rip"], top: 372, left: 211 },
          { id: 425, objs: ["rip"], top: 372, left: 261 },
          { id: 426, objs: ["rip"], top: 372, left: 311 },
          { id: 427, objs: ["rip"], top: 372, left: 361 }
        ]
    ],
    2: [
        [
            { id: 400, objs: ["rip"], top: 22, left: 11 },
            { id: 401, objs: ["rip"], top: 22, left: 61 },
            { id: 402, objs: ["rip"], top: 22, left: 111 },
            { id: 403, objs: ["rip"], top: 22, left: 161 },
            { id: 404, objs: ["rip"], top: 22, left: 211 },
            { id: 405, objs: ["rip"], top: 22, left: 261 },
            { id: 406, objs: ["rip"], top: 22, left: 311 },
            { id: 407, objs: ["rip"], top: 22, left: 361 }
        ],
        [
            { id: 408, objs: ["rip"], top: 72, left: 11 },
            { id: 1, objs: ["hedgehog"], top: 72, left: 61 },
            { id: 0, objs: ["empty"], top: 72, left: 111 },
            { id: 0, objs: ["empty"], top: 72, left: 161 },
            { id: 100, objs: ["question", "rip"], top: 72, left: 211 },
            { id: 101, objs: ["question", "rip"], top: 72, left: 261 },
            { id: 200, objs: ["question"], top: 72, left: 311 },
            { id: 409, objs: ["rip"], top: 72, left: 361 }
        ],
        [
            { id: 410, objs: ["rip"], top: 122, left: 11 },
            { id: 0, objs: ["empty"], top: 122, left: 61 },
            { id: 102, objs: ["question", "rip"], top: 122, left: 111 },
            { id: 0, objs: ["empty"], top: 122, left: 161 },
            { id: 0, objs: ["empty"], top: 122, left: 211 },
            { id: 0, objs: ["empty"], top: 122, left: 261 },
            { id: 201, objs: ["question"], top: 122, left: 311 },
            { id: 411, objs: ["rip"], top: 122, left: 361 }
        ],
        [
            { id: 412, objs: ["rip"], top: 172, left: 11 },
            { id: 202, objs: ["question"], top: 172, left: 61 },
            { id: 203, objs: ["question"], top: 172, left: 111 },
            { id: 103, objs: ["question", "rip"], top: 172, left: 161 },
            { id: 0, objs: ["empty"], top: 172, left: 211 },
            { id: 0, objs: ["empty"], top: 172, left: 261 },
            { id: 204, objs: ["question"], top: 172, left: 311 },
            { id: 413, objs: ["rip"], top: 172, left: 361 }
        ],
        [
            { id: 414, objs: ["rip"], top: 222, left: 11 },
            { id: 104, objs: ["question", "rip"], top: 222, left: 61 },
            { id: 0, objs: ["empty"], top: 222, left: 111 },
            { id: 0, objs: ["empty"], top: 222, left: 161 },
            { id: 0, objs: ["empty"], top: 222, left: 211 },
            { id: 0, objs: ["empty"], top: 222, left: 261 },
            { id: 0, objs: ["empty"], top: 222, left: 311 },
            { id: 415, objs: ["rip"], top: 222, left: 361 }
        ],
        [
            { id: 416, objs: ["rip"], top: 272, left: 11 },
            { id: 205, objs: ["question"], top: 272, left: 61 },
            { id: 0, objs: ["empty"], top: 272, left: 111 },
            { id: 0, objs: ["empty"], top: 272, left: 161 },
            { id: 105, objs: ["question", "rip"], top: 272, left: 211 },
            { id: 106, objs: ["question", "rip"], top: 272, left: 261 },
            { id: 107, objs: ["question", "rip"], top: 272, left: 311 },
            { id: 417, objs: ["rip"], top: 272, left: 361 }
        ],
        [
            { id: 418, objs: ["rip"], top: 322, left: 11 },
            { id: 108, objs: ["question", "rip"], top: 322, left: 61 },
            { id: 206, objs: ["question"], top: 322, left: 111 },
            { id: 109, objs: ["question", "rip"], top: 322, left: 161 },
            { id: 207, objs: ["question"], top: 322, left: 211 },
            { id: 0, objs: ["empty"], top: 322, left: 261 },
            { id: 0, objs: ["empty"], top: 322, left: 311 },
            { id: 419, objs: ["rip"], top: 322, left: 361 }
        ],
        [
            { id: 420, objs: ["rip"], top: 372, left: 11 },
            { id: 421, objs: ["rip"], top: 372, left: 61 },
            { id: 422, objs: ["rip"], top: 372, left: 111 },
            { id: 423, objs: ["rip"], top: 372, left: 161 },
            { id: 424, objs: ["rip"], top: 372, left: 211 },
            { id: 425, objs: ["rip"], top: 372, left: 261 },
            { id: 426, objs: ["rip"], top: 372, left: 311 },
            { id: 427, objs: ["rip"], top: 372, left: 361 }
        ]
    ],    
    3: [
        [
            { id: 400, objs: ["rip"], top: 22, left: 11 },
            { id: 401, objs: ["rip"], top: 22, left: 61 },
            { id: 402, objs: ["rip"], top: 22, left: 111 },
            { id: 403, objs: ["rip"], top: 22, left: 161 },
            { id: 404, objs: ["rip"], top: 22, left: 211 },
            { id: 405, objs: ["rip"], top: 22, left: 261 },
            { id: 406, objs: ["rip"], top: 22, left: 311 },
            { id: 407, objs: ["rip"], top: 22, left: 361 }
        ],
        [
            { id: 408, objs: ["rip"], top: 72, left: 11 },
            { id: 1, objs: ["hedgehog"], top: 72, left: 61 },
            { id: 0, objs: ["empty"], top: 72, left: 111 },
            { id: 0, objs: ["empty"], top: 72, left: 161 },
            { id: 200, objs: ["mushroom"], top: 72, left: 211 },
            { id: 0, objs: ["empty"], top: 72, left: 261 },
            { id: 0, objs: ["empty"], top: 72, left: 311 },
            { id: 409, objs: ["rip"], top: 72, left: 361 }
        ],
        [
            { id: 410, objs: ["rip"], top: 122, left: 11 },
            { id: 0, objs: ["empty"], top: 122, left: 61 },
            { id: 100, objs: ["stone", "rip"], top: 122, left: 111 },
            { id: 0, objs: ["empty"], top: 122, left: 161 },
            { id: 101, objs: ["stone", "rip"], top: 122, left: 211 },
            { id: 0, objs: ["empty"], top: 122, left: 261 },
            { id: 0, objs: ["empty"], top: 122, left: 311 },
            { id: 411, objs: ["rip"], top: 122, left: 361 }
        ],
        [
            { id: 412, objs: ["rip"], top: 172, left: 11 },
            { id: 0, objs: ["empty"], top: 172, left: 61 },
            { id: 0, objs: ["empty"], top: 172, left: 111 },
            { id: 201, objs: ["apple"], top: 172, left: 161 },
            { id: 0, objs: ["empty"], top: 172, left: 211 },
            { id: 300, objs: ["portal"], top: 172, left: 261 },
            { id: 0, objs: ["empty"], top: 172, left: 311 },
            { id: 413, objs: ["rip"], top: 172, left: 361 }
        ],
        [
            { id: 414, objs: ["rip"], top: 222, left: 11 },
            { id: 0, objs: ["empty"], top: 222, left: 61 },
            { id: 102, objs: ["stone", "rip"], top: 222, left: 111 },
            { id: 0, objs: ["empty"], top: 222, left: 161 },
            { id: 0, objs: ["empty"], top: 222, left: 211 },
            { id: 0, objs: ["empty"], top: 222, left: 261 },
            { id: 0, objs: ["empty"], top: 222, left: 311 },
            { id: 415, objs: ["rip"], top: 222, left: 361 }
        ],
        [
            { id: 416, objs: ["rip"], top: 272, left: 11 },
            { id: 202, objs: ["mushroom"], top: 272, left: 61 },
            { id: 0, objs: ["empty"], top: 272, left: 111 },
            { id: 0, objs: ["empty"], top: 272, left: 161 },
            { id: 103, objs: ["stone", "rip"], top: 272, left: 211 },
            { id: 0, objs: ["empty"], top: 272, left: 261 },
            { id: 0, objs: ["empty"], top: 272, left: 311 },
            { id: 417, objs: ["rip"], top: 272, left: 361 }
        ],
        [
            { id: 418, objs: ["rip"], top: 322, left: 11 },
            { id: 0, objs: ["empty"], top: 322, left: 61 },
            { id: 0, objs: ["empty"], top: 322, left: 111 },
            { id: 0, objs: ["empty"], top: 322, left: 161 },
            { id: 203, objs: ["apple"], top: 322, left: 211 },
            { id: 0, objs: ["empty"], top: 322, left: 261 },
            { id: 0, objs: ["empty"], top: 322, left: 311 },
            { id: 419, objs: ["rip"], top: 322, left: 361 }
        ],
        [
            { id: 420, objs: ["rip"], top: 372, left: 11 },
            { id: 421, objs: ["rip"], top: 372, left: 61 },
            { id: 422, objs: ["rip"], top: 372, left: 111 },
            { id: 423, objs: ["rip"], top: 372, left: 161 },
            { id: 424, objs: ["rip"], top: 372, left: 211 },
            { id: 425, objs: ["rip"], top: 372, left: 261 },
            { id: 426, objs: ["rip"], top: 372, left: 311 },
            { id: 427, objs: ["rip"], top: 372, left: 361 }
        ]
    ],
    4: [
        [
            { id: 400, objs: ["rip"], top: 22, left: 11 },
            { id: 401, objs: ["rip"], top: 22, left: 61 },
            { id: 402, objs: ["rip"], top: 22, left: 111 },
            { id: 403, objs: ["rip"], top: 22, left: 161 },
            { id: 404, objs: ["rip"], top: 22, left: 211 },
            { id: 405, objs: ["rip"], top: 22, left: 261 },
            { id: 406, objs: ["rip"], top: 22, left: 311 },
            { id: 407, objs: ["rip"], top: 22, left: 361 }
        ],
        [
            { id: 408, objs: ["rip"], top: 72, left: 11 },
            { id: 1, objs: ["hedgehog"], top: 72, left: 61 },
            { id: 0, objs: ["empty"], top: 72, left: 111 },
            { id: 0, objs: ["empty"], top: 72, left: 161 },
            { id: 0, objs: ["empty"], top: 72, left: 211 },
            { id: 0, objs: ["empty"], top: 72, left: 261 },
            { id: 0, objs: ["empty"], top: 72, left: 311 },
            { id: 409, objs: ["rip"], top: 72, left: 361 }
        ],
        [
            { id: 410, objs: ["rip"], top: 122, left: 11 },
            { id: 0, objs: ["empty"], top: 122, left: 61 },
            { id: 200, objs: ["question"], top: 122, left: 111 },
            { id: 100, objs: ["question", "rip"], top: 122, left: 161 },
            { id: 0, objs: ["empty"], top: 122, left: 211 },
            { id: 101, objs: ["question", "rip"], top: 122, left: 261 },
            { id: 201, objs: ["question"], top: 122, left: 311 },
            { id: 411, objs: ["rip"], top: 122, left: 361 }
        ],
        [
            { id: 412, objs: ["rip"], top: 172, left: 11 },
            { id: 102, objs: ["question", "rip"], top: 172, left: 61 },
            { id: 103, objs: ["question", "rip"], top: 172, left: 111 },
            { id: 202, objs: ["question"], top: 172, left: 161 },
            { id: 203, objs: ["question"], top: 172, left: 211 },
            { id: 0, objs: ["empty"], top: 172, left: 261 },
            { id: 0, objs: ["empty"], top: 172, left: 311 },
            { id: 413, objs: ["rip"], top: 172, left: 361 }
        ],
        [
            { id: 414, objs: ["rip"], top: 222, left: 11 },
            { id: 204, objs: ["question"], top: 222, left: 61 },
            { id: 0, objs: ["empty"], top: 222, left: 111 },
            { id: 0, objs: ["empty"], top: 222, left: 161 },
            { id: 104, objs: ["question", "rip"], top: 222, left: 211 },
            { id: 0, objs: ["empty"], top: 222, left: 261 },
            { id: 105, objs: ["question", "rip"], top: 222, left: 311 },
            { id: 415, objs: ["rip"], top: 222, left: 361 }
        ],
        [
            { id: 416, objs: ["rip"], top: 272, left: 11 },
            { id: 0, objs: ["empty"], top: 272, left: 61 },
            { id: 0, objs: ["empty"], top: 272, left: 111 },
            { id: 106, objs: ["question", "rip"], top: 272, left: 161 },
            { id: 205, objs: ["question"], top: 272, left: 211 },
            { id: 0, objs: ["empty"], top: 272, left: 261 },
            { id: 0, objs: ["empty"], top: 272, left: 311 },
            { id: 417, objs: ["rip"], top: 272, left: 361 }
        ],
        [
            { id: 418, objs: ["rip"], top: 322, left: 11 },
            { id: 0, objs: ["empty"], top: 322, left: 61 },
            { id: 206, objs: ["question"], top: 322, left: 111 },
            { id: 0, objs: ["empty"], top: 322, left: 161 },
            { id: 107, objs: ["question", "rip"], top: 322, left: 211 },
            { id: 207, objs: ["question"], top: 322, left: 261 },
            { id: 208, objs: ["question"], top: 322, left: 311 },
            { id: 419, objs: ["rip"], top: 322, left: 361 }
        ],
        [
            { id: 420, objs: ["rip"], top: 372, left: 11 },
            { id: 421, objs: ["rip"], top: 372, left: 61 },
            { id: 422, objs: ["rip"], top: 372, left: 111 },
            { id: 423, objs: ["rip"], top: 372, left: 161 },
            { id: 424, objs: ["rip"], top: 372, left: 211 },
            { id: 425, objs: ["rip"], top: 372, left: 261 },
            { id: 426, objs: ["rip"], top: 372, left: 311 },
            { id: 427, objs: ["rip"], top: 372, left: 361 }
        ]
    ],
    5: [
        [
            { id: 400, objs: ["rip"], top: 22, left: 11 },
            { id: 401, objs: ["rip"], top: 22, left: 61 },
            { id: 402, objs: ["rip"], top: 22, left: 111 },
            { id: 403, objs: ["rip"], top: 22, left: 161 },
            { id: 404, objs: ["rip"], top: 22, left: 211 },
            { id: 405, objs: ["rip"], top: 22, left: 261 },
            { id: 406, objs: ["rip"], top: 22, left: 311 },
            { id: 407, objs: ["rip"], top: 22, left: 361 }
        ],
        [
            { id: 408, objs: ["rip"], top: 72, left: 11 },
            { id: 1, objs: ["hedgehog"], top: 72, left: 61 },
            { id: 0, objs: ["empty"], top: 72, left: 111 },
            { id: 0, objs: ["empty"], top: 72, left: 161 },
            { id: 200, objs: ["apple"], top: 72, left: 211 },
            { id: 0, objs: ["empty"], top: 72, left: 261 },
            { id: 100, objs: ["stone", "rip"], top: 72, left: 311 },
            { id: 409, objs: ["rip"], top: 72, left: 361 }
        ],
        [
            { id: 410, objs: ["rip"], top: 122, left: 11 },
            { id: 101, objs: ["stone", "rip"], top: 122, left: 61 },
            { id: 102, objs: ["stone", "rip"], top: 122, left: 111 },
            { id: 0, objs: ["empty"], top: 122, left: 161 },
            { id: 0, objs: ["empty"], top: 122, left: 211 },
            { id: 0, objs: ["empty"], top: 122, left: 261 },
            { id: 0, objs: ["empty"], top: 122, left: 311 },
            { id: 411, objs: ["rip"], top: 122, left: 361 }
        ],
        [
            { id: 412, objs: ["rip"], top: 172, left: 11 },
            { id: 0, objs: ["empty"], top: 172, left: 61 },
            { id: 0, objs: ["empty"], top: 172, left: 111 },
            { id: 0, objs: ["empty"], top: 172, left: 161 },
            { id: 103, objs: ["stone", "rip"], top: 172, left: 211 },
            { id: 201, objs: ["mushroom"], top: 172, left: 261 },
            { id: 0, objs: ["empty"], top: 172, left: 311 },
            { id: 413, objs: ["rip"], top: 172, left: 361 }
        ],
        [
            { id: 414, objs: ["rip"], top: 222, left: 11 },
            { id: 0, objs: ["empty"], top: 222, left: 61 },
            { id: 202, objs: ["mushroom"], top: 222, left: 111 },
            { id: 104, objs: ["stone", "rip"], top: 222, left: 161 },
            { id: 0, objs: ["empty"], top: 222, left: 211 },
            { id: 0, objs: ["empty"], top: 222, left: 261 },
            { id: 105, objs: ["stone", "rip"], top: 222, left: 311 },
            { id: 415, objs: ["rip"], top: 222, left: 361 }
        ],
        [
            { id: 416, objs: ["rip"], top: 272, left: 11 },
            { id: 0, objs: ["empty"], top: 272, left: 61 },
            { id: 0, objs: ["empty"], top: 272, left: 111 },
            { id: 106, objs: ["stone", "rip"], top: 272, left: 161 },
            { id: 0, objs: ["empty"], top: 272, left: 211 },
            { id: 203, objs: ["apple"], top: 272, left: 261 },
            { id: 0, objs: ["empty"], top: 272, left: 311 },
            { id: 417, objs: ["rip"], top: 272, left: 361 }
        ],
        [
            { id: 418, objs: ["rip"], top: 322, left: 11 },
            { id: 107, objs: ["stone", "rip"], top: 322, left: 61 },
            { id: 0, objs: ["empty"], top: 322, left: 111 },
            { id: 0, objs: ["empty"], top: 322, left: 161 },
            { id: 204, objs: ["mushroom"], top: 322, left: 211 },
            { id: 0, objs: ["empty"], top: 322, left: 261 },
            { id: 108, objs: ["stone", "rip"], top: 322, left: 311 },
            { id: 419, objs: ["rip"], top: 322, left: 361 }
        ],
        [
            { id: 420, objs: ["rip"], top: 372, left: 11 },
            { id: 421, objs: ["rip"], top: 372, left: 61 },
            { id: 422, objs: ["rip"], top: 372, left: 111 },
            { id: 423, objs: ["rip"], top: 372, left: 161 },
            { id: 424, objs: ["rip"], top: 372, left: 211 },
            { id: 425, objs: ["rip"], top: 372, left: 261 },
            { id: 426, objs: ["rip"], top: 372, left: 311 },
            { id: 427, objs: ["rip"], top: 372, left: 361 }
        ]
    ]    
};

const INTERPRETER = {
    general: {
        width: 400,
        margin: 10,
        borderRadius: 5
    },
    phone: {
        fontSizeCodeEditor: 18,
        inputLineHeightCodeEditor: 26,
        highlighterLineHeightCodeEditor: 26,
        sizeEmoji: 18,
        fontSizeIoText: 18,
        widthEmojisContainer: 28,
        marginRightEmojisContainer: 4,
        minHeightIoText: 45,
        paddingLeftIoText: 10,
        paddingVerticalIoText: 8
    },
    tablet: {
        fontSizeCodeEditor: 30,
        inputLineHeightCodeEditor: 35,
        highlighterLineHeightCodeEditor: 35,
        sizeEmoji: 30,
        fontSizeIoText: 30,
        widthEmojisContainer: 47,
        marginRightEmojisContainer: 7,
        minHeightIoText: 75,
        paddingLeftIoText: 17,
        paddingVerticalIoText: 8
    }
};

const DIMENSIONS = { GAME, LEVEL_GRIDS, INTERPRETER };
export default DIMENSIONS;
