function EnableRestore() {
    if (localStorage.getItem("storename") !== null) {
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
    store.style.display = "none";
    manager.style.display = "none";
    row1.style.display = "none";
    row2.style.display = "none";
    today.style.display = "block";
    document.getElementById("storename").value = localStorage.getItem("storename");
    document.getElementById("yourname").value = localStorage.getItem("yourname");
    document.getElementById("achievedpayg").value = localStorage.getItem("achievedpayg");
    document.getElementById("targetpayg").value = localStorage.getItem("targetpayg");
    document.getElementById("achieveddata").value = localStorage.getItem("achieveddata");
    document.getElementById("targetdata").value = localStorage.getItem("targetdata");
    document.getElementById("achievedkixtaz").value = localStorage.getItem("achievedkixtaz");
    document.getElementById("targetkixtaz").value = localStorage.getItem("targetkixtaz");
    document.getElementById("achievedahlaweya").value = localStorage.getItem("achievedahlaweya");
    document.getElementById("targetahlaweya").value = localStorage.getItem("targetahlaweya");
    document.getElementById("achievedweclub").value = localStorage.getItem("achievedweclub");
    document.getElementById("targetweclub").value = localStorage.getItem("targetweclub");
    document.getElementById("achievedwemix").value = localStorage.getItem("achievedwemix");
    document.getElementById("targetwemix").value = localStorage.getItem("targetwemix");
    document.getElementById("achievedindigo").value = localStorage.getItem("achievedindigo");
    document.getElementById("targetindigo").value = localStorage.getItem("targetindigo");
    document.getElementById("achievedtkafol").value = localStorage.getItem("achievedtkafol");
    document.getElementById("achievedadsl").value = localStorage.getItem("achievedadsl");
    document.getElementById("targetadsl").value = localStorage.getItem("targetadsl");
    document.getElementById("achievedfixed").value = localStorage.getItem("achievedfixed");
    document.getElementById("targetfixed").value = localStorage.getItem("targetfixed");
    document.getElementById("achievedmifi").value = localStorage.getItem("achievedmifi");
    document.getElementById("targetmifi").value = localStorage.getItem("targetmifi");
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
    document.getElementById("todayahlaweya30").value = "";
    document.getElementById("todayahlaweya50").value = "";
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
    document.getElementById("todaytransactions").value = "";
    document.getElementById("todaybillfixed").value = "";
    document.getElementById("todaybillindigo").value = "";
    document.getElementById("todaybilladsl").value = "";
    document.getElementById("todaysimswap").value = "";
    document.getElementById("todaymnp").value = "";
    document.getElementById("todaybssamount").value = "";
    document.getElementById("todayetuamount").value = "";
    document.getElementById("todayossamount").value = "";
    NextTransform();
}
function NewMonth() {
    restore.style.display = "none";
    basic.style.display = "block";
    document.getElementById("storename").value = "";
    document.getElementById("yourname").value = "";
    document.getElementById("achievedpayg").value = "";
    document.getElementById("targetpayg").value = "";
    document.getElementById("achieveddata").value = "";
    document.getElementById("targetdata").value = "";
    document.getElementById("achievedkixtaz").value = "";
    document.getElementById("targetkixtaz").value = "";
    document.getElementById("achievedahlaweya").value = "";
    document.getElementById("targetahlaweya").value = "";
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
    document.getElementById("todayahlaweya30").value = "";
    document.getElementById("todayahlaweya50").value = "";
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
    document.getElementById("todaytransactions").value = "";
    document.getElementById("todaybillfixed").value = "";
    document.getElementById("todaybillindigo").value = "";
    document.getElementById("todaybilladsl").value = "";
    document.getElementById("todaysimswap").value = "";
    document.getElementById("todaymnp").value = "";
    document.getElementById("todaybssamount").value = "";
    document.getElementById("todayetuamount").value = "";
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
        store.style.display = "block";
        manager.style.display = "block";
    }
    if (localStorage.getItem("storename") !== null) {
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
    document.getElementById("achievedkixtaz").value = localStorage.getItem("undoachievedkixtaz");
    document.getElementById("achievedahlaweya").value = localStorage.getItem("undoachievedahlaweya");
    document.getElementById("achievedweclub").value = localStorage.getItem("undoachievedweclub");
    document.getElementById("achievedwemix").value = localStorage.getItem("undoachievedwemix");
    document.getElementById("achievedindigo").value = localStorage.getItem("undoachievedindigo");
    document.getElementById("achievedtkafol").value = localStorage.getItem("undoachievedtkafol");
    document.getElementById("achievedadsl").value = localStorage.getItem("undoachievedadsl");
    document.getElementById("achievedfixed").value = localStorage.getItem("undoachievedfixed");
    document.getElementById("achievedmifi").value = localStorage.getItem("undoachievedmifi");
    document.getElementById("todaypayg").value = localStorage.getItem("undotodaypayg");
    document.getElementById("todaydata").value = localStorage.getItem("undotodaydata");
    document.getElementById("todaykix17").value = localStorage.getItem("undotodaykix17");
    document.getElementById("todaykix25").value = localStorage.getItem("undotodaykix25");
    document.getElementById("todaykix35").value = localStorage.getItem("undotodaykix35");
    document.getElementById("todaykix45").value = localStorage.getItem("undotodaykix45");
    document.getElementById("todaykix75").value = localStorage.getItem("undotodaykix75");
    document.getElementById("todaytazbeet30").value = localStorage.getItem("undotodaytazbeet30");
    document.getElementById("todaytazbeet40").value = localStorage.getItem("undotodaytazbeet40");
    document.getElementById("todaytazbeet70").value = localStorage.getItem("undotodaytazbeet70");
    document.getElementById("todaytazbeet110").value = localStorage.getItem("undotodaytazbeet110");
    document.getElementById("todayahlaweya30").value = localStorage.getItem("undotodayahlaweya30");
    document.getElementById("todayahlaweya50").value = localStorage.getItem("undotodayahlaweya50");
    document.getElementById("todayweclub25").value = localStorage.getItem("undotodayweclub25");
    document.getElementById("todayweclub40").value = localStorage.getItem("undotodayweclub40");
    document.getElementById("todayweclub65").value = localStorage.getItem("undotodayweclub65");
    document.getElementById("todayweclub100").value = localStorage.getItem("undotodayweclub100");
    document.getElementById("todaywemix165").value = localStorage.getItem("undotodaywemix165");
    document.getElementById("todaywemix240").value = localStorage.getItem("undotodaywemix240");
    document.getElementById("todayindigofmc").value = localStorage.getItem("undotodayindigofmc");
    document.getElementById("todayindigoopen").value = localStorage.getItem("undotodayindigoopen");
    document.getElementById("todaytkafol").value = localStorage.getItem("undotodaytkafol");
    document.getElementById("todayadsl").value = localStorage.getItem("undotodayadsl");
    document.getElementById("todayfixed").value = localStorage.getItem("undotodayfixed");
    document.getElementById("todaymifi").value = localStorage.getItem("undotodaymifi");
    document.getElementById("todaytransactions").value = localStorage.getItem("undotodaytransactions");
    document.getElementById("todaybillfixed").value = localStorage.getItem("undotodaybillfixed");
    document.getElementById("todaybillindigo").value = localStorage.getItem("undotodaybillindigo");
    document.getElementById("todaybilladsl").value = localStorage.getItem("undotodaybilladsl");
    document.getElementById("todaysimswap").value = localStorage.getItem("undotodaysimswap");
    document.getElementById("todaymnp").value = localStorage.getItem("undotodaymnp");
    document.getElementById("todaybssamount").value = localStorage.getItem("undotodaybssamount");
    document.getElementById("todayetuamount").value = localStorage.getItem("undotodayetuamount");
    document.getElementById("todayossamount").value = localStorage.getItem("undotodayossamount");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
}
function Back6() {
    Back5();
    basic.style.display = "block";
    store.style.display = "none";
    manager.style.display = "none";
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
    var yourname = document.getElementById("yourname").value;
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var date = day + "-" + month + "-" + year;
    var daysinmonth = new Date(year, month, 0).getDate();
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
    var achievedkixtaz = parseInt(document.getElementById("achievedkixtaz").value) || 0;
    var utdkixtaz = todaykix17 + todaykix25 + todaykix35 + todaykix45 + todaykix75 + todaytazbeet30 + todaytazbeet40 + todaytazbeet70 + todaytazbeet110 + achievedkixtaz || 0;
    var targetkixtaz = parseInt(document.getElementById("targetkixtaz").value) || 0;
    var todayahlaweya30Input = document.getElementById("todayahlaweya30").value.split(" ");
    var todayahlaweya30 = 0;
    for (i = 0; i < todayahlaweya30Input.length; i++) {
        todayahlaweya30 += parseInt(todayahlaweya30Input[i]) || 0;
    }
    var todayahlaweya50Input = document.getElementById("todayahlaweya50").value.split(" ");
    var todayahlaweya50 = 0;
    for (i = 0; i < todayahlaweya50Input.length; i++) {
        todayahlaweya50 += parseInt(todayahlaweya50Input[i]) || 0;
    }
    var achievedahlaweya = parseInt(document.getElementById("achievedahlaweya").value) || 0;
    var utdahlaweya = todayahlaweya30 + todayahlaweya50 + achievedahlaweya || 0;
    var targetahlaweya = parseInt(document.getElementById("targetahlaweya").value) || 0;
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
    var achievedweclub = parseInt(document.getElementById("achievedweclub").value) || 0;
    var utdweclub = todayweclub25 + todayweclub40 + todayweclub65 + todayweclub100 + achievedweclub || 0;
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
    var achievedwemix = parseInt(document.getElementById("achievedwemix").value) || 0;
    var utdwemix = todaywemix165 + todaywemix240 + achievedwemix || 0;
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
    var achievedindigo = parseInt(document.getElementById("achievedindigo").value) || 0;
    var utdindigo = todayindigofmc + todayindigoopen + achievedindigo || 0;
    var targetindigo = parseInt(document.getElementById("targetindigo").value) || 0;
    var todaytkafolInput = document.getElementById("todaytkafol").value.split(" ");
    var todaytkafol = 0;
    for (i = 0; i < todaytkafolInput.length; i++) {
        todaytkafol += parseInt(todaytkafolInput[i]) || 0;
    }
    var achievedtkafol = parseInt(document.getElementById("achievedtkafol").value) || 0;
    var utdtkafol = todaytkafol + achievedtkafol || 0;
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
    var todaymifiInput = document.getElementById("todaymifi").value.split(" ");
    var todaymifi = 0;
    for (i = 0; i < todaymifiInput.length; i++) {
        todaymifi += parseInt(todaymifiInput[i]) || 0;
    }
    var achievedmifi = parseInt(document.getElementById("achievedmifi").value) || 0;
    var utdmifi = todaymifi + achievedmifi || 0;
    var targetmifi = parseInt(document.getElementById("targetmifi").value) || 0;
    var todaytransactionsInput = document.getElementById("todaytransactions").value.split(" ");
    var todaytransactions = 0;
    for (i = 0; i < todaytransactionsInput.length; i++) {
        todaytransactions += parseInt(todaytransactionsInput[i]) || 0;
    }
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
    var todaymnpInput = document.getElementById("todaymnp").value.split(" ");
    var todaymnp = 0;
    for (i = 0; i < todaymnpInput.length; i++) {
        todaymnp += parseInt(todaymnpInput[i]) || 0;
    }
    var todaybssamountInput = document.getElementById("todaybssamount").value.split(" ");
    var todaybssamount = 0;
    for (i = 0; i < todaybssamountInput.length; i++) {
        todaybssamount += parseInt(todaybssamountInput[i]) || 0;
    }
    var todayetuamountInput = document.getElementById("todayetuamount").value.split(" ");
    var todayetuamount = 0;
    for (i = 0; i < todayetuamountInput.length; i++) {
        todayetuamount += parseInt(todayetuamountInput[i]) || 0;
    }
    var todayossamountInput = document.getElementById("todayossamount").value.split(" ");
    var todayossamount = 0;
    for (i = 0; i < todayossamountInput.length; i++) {
        todayossamount += parseInt(todayossamountInput[i]) || 0;
    }
    var utdmobile = utdpayg + utddata + utdkixtaz + utdahlaweya + utdweclub + utdwemix + utdindigo;
    var targetmobile = targetpayg + targetdata + targetkixtaz + targetwemix + targetahlaweya + targetweclub + targetindigo;
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
        todayahlaweya30 +
        todayahlaweya50 +
        todayweclub25 +
        todayweclub40 +
        todayweclub65 +
        todayweclub100 +
        todaywemix165 +
        todaywemix240 +
        todayindigofmc +
        todayindigoopen;
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
    if (todayahlaweya30 == "0") {
        var todayahlaweya30report = "";
    } else {
        var todayahlaweya30report = todayahlaweya30 + "*30 ";
    }
    if (todayahlaweya50 == "0") {
        var todayahlaweya50report = "";
    } else {
        var todayahlaweya50report = todayahlaweya50 + "*50 ";
    }
    var todayahlaweyareport = todayahlaweya30report + todayahlaweya50report;
    if (todayahlaweyareport == "") {
        var ahlaweyareport = "0";
    } else {
        var ahlaweyareport = todayahlaweyareport;
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
    var vsMobile = ~~Number(Math.round((utdmobile / targetmobile) * 100)) || 0;
    var reMobile = ~~Number(Math.round((((utdmobile / targetmobile) * 100) / day) * daysinmonth)) || 0;

    var vsIndigo = ~~Number(Math.round((utdindigo / targetindigo) * 100)) || 0;
    var reIndigo = ~~Number(Math.round((((utdindigo / targetindigo) * 100) / day) * daysinmonth)) || 0;
    document.getElementById("salesreport").value =
        "Date: " +
        date +
        "\n" +
        "Store: " +
        storename +
        "\n" +
        "Name: " +
        yourname +
        "\n" +
        "------------------------- " +
        "\n" +
        "Mobile: " +
        targetmobile +
        "/" +
        utdmobile +
        " (V.S:" +
        vsMobile +
        "%)" +
        " (R.E:" +
        reMobile +
        "%)" +
        "\n" +
        "Indigo: " +
        targetindigo +
        "/" +
        utdindigo +
        " (V.S:" +
        vsIndigo +
        "%)" +
        " (R.E:" +
        reIndigo +
        "%)" +
        "\n" +
        "Kix+Taz: " +
        targetkixtaz +
        "/" +
        utdkixtaz +
        "\n" +
        "PAYG: " +
        targetpayg +
        "/" +
        utdpayg +
        "\n" +
        "Data: " +
        targetdata +
        "/" +
        utddata +
        "\n" +
        "Ahlaweya: " +
        targetahlaweya +
        "/" +
        utdahlaweya +
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
        utdmifi +
        "\n" +
        "------------------------- " +
        "\n" +
        "Daily Sales: " +
        dailymobile +
        " Mob" +
        todayadslfordailysales +
        todayfixedfordailysales +
        todaymififordailysales +
        "\n" +
        "Daily Required: " +
        dailyrequiredreport +
        "\n" +
        "------------------------- " +
        "\n" +
        "Lines" +
        "\n" +
        "PAYG: " +
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
        "Ahlaweya: " +
        ahlaweyareport +
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
        "\n" +
        "Broadband" +
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
        "Report" +
        "\n" +
        "Transactions: " +
        todaytransactions +
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
        "ETU Amount: " +
        todayetuamount +
        "\n" +
        "OSS Amount: " +
        todayossamount;
    localStorage.setItem("undotodaypayg", document.getElementById("todaypayg").value);
    localStorage.setItem("undotodaydata", document.getElementById("todaydata").value);
    localStorage.setItem("undotodaykix17", document.getElementById("todaykix17").value);
    localStorage.setItem("undotodaykix25", document.getElementById("todaykix25").value);
    localStorage.setItem("undotodaykix35", document.getElementById("todaykix35").value);
    localStorage.setItem("undotodaykix45", document.getElementById("todaykix45").value);
    localStorage.setItem("undotodaykix75", document.getElementById("todaykix75").value);
    localStorage.setItem("undotodaytazbeet30", document.getElementById("todaytazbeet30").value);
    localStorage.setItem("undotodaytazbeet40", document.getElementById("todaytazbeet40").value);
    localStorage.setItem("undotodaytazbeet70", document.getElementById("todaytazbeet70").value);
    localStorage.setItem("undotodaytazbeet110", document.getElementById("todaytazbeet110").value);
    localStorage.setItem("undotodayahlaweya30", document.getElementById("todayahlaweya30").value);
    localStorage.setItem("undotodayahlaweya50", document.getElementById("todayahlaweya50").value);
    localStorage.setItem("undotodayweclub25", document.getElementById("todayweclub25").value);
    localStorage.setItem("undotodayweclub40", document.getElementById("todayweclub40").value);
    localStorage.setItem("undotodayweclub65", document.getElementById("todayweclub65").value);
    localStorage.setItem("undotodayweclub100", document.getElementById("todayweclub100").value);
    localStorage.setItem("undotodaywemix165", document.getElementById("todaywemix165").value);
    localStorage.setItem("undotodaywemix240", document.getElementById("todaywemix240").value);
    localStorage.setItem("undotodayindigofmc", document.getElementById("todayindigofmc").value);
    localStorage.setItem("undotodayindigoopen", document.getElementById("todayindigoopen").value);
    localStorage.setItem("undotodaytkafol", document.getElementById("todaytkafol").value);
    localStorage.setItem("undotodayadsl", document.getElementById("todayadsl").value);
    localStorage.setItem("undotodayfixed", document.getElementById("todayfixed").value);
    localStorage.setItem("undotodaymifi", document.getElementById("todaymifi").value);
    localStorage.setItem("undotodaytransactions", document.getElementById("todaytransactions").value);
    localStorage.setItem("undotodaybillfixed", document.getElementById("todaybillfixed").value);
    localStorage.setItem("undotodaybillindigo", document.getElementById("todaybillindigo").value);
    localStorage.setItem("undotodaybilladsl", document.getElementById("todaybilladsl").value);
    localStorage.setItem("undotodaysimswap", document.getElementById("todaysimswap").value);
    localStorage.setItem("undotodaymnp", document.getElementById("todaymnp").value);
    localStorage.setItem("undotodaybssamount", document.getElementById("todaybssamount").value);
    localStorage.setItem("undotodayetuamount", document.getElementById("todayetuamount").value);
    localStorage.setItem("undotodayossamount", document.getElementById("todayossamount").value);
    localStorage.setItem("undoachievedpayg", document.getElementById("achievedpayg").value);
    localStorage.setItem("undoachieveddata", document.getElementById("achieveddata").value);
    localStorage.setItem("undoachievedkixtaz", document.getElementById("achievedkixtaz").value);
    localStorage.setItem("undoachievedahlaweya", document.getElementById("achievedahlaweya").value);
    localStorage.setItem("undoachievedweclub", document.getElementById("achievedweclub").value);
    localStorage.setItem("undoachievedwemix", document.getElementById("achievedwemix").value);
    localStorage.setItem("undoachievedindigo", document.getElementById("achievedindigo").value);
    localStorage.setItem("undoachievedtkafol", document.getElementById("achievedtkafol").value);
    localStorage.setItem("undoachievedadsl", document.getElementById("achievedadsl").value);
    localStorage.setItem("undoachievedfixed", document.getElementById("achievedfixed").value);
    localStorage.setItem("undoachievedmifi", document.getElementById("achievedmifi").value);
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
    document.getElementById("achievedahlaweya").value = utdahlaweya;
    document.getElementById("todayahlaweya30").value = "";
    document.getElementById("todayahlaweya50").value = "";
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
    document.getElementById("todaytransactions").value = "";
    document.getElementById("todaybillfixed").value = "";
    document.getElementById("todaybillindigo").value = "";
    document.getElementById("todaybilladsl").value = "";
    document.getElementById("todaysimswap").value = "";
    document.getElementById("todaymnp").value = "";
    document.getElementById("todaybssamount").value = "";
    document.getElementById("todayetuamount").value = "";
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
    var link = "https://wa.me/?text=";
    window.open(link + message);
}
function Save1() {
    localStorage.setItem("storename", document.getElementById("storename").value);
    localStorage.setItem("yourname", document.getElementById("yourname").value);
    localStorage.setItem("achievedpayg", document.getElementById("achievedpayg").value);
    localStorage.setItem("targetpayg", document.getElementById("targetpayg").value);
    localStorage.setItem("achieveddata", document.getElementById("achieveddata").value);
    localStorage.setItem("targetdata", document.getElementById("targetdata").value);
    localStorage.setItem("achievedkixtaz", document.getElementById("achievedkixtaz").value);
    localStorage.setItem("targetkixtaz", document.getElementById("targetkixtaz").value);
    localStorage.setItem("achievedahlaweya", document.getElementById("achievedahlaweya").value);
    localStorage.setItem("targetahlaweya", document.getElementById("targetahlaweya").value);
    localStorage.setItem("achievedweclub", document.getElementById("achievedweclub").value);
    localStorage.setItem("targetweclub", document.getElementById("targetweclub").value);
    localStorage.setItem("achievedwemix", document.getElementById("achievedwemix").value);
    localStorage.setItem("targetwemix", document.getElementById("targetwemix").value);
    localStorage.setItem("achievedindigo", document.getElementById("achievedindigo").value);
    localStorage.setItem("targetindigo", document.getElementById("targetindigo").value);
    localStorage.setItem("achievedtkafol", document.getElementById("achievedtkafol").value);
    localStorage.setItem("achievedadsl", document.getElementById("achievedadsl").value);
    localStorage.setItem("targetadsl", document.getElementById("targetadsl").value);
    localStorage.setItem("achievedfixed", document.getElementById("achievedfixed").value);
    localStorage.setItem("targetfixed", document.getElementById("targetfixed").value);
    localStorage.setItem("achievedmifi", document.getElementById("achievedmifi").value);
    localStorage.setItem("targetmifi", document.getElementById("targetmifi").value);
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
