//Default Num Array
let simpleNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Default Objcet Array
let simpleObjectArray = [
    {
        name: "laptop",
        price: 25000,
        count: 10

    },
    {
        name: "keyboard",
        price: 250,
        count: 5
    },
    {
        name: "mouse",
        price: 300,
        count: 6
    }
]

//Duplcate Num Array
let simpleDuplicateNumArray = [1, 1, 2, 2, 3, 4, 5, 6, 7, 4, 5, 6, 7, 8, 9, 10];

//1. Array For Each Method
document.write("1. Foreach array <br>")
simpleNumArray.forEach((item, index) => {
    document.write(item + " ");
});
document.write("<br>");
document.write("<br>");

//2. Array Map Method
document.write("2. Map array <br>")
let productPriceTotalArray = simpleObjectArray.map(item => "Item Name - " + item.name + " - Item Total Prices - " + (item.price * item.price) + "<br>")
document.write(productPriceTotalArray + "<br>");


//3. Array Filter Method
document.write("3. Filter array <br>");
let filteredArray = simpleNumArray.filter((item) => {
    if (item % 2 === 0)
        return item;
});
document.write("My Even numbers are - " + filteredArray);
document.write("<br>");
document.write("<br>");


//4. Array Filter Method and indexOf() function
document.write("4. Filter array and Index Of array <br>");
let filteredDuplicateArray = simpleDuplicateNumArray.filter((item, index, array) => {
    if(array.indexOf(item) == index)
        return item;
}); 
document.write("My filtered numbers are - " + filteredDuplicateArray);
document.write("<br>");
document.write("<br>");

//5. Array Reduce Method
document.write("5. Reduce array <br>");
let reduceSum = simpleNumArray.reduce((accumulator, item) => {
    return accumulator + item;
});
document.write("My total sum is - " + reduceSum);
document.write("<br>");
document.write("<br>");


//6. Array Slice Method
document.write("6. Slice array <br>");
let sliceNumbers = simpleNumArray.slice(0,5);
document.write("My slice arrays are - "+sliceNumbers);
document.write("<br>");
document.write("<br>");

//7. Array Splice Method - Remove and Push New numbers
document.write("7. Splice array. Remove and Push New numbers <br>");
let newSplicedArray = simpleNumArray.splice(1,5,0,0,0,0);
document.write("My spliced deleted arrays are - "+newSplicedArray);
document.write("<br>");
document.write("My spliced modified arrays are - "+simpleNumArray);
document.write("<br>");
document.write("<br>");


//8. Array Splice Method - Remove and Push New numbers - v2
document.write("8. Splice array. Remove and Push New numbers V2 <br>");
let newSplicedModifiedArray = simpleNumArray.splice(1,4,newSplicedArray);
document.write("My spliced modified arrays are - "+simpleNumArray);
document.write("<br>");
document.write("<br>");

//9. Array Splice Method - Push New numbers
let testPushSpliceArr = [1,2,3,4];
document.write("9. Splice array. Push New numbers <br>");
testPushSpliceArr.splice(4,0,5,6,7,8,9,10);
document.write("My spliced modified arrays are - "+testPushSpliceArr);
document.write("<br>");
document.write("<br>");

//10. Array Concat Method
document.write("10. Concat Array <br>");
document.write("Concated Arrays are - "+simpleNumArray.concat(simpleDuplicateNumArray)+"<br>");
document.write("<br>");

//11. Array Length Method
document.write("11. Length Array <br>");
document.write("Simple Duplicate Num Array Length is - "+simpleDuplicateNumArray.length);
document.write("<br>");
document.write("<br>");

//12. Array POP method 
document.write("12. Array POP method <br>");
document.write("Simple Duplicate Num Array have been popped 😙. Poped value is - "+simpleDuplicateNumArray.pop());
document.write("<br>");
document.write("<br>");

//13. Array Push Method
document.write("13. Array push method <br>");
simpleNumArray.push(11,12,13,14)
document.write("Pushed array - "+simpleNumArray);
document.write("<br>");
document.write("<br>");

//14. Array Shift Method
document.write("14. Array Shift method <br>");
document.write("Original array before shift - "+simpleDuplicateNumArray+"<br>")
let removedItem = simpleDuplicateNumArray.shift();
document.write("Array Shifted to - "+simpleDuplicateNumArray+" - removed item - "+removedItem);
document.write("<br>");
document.write("<br>");

//15. Array Unshift Method 
document.write("14. Array Unshift method <br>");
document.write("Original array before unshift - "+simpleDuplicateNumArray+"<br>")
simpleDuplicateNumArray.unshift(1);
document.write("Array Unshifted to - "+simpleDuplicateNumArray);
document.write("<br>");
document.write("<br>");

//16. Array Fill Method
document.write("15. Array Fill method <br>")
let newArrForFill = [1,3,4,5]
newArrForFill.fill(2,1,2);
document.write("Array Filled with - "+newArrForFill);
document.write("<br>");
document.write("<br>");



