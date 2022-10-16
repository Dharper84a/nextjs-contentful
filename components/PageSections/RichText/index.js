import * as React from 'react';
import RichTextRenderer from '../../Common/RichTextRenderer';

import { ComponentBox } from './styles';
const RichText = (props) => {
    console.log(props)
    const richText = props.fields?.richText;
    return(
        <ComponentBox>
            {richText &&
            <RichTextRenderer richText={richText} />
            }
        </ComponentBox>
    )
}

export default RichText;