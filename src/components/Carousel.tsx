'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { ReactNode } from 'react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

interface CarouselProps {
  children: ReactNode;
}

export default function Carousel({ children }: CarouselProps) {
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
    updateScrollButtons();
  }, [emblaApi, updateScrollButtons]);

  return (
    <div className="relative group">
      <div ref={emblaRef} className="overflow-x-hidden w-full">
        <div className="flex gap-4">{children}</div>
      </div>

      {canScrollPrev && (
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#1a1a1a] to-transparent" />
      )}

      {canScrollNext && (
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#1a1a1a] to-transparent" />
      )}
    </div>
  );
}
