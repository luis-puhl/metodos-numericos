
var Bisseccao_ass = [ "Bissecção", "Bisseccao", "inicio", "fim", "erro",];
function Bisseccao( inicio, fim, erro, funcao ){
	funcao += "";
	if (funcao == ""){
		return "Função não foi recebida.";
	}
	var f = funcao_handdler.evaluate_api;
	$("#bash").append( "Bissecção: " );
	
	
	///~ algoritmo
	var p = inicio;
	var q = fim;
	
	var dp = q - p;
	var f_p = f(funcao, p);
	var f_q = f(funcao, q);
	
	///~ checagem, não faz parte do algoritmo
	if (f_p *f_q > 0){
		return "Não há raiz no intervalo";
	}
	beginIteracao( ["k", "p", "q", "x&#772", "f(p)", "f(q)", "f(x&#772)", "Direção"], funcao );
	///~ algoritmo
	
	var k = Math.round( ( Math.log(dp) - Math.log(erro) ) / Math.log(2) );
	
	for (var i = 0; i < k + 1; i++){
		var iteracao = [i, p, q, ];
		
		dp = dp/2;
		var x_med = p + dp;
		var f_x = f(funcao, x_med);
		
		iteracao.push(x_med, f_p, f_q, f_x, f_x * f_p);
		
		if ( !(f_x * f_p < 0) ){
			p = x_med;
			f_p = f_x;
		}
		makeIteracao(iteracao);
	}
	
	endIteracao();
	return x_med;
}



/*
 * bisseccao.js
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


