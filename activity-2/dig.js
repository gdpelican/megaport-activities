const dig = (path, obj) => {
  const [head, ...tail] = path.split('.')

  if (!head || !obj) return obj

  return dig(tail.join('.'), obj[head])
}

module.exports = dig
