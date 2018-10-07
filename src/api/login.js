
var data1 = JSON.parse(sessionStorage.getItem('mydata'));
console.log(data1)
let per={
    name: 'Who',
    sex: 'Male',
    hasenter:false
}
if(data1 != null){
    per.hasenter=true
}
export default {
    per
  }