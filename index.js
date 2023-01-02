const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
}

function prependCat(name) {
    const newNewCats = [name, ...cats];
    return newNewCats;
}

function removeLastCat() {
    const removedCats = cats.slice(0, -1);
    return removedCats;
}

function removeFirstCat() {
    const moreRemovedCats = cats.slice(1);
    return moreRemovedCats;
}