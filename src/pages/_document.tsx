import { Html, Head, Main, NextScript } from 'next/document';
import { COLORS } from '../constants/themes';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Open+Sans:ital,wght@0,300;0,400;0,800;1,300;1,400&display=swap" rel="stylesheet" />

                <meta property="og:title" content="Silvy" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://silvy.rains.cafe" />
                <meta property="og:image" content="https://silvy.rains.cafe/silvy.png" />
                <meta property="og:description" content="An app for creating, sharing, and collaborating on strats for XIV" />
                <meta name="theme-color" content={COLORS.primary} />

                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}