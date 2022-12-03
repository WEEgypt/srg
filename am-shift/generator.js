function GetDate() {
    document.getElementById("day").value = new Date().getDate();
    document.getElementById("month").value = new Date().getMonth() + 1;
    document.getElementById("year").value = new Date().getFullYear();
}
function NextTransform() {
    gsap.from("#report", { duration: 0.2, xPercent: 50, opacity: 0 });
}
function BackTransform() {
    gsap.from("#basic", { duration: 0.2, xPercent: -50, opacity: 0 });
}
function Generate() {
    if (basic.style.display === "block") {
        basic.style.display = "none";
        report.style.display = "block";
    }
    var storename = document.getElementById("storename").value;
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var date = day + "-" + month + "-" + year;
    var paygInput = document.getElementById("payg").value.split(" ");
    var payg = 0;
    for (i = 0; i < paygInput.length; i++) {
        payg += parseInt(paygInput[i]) || 0;
    }
    var dataInput = document.getElementById("data").value.split(" ");
    var data = 0;
    for (i = 0; i < dataInput.length; i++) {
        data += parseInt(dataInput[i]) || 0;
    }
    var kixInput = document.getElementById("kix").value.split(" ");
    var kix = 0;
    for (i = 0; i < kixInput.length; i++) {
        kix += parseInt(kixInput[i]) || 0;
    }
    var tazInput = document.getElementById("taz").value.split(" ");
    var taz = 0;
    for (i = 0; i < tazInput.length; i++) {
        taz += parseInt(tazInput[i]) || 0;
    }
    var ahlaweyaInput = document.getElementById("ahlaweya").value.split(" ");
    var ahlaweya = 0;
    for (i = 0; i < ahlaweyaInput.length; i++) {
        ahlaweya += parseInt(ahlaweyaInput[i]) || 0;
    }
    var weclubInput = document.getElementById("weclub").value.split(" ");
    var weclub = 0;
    for (i = 0; i < weclubInput.length; i++) {
        weclub += parseInt(weclubInput[i]) || 0;
    }
    var wemixInput = document.getElementById("wemix").value.split(" ");
    var wemix = 0;
    for (i = 0; i < wemixInput.length; i++) {
        wemix += parseInt(wemixInput[i]) || 0;
    }
    var indigoInput = document.getElementById("indigo").value.split(" ");
    var indigo = 0;
    for (i = 0; i < indigoInput.length; i++) {
        indigo += parseInt(indigoInput[i]) || 0;
    }
    var tkafolInput = document.getElementById("tkafol").value.split(" ");
    var tkafol = 0;
    for (i = 0; i < tkafolInput.length; i++) {
        tkafol += parseInt(tkafolInput[i]) || 0;
    }
    var adslInput = document.getElementById("adsl").value.split(" ");
    var adsl = 0;
    for (i = 0; i < adslInput.length; i++) {
        adsl += parseInt(adslInput[i]) || 0;
    }
    var fixedInput = document.getElementById("fixed").value.split(" ");
    var fixed = 0;
    for (i = 0; i < fixedInput.length; i++) {
        fixed += parseInt(fixedInput[i]) || 0;
    }
    var mifiInput = document.getElementById("mifi").value.split(" ");
    var mifi = 0;
    for (i = 0; i < mifiInput.length; i++) {
        mifi += parseInt(mifiInput[i]) || 0;
    }
    var items = payg + data + kix + taz + ahlaweya + weclub + wemix + indigo;
    var itemsReport = "\n" + "Items: " + items;
    var indigoReport = "\n" + "Indigo: " + indigo;
    if (wemix == "0") {
        var wemixReport = "";
    } else {
        var wemixReport = "\n" + "We Mix: " + wemix;
    }
    if (tkafol == "0") {
        var tkafolReport = "";
    } else {
        var tkafolReport = "\n" + "Tkafol: " + tkafol;
    }
    if (adsl == "0") {
        var adslReport = "";
    } else {
        var adslReport = "\n" + "ADSL: " + adsl;
    }
    if (fixed == "0") {
        var fixedReport = "";
    } else {
        var fixedReport = "\n" + "Fixed: " + fixed;
    }
    if (mifi == "0") {
        var mifiReport = "";
    } else {
        var mifiReport = "\n" + "MIFI: " + mifi;
    }
    document.getElementById("salesreport").value = storename + "\n" + date + "\n" + "AM-Shift" + "\n" + "------------------------- " + itemsReport + indigoReport + wemixReport + tkafolReport + adslReport + fixedReport + mifiReport;
    document.getElementById("copy").disabled = false;
    NextTransform();
}
function BackToBasic() {
    if (report.style.display === "block") {
        report.style.display = "none";
        basic.style.display = "block";
    }
    BackTransform();
}
function Copy() {
    var salesreport = document.getElementById("salesreport");
    navigator.clipboard.writeText(salesreport.value);
    document.getElementById("copy").disabled = true;
}
function Share() {
    var message = window.encodeURIComponent(document.getElementById("salesreport").value);
    var link = "whatsapp://send?text=";
    window.open(link + message);
}
function Thanks() {
    if (thanks.style.display === "none") {
        thanks.style.display = "block";
        document.getElementById("more").innerHTML = "˄";
    } else {
        thanks.style.display = "none";
        document.getElementById("more").innerHTML = "˅";
    }
}
