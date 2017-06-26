var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

console.log(students[0].first_name + ' ' + students[0].last_name);
console.log(students[1].first_name + ' ' + students[1].last_name);
console.log(students[2].first_name + ' ' + students[2].last_name);
console.log(students[3].first_name + ' ' + students[3].last_name);


//Part 2
var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

console.log('Students');
console.log(1 + ' - ' + users.Students[0].first_name + ' ' + users.Students[0].last_name + ' - ' + ' 13');
console.log(2 + ' - ' + users.Students[1].first_name + ' ' + users.Students[1].last_name + ' - ' + ' 11');
console.log(3 + ' - ' + users.Students[2].first_name + ' ' + users.Students[2].last_name + ' - ' + ' 11');
console.log(4 + ' - ' + users.Students[3].first_name + ' ' + users.Students[3].last_name + ' - ' + ' 7');
console.log('Instructors')
console.log(1 + ' - ' + users.Instructors[0].first_name + ' ' + users.Instructors[0].last_name + ' - ' + ' 11');
console.log(2 + ' - ' + users.Instructors[1].first_name + ' ' + users.Instructors[1].last_name + ' - ' + ' 13');
