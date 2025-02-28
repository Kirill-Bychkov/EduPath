import { View, TextInput, Text, StyleSheet } from "react-native";
import CodeEditor from "@rivascva/react-native-code-editor";
import { forwardRef } from "react";
import { useInterpreter } from "../hooks/useInterpreter";
import { dmsInterpreter } from "../config";

const Interpreter = ({ style }, ref) => {
  const { userCode, setUserCode, input, setInput, output, setOutput } = useInterpreter(ref);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <CodeEditor
          style={styles.codeEditor}
          language="javascript"
          syntaxStyle={style.themeCodeEditor}
          showLineNumbers
          autoFocus={false}
          initialValue={`// Здесь пишите код\n`}
          value={userCode}
          onChange={setUserCode}
        />
      </View>

      <View style={styles.container}>
        <View style={styles.ioContainer}>
          <View style={[styles.emojisContainer, {
            backgroundColor: style.backgroundColorIoText
          }]}>
            <Text style={styles.emoji}>✏️</Text>
          </View>

          <TextInput
            style={[styles.ioText, {
              height: dmsInterpreter.styleStatic.minHeightIoText,
              color: style.colorIoText.default,
              borderColor: style.backgroundColorIoText,
              backgroundColor: style.backgroundColorIoText
            }]}
            placeholder="Входные данные"
            placeholderTextColor={style.colorPlaceholder}
            multiline={false}
            value={input}
            onChangeText={setInput}
          />
        </View>

        <View style={styles.ioContainer}>
          <View style={[styles.emojisContainer, {
            backgroundColor: style.backgroundColorIoText
          }]}>
            <Text style={styles.emoji}>🖨️</Text>
          </View>
          
          <TextInput
            style={[styles.ioText, {
              minHeight: dmsInterpreter.styleStatic.minHeightIoText,
              color: output.type === "error"
                ? style.colorIoText.error
                : output.type === "success"
                  ? style.colorIoText.success
                  : style.colorIoText.default,
              borderColor: style.backgroundColorIoText,
              backgroundColor: style.backgroundColorIoText
            }]}
            placeholder="Результат выполнения кода"
            placeholderTextColor={style.colorPlaceholder}
            multiline
            readOnly
            value={output.text}
            onChange={setOutput}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  codeEditor: {
    fontSize: dmsInterpreter.styleStatic.fontSizeCodeEditor,
    inputLineHeight: dmsInterpreter.styleStatic.inputLineHeightCodeEditor,
    highlighterLineHeight: dmsInterpreter.styleStatic.highlighterLineHeightCodeEditor,
    width: dmsInterpreter.styleDynamic.width,
    marginTop: dmsInterpreter.styleDynamic.marginTopCodeEditor,
    marginBottom: dmsInterpreter.styleDynamic.marginBottom
  },
  ioContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: dmsInterpreter.styleDynamic.width,
    marginBottom: dmsInterpreter.styleDynamic.marginBottom
  },
  emojisContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: dmsInterpreter.styleStatic.widthEmojisContainer,
    height: dmsInterpreter.styleStatic.minHeightIoText,
    marginRight: dmsInterpreter.styleStatic.marginRightEmojisContainer,
    borderRadius: dmsInterpreter.styleDynamic.borderRadius
  },
  ioText: {
    flex: 1,
    paddingLeft: dmsInterpreter.styleStatic.paddingLeftIoText,
    borderRadius: dmsInterpreter.styleDynamic.borderRadius,
    fontSize: dmsInterpreter.styleStatic.fontSizeIoText
  },
  emoji: {
    fontSize: dmsInterpreter.styleStatic.sizeEmoji
  }
});

export default forwardRef(Interpreter);
