
var FUNCOES = {
	
	x : function (x){
		return x;
	},
	
	"x²" : function (x){
		return x*x;
	},
	
	"x^1" : function (x){
		return x;
	},
	"x^2" : function (x){
		return FUNCOES["x^1"](x) * x;
	},
	"x^3" : function (x){
		return FUNCOES["x^2"](x) * x;
	},
	"x^15" : function (x){
		return Math.pow(x, 15);
	},
	"−3x^3+3x^2−0.3" : function (x){
		return (-3) * Math.pow(x, 3) + 3 * x * x - 0.3;
	},
	
	//~ trigonometricas
	"sen(x)" : function(x){
		return Math.sin(x);
	},
	"cos(x)" : function(x){
		return Math.cos(x);
	},
	"tan(x)" : function(x){
		return Math.tan(x);
	},
	//~ arcos
	"asen(x)" : function(x){
		return Math.asin(x);
	},
	"acos(x)" : function(x){
		var ret = Math.acos(x); 
		return ret;
	},
	"atan(x)" : function(x){
		return Math.atan(x);
	},
	
};

var funcao_handdler = {
	funcao : "",
	criaFuncaoDraggable : function (funcao){
		var ret = "<li class='exp_draggable'>" + funcao + "</li>";
		return ret;
	},
	marcar : function(event){
		//~ funcao = obj.target.text;
		var f = this.innerHTML;
		
		funcao_handdler.funcao = f;
		
		$("#funcao_alvo").val(funcao_handdler.funcao);
	},
	listaFuncoes : function (){
		$("#exp_placeholder_funcao").remove();
		
		var str = "";
		for (var i in FUNCOES){
			if (FUNCOES.hasOwnProperty(i)) {
				str += this.criaFuncaoDraggable(i);
			}
		}
		
		$("#exp_lista_funcoes").append(str);
		
		$( ".exp_draggable" ).click(funcao_handdler.marcar);
	},
	
	evaluate : function (x){
		/**
		 * seria muito inteligente implementar programção diâmica aqui
		 * para até 4 valores seria suficiente
		 */
		
		var todo = FUNCOES;
		
		for (var i in todo){
			//~ $("#bash").append( i );
			if ( i === funcao_handdler.funcao) {
				return FUNCOES[i](x);
			}
		}
		
		return false;
	},
	
	evaluate_api : function (funcao, x){
		funcao_handdler.funcao = funcao;
		return funcao_handdler.evaluate(x);
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

