import Head from 'next/head'

export default function Home() {
  return (
    <div className="container mt-4">
      <Head>
        <title>Myk Klemme</title>
        <meta name="description" content="Full-stack developer & designer based in the San Francisco Bay Area." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row justify-content-center">
        <div className="col-10 col-md-8">
          Myk Klemme
          <hr className="my-4"/>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-10 col-md-8">
          <div className="row">
            <div className="col-8">
              <h1>
                Geek with ADHD: <em className="d-block">always be creating</em>
              </h1>
              <div className="mt-4">
                <p>
                  <strong title="'Hello, my name is Myk Klemme.' in Irish." data-tooltip="true">Dia duit, is mise Myk Klemme.</strong>
                </p>
                <p className="">
                  I'm a full-stack developer &amp; designer based in the San Francisco Bay Area. Currently working at <a
                  href="https://dropbox.com">Dropbox</a> &amp; <a href="https://docsend.com">Docsend</a>.
                </p>
                <p>
                  My super power is learning and my mission is to build things that make people's lives better.
                </p>
              </div>
            </div>
            <div className="col text-center">
              <img src="/images/profile-avatar.png" style={{width: 16 * 10}}  className="pixel img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
