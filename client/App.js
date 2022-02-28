import { Text, View } from "react-native";
import LoadFonts from "./components/layouts/LoadFonts";
import ProgressBar from "./components/utils/ProgressBar";
import InputText from "./components/utils/form-elements/Input";
import CustomButton from "./components/CustomButton";
import Dropdown from "./components/utils/form-elements/Dropdown";
import Input from "./components/utils/form-elements/Input";

const App = () => {
  return (
    <LoadFonts>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Dropdown />
        <Input type="searchInput" />
      </View>
    </LoadFonts>
  );
};

export default App;
