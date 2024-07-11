$("#input-container").on('submit', function(e){
    e.preventDefault();

    let titleInput = $('#tinput').val()
    let ratingInput = $('#rinput').val()

let newRow = `<tr>
               <td>${titleInput}</td>
               <td>${ratingInput}</td>
               <td><button class="delete-btn">Delete</button></td>
               </tr>`


$('#movie-table-body').append(newRow);

//clearing inputs
$('#tinput').val('');
$('#rinput').val('') ;
})



$(document).on('click', '.delete-btn', function(){
$('.main-table tr').last().remove()

})