import React from 'react'
import mpHome from '../../public/mp_0001.png'

import Image from 'next/image'

const MyPortfolioImages = ({  scrollPercent, boxHeight, scrollHeight, screenHeight, index  }) => {
    var sp = scrollPercent
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    sp -= scrollOffsetInPercent;

    return (
        <>
            <Image
                src={mpHome}
                height={'425'}
                style={{
                    transition: 'transform 0.2s ease-out',
                    transform: `translate(0px,-${(sp) * 1.5}%) scale(0.96)`,
                    position: 'absolute',
                    left: '2vw',
                    top: '295vh',
                    zIndex: 1
                }}
                alt="My-Portfol.io Home"
            />
        </>
    )
}

export default MyPortfolioImages