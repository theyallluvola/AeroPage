function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.add('show')
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.remove('show')
} 

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 1) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
});

function toggleDropdown() {
    const button = document.querySelector('.dropdown');
    let shown = false;
    button.addEventListener('click', () => {
        const element = document.querySelector('.dropdown-menu');
        const img = document.querySelector('.dropdown-img');
        if (shown) {
            element.classList.remove('show');
            img.style.transform = 'rotate(0deg)';
            shown = false;
        } else {
            element.classList.add('show');
            img.style.transform = 'rotate(180deg)';
            shown = true;
        }
    });
}

toggleDropdown();
