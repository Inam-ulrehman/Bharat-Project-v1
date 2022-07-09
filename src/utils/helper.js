// ====checknumber====

export const checkNumber = (number, data) => {
  if (number > data.length - 1) {
    return 0
  }
  if (number < data.length - 1) {
    return number
  }
  return number
}

//=============== getUnique values ===========

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type])
  // if its an array pass error array = [1,2,3]
  if (type === 'array') {
    unique = unique.flat()
  }
  return ['all', ...new Set(unique)]
}
