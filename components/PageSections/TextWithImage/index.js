import * as React from 'react';
import Image from 'next/image';

import RichTextRenderer from '../../Common/RichTextRenderer';

import { TextWithImageContainer, Inner } from './styles';
const TextWithImage = (props) => {
    // console.log('TextWithImage', props);
    const image = props.fields.image.fields;
    const richText = props.fields.text;
    return(
        <TextWithImageContainer>
            <Inner>
                <figure>
                    <Image
                        src={`https:${image.file.url}`}
                        width={image.file.details.image.width}
                        height={image.file.details.image.height}
                        alt={image.description || ''}
                        priority
                    />
                </figure>
                <aside>
                    <h2>{props.fields.heading}</h2>
                    <RichTextRenderer richText={richText} />
                </aside>
            </Inner>
        </TextWithImageContainer>
    )
}

export default TextWithImage;