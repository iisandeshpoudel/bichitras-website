declare module 'tsparticles-engine' {
    export interface Engine {
        init(): Promise<void>;
        load(options: any): Promise<Container | undefined>;
    }

    export interface Container {
        destroy(): Promise<void>;
    }
} 