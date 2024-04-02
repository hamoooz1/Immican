// helpers/storageHelper.ts

import "client-only";

export function getLocalStorage(key, defaultValue){
    const stickyValue = localStorage.getItem(key);
    
    console.log("Sticky Value: ", stickyValue)
    return (stickyValue !== null && stickyValue !== 'undefined')
        ? JSON.parse(stickyValue)
        : defaultValue;
}

export function setLocalStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}