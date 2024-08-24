window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    const progressArc = document.querySelector('.progress__arc');
    const maxDashOffset = 176;
    const dashOffset = maxDashOffset - (scrollPercent / 100) * maxDashOffset;
    progressArc.style.strokeDashoffset = dashOffset;
});