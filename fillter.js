$(function() {
    var obj = {
        "John McLean": {
            "age": 34,
            "experience": 12
        },
        "Adam Luis": {
            "age": 45,
            "experience": 5
        },
        "Oleg Petrenko": {
            "age": 25,
            "experience": 5
        },
        "Natalia Ostroverh": {
            "age": 38,
            "experience": 10
        },
        "Olya Ostroverh": {
            "age": 36,
            "experience": 10
        },
        "Olya Tinkoff": {
            "age": 55,
            "experience": 21
        },
        "Anton Antonov": {
            "age": 25,
            "experience": 22
        },
        "Oleg Tynov": {
            "age": 18,
            "experience": 1
        }
    };

    var newObj = JSON.parse(JSON.stringify(obj));

    var newArr = [];
    var ex6 = [];
    var jerks = [];
    var grated = [];
    var artefacts = [];
    $.each(newObj, function (i) {
        this.name = i;
        this.begin = this.age - this.experience;
        newArr.push(this);
        if (this.experience >= 6) {
            ex6.push(this);
        } else if (this.age > 40) {
            artefacts.push(this);
        } else if (this.age > 30 && this.age < 40) {
            grated.push(this);
        } else if (this.age < 30) {
            jerks.push(this)
        }
    });
   var arrSort=newArr.sort(function(a,b){if (a.begin>b.begin){return 1}
   if (a.begin<b.begin) {return -1;}});
    console.log(arrSort);
    console.log(jerks);
});

/*
$.each(newObj, function (i) {
    this.name=i;
    this.begin= this.age-this.experience;
    newArr.push(this);
    switch(this){
        case this.experience>=6:
            ex6.push(this);
            break;
        case this.age>40:
            artefacts.push(this);
            break;
        case this.age>30&&this.age<40:
            grated.push(this);
            break;
        case this.age<30:
            jerks.push(this);
            break;
    }
});
console.log(ex6);
$
*/