// @
function decode(selection){

    // const choices = ["View All Departments", "View All roles", "View All Employees", "Add Department", "Add a Role", "Add Employee", "Update an Employee"]
    let fwdResult = {}
    let url ='/api/'


    switch(selection){
        case "View All Departments":
            fwdResult.fwdURL = url + 'departments'
            fwdResult.method = "get"
        break
        case "View All roles":
            fwdResult.fwdURL = url + 'roles'
            fwdResult.method = "get"
        break
        case "View All Employees":
            fwdResult.fwdURL = url + 'employees'
            fwdResult.method = "get"
        break
        case "Add Department":
            fwdResult.fwdURL = url + 'departments'
            fwdResult.method = "post"
        break
        case "Add a Role":
            fwdResult.fwdURL = url + 'roles'
            fwdResult.method = "post"
        break
        case "Add Employee":
            fwdResult.fwdURL = url + 'employees'
            fwdResult.method = "post"
        break
        case "Update an Employee":
            fwdResult.fwdURL = url + 'departments/'
            fwdResult.method = "put"
        break
    }
    return fwdResult;
}

module.exports = {
    decode
};