
import Header from "./header";
import Courses from "./Courses";
import Campus from "./campus";
import Facility from "./facilities";
import Testimonials from "./testimonials";
import Cta from "./Cta";
import Footer from "./footer";
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll'
import FadeIn from 'react-fade-in';



function App() {
  return (
    <div >
      <FadeIn>
      <Header />
      </FadeIn>
      
      <ScrollAnimation animateIn="fadeIn">
      <Courses />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
      <Campus />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
      <Facility />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
      <Testimonials />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
      <Cta />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
      <Footer />
      </ScrollAnimation>
    </div>
  )
}
export default App;
