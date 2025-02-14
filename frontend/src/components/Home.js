import React from "react";
import TabX from "./pages/Home/Tab";
import { Container, Row, Col, Card} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "./css/MainPage.css";
import { Link } from "react-router-dom";
import { ImQuotesLeft } from "react-icons/im";
import { GiCheckMark } from "react-icons/gi";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const MainPage = (props) => {
  const Navigate = useNavigate()
  console.log(props);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    }
  };

  const responsiveWarehouse = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1,
    }
  };
  
  return (
    <>
      <Container fluid className="p-0 mt-5" style={{ zIndex: 7 }}>
        <div className="d-flex flex-row bothUnits">
          <div className="nextPage bg-white">
            <Card className="bg-white">
              <Card.Body className="cardStorageBody">
                <Row>
                  <Col md={12} className="mx-3">
                    <TabX></TabX>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
          <div className="warehouseImages" >
            <div className="d-flex warehouseImgCarouselStyle" style={{margin:"0rem 0 0 -2rem ",padding:"0 0rem", marginLeft:"-2rem"}}>
              <div className="w-100" style={{paddingLeft:"2rem", borderRadius:"2rem", boxShadow:"6rem"}}>
                <Carousel 
                  responsive={responsiveWarehouse}
                  infinite={true}
                  arrows={false}
                  autoPlay={props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={5000}
                  customTransition="transform 1s ease-in-out"
                  transitionDuration={1000}
                  containerClass="carousel-container"
                  deviceType={props.deviceType}
                  itemClass="carousel-item-padding-40-px"
                >
                  <div className="frontCar-items" onClick={()=>{Navigate('/storage')}}>
                    <div className="frontCar-itemsText">
                      NOW STOCK CLOSER TO YOUR CUSTOMERS FOR FASTER DELIVERY
                    </div>
                    <img
                      className="d-block w-100 frontCar-itemsImg"
                      src="/images/warehouseimg4.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div className="frontCar-items" onClick={()=>{Navigate('/storage')}}>
                    <div className="frontCar-itemsText">
                      LEADING WAREHOUSING PLATFORM
                    </div>
                    <img
                      className="d-block w-100 frontCar-itemsImg"
                      src="/images/warehouseimg1.jpg"
                      alt="Second slide"
                    />
                  </div>
                  <div className="frontCar-items" onClick={()=>{Navigate('/storage')}}>
                    <div className="frontCar-itemsText">
                      BEST WAREHOUSING & LOGISTICS PLATFORM
                    </div>
                    <img
                      className="d-block w-100 frontCar-itemsImg"
                      src="/images/s3.jpg"
                      alt="Third slide"
                    />
                  </div>
                  <div className="frontCar-items" onClick={()=>{Navigate('/storage')}}>
                    <div className="frontCar-itemsText">
                      WAY TO BOOK WAREHOUSE FROM HOME
                    </div>
                    <img
                      className="d-block w-100 frontCar-itemsImg"
                      src="/images/s4.jpg"
                      alt="Fourth slide"
                    />
                  </div>
                  <div className="frontCar-items" onClick={()=>{Navigate('/storage')}}>
                    <div className="frontCar-itemsText">
                      BEST SERVICE PROVIDERS IN INDIA
                    </div>
                    <img
                      className="d-block w-100 frontCar-itemsImg"
                      src="/images/s5.jpg"
                      alt="Fifth slide"
                    />
                  </div>
                  <div className="frontCar-items" onClick={()=>{Navigate('/storage')}}>
                    <div className="frontCar-itemsText">
                      REDUCING POST HARVEST LOSSES AND INCREASING MARKET ACCESS FOR RURAL FARMERS
                    </div>
                    <img
                      className="d-block w-100 frontCar-itemsImg"
                      src="/images/warehouseimg5.jpg"
                      alt="sixth slide"
                    />
                  </div>
                  <div className="frontCar-items" onClick={()=>{Navigate('/storage')}}>
                    <div className="frontCar-itemsText">
                      EXPAND YOUR STORAGE CAPACITY
                    </div>
                    <img
                      className="d-block w-100 frontCar-itemsImg"
                      src="/images/warehouseimg2.jpg"
                      alt="seventh slide"
                    />
                  </div>
                  <div className="frontCar-items" onClick={()=>{Navigate('/storage')}}>
                    <div className="frontCar-itemsText">
                      CENTRE PLANS THE WORLD'S LARGEST GRAIN STORAGE PROGRAMME FOR FOOD SECURITY: REPORTS
                    </div>
                    <img
                      className="d-block w-100 frontCar-itemsImg"
                      src="/images/warehouseimg3.jpg"
                      alt="eighth slide"
                    />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
          <div className="benifitsBar">
            <div className="benifitsHeading">
              THE WARELOGG BENIFITS TO YOUR BUSINESS
            </div>
            <div className="benifitsSubunitsContainer">
              <div className="benifitsSubunit">
                <div className="benifitsSubunitsHeading">RETAILER & ENTERPRISES</div>
                <div className="benifitsSubunitsContent">
                  <div className="benifitsSubunitsPoints"><i className="benifitsSubunitsPointsIcon"><GiCheckMark/></i><div> Develop An Agile Distribution Network With Flexible Space & Freight</div></div>
                  <div className="benifitsSubunitsPoints"><i className="benifitsSubunitsPointsIcon"><GiCheckMark/></i><div> Manage Your Inventory Overflow, Reduce Distribution Cost</div></div>
                  <div className="benifitsSubunitsPoints"><i className="benifitsSubunitsPointsIcon"><GiCheckMark/></i><div> A-Grade Facilities With All Compliances, Integrated Tech To Manage Vendors & Distributors</div></div>
                </div>
              </div>
              <div className="benifitsSubunit">
                <div className="benifitsSubunitsHeading">SMALL SIZE COMPANIES AND FARMERS</div>
                <div className="benifitsSubunitsContent">
                <div className="benifitsSubunitsContent">
                  <div className="benifitsSubunitsPoints"><i className="benifitsSubunitsPointsIcon"><GiCheckMark/></i><div> Access To High Class Infrastructure At Lower Price</div></div>
                  <div className="benifitsSubunitsPoints"><i className="benifitsSubunitsPointsIcon"><GiCheckMark/></i><div> Reduce Warehousing Cost. Use Sub-Units Only When Required & As Much Needed</div></div>
                  <div className="benifitsSubunitsPoints"><i className="benifitsSubunitsPointsIcon"><GiCheckMark/></i><div> Reduce Losses And Easier Market Access For Rural Farmers</div></div>
                </div>
                </div>
              </div>
              <div className="benifitsSubunit">
                <div className="benifitsSubunitsHeading">E-COMMERCE PLAYERS</div>
                <div className="benifitsSubunitsContent">
                <div className="benifitsSubunitsContent">
                  <div className="benifitsSubunitsPoints"><i className="benifitsSubunitsPointsIcon"><GiCheckMark/></i><div> Network Of Smart & Scalable Fulfilment Centres Integrated With Marketplaces & Last Mile</div></div>
                  <div className="benifitsSubunitsPoints"><i className="benifitsSubunitsPointsIcon"><GiCheckMark/></i><div> Listing And Booking Warehouses Is Easier Now</div></div>
                  <div className="benifitsSubunitsPoints"><i className="benifitsSubunitsPointsIcon"><GiCheckMark/></i><div> Fast Growing Network Provides Easy Access.</div></div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Row className="d-flex" style={{margin:"10rem 3rem"}}>
          <Col md={3} xs={12} className="px-0 mb-2">
          <card className="d-flex h-100 justify-content-center align-items-center mr-2" style={{boxShadow: "#49505766 2px 0px 10px -1px"}}><h3 className="h-auto text-center mb-0  my-4">Our Supporters</h3></card>
          </Col>
          <Col md={9} xs={12} className="px-0 mb-2"><Carousel 
          responsive={responsive}
          infinite={true}
          arrows={false}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={3000}
          customTransition="transform 1s ease-in-out"
          transitionDuration={1000}
          containerClass="carousel-container"
          deviceType={props.deviceType}
          itemClass="carousel-item-padding-40-px"
          >
            <div className="sup-items"><img
              className="d-block w-100"
              src="/images/sup-1.png"
              alt="First slide"
              style={{ height: "100%", objectFit: "fill" }}
            /></div>
            <div className="sup-items"><img
              className="d-block w-100"
              src="/images/IIT_MANDI_CATALYST.jpg"
              alt="Second slide"
              style={{ height: "100%", objectFit: "contain" }}
            /></div>
            <div className="sup-items"><img
              className="d-block w-100"
              src="/images/iit_mandi.png"
              alt="Third slide"
              style={{ height: "100%", objectFit: "fill" }}
            /></div>
            <div className="sup-items"><img
              className="d-block w-100"
              src="/images/sup-4.png"
              alt="Fourth slide"
              style={{ height: "100%", objectFit: "fill",backgroundColor:"white" }}
            /></div>
            <div className="sup-items"><img
              className="d-block w-100"
              src="/images/sup-5.webp"
              alt="Fifth slide"
              style={{ height: "100%", objectFit: "fill",backgroundColor:"white" }}
            /></div>
          </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
