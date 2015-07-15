
function copy(x){
	var ret = new Array();
	for (i = 0; i < x.length; i++){
		ret.push( new Number(x[i]) );
	}
	return ret;
}

var derivada = {
	simples : function( x, indice ){
		var h = Number(derivada.h);
		var d_dx_x;
		
		var x_mais_h = copy(x);
		var x_menos_h = copy(x);
		
		x_mais_h[indice] = Number(x_mais_h[indice]) + h;
		x_menos_h[indice] = Number(x_menos_h[indice]) - h;
		
		var x1 = funcao_handdler.evaluate(x_mais_h);
		var x2 = funcao_handdler.evaluate(x_menos_h);
		
		d_dx_x = (x1-x2)/(2*h);
		return d_dx_x;
	},
	
};

/***
 * Nota: programar sem nenhum framework como agora não é incentivável
 * a menos que voce queira aprender a pensar em como construir um framework.
 * Estou usando 3 camadas para fazer uma coisa simples,
 * mas parando para pensar é exatamente o que os framewoks fazem.
 */

var api_derivada = {
	simples : function( nomeFuncao, definicao, direcao ){
		derivada.h = Number(definicao);
		funcao_handdler.alvo = nomeFuncao;
		var x = funcao_handdler.variaveis;
		
		var ret = derivada.simples(x, direcao);
		return ret;
	},
};
/*
 * funcoes.js
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

