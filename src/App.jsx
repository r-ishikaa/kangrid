import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer"
const App=()=> {
  

  return (
     <>
    <div className= "pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
       <Header />
       <Hero  />
       <Footer />
    </div>
    <ButtonGradient/>
     </>
  );
}
  

export default App;
