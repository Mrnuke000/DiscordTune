const app = require('express')();

app.get('/', (req, res) => res.send('Server is up. ---- this is for devs only, if you are seeing this and you are not a dev, please click off.'));
console.log('website has been launched, web server up :)')
/*<!DOCTYPE html>
<html>
<body>
<p style="color:white">there is nothing to find, there is no need to snoop, you are wasting your time, the purpose of this web page is to tell the devs if the bot is running. you cant hac k anything on here so just click off.</p>
</body>
</html>
*/
module.exports = () => {
  app.listen(3000);
}
