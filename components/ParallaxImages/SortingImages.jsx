import React from 'react'
import Image from 'next/image'
import mpHome from '../../public/sorting.gif'


const SortingImages = ({  scrollPercent, boxHeight, scrollHeight, screenHeight, index  }) => {
    var sp = scrollPercent
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    sp -= scrollOffsetInPercent;

    return (
        <>
            <Image
                src={mpHome}
                height={'400'}
                width={'500'}
                style={{
                    transition: 'transform 0.2s ease-out',
                    transform: `translate(0px,-${(sp) * 1.5}%) scale(0.96)`,
                    position: 'absolute',
                    left: '5vw',
                    top: '550vh',
                    zIndex: 1
                }}
                alt="My-Portfol.io Home"
            />
        </>
    )
}

export default SortingImages