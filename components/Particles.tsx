'use client';

import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const ParticlesComponent = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (_container: Container | undefined) => {
        // Implementation if needed
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {
                    enable: false,
                },
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                            parallax: {
                                enable: true,
                                force: 60,
                                smooth: 10
                            }
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: ["#9333EA", "#A855F7", "#6366F1"],
                    },
                    links: {
                        color: "#A855F7",
                        distance: 150,
                        enable: true,
                        opacity: 0.3,
                        width: 1,
                        triangles: {
                            enable: true,
                            opacity: 0.05
                        }
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                        attract: {
                            enable: true,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 100,
                    },
                    opacity: {
                        value: 0.3,
                        random: {
                            enable: true,
                            minimumValue: 0.1
                        },
                        animation: {
                            enable: true,
                            speed: 1,
                            minimumValue: 0.1,
                            sync: false
                        }
                    },
                    shape: {
                        type: ["circle", "triangle"],
                    },
                    size: {
                        value: { min: 1, max: 3 },
                        random: {
                            enable: true,
                            minimumValue: 1
                        },
                        animation: {
                            enable: true,
                            speed: 2,
                            minimumValue: 1,
                            sync: false
                        }
                    },
                    twinkle: {
                        particles: {
                            enable: true,
                            color: "#A855F7",
                            frequency: 0.05,
                            opacity: 1
                        }
                    },
                },
                detectRetina: true,
            }}
            className="absolute inset-0 -z-10"
        />
    );
};

export default ParticlesComponent;
