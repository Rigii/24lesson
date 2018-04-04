$(function() {
    var code = {a: '.-', b: '-...', c: '-.-.', d: '-..', e: '.', f: '..-.', g: '--.', h: '....',
    i: '..', j: '.---', k: '-.-', l: '.-..', m: '--', n: '-.', o: '---', p: '.--.', q: '--.-', r: '.-.', s: '...',
    t: '-', u: '..-', v: '...-', w: '.--', x: '-..-', y: '-.--', z: '--..', " ": '−···−'};

var text =prompt(" ");
var morz =prompt(" ");
arrText=text.split('');
arrMorz= morz.split(" ");
var translOnMorz=[];
var translToMorz=[];

$.each(arrText, function () {translOnMorz.push(" "+code[this])});
var joinTransl= translOnMorz.join('');
alert(joinTransl);

$.each(arrMorz, function(){
    for(var i in code){if (this==code[i]){translToMorz.push(i)}}});
    var joinTransl=translToMorz.join('');
    alert(joinTransl)
});
