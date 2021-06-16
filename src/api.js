export const API_URL = 'http://localhost:3006/';

export function ajax(method, url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, API_URL + url);
    xhr.onreadystatechange = function(){
        if (this.readyState === 4) {
            if (this.status === 200)
                callback(JSON.parse(this.responseText));
        }
    };
    xhr.send(null);
}
