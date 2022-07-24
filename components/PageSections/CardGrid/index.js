import * as React from 'react';

import Cards from '../../Cards';
import { CardGridContainer, Inner, Grid } from './styles';
const CardGrid = (props) => {
    return(
        <CardGridContainer>
            <Inner>
                <h2>{props.fields.heading}</h2>
                <p>{props.fields.text}</p>
                <Grid>
                    <Cards cards={props.fields.cards} />
                </Grid>
            </Inner>
        </CardGridContainer>
    )
}

export default CardGrid;