window.addEventListener('load', () => {
    const sound = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');


    //animation
    const visual = document.querySelector('.visual');
    const colors = [

        '#ff86f5',
        '#2aec8b',
        '#3cffff',
        '#f6ff74',
        '#c0aaff',
        '#ffba7a',
        '#a39af5',
        '#635bb4',
        '#1edda4',
        '#bec28e',
        '#1fff2a',
        '#ff2bae',
        '#00ff22',
        '#818181',
        '#ffcb3c',
        '#d6e41a',
        '#b83cd1',
        '#a36c39'
    ];

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sound[index].currentTime = 0;
            sound[index].play();

            createBubbles(index);
        });
    });


    //animation ball&sound
    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function() {
            visual.removeChild(this);
        });

    };

});