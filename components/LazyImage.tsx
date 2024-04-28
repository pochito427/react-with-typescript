import { useEffect, useRef, useState } from "react";
import { ImgHTMLAttributes } from "react";

type LazyImageProps = {
    src: string;
};

type Props = ImgHTMLAttributes<HTMLImageElement> & LazyImageProps;

export function LazyImage({ src, ...imgProps }: Props): JSX.Element{

    const node = useRef<HTMLImageElement>(null);
    const [currentSrc, setCurrentSrc] = useState<string>("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=");

    useEffect(() => {
        // new observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                   // intersecting
                   setCurrentSrc(src);
                }
            });
        });

        // observe node
        if(node.current){
            observer.observe(node.current);
        }

        //disconnect
        return () => {
            observer.disconnect();
        };

    }, [src]);

    

    return (
        <img ref={node} src={currentSrc} {...imgProps} />
    );
}