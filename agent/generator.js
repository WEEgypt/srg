function EnableRestore() {
    if (localStorage.getItem("yourname.4agent") !== null) {
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
    agent.style.display = "none";
    row1.style.display = "none";
    row2.style.display = "none";
    today.style.display = "block";
    document.getElementById("yourname").value = localStorage.getItem("yourname.4agent");
    document.getElementById("achievedpayg").value = localStorage.getItem("achievedpayg.4agent");
    document.getElementById("targetpayg").value = localStorage.getItem("targetpayg.4agent");
    document.getElementById("achieveddata").value = localStorage.getItem("achieveddata.4agent");
    document.getElementById("targetdata").value = localStorage.getItem("targetdata.4agent");
    document.getElementById("achievedkixtaz").value = localStorage.getItem("achievedkixtaz.4agent");
    document.getElementById("targetkixtaz").value = localStorage.getItem("targetkixtaz.4agent");
    document.getElementById("achievedweclub").value = localStorage.getItem("achievedweclub.4agent");
    document.getElementById("targetweclub").value = localStorage.getItem("targetweclub.4agent");
    document.getElementById("achievedwemix").value = localStorage.getItem("achievedwemix.4agent");
    document.getElementById("targetwemix").value = localStorage.getItem("targetwemix.4agent");
    document.getElementById("achievedindigo").value = localStorage.getItem("achievedindigo.4agent");
    document.getElementById("targetindigo").value = localStorage.getItem("targetindigo.4agent");
    document.getElementById("achievedtkafol").value = localStorage.getItem("achievedtkafol.4agent");
    document.getElementById("achievedadsl").value = localStorage.getItem("achievedadsl.4agent");
    document.getElementById("targetadsl").value = localStorage.getItem("targetadsl.4agent");
    document.getElementById("achievedfixed").value = localStorage.getItem("achievedfixed.4agent");
    document.getElementById("targetfixed").value = localStorage.getItem("targetfixed.4agent");
    document.getElementById("achievedmifi").value = localStorage.getItem("achievedmifi.4agent");
    document.getElementById("targetmifi").value = localStorage.getItem("targetmifi.4agent");
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
    document.getElementById("todaykix17").value = "";
    document.getElementById("todaykix25").value = "";
    document.getElementById("todaykix35").value = "";
    document.getElementById("todaykix45").value = "";
    document.getElementById("todaykix75").value = "";
    document.getElementById("todaytazbeet30").value = "";
    document.getElementById("todaytazbeet40").value = "";
    document.getElementById("todaytazbeet70").value = "";
    document.getElementById("todaytazbeet110").value = "";
    document.getElementById("todayweclub25").value = "";
    document.getElementById("todayweclub40").value = "";
    document.getElementById("todayweclub65").value = "";
    document.getElementById("todayweclub100").value = "";
    document.getElementById("todaywemix165").value = "";
    document.getElementById("todaywemix240").value = "";
    document.getElementById("todayindigofmc").value = "";
    document.getElementById("todayindigoopen").value = "";
    document.getElementById("todaytkafol").value = "";
    document.getElementById("todayadsl").value = "";
    document.getElementById("todayfixed").value = "";
    document.getElementById("todaymifi").value = "";
    document.getElementById("todaybillfixed").value = "";
    document.getElementById("todaybillindigo").value = "";
    document.getElementById("todaybilladsl").value = "";
    document.getElementById("todaysimswap").value = "";
    document.getElementById("todaymnp").value = "";
    document.getElementById("todaybssamount").value = "";
    document.getElementById("todayossamount").value = "";
    NextTransform();
}
function NewMonth() {
    restore.style.display = "none";
    basic.style.display = "block";
    document.getElementById("yourname").value = "";
    document.getElementById("achievedpayg").value = "";
    document.getElementById("targetpayg").value = "";
    document.getElementById("achieveddata").value = "";
    document.getElementById("targetdata").value = "";
    document.getElementById("achievedkixtaz").value = "";
    document.getElementById("targetkixtaz").value = "";
    document.getElementById("achievedweclub").value = "";
    document.getElementById("targetweclub").value = "";
    document.getElementById("achievedwemix").value = "";
    document.getElementById("targetwemix").value = "";
    document.getElementById("achievedindigo").value = "";
    document.getElementById("targetindigo").value = "";
    document.getElementById("achievedtkafol").value = "";
    document.getElementById("achievedadsl").value = "";
    document.getElementById("targetadsl").value = "";
    document.getElementById("achievedfixed").value = "";
    document.getElementById("targetfixed").value = "";
    document.getElementById("achievedmifi").value = "";
    document.getElementById("targetmifi").value = "";
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
    document.getElementById("todaykix17").value = "";
    document.getElementById("todaykix25").value = "";
    document.getElementById("todaykix35").value = "";
    document.getElementById("todaykix45").value = "";
    document.getElementById("todaykix75").value = "";
    document.getElementById("todaytazbeet30").value = "";
    document.getElementById("todaytazbeet40").value = "";
    document.getElementById("todaytazbeet70").value = "";
    document.getElementById("todaytazbeet110").value = "";
    document.getElementById("todayweclub25").value = "";
    document.getElementById("todayweclub40").value = "";
    document.getElementById("todayweclub65").value = "";
    document.getElementById("todayweclub100").value = "";
    document.getElementById("todaywemix165").value = "";
    document.getElementById("todaywemix240").value = "";
    document.getElementById("todayindigofmc").value = "";
    document.getElementById("todayindigoopen").value = "";
    document.getElementById("todaytkafol").value = "";
    document.getElementById("todayadsl").value = "";
    document.getElementById("todayfixed").value = "";
    document.getElementById("todaymifi").value = "";
    document.getElementById("todaybillfixed").value = "";
    document.getElementById("todaybillindigo").value = "";
    document.getElementById("todaybilladsl").value = "";
    document.getElementById("todaysimswap").value = "";
    document.getElementById("todaymnp").value = "";
    document.getElementById("todaybssamount").value = "";
    document.getElementById("todayossamount").value = "";
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
        agent.style.display = "block";
    }
    if (localStorage.getItem("yourname.4agent") !== null) {
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
    document.getElementById("achievedpayg").value = localStorage.getItem("undoachievedpayg.4agent");
    document.getElementById("achieveddata").value = localStorage.getItem("undoachieveddata.4agent");
    document.getElementById("achievedkixtaz").value = localStorage.getItem("undoachievedkixtaz.4agent");
    document.getElementById("achievedweclub").value = localStorage.getItem("undoachievedweclub.4agent");
    document.getElementById("achievedwemix").value = localStorage.getItem("undoachievedwemix.4agent");
    document.getElementById("achievedindigo").value = localStorage.getItem("undoachievedindigo.4agent");
    document.getElementById("achievedtkafol").value = localStorage.getItem("undoachievedtkafol.4agent");
    document.getElementById("achievedadsl").value = localStorage.getItem("undoachievedadsl.4agent");
    document.getElementById("achievedfixed").value = localStorage.getItem("undoachievedfixed.4agent");
    document.getElementById("achievedmifi").value = localStorage.getItem("undoachievedmifi.4agent");
    document.getElementById("todaypayg").value = localStorage.getItem("undotodaypayg.4agent");
    document.getElementById("todaydata").value = localStorage.getItem("undotodaydata.4agent");
    document.getElementById("todaykix17").value = localStorage.getItem("undotodaykix17.4agent");
    document.getElementById("todaykix25").value = localStorage.getItem("undotodaykix25.4agent");
    document.getElementById("todaykix35").value = localStorage.getItem("undotodaykix35.4agent");
    document.getElementById("todaykix45").value = localStorage.getItem("undotodaykix45.4agent");
    document.getElementById("todaykix75").value = localStorage.getItem("undotodaykix75.4agent");
    document.getElementById("todaytazbeet30").value = localStorage.getItem("undotodaytazbeet30.4agent");
    document.getElementById("todaytazbeet40").value = localStorage.getItem("undotodaytazbeet40.4agent");
    document.getElementById("todaytazbeet70").value = localStorage.getItem("undotodaytazbeet70.4agent");
    document.getElementById("todaytazbeet110").value = localStorage.getItem("undotodaytazbeet110.4agent");
    document.getElementById("todayweclub25").value = localStorage.getItem("undotodayweclub25.4agent");
    document.getElementById("todayweclub40").value = localStorage.getItem("undotodayweclub40.4agent");
    document.getElementById("todayweclub65").value = localStorage.getItem("undotodayweclub65.4agent");
    document.getElementById("todayweclub100").value = localStorage.getItem("undotodayweclub100.4agent");
    document.getElementById("todaywemix165").value = localStorage.getItem("undotodaywemix165.4agent");
    document.getElementById("todaywemix240").value = localStorage.getItem("undotodaywemix240.4agent");
    document.getElementById("todayindigofmc").value = localStorage.getItem("undotodayindigofmc.4agent");
    document.getElementById("todayindigoopen").value = localStorage.getItem("undotodayindigoopen.4agent");
    document.getElementById("todaytkafol").value = localStorage.getItem("undotodaytkafol.4agent");
    document.getElementById("todayadsl").value = localStorage.getItem("undotodayadsl.4agent");
    document.getElementById("todayfixed").value = localStorage.getItem("undotodayfixed.4agent");
    document.getElementById("todaymifi").value = localStorage.getItem("undotodaymifi.4agent");
    document.getElementById("todaybillfixed").value = localStorage.getItem("undotodaybillfixed.4agent");
    document.getElementById("todaybillindigo").value = localStorage.getItem("undotodaybillindigo.4agent");
    document.getElementById("todaybilladsl").value = localStorage.getItem("undotodaybilladsl.4agent");
    document.getElementById("todaysimswap").value = localStorage.getItem("undotodaysimswap.4agent");
    document.getElementById("todaymnp").value = localStorage.getItem("undotodaymnp.4agent");
    document.getElementById("todaybssamount").value = localStorage.getItem("undotodaybssamount.4agent");
    document.getElementById("todayossamount").value = localStorage.getItem("undotodayossamount.4agent");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
}
function Back6() {
    Back5();
    basic.style.display = "block";
    agent.style.display = "none";
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
    var yourname = document.getElementById("yourname").value;
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var date = day + "-" + month + "-" + year;
    var daysinmonth = new Date(year, month, 0).getDate();
    var todaypayg = parseInt(document.getElementById("todaypayg").value) || 0;
    var achievedpayg = parseInt(document.getElementById("achievedpayg").value) || 0;
    var utdpayg = todaypayg + achievedpayg || 0;
    var targetpayg = parseInt(document.getElementById("targetpayg").value) || 0;
    var todaydata = parseInt(document.getElementById("todaydata").value) || 0;
    var achieveddata = parseInt(document.getElementById("achieveddata").value) || 0;
    var utddata = todaydata + achieveddata || 0;
    var targetdata = parseInt(document.getElementById("targetdata").value) || 0;
    var todaykix17 = parseInt(document.getElementById("todaykix17").value) || 0;
    var todaykix25 = parseInt(document.getElementById("todaykix25").value) || 0;
    var todaykix35 = parseInt(document.getElementById("todaykix35").value) || 0;
    var todaykix45 = parseInt(document.getElementById("todaykix45").value) || 0;
    var todaykix75 = parseInt(document.getElementById("todaykix75").value) || 0;
    var todaytazbeet30 = parseInt(document.getElementById("todaytazbeet30").value) || 0;
    var todaytazbeet40 = parseInt(document.getElementById("todaytazbeet40").value) || 0;
    var todaytazbeet70 = parseInt(document.getElementById("todaytazbeet70").value) || 0;
    var todaytazbeet110 = parseInt(document.getElementById("todaytazbeet110").value) || 0;
    var achievedkixtaz = parseInt(document.getElementById("achievedkixtaz").value) || 0;
    var utdkixtaz = todaykix17 + todaykix25 + todaykix35 + todaykix45 + todaykix75 + todaytazbeet30 + todaytazbeet40 + todaytazbeet70 + todaytazbeet110 + achievedkixtaz || 0;
    var targetkixtaz = parseInt(document.getElementById("targetkixtaz").value) || 0;
    var todayweclub25 = parseInt(document.getElementById("todayweclub25").value) || 0;
    var todayweclub40 = parseInt(document.getElementById("todayweclub40").value) || 0;
    var todayweclub65 = parseInt(document.getElementById("todayweclub65").value) || 0;
    var todayweclub100 = parseInt(document.getElementById("todayweclub100").value) || 0;
    var achievedweclub = parseInt(document.getElementById("achievedweclub").value) || 0;
    var utdweclub = todayweclub25 + todayweclub40 + todayweclub65 + todayweclub100 + achievedweclub || 0;
    var targetweclub = parseInt(document.getElementById("targetweclub").value) || 0;
    var todaywemix165 = parseInt(document.getElementById("todaywemix165").value) || 0;
    var todaywemix240 = parseInt(document.getElementById("todaywemix240").value) || 0;
    var achievedwemix = parseInt(document.getElementById("achievedwemix").value) || 0;
    var utdwemix = todaywemix165 + todaywemix240 + achievedwemix || 0;
    var targetwemix = parseInt(document.getElementById("targetwemix").value) || 0;
    var todayindigofmc = parseInt(document.getElementById("todayindigofmc").value) || 0;
    var todayindigoopen = parseInt(document.getElementById("todayindigoopen").value) || 0;
    var achievedindigo = parseInt(document.getElementById("achievedindigo").value) || 0;
    var utdindigo = todayindigofmc + todayindigoopen + achievedindigo || 0;
    var targetindigo = parseInt(document.getElementById("targetindigo").value) || 0;
    var todaytkafol = parseInt(document.getElementById("todaytkafol").value) || 0;
    var achievedtkafol = parseInt(document.getElementById("achievedtkafol").value) || 0;
    var utdtkafol = todaytkafol + achievedtkafol || 0;
    var todayadsl = parseInt(document.getElementById("todayadsl").value) || 0;
    var achievedadsl = parseInt(document.getElementById("achievedadsl").value) || 0;
    var utdadsl = todayadsl + achievedadsl || 0;
    var targetadsl = parseInt(document.getElementById("targetadsl").value) || 0;
    var todayfixed = parseInt(document.getElementById("todayfixed").value) || 0;
    var achievedfixed = parseInt(document.getElementById("achievedfixed").value) || 0;
    var utdfixed = todayfixed + achievedfixed || 0;
    var targetfixed = parseInt(document.getElementById("targetfixed").value) || 0;
    var todaymifi = parseInt(document.getElementById("todaymifi").value) || 0;
    var achievedmifi = parseInt(document.getElementById("achievedmifi").value) || 0;
    var utdmifi = todaymifi + achievedmifi || 0;
    var targetmifi = parseInt(document.getElementById("targetmifi").value) || 0;
    var todaybillfixed = parseInt(document.getElementById("todaybillfixed").value) || 0;
    var todaybillindigo = parseInt(document.getElementById("todaybillindigo").value) || 0;
    var todaybilladsl = parseInt(document.getElementById("todaybilladsl").value) || 0;
    var todaysimswap = parseInt(document.getElementById("todaysimswap").value) || 0;
    var todaymnp = parseInt(document.getElementById("todaymnp").value) || 0;
    var todaybssamount = parseInt(document.getElementById("todaybssamount").value) || 0;
    var todayossamount = parseInt(document.getElementById("todayossamount").value) || 0;
    var utdmobile = utdpayg + utddata + utdkixtaz + utdweclub + utdwemix + utdindigo || 0;
    var targetmobile = targetpayg + targetdata + targetkixtaz + targetwemix + targetweclub + targetindigo || 0;
    var vsMobile = ~~Number(Math.round((utdmobile / targetmobile) * 100)) || 0;
    var reMobile = ~~Number(Math.round((((utdmobile / targetmobile) * 100) / day) * daysinmonth)) || 0;
    var dailymobile =
        todaypayg +
            todaydata +
            todaykix17 +
            todaykix25 +
            todaykix35 +
            todaykix45 +
            todaykix75 +
            todaytazbeet30 +
            todaytazbeet40 +
            todaytazbeet70 +
            todaytazbeet110 +
            todayweclub25 +
            todayweclub40 +
            todayweclub65 +
            todayweclub100 +
            todaywemix165 +
            todaywemix240 +
            todayindigofmc +
            todayindigoopen || 0;
    if (todaykix17 == "0") {
        var todaykix17report = "";
    } else {
        var todaykix17report = todaykix17 + "*17 ";
    }
    if (todaykix25 == "0") {
        var todaykix25report = "";
    } else {
        var todaykix25report = todaykix25 + "*25 ";
    }
    if (todaykix35 == "0") {
        var todaykix35report = "";
    } else {
        var todaykix35report = todaykix35 + "*35 ";
    }
    if (todaykix45 == "0") {
        var todaykix45report = "";
    } else {
        var todaykix45report = todaykix45 + "*45 ";
    }
    if (todaykix75 == "0") {
        var todaykix75report = "";
    } else {
        var todaykix75report = todaykix75 + "*75 ";
    }
    var todaykixreport = todaykix17report + todaykix25report + todaykix35report + todaykix45report + todaykix75report;
    if (todaykixreport == "") {
        var kixreport = "0";
    } else {
        var kixreport = todaykixreport;
    }
    if (todaytazbeet30 == "0") {
        var todaytazbeet30report = "";
    } else {
        var todaytazbeet30report = todaytazbeet30 + "*30 ";
    }
    if (todaytazbeet40 == "0") {
        var todaytazbeet40report = "";
    } else {
        var todaytazbeet40report = todaytazbeet40 + "*40 ";
    }
    if (todaytazbeet70 == "0") {
        var todaytazbeet70report = "";
    } else {
        var todaytazbeet70report = todaytazbeet70 + "*70 ";
    }
    if (todaytazbeet110 == "0") {
        var todaytazbeet110report = "";
    } else {
        var todaytazbeet110report = todaytazbeet110 + "*110 ";
    }
    var todaytazbeetreport = todaytazbeet30report + todaytazbeet40report + todaytazbeet70report + todaytazbeet110report;
    if (todaytazbeetreport == "") {
        var tazbeetreport = "0";
    } else {
        var tazbeetreport = todaytazbeetreport;
    }
    if (todayweclub25 == "0") {
        var todayweclub25report = "";
    } else {
        var todayweclub25report = todayweclub25 + "*25 ";
    }
    if (todayweclub40 == "0") {
        var todayweclub40report = "";
    } else {
        var todayweclub40report = todayweclub40 + "*40 ";
    }
    if (todayweclub65 == "0") {
        var todayweclub65report = "";
    } else {
        var todayweclub65report = todayweclub65 + "*65 ";
    }
    if (todayweclub100 == "0") {
        var todayweclub100report = "";
    } else {
        var todayweclub100report = todayweclub100 + "*100 ";
    }
    var todayweclubreport = todayweclub25report + todayweclub40report + todayweclub65report + todayweclub100report;
    if (todayweclubreport == "") {
        var weclubreport = "0";
    } else {
        var weclubreport = todayweclubreport;
    }
    if (todaywemix165 == "0") {
        var todaywemix165report = "";
    } else {
        var todaywemix165report = todaywemix165 + "*165 ";
    }
    if (todaywemix240 == "0") {
        var todaywemix240report = "";
    } else {
        var todaywemix240report = todaywemix240 + "*240 ";
    }
    var todaywemixreport = todaywemix165report + todaywemix240report;
    if (todaywemixreport == "") {
        var wemixreport = "0";
    } else {
        var wemixreport = todaywemixreport;
    }
    var dailyrequired = Math.round((targetmobile - utdmobile) / (daysinmonth - day));
    if (dailyrequired < "0") {
        var dailyrequiredreport = "0";
    } else {
        var dailyrequiredreport = dailyrequired;
    }
    if (todayadsl == "0") {
        var todayadslfordailysales = "";
    } else {
        var todayadslfordailysales = " + " + todayadsl + " ADSL";
    }
    if (todayfixed == "0") {
        var todayfixedfordailysales = "";
    } else {
        var todayfixedfordailysales = " + " + todayfixed + " Fixed";
    }
    if (todaymifi == "0") {
        var todaymififordailysales = "";
    } else {
        var todaymififordailysales = " + " + todaymifi + " MIFI";
    }
    document.getElementById("salesreport").value =
        "Date: " +
        date +
        "\n" +
        "Name: " +
        yourname +
        "\n" +
        "------------------------- " +
        "\n" +
        "Payg: " +
        todaypayg +
        "\n" +
        "Data: " +
        todaydata +
        "\n" +
        "Kix: " +
        kixreport +
        "\n" +
        "Tazbeet: " +
        tazbeetreport +
        "\n" +
        "We Club: " +
        weclubreport +
        "\n" +
        "We Mix: " +
        wemixreport +
        "\n" +
        "Indigo FMC: " +
        todayindigofmc +
        "\n" +
        "Indigo Open: " +
        todayindigoopen +
        "\n" +
        "Tkafol: " +
        todaytkafol +
        "\n" +
        "ADSL: " +
        todayadsl +
        "\n" +
        "Fixed: " +
        todayfixed +
        "\n" +
        "MIFI: " +
        todaymifi +
        "\n" +
        "------------------------- " +
        "\n" +
        "Bill Fixed: " +
        todaybillfixed +
        "\n" +
        "Bill Indigo: " +
        todaybillindigo +
        "\n" +
        "Bill ADSL: " +
        todaybilladsl +
        "\n" +
        "SIM Swap: " +
        todaysimswap +
        "\n" +
        "MNP: " +
        todaymnp +
        "\n" +
        "\n" +
        "Cash" +
        "\n" +
        "BSS Amount: " +
        todaybssamount +
        "\n" +
        "OSS Amount: " +
        todayossamount +
        "\n" +
        "Total Cash: " +
        (todaybssamount + todayossamount) +
        "\n" +
        "------------------------- " +
        "\n" +
        "Sales Today: " +
        dailymobile +
        " Mob" +
        todayadslfordailysales +
        todayfixedfordailysales +
        todaymififordailysales +
        "\n" +
        "------------------------- " +
        "\n" +
        "MTD: " +
        targetmobile +
        "/" +
        utdmobile +
        " (VS: " +
        vsMobile +
        "%" +
        ")" +
        " (RE: " +
        reMobile +
        "%" +
        ")" +
        "\n" +
        "Payg: " +
        targetpayg +
        "/" +
        utdpayg +
        "\n" +
        "Data: " +
        targetdata +
        "/" +
        utddata +
        "\n" +
        "Kix+Taz: " +
        targetkixtaz +
        "/" +
        utdkixtaz +
        "\n" +
        "We Club: " +
        targetweclub +
        "/" +
        utdweclub +
        "\n" +
        "We Mix: " +
        targetwemix +
        "/" +
        utdwemix +
        "\n" +
        "Indigo: " +
        targetindigo +
        "/" +
        utdindigo +
        "\n" +
        "Tkafol: " +
        utdtkafol +
        "\n" +
        "ADSL: " +
        targetadsl +
        "/" +
        utdadsl +
        "\n" +
        "Fixed: " +
        targetfixed +
        "/" +
        utdfixed +
        "\n" +
        "MIFI: " +
        targetmifi +
        "/" +
        utdmifi;
    localStorage.setItem("undotodaypayg.4agent", document.getElementById("todaypayg").value);
    localStorage.setItem("undotodaydata.4agent", document.getElementById("todaydata").value);
    localStorage.setItem("undotodaykix17.4agent", document.getElementById("todaykix17").value);
    localStorage.setItem("undotodaykix25.4agent", document.getElementById("todaykix25").value);
    localStorage.setItem("undotodaykix35.4agent", document.getElementById("todaykix35").value);
    localStorage.setItem("undotodaykix45.4agent", document.getElementById("todaykix45").value);
    localStorage.setItem("undotodaykix75.4agent", document.getElementById("todaykix75").value);
    localStorage.setItem("undotodaytazbeet30.4agent", document.getElementById("todaytazbeet30").value);
    localStorage.setItem("undotodaytazbeet40.4agent", document.getElementById("todaytazbeet40").value);
    localStorage.setItem("undotodaytazbeet70.4agent", document.getElementById("todaytazbeet70").value);
    localStorage.setItem("undotodaytazbeet110.4agent", document.getElementById("todaytazbeet110").value);
    localStorage.setItem("undotodayweclub25.4agent", document.getElementById("todayweclub25").value);
    localStorage.setItem("undotodayweclub40.4agent", document.getElementById("todayweclub40").value);
    localStorage.setItem("undotodayweclub65.4agent", document.getElementById("todayweclub65").value);
    localStorage.setItem("undotodayweclub100.4agent", document.getElementById("todayweclub100").value);
    localStorage.setItem("undotodaywemix165.4agent", document.getElementById("todaywemix165").value);
    localStorage.setItem("undotodaywemix240.4agent", document.getElementById("todaywemix240").value);
    localStorage.setItem("undotodayindigofmc.4agent", document.getElementById("todayindigofmc").value);
    localStorage.setItem("undotodayindigoopen.4agent", document.getElementById("todayindigoopen").value);
    localStorage.setItem("undotodaytkafol.4agent", document.getElementById("todaytkafol").value);
    localStorage.setItem("undotodayadsl.4agent", document.getElementById("todayadsl").value);
    localStorage.setItem("undotodayfixed.4agent", document.getElementById("todayfixed").value);
    localStorage.setItem("undotodaymifi.4agent", document.getElementById("todaymifi").value);
    localStorage.setItem("undotodaybillfixed.4agent", document.getElementById("todaybillfixed").value);
    localStorage.setItem("undotodaybillindigo.4agent", document.getElementById("todaybillindigo").value);
    localStorage.setItem("undotodaybilladsl.4agent", document.getElementById("todaybilladsl").value);
    localStorage.setItem("undotodaysimswap.4agent", document.getElementById("todaysimswap").value);
    localStorage.setItem("undotodaymnp.4agent", document.getElementById("todaymnp").value);
    localStorage.setItem("undotodaybssamount.4agent", document.getElementById("todaybssamount").value);
    localStorage.setItem("undotodayossamount.4agent", document.getElementById("todayossamount").value);
    localStorage.setItem("undoachievedpayg.4agent", document.getElementById("achievedpayg").value);
    localStorage.setItem("undoachieveddata.4agent", document.getElementById("achieveddata").value);
    localStorage.setItem("undoachievedkixtaz.4agent", document.getElementById("achievedkixtaz").value);
    localStorage.setItem("undoachievedweclub.4agent", document.getElementById("achievedweclub").value);
    localStorage.setItem("undoachievedwemix.4agent", document.getElementById("achievedwemix").value);
    localStorage.setItem("undoachievedindigo.4agent", document.getElementById("achievedindigo").value);
    localStorage.setItem("undoachievedtkafol.4agent", document.getElementById("achievedtkafol").value);
    localStorage.setItem("undoachievedadsl.4agent", document.getElementById("achievedadsl").value);
    localStorage.setItem("undoachievedfixed.4agent", document.getElementById("achievedfixed").value);
    localStorage.setItem("undoachievedmifi.4agent", document.getElementById("achievedmifi").value);
    document.getElementById("achievedpayg").value = utdpayg;
    document.getElementById("todaypayg").value = "";
    document.getElementById("achieveddata").value = utddata;
    document.getElementById("todaydata").value = "";
    document.getElementById("achievedkixtaz").value = utdkixtaz;
    document.getElementById("todaykix17").value = "";
    document.getElementById("todaykix25").value = "";
    document.getElementById("todaykix35").value = "";
    document.getElementById("todaykix45").value = "";
    document.getElementById("todaykix75").value = "";
    document.getElementById("todaytazbeet30").value = "";
    document.getElementById("todaytazbeet40").value = "";
    document.getElementById("todaytazbeet70").value = "";
    document.getElementById("todaytazbeet110").value = "";
    document.getElementById("achievedweclub").value = utdweclub;
    document.getElementById("todayweclub25").value = "";
    document.getElementById("todayweclub40").value = "";
    document.getElementById("todayweclub65").value = "";
    document.getElementById("todayweclub100").value = "";
    document.getElementById("achievedwemix").value = utdwemix;
    document.getElementById("todaywemix165").value = "";
    document.getElementById("todaywemix240").value = "";
    document.getElementById("achievedindigo").value = utdindigo;
    document.getElementById("todayindigofmc").value = "";
    document.getElementById("todayindigoopen").value = "";
    document.getElementById("achievedtkafol").value = utdtkafol;
    document.getElementById("todaytkafol").value = "";
    document.getElementById("achievedadsl").value = utdadsl;
    document.getElementById("todayadsl").value = "";
    document.getElementById("achievedfixed").value = utdfixed;
    document.getElementById("todayfixed").value = "";
    document.getElementById("achievedmifi").value = utdmifi;
    document.getElementById("todaymifi").value = "";
    document.getElementById("todaybillfixed").value = "";
    document.getElementById("todaybillindigo").value = "";
    document.getElementById("todaybilladsl").value = "";
    document.getElementById("todaysimswap").value = "";
    document.getElementById("todaymnp").value = "";
    document.getElementById("todaybssamount").value = "";
    document.getElementById("todayossamount").value = "";
    document.getElementById("save1").disabled = false;
    document.getElementById("save2").disabled = false;
    document.getElementById("copy1").disabled = false;
    document.getElementById("copy2").disabled = false;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    NextTransform();
}
function Copy1() {
    var salesreport = document.getElementById("salesreport");
    navigator.clipboard.writeText(salesreport.value);
    document.getElementById("copy1").disabled = true;
    document.getElementById("copy2").disabled = true;
}
function Share1() {
    var message = window.encodeURIComponent(document.getElementById("salesreport").value);
    var link = "whatsapp://send?text=";
    window.open(link + message);
}
function Save1() {
    localStorage.setItem("yourname.4agent", document.getElementById("yourname").value);
    localStorage.setItem("achievedpayg.4agent", document.getElementById("achievedpayg").value);
    localStorage.setItem("targetpayg.4agent", document.getElementById("targetpayg").value);
    localStorage.setItem("achieveddata.4agent", document.getElementById("achieveddata").value);
    localStorage.setItem("targetdata.4agent", document.getElementById("targetdata").value);
    localStorage.setItem("achievedkixtaz.4agent", document.getElementById("achievedkixtaz").value);
    localStorage.setItem("targetkixtaz.4agent", document.getElementById("targetkixtaz").value);
    localStorage.setItem("achievedweclub.4agent", document.getElementById("achievedweclub").value);
    localStorage.setItem("targetweclub.4agent", document.getElementById("targetweclub").value);
    localStorage.setItem("achievedwemix.4agent", document.getElementById("achievedwemix").value);
    localStorage.setItem("targetwemix.4agent", document.getElementById("targetwemix").value);
    localStorage.setItem("achievedindigo.4agent", document.getElementById("achievedindigo").value);
    localStorage.setItem("targetindigo.4agent", document.getElementById("targetindigo").value);
    localStorage.setItem("achievedtkafol.4agent", document.getElementById("achievedtkafol").value);
    localStorage.setItem("achievedadsl.4agent", document.getElementById("achievedadsl").value);
    localStorage.setItem("targetadsl.4agent", document.getElementById("targetadsl").value);
    localStorage.setItem("achievedfixed.4agent", document.getElementById("achievedfixed").value);
    localStorage.setItem("targetfixed.4agent", document.getElementById("targetfixed").value);
    localStorage.setItem("achievedmifi.4agent", document.getElementById("achievedmifi").value);
    localStorage.setItem("targetmifi.4agent", document.getElementById("targetmifi").value);
    document.getElementById("save1").disabled = true;
    document.getElementById("save2").disabled = true;
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
function Thanks() {
    if (thanks.style.display === "none") {
        thanks.style.display = "block";
        document.getElementById("more").innerHTML = "˄";
    } else {
        thanks.style.display = "none";
        document.getElementById("more").innerHTML = "˅";
    }
}
