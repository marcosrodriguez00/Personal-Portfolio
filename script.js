function openMenu(){
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

function getInContact() {
    var destinatario = 'rodriguezmarcosdeveloper@gmail.com';
    window.location.href = 'mailto:' + destinatario;
}