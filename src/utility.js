 export function generateNewId(element) {
    let highestId = 0;
    for(let i=0; i<element.length; i++) {
        let currentId = element[i].schemeId;
        if (highestId < currentId) {
            highestId = currentId;
        }
    }
    return highestId+1;
}