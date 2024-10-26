import Navbar from "./component/header/header";
import Hero from "./component/hero/hero";
import Aboutme from "./component/about/about";
import Services from "./component/allservices/services";
import Contact from "./component/contact/contact";
import FooterPf from "./component/footer/footer";
function App() {
  return (
    <>
   
      <Navbar />
      <Hero />
      <Aboutme />
      <Services />
      <Contact />
      <FooterPf/>
      
    </>
  );
}

export default App;
