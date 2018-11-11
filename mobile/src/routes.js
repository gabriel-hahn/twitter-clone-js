import { createStackNavigator } from 'react-navigation';

import Login from './pages/Login';
import New from './pages/New';
import Timeline from './pages/Timeline';

const Routes = createStackNavigator({
    Login, Timeline, New
});

export default Routes;
