

import styles from './Container.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(classNames)

function Container({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}

export default Container;