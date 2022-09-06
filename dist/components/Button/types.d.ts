import { ComponentProps, ElementType, ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";
import { LayoutProps, SpaceProps } from "styled-system";
export declare const scales: {
    readonly MD: "md";
    readonly SM: "sm";
    readonly XS: "xs";
};
export declare const variants: {
    readonly PRIMARY: "c0c0c0";
    readonly SECONDARY: "c0c0c0";
    readonly TERTIARY: "c0c0c0";
    readonly TEXT: "c0c0c0";
    readonly DANGER: "c0c0c0";
    readonly SUBTLE: "c0c0c0";
    readonly SUCCESS: "c0c0c0";
};
export declare type Scale = typeof scales[keyof typeof scales];
export declare type Variant = typeof variants[keyof typeof variants];
/**
 * @see https://www.benmvp.com/blog/polymorphic-react-components-typescript/
 */
export declare type AsProps<E extends ElementType = ElementType> = {
    as?: E;
};
export declare type MergeProps<E extends ElementType> = AsProps<E> & Omit<ComponentProps<E>, keyof AsProps>;
export declare type PolymorphicComponentProps<E extends ElementType, P> = P & MergeProps<E>;
export declare type PolymorphicComponent<P, D extends ElementType = "button"> = <E extends ElementType = D>(props: PolymorphicComponentProps<E, P>) => ReactElement | null;
export interface BaseButtonProps extends LayoutProps, SpaceProps {
    as?: "a" | "button" | typeof Link;
    external?: boolean;
    isLoading?: boolean;
    scale?: Scale;
    variant?: Variant;
    disabled?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
}
export declare type ButtonProps<P extends ElementType = "button"> = PolymorphicComponentProps<P, BaseButtonProps>;
