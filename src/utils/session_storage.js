export function getItem(key, value){
    sessionStorage = window.sessionStorage;
    return sessionStorage.getItem(key)
}

export function setItem(key, value){
    let myStorage = window.localStorage
    sessionStorage.setItem(key, value)
}

export function removeItem(key){
    let myStorage = window.localStorage
    sessionStorage.removeItem(key)
}

export function clearAll(){
	myStorage = window.localStorage
    sessionStorage.clear()
}