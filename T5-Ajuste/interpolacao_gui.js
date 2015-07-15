
function addField(index){
	if (index > 1) return;
	
	var size = $("#size").val() * 1;
	
	var id = "x";
	if (index == 1){
		id = "y";
	}
	
	var html = "<td class='"+id+"_value last'><input type='text' value='"+size+"' id='"+id+"_"+size+"' size='2'/></td>";
	
	$(this).after(html);
}
function addPonto(){
	
	var size = $("#size").val() * 1;
	size++;
	$("#size").val(size);
	
	$(".index").last().after("<th class='index'>x<sub class='indice'>"+size+"</sub></th>");
	
	$("td.last").removeClass("last").each(addField);
	
	
}

function loadPontos(){
	var size = $("#size").val() * 1;
	
	var x = [], y = [];
	for (var i = 0; i <= size; i++){
		x[i] = $("#x_"+i).val() * 1;
		y[i] = $("#y_"+i).val() * 1;
	}
	var total = [x, y];
	
	return total;
}


function carregaMetodo(assinatura){
	
	var nome, metodo_id, html, args, func, arg_load;
	
	//~ prepara o espaco para colocar as entradas
	nome = assinatura[0];
	metodo_id = assinatura[1];
	html = "<div class='entrada' id='"+metodo_id+"'></div>";
	$("#metodos").append(html);
	html = "<b class='nome_metodo'>"+nome+"</b><br />";
	$("#" + metodo_id).append(html);
	
	//~ monta as entradas
	virgula = ", ";
	args = "";
	arg_load ="";
	for (i = 2; i < assinatura.length; i++){
		label = id = assinatura[i];
		html = "<label for='"+metodo_id + id+"'>"+label+"</label>\n<input type='text' value='' id='"+metodo_id + id+"' size='2' /><br />\n";
		
		$("#" + metodo_id).append(html);
		
		arg_load += "var "+id+" = Number($('#"+metodo_id + id+"').val());";
		args += virgula+id;
	}
	
	
	//~ monta o botão e a ação do botão
	html = "<button id='btn_"+metodo_id+"'>"+metodo_id+"</button>";
	$("#" + metodo_id).append(html);
	
	//~ monta a açao do botão
	var func = "/* This was automagicaly created, @see function carregaMetodo(assinatura) */";
	func += "/* carrega a matriz*/";
	func += "var mat = loadPontos();";
	func += "/* monta outros argumentos */"
	func += arg_load;
	func += "/* invoca o metodo */";
	func += "var ret = "+metodo_id+"(mat"+args+");";
	func += "$('#valor').text( '"+nome+" :' );";
	func += "$('#bash').append( ret );";
	func += "$('#valor').append( ret );";
	func += "return ret;";
	
	//~ cria a funcao e atribui ao botão
	//~ $("#code").text(func);
	func = new Function (func);
	$("#btn_"+metodo_id).click(func);
	
}


/*
 * interpolacao_gui.js
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

