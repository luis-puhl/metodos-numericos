
var gaussParcial_ass = ["Gauss com pivotamento parcial", "gaussParcial",];
function gaussParcial(sistema){
	var x, v_fator;
	var fator, k, max;
	
	$('#bash').append( "Aplicando Gauss em:" +matrizParaTable( sistema ));
	k = 0;
	for (var i = 0; i < sistema.length-1; i++){
		//~ para cada linha
		
		max = gaussP_maxColuna(i, sistema, i);
		gaussP_swap(i, max, sistema);
		
		for (var j = i+1; j < sistema.length; j++){
			if (sistema[j][i] == 0){
				k++;
				continue;
			}
			
			//~ para cada coluna abaixo da linha
			fator = gauss_determinaFator(j, i, sistema);
			v_fator = gauss_multiplicarLinha (i, sistema, -fator);
			sistema = gauss_somarLinhas(j, sistema, v_fator);
			
			$('#bash').append( "Gauss iteracao "+k+":" +matrizParaTable( sistema ));
			k++;
		}
	}
	
	x = retroSubstituicao(sistema);
	
	return x;
}

function gaussP_swap( linha, linha2, A){
	var aux;
	
	aux = A[linha];
	A[linha] = A[linha2];
	A[linha2] = aux;
	
}

function gaussP_maxColuna(coluna, A, inicio){
	if (inicio==null){
		inicio = 0;
	}
	var max, i, aux, index;
	
	i = inicio;
	index = i;
	max = Math.abs( A[i][coluna] );
	i++;
	for (; i < A.length; i++){
		aux = Math.abs( A[i][coluna] );
		if (aux > max){
			index = i;
			max = Math.max(max, aux);
		}
	}
	
	return index;
}


/*
 * gauss.js
 * 
 * Copyright 2013 Luís Puhl <luispuhl@gmail.com>
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 * 
 * * Redistributions of source code must retain the above copyright
 *   notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above
 *   copyright notice, this list of conditions and the following disclaimer
 *   in the documentation and/or other materials provided with the
 *   distribution.
 * * Neither the name of the  nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 * 
 */

