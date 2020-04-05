const rootPath = '/api/timers'

export const getTimers = (success) => {
    return fetch(rootPath, {
        headers: {
            Accept: 'application/json',
        },
    })
        .then((response) => checkStatus(response))
        .then(resp => parseJSON(resp))
        .then(success);
}

export const createTimer = (data) => {
    return fetch(rootPath, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => checkStatus(response));
}

export const startTimer = (data) => {

    return fetch(rootPath + '/start', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => checkStatus(response));
}

export const stopTimer = (data) => {
    return fetch('/api/timers/stop', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(response => checkStatus(response));
}

export const deleteTimer = (data) => {
    return fetch(rootPath, {
        method: 'delete',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => checkStatus(response))
}

export const updateTimer = (data) => {
    return fetch(rootPath, {
        method: 'put',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => checkStatus(response))
}

function checkStatus(response) {

    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(`HTTP Error ${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        console.log(error);

        throw error;

    }
}

function parseJSON(response) {
    return response.json();
}
