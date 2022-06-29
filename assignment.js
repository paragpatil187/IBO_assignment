/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/




const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];
function getUniqueProductCount(arr){
var obj={};
arr.map((e)=>{
if(obj[e.productName]==undefined){
obj[e.productName]=1;

}
else{
obj[e.productName]++;

}
});
return obj;
}


function getUniquePrducts(list){
let arr=[];
let obj={};
for(let i in list){
if(obj[list[i].productName]==undefined){
obj[list[i].productName]=arr.length;
arr.push(list[i]);
}
else{
arr[obj[list[i].productName]].quantity=arr[obj[list[i].productName]].quantity+list[i].quantity;
}
}
return arr;
}

console.log(getUniqueProductCount(listOfProducts));
console.log(getUniquePrducts(listOfProducts));

