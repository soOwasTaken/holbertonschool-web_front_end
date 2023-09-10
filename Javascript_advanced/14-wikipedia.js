function createElement(data) {
    const p = document.createElement('p');
    p.innerHTML = data;
    document.body.appendChild(p);
}

function queryWikipedia(callback) {
    const req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (req.readyState === 4 && req.status === 200) {
            callback(req.response.query.pages['21721040'].extract);
        }
    }
    req.open('GET', 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=1');
    req.responseType = 'json';
    req.send();
}