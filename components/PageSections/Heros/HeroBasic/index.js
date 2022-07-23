import * as React from 'react';
import Image from 'next/image';

import {HeroBasicContainer, Inner} from './styles';
const HeroBasic = (props) => {
    const image = props.fields.image.fields || false;
    return (
        <HeroBasicContainer>
            
            <Inner>
                {image &&
                    <Image
                        src={`https:${image.file.url}`}
                        layout="fill"
                        objectFit="cover"
                        alt={image.description || ''}
                        priority
                    />
                }
                <h1>{props.fields.title}</h1>
            </Inner>
        </HeroBasicContainer>
    )
}

export default HeroBasic;