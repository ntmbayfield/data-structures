
var Stack = function() {

  this.storage = {};
  this.stackSize = 0;

};

Stack.prototype.push = function(value){
  this.storage[this.stackSize] = value;
  this.stackSize++
};

Stack.prototype.pop = function(){
  this.stackSize && this.stackSize--;
  var result = this.storage[this.stackSize];
  delete this.storage[this.stackSize];
  return result;
};

Stack.prototype.size = function(){
  return this.stackSize;
};


