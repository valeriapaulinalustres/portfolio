import React, { useEffect, useRef } from "react"
import M from "materialize-css"
import './carousel.css'





function Carousel() {
	const refCarousel = useRef(null)

	useEffect(() => {
		const options = {
			duration: 200,
			indicators: true,
		}

		const instance = M.Carousel.init(refCarousel.current, options)
    const nextSlide = setInterval(()=> instance.next() , 3000)
		return () => {
			instance.destroy()
      clearInterval(nextSlide)
		}
	}, [])

	return (
		<section className="carousel-section" id="carousel">
			

			<div ref={refCarousel} className="carousel">
				<div className="carousel-item">
					<img alt="1" src="/favorita-nena-atardecer.jpg" />
				</div>
				<div className="carousel-item">
					<img alt="2" src="/favorita-nena-atardecer.jpg" />
				</div>
				<div className="carousel-item">
					<img alt="3" src="/favorita-nena-atardecer.jpg" />
				</div>
				<div className="carousel-item">
					<img alt="4" src="/favorita-nena-atardecer.jpg" />
				</div>
				<div className="carousel-item">
					<img alt="5" src="/favorita-nena-atardecer.jpg" />
				</div>
			</div>
		</section>
	)
}

export default Carousel
