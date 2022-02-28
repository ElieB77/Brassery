import { Text, View } from "react-native";
import LoadFonts from "./components/layouts/LoadFonts";
import ProgressBar from "./components/utils/ProgressBar";
import InputText from "./components/utils/form-elements/Input";
import CustomButton from "./components/CustomButton";

const App = () => {
  return (
    <LoadFonts>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <InputText type="password" />
        <InputText type="text" />
        <InputText type="textarea" />
      </View>
    </LoadFonts>
  );
};

export default App;
