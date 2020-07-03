export const secMask = value => {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{3})\d+?$/, '$1') 
}