


var derivada = {
	f_x : "",
	d_dx_x : NaN,
	h : 0,
	e : 0,
	simples : function( x ){
		var h = derivada.h;
		var x1 = funcao_handdler.evaluate(x+h);
		var x2 = funcao_handdler.evaluate(x-h);
		
		d_dx_x = (x1-x2)/(2*h);
		return d_dx_x;
	},
	recursiva : function( ordem, x ){
		/*
		 * Derivada recusiva
		 * Apesar do aparente alto custo, é uma solução óbvia
		 */
		var h = derivada.h;
		if ( ordem > 1 ){
			var x1 = derivada.recursiva( ordem -1, x+h );
			var x2 = derivada.recursiva( ordem -1, x-h );
			
			return (x1-x2)/(2*h);
			
		}
		var x1 = funcao_handdler.evaluate(x+h);
		var x2 = funcao_handdler.evaluate(x-h);
		
		d_dx_x = (x1-x2)/(2*h);
		return d_dx_x;
	},
	iterativa : function( x ){
		var h = derivada.h;
		var e = derivada.e;
		var fx_atual, fx_anterior, erro_calculado;
		
		fx_atual = derivada.simples(x);
		do{
			fx_anterior = fx_atual;
			h = h/2;
			fx_atual = derivada.simples(x);
			
			erro_calculado = derivada.erro(fx_atual, fx_anterior);
		} while ( erro_calculado > e );
		
		return fx_atual;
	},
	erro : function( fx_atual, fx_anterior ){
		
		//~ verifica a diferenca entre a iteracao atual e a anterior
		var diferenca_iteracoes;
		diferenca_iteracoes = fx_atual - fx_anterior;
		
		//~ em caso de valores muito grandes, usa o valor atual para deixar o erro relativo
		var ponderacao = Math.abs(fx_atual);
		if (ponderacao < 1){
			ponderacao = 1;
		}
		
		var erro_atual;
		erro_atual = diferenca_iteracoes / ponderacao;
		erro_atual = Math.abs(erro_atual);
		
		return erro_atual;
	},
	segunda : function( x ){
		var h = derivada.h;
		var x1 = funcao_handdler.evaluate(x+h);
		var x2 = 2 * funcao_handdler.evaluate(x);
		var x3 = funcao_handdler.evaluate(x-h);
		
		d_dx_x = (x1-x2+x3)/( h * h );
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
	simples : function(x, h){
		derivada.h = Number(h);
		return derivada.simples(x);
	},
	segunda : function(x, h){
		derivada.h = Number(h);
		return derivada.segunda(x);
	},
	iterativa : function(x, e, h){
		derivada.e = Number(e);
		derivada.h = Number(h);
		return derivada.iterativa(x);
	},
	recursiva : function(x, ordem, h){
		derivada.h = Number(h);
		return derivada.recursiva(ordem, x);
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

