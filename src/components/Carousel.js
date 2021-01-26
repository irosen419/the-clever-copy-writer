import quoteURLs from '../data/quotes'

import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from 'mdbreact';

function Carousel() {

    const mapImages = () => {
        return quoteURLs.map(imgObj => {
            return (< MDBCarouselInner key={imgObj.speaker} >
                <MDBCarouselItem itemId={quoteURLs.indexOf(imgObj) + 1}>
                    <MDBView>
                        <img className="quote" src={imgObj.url} alt={imgObj.speaker} />
                    </MDBView>
                </MDBCarouselItem>
            </ MDBCarouselInner>)
        })
    }

    return (
        <div className="top__carousel">
            <MDBContainer>
                <MDBCarousel
                    activeItem={1}
                    length={quoteURLs.length}
                    showControls={false}
                    showIndicators={false}
                    interval={5000}
                    slide
                >
                    {mapImages()}
                </MDBCarousel>
            </MDBContainer>
        </div>
    )
}
//
export default Carousel