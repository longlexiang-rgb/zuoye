  const welcome3 = document.querySelector('#welcome-3');
  const welcome4 = document.querySelector('#welcome-4');
  const trigger3 = 50; 
  const trigger4 = 450; 
  let isShowed3 = false;
  let isShowed4 = false;

  const handleScroll = function() {
    const currentScrollTop = window.scrollY;
    // 控制welcome3
    if (!isShowed3 && currentScrollTop >= trigger3) {
      welcome3.classList.add('active');
      isShowed3 = true;
    }
    
    // 控制welcome4
    if (!isShowed4 && currentScrollTop >= trigger4) {
      welcome4.classList.add('active');
      isShowed4 = true;
    }
  };
        window.addEventListener('scroll', handleScroll);





gsap.registerPlugin(ScrollTrigger);

const scrollbox = {
  wrapper: document.querySelector(".wrapper"),
  cardsbox: document.querySelector(".cardsbox"),
  distance: 0,
  if_leave: false,
  stInstance: null, // 新增：用变量保存ScrollTrigger实例，替代id

  init() {
    this.create_scrolltrigger();
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  },

  create_scrolltrigger() {
    // 把实例赋值给stInstance，后续直接用这个变量
    this.stInstance = ScrollTrigger.create({
      trigger: this.wrapper,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        // 去掉px前的空格（关键！否则CSS解析失败）
        this.cardsbox.style.transform = `translateX(-${self.progress * this.distance}px)`;
      },
      onLeave: () => { this.if_leave = true; },
      onEnterBack: () => { this.if_leave = false; }
    });
  },

  resize() {
    // 计算卡片总宽度 - 视口宽度
    this.distance = this.cardsbox.offsetWidth - window.innerWidth;
    // 设置wrapper高度，保证有足够滚动空间
    this.wrapper.style.height = `${this.distance}px`;
    
    // 不用id，直接用保存的stInstance获取进度
    if (this.if_leave && this.stInstance) { // 判空避免报错
      this.cardsbox.style.transform = `translateX(-${this.stInstance.progress * this.distance}px)`;
    }
  }
};
scrollbox.init(); 
ScrollTrigger.refresh();
// ===== 路径动画 =====
const path = document.getElementById("stroke-path");

if (path) {
  const pathLength = path.getTotalLength();

  gsap.set(path, {
    strokeDasharray: pathLength,
    strokeDashoffset: pathLength
  });

  gsap.to(path, {
    strokeDashoffset: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".spotlight",
      start: "top top",
      end: "+=2500",
      scrub: true,
      invalidateOnRefresh: true
    }
  });
}


const zoomTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".spotlight",
    start: "+=3500",      // 👈 从第一段结束位置开始
    end: "+=2000",       // pin 的滚动长度
    scrub: true,
    pin: true
  }
});

zoomTL
  .to("#finalimg", {
    scale: 3,
    ease: "none"
  }, 0)

.to(".white-overlay", {
    opacity: 1,
    height: "200vh", 
    ease: "none",
  }, 0)

  .to(".text-block1", {
    y: 0,          // 从下往上
    opacity: 1,
    ease: "none"
  }, "<0.5")

  .to(".text-block1", {
    y: -60,      // 向上
    opacity: 0,  // 淡出
    ease: "none"
  })
.to(".text-block2", {
    y: 0,      // 向上
    opacity: 1,  // 淡出
    ease: "none"
  },"<")
    .to(".text-block2", {
    y: -60,      // 向上
    opacity: 0,  // 淡出
    ease: "none"
  })
 .to(".text-block3", {
    y: 0,      // 向上
    opacity: 1,  // 淡出
    ease: "none"
  },"<")
    .to(".text-block3", {
    y: -60,      // 向上
    opacity: 0,  // 淡出
    ease: "none"
  })
  .to(".text-block4", {
    y: 0,      // 向上
    opacity: 1,  // 淡出
    ease: "none"
  },"<")
    .to(".text-block4", {
    y: -60,      // 向上
    opacity: 0,  // 淡出
    ease: "none"
  })
  .to(".text-block5", {
    y: 0,      // 向上
    opacity: 1,  // 淡出
    ease: "none"
  },"<")
    .to(".text-block5", {
    y: -60,      // 向上
    opacity: 0,  // 淡出
    ease: "none"
  })

