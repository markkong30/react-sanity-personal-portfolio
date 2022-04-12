import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../wrapper';
import { urlFor, client } from '../client';

const Testimonial = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [testimonials, setTestimonials] = useState([]);
	const [brands, setBrands] = useState([]);
	const currentTestimonial = testimonials[currentIndex];

	useEffect(() => {
		const query = '*[_type == "testimonials"]';
		const brandsQuery = '*[_type == "brands"]';

		client.fetch(query).then((data) => {
			setTestimonials(data);
			console.log(data)
		});

		client.fetch(brandsQuery).then((data) => {
			setBrands(data);
		});
	}, []);

	const handleClick = (index) => {
		setCurrentIndex(index);
	};

	return (
		<StyledTestimonials>
			<h2 className="head-text">Testimonial</h2>

			{testimonials.length && (
				<>
					<div className='app__testimonial-item app__flex'>
						<img src={urlFor(currentTestimonial.imgUrl)} />
						<div className="app__testimonial-content">
							<p className="p-text">{currentTestimonial.feedback}</p>
							<div>
								<h4 className="bold-text">{currentTestimonial.name}</h4>
								<h5 className="p-text">{currentTestimonial.company}</h5>
							</div>
						</div>
					</div>

					<div className="app__testimonial-btns app__flex">
						<div className="app__flex btn" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
							<HiChevronLeft />
						</div>

						<div className="app__flex btn" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
							<HiChevronRight />
						</div>
					</div>
				</>
			)}
			<div className="app__testimonial-brands app__flex">
				{brands.map((brand) => (
					<motion.div
						whileInView={{ opacity: [0, 1] }}
						transition={{ duration: 0.5, type: 'tween' }}
						key={brand._id}
					>
						<img src={urlFor(brand.imgUrl)} alt={brand.name} />
					</motion.div>
				))}
			</div>

		</StyledTestimonials>
	);
};

const StyledTestimonials = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: center;
	align-items: center;
	padding: 0 10%;

	@media (max-width: 768px) {
		padding: 0 5%;
	}

	h2 {
      padding-bottom: 3rem;
			color: var(--secondary-color);

  }

	.app__testimonial-item {
		width: 80%;
		min-height: 320px;
		background-color: var(--white-color);
		display: flex;
		padding: 2rem;
		border-radius: 1rem;
		box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease-in-out;

		img {
			width: 100px;
			height: 100px;
			border-radius: 50%;
			object-fit: cover;
		}

		@media screen and (min-width: 2000px) {
    	min-height: 450px;

			img {
				width: 150px;
				height: 150px;
			}
		}

		@media screen and (max-width: 850px) {
			width: 100%;
		}

		@media screen and (max-width: 600px) {
			flex-direction: column;
		}
	}

	.app__testimonial-content {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
		flex: 1;
		height: 100%;
		padding: 0 2rem;
		text-align: left;

		
		p {
			font-size: 1.25rem;
			line-height: 2rem;
			color: var(--black-color);
			font-family: var(--font-base);

			@media screen and (min-width: 2000px) {
				font-size: 2rem;
				line-height: 3.5rem;
			}

			@media (max-width: 550px) {
				font-size: 1rem;
			}
		}

		h4 {
			font-weight: 600;
			color: var(--secondary-color);
			margin-top: 2rem;
		}

		h5 {
			font-weight: 400;
			color: var(--gray-color);
			margin-top: 5px;
		}

		@media screen and (max-width: 600px) {
			margin-top: 2rem;
			padding: 0;
		}
	}

	.app__testimonial-btns {
		display: flex;
		margin-top: 1rem;

		.btn {
			width: 50px;
			height: 50px;
			border-radius: 50%;
			background-color:var(--white-color);
			margin: 1rem;
			transition: all 0.3s ease-in-out;
			cursor: pointer;

			svg {
				width: 20px;
				height: 20px;
				color: var(--secondary-color);
			}

			&:hover {
				background-color: var(--secondary-color);

				svg {
					color: var(--white-color);
				}
			}
		}
	}

	.app__testimonial-brands {
			width: 80%;
			flex-wrap: wrap;
			margin-top: 2rem;

			div {
				width: 150px;
				margin: 1.5rem;

				img {
					width: 100%;
					object-fit: cover;
					filter: grayscale(1);
					opacity: 0.8;
				}

				&:hover {
					img {
						filter: grayscale(0);
						opacity: 1;
					}
				}

				@media screen and (min-width: 2000px) {
					width: 210px;
					margin: 2rem;
				}

				@media screen and (max-width: 450px) {
					width: 120px;
					margin: 1rem;
				}
			}
				@media screen and (max-width: 800px) {
				width: 100%;
			}
	}
`

export default AppWrap(
	MotionWrap(Testimonial, 'app__testimonial'),
	'testimonial',
	'app__primarybg',
);