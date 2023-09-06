<script>
    var inputu=document.getElementById("inputu")
    var listy=document.getElementById("list")

    function del(event){
        event.target.parentElement.remove()
    }
    
    function additem(){
        var ele=document.createElement("li")
        ele.innerHtml=inputu.value + "<button onclick="del(event)">Delete</button>"
        listy.append(ele)
    }

    
</script>