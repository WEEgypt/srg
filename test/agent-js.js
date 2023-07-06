function EnableRestore() {
    if (localStorage.getItem("agentRestore") == "true") {
        basic.style.display = "none";
        restore.style.display = "block";
        row1.style.display = "none";
        row2.style.display = "block";
        users.style.display = "block";
        document.getElementById("user1").innerHTML = localStorage.getItem("yourname.4agent.1");
        let x = localStorage.getItem("users");
        for (i = 0; i < x - 1; i++) {
            var value = parseInt([i]) + 2;
            document.getElementById("users").options.add(new Option(localStorage.getItem("yourname.4agent." + value), value));
        }
        sessionStorage.removeItem("users");
    } else {
        sessionStorage.setItem("users", "1");
        localStorage.setItem("currentUser", "1");
    }
    if (localStorage.getItem("users") > "1") {
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
    let x = document.getElementById("users").value;
    localStorage.setItem("currentUser", x);
    restore.style.display = "none";
    basic.style.display = "block";
    agent.style.display = "none";
    row1.style.display = "none";
    row2.style.display = "none";
    today.style.display = "block";
    document.getElementById("yourname").value = localStorage.getItem("yourname.4agent." + x);
    document.getElementById("achievedpayg").value = localStorage.getItem("achievedpayg.4agent." + x);
    document.getElementById("targetpayg").value = localStorage.getItem("targetpayg.4agent." + x);
    document.getElementById("achieveddata").value = localStorage.getItem("achieveddata.4agent." + x);
    document.getElementById("targetdata").value = localStorage.getItem("targetdata.4agent." + x);
    document.getElementById("achievedkixandsuper").value = localStorage.getItem("achievedkixandsuper.4agent." + x);
    document.getElementById("achievedtaz").value = localStorage.getItem("achievedtaz.4agent." + x);
    document.getElementById("targetkixandsuper").value = localStorage.getItem("targetkixandsuper.4agent." + x);
    document.getElementById("targettaz").value = localStorage.getItem("targettaz.4agent." + x);
    document.getElementById("achievedweclub").value = localStorage.getItem("achievedweclub.4agent." + x);
    document.getElementById("targetweclub").value = localStorage.getItem("targetweclub.4agent." + x);
    document.getElementById("achievedwemix").value = localStorage.getItem("achievedwemix.4agent." + x);
    document.getElementById("targetwemix").value = localStorage.getItem("targetwemix.4agent." + x);
    document.getElementById("achievedindigo").value = localStorage.getItem("achievedindigo.4agent." + x);
    document.getElementById("targetindigo").value = localStorage.getItem("targetindigo.4agent." + x);
    document.getElementById("achievedtkafol").value = localStorage.getItem("achievedtkafol.4agent." + x);
    document.getElementById("achievedadsl").value = localStorage.getItem("achievedadsl.4agent." + x);
    document.getElementById("targetadsl").value = localStorage.getItem("targetadsl.4agent." + x);
    document.getElementById("achievedfixed").value = localStorage.getItem("achievedfixed.4agent." + x);
    document.getElementById("targetfixed").value = localStorage.getItem("targetfixed.4agent." + x);
    document.getElementById("achievedmifi").value = localStorage.getItem("achievedmifi.4agent." + x);
    document.getElementById("targetmifi").value = localStorage.getItem("targetmifi.4agent." + x);
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
    sessionStorage.setItem("users", localStorage.getItem("users"));
}
function NewMonth() {
    restore.style.display = "none";
    basic.style.display = "block";
    document.getElementById("yourname").value = "";
    document.getElementById("achievedpayg").value = "";
    document.getElementById("targetpayg").value = "";
    document.getElementById("achieveddata").value = "";
    document.getElementById("targetdata").value = "";
    document.getElementById("achievedkixandsuper").value = "";
    document.getElementById("achievedtaz").value = "";
    document.getElementById("targetkixandsuper").value = "";
    document.getElementById("targettaz").value = "";
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
    sessionStorage.setItem("users", localStorage.getItem("users"));
}
function NewUser() {
    var users = parseInt(localStorage.getItem("users"));
    var x = users + 1;
    sessionStorage.setItem("users", x);
    localStorage.setItem("currentUser", x);
    restore.style.display = "none";
    basic.style.display = "block";
    document.getElementById("yourname").value = "";
    document.getElementById("achievedpayg").value = "";
    document.getElementById("targetpayg").value = "";
    document.getElementById("achieveddata").value = "";
    document.getElementById("targetdata").value = "";
    document.getElementById("achievedkixandsuper").value = "";
    document.getElementById("achievedtaz").value = "";
    document.getElementById("targetkixandsuper").value = "";
    document.getElementById("targettaz").value = "";
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
    sessionStorage.removeItem("users");
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
    if (localStorage.getItem("agentRestore") == "true") {
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
    document.getElementById("achievedkixandsuper").value = localStorage.getItem("undoachievedkixandsuper.4agent");
    document.getElementById("achievedtaz").value = localStorage.getItem("undoachievedtaz.4agent");
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
    document.getElementById("todayskix20").value = localStorage.getItem("undotodayskix20.4agent");
    document.getElementById("todayskix25").value = localStorage.getItem("undotodayskix25.4agent");
    document.getElementById("todayskix35").value = localStorage.getItem("undotodayskix35.4agent");
    document.getElementById("todayskix45").value = localStorage.getItem("undotodayskix45.4agent");
    document.getElementById("todayskix65").value = localStorage.getItem("undotodayskix65.4agent");
    document.getElementById("todayskix80").value = localStorage.getItem("undotodayskix80.4agent");
    document.getElementById("todayskix100").value = localStorage.getItem("undotodayskix100.4agent");
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
    var todayskix20 = parseInt(document.getElementById("todayskix20").value) || 0;
    var todayskix25 = parseInt(document.getElementById("todayskix25").value) || 0;
    var todayskix35 = parseInt(document.getElementById("todayskix35").value) || 0;
    var todayskix45 = parseInt(document.getElementById("todayskix45").value) || 0;
    var todayskix65 = parseInt(document.getElementById("todayskix65").value) || 0;
    var todayskix80 = parseInt(document.getElementById("todayskix80").value) || 0;
    var todayskix100 = parseInt(document.getElementById("todayskix100").value) || 0;
    var todaytazbeet30 = parseInt(document.getElementById("todaytazbeet30").value) || 0;
    var todaytazbeet40 = parseInt(document.getElementById("todaytazbeet40").value) || 0;
    var todaytazbeet70 = parseInt(document.getElementById("todaytazbeet70").value) || 0;
    var todaytazbeet110 = parseInt(document.getElementById("todaytazbeet110").value) || 0;
    var achievedkixandsuper = parseInt(document.getElementById("achievedkixandsuper").value) || 0;
    var achievedtaz = parseInt(document.getElementById("achievedtaz").value) || 0;
    var utdkixandsuper = todaykix17 + todaykix25 + todaykix35 + todaykix45 + todaykix75 + todayskix20 + todayskix25 + todayskix35 + todayskix45 + todayskix65 + todayskix80 + todayskix100 + achievedkixandsuper || 0;
    var utdtaz = todaytazbeet30 + todaytazbeet40 + todaytazbeet70 + todaytazbeet110 + achievedtaz || 0;
    var targetkixandsuper = parseInt(document.getElementById("targetkixandsuper").value) || 0;
    var targettaz = parseInt(document.getElementById("targettaz").value) || 0;
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
    var utdmobile = utdpayg + utddata + utdkixandsuper + utdtaz + utdweclub + utdwemix + utdindigo || 0;
    var targetmobile = targetpayg + targetdata + targetkixandsuper + targettaz + targetwemix + targetweclub + targetindigo || 0;
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
            todayskix20 +
            todayskix25 +
            todayskix35 +
            todayskix45 +
            todayskix65 +
            todayskix80 +
            todayskix100 +
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
        var kixreport = "";
    } else {
        var kixreport = "\n" + "Kix: " + todaykixreport;
    }
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
    var todayskixreport = todayskix20report + todayskix25report + todayskix35report + todayskix45report + todayskix65report + todayskix80report + todayskix100report;
    if (todayskixreport == "") {
        var skixreport = "";
    } else {
        var skixreport = "\n" + "Super Kix: " + todayskixreport;
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
        var tazbeetreport = "";
    } else {
        var tazbeetreport = "\n" + "Tazbeet: " + todaytazbeetreport;
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
        var weclubreport = "";
    } else {
        var weclubreport = "\n" + "We Club: " + todayweclubreport;
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
        var wemixreport = "";
    } else {
        var wemixreport = "\n" + "We Mix: " + todaywemixreport;
    }
    if (todayindigofmc == "0") {
        var todayindigofmcreport = "";
    } else {
        var todayindigofmcreport = "\n" + "Indigo FMC: " + todayindigofmc;
    }
    if (todayindigoopen == "0") {
        var todayindigoopenreport = "";
    } else {
        var todayindigoopenreport = "\n" + "Indigo Open: " + todayindigoopen;
    }
    if (todaytkafol == "0") {
        var todaytkafolreport = "";
    } else {
        var todaytkafolreport = "\n" + "Tkafol: " + todaytkafol;
    }
    if (todayadsl == "0") {
        var todayadslreport = "";
    } else {
        var todayadslreport = "\n" + "ADSL: " + todayadsl;
    }
    if (todayfixed == "0") {
        var todayfixedreport = "";
    } else {
        var todayfixedreport = "\n" + "Fixed: " + todayfixed;
    }
    if (todaymifi == "0") {
        var todaymifireport = "";
    } else {
        var todaymifireport = "\n" + "MIFI: " + todaymifi;
    }
    if (todaypayg == "0") {
        var todaypaygreport = "";
    } else {
        var todaypaygreport = "\n" + "Payg: " + todaypayg;
    }
    if (todaydata == "0") {
        var todaydatareport = "";
    } else {
        var todaydatareport = "\n" + "Data: " + todaydata;
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
    var todaysales =
        todaypaygreport + todaydatareport + kixreport + skixreport + tazbeetreport + weclubreport + wemixreport + todayindigofmcreport + todayindigoopenreport + todaytkafolreport + todayadslreport + todayfixedreport + todaymifireport;
    var totaltoday = "------------------------- " + "\n" + "Total Today: " + dailymobile + " Mob" + todayadslfordailysales + todayfixedfordailysales + todaymififordailysales + "\n" + "------------------------- ";
    if (todaysales == "") {
        var todaysalesreport = "No Sales Today";
        var totaltodayreport = "------------------------- ";
    } else {
        var todaysalesreport = "Sales" + "\n" + todaysales;
        var totaltodayreport = totaltoday;
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
        todaysalesreport +
        "\n" +
        totaltodayreport +
        "\n" +
        "Transaction" +
        "\n" +
        "\n" +
        "Fixed Bills: " +
        todaybillfixed +
        "\n" +
        "Indigo Bills: " +
        todaybillindigo +
        "\n" +
        "ADSL Bills: " +
        todaybilladsl +
        "\n" +
        "SIM Swap: " +
        todaysimswap +
        "\n" +
        "MNP: " +
        todaymnp +
        "\n" +
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
        "This Month" +
        "\n" +
        "\n" +
        "Payg: " +
        utdpayg +
        "/" +
        targetpayg +
        "\n" +
        "Data: " +
        utddata +
        "/" +
        targetdata +
        "\n" +
        "\n" +
        "Kix & Super: " +
        utdkixandsuper +
        "/" +
        targetkixandsuper +
        "\n" +
        "Tazbeet: " +
        utdtaz +
        "/" +
        targettaz +
        "\n" +
        "We Club: " +
        utdweclub +
        "/" +
        targetweclub +
        "\n" +
        "We Mix: " +
        utdwemix +
        "/" +
        targetwemix +
        "\n" +
        "Indigo: " +
        utdindigo +
        "/" +
        targetindigo +
        "\n" +
        "\n" +
        "ADSL: " +
        utdadsl +
        "/" +
        targetadsl +
        "\n" +
        "Fixed: " +
        utdfixed +
        "/" +
        targetfixed +
        "\n" +
        "\n" +
        "Target: " +
        targetmobile +
        "\n" +
        "Achieved: " +
        utdmobile +
        "\n" +
        "Percentage: " +
        vsMobile +
        "%" +
        "\n" +
        "Projection: " +
        reMobile +
        "%" +
        "\n" +
        "\n" +
        "MIFI: " +
        utdmifi +
        "/" +
        targetmifi +
        "\n" +
        "Tkafol & Karama: " +
        utdtkafol;
    localStorage.setItem("undotodaypayg.4agent", document.getElementById("todaypayg").value);
    localStorage.setItem("undotodaydata.4agent", document.getElementById("todaydata").value);
    localStorage.setItem("undotodaykix17.4agent", document.getElementById("todaykix17").value);
    localStorage.setItem("undotodaykix25.4agent", document.getElementById("todaykix25").value);
    localStorage.setItem("undotodaykix35.4agent", document.getElementById("todaykix35").value);
    localStorage.setItem("undotodaykix45.4agent", document.getElementById("todaykix45").value);
    localStorage.setItem("undotodaykix75.4agent", document.getElementById("todaykix75").value);
    localStorage.setItem("undotodayskix20.4agent", document.getElementById("todayskix20").value);
    localStorage.setItem("undotodayskix25.4agent", document.getElementById("todayskix25").value);
    localStorage.setItem("undotodayskix35.4agent", document.getElementById("todayskix35").value);
    localStorage.setItem("undotodayskix45.4agent", document.getElementById("todayskix45").value);
    localStorage.setItem("undotodayskix65.4agent", document.getElementById("todayskix65").value);
    localStorage.setItem("undotodayskix80.4agent", document.getElementById("todayskix80").value);
    localStorage.setItem("undotodayskix100.4agent", document.getElementById("todayskix100").value);
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
    localStorage.setItem("undoachievedkixandsuper.4agent", document.getElementById("achievedkixandsuper").value);
    localStorage.setItem("undoachievedtaz.4agent", document.getElementById("achievedtaz").value);
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
    let x = parseInt(localStorage.getItem("currentUser"));
    localStorage.setItem("yourname.4agent." + x, document.getElementById("yourname").value || "User " + x);
    localStorage.setItem("achievedpayg.4agent." + x, document.getElementById("achievedpayg").value);
    localStorage.setItem("targetpayg.4agent." + x, document.getElementById("targetpayg").value);
    localStorage.setItem("achieveddata.4agent." + x, document.getElementById("achieveddata").value);
    localStorage.setItem("targetdata.4agent." + x, document.getElementById("targetdata").value);
    localStorage.setItem("achievedkixandsuper.4agent." + x, document.getElementById("achievedkixandsuper").value);
    localStorage.setItem("achievedtaz.4agent." + x, document.getElementById("achievedtaz").value);
    localStorage.setItem("targetkixandsuper.4agent." + x, document.getElementById("targetkixandsuper").value);
    localStorage.setItem("targettaz.4agent." + x, document.getElementById("targettaz").value);
    localStorage.setItem("achievedweclub.4agent." + x, document.getElementById("achievedweclub").value);
    localStorage.setItem("targetweclub.4agent." + x, document.getElementById("targetweclub").value);
    localStorage.setItem("achievedwemix.4agent." + x, document.getElementById("achievedwemix").value);
    localStorage.setItem("targetwemix.4agent." + x, document.getElementById("targetwemix").value);
    localStorage.setItem("achievedindigo.4agent." + x, document.getElementById("achievedindigo").value);
    localStorage.setItem("targetindigo.4agent." + x, document.getElementById("targetindigo").value);
    localStorage.setItem("achievedtkafol.4agent." + x, document.getElementById("achievedtkafol").value);
    localStorage.setItem("achievedadsl.4agent." + x, document.getElementById("achievedadsl").value);
    localStorage.setItem("targetadsl.4agent." + x, document.getElementById("targetadsl").value);
    localStorage.setItem("achievedfixed.4agent." + x, document.getElementById("achievedfixed").value);
    localStorage.setItem("targetfixed.4agent." + x, document.getElementById("targetfixed").value);
    localStorage.setItem("achievedmifi.4agent." + x, document.getElementById("achievedmifi").value);
    localStorage.setItem("targetmifi.4agent." + x, document.getElementById("targetmifi").value);
    document.getElementById("save1").disabled = true;
    document.getElementById("save2").disabled = true;
    localStorage.setItem("agentRestore", "true");
    localStorage.setItem("users", sessionStorage.getItem("users"));
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
    doc.document.write(document.getElementById("salesreport").value.replace(/\n/gi, "<br>"));
    doc.document.write("</div></body></html>");
    doc.document.close();
}
