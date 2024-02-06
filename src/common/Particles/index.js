import {initParticlesEngine, Particles} from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {useEffect, useState} from "react";

const ParticlesBackground = ({options}) => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine)
        }).then(
            setInit(true)
        )
    }, []);

    if (init) {
        return (
            <Particles
                id="tsparticles"
                options={options}
            />)
    }
};

export default ParticlesBackground;