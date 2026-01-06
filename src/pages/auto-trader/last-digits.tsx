import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/hooks/useStore';
import { Localize } from '@deriv-com/translations';
import classNames from 'classnames';

const LastDigits = observer(() => {
    const { smart_trading } = useStore();
    const { last_20_digits, last_digit } = smart_trading;

    return (
        <div className='last-digits-panel'>
            <div className='panel-title'>
                <Localize i18n_default_text='Last 20 Digits' />
            </div>
            <div className='digits-row'>
                {last_20_digits.map((digit, index) => (
                    <div
                        key={index}
                        className={classNames('digit-box', {
                            'even': digit % 2 === 0,
                            'odd': digit % 2 !== 0,
                            'pulse': index === last_20_digits.length - 1 // Highlight latest
                        })}
                    >
                        {digit}
                    </div>
                ))}
            </div>
            <div className='current-digit-display'>
                <Localize i18n_default_text='Last Digit: ' />
                <span className='large-digit'>{last_digit !== null ? last_digit : '-'}</span>
            </div>
        </div>
    );
});

export default LastDigits;
