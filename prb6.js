// Convert Age to Days

let year = prompt("Enter the age you wanted to convert into days")
year=Number.parseInt(year)
function ageInDays(year1){
    return year1*365
}

let result = ageInDays(year)
alert("Your age in days "+result)