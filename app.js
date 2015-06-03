module.exports = {
  sum: function (a,b){
    return a+b;
  },
  isPrime: function(a) {
    var prime = true;
    if (a<=2) {return false};

    for (var i=2; i<a; i++) {
      if (a % i == 0) {prime = false}
    }

    return prime;
  },
  average: function(a,b,c) {
    return (a+b+c) / 3;
  },
  divide: function(a,b) {
    return a/b;
  }
}
