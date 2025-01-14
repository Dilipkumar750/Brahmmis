import logo from "./logo.svg";
import "./App.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import home1 from "./assets/images/slider/slide-01.png";
import home2 from "./assets/images/slider/slide-02.png";
import home3 from "./assets/images/slider/slide-03.png";
import Navabar from "./Navabar";
import Footer from "./Footer";
import Intro from "./Intro";
import AboutUs from "./AboutUs";
import WorkFlow from "./WorkFlow";
import Menu from "./Menu";
import Team from "./Team";
import Blog from "./Blog";
import Contactus from "./Contactus";
import Testimonials from "./Testimonials";
import Banner from "./Banner";
function App() {
  const options = {
    loop: true,
    margin: 10,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  };

  return (
    <>
      <Navabar />
      <main>
        <section className="slider">
          <div className="shape" />
          <div className="shape-01" />
          <div className="banner">
            <OwlCarousel className="owl-theme" {...options}>
              <div className="item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="wrapper">
                        <div className="content">
                          <h1>Rava Laddu with Organic sugar</h1>
                          <h5>
                            Savor the traditional taste of Rava Laddu and
                            Organic Sugar, where every bite blends semolina’s
                            richness with the natural sweetness of pure, organic
                            ingredients.
                          </h5>
                          <ol>
                            <li>
                              <a href="https://wa.me/7010652833" target="blank">
                                Order Now
                                <span className="flaticon-right-arrow" />
                              </a>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="wrapper">
                        <img
                          src={home1}
                          alt="Slide 1"
                          style={{ width: "90%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="wrapper">
                        <div className="content">
                          <h1>Sesame ball with Organic Sugar</h1>
                          <h5>
                            Sesame balls are a popular Asian dessert made from
                            glutinous rice flour, filled with sweet paste (like
                            red bean or lotus), and coated with sesame seeds
                            before being deep-fried to golden perfection. They
                            are crispy on the outside and chewy on the inside.{" "}
                          </h5>
                          <ol>
                            <li>
                              <a href="https://wa.me/7010652833" target="blank">
                                Order Now
                                <span className="flaticon-right-arrow" />
                              </a>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="wrapper">
                        <img src={home2} alt="Slide 2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="wrapper">
                        <div className="content">
                          <h1>Coconut barfi with Organic Sugar</h1>
                          <h5>
                            Delight in the wholesome goodness of our Organic
                            Sugar and Coconut Parpi. Made with natural
                            ingredients, this sweet treat combines the rich
                            flavor of organic sugar with the tropical taste of
                            coconut for a truly indulgent experience.
                          </h5>
                          <ol>
                            <li>
                              <a href="https://wa.me/7010652833" target="blank">
                                Order Now
                                <span className="flaticon-right-arrow" />
                              </a>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="wrapper">
                        <img src={home3} alt="Slide 3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </section>
        <Intro />
        <Testimonials />
        <AboutUs />
        <WorkFlow />
        <Menu />
        <Team />
        <Blog />

        <Contactus />
        <Banner/>
      </main>

      <Footer />
    </>
  );
}

export default App;
