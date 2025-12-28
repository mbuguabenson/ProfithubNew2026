import { DerivLogo } from '@deriv-com/ui';
import { motion } from 'framer-motion';
import './initial-loader.scss';

export default function InitialLoader() {
    // Simple loader without fake progress simulation

    return (
        <div className='initial-loader-container'>
            <motion.div
                className='prominent-logo-container'
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <DerivLogo variant='wallets' className="prominent-logo" />
            </motion.div>

            <motion.div
                className='loader-header'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h1>Profit Hub</h1>
                <p>Smart Analysis • High Accuracy • Advanced Automation</p>
                <motion.span
                    className='status-text'
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    Initializing application...
                </motion.span>
            </motion.div>

            <motion.div
                className='loading-spinner-wrapper'
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <div className='spinner' />
            </motion.div>

            <motion.div
                className='footer-branding'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
            >
                <span>Certified Trading Platform</span>
                <DerivLogo variant='wallets' className="deriv-logo" />
            </motion.div>
        </div>
    );
}

