function EnableRestore() {
    if (localStorage.getItem("areaRestore") == "true") {
        basic.style.display = "none";
        restore.style.display = "block";
        row1.style.display = "none";
        row2.style.display = "block";
    }
}
function GetDate() {
    document.getElementById("day").value = new Date().getDate();
    document.getElementById("month").value = new Date().getMonth() + 1;
    document.getElementById("year").value = new Date().getFullYear();
}
function NextTransform() {
    gsap.from("#restore", { duration: 0.2, xPercent: 50, opacity: 0 });
    gsap.from("#basic", { duration: 0.2, xPercent: 50, opacity: 0 });
    gsap.from("#target", { duration: 0.2, xPercent: 50, opacity: 0 });
    gsap.from("#achived", { duration: 0.2, xPercent: 50, opacity: 0 });
    gsap.from("#today", { duration: 0.2, xPercent: 50, opacity: 0 });
    gsap.from("#report", { duration: 0.2, xPercent: 50, opacity: 0 });
}
function BackTransform() {
    gsap.from("#restore", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#basic", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#target", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#achived", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#today", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#report", { duration: 0.2, xPercent: -50, opacity: 0 });
}
function Continue() {
    restore.style.display = "none";
    basic.style.display = "block";
    area.style.display = "none";
    row1.style.display = "none";
    row2.style.display = "none";
    today.style.display = "block";
    document.getElementById("areaname").value = localStorage.getItem("areaname");
    document.getElementById("achievedmobile").value = localStorage.getItem("achievedmobile");
    document.getElementById("targetmobile").value = localStorage.getItem("targetmobile");
    document.getElementById("achievedwemix").value = localStorage.getItem("achievedwemix");
    document.getElementById("targetwemix").value = localStorage.getItem("targetwemix");
    document.getElementById("achievedindigo").value = localStorage.getItem("achievedindigo");
    document.getElementById("targetindigo").value = localStorage.getItem("targetindigo");
    document.getElementById("achievedadsl").value = localStorage.getItem("achievedadsl");
    document.getElementById("targetadsl").value = localStorage.getItem("targetadsl");
    document.getElementById("achievedfixed").value = localStorage.getItem("achievedfixed");
    document.getElementById("targetfixed").value = localStorage.getItem("targetfixed");
    document.getElementById("todaymobile").value = "";
    document.getElementById("todaywemix").value = "";
    document.getElementById("todayindigo").value = "";
    document.getElementById("todayadsl").value = "";
    document.getElementById("todayfixed").value = "";
    NextTransform();
}
function NewMonth() {
    restore.style.display = "none";
    basic.style.display = "block";
    document.getElementById("areaname").value = "";
    document.getElementById("achievedmobile").value = "";
    document.getElementById("targetmobile").value = "";
    document.getElementById("achievedwemix").value = "";
    document.getElementById("targetwemix").value = "";
    document.getElementById("achievedindigo").value = "";
    document.getElementById("targetindigo").value = "";
    document.getElementById("achievedadsl").value = "";
    document.getElementById("targetadsl").value = "";
    document.getElementById("achievedfixed").value = "";
    document.getElementById("targetfixed").value = "";
    document.getElementById("todaymobile").value = "";
    document.getElementById("todaywemix").value = "";
    document.getElementById("todayindigo").value = "";
    document.getElementById("todayadsl").value = "";
    document.getElementById("todayfixed").value = "";
    NextTransform();
}
function Next1() {
    Next2();
}
function Back1() {
    if (basic.style.display === "block") {
        basic.style.display = "none";
        restore.style.display = "block";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
}
function Next2() {
    if (basic.style.display === "block") {
        basic.style.display = "none";
        target.style.display = "block";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    NextTransform();
}
function Back2() {
    if (target.style.display === "block") {
        target.style.display = "none";
        basic.style.display = "block";
        area.style.display = "block";
    }
    if (localStorage.getItem("areaRestore") == "true") {
        row1.style.display = "none";
        row2.style.display = "block";
    } else {
        row1.style.display = "block";
        row2.style.display = "none";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
}
function Next3() {
    if (document.getElementById("day").value == 1 && target.style.display === "block") {
        target.style.display = "none";
        today.style.display = "block";
    } else {
        target.style.display = "none";
        achived.style.display = "block";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    NextTransform();
}
function Back3() {
    if (achived.style.display === "block") {
        achived.style.display = "none";
        target.style.display = "block";
    }
    basic.style.display = "none";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
}
function Next4() {
    if (achived.style.display === "block") {
        achived.style.display = "none";
        today.style.display = "block";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    NextTransform();
}
function Back4() {
    if (document.getElementById("day").value == 1 && today.style.display === "block") {
        today.style.display = "none";
        target.style.display = "block";
    } else {
        today.style.display = "none";
        achived.style.display = "block";
    }
    basic.style.display = "none";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
}
function Back5() {
    if (report.style.display === "block") {
        report.style.display = "none";
        today.style.display = "block";
    }
    document.getElementById("salesreport").value = "";
    document.getElementById("achievedmobile").value = localStorage.getItem("undoachievedmobile");
    document.getElementById("achievedwemix").value = localStorage.getItem("undoachievedwemix");
    document.getElementById("achievedindigo").value = localStorage.getItem("undoachievedindigo");
    document.getElementById("achievedadsl").value = localStorage.getItem("undoachievedadsl");
    document.getElementById("achievedfixed").value = localStorage.getItem("undoachievedfixed");
    document.getElementById("todaymobile").value = localStorage.getItem("undotodaymobile");
    document.getElementById("todaywemix").value = localStorage.getItem("undotodaywemix");
    document.getElementById("todayindigo").value = localStorage.getItem("undotodayindigo");
    document.getElementById("todayadsl").value = localStorage.getItem("undotodayadsl");
    document.getElementById("todayfixed").value = localStorage.getItem("undotodayfixed");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
}
function Back6() {
    Back5();
    basic.style.display = "block";
    area.style.display = "none";
}
function GenerateSalesReport() {
    if (today.style.display === "block") {
        today.style.display = "none";
        report.style.display = "block";
    }
    if (basic.style.display === "block") {
        basic.style.display = "none";
        row3.style.display = "none";
        row4.style.display = "block";
    } else {
        row3.style.display = "block";
        row4.style.display = "none";
    }
    var areaname = document.getElementById("areaname").value;
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var date = day + "-" + month + "-" + year;
    var todaymobileInput = document.getElementById("todaymobile").value.split(" ");
    var todaymobile = 0;
    for (i = 0; i < todaymobileInput.length; i++) {
        todaymobile += parseInt(todaymobileInput[i]) || 0;
    }
    var achievedmobile = parseInt(document.getElementById("achievedmobile").value) || 0;
    var utdmobile = todaymobile + achievedmobile || 0;
    var targetmobile = parseInt(document.getElementById("targetmobile").value) || 0;
    var todaywemixInput = document.getElementById("todaywemix").value.split(" ");
    var todaywemix = 0;
    for (i = 0; i < todaywemixInput.length; i++) {
        todaywemix += parseInt(todaywemixInput[i]) || 0;
    }
    var achievedwemix = parseInt(document.getElementById("achievedwemix").value) || 0;
    var utdwemix = todaywemix + achievedwemix || 0;
    var targetwemix = parseInt(document.getElementById("targetwemix").value) || 0;
    var todayindigoInput = document.getElementById("todayindigo").value.split(" ");
    var todayindigo = 0;
    for (i = 0; i < todayindigoInput.length; i++) {
        todayindigo += parseInt(todayindigoInput[i]) || 0;
    }
    var achievedindigo = parseInt(document.getElementById("achievedindigo").value) || 0;
    var utdindigo = todayindigo + achievedindigo || 0;
    var targetindigo = parseInt(document.getElementById("targetindigo").value) || 0;
    var todayadslInput = document.getElementById("todayadsl").value.split(" ");
    var todayadsl = 0;
    for (i = 0; i < todayadslInput.length; i++) {
        todayadsl += parseInt(todayadslInput[i]) || 0;
    }
    var achievedadsl = parseInt(document.getElementById("achievedadsl").value) || 0;
    var utdadsl = todayadsl + achievedadsl || 0;
    var targetadsl = parseInt(document.getElementById("targetadsl").value) || 0;
    var todayfixedInput = document.getElementById("todayfixed").value.split(" ");
    var todayfixed = 0;
    for (i = 0; i < todayfixedInput.length; i++) {
        todayfixed += parseInt(todayfixedInput[i]) || 0;
    }
    var achievedfixed = parseInt(document.getElementById("achievedfixed").value) || 0;
    var utdfixed = todayfixed + achievedfixed || 0;
    var targetfixed = parseInt(document.getElementById("targetfixed").value) || 0;
    var vsMobile = ~~Number(Math.round((utdmobile / targetmobile) * 100)) || 0;
    var vsFixed = ~~Number(Math.round((utdfixed / targetfixed) * 100)) || 0;
    var vsAdsl = ~~Number(Math.round((utdadsl / targetadsl) * 100)) || 0;
    var vsWemix = ~~Number(Math.round((utdwemix / targetwemix) * 100)) || 0;
    var vsIndigo = ~~Number(Math.round((utdindigo / targetindigo) * 100)) || 0;
    document.getElementById("salesreport").value =
        "Date: " +
        date +
        "\n" +
        "Area: " +
        areaname +
        "\n" +
        "-------------------------" +
        "\n" +
        "\n" +
        "Today Sales: " +
        todaymobile +
        "\n" +
        "-------------------------" +
        "\n" +
        "\n" +
        "Today Indigo: " +
        todayindigo +
        "\n" +
        "TGT: " +
        targetindigo +
        " /Ach: " +
        utdindigo +
        " /VS: " +
        vsIndigo +
        "%" +
        "\n" +
        "\n" +
        "Today We Mix: " +
        todaywemix +
        "\n" +
        "TGT: " +
        targetwemix +
        " /Ach: " +
        utdwemix +
        " /VS: " +
        vsWemix +
        "%" +
        "\n" +
        "\n" +
        "Today Fixed: " +
        todayfixed +
        "\n" +
        "TGT: " +
        targetfixed +
        " /Ach: " +
        utdfixed +
        " /VS: " +
        vsFixed +
        "%" +
        "\n" +
        "\n" +
        "Today ADSL: " +
        todayadsl +
        "\n" +
        "TGT: " +
        targetadsl +
        " /Ach: " +
        utdadsl +
        " /VS: " +
        vsAdsl +
        "%" +
        "\n" +
        "-------------------------" +
        "\n" +
        "\n" +
        "Total Activation: " +
        utdmobile +
        "\n" +
        "TGT: " +
        targetmobile +
        "\n" +
        "VS: " +
        vsMobile +
        "%";
    localStorage.setItem("undotodaymobile", document.getElementById("todaymobile").value);
    localStorage.setItem("undotodaywemix", document.getElementById("todaywemix").value);
    localStorage.setItem("undotodayindigo", document.getElementById("todayindigo").value);
    localStorage.setItem("undotodayadsl", document.getElementById("todayadsl").value);
    localStorage.setItem("undotodayfixed", document.getElementById("todayfixed").value);
    localStorage.setItem("undoachievedmobile", document.getElementById("achievedmobile").value);
    localStorage.setItem("undoachievedwemix", document.getElementById("achievedwemix").value);
    localStorage.setItem("undoachievedindigo", document.getElementById("achievedindigo").value);
    localStorage.setItem("undoachievedadsl", document.getElementById("achievedadsl").value);
    localStorage.setItem("undoachievedfixed", document.getElementById("achievedfixed").value);
    document.getElementById("achievedmobile").value = utdmobile;
    document.getElementById("todaymobile").value = "";
    document.getElementById("achievedwemix").value = utdwemix;
    document.getElementById("todaywemix").value = "";
    document.getElementById("achievedindigo").value = utdindigo;
    document.getElementById("todayindigo").value = "";
    document.getElementById("achievedadsl").value = utdadsl;
    document.getElementById("todayadsl").value = "";
    document.getElementById("achievedfixed").value = utdfixed;
    document.getElementById("todayfixed").value = "";
    document.getElementById("save1").disabled = false;
    document.getElementById("save2").disabled = false;
    document.getElementById("copy1").disabled = false;
    document.getElementById("copy2").disabled = false;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    NextTransform();
}
function Copy1() {
    var salesreportValue = document.getElementById("salesreport").value;
    navigator.clipboard.writeText(salesreportValue);
    document.getElementById("copy1").disabled = true;
    document.getElementById("copy2").disabled = true;
}
function Share1() {
    var salesreportValue = document.getElementById("salesreport").value;
    if (navigator.share) {
        navigator.share({
            title: "Sales Report",
            text: salesreportValue,
        });
    } else {
        var message = window.encodeURIComponent(document.getElementById("salesreport").value);
        var link = "https://api.whatsapp.com/send?text=";
        window.open(link + message);
    }
}
function Save1() {
    localStorage.setItem("areaname", document.getElementById("areaname").value);
    localStorage.setItem("achievedmobile", document.getElementById("achievedmobile").value);
    localStorage.setItem("targetmobile", document.getElementById("targetmobile").value);
    localStorage.setItem("achievedwemix", document.getElementById("achievedwemix").value);
    localStorage.setItem("targetwemix", document.getElementById("targetwemix").value);
    localStorage.setItem("achievedindigo", document.getElementById("achievedindigo").value);
    localStorage.setItem("targetindigo", document.getElementById("targetindigo").value);
    localStorage.setItem("achievedadsl", document.getElementById("achievedadsl").value);
    localStorage.setItem("targetadsl", document.getElementById("targetadsl").value);
    localStorage.setItem("achievedfixed", document.getElementById("achievedfixed").value);
    localStorage.setItem("targetfixed", document.getElementById("targetfixed").value);
    document.getElementById("save1").disabled = true;
    document.getElementById("save2").disabled = true;
    localStorage.setItem("areaRestore", "true");
}
function Copy2() {
    Copy1();
}
function Share2() {
    Share1();
}
function Save2() {
    Save1();
}
function Back0() {
    window.open("index.html", "_self");
}
function Print1() {
    doc = window.open("", "_blank");
    doc.document.open();
    doc.document.write("<html lang=en><head><title>Area Report</title><style>body {font-family: monospace; display: flex;} div {margin: 0px auto 0px auto;}</style></head><body onload=window.print();setTimeout(window.close,1000);><div>");
    doc.document.write(document.getElementById("salesreport").value.replace(/`/gi, "").replace(/  /gi, "&nbsp;&nbsp;").replace(/\n/gi, "<br>"));
    doc.document.write("</div></body></html>");
    doc.document.close();
}
