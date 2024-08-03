//func for get set info to local storage
export function saveDataToLocalStorage(key, objArr) {
    localStorage.setItem(key, JSON.stringify(objArr));
}
