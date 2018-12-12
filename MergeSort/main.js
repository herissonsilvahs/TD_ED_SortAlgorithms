let originalArray = [4, 5, 2, 1, 3, 8, 7]
let originalDiv = document.getElementById('origArray')
let orderedDiv = document.getElementById('orderedArray')

originalDiv.innerHTML = show(originalArray)

orderedDiv.innerHTML = mergeSort(originalArray, 0, originalArray.length - 1)

function show(array) {
  return array.map(function (element) {
    return `<div class="px-2 py-2 bg-grey rounded">${element}</div>`
  })
}

function merge(vetor, inicio, meio, fim) {

	var vetor_aux = vetor.slice();
	var c = inicio;
	var m = meio+1;
	var k = inicio;

	while(c <= meio && m <= fim){
		if (vetor_aux[c] < vetor_aux[m] ) {
			vetor[k] = vetor_aux[c];
			c++;
		}else{
			vetor[k] = vetor_aux[m];
			m++;
		}
		k++;
	}

	/* quando for primeira metade do vetor */
	while(c <= meio){
		vetor[k] = vetor_aux[c];
		c++;
		k++; 
	}

	/* quando for segunda metade do vetor */
	while(m <= fim){
		vetor[k] = vetor_aux[m];
		k++;
		m++;
	}
	
	return vetor;
}


function mergeSort(vetor , inicio, fim) {

	if (inicio < fim) {
		var meio = parseInt((inicio + fim)/2);  // Posição do meio do vetor

		/* Primeira metade */
		mergeSort(vetor, inicio, meio);

		/* segunda metade */
		mergeSort(vetor, meio+1, fim);

		/* Junta tudo de forma ordenada */
		merge(vetor, inicio, meio, fim);

	}

	return show(vetor);
}
