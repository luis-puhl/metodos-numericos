function isTriangularSuperior(sistema){
	
	for (var i = 0; i < sistema.length; i++){
		for (var j = 0; j < sistema.length; j++){
			if (i < j){
				continue;
			}
			if (i === j && sistema[i][j] === 0){
				return "Diagonal contem zero";
			}
			if (i > j && sistema[i][j] !== 0){
				return false;
			}
		}
		
	}
	
	return true;
}
function isTriangularInferior(sistema){
	
	for (var i = 0; i < sistema.length; i++){
		for (var j = 0; j < sistema.length; j++){
			if (i > j){
				continue;
			}
			if (i === j && sistema[i][j] == 0){
				return "Diagonal contem zero";
			}
			if (i < j && sistema[i][j] !== 0){
				return false;
			}
		}
		
	}
	
	return true;
}

function retroSubstituicaoInferior(sistema){
	if (isTriangularInferior(sistema) !== true){
		return false;
	}
	
	var n = sistema.length -1;
	var x = new Array();
	
	x[0] = sistema[0][n+1] / sistema[0][0];
	
	for (var i = 1; i <= n ; i++){
		var somatorio = 0;
		for (var j = 0; j < i; j++){
			somatorio += sistema[i][j] * x[j];
		}
		x[i] = ( sistema[i][n+1] - somatorio ) / sistema[i][i];
	}
	
	return x;
}

var retroSubstituicao_ass = ["Retro Substituição", "retroSubstituicao",];
function retroSubstituicao(sistema){
	$('#bash').append( "retro"+matrizParaTable( sistema ));
	if (isTriangularSuperior(sistema) !== true){
		return retroSubstituicaoInferior(sistema);
	}
	if (isTriangularInferior(sistema)){
		var x = new Array();
		for (i = 0; i < sistema.length; i++){
			x[i] = sistema[i][i];
		}
	}
	
	var n = sistema.length -1;
	var x = new Array();
	
	x[n] = sistema[n][n+1] / sistema[n][n];
	
	for (var i = n-1; i >= 0 ; i--){
		var somatorio = 0;
		for (var j = i+1; j <= n; j++){
			somatorio += sistema[i][j] * x[j];
		}
		x[i] = ( sistema[i][n+1] - somatorio ) / sistema[i][i];
	}
	
	return x;
}

/*
 * retro_substituicao.js
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


