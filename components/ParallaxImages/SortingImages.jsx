import React from 'react'

const SortingImages = ({  scrollPercent, boxHeight, scrollHeight, screenHeight, index  }) => {
    var sp = scrollPercent
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    sp -= scrollOffsetInPercent;

    return (
        <>
            <img
                src={'sorting.gif'}
                height={'400'}
                width={'500'}
                style={{
                    transition: 'transform 0.2s ease-out',
                    transform: `translate(0px,-${(sp) * 1.5}%) scale(0.96)`,
                    position: 'absolute',
                    left: '7vw',
                    top: '570vh',
                    zIndex: 1
                }}
                alt="My-Portfol.io Home"
            />
        </>
    )
}

export default SortingImages