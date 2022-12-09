const pos = { x : 0, y : 0 };

const saveCursorPositionImage = function(x, y) {
    pos.x = (x / window.innerWidth).toFixed(2);
    pos.y = (y / window.innerHeight).toFixed(2);
    document.documentElement.style.setProperty('--x', pos.x);
    document.documentElement.style.setProperty('--y', pos.y);
}
document.addEventListener('mousemove', e => { saveCursorPositionImage(e.clientX, e.clientY); })


