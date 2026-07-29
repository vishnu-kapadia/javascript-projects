function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function getGreeting(timeOfDay) {
        return `Good ${timeOfDay}`;
    }

function createGreeting(firstName, lastName, timeOfDay) {
    const fullName = formatName(firstName, lastName);
    const greeting = getGreeting(timeOfDay);
    return `${greeting}, ${fullName}`;
}

console.log(createGreeting("John", "Doe", "evening"));
console.log(createGreeting("Jane", "Devis", "morning"));
console.log(createGreeting("Alex", "Wills", "afternoon"));
