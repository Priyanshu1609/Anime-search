import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {


    render() {
        return (
            <Html lang = "en">
                <Head >
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                  
                    <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Raleway&family=Roboto:wght@300&display=swap" rel="stylesheet"/>
                </Head>
                <body className ="font-Roboto">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument