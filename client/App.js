import { Text, View } from "react-native";
import LoadFonts from "./components/layouts/LoadFonts";
import StyleGuide from "./components/utils/StyleGuide";
import List from "./components/lists/list";
import ListItem from "./components/lists/listItem";

const App = () => {
    return (
        <LoadFonts
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <List>
                <ListItem key={1} title="Hello" content="Lorem ipsum" />
                <ListItem key={2} title="Hello" content="Lorem ipsum" />
                <ListItem key={3} title="Hello" content="Lorem ipsum" />
            </List>
        </LoadFonts>
    );
};

export default App;
