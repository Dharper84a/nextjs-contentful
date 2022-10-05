import * as React from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import HeaderMenu from "../../Menus/Header";
import { Overlay } from "..";

import { ComponentBox, SiteIcon, MenuButtonBox, MenuButton } from "./styles";

const Header = (props) => {
    const { ref, inView, entry } = useInView({
        triggerOnce: true,
    });

    const [menuState, setMenuState] = React.useState('closed');

    const openingDuration = 500;
    const closingDuration = 300;

    const toggleMenu = () => {
        switch(menuState) {
            case 'closed':
                setMenuState('opening');
                break;
            case 'opened':
                setMenuState('closing');
                break;
        }
        
    };

    React.useEffect(() => {
        let ignore = false;
        
        if(menuState === 'opening') {
            setTimeout(() => {
                if(!ignore) {
                    setMenuState('opened');
                }
            }, openingDuration);
        } else if(menuState === 'closing') {
            setTimeout(() => {
                if(!ignore) {
                    setMenuState('closed');
                }
            }, closingDuration);
        }
        return () => {
            ignore = true;
        }
        
    }, [menuState])
    return (
        <>
        <ComponentBox transitionState={menuState}>
            <SiteIcon>
                <Link href="/">
                    <a
                        title="Navigate to Westlink Church of Christ homepage"
                        className={inView ? "in-view" : "not-in-view"}
                        ref={ref}
                    >
                        <Image
                            src="/images/Icon-Logo-256x256.png"
                            alt=""
                            width={48}
                            height={48}
                        />
                    </a>
                </Link>
            </SiteIcon>
            <MenuButtonBox>
                <button onClick={toggleMenu} aria-label="open menu drawer">
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </MenuButtonBox>
            
        </ComponentBox>
        {menuState !== 'closed' && (
            <Overlay
                type="drawer"
                transitionState={menuState}
                transitionTimings={{opening: openingDuration, closing: closingDuration}}
                onCloseOverlay={toggleMenu}
            >
                <HeaderMenu onCloseOverlay={toggleMenu} />
            </Overlay>
        )}
        </>
    );
};

export default Header;
