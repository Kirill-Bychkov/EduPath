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
        paddingBottomViewContent: 80,
        paddingHorizontal: 6,
        paddingVertical: 15,
        heightButtonBar: 65,
        widthDivider: 0.5,
        heightDivider: 42,
        widthSpacer: 10
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
    },
    copy_toast: {
        widthContainer: 360,
        heightContainer: 55,
        borderRadiusContainer: 5,
        fontSizeText: 16,
        paddingLeft: 20,
        paddingRight: 20,
        marginTopContainer: 25,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4
    }
};

const LEVEL_GRIDS = {
    1: [
        [
          { id: 0, obj: "border", top: 22, left: 11 },
          { id: 0, obj: "border", top: 22, left: 61 },
          { id: 0, obj: "border", top: 22, left: 111 },
          { id: 0, obj: "border", top: 22, left: 161 },
          { id: 0, obj: "border", top: 22, left: 211 },
          { id: 0, obj: "border", top: 22, left: 261 },
          { id: 0, obj: "border", top: 22, left: 311 },
          { id: 0, obj: "border", top: 22, left: 361 }
        ],
        [
          { id: 0, obj: "border", top: 72, left: 11 },
          { id: 1, obj: "hedgehog", top: 72, left: 61 },
          { id: 0, obj: "empty", top: 72, left: 111 },
          { id: 0, obj: "empty", top: 72, left: 161 },
          { id: 0, obj: "empty", top: 72, left: 211 },
          { id: 0, obj: "empty", top: 72, left: 261 },
          { id: 0, obj: "empty", top: 72, left: 311 },
          { id: 0, obj: "border", top: 72, left: 361 }
        ],
        [
          { id: 0, obj: "border", top: 122, left: 11 },
          { id: 0, obj: "empty", top: 122, left: 61 },
          { id: 100, obj: "stone", top: 122, left: 111 },
          { id: 0, obj: "empty", top: 122, left: 161 },
          { id: 101, obj: "stone", top: 122, left: 211 },
          { id: 0, obj: "empty", top: 122, left: 261 },
          { id: 0, obj: "empty", top: 122, left: 311 },
          { id: 0, obj: "border", top: 122, left: 361 }
        ],
        [
          { id: 0, obj: "border", top: 172, left: 11 },
          { id: 0, obj: "empty", top: 172, left: 61 },
          { id: 0, obj: "empty", top: 172, left: 111 },
          { id: 200, obj: "apple", top: 172, left: 161 },
          { id: 0, obj: "empty", top: 172, left: 211 },
          { id: 102, obj: "stone", top: 172, left: 261 },
          { id: 0, obj: "empty", top: 172, left: 311 },
          { id: 0, obj: "border", top: 172, left: 361 }
        ],
        [
          { id: 0, obj: "border", top: 222, left: 11 },
          { id: 0, obj: "empty", top: 222, left: 61 },
          { id: 0, obj: "empty", top: 222, left: 111 },
          { id: 0, obj: "empty", top: 222, left: 161 },
          { id: 103, obj: "stone", top: 222, left: 211 },
          { id: 0, obj: "empty", top: 222, left: 261 },
          { id: 0, obj: "empty", top: 222, left: 311 },
          { id: 0, obj: "border", top: 222, left: 361 }
        ],
        [
          { id: 0, obj: "border", top: 272, left: 11 },
          { id: 0, obj: "empty", top: 272, left: 61 },
          { id: 104, obj: "stone", top: 272, left: 111 },
          { id: 0, obj: "empty", top: 272, left: 161 },
          { id: 0, obj: "empty", top: 272, left: 211 },
          { id: 0, obj: "empty", top: 272, left: 261 },
          { id: 201, obj: "apple", top: 272, left: 311 },
          { id: 0, obj: "border", top: 272, left: 361 }
        ],
        [
          { id: 0, obj: "border", top: 322, left: 11 },
          { id: 0, obj: "empty", top: 322, left: 61 },
          { id: 0, obj: "empty", top: 322, left: 111 },
          { id: 0, obj: "empty", top: 322, left: 161 },
          { id: 0, obj: "empty", top: 322, left: 211 },
          { id: 0, obj: "empty", top: 322, left: 261 },
          { id: 0, obj: "empty", top: 322, left: 311 },
          { id: 0, obj: "border", top: 322, left: 361 }
        ],
        [
          { id: 0, obj: "border", top: 372, left: 11 },
          { id: 0, obj: "border", top: 372, left: 61 },
          { id: 0, obj: "border", top: 372, left: 111 },
          { id: 0, obj: "border", top: 372, left: 161 },
          { id: 0, obj: "border", top: 372, left: 211 },
          { id: 0, obj: "border", top: 372, left: 261 },
          { id: 0, obj: "border", top: 372, left: 311 },
          { id: 0, obj: "border", top: 372, left: 361 }
        ]
    ],
    2: [
        [
            { id: 0, obj: "border", top: 22, left: 11 },
            { id: 0, obj: "border", top: 22, left: 61 },
            { id: 0, obj: "border", top: 22, left: 111 },
            { id: 0, obj: "border", top: 22, left: 161 },
            { id: 0, obj: "border", top: 22, left: 211 },
            { id: 0, obj: "border", top: 22, left: 261 },
            { id: 0, obj: "border", top: 22, left: 311 },
            { id: 0, obj: "border", top: 22, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 72, left: 11 },
            { id: 1, obj: "hedgehog", top: 72, left: 61 },
            { id: 0, obj: "empty", top: 72, left: 111 },
            { id: 0, obj: "empty", top: 72, left: 161 },
            { id: 300, obj: "question", top: 72, left: 211 },
            { id: 301, obj: "question", top: 72, left: 261 },
            { id: 302, obj: "question", top: 72, left: 311 },
            { id: 0, obj: "border", top: 72, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 122, left: 11 },
            { id: 0, obj: "empty", top: 122, left: 61 },
            { id: 303, obj: "question", top: 122, left: 111 },
            { id: 0, obj: "empty", top: 122, left: 161 },
            { id: 0, obj: "empty", top: 122, left: 211 },
            { id: 0, obj: "empty", top: 122, left: 261 },
            { id: 304, obj: "question", top: 122, left: 311 },
            { id: 0, obj: "border", top: 122, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 172, left: 11 },
            { id: 305, obj: "question", top: 172, left: 61 },
            { id: 306, obj: "question", top: 172, left: 111 },
            { id: 307, obj: "question", top: 172, left: 161 },
            { id: 0, obj: "empty", top: 172, left: 211 },
            { id: 0, obj: "empty", top: 172, left: 261 },
            { id: 308, obj: "question", top: 172, left: 311 },
            { id: 0, obj: "border", top: 172, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 222, left: 11 },
            { id: 309, obj: "question", top: 222, left: 61 },
            { id: 0, obj: "empty", top: 222, left: 111 },
            { id: 0, obj: "empty", top: 222, left: 161 },
            { id: 0, obj: "empty", top: 222, left: 211 },
            { id: 0, obj: "empty", top: 222, left: 261 },
            { id: 0, obj: "empty", top: 222, left: 311 },
            { id: 0, obj: "border", top: 222, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 272, left: 11 },
            { id: 310, obj: "question", top: 272, left: 61 },
            { id: 0, obj: "empty", top: 272, left: 111 },
            { id: 0, obj: "empty", top: 272, left: 161 },
            { id: 311, obj: "question", top: 272, left: 211 },
            { id: 312, obj: "question", top: 272, left: 261 },
            { id: 313, obj: "question", top: 272, left: 311 },
            { id: 0, obj: "border", top: 272, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 322, left: 11 },
            { id: 314, obj: "question", top: 322, left: 61 },
            { id: 315, obj: "question", top: 322, left: 111 },
            { id: 316, obj: "question", top: 322, left: 161 },
            { id: 317, obj: "question", top: 322, left: 211 },
            { id: 0, obj: "empty", top: 322, left: 261 },
            { id: 0, obj: "empty", top: 322, left: 311 },
            { id: 0, obj: "border", top: 322, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 372, left: 11 },
            { id: 0, obj: "border", top: 372, left: 61 },
            { id: 0, obj: "border", top: 372, left: 111 },
            { id: 0, obj: "border", top: 372, left: 161 },
            { id: 0, obj: "border", top: 372, left: 211 },
            { id: 0, obj: "border", top: 372, left: 261 },
            { id: 0, obj: "border", top: 372, left: 311 },
            { id: 0, obj: "border", top: 372, left: 361 }
        ]
    ],    
    3: [
        [
            { id: 0, obj: "border", top: 22, left: 11 },
            { id: 0, obj: "border", top: 22, left: 61 },
            { id: 0, obj: "border", top: 22, left: 111 },
            { id: 0, obj: "border", top: 22, left: 161 },
            { id: 0, obj: "border", top: 22, left: 211 },
            { id: 0, obj: "border", top: 22, left: 261 },
            { id: 0, obj: "border", top: 22, left: 311 },
            { id: 0, obj: "border", top: 22, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 72, left: 11 },
            { id: 1, obj: "hedgehog", top: 72, left: 61 },
            { id: 0, obj: "empty", top: 72, left: 111 },
            { id: 0, obj: "empty", top: 72, left: 161 },
            { id: 200, obj: "mushroom", top: 72, left: 211 },
            { id: 0, obj: "empty", top: 72, left: 261 },
            { id: 0, obj: "empty", top: 72, left: 311 },
            { id: 0, obj: "border", top: 72, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 122, left: 11 },
            { id: 0, obj: "empty", top: 122, left: 61 },
            { id: 100, obj: "stone", top: 122, left: 111 },
            { id: 0, obj: "empty", top: 122, left: 161 },
            { id: 101, obj: "stone", top: 122, left: 211 },
            { id: 0, obj: "empty", top: 122, left: 261 },
            { id: 0, obj: "empty", top: 122, left: 311 },
            { id: 0, obj: "border", top: 122, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 172, left: 11 },
            { id: 0, obj: "empty", top: 172, left: 61 },
            { id: 0, obj: "empty", top: 172, left: 111 },
            { id: 201, obj: "apple", top: 172, left: 161 },
            { id: 0, obj: "empty", top: 172, left: 211 },
            { id: 500, obj: "portal", top: 172, left: 261 },
            { id: 0, obj: "empty", top: 172, left: 311 },
            { id: 0, obj: "border", top: 172, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 222, left: 11 },
            { id: 0, obj: "empty", top: 222, left: 61 },
            { id: 102, obj: "stone", top: 222, left: 111 },
            { id: 0, obj: "empty", top: 222, left: 161 },
            { id: 0, obj: "empty", top: 222, left: 211 },
            { id: 0, obj: "empty", top: 222, left: 261 },
            { id: 0, obj: "empty", top: 222, left: 311 },
            { id: 0, obj: "border", top: 222, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 272, left: 11 },
            { id: 202, obj: "mushroom", top: 272, left: 61 },
            { id: 0, obj: "empty", top: 272, left: 111 },
            { id: 0, obj: "empty", top: 272, left: 161 },
            { id: 103, obj: "stone", top: 272, left: 211 },
            { id: 0, obj: "empty", top: 272, left: 261 },
            { id: 0, obj: "empty", top: 272, left: 311 },
            { id: 0, obj: "border", top: 272, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 322, left: 11 },
            { id: 0, obj: "empty", top: 322, left: 61 },
            { id: 0, obj: "empty", top: 322, left: 111 },
            { id: 0, obj: "empty", top: 322, left: 161 },
            { id: 203, obj: "apple", top: 322, left: 211 },
            { id: 0, obj: "empty", top: 322, left: 261 },
            { id: 0, obj: "empty", top: 322, left: 311 },
            { id: 0, obj: "border", top: 322, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 372, left: 11 },
            { id: 0, obj: "border", top: 372, left: 61 },
            { id: 0, obj: "border", top: 372, left: 111 },
            { id: 0, obj: "border", top: 372, left: 161 },
            { id: 0, obj: "border", top: 372, left: 211 },
            { id: 0, obj: "border", top: 372, left: 261 },
            { id: 0, obj: "border", top: 372, left: 311 },
            { id: 0, obj: "border", top: 372, left: 361 }
        ]
    ],
    4: [
        [
            { id: 0, obj: "border", top: 22, left: 11 },
            { id: 0, obj: "border", top: 22, left: 61 },
            { id: 0, obj: "border", top: 22, left: 111 },
            { id: 0, obj: "border", top: 22, left: 161 },
            { id: 0, obj: "border", top: 22, left: 211 },
            { id: 0, obj: "border", top: 22, left: 261 },
            { id: 0, obj: "border", top: 22, left: 311 },
            { id: 0, obj: "border", top: 22, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 72, left: 11 },
            { id: 1, obj: "hedgehog", top: 72, left: 61 },
            { id: 0, obj: "empty", top: 72, left: 111 },
            { id: 0, obj: "empty", top: 72, left: 161 },
            { id: 0, obj: "empty", top: 72, left: 211 },
            { id: 0, obj: "empty", top: 72, left: 261 },
            { id: 0, obj: "empty", top: 72, left: 311 },
            { id: 0, obj: "border", top: 72, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 122, left: 11 },
            { id: 0, obj: "empty", top: 122, left: 61 },
            { id: 300, obj: "question", top: 122, left: 111 },
            { id: 301, obj: "question", top: 122, left: 161 },
            { id: 0, obj: "empty", top: 122, left: 211 },
            { id: 302, obj: "question", top: 122, left: 261 },
            { id: 303, obj: "question", top: 122, left: 311 },
            { id: 0, obj: "border", top: 122, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 172, left: 11 },
            { id: 304, obj: "question", top: 172, left: 61 },
            { id: 305, obj: "question", top: 172, left: 111 },
            { id: 306, obj: "question", top: 172, left: 161 },
            { id: 307, obj: "question", top: 172, left: 211 },
            { id: 0, obj: "empty", top: 172, left: 261 },
            { id: 0, obj: "empty", top: 172, left: 311 },
            { id: 0, obj: "border", top: 172, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 222, left: 11 },
            { id: 308, obj: "question", top: 222, left: 61 },
            { id: 0, obj: "empty", top: 222, left: 111 },
            { id: 0, obj: "empty", top: 222, left: 161 },
            { id: 309, obj: "question", top: 222, left: 211 },
            { id: 0, obj: "empty", top: 222, left: 261 },
            { id: 310, obj: "question", top: 222, left: 311 },
            { id: 0, obj: "border", top: 222, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 272, left: 11 },
            { id: 0, obj: "empty", top: 272, left: 61 },
            { id: 0, obj: "empty", top: 272, left: 111 },
            { id: 311, obj: "question", top: 272, left: 161 },
            { id: 312, obj: "question", top: 272, left: 211 },
            { id: 0, obj: "empty", top: 272, left: 261 },
            { id: 0, obj: "empty", top: 272, left: 311 },
            { id: 0, obj: "border", top: 272, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 322, left: 11 },
            { id: 0, obj: "empty", top: 322, left: 61 },
            { id: 313, obj: "question", top: 322, left: 111 },
            { id: 0, obj: "empty", top: 322, left: 161 },
            { id: 314, obj: "question", top: 322, left: 211 },
            { id: 315, obj: "question", top: 322, left: 261 },
            { id: 316, obj: "question", top: 322, left: 311 },
            { id: 0, obj: "border", top: 322, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 372, left: 11 },
            { id: 0, obj: "border", top: 372, left: 61 },
            { id: 0, obj: "border", top: 372, left: 111 },
            { id: 0, obj: "border", top: 372, left: 161 },
            { id: 0, obj: "border", top: 372, left: 211 },
            { id: 0, obj: "border", top: 372, left: 261 },
            { id: 0, obj: "border", top: 372, left: 311 },
            { id: 0, obj: "border", top: 372, left: 361 }
        ]
    ],
    5: [
        [
            { id: 0, obj: "border", top: 22, left: 11 },
            { id: 0, obj: "border", top: 22, left: 61 },
            { id: 0, obj: "border", top: 22, left: 111 },
            { id: 0, obj: "border", top: 22, left: 161 },
            { id: 0, obj: "border", top: 22, left: 211 },
            { id: 0, obj: "border", top: 22, left: 261 },
            { id: 0, obj: "border", top: 22, left: 311 },
            { id: 0, obj: "border", top: 22, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 72, left: 11 },
            { id: 1, obj: "hedgehog", top: 72, left: 61 },
            { id: 0, obj: "empty", top: 72, left: 111 },
            { id: 0, obj: "empty", top: 72, left: 161 },
            { id: 200, obj: "apple", top: 72, left: 211 },
            { id: 0, obj: "empty", top: 72, left: 261 },
            { id: 100, obj: "stone", top: 72, left: 311 },
            { id: 0, obj: "border", top: 72, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 122, left: 11 },
            { id: 101, obj: "stone", top: 122, left: 61 },
            { id: 102, obj: "stone", top: 122, left: 111 },
            { id: 0, obj: "empty", top: 122, left: 161 },
            { id: 0, obj: "empty", top: 122, left: 211 },
            { id: 0, obj: "empty", top: 122, left: 261 },
            { id: 0, obj: "empty", top: 122, left: 311 },
            { id: 0, obj: "border", top: 122, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 172, left: 11 },
            { id: 0, obj: "empty", top: 172, left: 61 },
            { id: 0, obj: "empty", top: 172, left: 111 },
            { id: 0, obj: "empty", top: 172, left: 161 },
            { id: 103, obj: "stone", top: 172, left: 211 },
            { id: 201, obj: "mushroom", top: 172, left: 261 },
            { id: 0, obj: "empty", top: 172, left: 311 },
            { id: 0, obj: "border", top: 172, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 222, left: 11 },
            { id: 0, obj: "empty", top: 222, left: 61 },
            { id: 202, obj: "mushroom", top: 222, left: 111 },
            { id: 104, obj: "stone", top: 222, left: 161 },
            { id: 0, obj: "empty", top: 222, left: 211 },
            { id: 0, obj: "empty", top: 222, left: 261 },
            { id: 105, obj: "stone", top: 222, left: 311 },
            { id: 0, obj: "border", top: 222, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 272, left: 11 },
            { id: 0, obj: "empty", top: 272, left: 61 },
            { id: 0, obj: "empty", top: 272, left: 111 },
            { id: 106, obj: "stone", top: 272, left: 161 },
            { id: 0, obj: "empty", top: 272, left: 211 },
            { id: 203, obj: "apple", top: 272, left: 261 },
            { id: 0, obj: "empty", top: 272, left: 311 },
            { id: 0, obj: "border", top: 272, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 322, left: 11 },
            { id: 107, obj: "stone", top: 322, left: 61 },
            { id: 0, obj: "empty", top: 322, left: 111 },
            { id: 0, obj: "empty", top: 322, left: 161 },
            { id: 204, obj: "mushroom", top: 322, left: 211 },
            { id: 0, obj: "empty", top: 322, left: 261 },
            { id: 108, obj: "stone", top: 322, left: 311 },
            { id: 0, obj: "border", top: 322, left: 361 }
        ],
        [
            { id: 0, obj: "border", top: 372, left: 11 },
            { id: 0, obj: "border", top: 372, left: 61 },
            { id: 0, obj: "border", top: 372, left: 111 },
            { id: 0, obj: "border", top: 372, left: 161 },
            { id: 0, obj: "border", top: 372, left: 211 },
            { id: 0, obj: "border", top: 372, left: 261 },
            { id: 0, obj: "border", top: 372, left: 311 },
            { id: 0, obj: "border", top: 372, left: 361 }
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
