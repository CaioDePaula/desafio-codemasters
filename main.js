function reverseString(letter, splitter=' ', joinBy=' ') {
    letter = letter.toString();

    if (!letter || !letter.trim().length) {
        throw new Error('is required a name!');
    }

    let letters = letter.split(splitter);
    letters = letters.reverse();
    letter = letters.join(joinBy);

    return letter;
}

function isFourLetters(letters) {
    if (!Array.isArray(letters) || !letters.length) {
        throw new Error('is required a array of values!');
    }

    let match = letters.filter(letter => letter.length == 4);

    return match;
}

function invertSignNumber(numbers) {
    if (!Array.isArray(numbers) || !numbers.length) {
        throw new Error('is required a array of values!');
    }

    numbers = numbers.filter(num => !isNaN(num));
    numbers = numbers.map(num => num - (num*2));

    return numbers;
}

function findNumber(numbers, filter=7) {
    if (!Array.isArray(numbers) || !numbers.length) {
        throw new Error('is required a array of values!');
    }

    let message = 'not found filter in array!';
    let findSeven = numbers.filter(num => num.toString().indexOf(filter) > -1);

    if (findSeven.length) {
        message = 'Boom';
    }

    return message;
}

function biggestExchange(number) {
    if (isNaN(number)) {
        throw new Error('is required a number!');
    }

    let numberReverse = reverseString(number, '', '');

    return number > numberReverse;
}
