const generateTeam = team => {
    const generateManager = manager => {
        return `
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">${manager.getName()}</div>
          <div class="font-bold text-xl mb-2">${manager.getRole()}</div>
          <div class="text-gray-700 text-base">
          <ul>
          <li>Managers ID: ${manager.getId()}</li>
          <li>Managers email: ${manager.getEmail()}</li>
          <li>Managers office number: ${manager.getOfficeNumber()}</li>
          <ul>
          </div>
        </div>

      </div>

        `;
    }

    const generateEngineer = engineer => {
        return `
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">${engineer.getName()}</div>
          <div class="font-bold text-xl mb-2">${engineer.getRole()}</div>
          <div class="text-gray-700 text-base">
          <ul>
          <li>Engineer's ID: ${engineer.getId()}</li>
          <li>Engineer's email: ${engineer.getEmail()}</li>
          <li>Engineers GitHub: ${engineer.getGithub()}</li>
          <ul>
          </div>
        </div>

      </div>

        `;
    }

    const generateIntern = intern => {
        return `
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">${intern.getName()}</div>
          <div class="font-bold text-xl mb-2">${intern.getRole()}</div>
          <div class="text-gray-700 text-base">
          <ul>
          <li>Interns ID: ${intern.getId()}</li>
          <li>Interns email: ${intern.getEmail()}</li>
          <li>Interns school: ${intern.getSchool()}</li>
          <ul>
          </div>
        </div>

      </div>

        `;
    }

    const html = []

    html.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => generateManager(manager))
    )

    html.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer))
        .join('')
    )

    html.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateIntern(intern))
        .join('')
    )

    return html.join('')

}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team List</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <header class="flex justify-center">
        <h1 class="flex">My Team</h1>
    </header>

    <section class="flex justify-center ">
        <div>
            ${generateTeam(team)}
        </div>
    </section>
    
</body>
</html>
    `;
}