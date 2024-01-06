import { ScrollView } from "react-native";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function SyntaxViewPopup(props) {
  return (
    <ScrollView>
      <CodeHighlighter
        hljsStyle={atomDark}
        language="typescript"
        textStyle={styles.code}
        style={styles.highlighter}
      >
        {props.code}
      </CodeHighlighter>
    </ScrollView>
  );
}
