//alert('Heelo from script.js');

var myStyles = [
  { width: 200, color: "red"},
  { width: 300, color: "blue"},
  { width: 250, color: "purple"}
];

d3.selectAll('.item')
  .data(myStyles)
  .style({
    'color': "white",
    'background': function(d) {
    return d.color;
  },
    width : function(d) {
      return d.width + 'px';
    }
})
