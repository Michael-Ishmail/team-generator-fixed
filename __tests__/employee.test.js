const Employee = require('../lib/Employee');

test('Create employee', () => {
    const employeeGen = new Employee();
    expect(typeof(employeeGen)).toBe('object');
})

test('Name test', () => {
    const name = 'mike'
    const employeeGen = new Employee(name)
    expect(typeof(employeeGen)).toBe(name)
})

test('Id test', () => {
    const id = '156'
    const employeeGen = new Employee('mike', id)
    expect(typeof(employeeGen)).toBe(id)
})

test('Email test', () => {
    const email = 'michaely.ishmail@gmail.com'
    const employeeGen = new Employee('mike', 156, email)
    expect(typeof(employeeGen)).toBe(email)
})

test('getName test', () => {
    const testName = 'mike'
    const employeeGen = new Employee(testName)
    expect(employeeGen.getName()).toBe(testName)
})

test('getId test', () => {
    const testId = '156'
    const employeeGen = new Employee('mike', testId)
    expect(employeeGen.getName()).toBe(testId)
})

test('getEmail test', () => {
    const testEmail = 'michaely.ishmail@gmail.com'
    const employeeGen = new Employee('mike', 156, testEmail)
    expect(employeeGen.getName()).toBe(testEmail)
})

test('role test', () => {
    const testRole = 'Employee'
    const employeeGen = new Employee('mike', 156, 'michaely.ishmail@gmail.com')
    expect(employeeGen.getName()).toBe(testRole)
})