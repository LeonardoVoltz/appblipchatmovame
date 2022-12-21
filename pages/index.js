import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer>
    <script src = "https://unpkg.com/blip-chat-widget"

type = "text/javascript" >

</script>  

<script>

    (function() {

        window.onload = function() {

            var queryString = window.location.search;

            var urlParams = new URLSearchParams(queryString);

            new BlipChat()

                .withAppKey('bW92YTI6ZjAxMjY5YjAtZGU4NC00ZTkyLWFjM2ItOGMwZjdlNmU3YzRj')

                .withButton({

                    "color": "#2CC3D5",

                    "icon": ""

                })

                .withCustomCommonUrl('https://mova.chat.blip.ai/')

                .withAccount({

                    "extras": {

                        "utm_source": urlParams.get('utm_source'),

                        "utm_medium": urlParams.get('utm_medium'),

                        "utm_campaign": urlParams.get('utm_campaign'),

                        "utm_term": urlParams.get('utm_term'),

                        "utm_content": urlParams.get('utm_content')

                    }

                })

                .build();

            }

    })();

</script>
    </Footer>
    </div>
  )
}
