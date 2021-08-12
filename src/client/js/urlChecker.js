import validUrl from 'valid-url'

const checkUrl = (url) =>{
    if (validUrl.isUri(url)){
        return true
    } else {
        return false
    }
} 

export {checkUrl}