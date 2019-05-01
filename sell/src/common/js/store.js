export function saveToLocal(id, key, val) {
  if (id === undefined) return
  let seller = window.localStorage.__seller__
  if (!seller) {
    seller = {}
  }
  else {
    seller = JSON.parse(seller)
    if (seller[id]) {
      seller[id][key] = val
      return window.localStorage.__seller__ = JSON.stringify(seller)
    }
  }
  seller[id] = {}
  seller[id][key] = val
  window.localStorage.__seller__ = JSON.stringify(seller)
}

export function getFromLocal(id, key, def) {
  if (id === undefined) return
  let seller = window.localStorage.__seller__
  if (!seller) {
    return def
  }
  else {
    seller = JSON.parse(seller)
    if (!seller[id]) {
      return def
    }
    return seller[id][key] || def
  }
}