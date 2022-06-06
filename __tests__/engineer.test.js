const Engineer = require('../lib/Engineer')

test('Create github', () => {
    const testGithub = 'user'
    const employeeGen = new Engineer('mike', 156, 'michaely.ishmail@gmail.com', testGithub)
    expect(employeeGen.github).toBe(testGithub)
})

test('Github return test', () => {
    const testGithub = 'user'
    const employeeGen = new Engineer('mike', 156, 'michaely.ishmail@gmail.com', testGithub)
    expect(employeeGen.getGithub()).toBe(testGithub)
})

test('role test', () => {
    const testRole = 'Engineer'
    const employeeGen = new Engineer('mike', 156, 'michaely.ishmail@gmail.com', 'user')
    expect(employeeGen.getRole()).toBe(testRole)
})