function unescapeHTML(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}
function sendRequest(url, method, data, extra_headers = null, params = null) {
    let headers = {
        'X-Requested-With': 'XMLHttpRequest',
    };
    if (extra_headers) {
        headers = { ...headers, ...extra_headers };
    }
    let r = axios({
        method: method,
        url: url,
        params: params,
        data: data,
        xsrfCookieName: 'csrftoken',
        xsrfHeaderName: 'X-CSRFToken',
        headers: headers
    });
    return r;
}