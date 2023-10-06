function EnableRestore() {
    if (localStorage.getItem("areaRestore") == "true") {
        basic.style.display = "none";
        restore.style.display = "block";
        row__1.style.display = "none";
        row__2.style.display = "block";
        sessionStorage.removeItem("areas");
        sessionStorage.removeItem("newarea");
    } else {
        sessionStorage.setItem("areas", "1");
        localStorage.setItem("currentArea", "1");
    }
    if (localStorage.getItem("areas") > "1") {
        multi.style.display = "block";
        restore.style.display = "none";
        let x = localStorage.getItem("areas");
        for (i = 0; i < x; i++) {
            value = parseInt([i]) + 1;
            document.getElementById("areas").options.add(new Option(localStorage.getItem("areaname.area." + value), value));
        }
        document.getElementById("areas").options.add(new Option("Add Another Area", "newarea"));
    }
}
function GetDate() {
    document.getElementById("day").value = new Date().getDate();
    document.getElementById("month").value = new Date().getMonth() + 1;
    document.getElementById("year").value = new Date().getFullYear();
}
function NextTransform() {
    gsap.from("#multi", { duration: 0.2, xPercent: 50, opacity: 0 });
    gsap.from("#restore", { duration: 0.2, xPercent: 50, opacity: 0 });
    gsap.from("#basic", { duration: 0.2, xPercent: 50, opacity: 0 });
    gsap.from("#target", { duration: 0.2, xPercent: 50, opacity: 0 });
    gsap.from("#achieved", { duration: 0.2, xPercent: 50, opacity: 0 });
    gsap.from("#today", { duration: 0.2, xPercent: 50, opacity: 0 });
    gsap.from("#report", { duration: 0.2, xPercent: 50, opacity: 0 });
}
function BackTransform() {
    gsap.from("#multi", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#restore", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#basic", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#target", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#achieved", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#today", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#report", { duration: 0.2, xPercent: -50, opacity: 0 });
}
function Next__1() {
    if (document.getElementById("areas").value == "newarea") {
        multi.style.display = "none";
        NewArea();
    } else {
        multi.style.display = "none";
        restore.style.display = "block";
        newarea.style.display = "none";
        NextTransform();
    }
}
function Next__2() {
    Next__3();
}
function Next__3() {
    if (basic.style.display === "block") {
        basic.style.display = "none";
        target.style.display = "block";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    NextTransform();
}
function Next__4() {
    if (document.getElementById("day").value == 1 && target.style.display === "block") {
        target.style.display = "none";
        today.style.display = "block";
    } else {
        target.style.display = "none";
        achieved.style.display = "block";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    NextTransform();
}
function Next__5() {
    if (achieved.style.display === "block") {
        achieved.style.display = "none";
        today.style.display = "block";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    NextTransform();
}
function Back__1() {
    window.open("index.html", "_self");
}
function Back__2() {
    if (localStorage.getItem("areas") > "1") {
        document.getElementById("areas").innerHTML = "";
        multi.style.display = "block";
        restore.style.display = "none";
        let x = localStorage.getItem("areas");
        for (i = 0; i < x; i++) {
            value = parseInt([i]) + 1;
            document.getElementById("areas").options.add(new Option(localStorage.getItem("areaname.area." + value), value));
        }
        document.getElementById("areas").options.add(new Option("Add Another Area", "newarea"));
        BackTransform();
    } else {
        Back__1();
    }
}
function Back__3() {
    if (basic.style.display === "block" && localStorage.getItem("areas") > "1" && sessionStorage.getItem("newarea") == "true") {
        basic.style.display = "none";
        multi.style.display = "block";
        document.getElementById("areas").innerHTML = "";
        let x = localStorage.getItem("areas");
        for (i = 0; i < x; i++) {
            value = parseInt([i]) + 1;
            document.getElementById("areas").options.add(new Option(localStorage.getItem("areaname.area." + value), value));
        }
        document.getElementById("areas").options.add(new Option("Add Another Area", "newarea"));
    } else if (basic.style.display === "block") {
        basic.style.display = "none";
        restore.style.display = "block";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
    sessionStorage.removeItem("areas");
    sessionStorage.removeItem("newarea");
}
function Back__4() {
    if (target.style.display === "block") {
        target.style.display = "none";
        basic.style.display = "block";
        area.style.display = "block";
    }
    if (localStorage.getItem("areaRestore") == "true") {
        row__1.style.display = "none";
        row__2.style.display = "block";
    } else {
        row__1.style.display = "block";
        row__2.style.display = "none";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
}
function Back__5() {
    if (achieved.style.display === "block") {
        achieved.style.display = "none";
        target.style.display = "block";
    }
    basic.style.display = "none";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
}
function Back__6() {
    if (document.getElementById("day").value == 1 && today.style.display === "block") {
        today.style.display = "none";
        target.style.display = "block";
    } else {
        today.style.display = "none";
        achieved.style.display = "block";
    }
    basic.style.display = "none";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
}
function Back__7() {
    if (report.style.display === "block") {
        report.style.display = "none";
        today.style.display = "block";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
}
function Back__8() {
    Back__7();
    basic.style.display = "block";
    area.style.display = "none";
}
function Continue() {
    let x = document.getElementById("areas").value || 1;
    localStorage.setItem("currentArea", x);
    restore.style.display = "none";
    basic.style.display = "block";
    area.style.display = "none";
    row__1.style.display = "none";
    row__2.style.display = "none";
    today.style.display = "block";
    document.getElementById("areaname").value = localStorage.getItem("areaname.area." + x) || localStorage.getItem("areaname");
    document.getElementById("achievedmobile").value = localStorage.getItem("achievedmobile.area." + x) || localStorage.getItem("achievedmobile");
    document.getElementById("targetmobile").value = localStorage.getItem("targetmobile.area." + x) || localStorage.getItem("targetmobile");
    document.getElementById("achievedwemix").value = localStorage.getItem("achievedwemix.area." + x) || localStorage.getItem("achievedwemix");
    document.getElementById("targetwemix").value = localStorage.getItem("targetwemix.area." + x) || localStorage.getItem("targetwemix");
    document.getElementById("achievedwegold").value = localStorage.getItem("achievedwegold.area." + x) || localStorage.getItem("achievedwegold");
    document.getElementById("achievedindigo").value = localStorage.getItem("achievedindigo.area." + x) || localStorage.getItem("achievedindigo");
    document.getElementById("targetpostpaid").value = localStorage.getItem("targetpostpaid.area." + x) || localStorage.getItem("targetpostpaid");
    document.getElementById("achievedadsl").value = localStorage.getItem("achievedadsl.area." + x) || localStorage.getItem("achievedadsl");
    document.getElementById("targetadsl").value = localStorage.getItem("targetadsl.area." + x) || localStorage.getItem("targetadsl");
    document.getElementById("achievedfixed").value = localStorage.getItem("achievedfixed.area." + x) || localStorage.getItem("achievedfixed");
    document.getElementById("targetfixed").value = localStorage.getItem("targetfixed.area." + x) || localStorage.getItem("targetfixed");
    document.getElementById("todaymobile").value = "";
    document.getElementById("todaywemix").value = "";
    document.getElementById("todaywegold").value = "";
    document.getElementById("todayindigo").value = "";
    document.getElementById("todayadsl").value = "";
    document.getElementById("todayfixed").value = "";
    NextTransform();
    sessionStorage.setItem("areas", localStorage.getItem("areas") || 1);
}
function NewMonth() {
    let x = document.getElementById("areas").value || 1;
    localStorage.setItem("currentArea", x);
    restore.style.display = "none";
    basic.style.display = "block";
    document.getElementById("areaname").value = localStorage.getItem("areaname.area." + x);
    document.getElementById("achievedmobile").value = "";
    document.getElementById("targetmobile").value = "";
    document.getElementById("achievedwemix").value = "";
    document.getElementById("targetwemix").value = "";
    document.getElementById("achievedwegold").value = "";
    document.getElementById("achievedindigo").value = "";
    document.getElementById("targetpostpaid").value = "";
    document.getElementById("achievedadsl").value = "";
    document.getElementById("targetadsl").value = "";
    document.getElementById("achievedfixed").value = "";
    document.getElementById("targetfixed").value = "";
    document.getElementById("todaymobile").value = "";
    document.getElementById("todaywemix").value = "";
    document.getElementById("todaywegold").value = "";
    document.getElementById("todayindigo").value = "";
    document.getElementById("todayadsl").value = "";
    document.getElementById("todayfixed").value = "";
    NextTransform();
    sessionStorage.setItem("areas", localStorage.getItem("areas") || 1);
}
function NewArea() {
    sessionStorage.setItem("newarea", "true");
    areas = parseInt(localStorage.getItem("areas")) || 1;
    x = areas + 1;
    sessionStorage.setItem("areas", x);
    localStorage.setItem("currentArea", x);
    restore.style.display = "none";
    basic.style.display = "block";
    document.getElementById("areaname").value = "";
    document.getElementById("achievedmobile").value = "";
    document.getElementById("targetmobile").value = "";
    document.getElementById("achievedwemix").value = "";
    document.getElementById("targetwemix").value = "";
    document.getElementById("achievedwegold").value = "";
    document.getElementById("achievedindigo").value = "";
    document.getElementById("targetpostpaid").value = "";
    document.getElementById("achievedadsl").value = "";
    document.getElementById("targetadsl").value = "";
    document.getElementById("achievedfixed").value = "";
    document.getElementById("targetfixed").value = "";
    document.getElementById("todaymobile").value = "";
    document.getElementById("todaywemix").value = "";
    document.getElementById("todaywegold").value = "";
    document.getElementById("todayindigo").value = "";
    document.getElementById("todayadsl").value = "";
    document.getElementById("todayfixed").value = "";
    NextTransform();
}
function GenerateSalesReport() {
    if (today.style.display === "block") {
        today.style.display = "none";
        report.style.display = "block";
    }
    if (basic.style.display === "block") {
        basic.style.display = "none";
        row__3.style.display = "none";
        row__4.style.display = "block";
    } else {
        row__3.style.display = "block";
        row__4.style.display = "none";
    }
    areaname = document.getElementById("areaname").value;
    day = parseInt(document.getElementById("day").value);
    month = parseInt(document.getElementById("month").value);
    year = parseInt(document.getElementById("year").value);
    date = day + "-" + month + "-" + year;
    todaymobileInput = document.getElementById("todaymobile").value.split(" ");
    todaymobile = 0;
    for (i = 0; i < todaymobileInput.length; i++) {
        todaymobile += parseInt(todaymobileInput[i]) || 0;
    }
    achievedmobile = parseInt(document.getElementById("achievedmobile").value) || 0;
    utdmobile = todaymobile + achievedmobile || 0;
    targetmobile = parseInt(document.getElementById("targetmobile").value) || 0;
    todaywemixInput = document.getElementById("todaywemix").value.split(" ");
    todaywemix = 0;
    for (i = 0; i < todaywemixInput.length; i++) {
        todaywemix += parseInt(todaywemixInput[i]) || 0;
    }
    achievedwemix = parseInt(document.getElementById("achievedwemix").value) || 0;
    utdwemix = todaywemix + achievedwemix || 0;
    targetwemix = parseInt(document.getElementById("targetwemix").value) || 0;
    todaywegoldInput = document.getElementById("todaywegold").value.split(" ");
    todaywegold = 0;
    for (i = 0; i < todaywegoldInput.length; i++) {
        todaywegold += parseInt(todaywegoldInput[i]) || 0;
    }
    achievedwegold = parseInt(document.getElementById("achievedwegold").value) || 0;
    utdwegold = todaywegold + achievedwegold || 0;
    todayindigoInput = document.getElementById("todayindigo").value.split(" ");
    todayindigo = 0;
    for (i = 0; i < todayindigoInput.length; i++) {
        todayindigo += parseInt(todayindigoInput[i]) || 0;
    }
    achievedindigo = parseInt(document.getElementById("achievedindigo").value) || 0;
    utdindigo = todayindigo + achievedindigo || 0;
    utdpostpaid = utdwegold + utdindigo || 0;
    targetpostpaid = parseInt(document.getElementById("targetpostpaid").value) || 0;
    todayadslInput = document.getElementById("todayadsl").value.split(" ");
    todayadsl = 0;
    for (i = 0; i < todayadslInput.length; i++) {
        todayadsl += parseInt(todayadslInput[i]) || 0;
    }
    achievedadsl = parseInt(document.getElementById("achievedadsl").value) || 0;
    utdadsl = todayadsl + achievedadsl || 0;
    targetadsl = parseInt(document.getElementById("targetadsl").value) || 0;
    todayfixedInput = document.getElementById("todayfixed").value.split(" ");
    todayfixed = 0;
    for (i = 0; i < todayfixedInput.length; i++) {
        todayfixed += parseInt(todayfixedInput[i]) || 0;
    }
    achievedfixed = parseInt(document.getElementById("achievedfixed").value) || 0;
    utdfixed = todayfixed + achievedfixed || 0;
    targetfixed = parseInt(document.getElementById("targetfixed").value) || 0;
    vsMobile = ~~Number(Math.round((utdmobile / targetmobile) * 100)) || 0;
    vsFixed = ~~Number(Math.round((utdfixed / targetfixed) * 100)) || 0;
    vsAdsl = ~~Number(Math.round((utdadsl / targetadsl) * 100)) || 0;
    vsWemix = ~~Number(Math.round((utdwemix / targetwemix) * 100)) || 0;
    vsPostpaid = ~~Number(Math.round((utdpostpaid / targetpostpaid) * 100)) || 0;
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
        "Today We Gold: " +
        todaywegold +
        "\n" +
        ">> Ach: " +
        utdwegold +
        "\n" +
        "Today Indigo: " +
        todayindigo +
        "\n" +
        ">> Ach: " +
        utdindigo +
        "\n" +
        "TGT: " +
        targetpostpaid +
        " /Ach: " +
        utdpostpaid +
        " /VS: " +
        vsPostpaid +
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
    document.getElementById("save__1").disabled = false;
    document.getElementById("save__2").disabled = false;
    document.getElementById("copy__1").disabled = false;
    document.getElementById("copy__2").disabled = false;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    NextTransform();
}
function Copy__1() {
    salesreportValue = document.getElementById("salesreport").value;
    navigator.clipboard.writeText(salesreportValue);
    document.getElementById("copy__1").disabled = true;
    document.getElementById("copy__2").disabled = true;
}
function Copy__2() {
    Copy__1();
}
function Share__1() {
    salesreportValue = document.getElementById("salesreport").value;
    if (navigator.share) {
        navigator.share({
            title: "Sales Report",
            text: salesreportValue,
        });
    } else {
        message = window.encodeURIComponent(document.getElementById("salesreport").value);
        link = "https://api.whatsapp.com/send?text=";
        window.open(link + message);
    }
}
function Share__2() {
    Share__1();
}
function Save__1() {
    let x = parseInt(localStorage.getItem("currentArea"));
    localStorage.setItem("areaname.area." + x, document.getElementById("areaname").value || "Area " + x);
    localStorage.setItem("achievedmobile.area." + x, utdmobile);
    localStorage.setItem("targetmobile.area." + x, document.getElementById("targetmobile").value);
    localStorage.setItem("achievedwemix.area." + x, utdwemix);
    localStorage.setItem("targetwemix.area." + x, document.getElementById("targetwemix").value);
    localStorage.setItem("achievedwegold.area." + x, utdwegold);
    localStorage.setItem("achievedindigo.area." + x, utdindigo);
    localStorage.setItem("targetpostpaid.area." + x, document.getElementById("targetpostpaid").value);
    localStorage.setItem("achievedadsl.area." + x, utdadsl);
    localStorage.setItem("targetadsl.area." + x, document.getElementById("targetadsl").value);
    localStorage.setItem("achievedfixed.area." + x, utdfixed);
    localStorage.setItem("targetfixed.area." + x, document.getElementById("targetfixed").value);
    document.getElementById("save__1").disabled = true;
    document.getElementById("save__2").disabled = true;
    localStorage.setItem("areaRestore", "true");
    localStorage.setItem("areas", sessionStorage.getItem("areas"));
}
function Save__2() {
    Save__1();
}
function Print__1() {
    doc = window.open("", "_blank");
    doc.document.open();
    doc.document.write("<html lang=en><head><title>Area Report</title><style>body {font-family: monospace; display: flex;} div {margin: 0px auto 0px auto;}</style></head><body onload=window.print();setTimeout(window.close,1000);><div>");
    doc.document.write(document.getElementById("salesreport").value.replace(/`/gi, "").replace(/  /gi, "&nbsp;&nbsp;").replace(/\n/gi, "<br>"));
    doc.document.write("</div></body></html>");
    doc.document.close();
}
