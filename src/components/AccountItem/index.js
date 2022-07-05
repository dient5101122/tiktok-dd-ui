import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tiktok-obj/1658952823058433~c5_300x300.webp?x-expires=1657083600&x-signature=emw4Beb%2BsQiLCUYBFHV725IIbFA%3D"
                alt="Dien"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Phan Trung Dien</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>phantrungdien</span>
            </div>
        </div>
    );
}

export default AccountItem;
