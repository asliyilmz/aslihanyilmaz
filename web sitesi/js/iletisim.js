function validateForm() {
    var ad=document.forms['form1'][0].value;
    var ad = frm.ad.value;
    var soyad = frm.soyad.value;
    var yas = frm.yas.value;
    var mail = frm.mail.value;
    var atpos=mail.indexOf("@");
    var dotpos=mail.lastIndexOf(".");

    if ( ad==null || ad=="")
    {
        alert("Ad bölümü boş olamaz!");
        return false;
    }
    if ( soyad==null || soyad=="")
    {
        alert("Soyad bölümü boş olamaz!");
        return false;
    }
    if ( yas==null || yas=="")
    {
        alert("Yaş bölümü boş olamaz!");
        return false;
    }
    if ( mail==null || mail=="")
    {
        alert("Email bölümü boş olamaz!");
        return false;
    }

    if ( atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length )
    {
        alert("Geçerli email adresi girin");
        return false;
    }      
    return true;
} 