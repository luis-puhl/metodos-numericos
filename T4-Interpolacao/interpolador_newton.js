
var interpoladorNewton_ass = ["Polinômio Interpolador de Newton", "interpoladorNewton", "x_alvo", ];
function interpoladorNewton( pontos, x_alvo ){
	
	var numPontos = pontos[0].length;
	pontos = new tabela(pontos);
	
	return "f("+x_alvo+") = " + Newton(numPontos, pontos, x_alvo);
	
}


///~ momentos desesperados pedem medidas desesperadas
///~ estrutura doada por:
 /* **********************************************************************************************
 *    Mateus Gonçalez Etto     *   Alexandre Salvador Fernandes  *   Giulia de Andrade Cardieri *
 ************************************************************************************************/
function tabela (pontos) {
	if (!pontos){
		this.ponto = [ [/** X */], [/** Y */] ];
		return this;
	}
	this.ponto = pontos;
	return this;
	// ponto[0][qualqueCoisa] SERÁ OS VALORES DE X NA TABELA
	// ponto[1][qualqueCoisa] SERÁ OS VALORES DE Y NA TABELA
}

function Newton(numTabelados, tab, ponto){
	///~ momentos desesperados pedem medidas desesperadas
	///~ funcao doada por:
	/* **********************************************************************************************
	 *    Mateus Gonçalez Etto     *   Alexandre Salvador Fernandes  *   Giulia de Andrade Cardieri *
	 ************************************************************************************************/
	
	var solucao;
	var multiplicador=1;
	var matriz = [];
	for (i = 0; i <=numTabelados; i++){
		aux = [];
		for (j = 0; j <= numTabelados; j++){
			aux[j] = 0;
		}
		matriz[i] = aux;
	}
	
	// A tabela de diferenças divididas ficará armazenada na matriz.
	var i,j;
	
	// Esse laço calcula as colunas, iniciando pela 1(ordem zero) até a numTabelados(ordem n).
	for (j=1; j<=numTabelados; j++) {
		// Esse laço calcula as linhas da tabela. A cada ordem uma linha é diminuida.
		for (i=1; i<=numTabelados-j+1; i++) {
			// a primeira coluna da matriz é são os pontos Y.
			if(j==1){
				matriz[i][1] = tab.ponto[1][i-1];
			} else {
				// as outras colunas serão obtidas através da definição genérica de diferenças divididas.
				matriz[i][j] = (matriz[i+1][j-1] - matriz[i][j-1]) / (tab.ponto[0][i+j-2] - tab.ponto[0][i-1]);
			}
		}
	}
	solucao = matriz[1][1];
	for (i=0; i<numTabelados-1; i++) {
		// O float multiplicador acumula a multiplicação das diferenças (x-x1) até (x-x1)(x-x2)..(x-xn).
		multiplicador = multiplicador*(ponto - tab.ponto[0][i]);
		// será realizada a soma para calcular o polinômio no ponto solicitado.
		solucao += multiplicador*matriz[1][i+2];
	}
	return solucao;
}


/*
 * interpolador_newton.js
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


