import PropTypes from 'prop-types'

import styles from './styles.module.scss';

const CounterView = ({ counterValue, handleIncrement, handleDecrement, handleReset, isEvenValue}) => {
	return (
		<div className={styles.wrapper} style={{backgroundColor: isEvenValue ? 'green' : 'red'}}>
			<div className={styles.display}>{counterValue}</div>
			<div className={styles.display}>{isEvenValue ? 'Четное' : 'Нечетное'}</div>
			<div className={styles.controlButtons}>
				<button className={styles.controlButton} onClick={handleDecrement}>-</button>
				<button className={styles.controlButton} onClick={handleReset}>Reset</button>
				<button className={styles.controlButton} onClick={handleIncrement}>+</button>
			</div>
		</div>
	);
};

CounterView.propTypes = {
	counterValue: PropTypes.number.isRequired,
	handleIncrement: PropTypes.func.isRequired,
	handleDecrement: PropTypes.func.isRequired,
	handleReset: PropTypes.func.isRequired,
	isEvenValue: PropTypes.bool.isRequired,
}

export default CounterView;