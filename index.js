class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=>{
      return a-b;
    })
    this.length ++;
  }

  get(pos) {
  if(!this.length){
    throw new Error('OutOfBounds');
  }
    return this.items.indexOf(pos);
  }

  max() {
    if(!this.length){
    throw new Error('EmptySortedList');
  }
    return Math.max(...this.items);
  }

  min() {    
    if(!this.length){
    throw new Error('EmptySortedList');
  }
    return Math.min(...this.items);
  } 
  
  sum() {
    if(!this.length){
      return 0;
    }
    const sum = this.items.reduce((a,b)=>{
     return a + b;
    });
    return sum; 
  }

  avg() {
    if(!this.length){
      throw new Error('EmptySortedList');
    }
    const sum = this.items.reduce((a,b)=>{
      return a + b;
     });
const avg = sum/this.length;
return avg;
  }
}

module.exports = SortedList;
