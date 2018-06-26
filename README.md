# **Node Instagram Bot**

this scrpit is to schedule [InstyPy](https://github.com/timgrossmann/InstaPy) scripts

## **Use**
First, Download [InstyPy](https://github.com/timgrossmann/InstaPy) and this repository
```
git clone https://github.com/timgrossmann/InstaPy.git
git clone https://github.com/HenryTabima/node-instagram-bot.git
```
Open the porject folder and install dependencies

with npm:
```
npm install
```
with yarn:
```
yarn install
```

### **The Config File**
```javascript
module.exports = {
  instaPyPath: 'paht/to/your/InstaPy/copy',
  regExp: /\bclient-\w+\.py/,
  isLogging: true
}
```
write the path to your InstaPy's folder in instaPyPath.

regExp is to find the InstaPy's scrpits. for this example I used a regular expression that match with ```client-*.py``` where * is any word (for exampe: [client-user1.py](#))

### **Daemonize** (keep it running)

To ensure that de bot is always runing use [PM2](https://pm2.io/doc/en/runtime/quick-start/)

#### pm2 installation
With yarn:
```
yarn global add pm2
```
With npm:
```
npm install pm2 -g
```

#### start deamonized script
```
pm2 start index.js --name instagram-bot
```

**PD:** if you want to start pm2 daemon on system's restart, you have to run once ```pm2 startup```

## Dependencies

* [node-cron](https://www.npmjs.com/package/node-cron)
* [sleep](https://www.npmjs.com/package/sleep)
