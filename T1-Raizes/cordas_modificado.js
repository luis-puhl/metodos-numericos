
var Cordas_modificado_ass = [ "Cordas (Posição Falsa) Modificado", "Cordas_modificado", "inicio", "fim", "erro",];
function Cordas_modificado( inicio, fim, erro, funcao ){
	funcao += "";
	if (funcao == ""){
		return "Função não foi recebida.";
	}
	var k = 0;
	var f = funcao_handdler.evaluate_api;
	$("#bash").append( "Cordas modificado: " );
	
	
	///~ algoritmo
	var a = inicio;
	var b = fim;
	var f_a = f(funcao, a); // C
	var f_b = f(funcao, b); // D
	
	//~ 
	if (f_a*f_b > 0){
		return "Não é possivel encotrar raizes no intervalo.";
	}
	beginIteracao( ["k", "p", "q", "f(p)", "f(q)", "x&#772", "f(x&#772)", "Direção"], funcao );
	//~ 
	var x_ant, y_ant, y, x;
	do{
		//~ 
		makeIteracao ([k, a, b, f_a, f_b, x, y, y*f_a]);
		k++;
		//~ 
		
		x_ant = x;
		x = (a*f_b - b*f_a) / (f_b - f_a);
		y_ant = y;
		y = f(funcao, x);
		if (y * f_a > 0){
			a = x;
			f_a = y;
		} else {
			b = x;
			f_b = y;
		}
		if ( y != undefined && (y * y_ant)>0){
			f_a /= 2;
		} 
	}while ( Math.abs(y) > erro && erroCalc_Cordas_Mod(x, x_ant) > erro );
	
	makeIteracao ([k, a, b, f_a, f_b, x, y, y*f_a]);
	endIteracao();
	
	return x;
}

function erroCalc_Cordas_Mod(x_atual, x_anterior){
	if (x_anterior == undefined){
		return Infinity;
	}
	var dif = Math.abs(x_anterior - x_atual);
	var mx = Math.max(1, Math.abs(x_anterior) );
	return dif / mx;
}


/*
 * cordas.js
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


