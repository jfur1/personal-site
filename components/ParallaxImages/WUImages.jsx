import React from 'react'
import WUiphone from '../../public/WU_0003.png'
import WUiphone2 from '../../public/WU_0002.png'
import WUiphone3 from '../../public/WU_0001.png'
import WUtablet from '../../public/WU_0004.png'
import Image from 'next/image'

const WUImages = ({ scrollPercent, boxHeight, scrollHeight, screenHeight, index }) => {
    var sp = scrollPercent
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    sp -= scrollOffsetInPercent;

    return (
        <> 
            <Image
                src={WUtablet}
                height={'500'}
                style={{
                    transition: 'transform 0.2s ease-out',
                    transform: `translate(0px,-${(scrollPercent) * 2}%)`,
                    position: 'absolute',
                    left: '-3vw',
                    top: '-45vh',
                    zIndex: 1
                }}
                alt="Western Union laptop"
            />
            {/* <Image
                src={WUiphone3}
                height={'600'}
                style={{
                    transition: 'transform 0.2s ease-out',
                    transform: `translate(0px,-${(scrollPercent) * 4}%) scale(0.94)`,
                    position: 'absolute',
                    top: '130vh',
                    left: '25vw',
                    zIndex: 3
                }}
                alt="Western Union iPhone Welcome"
            /> */}
            <Image
                src={WUiphone}
                height={'600'}
                style={{
                    transition: 'transform 0.2s ease-out',
                    transform: `translate(0px,-${(scrollPercent) * 12}%) scale(0.94)`,
                    position: 'absolute',
                    top: '200vh',
                    left: '5vw',
                    zIndex: 2
                }}
                alt="Western Union iPhone Locations"
            />
            <Image
                src={WUiphone2}
                height={'700'}
                style={{
                    transition: 'transform 0.2s ease-out',
                    transform: `translate(0px,-${(scrollPercent) * 10}%)  scale(0.84)`,
                    position: 'absolute',
                    top: '160vh',
                    left: '25vw',
                    zIndex: 4
                }}
                alt="Western Union iPhone Payments"
            />
        </>
    )
}

export default WUImages