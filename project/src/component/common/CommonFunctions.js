//form JSON from Map
export function mapReplacer (key, value) {
    if (value instanceof Map) {
        return {
            dataType: "Map",
            value: Array.from(value.entries())
        };
        } else {
            return value;
        }
}

export function getCoords(elem){
    let coords = elem.getBoundingClientRect();
    return {
        top:coords.top + window.pageYOffset,
        left:coords.left + window.pageXOffset,
        right:coords.right + window.pageYOffset,
        bottom:coords.bottom + window.pageYOffset,
    };
}
