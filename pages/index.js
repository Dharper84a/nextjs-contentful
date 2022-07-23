import deliveryClient from '../lib/datasource/contentful/delivery';

import Layout from '../components/Layout';
import PageSections from '../components/PageSections';

export default function Home(props) {  
    console.log('Page', props);
    return (
        <Layout>
            <PageSections sections={props.fields?.pageSections} />
        </Layout>
    )
}

export async function getStaticProps() {
    const entry = await deliveryClient.homepage();
    
    if(entry) {
        return {
            props: { ...entry },
            revalidate: 30,
        }
    }

    return {
        notFound: true
    }
   
}