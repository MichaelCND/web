$(document).ready(function(){
    var cars = [];

    cars[0] = {brand:'BMW', model:'5-series', year: '2021', price: 'avg:4350000 rub'};
    cars[1] = {brand:'ford', model:'f-150 raptor', year: '2020', price: 'avg:8000000 (on Avito) rub'};
    cars[2] = {brand:'kia', model:'k5', year: '2021', price: 'avg:2000000 rub'};
    cars[3] = {brand:'tesla', model:'model x', year: '2021', price: 'avg:11000000 rub'};
    
    fillTable(cars)

    $.each(cars,function(key,value){
        $('#selectBrand').append($('<option></option>').val(value.brand).html(value.brand))
    })

    $.each(cars,function(key,value){
        $('#selectModel').append($('<option></option>').val(value.model).html(value.model))
    })

    $.each(cars,function(key,value){
        $('#selectYear').append($('<option></option>').val(value.year).html(value.year))
    })
    $.each(cars,function(key,value){
        $('#selectPrice').append($('<option></option>').val(value.price).html(value.price))
    })

    $('#selectBrand').change(function(){
        var filteredCar = [];
        var choice = $('#selectBrand').val();
        $.each(cars, function(key, value){ 

            if(choice == value.brand) {
                filteredCar.push(value);  
            }
        })
        fillTable(filteredCar)
    })

    
    $('#selectModel').change(function(){
        var filteredCar = [];
        var choice = $('#selectModel').val();
        $.each(cars, function(key, value){ 

            if(choice == value.model) {
                filteredCar.push(value);  
            }
        })
        fillTable(filteredCar)
    })

    $('#selectYear').change(function(){
        var filteredCar = [];
        var choice = $('#selectYear').val();
        $.each(cars, function(key, value){ 

            if(choice == value.year) {
                filteredCar.push(value);  
            }
        })
        fillTable(filteredCar)
    })

    $('#selectPrice').change(function(){
        var filteredCar = [];
        var choice = $('#selectPrice').val();
        $.each(cars, function(key, value){ 

            if(choice == value.price) {
                filteredCar.push(value);  
            }
        })
        fillTable(filteredCar)
    })

    function fillTable(cars) {
        var $tbody = $("#tBody");    
        var $table = $("#table");
         
        $("#table tbody").empty();

        $.each(cars, function(key, value){ 
            var $tr =  $('<tr></tr>');
            var $tdBrand = $('<td>' + value.brand + '</td>');
            $tr.append($tdBrand);

            var $tdModel= $('<td>' + value.model + '</td>');
            $tr.append($tdModel);

            var $tdYear= $('<td>' + value.year + '</td>');
            $tr.append($tdYear);

            var $tdPrice= $('<td>' + value.price + '</td>');
            $tr.append($tdPrice);

            $tbody.append($tr);
           $table.append($tbody);
        })
    }

})
