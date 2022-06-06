const Intern = require('../lib/Intern')

test('Create school', () => {
    const testSchool = 'school'
    const employeeGen = new Intern('mike', 156, 'michaely.ishmail@gmail.com', testSchool)
    expect(employeeGen.school).toBe(testSchool)
})

test('office test', () => {
    const testSchool = 'school'
    const employeeGen = new Intern('mike', 156, 'michaely.ishmail@gmail.com', testSchool)
    expect(employeeGen.getSchool).toBe(testSchool)
})

test('role test', () => {
    const testRole = 'Intern'
    const employeeGen = new Intern('mike', 156, 'michaely.ishmail@gmail.com', 'school')
    expect(employeeGen.getRole()).toBe(testRole)
})