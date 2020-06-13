import Head from "next/head";
import { Button } from "devmrin-ui";

const Home = () => (
  <div className="container">
    <Head>
      <title>Mrinmay | Frontend App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Button onClick={() => console.log("button clicked!")}>Click me</Button>
    </main>

    <style jsx>{`
      main {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>
);

export default Home;
