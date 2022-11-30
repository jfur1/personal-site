import React from 'react'

const WUImages = ({ scrollPercent, boxHeight, scrollHeight, screenHeight, index }) => {
    var sp = scrollPercent
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
    sp -= scrollOffsetInPercent;

    return (
        <> 
            <img
                src={'WU_0004.png'}
                height={'465'}
                style={{
                    transition: 'transform 0.2s ease-out',
                    transform: `translate(0px,-${(sp) * 1.5}%)`,
                    position: 'absolute',
                    left: '-2vw',
                    top: '10vh',
                    zIndex: 1
                }}
                alt="Western Union laptop"
            />
            <img
                src={'WU_0003.png'}
                height={'600'}
                style={{
                    transition: 'transform 0.2s ease-out',
                    transform: `translate(0px,-${(sp) * 9}%) scale(0.94)`,
                    position: 'absolute',
                    top: '180vh',
                    left: '5vw',
                    zIndex: 2
                }}
                alt="Western Union iPhone Locations"
            />
            <img
                src={'WU_0002.png'}
                height={'700'}
                style={{
                    transition: 'transform 0.2s ease-out',
                    transform: `translate(0px,-${(sp) * 6}%) scale(0.84)`,
                    position: 'absolute',
                    top: '120vh',
                    left: '25vw',
                    zIndex: 4
                }}
                alt="Western Union iPhone Payments"
            />
        </>
    )
}

export default WUImages