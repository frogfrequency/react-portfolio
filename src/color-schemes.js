export let colorSchemes = [
    {
        schemeId: 0,
        color1: 'rgb(10, 10, 10)',
        color2: 'rgb(40, 40, 40)',
        color3: 'rgb(170, 170, 170)',
        color4: 'rgb(220, 220, 220)'
    },
    {
        schemeId: 1,
        color1: 'rgb(41, 59, 95)',
        color2: 'rgb(71, 89, 126)',
        color3: 'rgb(178, 171, 140)',
        color4: 'rgb(219, 230, 253)'
    },
    {
        schemeId: 2,
        color1: 'rgb(170, 43, 29)',
        color2: 'rgb(204, 86, 30)',
        color3: 'rgb(239, 141, 50)',
        color4: 'rgb(190, 202, 92)'
    },
    {
        schemeId: 3,
        color1: 'rgb(133, 96, 63)',
        color2: 'rgb(158, 117, 64)',
        color3: 'rgb(189, 147, 84)',
        color4: 'rgb(227, 209, 138)'
    },
    {
        schemeId: 4,
        color1: 'rgb(9, 10, 37)',
        color2: 'rgb(29, 57, 132)',
        color3: 'rgb(228, 166, 207)',
        color4: 'rgb(193, 210, 255)'
    },
    
]


export function giveNextSchemeId(object, currentId) {
    let i=0;
    while (object[i].schemeId !== currentId) { // != changed to !==
        i=(i+1)%object.length
    }
    return object[(i+1)%object.length].schemeId
}

// export function defineNewColorSchemes(newSchemes) {
//     colorSchemes = newSchemes;
// }