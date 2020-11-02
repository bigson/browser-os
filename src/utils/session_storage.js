export function getItem(key, value){
    let sessionStorage = window.sessionStorage;
    return sessionStorage.getItem(key)
}

export function setItem(key, value){
    let sessionStorage = window.localStorage
    sessionStorage.setItem(key, value)
}

export function removeItem(key){
    let sessionStorage = window.localStorage
    sessionStorage.removeItem(key)
}

export function clearAll(){
	let sessionStorage = window.localStorage
    sessionStorage.clear()
}