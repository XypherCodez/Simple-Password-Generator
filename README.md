# Password Generator

Very simple password generator, generates a secure 30 digit password, great for any application.

**How to Use**

1. Clone the repository `git clone https://github.com/XypherCodez/Simple-Password-Generator`
2. Open the `start.bat` file
3. Copy & Paste the password to whatever application you would like to use it on!

**Changes you can make**

1. Generating multiple passwords...
> The following code snippet will generate 50, 30 digit passwords, you can control the number of generated passwords with the number in the for loop, change it from 50 to whatever number you please! Then simply open the `start.bat` to print all passwords!
```js
console.log(`Generating secure 30 digit passwords!`)
for (var k = 0; k < 50; k++) {
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
  console.log(returnedPassword)
}
```

*There will be a much more advanced version of this releasing shortly!*
