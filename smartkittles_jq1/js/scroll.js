const animation = document.querySelectorAll('.animation');

if (animation.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let i = 0; i < animation.length; i++) {
            const animEl = animation[i];
            const animElHeight = animEl.offsetHeight;
            const animElOffset = offset(animEl).top;
            const animStart = 4;

            let animElPoint = window.innerHeight - animElHeight / animStart;
            if (animElHeight > window.innerHeight){
                animElPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animElOffset - animElPoint) && pageYOffset < (animElOffset + animElHeight)) {
                animEl.classList.add('active');
            } else {
                if(!animEl.classList.contains('anim-no-hide')){
                    animEl.classList.remove('active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}