const getCurrentDay = require("./current_day")

const getISODate = () => {
    let isoDate = (new Date()).toISOString()
    let splitDate = isoDate.split('.')
    let tail = splitDate.at(-1)
    let lastChar = tail.slice(-1)
    splitDate.pop()

    return splitDate.join('')+lastChar
}
const responseBody = (slack_name = "PaschalPM", track = "Backend")=> ({
    slack_name,
    current_day: getCurrentDay(),
    utc_time: getISODate(),
    track,
    github_file_url: "https://github.com/PaschalPM/hng-backend_task1/blob/main/api/index.js",
    github_repo_url: "https://github.com/PaschalPM/hng-backend_task1",
    status_code: 200
})

module.exports =  responseBody