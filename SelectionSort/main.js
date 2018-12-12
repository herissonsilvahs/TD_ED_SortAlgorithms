
let originalArray = [4, 5, 2, 1, 3, 8, 7]
let originalDiv = document.getElementById('origArray')
let orderedDiv = document.getElementById('orderedArray')

originalDiv.innerHTML = show(originalArray)

orderedDiv.innerHTML = selectionSort(originalArray)

function show(array) {
  return array.map(function(element) {
    return `<div class="px-2 py-2 bg-grey rounded">${element}</div>`
  })
}

function selectionSort(array) {
  array.forEach(function(element, index) {
    let minValue = element
    let minIndex = index
    for (let i = index; i < array.length; i++) {
      if (compare(array[i], minValue) < 0){
          minValue = array[i]
          minIndex = i
        }
    }
    array = trocar(array, index, minIndex)
  });
  return show(array);
}

function compare(a, b) {
  if (a < b) {
    return -1
  }else if (a > b){
    return 1
  } 
  return 0
}

function trocar (array, n1, n2) {
  let aux = array[n1]
  array[n1] = array[n2]
  array[n2] = aux
  return array
}
