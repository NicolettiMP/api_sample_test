const CronJob = require("cron").CronJob;
const pullDataFromHubspot = require("./worker");

const updateInfoRoutine = async () => {
   
    try {

        console.log("[COLLECT-DEVICES-ISSUES-TASK] - Starting to collect all issues...");

        await pullDataFromHubspot("");

    } catch (err) {

        
        console.log("[COLLECT-DEVICES-ISSUES-TASK] - Error: ", err);
    }
}

const updateInfoTask = new CronJob(
    "0 2 * * *",
    updateInfoRoutine,
    null, // onComplete
    null, // start
    null, // timeZone
    null, // context
    true, // runOnInit
    null, // utcOffset
    null // unrefTimeout
);

module.exports = {updateInfoTask}
