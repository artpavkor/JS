const users = ['Jack', 'Mariah', 'Sarah', 'Jonathan', 'Piere', 'Bob', 'Samantha', 'Mary'];
const shortNames = [];

users.forEach(function(elem) {
        let a = elem.length;
        if (a <= 5) {
            shortNames.push(elem);
        }
})
console.log(shortNames);