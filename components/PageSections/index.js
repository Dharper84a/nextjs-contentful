import * as React from 'react';

/** Page Section Components */
// Hero Sections
import HeroFullWidth from './Heros/HeroFullWidth';
import HeroBasic from './Heros/HeroBasic';

// Image and Text Sections
import TextWithImage from './TextWithImage';
import TextWithGraphic from './TextWithGraphic';

// Card Group Sections
import CardGrid from './CardGrid';

const PageSections = ({sections}) => {
    
    const getSection = (section, key) => {
        console.log('Section', section);
        switch(section.sys.contentType.sys.id) {
            case 'pageSectionHeroFullWidth':
                return <HeroFullWidth {...section} key={key} />
            case 'pageSectionHeroBasic':
                return <HeroBasic {...section} key={key} />
            case 'pageSectionTextWithImage':
                return <TextWithImage {...section} key={key} />
            case 'pageSectionTextWithGraphic':
                return <TextWithGraphic {...section} key={key} />
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