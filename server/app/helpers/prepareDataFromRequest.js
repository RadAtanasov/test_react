function prepareFormData(body) {
    let result = null;
    for (let key in body) {
        result = JSON.parse(key);
    }

    return result;
}

module.exports = prepareFormData;