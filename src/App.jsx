import Banner from "./components/Banner";
import Header from "./components/Header";

import { Suspense } from "react";

import Technologies from "./components/technologies/Technologies";

const technologiesData = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};



function App() {

  const technologiesPromise = technologiesData();
  console.log(technologiesPromise);

  return (
    <>
      <Header></Header>
      <Banner></Banner>

      <Suspense fallback={<h2>Loading....</h2>}>
        <Technologies technologiesPromise={technologiesPromise}></Technologies>
      </Suspense>
    </>
  );
}

export default App;