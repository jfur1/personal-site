import React from 'react'

const PathfindingImages = ({  scrollPercent, boxHeight, scrollHeight, screenHeight, index  }) => {
    var sp = scrollPercent
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    sp -= scrollOffsetInPercent;

    return (
        <>
            <img
                src={'pathfinding-iphone.gif'}
                height={'400'}
                style={{
                    transition: 'transform 0.2s ease-out',
                    transform: `translate(0px,-${(sp) * 1.5}%) scale(0.96)`,
                    position: 'absolute',
                    left: '3vw',
                    top: '420vh',
                    zIndex: 1
                }}
                alt="My-Portfol.io Home"
            />
        </>
    )
}

export default PathfindingImages