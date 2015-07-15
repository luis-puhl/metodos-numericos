
var cholesky_ass = ["Cholesky", "cholesky",];
function cholesky(sistema){
	var L, Lt, b, y, x;
	var n = sistema.length-1;
	var i;
	
	b = [];
	for (i = 0; i <= n; i++){
		b[i] = sistema[i][n+1];
	}
	
	L = ch_trasformar(sistema);
	Lt = matriztTransposta(L);
	$('#bash').append( "L"+matrizParaTable( L ));
	$('#bash').append( "Lt"+matrizParaTable( Lt ));
	
	for (i = 0; i <= n; i++){
		L[i][n+1] = b[i];
	}
	
	//~ Solucionar L*y=b
	y = retroSubstituicao(L);
	if (!y){
		return false;
	}
	
	//~ Solucionar Lt*x=y
	for (i = 0; i <= n; i++){
		Lt[i][n+1] = y[i];
	}
	x = retroSubstituicao(Lt);
	
	return x;
}

function ch_trasformar(A){
	var aux;
	
	//~ para alocar a matriz
	var L = Matriz(A.length);
	
	//~ primeiro elemento
	//~ ch_elemento(0, 0, A, L);
	//~ resto da matriz
	for (var j = 0; j < A.length; j++){
		for (var i = j; i < A.length; i++){
			//~ aux = ch_elemento(i, j, A, L); // para ajudar no debug (funciona muito bem)
			aux = ch_elemento(i, j, A, L);
		}
	}
	
	return L;
}

function ch_elemento(i, j, A, L){
	if (i == j){
		return ch_diagonal(i, A, L);
	}
	if (j == 0){
		return ch_coluna0(i, A, L);
	}
	if ( !(0 < j && j < i) ){
		return false;
	}
	
	var somatorio = 0;
	for (k = 0; k < j; k++){
		somatorio += L[i][k] * L[j][k];
	}
	
	L[i][j] = ( A[i][j] - somatorio ) / L[j][j];
	
	return L[i][j];
}

function ch_coluna0(i, A, L){
	L[i][0] = A[i][0] / L[0][0];
	return L[i][0];
}

function ch_diagonal(i, A, L){
	if (i == 0){
		L[0][0] = Math.sqrt( A[0][0] );
		return L[0][0];
	}
	
	var somatorio = 0;
	for (k = 0; k < i; k++){
		somatorio += Math.pow( L[i][k] , 2);
	}
	
	L[i][i] = Math.sqrt( A[i][i] - somatorio );
	
	return L[i][i];
}

function matriztTransposta(matriz){
	var ret = [];
	
	for (var i = 0; i < matriz.length; i++){
		ret[i] = [];
		for (var j = 0; j < matriz.length; j++){
			ret[i][j] = 1 * (new Number(matriz[j][i]));
		}
	}
	
	return ret;
}

function isMatrizSimetrica(matriz){
	
	for (i = 0; i < matriz.length; i++){
		for (j = i; j < matriz.length; j++){
			if (matriz[i][j] != matriz[j][i]){
				return false;
			}
		}
	}
	
	return true;
}

function Matriz(size ){
	var ret = [];
	
	for (var i = 0; i < size; i++){
		ret[i] = [];
		for (var j = 0; j < size; j++){
			ret[i][j] = 0;
		}
	}
	
	return ret;
}

/*
 * cholesky.js
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
