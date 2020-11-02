export function getItem(key, value){
    let myStorage = window.localStorage
    return localStorage.getItem(key)
}

export function setItem(key, value){
    let myStorage = window.localStorage
    localStorage.setItem(key, value)
}

export function clearAll(){
	myStorage = window.localStorage
    localStorage.clear()
}