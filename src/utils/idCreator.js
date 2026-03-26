
export function createRandomId24() {
    const digits = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    // Make numbers more likely than letters
    const pool = digits.repeat(9) + letters.repeat(1);

    let result = '';
    for (let i = 0; i < 24; i++) {
        result += pool[Math.floor(Math.random() * pool.length)];
    }

    return result;
}



export default createRandomId24;

