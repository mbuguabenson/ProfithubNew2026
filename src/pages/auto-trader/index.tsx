import { observer } from 'mobx-react-lite';
import SmartAuto24Tab from '../smart-trading/components/smart-auto24-tab';
import './auto-trader.scss';

const AutoTrader = observer(() => {
    return (
        <div className='auto-trader-wrapper'>
            <SmartAuto24Tab />
        </div>
    );
});

export default AutoTrader;
