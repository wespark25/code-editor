var i = false;
function cssFill() {
    document.getElementById("cssInput").value = "h2{color: #FF6F61; text-align: center;}\n"
}

function htmlFill() {
    document.getElementById("htmlInput").value = "<h2>Welcome to my text editor!</h2>\n\n<p>You can test and create your own HTML and CSS in this text editor</p>\n"
}

function htmlAdd() {
    document.getElementById("testBox").innerHTML = document.getElementById("htmlInput").value;
} 

function erase() {
    document.getElementById("htmlInput").value = "";
    document.getElementById("cssInput").value = "";
    document.getElementById("testBox").innerHTML = "";
}

function changeTitle() {
    var title = prompt("Please Enter New Title", "New Title");
    document.title = title;
    document.getElementById("header").innerHTML = title;
}

function togglecss(obj){
    
    var cssText = document.getElementById("cssInput").value;
    
    if(!i){
        i = document.getElementById("styleHead");
        i.innerHTML = cssText;
        obj.setAttribute('class', 'active tooltip');   
    }
        else{
            i.innerHTML = '';
            i = false;
            obj.setAttribute('class', 'tooltip');
        }
//    console.log(cssText);
//    document.getElementByID("testBox").innerHTML = "<style scoped>" + cssText + "</style>" + htmlText;
}