const buttons = document.querySelectorAll('.parcours_section__projets_liens__lien');
const sections = document.querySelectorAll('.parcours_section__contenu > div');
const boutons = document.querySelectorAll('.parcours_section__expériences__liens__lien');
const blocs = document.querySelectorAll('.parcours_section__expériences__contenu > div');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        const target = button.dataset.target; // Je dois l'initialiser ici car au dessus ça ne marche pas, demander prof

        sections.forEach(section => {
            section.classList.add('hidden');

            if (section.classList.contains(`parcours_section__contenu__${target}`)) { // Demander si on peut faire ça ou pas
                section.classList.remove('hidden');
            }
        });
    });
});



boutons.forEach(bouton => {
    bouton.addEventListener('click', e => {
        e.preventDefault();

        const cible = bouton.dataset.target.toLowerCase();

        blocs.forEach(bloc => {
            bloc.classList.add('hidden');
            if (bloc.className.includes(`contenu__${cible}`)) {
                bloc.classList.remove('hidden');
            }
        });
    });
});
