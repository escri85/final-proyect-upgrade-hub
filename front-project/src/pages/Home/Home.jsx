import Carousel from 'react-bootstrap/Carousel'
import './Home.scss';

const Home = () =>{
    return (
        <div className='home'>
            <div className='home__carousel'>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://static.zara.net/photos///2022/V/0/2/p/9632/411/401/2/w/563/9632411401_1_1_1.jpg?ts=1645604772374"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://static.zara.net/photos///2022/V/0/1/p/0085/014/629/2/w/294/0085014629_2_1_1.jpg?ts=1644587151111"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://static.zara.net/photos///2022/V/1/1/p/6856/810/020/2/w/201/6856810020_1_1_1.jpg?ts=1645548231906"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div class="home__offers">
                <p>Tarjetas ofertas varias</p>
            </div>
        </div>
    )
}

export default Home;