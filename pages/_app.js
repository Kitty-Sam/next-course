import '../styles/global.css'
import NextNprogress from 'nextjs-progressbar';

export default function MyApp({Component, pageProps}) {
    return (
    <>
        <NextNprogress
            color="yellow"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
        />
        <Component {...pageProps} />
       {/* <style jsx global>
            {`
            body {
            font-family: 'Mochiy Pop P One', sans-serif;
            }`}
        </style>*/}
    </>
    )}