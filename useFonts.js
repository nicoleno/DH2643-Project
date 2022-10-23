import * as Font from "expo-font";
 
export default useFonts = async () =>
  await Font.loadAsync({
    'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'Carter': require('./assets/fonts/CarterOne-Regular.ttf')
  });