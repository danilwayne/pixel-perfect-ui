import { useEffect, useRef, useState } from "react";

type DeferredBackgroundOptions = {
    rootMargin?: string;
};

export const useDeferredBackground = <T extends HTMLElement>(
    imageUrl: string,
    options?: DeferredBackgroundOptions,
) => {
    const elementRef = useRef<T | null>(null);
    const [backgroundImage, setBackgroundImage] = useState("none");

    useEffect(() => {
        const node = elementRef.current;

        if (!node) {
            return;
        }

        const applyBackground = () => {
            // Carrega a imagem somente quando a seção estiver próxima da viewport.
            // Isso reduz o peso inicial da home sem trocar os assets existentes.
            setBackgroundImage(`url(${imageUrl})`);
        };

        if (!("IntersectionObserver" in window)) {
            applyBackground();
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0]?.isIntersecting) {
                    applyBackground();
                    observer.disconnect();
                }
            },
            {
                rootMargin: options?.rootMargin ?? "300px 0px",
            },
        );

        observer.observe(node);

        return () => {
            observer.disconnect();
        };
    }, [imageUrl, options?.rootMargin]);

    return {
        elementRef,
        backgroundImage,
    };
};
