'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { ReactNode } from 'react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

interface CarouselProps {
  children: ReactNode;
  fadeColor?: string;
}

export default function Carousel({ children, fadeColor = '#1a1a1a' }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, containScroll: 'trimSnaps', watchDrag: true, axis: "x" }, [WheelGesturesPlugin()]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', updateScrollButtons);
    emblaApi.on('scroll', updateScrollButtons);
    emblaApi.on('settle', updateScrollButtons);
    emblaApi.on('reInit', updateScrollButtons);
    updateScrollButtons();
    return () => {
      emblaApi.off('select', updateScrollButtons);
      emblaApi.off('scroll', updateScrollButtons);
      emblaApi.off('settle', updateScrollButtons);
      emblaApi.off('reInit', updateScrollButtons);
    };
  }, [emblaApi, updateScrollButtons]);

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-x-hidden w-full">
        <div className="flex gap-4">{children}</div>
      </div>

      <div
        className="absolute left-0 top-0 bottom-0 w-16 pointer-events-none transition-opacity duration-300"
        style={{
          background: `linear-gradient(to right, ${fadeColor}, transparent)`,
          opacity: canScrollPrev ? 1 : 0,
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none transition-opacity duration-300"
        style={{
          background: `linear-gradient(to left, ${fadeColor}, transparent)`,
          opacity: canScrollNext ? 1 : 0,
        }}
      />
    </div>
  );
}
