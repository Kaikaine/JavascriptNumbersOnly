
var newArr = [];


function ray(arr) {
    
    for (var i = 0; i < arr.length; i++) {


        if (typeof arr[i] === "number") {

            newArr.push(arr[i]);
            
        }

    }

    console.log(newArr)
}

