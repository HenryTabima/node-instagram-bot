const fs = require('fs')
const { spawn } = require('child_process')
const cron = require('node-cron')
const { sleep } = require('sleep')
const { instaPyPath, regExp, isLogging } = require('./config.js')

function startRobotActivity () {
  const scriptFiles = fs.readdirSync(instaPyPath).filter(item => regExp.test(item))

  scriptFiles.forEach(file => {
    const filePath = `${instaPyPath}${file}`
    const process = spawn('python', [filePath])
    if (isLogging) {
      process.stdout.on('data', data => console.log(data.toString()))
      process.stderr.on('data', data => console.log(data.toString()))
    }
    console.log('sleep')
    sleep(5)
    console.log('wake up')
  })
}

// cron.schedule('0 8,12,16,20 * * *', startRobotActivity)
cron.schedule('*/5 * * * *', startRobotActivity)
