$(function() {
  var boundaryObj = new Boundary("boundary");
  boundaryObj.doSomething("Hello Worlds");
  boundaryObj.drawColumn();
  $( "#sortable1, #sortable2, #sortable3" ).sortable({
    connectWith: ".connectedSortable"
  }).disableSelection();
});




















/*
  resizeFunction = 
  $( "#sortable1" ).resizable({
    minHeight: 400,
    maxHeight: 400,
    resize: function(event, ui){
      var a = 10;
      var b = 20;
      sortable1 = $('#sortable1').width();
      sortable2 = $('#sortable2').width();
      sortable3 = $('#sortable3').width();
      difference = 450 - sortable1 - sortable3;
      
      //sortable2CSS = sortable2.width();
      //sortable3CSS = sortable3.width();
      $('#sortable2').css("width",difference+"px");
      sortable2 = $('#sortable2').width();
      
      difference = 450 - ui.size.width - sortable2 - sortable3;
      if(difference < 0) {
        newSortable1Width = 450 - sortable2 - sortable3;
        $('#sortable1').css("width", newSortable1Width+"px");
      }
    }
  });
  
  $( "#sortable2" ).resizable({
    minHeight: 400,
    maxHeight: 400,
    resize: function(event, ui){
      sortable1 = $('#sortable1').width();
      sortable2 = $('#sortable2').width();
      sortable3 = $('#sortable3').width();
      difference = 450 - sortable1 - sortable2;
      
      //sortable2CSS = sortable2.width();
      //sortable3CSS = sortable3.width();
      $('#sortable3').css("width",difference+"px");
      sortable3 = $('#sortable3').width();
      
      difference = 450 - ui.size.width - sortable1 - sortable3;
      if(difference < 0) {
        newSortable2Width = 450 - sortable1 - sortable3;
        $('#sortable2').css("width", newSortable2Width+"px");
      }
    }
  });
  $( "#sortable1, #sortable2, #sortable3" ).sortable({
    connectWith: ".connectedSortable"
  }).disableSelection();
  //$( "#sortable2" ).resizable('disable');
});
*/
