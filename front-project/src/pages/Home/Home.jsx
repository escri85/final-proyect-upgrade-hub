import Carousel from 'react-bootstrap/Carousel'

import './Home.scss';

const Home = () =>{
    return (
        <div className='home' >
            <div className='home__carousel-man'>
                <h1>Ropa hombre</h1>
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
            <h1>Ropa mujer</h1>
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
            <h1>Zapatillas</h1>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6760a13e-0204-4eda-b08c-817e35bf52ac/air-jordan-legacy-312-low-zapatillas-GbnrhZ.png"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h5>Nike</h5>
                        <p>Air Jordan Legacy 312 Low</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/33868633-ad21-4f4a-83b7-3e5386573c73/air-force-1-zapatillas-MlT7Jx.png"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h5>Nike</h5>
                        <p>Air Force 1</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/49a76272-60c3-4559-a9e4-c0289375eef0/air-max-terrascape-90-zapatillas-DlplwW.png"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h5>Nike </h5>
                        <p>Air Max Terrascape 90</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Home;