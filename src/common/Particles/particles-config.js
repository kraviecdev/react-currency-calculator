export const particlesConfigLight = {
    background: {
        color: {
            value: "#5F85DB",
        },
    },
    fpsLimit: 60,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "grab",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#f3f3f3",
        },
        links: {
            color: "#f3f3f3",
            distance: 130,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            speed: 0.5,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 130,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
};

export const particlesConfigDark = {
    background: {
        color: {
            value: "#212D49",
        },
    },
    fpsLimit: 60,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "grab",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#c2c2c2",
        },
        links: {
            color: "#c2c2c2",
            distance: 130,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            speed: .5,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 130,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
};