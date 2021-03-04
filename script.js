var size=10;
getList();
$("#list").on("click","a",function(){
    var title=$(this).attr("title");
    var authors=$(this).attr("authors");
    var contents=$(this).attr("contents");
    var price=$(this).attr("price");
    var image=$(this).find("img").attr("src");
    $("#image").attr("src", image);
    $("#title").html(title);
    $("#authors").html(authors + "("+price+")");            
    $("#contents").html(contents);            
});
$("#btnTop").on("click", function(){
    $.mobile.silentScroll();
});
$("#btnMore").on("click", function(){
    size+=5; getList();
});
$("#txtQuery").on("keydown", function(e){
    if(e.keyCode==13){
        size=10; getList();
    }
});
function getList(){
    var query=$("#txtQuery").val();
    $.ajax({
        type:"get",
        url:url,
        dataType:"json",
        data:{"query":query, "size":size},
        headers:{"Authorization":"KakaoAK 44d1b3004b74505984ae8c166eea87e1"},
        success:function(data){
            var temp=Handlebars.compile($("#temp").html());
            $("#list").html(temp(data)).listview("refresh");
        }
    });
}