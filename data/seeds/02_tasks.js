const tasks = [
    { label: "Stop working", complete: true },
    { label: "Check newbie's code (with curiosity)", complete: false },
    { label: "Write a thoughtful (or scathing?) review.", complete: false },
    { label: "Take a deep, soul-cleansing breath.", complete: false },
    { label: "Return to the grind.", complete: false },
]

exports.seed = async function (knex) {
    await knex('tasks').insert(tasks)
}