window.addEventListener('load', () => {
    const sound = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');

    //animation
    const visual = document.querySelector('.visual');
    const colors = [

        "#ff86f5",
        "#2aec8b",
        "#3cffff",
        "#f6ff74",
        "#c0aaff",
        "#ffba7a"
    ];

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sound[index].currentTime = 0;
            sound[index].play();

            createBubbles(index);
        });
    });


    //animation ball
    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function() {
            visual.removeChild(this);
        });

    };
});