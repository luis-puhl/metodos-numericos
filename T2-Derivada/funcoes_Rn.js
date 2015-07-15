
var FUNCOES_RN = {
	"x[1] + x[2] + ... + x[n]" : function (x){
		var ret = 0, aux;
		for (i = 0; i < x.length; i++){
			aux = Number(x[i]);
			if (aux != NaN){
				ret += aux;
			}
		}
		return ret;
	},
	"x[1] * x[2] * ... * x[n]" : function (x){
		var ret, aux;
		ret = Number(x[0]);
		for (i = 1; i < x.length; i++){
			aux = Number(x[i]);
			if (aux != NaN){
				ret *= aux;
			}
		}
		return ret;
	},
	
};

function Dynamic (nomeFuncao, arg, ret){
	this.nomeFuncao = nomeFuncao;
	this.arg = arg;
	this.ret = ret;
}
var funcao_handdler = {
	listar : function(){
		$("#exp_placeholder_funcao").remove();
		
		var str = "";
		for (var i in FUNCOES_RN){
			str += "<li class='exp_draggable'>" + i + "</li>";
		}
		
		$("#exp_lista_funcoes").append(str);
		
		$( ".exp_draggable" ).click(funcao_handdler.marcar);
		
	},
	alvo : "",
	marcar : function (obj){
		var f = this.innerHTML;
		alvo = f;
		$("#funcao_alvo").val(alvo);
	},
	variaveis : [],
	adicionarVariavel : function ( x ){
		var vr = this.variaveis;
		try {
			vr.push(Number(x));
		}
		catch (e) {
			vr = new Array();
			vr.push(Number(x));
		}
		
		this.variaveis = vr;
		
		return this.variaveis;
	},
	REALevaluate : function ( x ){
		/**
		 * seria muito inteligente implementar programção diâmica aqui
		 * para até 4 valores seria suficiente
		 */
		
		var todo = FUNCOES_RN;
		
		for (var i in todo){
			if ( i === funcao_handdler.alvo) {
				return todo[i]( x );
			}
		}
	},
	dinc : new Array(),
	evaluate : function (x){
		//~ var x = this.variaveis;
		var nomeFuncao = funcao_handdler.alvo;
		var dinc = this.dinc;
		
		for (i = 0; i < dinc.length; i++){
			if (dinc[i].nomeFuncao == nomeFuncao &&
					dinc[i].arg == x
			){
				return dinc[i].ret;
			}
		}
		
		var ret = this.REALevaluate(x);
		
		var di = new Dynamic( nomeFuncao, x, ret );
		dinc.push( di );
		
		return ret;
	},
	
};

/*
 * funcoes_Rn.js
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

