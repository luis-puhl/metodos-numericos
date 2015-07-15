
var Newton_Compacto_ass = ["Newton (Tangentes) Compacto", "Newton_Compacto", 
		"estimativa", "erro", "limite", "grau_compactacao", ];
function Newton_Compacto( estimativa, erro, limite, grau_compactacao, funcao ){
	funcao += "";
	if (funcao == ""){
		return "Função não foi recebida.";
	}
	var k = 0;
	var f = funcao_handdler.evaluate_api;
	$("#bash").append( "Newton Compacto: " );
	beginIteracao( ["k", "x", "f(x)", "f'(x)", "x<sub>k+1</sub>", "erro calculado"], funcao );
	
	///~ algoritmo
	var x_ant, x, h, y, errc, dx;
	x = estimativa;
	h = erro;
	do{
		if (k > limite){
			x += " tempo esgotado";
			break;
		}
		x_ant = x;
		y = f(funcao, x);
		if ( k==0 || k % grau_compactacao == 0){
			dx = (f(funcao, x+h)-f(funcao, x-h));
		}
		x = x - 2*h*y / dx ;
		errc = erroCalc_Newton_comp(x, x_ant, y);
		makeIteracao ([k, x_ant, y, dx, x, errc]);
		k++;
	} while (errc > erro);
	
	endIteracao();
	
	return x;
}

function erroCalc_Newton_comp(x_atual, x_anterior, y){
	if (x_anterior == undefined){
		return Infinity;
	}
	var dif = Math.abs(x_anterior - x_atual);
	var mx = Math.max(1, Math.abs(x_anterior) );
	var ret = Math.min(dif / mx, Math.abs(y));
	return ret;
}

/*
 * newton.js
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


