$( document ).ready(function() {
    var obj =[];

    obj[0] = {time:'11.00', choice:'нет'};
    obj[1] = {time:'12.00', choice:'возможно'};
    obj[2] = {time:'13.00', choice:'да'};
    obj[3] = {time:'18.00', choice:'нет'};
    obj[4] = {time:'19.00', choice:'возможно'};
    obj[5] = {time:'20.00', choice:'да'};

    fillTable(obj); 
     

    $('#search').on('click', function(){
        // создаем новый массив куда запишем отфильтрованные обекты
        var filteredObj = [];
        // находим выбранное
        var choice = $('#select').val();
        $.each(obj, function(key, value){ 
            // если выбранное == нашему обекту записываем его в новый массив методом PUSH
            if(choice == value.choice) {
                filteredObj.push(value);  
            }
        });
        // вызываем заполнение таблицы отфильтрованным массивом
        fillTable(filteredObj);
     })
})

// построение таблицы на основе переданного массива обектов
function fillTable(obj) {
    var $tbody = $("#tBody");    
    var $table = $("#table");
    // очищаем таблицу иначе будут добавлятся 
    $("#table tbody").empty();
    
    $.each(obj, function(key, value){ 
        // создаем <TR>
        var $tr =  $('<tr></tr>'); 
         // создаем <TD> time   
        var $tdTime = $('<td>' + value.time + '</td>');
         // добавляем <TD> в <TR>
        $tr.append($tdTime);
          // создаем <TD> choice   
        var $tdChoice = $('<td>' + value.choice + '</td>');
        // добавляем <TD> в <TR>
        $tr.append($tdChoice); 
        // добавляем <TR> в <TBODY>
        $tbody.append($tr);
         // добавляем <TBODY> в <TABLE>
        $table.append($tbody);
    });
}