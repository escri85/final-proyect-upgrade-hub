import { HelpModule, Search } from "../../components";
import { TabView, TabPanel } from "primereact/tabview";
import { useState } from "react";
import "./Home.scss";
import CarouselContainer from "./Carousel/CarouselContainer";
import Map from "../../components/GoogleMaps/Map";

const Home = ({productsResult}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
<>
<div className="filteredOut">
  <Search />
</div>
    <CarouselContainer />
      <div className="home">
        <div className="home__search">
          <TabView
            style={{marginTop:'-20px'}}
            activeIndex={activeIndex}
            onTabChange={(e) => setActiveIndex(e.index)}
          >
            <TabPanel
              className="home__search-tabpanel"
              header="Busca tus productos"
            >
              <div className="home__search__tabpanel1">
              </div>
            </TabPanel>
            <TabPanel
              className="home__search-tabpanel"
              header="Ofertas de temporada"
            >
              <div className="home__search-tabpanel2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corrupti sint deserunt, temporibus repudiandae expedita vitae
                  nam, quae amet debitis facere velit laborum beatae, nobis
                  officia nihil aliquid natus? Praesentium, harum.
                </p>
              </div>
            </TabPanel>
            <TabPanel className="home__search-tabpanel" header="Ayuda">
              <HelpModule />
            </TabPanel>
          </TabView>
        </div>
        <div className="home__contain">
          <div className="home__contain-info">
            <p>¿No conoces nuestras instalaciones?</p>
          </div>
          <div className="home__contain-map"></div>
        </div>
      </div>
</>
);
};

export default Home;
