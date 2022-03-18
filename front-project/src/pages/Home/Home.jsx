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
                        src="https://static.pullandbear.net/2/photos//2022/V/0/2/p/8711/529/707/09/8711529707_2_1_8.jpg?t=1646319742992&imwidth=563"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h5>PULL&BEAR</h5>
                        <p>CAZADORA CANVAS CON CREMALLERA</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://static.pullandbear.net/2/photos//2022/V/0/2/p/4674/916/800/4674916800_2_1_8.jpg?t=1647358567442&imwidth=563"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h5>PULL&BEAR</h5>
                        <p>PANTALÓN TAILORING BÁSICO SLIM</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://static.pullandbear.net/2/photos//2022/V/0/2/p/4244/596/800/4244596800_2_1_8.jpg?t=1646065120617&imwidth=563"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h5>PULL&BEAR</h5>
                        <p>CAMISETA FOTOGRAFÍA ÁRBOL</p>
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
                        src="https://static.zara.net/photos///2022/V/0/1/p/0881/201/942/2/w/750/0881201942_1_1_1.jpg?ts=1647446400077"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h5>ZARA</h5>
                        <p>Vestido Mini Satinado</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://static.zara.net/photos///2022/V/0/1/p/9598/044/791/2/w/750/9598044791_1_1_1.jpg?ts=1647432711355"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h5>ZARA</h5>
                        <p>VESTIDO PUNTO BROCHE DORADO</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://static.zara.net/photos///2022/V/0/1/p/1478/027/809/17/w/750/1478027809_1_1_1.jpg?ts=1647423491227"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h5>ZARA</h5>
                        <p>PANTALÓN JOGGER WAIST</p>
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