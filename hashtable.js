function HashTable(){
  this.size = 0;
  this.dataStore = {};
}

HashTable.prototype.getValue = function(key){
  return this.dataStore[key];
}

HashTable.prototype.toString = function(){
  for(var d in this.dataStore){
    console.log(d + this.dataStore[d])
  }
  return this.dataStore.toString();
}

HashTable.prototype.remove = function(key){
  if(this.dataStore.hasOwnProperty(key)){
    delete this.dataStore[key];
    this.size -= 1;
    return this.dataStore;
  }
}

HashTable.prototype.getSize = function(){
  return this.size;
}

HashTable.prototype.put = function(key, value){
  // if(this.dataStore.hasOwnProperty(key)) {
  //   throw new Error ("Hash table cannot contains duplicates");
  // }
  // else {
    this.dataStore[key] = value;
    this.size += 1;
    return this.dataStore;
  // }
}

HashTable.prototype.enumerate = function(){
  for(var element in this.dataStore){
    console.log(element + " " +this.dataStore[element])
  }
  return this.dataStore;
}

HashTable.prototype.isEmpty = function() {
  return this.size > 0 ? false : true;
}

HashTable.prototype.clear = function(){
  this.dataStore = {};
  this.size = 0;
  return this.size;
}

HashTable.prototype.contains = function(key){
  if(this.dataStore.hasOwnProperty(key)){
    return true;
  }
  else {
    return false;
  }
}

var ht = new HashTable();
ht.put("color", "red");
ht.put("bike", "blue");
ht.remove("bike");
console.log(ht.toString());
console.log(ht.getValue("color"));

