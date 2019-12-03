export default {

  sortItems: function(array, sortParameter){
    if (sortParameter){
      array.sort( (a, b) =>{
      return (a[sortParameter] - b[sortParameter])
      })
    }else{
      array.sort( (a,b) => a - b)
    }
  },

  filterSortData: function (data) {
    data.sort( (a,b) => parseInt(a.stepNumber) - parseInt(b.stepNumber) ); //sorts results by step number
    return data.map( listItem => {
      listItem.versionContent.sort( (a, b) => (new Date (b.effectiveDate)) -  (new Date (a.effectiveDate)) ); //sorts by date of entry
      return  { // itemized object returned by data.map()
        title: listItem.versionContent[0].title,
        body: listItem.versionContent[0].body,
        id: listItem.id,
        stepNumber: listItem.stepNumber.toString()
      }
    })
  }
}