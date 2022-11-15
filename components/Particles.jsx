import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import styles from '../styles/Home.module.scss'

const ParticleBackround = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size

        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    
    return (
        <Particles
            id="tsparticles"
            className={styles.particles}
            init={particlesInit}
            loaded={particlesLoaded}
            height={'600px'} // TODO : responsive behavior
            options={{
            fullScreen: false,
            fpsLimit: 120,
            interactivity: {
                events: {
                onHover: {
                    enable: false,
                    mode: "grab"
                },
                onClick: {
                    enable: false,
                    mode: "push"
                }
                },
                modes: {
                grab: {
                    distance: 140,
                    links: {
                    opacity: 1
                    }
                },
                push: {
                    quantity: 4
                }
                }
            },
            particles: {
                number: {
                value: 80,
                density: {
                    enable: true,
                    area: 800
                }
                },
                color: {
                value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
                },
                shape: {
                type: "circle"
                },
                opacity: {
                value: 1
                },
                size: {
                value: { min: 1, max: 8 }
                },
                links: {
                enable: true,
                distance: 150,
                color: "#808080",
                opacity: 0.4,
                width: 1
                },
                move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                outModes: "out"
                }
            }
        }}/>
        
    )
}

export default ParticleBackround