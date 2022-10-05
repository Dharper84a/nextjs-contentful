import React from "react";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import deliveryClient from "../../../../lib/datasource/contentful/delivery";

import useImage from "../../../../hooks/useImage";
import { CardComponent } from "./styles";

const CardSlide = (props) => {
    const image = useImage();
    const [state, setState] = React.useState("loading");
    const [cardData, setCardData] = React.useState(null);
   
    // console.log('Card Props', props);

    React.useEffect(() => {
        if (cardData === null) return () => {};
        if (cardData === false) {
            setState("error");
            return () => {};
        }
 
        if(image.isReady) setState('ready');
        
        // console.log(cardData);
        return () => {};
    }, [cardData, image]);

    React.useEffect(() => {
        const awaitCardData = async () => {
            const data = await deliveryClient.entryById(props.sys.id);
            setCardData(data?.fields || false);
            image.setImage(data?.fields?.image);   
        }

        awaitCardData();
        
    }, [props.sys.id]);
    return (
        <CardComponent componentState={state}>
            <figure>
                {image.isReady ? (
                <Image
                    src={image.image.src}
                    alt={image.image.alt || ''}
                    layout="fill"
                    objectFit="cover"
                />
                ):(
                <Image
                    src="/images/Icon-Logo-256x256.png"
                    alt=""
                    width={48}
                    height={48}
                />
                )}
            </figure>
            <h3>{cardData?.heading}</h3>
            <p>
                {cardData?.excerpt}
            </p>
            <footer>
                <button>
                    More Info
                </button>
            </footer>
        </CardComponent>
        
    );
};

export default CardSlide;
