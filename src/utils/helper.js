export default {

  sortItems: function(array, sortParameter){
    if (sortParameter){
      array.sort( (a, b) =>{
      return (a[sortParameter] - b[sortParameter])
      })
    }else{
      array.sort( (a,b) => a - b)
    }
  }
}