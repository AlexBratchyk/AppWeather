import LottieView from 'lottie-react-native';
import { StyleSheet, View } from 'react-native';
import { BACKGROUND_COLOR } from '../constants/colors';

const Error = () => {
  return (
    <View style={styles.main}>
        <LottieView autoPlay
          loop source={require('../assets/animations/ErrorAnimation.json')} 
          style={{height:250, width:250}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BACKGROUND_COLOR
    },
    text: {
        color: '#fff'
    }
});

export default Error;