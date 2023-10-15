// For 
var sports = ['soccer', 'baseball', 'football', 'swimming'];

for (var i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}

// For in
for (var index in sports) {
    console.log(sports[index]);
}

// For of
for (var sport of sports) {
    console.log(sport);
}

// While
var i = 0;
while (i < sports.length) {
    console.log(sports[i]);
    i++;
}

