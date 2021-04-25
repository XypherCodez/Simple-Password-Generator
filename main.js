const readline=require('readline')
const rl=readline.createInterface({input:process.stdin,output:process.stdout,})
rl.question("How long should the password be? ",function(passLength){console.log('Generating password with '+passLength+" characters...")
function genPassword(length){var result='';var characters='ABCDEFGHIJKLMNOPQRSTUVWXZYabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*{}()[]+_-';var extra='0123456789!@#$%^&*{}()[]+_-`=/><.,|';var charactersLength=characters.length;for(var i=0;i<length;i++){result+=characters.charAt(Math.floor(Math.random()*charactersLength));if(i%5===0){result+=extra.charAt(Math.floor(Math.random()*extra.length))}}
return result;}
let i=genPassword(passLength)
console.log(i)

credits = "This is the end of the password but thank you so much for using Simple-Password-Generator, please star and fork the repository at https://github.com/XypherCodez/Simple-Password-Generator it helps out a lot"
console.log(credits)

return process.exit()})
