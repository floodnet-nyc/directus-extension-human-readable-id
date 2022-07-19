import getAdjectives from "./assets/adjectives";
import getColors from "./assets/colors";
import getAnimals from "./assets/animals";


function _getRandom(items) {
    return items[Math.floor(Math.random()*items.length)];
}

/**
 * Generate a random id in the form of adjective-color-animal
 * @param {string} [delim] character to use as the delimiter
 * @returns random id
 */
export default function getHRI(delim='-') {
    const adjectives = getAdjectives();
    const colors = getColors();
    const animals = getAnimals();

    const adjective = _getRandom(adjectives);
    const color = _getRandom(colors);
    const animal = _getRandom(animals);

    return [adjective,color,animal].join(delim);
}
