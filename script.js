gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  ScrollTrigger.create({
    trigger: ".hero",
    start: "top top",
    end: `+${window.innerHeight*3.5}px`,
    pin: true,
    pinSpacing: false,
    scrub: 1,
    onUpdate: (self) => {
      const progress = self.progress;

      const heroHeaderProgress = Math.min(progress / 0.29, 1);
      gsap.set(".hero-header", {yPercent: -heroHeaderProgress * 100});
      
    }
  })
})
