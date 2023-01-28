import React from 'react'

const WUImages = ({ scrollPercent, boxHeight, scrollHeight, screenHeight, index, scale, width }) => {
    var sp = scrollPercent
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
    sp -= scrollOffsetInPercent;

    var top = ['10vh', '210vh', '160vh']
    var left = ['-2vw', '1vw', '25vw']
    var scrollSpeed = [1.5, 9, 6]

    if(width < 400){
        top = ['10vh', '170vh', '140vh'];
        left =['-18vw', '-4vw', '30vw']
    } else if(width >= 400 && width < 780){
        top = ['10vh', '130vh', '115vh'];
        left =['-1vw', '17vw', '46vw']
        scrollSpeed = [1.5, 7, 7]

    } else if(width >= 780 && width < 1090){  
        top = ['10vh', '140vh', '120vh']
        left = ['-2vw', '1vw', '25vw']
        scrollSpeed = [1.5, 9, 6]
        
    } else if(width >= 1090 && width < 1281){ // MBP 13
        top = ['10vh', '190vh', '150vh']
        left = ['-2vw', '4vw', '25vw']
        scrollSpeed = [1.5, 8, 6]
    } else if(width >= 1281){ // MBP 15
        top = ['12vh', '150vh', '140vh']
        left = ['-2vw', '7vw', '25vw']
        scrollSpeed = [1.5, 7, 7]
    }

    return (
        <> 
            <img
                src={'WU_0004.png'}
                height={'465'}
                style={{
                    transition: 'transform 0.2s ease-out',
                    transform: `translate(0px,-${sp * scrollSpeed[0]}%) scale(${scale})`,
                    scale: scale,
                    position: 'absolute',
                    left: left[0],
                    top: top[0],
                    zIndex: 3
                }}
                alt="Western Union laptop"
            />
            <img
                src={'WU_0003.png'}
                height={'600'}
                style={{
                    transition: 'transform 0.2s ease-out',
                    transform: `translate(0px,-${sp * scrollSpeed[1]}%) scale(${scale - 0.1})`,
                    position: 'absolute',
                    top: top[1],
                    left: left[1],
                    zIndex: 5
                }}
                alt="Western Union iPhone Locations"
            />
            <img
                src={'WU_0002.png'}
                height={'700'}
                style={{
                    transition: 'transform 0.2s ease-out',
                    transform: `translate(0px,-${sp * scrollSpeed[2]}%) scale(${scale - 0.1})`,
                    position: 'absolute',
                    top: top[2],
                    left: left[2],
                    zIndex: 7
                }}
                alt="Western Union iPhone Payments"
            />
        </>
    )
}

export default WUImages