import Head from 'next/head';
import { Card } from '../components/common/Card';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Dashboard · Silvy</title>
            </Head>

            <Card>
                Dashboard
            </Card>
        </div>
    )
}