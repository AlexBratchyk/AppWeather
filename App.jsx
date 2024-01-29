import RootNavigator
    from "./components/RootNavigator";
import TemperatureContextProvider
    from "./context/TempartureContext";

export default function App() {
  return (
      <TemperatureContextProvider>
          <RootNavigator />
      </TemperatureContextProvider>
  );
};