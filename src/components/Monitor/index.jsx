import React from "react";
import { Carousel } from "react-bootstrap";
import { withAuthorization } from "../Session";
// import DataCard from "./DataCard";
import "./index.css";
// import sorting_poster from "../../assets/4_stream_sorting_poster.png";
// import educate_poster from "../../assets/educate_poster.png";
// import standard from "../../assets/signage_standardization.png";
import PieChart from "../DisplayPieChart";
import BarGraph from "../DisplayBarGraph";
import WasteNumbers from "../DisplayWasteNumbers";
import WasteFacts from "../DisplayWasteFacts";
import Footer from "../FooterCarousel";
import Header from "../HeaderCarousel";
import fact1 from "../../assets/WasteFact1.png";
import fact2 from "../../assets/WasteFact2.png";
import fact3 from "../../assets/WasteFact3.png";
import fact4 from "../../assets/WasteFact4.png";
import fact5 from "../../assets/WasteFact5.png";
import fact6 from "../../assets/WasteFact6.png";
// import { import } from "mathjs";

const Monitor = props => {
  return (
    <Carousel controls={true} indicators={false} slide={false} fade={true}>
      <Carousel.Item interval={3000}>
        <div className="flexContainer">
          <Header message="Bin Status" />
          <PieChart />
          <Footer />
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="flexContainer">
          <Header message="Statut Bin" />
          <PieChart />
          <Footer />
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="flexContainer">
          <Header message="Fill Level" />
          <BarGraph />
          <Footer />
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="flexContainer">
          <Header message="Niveau de remplissage" />
          <BarGraph />
          <Footer />
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="flexContainer">
          <Header message="Help Us Divert More Waste" />
          <WasteNumbers lang="EN" />
          <Footer />
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="flexContainer">
          <Header message="Aidez-nous à détourner plus de déchets" />
          <WasteNumbers lang="FR" />
          <Footer />
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="flexContainer">
          <Header message="Waste Facts" />
          <WasteFacts imgSource={fact1} lang="EN" number="0" />
          <Footer />
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="flexContainer">
          <Header message="Faits sur les déchets" />
          <WasteFacts imgSource={fact1} lang="FR" number="0" />
          <Footer />
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="flexContainer">
          <Header message="Waste Facts" />
          <WasteFacts imgSource={fact2} lang="EN" number="1" />
          <Footer />
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="flexContainer">
          <Header message="Faits sur les déchets" />
          <WasteFacts imgSource={fact2} lang="FR" number="1" />
          <Footer />
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="flexContainer">
          <Header message="Waste Facts" />
          <WasteFacts imgSource={fact3} lang="EN" number="2" />
          <Footer />
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="flexContainer">
          <Header message="Faits sur les déchets" />
          <WasteFacts imgSource={fact3} lang="FR" number="2" />
          <Footer />
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="flexContainer">
          <Header message="Waste Facts" />
          <WasteFacts imgSource={fact4} lang="EN" number="3" />
          <Footer />
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="flexContainer">
          <Header message="Faits sur les déchets" />
          <WasteFacts imgSource={fact4} lang="FR" number="3" />
          <Footer />
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="flexContainer">
          <Header message="Waste Facts" />
          <WasteFacts imgSource={fact5} lang="EN" number="4" />
          <Footer />
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="flexContainer">
          <Header message="Faits sur les déchets" />
          <WasteFacts imgSource={fact5} lang="FR" number="4" />
          <Footer />
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="flexContainer">
          <Header message="Waste Facts" />
          <WasteFacts imgSource={fact6} lang="EN" number="5" />
          <Footer />
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="flexContainer">
          <Header message="Faits sur les déchets" />
          <WasteFacts imgSource={fact6} lang="FR" number="5" />
          <Footer />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

const condition = authUser => !!authUser;

export default Monitor;
withAuthorization(condition)(Monitor);

//return(
//     <>
//       <div className="container-fluid my-container">
//         <div className="row my-row">
//           <div className="col-sm-12 my-carousel mx-auto ">
//             <div
//               id="carouselExampleSlidesOnly"
//               class="carousel slide carousel-fade "
//               data-ride="carousel"
//               data-interval="10000"
//               data-pause="false"
//             >
//               <div class="carousel-inner">
//                 <div class="carousel-item active">
//                   <img
//                     src={sorting_poster}
//                     class="d-block h-100 w-auto"
//                     alt="Sorting Poster"
//                   />
//                 </div>

//                 <div class="carousel-item">
//                   <img
//                     src={educate_poster}
//                     class="d-block h-100 w-auto"
//                     alt="Educate Poster"
//                   />
//                 </div>

//                 <div class="carousel-item">
//                   <img
//                     src={standard}
//                     class="d-block h-100 w-auto"
//                     alt="Standardization Poster"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="row card-row mt-3 mb-2 gy-0">
//           <div className="col-6 col-md-3 gy-0">
//             <DataCard
//               border="dark"
//               name="Trash"
//               distance={props.WD}
//               weight={props.WW}
//             />
//           </div>
//           <div className="col-6 col-md-3">
//             <DataCard
//               border="dark"
//               name="Compostable"
//               distance={props.CD}
//               weight={props.CW}
//             />
//           </div>
//           <div className="col-6 col-md-3">
//             <DataCard
//               border="primary"
//               name="Paper & Cardboard"
//               distance={props.RD}
//               weight={props.RW}
//             />
//           </div>
//           <div className="col-6 col-md-3">
//             <DataCard
//               border="warning"
//               name="Plastic, Glass & Metal"
//               distance={props.PD}
//               weight={props.PW}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
