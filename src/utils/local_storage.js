export function getItem(key, value){
    let myStorage = window.localStorage
    return myStorage.getItem(key)
}

export function setItem(key, value){
    let myStorage = window.localStorage
    myStorage.setItem(key, value)
}

export function clearAll(){
	let myStorage = window.localStorage
    myStorage.clear()
}