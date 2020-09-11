var table = '#mytable'
$('#maxRows').on('change', function(){
  $('.pagination').html('')
  var trnum = 0
  var maxRows = parseInt($(this).val()) // 5 or 10
  var totalRows = $(table+' tbody tr').length //11
  $(table+' tr:gt(0)').each(function() { //#maxRows tr(greater index than 0)
    trnum++ //tr number increase depending on the amount of rows
    if(trnum > maxRows){ //if the table rows are greater than the pagination rows than hide 
      $(this).hide()
    }
    if(trnum <= maxRows){ //show pagination rows
      $(this).show()
    }
  })
  if(totalRows > maxRows){ //if table row is greater than pagination row then append to pagination
    var pagenum = Math.ceil(totalRows/maxRows) // this will tell you how many pages they have
    for(var i=1; i<=pagenum;){
      $('.pagination').append('<li data-page="'+i+'">\<span>'+ i++ +'<span class="sr-only">{current}</span></span>\</li>').show()
    }
  }//this will put the number of pages on the bottom depending on the number of pagination rows
  $('.pagination li:first-child').addClass('active') //first is active
  $('.pagination li').on('click', function(){ //pagination page number
    var pageNum = $(this).attr('data-page') //gets the pagination page number
    var trIndex = 0;
    $('.pagination li').removeClass('active')
    $(this).addClass()
    $(table+' tr:gt(0)').each(function() { //#maxRows tr(greater index than 0)
      trIndex++
      if(trIndex > (maxRows*pageNum) || trIndex <= ((maxRows*pageNum)-maxRows)){ 
        $(this).hide() //if trIndex is greater than (max rows times page Number) or 
        //trIndex is less than (maxRows times page number and subtract by maxRows) then hide
      } else {
        $(this).show()
      }
    })
  })
})//
$(function(){
  $('#mytable').html()
  $('table tr:eq(0)').prepend('<th>ID</th>') //table tr equals 0 then prepend Table header ID
  var id = 0;
  $('table tr:gt(0)').each(function(){ //table tr index greater than 0 then increase the id and append the id to it
    id++
    $(this).prepend('<td>'+id+'</td>')
  })
})//
