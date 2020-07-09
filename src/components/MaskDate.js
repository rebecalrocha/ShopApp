export const dateMask = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d{2})\d+?$/, '$1/$2')
}
