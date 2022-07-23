import * as React from 'react';

// Sections
import HeroFullWidth from './Heros/HeroFullWidth';
import TextWithImage from './TextWithImage';
import CardGrid from './CardGrid';

const PageSections = ({sections}) => {

    const getSection = (section, key) => {
        switch(section.sys.contentType.sys.id) {
            case 'pageSectionHeroFullWidth':
                return <HeroFullWidth {...section} key={key} />
            case 'pageSectionTextWithImage':
                return <TextWithImage {...section} key={key} />
            case 'pageSectionCardGrid':
                return <CardGrid {...section} key={key} />
            default: return <div key={key}>SECTION NOT FOUND</div>
        }
    }

    return(
        <>
        {sections &&
        sections.map((section, key) => {
            return getSection(section, key);
        })}
        </>
    )
}

export default PageSections;