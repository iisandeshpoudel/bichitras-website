declare module 'lucide-react' {
    import { ComponentType, SVGProps } from 'react'
    
    export interface IconProps extends SVGProps<SVGSVGElement> {
        size?: number | string
        absoluteStrokeWidth?: boolean
        color?: string
        strokeWidth?: number
    }

    export type Icon = ComponentType<IconProps>

    export const BarChart: Icon
    export const Users: Icon
    export const Zap: Icon
    export const MessageSquare: Icon
    export const ArrowRight: Icon
    export const Sun: Icon
    export const Moon: Icon
    // Add other icons as needed
} 