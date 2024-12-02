const tasks = [
    { label: "Stop working", complete: true },
    { label: "Check newbie's code", complete: false },
    { label: "Write a review", complete: false },
    { label: "Take a deep breath", complete: false },
    { label: "Return to the grind", complete: false },
]

exports.seed = async function (knex) {
    await knex('tasks').insert(tasks)
}