import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MaskedSection = () => {
  const svgRef = useRef(null);
  const svgClippathRef = useRef(null);
  const point = useRef(null);
  const contentRef = useRef(null);
  const imagesRef = useRef([]);
  let h1 = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const svgClippath = svgClippathRef.current;

    point.current = svg.createSVGPoint();
    let moved = true;

    const clipPathWidth = 572 / 2;
    const clipPathHeight = -552;
    const onMove = (event) => {
      moved = true;
      point.current.x = event.clientX - clipPathWidth;
      point.current.y = event.clientY - clipPathHeight;
    };

    const update = () => {
      if (!moved) return;
      moved = false;

      const { x, y } = point.current.matrixTransform(svg.getScreenCTM().inverse());

      gsap.to(svgClippath, {
        x,
        y,
        duration: 0.2,
      });
    };

    window.addEventListener("mousemove", onMove);
    gsap.ticker.add(update);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      }
    });

    timeline.fromTo(
      imagesRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, stagger: 0.2, ease: "power2.out" }
    );

    return () => {
      window.removeEventListener("mousemove", onMove);
      gsap.ticker.remove(update);
    };
  }, []);

  const imageUrls = [
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d',
    'https://images.unsplash.com/photo-1502764613149-7f1d229e230f',
    'https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d',
    'https://images.unsplash.com/photo-1502764613149-7f1d229e230f',
    'https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
  ];

  return (
    <section>
      <div className="relative w-full h-[100vh] bg-green-950 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1547380109-a2fffd5b9036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1848&q=80')",
            clipPath: "url(#welcome-section-clippath)"
          }}
        ></div>

        <div className="relative z-20 flex items-center justify-center h-full" ref={(el) => (h1 = el)}>
          <h1 className="text-5xl text-white uppercase">Salvay</h1>
        </div>
      </div>

      <div className="w-0 h-0 overflow-hidden">
        <svg
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          width="575"
          height="494"
          viewBox="0 0 572.12 494.49"
          id="welcome-section-clipmask"
        >
          <defs>
            <clipPath id="welcome-section-clippath">
              <path
                ref={svgClippathRef}
                d="M9,252c8.86-60,33.42-109.12,97.86-138.79,78-35.9,146.19-59.33,178.46-85.32,54-43.52,123.49-39.78,157.81,45.45S497.52,181.35,531.74,252,563,470.5,441.12,487.51,178.9,487.79,85,440.34.16,312,9,252Z"
              ></path>
            </clipPath>
          </defs>
        </svg>
      </div>

      <div ref={contentRef} className=" w-full flex flex-wrap justify-center items-center bg-gray-200 p-8">
        {imageUrls.map((url, index) => (
          <div
            key={index}
            ref={(el) => (imagesRef.current[index] = el)}
            className="w-1/3 h-48 bg-cover bg-center m-2 rounded-lg"
            style={{
              backgroundImage: `url(${url})`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default MaskedSection;
