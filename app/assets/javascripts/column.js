var column = function(){};

column.prototype = {
    some_property: null,
    some_other_property: 0,

    doSomething: function(msg) {
        sortable1Width = $('#sortable1').width();
        this.some_property = sortable1Width;
        alert(this.some_property);
    }
};
