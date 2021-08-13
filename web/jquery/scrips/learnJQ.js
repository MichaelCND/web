var myArr = ['саморазвиваться', 'кофе', 'черный чвет'];
var myArr2 = ['ничего не делать', 'спать', 'когда что-то не получается'];

$(document).ready(function () {

    $.each( myArr, function(i, value){
        var $id = $("#parentLike");
        var $elem = $('<li>' + value + '</li>');

        $elem.addClass("il");
        $id.append($elem); 
    })

    $.each( myArr2, function(i, value){
        var $id = $("#parentDontLike");
        var $elem = $('<li>' + value + '</li>');

        $elem.addClass("il");
        $id.append($elem); 
    })
    $('#parentLike li').on('click', function(){
        var $list = $('#parentLike').children();
        $list.each( function(i, li){
            $(li).removeClass('active');
        }) 
        $(this).addClass('active');
     })
     $('#parentDontLike li').on('click', function(){
        var $list = $('#parentDontLike').children();
        $list.each( function(i, li){
            $(li).removeClass('active');
        }) 
        $(this).addClass('active');
     })
     $('#bt1').on('click', function(){
        var $find = $('#parentDontLike').find('.active');
        $($find).remove();
        var name = $($find).text();

        var $id = $("#parentLike");
        var elem = '<li>' + name + '</li>';

        $id.append(elem);
        
     })
     $('#bt2').on('click', function(){
        var $find = $('#parentLike').find('.active');
        $($find).remove();
        var name = $($find).text();

        var $id = $("#parentDontLike");
        var elem = '<li>' + name + '</li>';

        $id.append(elem);       
     })
     var obj = {
        engine: { brand: 'avtoZad',  type: { gas: 1, electric: 1 } }, body: { length: 3, width: 3 }, wheels: ['tires','discs'], doors: 4, bebe:function(value){alert('будет тебе beebee' + value)}}
    
    var engine;
    var body;
    var wheels;
    var doors;
    var electric;
    var engineType;
    var brand;
    engine = $('#engine');
    body = $('#body');
    wheels = $('#wheels');
    doors = $('#doors');
    electric = $('#engine-type').attr('data-electric');
    engineType = $('#engine-type');
    brand = $('#brand');

    $.each( obj, function(i, value){
        var $elem = 'option' + value;
        var $id = $('#select');

        $id.append($elem)
    })
    $('#read').on('click', function(){
        body.val(obj.body.length);
        engine.val(obj.engine.brand);
        engineType.val($('#engine-type').attr('data-electric'));

        console.log(obj);
    })
    $('#create').on('click', function(){
        obj.body.length = body.val();
        obj.engine.gas = engine.val();
        obj.engine.type.electric = engineType.val();
        $('#engine-type').attr('data-electric', engineType.val());
        obj.engine.brand = brand.val();

        console.log(obj);
    })
    $('#clone').on('click', function(){
    var clone = obj;

    console.log(clone);
    })
    $('#beep').on('click', function(){
        obj.bebe(obj.engine.brand);
       })
})