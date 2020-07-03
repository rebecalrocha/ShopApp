export const cardMask = value => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1-$2-$3-$4') 
      .replace(/(-\d{4})\d+?$/, '$1') 
}
