function dates() {
    let n = new Date(document.lastModified);

    document.getElementById("modified").innerHTML = n;

    var today = new Date();
    //var year = today.getFullYear(); 
    
    document.getElementById("fullyear").innerHTML = today.getFullYear();
}
window.onload = dates;