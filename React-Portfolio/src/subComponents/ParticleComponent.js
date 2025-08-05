import React from 'react'
import { useCallback } from 'react'
import { loadFull } from 'tsparticles'
import Particles from 'react-tsparticles'
import styled from 'styled-components'

//particle config files
import configDark from "../config/particlesjs-config.json";
import configLight from "../config/particlesjs-config-light.json";

const Box = styled.div`
position: absolute;
top:0;
right:0;
left:0;
bottom:0;
z-index:0;
`

const ParticleComponent = (props) => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Box>
            <Particles 
                id="tsparticles"
                init={particlesInit}
                options={props.theme === "light" ? configLight : configDark}
                style={{position:'absolute',top:0}}
            />
        </Box>
    )
}

export default ParticleComponent