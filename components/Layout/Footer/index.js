import * as React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import {FooterContainer, Inner} from './styles'

const Footer = (props) => {

    return(
        <FooterContainer>
            <Inner>
                <nav>
                    <span>
                        <Link href="/donate">
                            <a title="Discover options to donate to Westlink Church of Christ">
                                Donate
                            </a>
                        </Link>
                    </span>
                    <span>
                        <Link href="/contact">
                            <a title="Contact Westlink Church of Christ">
                                Contact Us
                            </a>
                        </Link>
                    </span>
                </nav>
                <div>
                    <p>
                        &copy;Copyright 2022 Westlink Church of Christ.
                    </p>
                    <p>
                        Created with <FontAwesomeIcon icon={faHeart} /> by Donald Harper
                    </p>
                </div>
            </Inner>
        </FooterContainer>
    )
}

export default Footer;