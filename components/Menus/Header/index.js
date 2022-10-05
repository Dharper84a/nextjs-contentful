import * as React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


import { MenuContainer, MenuCloseBox } from './styles';
const HeaderMenu = (props) => {

    return(
        <MenuContainer>
            <nav>
                <Link href="#">
                    <a title="View dates and times of regular church services">
                        Schedule
                    </a>
                </Link>
            </nav>
            <MenuCloseBox>
                <button onClick={props.onCloseOverlay} aria-label="close menu drawer">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </MenuCloseBox>
        </MenuContainer>
    )
}

export default HeaderMenu;