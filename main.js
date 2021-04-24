const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
rl.question("How long should the password be?", function(passLength){
    console.log('Generating password with ' + passLength + " characters...")
    function genPassword(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXZYabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*{}()[]+_-';
        var extra = '0123456789!@#$%^&*{}()[]+_-'; //every 5 characters one of these will be selected, for top performance.
        var charactersLength = characters.length;
  
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            if(i % 5 === 0){
                result += extra.charAt(Math.floor(Math.random() * extra.length))
            }
        }
        return result;
    }
    let i = genPassword(passLength)
    console.log(i)
    return process.exit()
})
