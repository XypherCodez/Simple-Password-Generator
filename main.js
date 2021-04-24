function genPassword(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXZYabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*{}()[]+_-';
    var charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
const returnedPassword = genPassword(30)
console.log(`Generating secure 30 digit password!`)
console.log(returnedPassword)
