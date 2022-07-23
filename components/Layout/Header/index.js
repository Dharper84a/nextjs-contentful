import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {HeaderContainer, Inner} from './styles'

const Header = (props) => {

    return(
        <HeaderContainer>
            <Inner>
                <div>
                    <figure>
                        <Image
                            src="/images/Icon-Logo-256x256.png"
                            alt=""
                            width={48}
                            height={48}
                        />
                    </figure>
                    <Link href="/">
                        <a title="Navigate to Westlink Church of Christ homepage">
                            Westlink Church of Christ
                        </a>
                    </Link>
                </div>
                <nav>
                    Menu
                </nav>
            </Inner>
        </HeaderContainer>
    )
}

export default Header;