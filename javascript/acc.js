window.addEventListener('load', () => {
    var desc = document.querySelector('.description p')
    desc.style.transform = 'translateX(20px)'
    desc.style.transition = 'transform 2s'
})


const parties = document.querySelectorAll('.partie');
const showMoreBoxes = document.querySelectorAll('.showmore');

parties.forEach(function(partie, index) {
    partie.addEventListener('mouseover', function() {
        showMoreBoxes[index].style.display = 'block';
        showMoreBoxes[index].classList.add('visible');
    });

    partie.addEventListener('mouseout', function() {
        showMoreBoxes[index].style.display = 'none';
        showMoreBoxes[index].classList.remove('visible');

    });
});

function navigateWithDelay(url, delay) {
    setTimeout(() => {
        window.location.href = url;
    }, delay);
}