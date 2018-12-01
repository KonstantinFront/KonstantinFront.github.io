window.onload = function () {


    document.addEventListener('click', menuShowToggle);


    function menuShowToggle(event) {

        let elementToShow = document.querySelector('.menuList');
        let element  = document.querySelector('.menuWrapper');
        let isClickInside = element.contains(event.target);
        let isClickMenu = elementToShow.contains(event.target);


        if (!isClickInside || elementToShow.style.right == '-3rem' ){
            if(!isClickMenu) {
                elementToShow.style.right = '-13.1rem';
            }
        } else {
            elementToShow.style.right = '-3rem';
        }

    }
}

