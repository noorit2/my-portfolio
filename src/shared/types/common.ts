import { ImageProps } from "next/image";

export interface CustomImageProps extends ImageProps{
    title?:string;
    alt:string;
    arialabel?:string;
    src:string;
}


