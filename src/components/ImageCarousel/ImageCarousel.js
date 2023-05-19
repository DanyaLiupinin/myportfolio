import './ImageCarousel.css'

import React, { useEffect, useState } from 'react';


const ImageCarousel = ({ images }) => {

    const [imageWidth, setImageWidth] = useState(0)
    const [imageActive, setImageActive] = useState(1)
    const [offset, setOffset] = useState(0)
    const sliderLine = React.useRef(null)
    const ratios = {
        1: 0,
        2: imageWidth,
        3: imageWidth * 2
    }

    const onClickNext = () => {
        if (offset + imageWidth > imageWidth * 2 && sliderLine.current) {
            setImageActive(1)
            setOffset(0)
            sliderLine.current.style.left = 0 + 'px'
        } else {
            setImageActive(imageActive + 1)
            setOffset(offset + imageWidth)
            if (sliderLine.current) sliderLine.current.style.left = (-(offset + imageWidth)) + 'px'
        }
    }


    const onClickPrev = () => {
        if (offset - imageWidth < 0 && sliderLine.current) {
            setImageActive(3)
            setOffset(imageWidth * 2)
            sliderLine.current.style.left = -imageWidth * 2 + 'px'
        } else {
            setImageActive(imageActive - 1)
            setOffset(offset - imageWidth)
            if (sliderLine.current) sliderLine.current.style.left = (-(offset - imageWidth)) + 'px'
        }
    }

    const onClickIcon = (index) => {
        setImageActive(index)
        setOffset(ratios[index])
    }

    useEffect(() => {
        if (sliderLine.current)
            sliderLine.current.style.left = - (offset) + 'px'
    }, [offset])

    useEffect(() => {
        if (window.screen.width > 400) {
            setImageWidth(340)
        } else {
            setImageWidth(window.screen.width * 0.85)
        }
        window.addEventListener('resize', () => {
            if (window.screen.width > 400) {
                setImageWidth(340)
            } else {
                setImageWidth(window.screen.width * 0.85)
            }
        })
    }, [])

    return (
        <div>
            <div className='imageCarousel'>
                <div className='imageCarousel__slider-wrapper'>
                    <button className='imageCarousel__slider-button imageCarousel__slider-button_type_left' type='button' onClick={onClickPrev}>
                        {/*<img className='imageCarousel__slider-button-image' src={} alt='ll'></img>*/}
                        <p className='imageCarousel__slider-button-array'>prev</p>
                    </button>
                    <button className='imageCarousel__slider-button imageCarousel__slider-button_type_right' type='button' onClick={onClickNext}>
                        {/*<img className='imageCarousel__slider-button-image' src={arrayRight} alt='ll'></img>*/}
                        <p className='imageCarousel__slider-button-array'>next</p>
                    </button>
                    <div style={{ width: `${imageWidth}px` }} className='imageCarousel__slider'>
                        <div className='imageCarousel__slider-line' ref={sliderLine}>
                            {
                                images.map((i, index) => {
                                    return (
                                        <img className='imageCarousel__slider-line-image' style={{ width: `${imageWidth}px` }} key={index} src={i} alt="alt" />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {/*
                <div className='imageCarousel__mini-icons'>
                    {
                        item.image.map((i, index) => {
                            return (
                                <img className={`imageCarousel__mini-icon ${imageActive === index + 1 ? 'imageCarousel__mini-icon_active' : ''}`} key={index} src={i} alt="raz" onClick={() => onClickIcon(index + 1)} />
                            )
                        })
                    }
                </div>*/}
            </div>
        </div>
    )
}

export default ImageCarousel