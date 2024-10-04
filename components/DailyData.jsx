import { LineChart } from "react-native-chart-kit";
import { Dimensions, StyleSheet, View } from "react-native";
import { NAV_BACKGROUND_COLOR } from "../constants/colors";

const { width } = Dimensions.get("window");

const DailyData = ({dayData, tempData}) => {
  return (
    <View style={styles.main}>
      <LineChart
        data={{labels: dayData, datasets: [{data: tempData}]}} width={width-40}
        height={115} withInnerLines={false} yAxisInterval={1}
        chartConfig={{
          backgroundColor: NAV_BACKGROUND_COLOR,
          backgroundGradientFrom: NAV_BACKGROUND_COLOR,
          backgroundGradientTo: NAV_BACKGROUND_COLOR,
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(230, 230, 230, ${opacity})`,
          style: {borderRadius: 25},
          propsForDots: {
            r: "4",
            strokeWidth: "2",
            stroke:NAV_BACKGROUND_COLOR,
          },
        }}
        bezier
        style={{borderRadius: 25, alignSelf:'center', paddingBottom:50}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginHorizontal:'auto'
  }
});

export default DailyData;