"use strict";
/**
 * Crée une fonction pickReviewer qui prend en paramètre un tableau d'objets students pour désigner aléatoirement un élève chargé de corriger un exercice.
Ton objectif est de faire en sorte qu'un élève ne puisse pas être désigné deux fois avant que tous les autres aient été choisis au moins une fois.
Tu peux utiliser ce tableau pour tester ta fonction :
 */
let eleves = [
    { name: "Alice", hasReviewed: false },
    { name: "Bob", hasReviewed: false },
    { name: "Charlie", hasReviewed: false },
    { name: "David", hasReviewed: false },
];
const pickReviewer = (eleves) => {
    // Check if eleves ont deja corriger
    const allReviewed = eleves.every((e) => !e.hasReviewed);
    // Remettre à false si tout le monde à corriger
    if (allReviewed) {
        eleves.forEach((e) => (e.hasReviewed = false));
    }
    // Filtrer les eleves n'ayant pas corrigé
    const availableEleves = eleves.filter((e) => !e.hasReviewed);
    console.log(availableEleves);
    // Si tout les eleves sont false, faire en random
    const randomEleves = Math.floor(Math.random() * availableEleves.length);
    const selectEleve = availableEleves[randomEleves];
    selectEleve.hasReviewed = true;
    return selectEleve.name;
};
for (let i = 0; i < 5; i++) {
    console.log(pickReviewer(eleves));
}
/**
 * Very first Wake Up Kata la team 🎉
Le but va être d'écrire une fonction JavaScript que tu vas nommer filterByTitle, qui prend en paramètre un tableau d'objets movies et une chaîne de caractères searchedTitle .
Cette fonction doit retourner un nouveau tableau contenant uniquement les objets dont la propriété title contient la chaîne de caractères searchedTitle spécifiée en paramètre ET doit être insensible à la casse.
Tu pourras tester ta fonction sur ce tableau :
 */
// const recentMovies = [
//   {
//     title: "The Great Adventure",
//     releaseDate: "2023-07-15",
//     actors: ["Alex Johnson", "Samantha Bloom", "Michael Cane"],
//   },
//   {
//     title: "Lost in Time",
//     releaseDate: "2023-05-22",
//     actors: ["Clara Hughes", "Robert Smith", "Emily Stone"],
//   },
//   {
//     title: "Mystery of the Blue Ocean",
//     releaseDate: "2023-08-30",
//     actors: ["Henry Gold", "Natalie Port", "Bruce Wayne"],
//   },
//   {
//     title: "Cybernetic",
//     releaseDate: "2023-09-12",
//     actors: ["Aaron Stark", "Lisa Ray", "Jeremy Irons"],
//   },
//   {
//     title: "The Hidden World",
//     releaseDate: "2023-10-05",
//     actors: ["Sophia Loren", "Daniel Craig", "Emma Watson"],
//   },
// ];
// interface Movies {
//   title: string;
//   releaseDate: string;
//   actors: string[];
// }
// const filterByTitle = (movies: Movies[], searchedTitle: string) => {
//   const title = movies.filter((movie) =>
//     movie.title.toLowerCase().includes(searchedTitle.toLowerCase())
//   );
//   return title;
// };
// console.log(filterByTitle(recentMovies, "hidden"));
