
var jacobi_ass = ["Jacobi - Richardson", "jacobi", "limite", "erro"];
function jacobi(sistema, limite, erro){
	//~ desmembramento
	var A, b, x, x_ant; // vetoriais
	var k, i, j, sum; // escalares
	
	k = 0;
	//~ carrega as matrizes
	
	x = loadEstimativa();
	b = new Array();
	A = new Array();
	for (i = 0; i < sistema.length; i++){
		aux = new Array();
		for (j = 0; j < sistema.length; j++){
			aux[j] = sistema[i][j];
		}
		b[i] = sistema[i][j]
		A[i] = aux;
	}
	
	
	///~ algoritmo
	jacobi_BeginIteracao(x);
	jacobi_iteracao(x, k);
	do{
		x_ant = vcpy(x);
		for (i = 0; i < x.length; i++){
			
			sum = b[i];
			for (j = 0; j < x.length; j++){
				if (i == j) continue;
				sum -= A[i][j] * x[j];
			}
			
			x[i] = sum / A[i][i];
		}
		k++;
		jacobi_iteracao(x, k);
	} while (!jacobi_isCriterioAtingido(x, x_ant, erro, limite, k));
	jacobi_EndIteracao();
	
	
	return x;
}

function jacobi_isCriterioAtingido(x_atual, x_ant, erro, tempo, k){
	if (k > tempo){
		$('#bash').append( "<br/>Tempo esgotado<br/>" );
		return true;
	}
	
	var soma, norma;
	
	soma = v_soma(x_atual, v_negacao(x_ant));
	soma = NormaInfinita(soma);
	norma = NormaInfinita(x_atual);
	
	soma = soma / norma;
	if (soma < erro){
		return true;
	}
	
	return false;
}
function v_negacao(vet){
	var aux = [];
	for (i = 0; i < vet.length; i++){
		aux.push( 0 - vet[i] );
	}
	return aux;
}
function v_soma(vet1, vet2){
	var aux = [], len;
	len = Math.min(vet1.length, vet2.length);
	
	for (i = 0; i < len; i++){
		aux.push( vet1[i] + vet2[i] );
	}
	return aux;
}
function vcpy(vet){
	var aux = [];
	for (i = 0; i < vet.length; i++){
		aux.push( 1 * vet[i] );
	}
	return aux;
}

function NormaInfinita(vetor){
	var max, i, aux;
	
	i = 0;
	max = Math.abs( vetor[i] );
	i++;
	for (; i < vetor.length; i++){
		aux = Math.abs( vetor[i] );
		max = Math.max(max, aux);
	}
	
	return max;
}

var tableId = 0;
function jacobi_BeginIteracao(x){
	tableId++;
	var html = "<table border=1 id='"+tableId+"'><thead><tr>";
	html += "<th>k</th>";
	for (i = 0; i < x.length; i++){
		html += "<th>x["+i+"]</th>";
	}
	html += "</tr></thead><tbody>";
	
	$("#bash").append(html);
	return html;
}
function jacobi_iteracao(x, k){
	var html =  "<tr><th>"+k+"</th>";
	for (i = 0; i < x.length; i++){
		html += "<td>"+x[i]+"</td>";
	}
	html += "</tr>";
	
	$("#"+tableId).append(html);
	return html;
}
function jacobi_EndIteracao(){
	var html = "</tbody></table>";
	
	$("#bash").append(html);
	return html;
}


/*
 * jacobi.js
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

