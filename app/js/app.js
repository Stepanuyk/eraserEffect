window.onload = function () {



    let canvas = $('#canvas')[0];
    let ctx = canvas.getContext('2d');
    let image = $('#img')[0];
    let x, y;

    resizeCanvas(canvas);
    ctx.drawImage(image, 0, 0, window.innerWidth, window.innerHeight);


    canvas.addEventListener('mousemove', function (evt) {
        var rect = canvas.getBoundingClientRect();
        x = evt.clientX - rect.left;
        y = evt.clientY - rect.top;
    });

    function Render() {
        window.requestAnimationFrame(Render);

        ctx.beginPath();
        ctx.arc(x, y, 50, 0, Math.PI * 2);

        ctx.globalCompositeOperation = 'destination-out';
        ctx.fill();

    }
    Render();

    function resizeCanvas(canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
};