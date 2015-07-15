
var gauss_ass = ["Gauss", "gauss",];
function gauss(sistema){
	var x, v_fator;
	var fator, k;
	
	$('#bash').append( "Aplicando Gauss em:" +matrizParaTable( sistema ));
	k = 0;
	for (var i = 0; i < sistema.length-1; i++){
		//~ para cada linha
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

function gauss_somarLinhas(i_linha_dest, A, linha){
	if (i_linha_dest > A.length){
		return false;
	}
	
	for (var i = 0; i < A[i_linha_dest].length; i++){
		A[i_linha_dest][i] += linha[i];
	}
	
	return A;
}

function gauss_multiplicarLinha(linha, A, fator ){
	//~ multiplica uma linha por um fator
	var ret = [];
	
	for (var i = 0; i < A[linha].length; i++){
		ret[i] = A[linha][i] * fator;
	}
	
	return ret;
} 

function gauss_determinaFator(i, j, A){
	var ret;
	
	if (i < j){
		return 0;
	}
	
	ret = A[i][j] / A[j][j]
	
	return ret;
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

