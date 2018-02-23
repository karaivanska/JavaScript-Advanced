function extractText() {
    let result = [];
    $('#items').find('li').each((i, el) => result.push(el.textContent));
    $('#result').text(result.join(', '));
}