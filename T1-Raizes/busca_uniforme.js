
var BU_simples_ass = [ "Busca Uniforme Simples", "BU_simples", "inicio", "fim", "passo", ];
function BU_simples( inicio, fim, passo, funcao ){
	var k = 0;
	var p = inicio;
	var q = p + passo;
	var f = funcao_handdler.evaluate_api;
	beginIteracao( ["k", "p", "q", "f(p)", "f(q)", "direção"], funcao );
	
	var f_p = f(funcao, p);
	var f_q = f(funcao, q);
	var dire = f_p * f_q;
	while ( dire > 0  && p < fim){
		makeIteracao([k, p, q, f_p, f_q, dire]);
		k++;
		p = q;
		/**
		 * @BUG
		 * Caso curioso:
		 * JavaScript é a unica linguagem em que -0.8 + 0.1 = -0.7000000000000001
		 * por isso a instrução abaixo não funciona
		 * q = p + passo;
		 */
		//~ q = p + passo;
		/**
		 * Caso curioso 2:
		 * Para resolver o bug acima, passei a usar uma expressão absoluta, porém
		 * -0.5 + 6 * 0.1 = -0.3999999999999999
		 * Não tenho mais idéias de como resolver
		 */
		q = inicio + k * passo;
		
		f_p = f(funcao, p);
		f_q = f(funcao, q);
		dire = f_p * f_q;
	}
	makeIteracao([k, p, q, f_p, f_q, dire]);
	endIteracao();
	if (p >= fim){
		return false;
	}
	
	return new Array(p, q);
}

var BuscaUniforme_ass = [ "Busca Uniforme", "BuscaUniforme", "inicio", "fim", "passo", "erro",];
function BuscaUniforme( inicio, fim, passo, erro, funcao ){
	$("#bash").append( "Busca Uniforme: " );
	var intervalo;
	//~ passo
	intervalo = BU_simples(inicio, fim, passo, funcao);
	
	//~ refino
	if (intervalo == false){
		return intervalo;
	}
	$("#bash").append( "refino de " );
	var refinado = BU_simples(intervalo[0], intervalo[1], erro, funcao);
	
	if (refinado == false){
		return intervalo;
	}
	
	//~ retorna o ponto mediano
	var ret = (refinado[0] + refinado[1]) / 2;
	
	return ret;
}

/*
 * busca_uniforme.js
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
