function setSelectionValue(newValue)
{
const dropdown=document.getElementById("kategori");
const value=dropdown.value;


if(value=="kutle"){

    document.getElementById("kutle").style.display="block";
    document.getElementById("uzunluk").style.display="none";
    document.getElementById("sicaklik").style.display="none";
    document.getElementById("hacim").style.display="none";
   
}

else if(value=="uzunluk"){
    document.getElementById("kutle").style.display="none";
    document.getElementById("uzunluk").style.display="block";
    document.getElementById("sicaklik").style.display="none";
    document.getElementById("hacim").style.display="none";

}

else if(value=="sicaklik"){
    document.getElementById("kutle").style.display="none";
    document.getElementById("uzunluk").style.display="none";
    document.getElementById("sicaklik").style.display="block";
    document.getElementById("hacim").style.display="none";

}

else if(value=="hacim"){
    document.getElementById("kutle").style.display="none";
    document.getElementById("uzunluk").style.display="none";
    document.getElementById("sicaklik").style.display="none";
    document.getElementById("hacim").style.display="block";

}
}

