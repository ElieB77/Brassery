import { Text, View } from 'react-native';
import LoadFonts from './components/layouts/LoadFonts'
import StyleGuide from './components/utils/StyleGuide'


const App = () => {
  return (
    <LoadFonts>
      <Text style={StyleGuide.typography.text1}>Open up App.js to start working on your app!</Text>
    </LoadFonts>
  );
}

export default App
