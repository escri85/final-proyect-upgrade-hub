import { HelpModule, Search } from '../../components';
import { TabView, TabPanel } from 'primereact/tabview';
import { useState } from 'react';
import { Button } from 'primereact/button';

import './Home.scss';

const Home = () =>{
const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className='home' >
            <div className='home__search'>
                <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                    <TabPanel className='home__search-tabpanel' header="Busca tus productos">
                        <div className='home__search__tabpanel1'>
                            <Search/>
                        </div>
                    </TabPanel>
                    <TabPanel className="home__search-tabpanel" header="Ofertas de temporada">
                        <div className='home__search-tabpanel2'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti sint deserunt, temporibus repudiandae expedita vitae nam, quae amet debitis facere velit laborum beatae, nobis officia nihil aliquid natus? Praesentium, harum.</p>
                        </div>
                    </TabPanel>
                    <TabPanel className='home__search-tabpanel' header="Ayuda">
                        <HelpModule/>
                    </TabPanel>
                </TabView>
            </div>
        </div>
    )
}

export default Home;