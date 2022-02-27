import { Text, View } from 'react-native';
import LoadFonts from './components/layouts/LoadFonts'
import ProgressBar from './components/utils/ProgressBar';


const App = () => {
  return (
    <LoadFonts>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ProgressBar pourcent='45' />
      </View>
    </LoadFonts>
  );
}

export default App