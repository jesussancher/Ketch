import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { switchMode, switchModeManualOff, switchModeManualOn } from './redux/actions/switchModeActions';
import './styles/dayStyles/dayStyles.css';
import './styles/nightStyles/nightStyles.css';
import ModernLigthSwitch from './components/switches/modernLight/modernLightSwitch';

function App() {

    const classNames = require('classnames');
    const dispatch = useDispatch();
    const { nightMode } =  useSelector(state => state.switchNight);

    const switchModeFn = (state) => {
      if(state) {
        dispatch(switchModeManualOn())
      } else {
        dispatch(switchModeManualOff())
      }
    }
    return (
        <div className={classNames('body__day', {'body__night' : nightMode})}>
          <ModernLigthSwitch toggle={switchModeFn} mode={nightMode}/>
        </div>
    );
}

export default App;
