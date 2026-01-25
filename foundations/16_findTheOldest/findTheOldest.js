const findTheOldest = function(people, refYear = new Date().getFullYear()) {
    if (!Array.isArray(people) || people.length === 0) return null

    const age = (p) => {
        const birth = p.yearOfBirth
        const death = (p.yearOfDeath ?? refYear)
        return death - birth
    }

    return people.reduce((older, p) => {
        return age(p) > age(older) ? p : older
    })

};

// Do not edit below this line
module.exports = findTheOldest;
