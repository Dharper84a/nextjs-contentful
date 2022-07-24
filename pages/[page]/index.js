import * as React from 'react';
import deliveryClient from '../../lib/datasource/contentful/delivery';

import Layout from '../../components/Layout';
import PageSections from '../../components/PageSections';

const PagePath = (props) => {
    console.log('PagePath', props);
    return (
        <Layout>
            <PageSections sections={props.fields?.pageSections} />
        </Layout>
    )
}

export default PagePath;

export async function getStaticPaths() {
    const paths = [];
    const endpoints = await deliveryClient.endpoints('page');

    endpoints.forEach((endpoint) => {
        paths.push({
            params: {page: endpoint}
        })
    })

    return {
        paths: paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({params}) {
    return await deliveryClient.entry('page', 'slug', params.page).then((entry) => {
        return {
            props: { ...entry },
            revalidate: 30,
        }
    }).catch((err) => {
        console.log('ERROR', err)
        return { notFound: true }
    });
}