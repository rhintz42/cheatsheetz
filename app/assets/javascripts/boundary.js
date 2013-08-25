function Boundary(boundaryID) {
  this.boundaryID = boundaryID;
  this.element = $('#'+this.boundaryID)
  $('#'+this.boundaryID).css('width', 600+'px');
  $('#'+this.boundaryID).css('height', 600+'px');
  $('#'+this.boundaryID).css('background-color', 'gray');
}

Boundary.prototype = {
  doSomething: function(msg) {
    var sortable1Width = $('#'+this.boundaryID).width();
    //alert(sortable1Width);
  },
  drawColumn: function() {
    this.element.append('<ul id="sortable1" class="connectedSortable"><li class="ui-state-default">Item 1</li><li class="ui-state-default">Item 2</li></ul>')
  }
}
/*
var boundary = function(){};

boundary.prototype = {
    some_property: null,
    some_other_property: 0,

    doSomething: function(msg) {
        sortable1Width = $('#sortable1').width();
        this.some_property = sortable1Width;
        alert(this.some_property);
    }
};
*/
