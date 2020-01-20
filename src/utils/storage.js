// 获取缓存
export function getStorage(key){
    localStorage.getItem(key)
}

// 设置缓存
export function setStorage(storageName,params){
    localStorage.setItem(storageName,params)
}

// 删除缓存
export function removeStorage(key){
    localStorage.removeItem(key)
}
