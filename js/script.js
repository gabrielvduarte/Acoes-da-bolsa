$(document).ready(function(){
    $("#btnConfirmar").click(function(){
        if($("#simbolo").val().length >= 4){

            console.log("caiu aqui")
            var symbolo = $("#simbolo").val();
            
            var url = "https://api.hgbrasil.com/finance/stock_price?key=55559bee&symbol=" + symbolo;

            $.ajax({
                url : url,
                type : "GET",
                datatype : "JSONP",
                data : {},
                delay : 800,
                success : function(data){
                    console.log(data.results[symbolo.toUpperCase()].name);
                    $('#bqResultados').html("Razao Social: " + data.results[symbolo.toUpperCase()].name + ";<br> Valor de mercado: " + data.results[symbolo.toUpperCase()].price + ";<br> Variação do preço de mercado: " + data.results[symbolo.toUpperCase()].change_percent + "%" + ";<br>Região: " + data.results[symbolo.toUpperCase()].region)
                },
            })
        }
    })
})