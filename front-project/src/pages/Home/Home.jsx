import Carousel from 'react-bootstrap/Carousel'

import './Home.scss';

const Home = () =>{
    return (
        <div className='home' >
            <div className='home__carousel-man'>
                <h1>Ropa para hombre</h1>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://static.zara.net/photos///2022/V/0/2/p/6917/461/800/2/w/563/6917461800_2_1_1.jpg?ts=1645186369445"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h5>TITULO</h5>
                        <p>DESCRIPCION</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://static.zara.net/photos///2022/V/0/2/p/5320/304/707/2/w/563/5320304707_2_5_1.jpg?ts=1645178772507"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h5>TITULO</h5>
                        <p>DESCRIPCION</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://static.zara.net/photos///2022/V/0/2/p/4391/408/305/2/w/563/4391408305_2_1_1.jpg?ts=1645189174900"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h5>TITULO</h5>
                        <p>DESCRIPCION</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="home__carousel-woman">
            <h1>Ropa para mujer</h1>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://static.zara.net/photos///2022/V/0/1/p/3067/419/621/2/w/850/3067419621_15_1_1.jpg?ts=1644923612712"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h5>TITULO</h5>
                        <p>DESCRIPCION</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://static.zara.net/photos///2022/V/0/1/p/8351/028/330/2/w/850/8351028330_2_10_1.jpg?ts=1645521930850"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h5>TITULO</h5>
                        <p>DESCRIPCION</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://static.zara.net/photos///2022/V/0/1/p/4387/630/712/2/w/850/4387630712_1_1_1.jpg?ts=1643813546779"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h5>TITULO</h5>
                        <p>DESCRIPCION</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="home__carousel-sneakers">
            <h1>Ropa para mujer</h1>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://static.zara.net/photos///2022/V/0/1/p/3067/419/621/2/w/850/3067419621_15_1_1.jpg?ts=1644923612712"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h5>TITULO</h5>
                        <p>DESCRIPCION</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://static.zara.net/photos///2022/V/0/1/p/8351/028/330/2/w/850/8351028330_2_10_1.jpg?ts=1645521930850"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h5>TITULO</h5>
                        <p>DESCRIPCION</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://static.zara.net/photos///2022/V/0/1/p/4387/630/712/2/w/850/4387630712_1_1_1.jpg?ts=1643813546779"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h5>TITULO</h5>
                        <p>DESCRIPCION</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Home;