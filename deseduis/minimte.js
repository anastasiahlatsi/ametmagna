var obj = {
  remove: function(item) {
    console.log('Removing:', item);
  }
};

var data = ['item1', 'item2', 'item3'];

for (var i = 0, n = data.length; i < n; ++i) {
  obj.remove(data[i]);
}
