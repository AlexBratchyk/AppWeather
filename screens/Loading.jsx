import LottieView from 'lottie-react-native';
import { StyleSheet, View } from 'react-native';
import { BACKGROUND_COLOR } from '../constants/colors';

const Loading = () => {
  return (
    <View style={styles.main}>
        <LottieView autoPlay
        loop source={require('../assets/animations/Loading.json')} 
        style={{height:220, width:220}}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BACKGROUND_COLOR,
    },
    text: {
        color: '#fff',
        opacity: 0.4,
        fontSize: 30
    }
})

export default Loading;