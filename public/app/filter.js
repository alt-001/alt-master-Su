alt
.filter('cut', function () {
  return function (value, wordwise, max, tail) {
    if (!value) return '';
    max = parseInt(max, 10);
    if (!max) return value;
    if (value.length <= max) return value;
    value = value.substr(0, max);
    if (wordwise) {
      var lastspace = value.lastIndexOf(' ');
      if (lastspace != -1) {
          value = value.substr(0, lastspace);
      }
    }
    return value + (tail || ' …');
  };
})
.filter('filtertype', function () {
    return function (products, types) {
      
      var hasAll = _.has(types, "all");
      if(!hasAll) {
        var items = {
            types: types,
            out: []
        };
      } else {
        var items = {
            types: {"bag":true,"jewelly":true,"accessory":true,"shoe":true},
            out: []
        };
      }
        angular.forEach(products, function (value, key) {
            if (this.types === undefined) {
                this.out.push(value);
            } else {
                if (this.types[value.subcat] === true) {
                    this.out.push(value);
                } 
            }
        }, items);
        return items.out;
    };
});