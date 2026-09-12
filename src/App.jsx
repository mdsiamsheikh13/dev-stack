import Banner from "./components/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Technologies from "./components/technologies/Technologies";

const technologiesData = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};



function App() {

  const technologiesPromise = technologiesData();


  return (
    <>
      <Header></Header>
      <Banner></Banner>

      <Suspense fallback={<h2>Loading....</h2>}>
        <Technologies technologiesPromise={technologiesPromise}></Technologies>
      </Suspense>

      <footer></footer>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
}

export default App;