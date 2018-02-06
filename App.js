import { TabNavigator } from 'react-navigation';
import HomeScreen from './scenes/HomeScreen';
import SettingScreen from './scenes/SettingScreen';
import CounterApp from './scenes/CounterApp';

export default TabNavigator(
  {
    Home: { screen: HomeScreen },
    Setting: { screen: SettingScreen },
    'Counter App': { screen: CounterApp },
  },
  {
    tabBarPosition: 'bottom',
  }
);
