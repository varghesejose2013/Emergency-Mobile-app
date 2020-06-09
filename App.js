import {createAppContainer} from 'react-navigation';
import{createStackNavigator} from 'react-navigation-stack';
import MainScreen from './screens/MainScreen/';
import AboutScreen from './screens/AboutScreen';
import EmergencyScreen from './screens/EmergencyScreen';
import KitScreen from'./screens/KitScreen';
import ViambScreen from './screens/ViambScreen';
import VicheScreen from './screens/VicheScreen';
import VichrScreen from './screens/VichrScreen';
import VikarScreen from './screens/VikarScreen';
import VikutScreen from './screens/VikutScreen';
import VimavScreen from './screens/VimavScreen';
import TabScreen from  './screens/TabScreen';
import NotificationScreen from './screens/NotificationScreen';
import WebviewScreen from './screens/WebviewScreen';
import WebfaceScreen from'./screens/WebfaceScreen';
import WebweaScreen from './screens/WebweaScreen';
import splash from './screens/Splash.js';
const MainNavigator = createStackNavigator({
  splash: {screen: splash},
  Main: {screen: MainScreen},
  About:{screen:AboutScreen},
  Emergency:{screen:EmergencyScreen},
  Ekit:{screen:KitScreen},
  Vam:{screen:ViambScreen},
  Vch:{screen: VicheScreen},
  Vcr:{screen: VichrScreen},
  Vka:{screen: VikarScreen},
  Vku:{screen:VikutScreen },
  Vma:{screen:VimavScreen},
  Ta:{screen:TabScreen },
  noti:{screen:NotificationScreen},
  webview:{screen:WebviewScreen},
  webface:{screen:WebfaceScreen},
  webwea:{screen:WebweaScreen}

},
{
  initialRouteName:'splash',
  headerMode: 'none'
}
);
const App = createAppContainer(MainNavigator);
export default App;