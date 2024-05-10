window.addEventListener('load', function() {
    

    var plat = document.querySelectorAll('.Plats .box-plat');
    
    plat.forEach(function(element) {
        element.style.opacity = '1'
        element.style.transition = 'opacity 10s'
    });

})
var buttons = document.querySelectorAll('.price-plat button');

buttons.forEach(function(button) {
    button.addEventListener('mouseover', () => {
        button.textContent = 'commander';

        button.style.transition = 'opacity 1s';

        button.style.opacity = '1';
    });

    button.addEventListener('mouseout', () => {
        button.innerHTML = `<i class ="fa-solid fa-dumpster-fire"></i>`;
        button.style.transition = '3s'
        button.style.opacity = '0.3';
    });
});


var up = document.querySelector('.up')
up.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

window.addEventListener('scroll', () => {
    if (scrollY > 30) {

        up.style.display = 'flex'

    } else {
        up.style.display = 'none'
    }
})


var sidebar = document.querySelector('.sidebar');
sidebar.addEventListener('mouseover', () => {
    sidebar.style.left = '-140px'
    sidebar.style.transition = 'all 2s'

})
sidebar.addEventListener('mouseleave', () => {
    sidebar.style.left = '-250px'
    sidebar.style.transition = 'all 2s'
})



var searchBtn = document.querySelector('.searchBtn')
var searchBar = document.querySelector('.searchBar')
var inp = document.querySelector('.searchBar input')
searchBtn.addEventListener('click', () => {
    searchBar.classList.add('showSearch')

})
inp.addEventListener('blur', () => {
    searchBar.classList.remove('showSearch')
})

var navigateButton = document.querySelectorAll('#navigateButton');
navigateButton.forEach(function(elem) {
    elem.addEventListener('click', () => {
        window.location.href = './contact.html'
    })


})


const searchInput = document.getElementById('searchInput');

function search() {
    const searchTerm = searchInput.value.toLowerCase();

    const plats = document.querySelectorAll('.box-plat');
    let foundElement = null;

    plats.forEach(plat => {
        plat.querySelector('h1').classList.remove('highlight');
    });

    plats.forEach(plat => {
        const h1 = plat.querySelector('h1');
        if (h1.textContent.toLowerCase().includes(searchTerm)) {
            foundElement = plat;
            h1.classList.add('highlight');
            return;
        }
    });

    if (foundElement) {
        foundElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        alert("y'a pas ce plat !! ");
    }

}

searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();

        search();
    }
});

document.querySelector('.AccBtn').addEventListener('click',()=>{
    window.open('../index.html', '_blank');"index : Unknown word."
});

