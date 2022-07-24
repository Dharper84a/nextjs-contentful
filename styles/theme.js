const COLOR_REF = {
    // whites
    white: "#FFFFFF",
    offWhite: "#FAF9F6",
    // blacks
    black: "#000000",
    matteBlack: "#28282B",
    onyx: "#353935",
    charcoal: "#36454F",
    // grays
    gray: "#D3D3D3",
    mediumGray: "#EFEFEF",
    // greens
    pastelGreen: "#C1E1C1",
    // blues
    blue: "#0096FF",
    bluePurple: "#5D3FD3",
    blueSteel: '#4682B4',
    // accents
    pink: "#DA70D6",
    rubyRed: "#E0115F",
};

const COLOR_APP = {
    text: {
        dark: COLOR_REF.matteBlack,
        light: COLOR_REF.offWhite,
        link: COLOR_REF.blueSteel
    },
    background: {
        dark: COLOR_REF.matteBlack,
        light: COLOR_REF.offWhite,
    }
};
const COLORS = { ...COLOR_REF, ...COLOR_APP };

const LAYERS = {
    under: -1,
    base: 0,
    content: 10,
    overlay: 100,
    overlayContent: 110,
    modal: 200,
};

const LAYOUT_REF = {
    maxSiteWidth: 1920,
    minSiteWidth: 390,
    maxPageWidth: 1800,
    pagePadding: {
        top: 0,
        right: '6%',
        bottom: 0,
        left: '6%',
        css: '0 6% 0 6%',
    }
};
const LAYOUT_CONTAINERS = {
    container: {
        position: 'relative',
        width: '100%',
        maxWidth: LAYOUT_REF.maxSiteWidth + 'px',
        height: '100%',
        margin: '0 auto',
    },
    content: {
        width: '100%',
        maxWidth: LAYOUT_REF.maxPageWidth + 'px',
        height: '100%',
        margin: '0 auto',
        padding: LAYOUT_REF.pagePadding.css
    }
    
};

const LAYOUT = { ...LAYOUT_REF, ...LAYOUT_CONTAINERS };

const MEDIA_SIZE_REF = {
    smallest: '390px',
    mobile: '768px',
    tablet: '1024px',
    smallComputer: '1333px',
    mediumComputer: '1600px',
    largeComputer: '1800px',
}

const MEDIA_DEVICES = {
    iphones: `(max-width: ${MEDIA_SIZE_REF.mobile})`,
    ipads: `(max-width: ${MEDIA_SIZE_REF.tablet})`,
    smallMacs: `(max-width: ${MEDIA_SIZE_REF.smallComputer})`,
    mediumMacs: `(max-width: ${MEDIA_SIZE_REF.mediumComputer})`,
    largeMacs: `(max-width: ${MEDIA_SIZE_REF.largeComputer})`,
}

const TYPOGRAPHY = {
    bodyFont: 'Lato',
    headerFont: 'Lato',
    bodyFontSize: '18px',
    headerFontSizes: {
        max: '84px',
        min: '20px'
    }
}

const fontClamp = (min, max) => {
    const slope = (max - min) / (LAYOUT_REF.maxPageWidth - LAYOUT_REF.minSiteWidth);
    const yIntersection = -LAYOUT_REF.minSiteWidth * slope + min;

    const output = `clamp(${min}px, ${yIntersection.toFixed(2)}px + ${(slope * 100).toFixed(2)}vw, ${max}px)`;
    
    return output;
};

export const theme = {
    colors: COLORS,
    fonts: TYPOGRAPHY,
    layout: LAYOUT,
    layers: LAYERS,
    devices: MEDIA_DEVICES,
    helpers: {
        fontClamp: fontClamp
    }
};
