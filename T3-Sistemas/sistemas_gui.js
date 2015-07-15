
function adicionaColuna(coluna){
	var html;
	///~ adiciona uma coluna no final, com id ='coluna'
	$(".values.last").each( function(linha, Element){
		html = "<td class='values last'><input type='text' value='0' id='a_"+linha+"_"+coluna+"' size='2'/></td>";
		$(this).removeClass("last").after(html);
		} );
}
function adicionaLinha(linha, colunas){
	///~ adiciona uma coluna no final, com id ='linha'
	
	//~ pela a last <tr>
	var last_tr = $(".lines.last").removeClass("last");
	//~ adiciona uma nova <tr>
	last_tr.after("<tr class='lines last'> </tr>");
	last_tr = $(".lines.last");
	
	for (var i = 0; i < colunas; i++){
		html = "<td class='values'><input type='text' value='"+i+"' id='a_"+linha+"_"+i+"' size='2'/></td>";
		last_tr.append(html);
	}
	///~ adiciona a ultima coluna
	html = "<td class='values last'><input type='text' value='"+i+"' id='a_"+linha+"_"+i+"' size='2'/></td>";
	
	///~ adiciona a coluna b
	html += "<td><input type='text' value='1' id='b_"+linha+"' size='2' /></td>";
	last_tr.append(html);
}


function aumentaMatiz(){
	var coluna = Number($("#size_x").val());
	//~ var linha = Number($("#size_y").val()) ;
	var html;
	
	///~ var target = $("#a_"+x+"_"+y);
	//~ coluna++;
	//~ linha++;
	
	///~ adiciona mais um cabeçalho
	html = "<th class='index'>x["+coluna+"]</th>";
	$(".index").last().after(html);
	
	///~ adiciona mais um campo nas linhas
	adicionaColuna( coluna );
	
	///~ adiciona a ultima linha
	try {
		adicionaLinha( coluna, coluna );
	} catch (e) {
		$("#bash").append(e);
	}
	
	adicionaPontoEstimativa( coluna );
	
	//~ salva o tamanho
	$("#size_x").val(coluna+1);
	$("#size_y").val(coluna+1);
}
function adicionaPontoEstimativa( id ){
	
	//~ var espaco = Number($("#size_x").val()) - 1;
	//~ espaco++;
	var chil = "<input class='zero_x' type='text' value='0' id='x_zero_" + id + "' size='2'/>";
	$("#ponto").append(chil);
	
}

function carregaMatriz(){
	var colunas = Number($("#size_x").val()) ;
	var linhas = Number($("#size_y").val()) ;
	
	var arr, total;
	total = new Array();
	for (var i = 0; i < linhas; i++){
		//~ para cada linha
		
		arr = new Array();
		for (var j = 0; j < colunas; j++){
			//~ carrega cada coluna
			var x = Number($("#a_"+i+"_"+j).val()) - 0;
			arr.push( x );
		}
		//~ carrega o b
		x = Number($("#b_"+i).val()) - 0;
		arr.push( x );
		
		total.push(arr);
	}
	
	return total;
}
function loadEstimativa(){
	var colunas = Number($("#size_x").val()) ;
	
	var total, x;
	total = new Array();
	for (var i = 0; i < colunas; i++){
		x = $("#x_zero_"+i).val();
		x = Number(x) - 0;
		total.push( x );
		
	}
	
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
	func += "var mat = carregaMatriz();";
	func += "/* monta outros argumentos */"
	func += arg_load;
	func += "/* invoca o metodo */";
	func += "var ret = "+metodo_id+"(mat"+args+");";
	func += "$('#valor').text( '"+nome+" :' );";
	func += "$('#bash').append( matrizParaTable( ret ));";
	func += "$('#valor').append( matrizParaTable( ret ));";
	func += "return ret;";
	
	//~ cria a funcao e atribui ao botão
	//~ $("#code").text(func);
	func = new Function (func);
	$("#btn_"+metodo_id).click(func);
	
}
function proto(){
	/* carrega a matriz*/
	var mat = carregaMatriz();
	
	/* monta outros argumentos */
	//~ args += virgula + "funcao_handdler.funcao";
	//~ func += "var val = "+metodo_id+"("+args+");";
	//~ func += "if (val !== false){ $('#valor').text(val); } else { $('#valor').append( ' false' ); }";
	/* invoca o metodo */
	var ret = retroSubstituicao(mat
		//~ , args
	);
	
	$("#valor").append( matrizParaTable( ret ));
	
	return ret;
}


function matrizParaTable( matriz ){
	var html = "<table border=1><thead><tr>";
	var i, j, colunas, linhas, aux;
	
	//~ verifica se é matriz ou vetor
	linhas = matriz.length;
	if (linhas == undefined) return matriz;
	aux = 1;
	try{
		//~ falha se é vetor
		aux = matriz[0].length;
	} catch (e){
		colunas = 1;
	}
	if ( (1 * aux) > 0){
		colunas = Number(aux);
		aux = true;
	} else {
		colunas = 1;
		aux = false;
	}
	
	//~ monta o cabeçalho
	html += "<th></th>";
	for (i = 0; i < colunas-1; i++){
		html += "<th>"+i+"</th>";
	}
	if (colunas > linhas){
		html += "<th>B</th>";
	} else {
		html += "<th>"+i+"</th>";
	}
	
	html += "</tr></thead><tbody>";
	
	for (i = 0; i < linhas; i++){
		html += "<tr><th>"+i+"</th>";
		for (j = 0; j < colunas; j++){
			if (aux){
				html += "<td>"+matriz[i][j]+"</td>";
			} else{
				html += "<td>"+matriz[i]+"</td>";
			}
		}
		html += "</tr>";
	}
	
	html += "</tbody></table>";
	
	return html;
}

function toHTML( M ){
	return $("#bash").append( matrizParaTable( M ));
}


/*
 * sistemas_gui.js
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


