import * as React from 'react';

import Cards from '../../Cards';
import { CardGridContainer, Inner, Grid } from './styles';
const CardGrid = (props) => {
    // console.log('CardGrid', props);
    const getLayout = () => {
        switch(props.fields.layout) {
            case 'Two Per Row':
                return 'layout--50';
            default:
                return 'layout--33';
        }
    }

    const layout = getLayout();
    return(
        <CardGridContainer>
            <Inner>
                <h2>{props.fields.heading}</h2>
                <p>{props.fields.text}</p>
                <Grid className={layout}>
                    <Cards cards={props.fields.cards} />
                </Grid>
            </Inner>
        </CardGridContainer>
    )
}

export default CardGrid;