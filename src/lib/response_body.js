const getCurrentDay = require("./current_day")

const responseBody = (slack_name = "PaschalPM", track = "Backend")=> ({
    slack_name,
    current_day: getCurrentDay(),
    utc_time: (new Date()).toISOString(),
    track,
    github_file_url: "https://github.com/PaschalPM/hng-backend_task1/blob/main/api/index.js",
    github_repo_url: "https://github.com/PaschalPM/hng-backend_task1",
    status_code: 200
})

module.exports =  responseBody