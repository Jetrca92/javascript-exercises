const findTheOldest = function(people) {
    let oldestName = "";
    let oldest = 0;
    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath) {
            if ((people[i].yearOfDeath - people[i].yearOfBirth) > oldest) {
                oldest = people[i].yearOfDeath - people[i].yearOfBirth;
                oldestName = people[i].name;
            }
        }
        else {
            if ((2023 - people[i].yearOfBirth) > oldest) {
                oldest = 2023 - people[i].yearOfBirth;
                oldestName = people[i].name;
            }
        }
    }
    return oldestName;
};


// Do not edit below this line
module.exports = findTheOldest;
