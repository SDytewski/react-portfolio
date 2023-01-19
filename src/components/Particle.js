import { useCallback } from "react";
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";




function Particle() {

   
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
            init={particlesInit}
            loaded={particlesLoaded}
            options={{  fpsLimit: 120,
                background: {
                  color: "#000"
                },
                particles: {
                  color: { value: "#ffffff" },
                  move: {
                    direction: "none",
                    enable: true,
                    outModes: "out",
                    random: false,
                    speed: 2,
                    straight: false
                  },
                  number: { density: { enable: true, area: 800 }, value: 80 },
                  opacity: {
                    value: 0.5
                  },
                  shape: {
                    type: "circle"
                  },
                  size: {
                    value: { min: 1, max: 5 }
                  },
                } }}
        />
    );

  
};

export default Particle