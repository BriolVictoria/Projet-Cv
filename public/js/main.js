const buttons = document.querySelectorAll('.parcours_section__projets_liens__lien');
const sections = document.querySelectorAll('.parcours_section__contenu > div');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('ça marche');
    });
});