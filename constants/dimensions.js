const GAME = {
    menu: {
        maxCoordY: 1344,
        heightBottomObj: 84
    },
    window_modal: {
        width: 340,
        minHeight: 140,
        maxHeight: 245,
        borderRadius: 15,
        topCloseButton: -16,
        leftCloseButton: 324,
        fontSizeTitle: 24,
        lineHeightTitle: 35,
        marginTopTitle: 8,
        fontSizeDescription: 18,
        marginBottomDescription: 5,
        marginBottomStartButton: 16
    },
    level: {
        paddingHorizontalButtonsContainer: 6,
        paddingVerticalButtonsContainer: 15,
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
    }
};

const INTERPRETER = {
    general: {
        width: 400,
        marginTopCodeEditor: 10,
        marginBottom: 10,
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
        paddingLeftIoText: 10
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
        paddingLeftIoText: 17
    }
};

const DIMENSIONS = { GAME, INTERPRETER };
export default DIMENSIONS;
