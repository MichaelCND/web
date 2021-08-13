/* function create() {
    var elem = document.createElement('p')
    var wrp = document.getElementById('wr');
    var content = document.createTextNode ('готово')
    elem.appendChild(content)
    wrp.parentNode.appendChild(elem)
} */

var myArr = ['саморазвиваться', 'кофе', 'черный чвет'];
var myArr2 = ['ничего не делать', 'спать', 'когда что-то не получается'];

function start() {
    for (i = 0; i < myArr.length; i++) {

        var elem = document.createElement('li');
      var id = document.getElementById('parentLike');

      elem.classList.add('il');

        elem.innerHTML = myArr[i];
        id.appendChild(elem);
    }

    for (i = 0; i < myArr2.length; i++) {

        var elem = document.createElement('li');
        elem.classList.add('il')
        var id = document.getElementById('parentDontLike');

        elem.innerHTML = myArr2[i];
        id.appendChild(elem);
    }

    
}

function selectItem(e, parentUl) {
    var ul = document.getElementById(parentUl);
    var list = ul.children;
    for (let il of list) {
        il.classList.remove('active');
        console.log(il)
    }
    e.target.classList.add('active');
    
}