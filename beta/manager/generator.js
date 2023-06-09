function EnableRestore() {
    if (localStorage.getItem("storeRestore") == "true") {
        basic.style.display = "none";
        restore.style.display = "block";
        row1.style.display = "none";
        row2.style.display = "block";
        stores.style.display = "block";
        document.getElementById("store1").innerHTML = localStorage.getItem("storename.store.1");
        let x = localStorage.getItem("stores");
        for (i = 0; i < x - 1; i++) {
            var value = parseInt([i]) + 2;
            document.getElementById("stores").options.add(new Option(localStorage.getItem("storename.store." + value), value));
        }
        sessionStorage.removeItem("stores");
    } else {
        sessionStorage.setItem("stores", "1");
        localStorage.setItem("currentStore", "1");
    }
    if (localStorage.getItem("stores") > "1") {
        multi.style.display = "block";
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
    let x = document.getElementById("stores").value;
    localStorage.setItem("currentStore", x);
    restore.style.display = "none";
    basic.style.display = "block";
    store.style.display = "none";
    row1.style.display = "none";
    row2.style.display = "none";
    today.style.display = "block";
    document.getElementById("storename").value = localStorage.getItem("storename.store." + x);
    document.getElementById("achievedpayg").value = localStorage.getItem("achievedpayg.store." + x);
    document.getElementById("targetpayg").value = localStorage.getItem("targetpayg.store." + x);
    document.getElementById("achieveddata").value = localStorage.getItem("achieveddata.store." + x);
    document.getElementById("targetdata").value = localStorage.getItem("targetdata.store." + x);
    document.getElementById("achievedkixandsuper").value = localStorage.getItem("achievedkixandsuper.store." + x);
    document.getElementById("targetkixandsuper").value = localStorage.getItem("targetkixandsuper.store." + x);
    document.getElementById("achievedtaz").value = localStorage.getItem("achievedtaz.store." + x);
    document.getElementById("targettaz").value = localStorage.getItem("targettaz.store." + x);
    document.getElementById("achievedweclub").value = localStorage.getItem("achievedweclub.store." + x);
    document.getElementById("targetweclub").value = localStorage.getItem("targetweclub.store." + x);
    document.getElementById("achievedwemix").value = localStorage.getItem("achievedwemix.store." + x);
    document.getElementById("targetwemix").value = localStorage.getItem("targetwemix.store." + x);
    document.getElementById("achievedindigo").value = localStorage.getItem("achievedindigo.store." + x);
    document.getElementById("targetindigo").value = localStorage.getItem("targetindigo.store." + x);
    document.getElementById("achievedadsl").value = localStorage.getItem("achievedadsl.store." + x);
    document.getElementById("targetadsl").value = localStorage.getItem("targetadsl.store." + x);
    document.getElementById("achievedfixed").value = localStorage.getItem("achievedfixed.store." + x);
    document.getElementById("targetfixed").value = localStorage.getItem("targetfixed.store." + x);
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
    document.getElementById("todaykix").value = "";
    document.getElementById("todayskix").value = "";
    document.getElementById("todaytazbeet").value = "";
    document.getElementById("todayweclub").value = "";
    document.getElementById("todaywemix").value = "";
    document.getElementById("todayindigo").value = "";
    document.getElementById("todayadsl").value = "";
    document.getElementById("todayfixed").value = "";
    document.getElementById("todaybillfixed").value = "";
    document.getElementById("todaybillindigo").value = "";
    document.getElementById("todaybilladsl").value = "";
    document.getElementById("todaysimswap").value = "";
    document.getElementById("todaybssamount").value = "";
    document.getElementById("todayossamount").value = "";
    NextTransform();
    sessionStorage.setItem("stores", localStorage.getItem("stores"));
}
function NewMonth() {
    let x = document.getElementById("stores").value;
    localStorage.setItem("currentStore", x);
    restore.style.display = "none";
    basic.style.display = "block";
    document.getElementById("storename").value = "";
    document.getElementById("achievedpayg").value = "";
    document.getElementById("targetpayg").value = "";
    document.getElementById("achieveddata").value = "";
    document.getElementById("targetdata").value = "";
    document.getElementById("achievedkixandsuper").value = "";
    document.getElementById("targetkixandsuper").value = "";
    document.getElementById("achievedtaz").value = "";
    document.getElementById("targettaz").value = "";
    document.getElementById("achievedweclub").value = "";
    document.getElementById("targetweclub").value = "";
    document.getElementById("achievedwemix").value = "";
    document.getElementById("targetwemix").value = "";
    document.getElementById("achievedindigo").value = "";
    document.getElementById("targetindigo").value = "";
    document.getElementById("achievedadsl").value = "";
    document.getElementById("targetadsl").value = "";
    document.getElementById("achievedfixed").value = "";
    document.getElementById("targetfixed").value = "";
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
    document.getElementById("todaykix").value = "";
    document.getElementById("todayskix").value = "";
    document.getElementById("todaytazbeet").value = "";
    document.getElementById("todayweclub").value = "";
    document.getElementById("todaywemix").value = "";
    document.getElementById("todayindigo").value = "";
    document.getElementById("todayadsl").value = "";
    document.getElementById("todayfixed").value = "";
    document.getElementById("todaybillfixed").value = "";
    document.getElementById("todaybillindigo").value = "";
    document.getElementById("todaybilladsl").value = "";
    document.getElementById("todaysimswap").value = "";
    document.getElementById("todaybssamount").value = "";
    document.getElementById("todayossamount").value = "";
    NextTransform();
    sessionStorage.setItem("stores", localStorage.getItem("stores"));
}
function NewStore() {
    var stores = parseInt(localStorage.getItem("stores"));
    var x = stores + 1;
    sessionStorage.setItem("stores", x);
    localStorage.setItem("currentStore", x);
    restore.style.display = "none";
    basic.style.display = "block";
    document.getElementById("storename").value = "";
    document.getElementById("achievedpayg").value = "";
    document.getElementById("targetpayg").value = "";
    document.getElementById("achieveddata").value = "";
    document.getElementById("targetdata").value = "";
    document.getElementById("achievedkixandsuper").value = "";
    document.getElementById("targetkixandsuper").value = "";
    document.getElementById("achievedtaz").value = "";
    document.getElementById("targettaz").value = "";
    document.getElementById("achievedweclub").value = "";
    document.getElementById("targetweclub").value = "";
    document.getElementById("achievedwemix").value = "";
    document.getElementById("targetwemix").value = "";
    document.getElementById("achievedindigo").value = "";
    document.getElementById("targetindigo").value = "";
    document.getElementById("achievedadsl").value = "";
    document.getElementById("targetadsl").value = "";
    document.getElementById("achievedfixed").value = "";
    document.getElementById("targetfixed").value = "";
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
    document.getElementById("todaykix").value = "";
    document.getElementById("todayskix").value = "";
    document.getElementById("todaytazbeet").value = "";
    document.getElementById("todayweclub").value = "";
    document.getElementById("todaywemix").value = "";
    document.getElementById("todayindigo").value = "";
    document.getElementById("todayadsl").value = "";
    document.getElementById("todayfixed").value = "";
    document.getElementById("todaybillfixed").value = "";
    document.getElementById("todaybillindigo").value = "";
    document.getElementById("todaybilladsl").value = "";
    document.getElementById("todaysimswap").value = "";
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
    sessionStorage.removeItem("stores");
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
        store.style.display = "block";
    }
    if (localStorage.getItem("storeRestore") == "true") {
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
    document.getElementById("achievedpayg").value = localStorage.getItem("undoachievedpayg");
    document.getElementById("achieveddata").value = localStorage.getItem("undoachieveddata");
    document.getElementById("achievedkixandsuper").value = localStorage.getItem("undoachievedkixandsuper");
    document.getElementById("achievedtaz").value = localStorage.getItem("undoachievedtaz");
    document.getElementById("achievedweclub").value = localStorage.getItem("undoachievedweclub");
    document.getElementById("achievedwemix").value = localStorage.getItem("undoachievedwemix");
    document.getElementById("achievedindigo").value = localStorage.getItem("undoachievedindigo");
    document.getElementById("achievedadsl").value = localStorage.getItem("undoachievedadsl");
    document.getElementById("achievedfixed").value = localStorage.getItem("undoachievedfixed");
    document.getElementById("todaypayg").value = localStorage.getItem("undotodaypayg");
    document.getElementById("todaydata").value = localStorage.getItem("undotodaydata");
    document.getElementById("todaykix").value = localStorage.getItem("undotodaykix");
    document.getElementById("todayskix").value = localStorage.getItem("undotodayskix");
    document.getElementById("todaytazbeet").value = localStorage.getItem("undotodaytazbeet");
    document.getElementById("todayweclub").value = localStorage.getItem("undotodayweclub");
    document.getElementById("todaywemix").value = localStorage.getItem("undotodaywemix");
    document.getElementById("todayindigo").value = localStorage.getItem("undotodayindigo");
    document.getElementById("todayadsl").value = localStorage.getItem("undotodayadsl");
    document.getElementById("todayfixed").value = localStorage.getItem("undotodayfixed");
    document.getElementById("todaybillfixed").value = localStorage.getItem("undotodaybillfixed");
    document.getElementById("todaybillindigo").value = localStorage.getItem("undotodaybillindigo");
    document.getElementById("todaybilladsl").value = localStorage.getItem("undotodaybilladsl");
    document.getElementById("todaysimswap").value = localStorage.getItem("undotodaysimswap");
    document.getElementById("todaybssamount").value = localStorage.getItem("undotodaybssamount");
    document.getElementById("todayossamount").value = localStorage.getItem("undotodayossamount");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
}
function Back6() {
    Back5();
    basic.style.display = "block";
    store.style.display = "none";
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
    var storename = document.getElementById("storename").value;
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var date = day + "-" + month + "-" + year;
    var todaypaygInput = document.getElementById("todaypayg").value.split(" ");
    var todaypayg = 0;
    for (i = 0; i < todaypaygInput.length; i++) {
        todaypayg += parseInt(todaypaygInput[i]) || 0;
    }
    var achievedpayg = parseInt(document.getElementById("achievedpayg").value) || 0;
    var utdpayg = todaypayg + achievedpayg || 0;
    var targetpayg = parseInt(document.getElementById("targetpayg").value) || 0;
    var todaydataInput = document.getElementById("todaydata").value.split(" ");
    var todaydata = 0;
    for (i = 0; i < todaydataInput.length; i++) {
        todaydata += parseInt(todaydataInput[i]) || 0;
    }
    var achieveddata = parseInt(document.getElementById("achieveddata").value) || 0;
    var utddata = todaydata + achieveddata || 0;
    var targetdata = parseInt(document.getElementById("targetdata").value) || 0;
    var todaykixInput = document.getElementById("todaykix").value.split(" ");
    var todaykix = 0;
    for (i = 0; i < todaykixInput.length; i++) {
        todaykix += parseInt(todaykixInput[i]) || 0;
    }
    var todayskixInput = document.getElementById("todayskix").value.split(" ");
    var todayskix = 0;
    for (i = 0; i < todayskixInput.length; i++) {
        todayskix += parseInt(todayskixInput[i]) || 0;
    }
    var todaytazbeetInput = document.getElementById("todaytazbeet").value.split(" ");
    var todaytazbeet = 0;
    for (i = 0; i < todaytazbeetInput.length; i++) {
        todaytazbeet += parseInt(todaytazbeetInput[i]) || 0;
    }
    var achievedkixandsuper = parseInt(document.getElementById("achievedkixandsuper").value) || 0;
    var utdkixandsuper = todaykix + todayskix + achievedkixandsuper || 0;
    var targetkixandsuper = parseInt(document.getElementById("targetkixandsuper").value) || 0;
    var achievedtaz = parseInt(document.getElementById("achievedtaz").value) || 0;
    var utdtaz = todaytazbeet + achievedtaz || 0;
    var targettaz = parseInt(document.getElementById("targettaz").value) || 0;
    var todayweclubInput = document.getElementById("todayweclub").value.split(" ");
    var todayweclub = 0;
    for (i = 0; i < todayweclubInput.length; i++) {
        todayweclub += parseInt(todayweclubInput[i]) || 0;
    }
    var achievedweclub = parseInt(document.getElementById("achievedweclub").value) || 0;
    var utdweclub = todayweclub + achievedweclub || 0;
    var targetweclub = parseInt(document.getElementById("targetweclub").value) || 0;
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
    var todaybillfixedInput = document.getElementById("todaybillfixed").value.split(" ");
    var todaybillfixed = 0;
    for (i = 0; i < todaybillfixedInput.length; i++) {
        todaybillfixed += parseInt(todaybillfixedInput[i]) || 0;
    }
    var todaybillindigoInput = document.getElementById("todaybillindigo").value.split(" ");
    var todaybillindigo = 0;
    for (i = 0; i < todaybillindigoInput.length; i++) {
        todaybillindigo += parseInt(todaybillindigoInput[i]) || 0;
    }
    var todaybilladslInput = document.getElementById("todaybilladsl").value.split(" ");
    var todaybilladsl = 0;
    for (i = 0; i < todaybilladslInput.length; i++) {
        todaybilladsl += parseInt(todaybilladslInput[i]) || 0;
    }
    var todaysimswapInput = document.getElementById("todaysimswap").value.split(" ");
    var todaysimswap = 0;
    for (i = 0; i < todaysimswapInput.length; i++) {
        todaysimswap += parseInt(todaysimswapInput[i]) || 0;
    }
    var todaybssamountInput = document.getElementById("todaybssamount").value.split(" ");
    var todaybssamount = 0;
    for (i = 0; i < todaybssamountInput.length; i++) {
        todaybssamount += parseInt(todaybssamountInput[i]) || 0;
    }
    var todayossamountInput = document.getElementById("todayossamount").value.split(" ");
    var todayossamount = 0;
    for (i = 0; i < todayossamountInput.length; i++) {
        todayossamount += parseInt(todayossamountInput[i]) || 0;
    }
    var utdmobile = utdpayg + utddata + utdkixandsuper + utdtaz + utdweclub + utdwemix + utdindigo;
    var targetmobile = targetpayg + targetdata + targetkixandsuper + targettaz + targetwemix + targetweclub + targetindigo;
    var dailymobile = todaypayg + todaydata + todaykix + todayskix + todaytazbeet + todayweclub + todaywemix + todayindigo;
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
    var vsMobile = ~~Number(Math.round((utdmobile / targetmobile) * 100)) || 0;
    var vsFixed = ~~Number(Math.round((utdfixed / targetfixed) * 100)) || 0;
    var vsAdsl = ~~Number(Math.round((utdadsl / targetadsl) * 100)) || 0;
    var vsWemix = ~~Number(Math.round((utdwemix / targetwemix) * 100)) || 0;
    var vsIndigo = ~~Number(Math.round((utdindigo / targetindigo) * 100)) || 0;
    if (targetindigo < "10") {
        targetindigoSpace = "      ";
    } else if (targetindigo >= "10" && targetindigo < "100") {
        targetindigoSpace = "     ";
    } else if (targetindigo >= "100" && targetindigo < "1000") {
        targetindigoSpace = "    ";
    } else {
        targetindigoSpace = "   ";
    }
    if (targetwemix < "10") {
        targetwemixSpace = "      ";
    } else if (targetwemix >= "10" && targetwemix < "100") {
        targetwemixSpace = "     ";
    } else if (targetwemix >= "100" && targetwemix < "1000") {
        targetwemixSpace = "    ";
    } else {
        targetwemixSpace = "   ";
    }
    if (targetadsl < "10") {
        targetadslSpace = "      ";
    } else if (targetadsl >= "10" && targetadsl < "100") {
        targetadslSpace = "     ";
    } else if (targetadsl >= "100" && targetadsl < "1000") {
        targetadslSpace = "    ";
    } else {
        targetadslSpace = "   ";
    }
    if (targetfixed < "10") {
        targetfixedSpace = "      ";
    } else if (targetfixed >= "10" && targetfixed < "100") {
        targetfixedSpace = "     ";
    } else if (targetfixed >= "100" && targetfixed < "1000") {
        targetfixedSpace = "    ";
    } else {
        targetfixedSpace = "   ";
    }
    if (targetmobile < "10") {
        targetmobileSpace = "      ";
    } else if (targetmobile >= "10" && targetmobile < "100") {
        targetmobileSpace = "     ";
    } else if (targetmobile >= "100" && targetmobile < "1000") {
        targetmobileSpace = "    ";
    } else {
        targetmobileSpace = "   ";
    }
    if (utdindigo < "10") {
        utdindigoSpace = "       ";
    } else if (utdindigo >= "10" && utdindigo < "100") {
        utdindigoSpace = "      ";
    } else if (utdindigo >= "100" && utdindigo < "1000") {
        utdindigoSpace = "     ";
    } else {
        utdindigoSpace = "    ";
    }
    if (utdwemix < "10") {
        utdwemixSpace = "       ";
    } else if (utdwemix >= "10" && utdwemix < "100") {
        utdwemixSpace = "      ";
    } else if (utdwemix >= "100" && utdwemix < "1000") {
        utdwemixSpace = "     ";
    } else {
        utdwemixSpace = "    ";
    }
    if (utdadsl < "10") {
        utdadslSpace = "       ";
    } else if (utdadsl >= "10" && utdadsl < "100") {
        utdadslSpace = "      ";
    } else if (utdadsl >= "100" && utdadsl < "1000") {
        utdadslSpace = "     ";
    } else {
        utdadslSpace = "    ";
    }
    if (utdfixed < "10") {
        utdfixedSpace = "       ";
    } else if (utdfixed >= "10" && utdfixed < "100") {
        utdfixedSpace = "      ";
    } else if (utdfixed >= "100" && utdfixed < "1000") {
        utdfixedSpace = "     ";
    } else {
        utdfixedSpace = "    ";
    }
    if (utdmobile < "10") {
        utdmobileSpace = "       ";
    } else if (utdmobile >= "10" && utdmobile < "100") {
        utdmobileSpace = "      ";
    } else if (utdmobile >= "100" && utdmobile < "1000") {
        utdmobileSpace = "     ";
    } else {
        utdmobileSpace = "    ";
    }
    document.getElementById("salesreport").value =
        "Store: " +
        storename +
        "\n" +
        "Date: " +
        date +
        "\n" +
        "-------------------------" +
        "\n" +
        "Indigo: " +
        todayindigo +
        "\n" +
        "Payg: " +
        todaypayg +
        "\n" +
        "Data: " +
        todaydata +
        "\n" +
        "Kix: " +
        todaykix +
        "\n" +
        "Super Kix: " +
        todayskix +
        "\n" +
        "Tazbeet: " +
        todaytazbeet +
        "\n" +
        "We Club: " +
        todayweclub +
        "\n" +
        "We Mix: " +
        todaywemix +
        "\n" +
        "ADSL: " +
        todayadsl +
        "\n" +
        "Fixed: " +
        todayfixed +
        "\n" +
        "SIM Swap: " +
        todaysimswap +
        "\n" +
        "ADSL Bills: " +
        todaybilladsl +
        "\n" +
        "Indigo Bills: " +
        todaybillindigo +
        "\n" +
        "Landline Bills: " +
        todaybillfixed +
        "\n" +
        "-------------------------```" +
        "\n" +
        "Today Sales: " +
        dailymobile +
        " Mob" +
        todayadslfordailysales +
        todayfixedfordailysales +
        "\n" +
        "\n" +
        "Products:   T.     Ach.    Per." +
        "\n" +
        "Indigo:     " +
        targetindigo +
        targetindigoSpace +
        utdindigo +
        utdindigoSpace +
        vsIndigo +
        "%" +
        "\n" +
        "We Mix:     " +
        targetwemix +
        targetwemixSpace +
        utdwemix +
        utdwemixSpace +
        vsWemix +
        "%" +
        "\n" +
        "ADSL:       " +
        targetadsl +
        targetadslSpace +
        utdadsl +
        utdadslSpace +
        vsAdsl +
        "%" +
        "\n" +
        "Fixed:      " +
        targetfixed +
        targetfixedSpace +
        utdfixed +
        utdfixedSpace +
        vsFixed +
        "%" +
        "\n" +
        "Target:     " +
        targetmobile +
        targetmobileSpace +
        utdmobile +
        utdmobileSpace +
        vsMobile +
        "%" +
        "\n" +
        "```-------------------------" +
        "\n" +
        "Total BSS: " +
        todaybssamount +
        "\n" +
        "Total OSS: " +
        todayossamount;
    localStorage.setItem("undotodaypayg", document.getElementById("todaypayg").value);
    localStorage.setItem("undotodaydata", document.getElementById("todaydata").value);
    localStorage.setItem("undotodaykix", document.getElementById("todaykix").value);
    localStorage.setItem("undotodayskix", document.getElementById("todayskix").value);
    localStorage.setItem("undotodaytazbeet", document.getElementById("todaytazbeet").value);
    localStorage.setItem("undotodayweclub", document.getElementById("todayweclub").value);
    localStorage.setItem("undotodaywemix", document.getElementById("todaywemix").value);
    localStorage.setItem("undotodayindigo", document.getElementById("todayindigo").value);
    localStorage.setItem("undotodayadsl", document.getElementById("todayadsl").value);
    localStorage.setItem("undotodayfixed", document.getElementById("todayfixed").value);
    localStorage.setItem("undotodaybillfixed", document.getElementById("todaybillfixed").value);
    localStorage.setItem("undotodaybillindigo", document.getElementById("todaybillindigo").value);
    localStorage.setItem("undotodaybilladsl", document.getElementById("todaybilladsl").value);
    localStorage.setItem("undotodaysimswap", document.getElementById("todaysimswap").value);
    localStorage.setItem("undotodaybssamount", document.getElementById("todaybssamount").value);
    localStorage.setItem("undotodayossamount", document.getElementById("todayossamount").value);
    localStorage.setItem("undoachievedpayg", document.getElementById("achievedpayg").value);
    localStorage.setItem("undoachieveddata", document.getElementById("achieveddata").value);
    localStorage.setItem("undoachievedkixandsuper", document.getElementById("achievedkixandsuper").value);
    localStorage.setItem("undoachievedtaz", document.getElementById("achievedtaz").value);
    localStorage.setItem("undoachievedweclub", document.getElementById("achievedweclub").value);
    localStorage.setItem("undoachievedwemix", document.getElementById("achievedwemix").value);
    localStorage.setItem("undoachievedindigo", document.getElementById("achievedindigo").value);
    localStorage.setItem("undoachievedadsl", document.getElementById("achievedadsl").value);
    localStorage.setItem("undoachievedfixed", document.getElementById("achievedfixed").value);
    document.getElementById("achievedpayg").value = utdpayg;
    document.getElementById("todaypayg").value = "";
    document.getElementById("achieveddata").value = utddata;
    document.getElementById("todaydata").value = "";
    document.getElementById("achievedkixandsuper").value = utdkixandsuper;
    document.getElementById("achievedtaz").value = utdtaz;
    document.getElementById("todaykix").value = "";
    document.getElementById("todayskix").value = "";
    document.getElementById("todaytazbeet").value = "";
    document.getElementById("achievedweclub").value = utdweclub;
    document.getElementById("todayweclub").value = "";
    document.getElementById("achievedwemix").value = utdwemix;
    document.getElementById("todaywemix").value = "";
    document.getElementById("achievedindigo").value = utdindigo;
    document.getElementById("todayindigo").value = "";
    document.getElementById("achievedadsl").value = utdadsl;
    document.getElementById("todayadsl").value = "";
    document.getElementById("achievedfixed").value = utdfixed;
    document.getElementById("todayfixed").value = "";
    document.getElementById("todaybillfixed").value = "";
    document.getElementById("todaybillindigo").value = "";
    document.getElementById("todaybilladsl").value = "";
    document.getElementById("todaysimswap").value = "";
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
    var salesreportValue = document.getElementById("salesreport").value;
    navigator.clipboard.writeText(salesreportValue);
    document.getElementById("copy1").disabled = true;
    document.getElementById("copy2").disabled = true;
}
function Share1() {
    var message = window.encodeURIComponent(document.getElementById("salesreport").value);
    var link = "https://api.whatsapp.com/send?text=";
    window.open(link + message);
}
function Save1() {
    let x = parseInt(localStorage.getItem("currentStore"));
    localStorage.setItem("storename.store." + x, document.getElementById("storename").value || "Store " + x);
    localStorage.setItem("achievedpayg.store." + x, document.getElementById("achievedpayg").value);
    localStorage.setItem("targetpayg.store." + x, document.getElementById("targetpayg").value);
    localStorage.setItem("achieveddata.store." + x, document.getElementById("achieveddata").value);
    localStorage.setItem("targetdata.store." + x, document.getElementById("targetdata").value);
    localStorage.setItem("achievedkixandsuper.store." + x, document.getElementById("achievedkixandsuper").value);
    localStorage.setItem("targetkixandsuper.store." + x, document.getElementById("targetkixandsuper").value);
    localStorage.setItem("achievedtaz.store." + x, document.getElementById("achievedtaz").value);
    localStorage.setItem("targettaz.store." + x, document.getElementById("targettaz").value);
    localStorage.setItem("achievedweclub.store." + x, document.getElementById("achievedweclub").value);
    localStorage.setItem("targetweclub.store." + x, document.getElementById("targetweclub").value);
    localStorage.setItem("achievedwemix.store." + x, document.getElementById("achievedwemix").value);
    localStorage.setItem("targetwemix.store." + x, document.getElementById("targetwemix").value);
    localStorage.setItem("achievedindigo.store." + x, document.getElementById("achievedindigo").value);
    localStorage.setItem("targetindigo.store." + x, document.getElementById("targetindigo").value);
    localStorage.setItem("achievedadsl.store." + x, document.getElementById("achievedadsl").value);
    localStorage.setItem("targetadsl.store." + x, document.getElementById("targetadsl").value);
    localStorage.setItem("achievedfixed.store." + x, document.getElementById("achievedfixed").value);
    localStorage.setItem("targetfixed.store." + x, document.getElementById("targetfixed").value);
    document.getElementById("save1").disabled = true;
    document.getElementById("save2").disabled = true;
    localStorage.setItem("storeRestore", "true");
    localStorage.setItem("stores", sessionStorage.getItem("stores"));
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
    window.open("../index.html", "_self");
}
function Print1() {
    doc = window.open("", "_blank");
    doc.document.open();
    doc.document.write("<html><head><title>Sales Report</title><style>body {font-family: monospace;}</style></head><body>");
    doc.document.write(document.getElementById("salesreport").value.replace(/`/gi, "").replace(/ /gi, "&nbsp;").replace(/\n/gi, "<br>"));
    doc.document.write("</body></html>");
    doc.print();
    doc.document.close();
    doc.close();
}
