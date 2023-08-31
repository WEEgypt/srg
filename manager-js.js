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
    document.getElementById("todaykix17").value = "";
    document.getElementById("todaykix25").value = "";
    document.getElementById("todaykix35").value = "";
    document.getElementById("todaykix45").value = "";
    document.getElementById("todaykix75").value = "";
    document.getElementById("todayskix20").value = "";
    document.getElementById("todayskix25").value = "";
    document.getElementById("todayskix35").value = "";
    document.getElementById("todayskix45").value = "";
    document.getElementById("todayskix65").value = "";
    document.getElementById("todayskix80").value = "";
    document.getElementById("todayskix100").value = "";
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
    document.getElementById("todayindigocl").value = "";
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
    document.getElementById("todaykix17").value = "";
    document.getElementById("todaykix25").value = "";
    document.getElementById("todaykix35").value = "";
    document.getElementById("todaykix45").value = "";
    document.getElementById("todaykix75").value = "";
    document.getElementById("todayskix20").value = "";
    document.getElementById("todayskix25").value = "";
    document.getElementById("todayskix35").value = "";
    document.getElementById("todayskix45").value = "";
    document.getElementById("todayskix65").value = "";
    document.getElementById("todayskix80").value = "";
    document.getElementById("todayskix100").value = "";
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
    document.getElementById("todayindigocl").value = "";
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
    document.getElementById("todaykix17").value = "";
    document.getElementById("todaykix25").value = "";
    document.getElementById("todaykix35").value = "";
    document.getElementById("todaykix45").value = "";
    document.getElementById("todaykix75").value = "";
    document.getElementById("todayskix20").value = "";
    document.getElementById("todayskix25").value = "";
    document.getElementById("todayskix35").value = "";
    document.getElementById("todayskix45").value = "";
    document.getElementById("todayskix65").value = "";
    document.getElementById("todayskix80").value = "";
    document.getElementById("todayskix100").value = "";
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
    document.getElementById("todayindigocl").value = "";
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
    document.getElementById("todaykix17").value = localStorage.getItem("undotodaykix17");
    document.getElementById("todaykix25").value = localStorage.getItem("undotodaykix25");
    document.getElementById("todaykix35").value = localStorage.getItem("undotodaykix35");
    document.getElementById("todaykix45").value = localStorage.getItem("undotodaykix45");
    document.getElementById("todaykix75").value = localStorage.getItem("undotodaykix75");
    document.getElementById("todayskix20").value = localStorage.getItem("undotodayskix20");
    document.getElementById("todayskix25").value = localStorage.getItem("undotodayskix25");
    document.getElementById("todayskix35").value = localStorage.getItem("undotodayskix35");
    document.getElementById("todayskix45").value = localStorage.getItem("undotodayskix45");
    document.getElementById("todayskix65").value = localStorage.getItem("undotodayskix65");
    document.getElementById("todayskix80").value = localStorage.getItem("undotodayskix80");
    document.getElementById("todayskix100").value = localStorage.getItem("undotodayskix100");
    document.getElementById("todaytazbeet30").value = localStorage.getItem("undotodaytazbeet30");
    document.getElementById("todaytazbeet40").value = localStorage.getItem("undotodaytazbeet40");
    document.getElementById("todaytazbeet70").value = localStorage.getItem("undotodaytazbeet70");
    document.getElementById("todaytazbeet110").value = localStorage.getItem("undotodaytazbeet110");
    document.getElementById("todayweclub25").value = localStorage.getItem("undotodayweclub25");
    document.getElementById("todayweclub40").value = localStorage.getItem("undotodayweclub40");
    document.getElementById("todayweclub65").value = localStorage.getItem("undotodayweclub65");
    document.getElementById("todayweclub100").value = localStorage.getItem("undotodayweclub100");
    document.getElementById("todaywemix165").value = localStorage.getItem("undotodaywemix165");
    document.getElementById("todaywemix240").value = localStorage.getItem("undotodaywemix240");
    document.getElementById("todayindigofmc").value = localStorage.getItem("undotodayindigofmc");
    document.getElementById("todayindigoopen").value = localStorage.getItem("undotodayindigoopen");
    document.getElementById("todayindigocl").value = localStorage.getItem("undotodayindigocl");
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
    var todaykix17Input = document.getElementById("todaykix17").value.split(" ");
    var todaykix17 = 0;
    for (i = 0; i < todaykix17Input.length; i++) {
        todaykix17 += parseInt(todaykix17Input[i]) || 0;
    }
    var todaykix25Input = document.getElementById("todaykix25").value.split(" ");
    var todaykix25 = 0;
    for (i = 0; i < todaykix25Input.length; i++) {
        todaykix25 += parseInt(todaykix25Input[i]) || 0;
    }
    var todaykix35Input = document.getElementById("todaykix35").value.split(" ");
    var todaykix35 = 0;
    for (i = 0; i < todaykix35Input.length; i++) {
        todaykix35 += parseInt(todaykix35Input[i]) || 0;
    }
    var todaykix45Input = document.getElementById("todaykix45").value.split(" ");
    var todaykix45 = 0;
    for (i = 0; i < todaykix45Input.length; i++) {
        todaykix45 += parseInt(todaykix45Input[i]) || 0;
    }
    var todaykix75Input = document.getElementById("todaykix75").value.split(" ");
    var todaykix75 = 0;
    for (i = 0; i < todaykix75Input.length; i++) {
        todaykix75 += parseInt(todaykix75Input[i]) || 0;
    }
    var todaykix = todaykix17 + todaykix25 + todaykix35 + todaykix45 + todaykix75 || 0;
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
    var todaykixreport = todaykix17report + todaykix25report + todaykix35report + todaykix45report + todaykix75report || 0;
    var todayskix20Input = document.getElementById("todayskix20").value.split(" ");
    var todayskix20 = 0;
    for (i = 0; i < todayskix20Input.length; i++) {
        todayskix20 += parseInt(todayskix20Input[i]) || 0;
    }
    var todayskix25Input = document.getElementById("todayskix25").value.split(" ");
    var todayskix25 = 0;
    for (i = 0; i < todayskix25Input.length; i++) {
        todayskix25 += parseInt(todayskix25Input[i]) || 0;
    }
    var todayskix35Input = document.getElementById("todayskix35").value.split(" ");
    var todayskix35 = 0;
    for (i = 0; i < todayskix35Input.length; i++) {
        todayskix35 += parseInt(todayskix35Input[i]) || 0;
    }
    var todayskix45Input = document.getElementById("todayskix45").value.split(" ");
    var todayskix45 = 0;
    for (i = 0; i < todayskix45Input.length; i++) {
        todayskix45 += parseInt(todayskix45Input[i]) || 0;
    }
    var todayskix65Input = document.getElementById("todayskix65").value.split(" ");
    var todayskix65 = 0;
    for (i = 0; i < todayskix65Input.length; i++) {
        todayskix65 += parseInt(todayskix65Input[i]) || 0;
    }
    var todayskix80Input = document.getElementById("todayskix80").value.split(" ");
    var todayskix80 = 0;
    for (i = 0; i < todayskix80Input.length; i++) {
        todayskix80 += parseInt(todayskix80Input[i]) || 0;
    }
    var todayskix100Input = document.getElementById("todayskix100").value.split(" ");
    var todayskix100 = 0;
    for (i = 0; i < todayskix100Input.length; i++) {
        todayskix100 += parseInt(todayskix100Input[i]) || 0;
    }
    var todayskix = todayskix20 + todayskix25 + todayskix35 + todayskix45 + todayskix65 + todayskix80 + todayskix100 || 0;
    if (todayskix20 == "0") {
        var todayskix20report = "";
    } else {
        var todayskix20report = todayskix20 + "*20 ";
    }
    if (todayskix25 == "0") {
        var todayskix25report = "";
    } else {
        var todayskix25report = todayskix25 + "*25 ";
    }
    if (todayskix35 == "0") {
        var todayskix35report = "";
    } else {
        var todayskix35report = todayskix35 + "*35 ";
    }
    if (todayskix45 == "0") {
        var todayskix45report = "";
    } else {
        var todayskix45report = todayskix45 + "*45 ";
    }
    if (todayskix65 == "0") {
        var todayskix65report = "";
    } else {
        var todayskix65report = todayskix65 + "*65 ";
    }
    if (todayskix80 == "0") {
        var todayskix80report = "";
    } else {
        var todayskix80report = todayskix80 + "*80 ";
    }
    if (todayskix100 == "0") {
        var todayskix100report = "";
    } else {
        var todayskix100report = todayskix100 + "*100 ";
    }
    var todayskixreport = todayskix20report + todayskix25report + todayskix35report + todayskix45report + todayskix65report + todayskix80report + todayskix100report || 0;
    var todaytazbeet30Input = document.getElementById("todaytazbeet30").value.split(" ");
    var todaytazbeet30 = 0;
    for (i = 0; i < todaytazbeet30Input.length; i++) {
        todaytazbeet30 += parseInt(todaytazbeet30Input[i]) || 0;
    }
    var todaytazbeet40Input = document.getElementById("todaytazbeet40").value.split(" ");
    var todaytazbeet40 = 0;
    for (i = 0; i < todaytazbeet40Input.length; i++) {
        todaytazbeet40 += parseInt(todaytazbeet40Input[i]) || 0;
    }
    var todaytazbeet70Input = document.getElementById("todaytazbeet70").value.split(" ");
    var todaytazbeet70 = 0;
    for (i = 0; i < todaytazbeet70Input.length; i++) {
        todaytazbeet70 += parseInt(todaytazbeet70Input[i]) || 0;
    }
    var todaytazbeet110Input = document.getElementById("todaytazbeet110").value.split(" ");
    var todaytazbeet110 = 0;
    for (i = 0; i < todaytazbeet110Input.length; i++) {
        todaytazbeet110 += parseInt(todaytazbeet110Input[i]) || 0;
    }
    var todaytazbeet = todaytazbeet30 + todaytazbeet40 + todaytazbeet70 + todaytazbeet110 || 0;
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
    var todaytazbeetreport = todaytazbeet30report + todaytazbeet40report + todaytazbeet70report + todaytazbeet110report || 0;
    var achievedkixandsuper = parseInt(document.getElementById("achievedkixandsuper").value) || 0;
    var utdkixandsuper = todaykix + todayskix + achievedkixandsuper || 0;
    var targetkixandsuper = parseInt(document.getElementById("targetkixandsuper").value) || 0;
    var achievedtaz = parseInt(document.getElementById("achievedtaz").value) || 0;
    var utdtaz = todaytazbeet + achievedtaz || 0;
    var targettaz = parseInt(document.getElementById("targettaz").value) || 0;
    var todayweclub25Input = document.getElementById("todayweclub25").value.split(" ");
    var todayweclub25 = 0;
    for (i = 0; i < todayweclub25Input.length; i++) {
        todayweclub25 += parseInt(todayweclub25Input[i]) || 0;
    }
    var todayweclub40Input = document.getElementById("todayweclub40").value.split(" ");
    var todayweclub40 = 0;
    for (i = 0; i < todayweclub40Input.length; i++) {
        todayweclub40 += parseInt(todayweclub40Input[i]) || 0;
    }
    var todayweclub65Input = document.getElementById("todayweclub65").value.split(" ");
    var todayweclub65 = 0;
    for (i = 0; i < todayweclub65Input.length; i++) {
        todayweclub65 += parseInt(todayweclub65Input[i]) || 0;
    }
    var todayweclub100Input = document.getElementById("todayweclub100").value.split(" ");
    var todayweclub100 = 0;
    for (i = 0; i < todayweclub100Input.length; i++) {
        todayweclub100 += parseInt(todayweclub100Input[i]) || 0;
    }
    var todayweclub = todayweclub25 + todayweclub40 + todayweclub65 + todayweclub100 || 0;
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
    var todayweclubreport = todayweclub25report + todayweclub40report + todayweclub65report + todayweclub100report || 0;
    var achievedweclub = parseInt(document.getElementById("achievedweclub").value) || 0;
    var utdweclub = todayweclub + achievedweclub || 0;
    var targetweclub = parseInt(document.getElementById("targetweclub").value) || 0;
    var todaywemix165Input = document.getElementById("todaywemix165").value.split(" ");
    var todaywemix165 = 0;
    for (i = 0; i < todaywemix165Input.length; i++) {
        todaywemix165 += parseInt(todaywemix165Input[i]) || 0;
    }
    var todaywemix240Input = document.getElementById("todaywemix240").value.split(" ");
    var todaywemix240 = 0;
    for (i = 0; i < todaywemix240Input.length; i++) {
        todaywemix240 += parseInt(todaywemix240Input[i]) || 0;
    }
    var todaywemix = todaywemix165 + todaywemix240 || 0;
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
    var todaywemixreport = todaywemix165report + todaywemix240report || 0;
    var achievedwemix = parseInt(document.getElementById("achievedwemix").value) || 0;
    var utdwemix = todaywemix + achievedwemix || 0;
    var targetwemix = parseInt(document.getElementById("targetwemix").value) || 0;
    var todayindigofmcInput = document.getElementById("todayindigofmc").value.split(" ");
    var todayindigofmc = 0;
    for (i = 0; i < todayindigofmcInput.length; i++) {
        todayindigofmc += parseInt(todayindigofmcInput[i]) || 0;
    }
    var todayindigoopenInput = document.getElementById("todayindigoopen").value.split(" ");
    var todayindigoopen = 0;
    for (i = 0; i < todayindigoopenInput.length; i++) {
        todayindigoopen += parseInt(todayindigoopenInput[i]) || 0;
    }
    var todayindigoclInput = document.getElementById("todayindigocl").value.split(" ");
    var todayindigocl = 0;
    for (i = 0; i < todayindigoclInput.length; i++) {
        todayindigocl += parseInt(todayindigoclInput[i]) || 0;
    }
    var todayindigo = todayindigofmc + todayindigoopen + todayindigocl || 0;
    if (todayindigofmc == "0") {
        var todayindigofmcreport = "";
    } else {
        var todayindigofmcreport = todayindigofmc + "*FMC ";
    }
    if (todayindigoopen == "0") {
        var todayindigoopenreport = "";
    } else {
        var todayindigoopenreport = todayindigoopen + "*Open ";
    }
    if (todayindigocl == "0") {
        var todayindigoclreport = "";
    } else {
        var todayindigoclreport = todayindigocl + "*CL ";
    }
    var todayindigoreport = todayindigofmcreport + todayindigoopenreport + todayindigoclreport || 0;
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
    } else if (targetindigo >= "1000" && targetindigo < "10000") {
        targetindigoSpace = "   ";
    } else if (targetindigo >= "10000" && targetindigo < "100000") {
        targetindigoSpace = "  ";
    } else {
        targetindigoSpace = " ";
    }
    if (targetwemix < "10") {
        targetwemixSpace = "      ";
    } else if (targetwemix >= "10" && targetwemix < "100") {
        targetwemixSpace = "     ";
    } else if (targetwemix >= "100" && targetwemix < "1000") {
        targetwemixSpace = "    ";
    } else if (targetwemix >= "1000" && targetwemix < "10000") {
        targetwemixSpace = "   ";
    } else if (targetwemix >= "10000" && targetwemix < "100000") {
        targetwemixSpace = "  ";
    } else {
        targetwemixSpace = " ";
    }
    if (targetadsl < "10") {
        targetadslSpace = "      ";
    } else if (targetadsl >= "10" && targetadsl < "100") {
        targetadslSpace = "     ";
    } else if (targetadsl >= "100" && targetadsl < "1000") {
        targetadslSpace = "    ";
    } else if (targetadsl >= "1000" && targetadsl < "10000") {
        targetadslSpace = "   ";
    } else if (targetadsl >= "10000" && targetadsl < "100000") {
        targetadslSpace = "  ";
    } else {
        targetadslSpace = " ";
    }
    if (targetfixed < "10") {
        targetfixedSpace = "      ";
    } else if (targetfixed >= "10" && targetfixed < "100") {
        targetfixedSpace = "     ";
    } else if (targetfixed >= "100" && targetfixed < "1000") {
        targetfixedSpace = "    ";
    } else if (targetfixed >= "1000" && targetfixed < "10000") {
        targetfixedSpace = "   ";
    } else if (targetfixed >= "10000" && targetfixed < "100000") {
        targetfixedSpace = "  ";
    } else {
        targetfixedSpace = " ";
    }
    if (targetmobile < "10") {
        targetmobileSpace = "      ";
    } else if (targetmobile >= "10" && targetmobile < "100") {
        targetmobileSpace = "     ";
    } else if (targetmobile >= "100" && targetmobile < "1000") {
        targetmobileSpace = "    ";
    } else if (targetmobile >= "1000" && targetmobile < "10000") {
        targetmobileSpace = "   ";
    } else if (targetmobile >= "10000" && targetmobile < "100000") {
        targetmobileSpace = "  ";
    } else {
        targetmobileSpace = " ";
    }
    if (utdindigo < "10") {
        utdindigoSpace = "      ";
    } else if (utdindigo >= "10" && utdindigo < "100") {
        utdindigoSpace = "     ";
    } else if (utdindigo >= "100" && utdindigo < "1000") {
        utdindigoSpace = "    ";
    } else if (utdindigo >= "1000" && utdindigo < "10000") {
        utdindigoSpace = "   ";
    } else if (utdindigo >= "10000" && utdindigo < "100000") {
        utdindigoSpace = "  ";
    } else {
        utdindigoSpace = " ";
    }
    if (utdwemix < "10") {
        utdwemixSpace = "      ";
    } else if (utdwemix >= "10" && utdwemix < "100") {
        utdwemixSpace = "     ";
    } else if (utdwemix >= "100" && utdwemix < "1000") {
        utdwemixSpace = "    ";
    } else if (utdwemix >= "1000" && utdwemix < "10000") {
        utdwemixSpace = "   ";
    } else if (utdwemix >= "10000" && utdwemix < "100000") {
        utdwemixSpace = "  ";
    } else {
        utdwemixSpace = " ";
    }
    if (utdadsl < "10") {
        utdadslSpace = "      ";
    } else if (utdadsl >= "10" && utdadsl < "100") {
        utdadslSpace = "     ";
    } else if (utdadsl >= "100" && utdadsl < "1000") {
        utdadslSpace = "    ";
    } else if (utdadsl >= "1000" && utdadsl < "10000") {
        utdadslSpace = "   ";
    } else if (utdadsl >= "10000" && utdadsl < "100000") {
        utdadslSpace = "  ";
    } else {
        utdadslSpace = " ";
    }
    if (utdfixed < "10") {
        utdfixedSpace = "      ";
    } else if (utdfixed >= "10" && utdfixed < "100") {
        utdfixedSpace = "     ";
    } else if (utdfixed >= "100" && utdfixed < "1000") {
        utdfixedSpace = "    ";
    } else if (utdfixed >= "1000" && utdfixed < "10000") {
        utdfixedSpace = "   ";
    } else if (utdfixed >= "10000" && utdfixed < "100000") {
        utdfixedSpace = "  ";
    } else {
        utdfixedSpace = " ";
    }
    if (utdmobile < "10") {
        utdmobileSpace = "      ";
    } else if (utdmobile >= "10" && utdmobile < "100") {
        utdmobileSpace = "     ";
    } else if (utdmobile >= "100" && utdmobile < "1000") {
        utdmobileSpace = "    ";
    } else if (utdmobile >= "1000" && utdmobile < "10000") {
        utdmobileSpace = "   ";
    } else if (utdmobile >= "10000" && utdmobile < "100000") {
        utdmobileSpace = "  ";
    } else {
        utdmobileSpace = " ";
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
        todayindigoreport +
        "\n" +
        "PAYG: " +
        todaypayg +
        "\n" +
        "Data: " +
        todaydata +
        "\n" +
        "Kix: " +
        todaykixreport +
        "\n" +
        "Super Kix: " +
        todayskixreport +
        "\n" +
        "Tazbeet: " +
        todaytazbeetreport +
        "\n" +
        "We Club: " +
        todayweclubreport +
        "\n" +
        "We Mix: " +
        todaywemixreport +
        "\n" +
        "ADSL: " +
        todayadsl +
        "\n" +
        "Fixed: " +
        todayfixed +
        "\n" +
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
        "SIM Swap: " +
        todaysimswap +
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
        "Products:   T.     Ach.   Per." +
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
    localStorage.setItem("undotodaykix17", document.getElementById("todaykix17").value);
    localStorage.setItem("undotodaykix25", document.getElementById("todaykix25").value);
    localStorage.setItem("undotodaykix35", document.getElementById("todaykix35").value);
    localStorage.setItem("undotodaykix45", document.getElementById("todaykix45").value);
    localStorage.setItem("undotodaykix75", document.getElementById("todaykix75").value);
    localStorage.setItem("undotodayskix20", document.getElementById("todayskix20").value);
    localStorage.setItem("undotodayskix25", document.getElementById("todayskix25").value);
    localStorage.setItem("undotodayskix35", document.getElementById("todayskix35").value);
    localStorage.setItem("undotodayskix45", document.getElementById("todayskix45").value);
    localStorage.setItem("undotodayskix65", document.getElementById("todayskix65").value);
    localStorage.setItem("undotodayskix80", document.getElementById("todayskix80").value);
    localStorage.setItem("undotodayskix100", document.getElementById("todayskix100").value);
    localStorage.setItem("undotodaytazbeet30", document.getElementById("todaytazbeet30").value);
    localStorage.setItem("undotodaytazbeet40", document.getElementById("todaytazbeet40").value);
    localStorage.setItem("undotodaytazbeet70", document.getElementById("todaytazbeet70").value);
    localStorage.setItem("undotodaytazbeet110", document.getElementById("todaytazbeet110").value);
    localStorage.setItem("undotodayweclub25", document.getElementById("todayweclub25").value);
    localStorage.setItem("undotodayweclub40", document.getElementById("todayweclub40").value);
    localStorage.setItem("undotodayweclub65", document.getElementById("todayweclub65").value);
    localStorage.setItem("undotodayweclub100", document.getElementById("todayweclub100").value);
    localStorage.setItem("undotodaywemix165", document.getElementById("todaywemix165").value);
    localStorage.setItem("undotodaywemix240", document.getElementById("todaywemix240").value);
    localStorage.setItem("undotodayindigofmc", document.getElementById("todayindigofmc").value);
    localStorage.setItem("undotodayindigoopen", document.getElementById("todayindigoopen").value);
    localStorage.setItem("undotodayindigocl", document.getElementById("todayindigocl").value);
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
    document.getElementById("todaykix17").value = "";
    document.getElementById("todaykix25").value = "";
    document.getElementById("todaykix35").value = "";
    document.getElementById("todaykix45").value = "";
    document.getElementById("todaykix75").value = "";
    document.getElementById("todayskix20").value = "";
    document.getElementById("todayskix25").value = "";
    document.getElementById("todayskix35").value = "";
    document.getElementById("todayskix45").value = "";
    document.getElementById("todayskix65").value = "";
    document.getElementById("todayskix80").value = "";
    document.getElementById("todayskix100").value = "";
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
    document.getElementById("todayindigocl").value = "";
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
    window.open("index.html", "_self");
}
function Print1() {
    doc = window.open("", "_blank");
    doc.document.open();
    doc.document.write("<html lang=en><head><title>Sales Report</title><style>body {font-family: monospace; display: flex;} div {margin: 0px auto 0px auto;}</style></head><body onload=window.print();setTimeout(window.close,1000);><div>");
    doc.document.write(document.getElementById("salesreport").value.replace(/`/gi, "").replace(/  /gi, "&nbsp;&nbsp;").replace(/\n/gi, "<br>"));
    doc.document.write("</div></body></html>");
    doc.document.close();
}
