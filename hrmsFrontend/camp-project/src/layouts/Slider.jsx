
import { Carousel } from 'react-bootstrap'
import images1 from '../İmages/img-hrms.jpg'
import images2 from '../İmages/hhrrms.jpg'
import images3 from '../İmages/hhrms.jpg'



const CarouselContainer = () => {
    return (
        <Carousel controls={false} fade={true} pause={false}>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={images1}
                    alt="Second slide"
                />
                </Carousel.Item>

            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={images2}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={images3}
                    alt="Third slide"
                />

                
            </Carousel.Item>
        </Carousel>
    )
}
export default CarouselContainer;