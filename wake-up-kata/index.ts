/**
 * Wake Up Kata
On commence doucement cette journée par la création d'une fonction addToFavorite() qui prend en paramètre un tableau d'objet ainsi qu'un objet avec une propriété id ainsi qu'une propriété name. Cette fonction devra ajouter l'objet au tableau si celui-ci n'y figure pas déjà (id identique) et afficher le message "Ajouté aux favoris" le cas échéant. Sinon, elle devra afficher : "Déjà présent dans les favoris".
Tu peux te servir de ces éléments pour visualiser le tableau d'objet :

 */
interface Favorite {
  id: number;
  name: string;
}

const favorites: Favorite[] = [
  {
    id: 1,
    name: "Produit 1",
  },
  {
    id: 2,
    name: "Produit 2",
  },
];

const addToFavorite = (
  favorites: Favorite[],
  newFavorite: Favorite
): string => {
  // Merci Lucy pour le .some !
  const alreadyToFavorite = favorites.some((fav) => fav.id === newFavorite.id);

  if (alreadyToFavorite) {
    return "Déja présent dans les favoris";
  } else {
    favorites.push(newFavorite);
    return "Ajouté aux favoris";
  }
};

console.log(addToFavorite(favorites, { id: 3, name: "Produit 3" }));
console.log(addToFavorite(favorites, { id: 4, name: "Produit 4" }));

console.log(addToFavorite(favorites, { id: 1, name: "Produit 1" }));

/**
 * Ensuite on va parler température.
Objectif : crée une fonction de conversion de température universelle convertTemperature(). La fonction doit pouvoir convertir n'importe quelle température entre les unités Celsius, Fahrenheit, et Kelvin.

Cette fonction prendra 3 paramètres :
value : la température à convertir de type number
fromUnity : l'unité de température d'origine de type string
toUnity : l'unité de température cible de type string

La fonction doit retourner un résultat avec un maximum de deux décimales.
Pour info, voici Les formules de conversion entre les échelles de température sont les suivantes :
De Celsius à Fahrenheit : F=C×9/5+32
De Celsius à Kelvin : K=C+273.15
De Fahrenheit à Celsius : C=(F−32)×5/9
De Fahrenheit à Kelvin : K=(F+459.67)×5/9
De Kelvin à Celsius : C=K−273.15
De Kelvin à Fahrenheit : F=K×9/5−459.67
 */

const convertTemperature = (
  value: number,
  fromUnity: string,
  toUnity: string
): number => {
  fromUnity = fromUnity.toLowerCase();
  toUnity = toUnity.toLowerCase();

  let celcius: number;
  // convert to celcius
  switch (fromUnity) {
    case "celcius":
      celcius = value;
      break;
    case "fahrenheit":
      celcius = ((value - 32) * 5) / 9;
      break;
    case "kelvin":
      celcius = value - 273.15;
    default:
      throw new Error("error");
  }

  // celcius to unity choose
  let result: number;
  switch (toUnity) {
    case "celcius":
      result = celcius;
      break;
    case "fahrenheit":
      result = (celcius * 9) / 5 + 32;
      break;
    case "kelvin":
      result = celcius + 273.15;
      break;
    default:
      throw new Error("unity unknown");
  }

  return Number(result.toFixed(2));
};

console.log(convertTemperature(0, "celcius", "fahrenheit"));
console.log(convertTemperature(100, "Fahrenheit", "kelvin"));
console.log(convertTemperature(345, "fahrenheit", "CeLcIus"));

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

//  Écris une fonction sumOfEvenNumbers(numbers) qui prend en entrée un tableau d'entiers numbers et retourne la somme de tous les nombres pairs présents dans le tableau.
// const numbers = [1, 2, 3, 4, 5, 6];

// const numbers: number[] = [1, 2, 3, 4, 5, 6];

// const sumOfEvenNumbers = (numbers: number[]): number => {
//   let sum: number = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       sum += numbers[i];
//     }
//   }
//   return sum;
// };

// console.log(sumOfEvenNumbers(numbers));

// 2 - Écris une fonction maxNumber(numbers) qui prend en entrée un tableau d'entiers numbers et retourne le plus grand nombre présent dans le tableau.
// const numbers2 = [12, 21, 67, 36, 49, 51];

// const numbers2: number[] = [12, 21, 67, 36, 49, 51];

// const maxNumber = (numbers: number[]): number => {
//   return Math.max(...numbers2);
// };

// console.log(maxNumber(numbers2));
