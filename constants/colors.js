import { CodeEditorSyntaxStyles } from '@rivascva/react-native-code-editor';

const EDUCATION = {
    primary: "#139cbd",
    
    bar_light_background: "#ffffff",
    bar_dark_background: "#111827",

    light_background: "#ededed",
    dark_background: "#253454",

    Header_light_text: "#3b3b3b",
    Header_dark_text: "#f2f2f2",

    light_text: "#4a4a4a",
    dark_text: "#e3e3e3",
    
    not_active: '#737373'
};

const GAME = {
    animation: {
        background: "#000000"
    },
    menu: {
        background: "#49A175"
    },
    window_modal: {
        back_background: "#00000040",
        background: "#EED755",
        text: "#000000"
    },
    bottomsheet: {
        background: "#EFEFEF"
    }
};

const INTERPRETER = {
    background: {
        light: "#fafafa",
        dark: "#282c34"
    },
    text: {
        light: {
            default: "#383a42",
            error: "#e45649",
            success: "#50a14f"
        },
        dark: {
            default: "#abb2bf",
            error: "#e06c75",
            success: "#98c379"
        }
    },
    placeholder: {
        light: "#a0a1a7",
        dark: "#5c6370"
    },
    code_editor: {
        light: CodeEditorSyntaxStyles.atomOneLight,
        dark: CodeEditorSyntaxStyles.atomOneDark
    }
};

const COLORS = { EDUCATION, GAME, INTERPRETER };
export default COLORS;
