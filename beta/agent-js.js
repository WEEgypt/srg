function EnableRestore() {
    if (localStorage.getItem("agentRestore") == "true") {
        basic.style.display = "none";
        restore.style.display = "block";
        row1.style.display = "none";
        row2.style.display = "block";
        sessionStorage.removeItem("users");
    } else {
        sessionStorage.setItem("users", "1");
        localStorage.setItem("currentUser", "1");
    }
    if (localStorage.getItem("users") > "1") {
        multi.style.display = "block";
        let x = localStorage.getItem("users");
        for (i = 0; i < x; i++) {
            value = parseInt([i]) + 1;
            document.getElementById("users").options.add(new Option(localStorage.getItem("yourname.4agent." + value), value));
        }
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
    gsap.from("#achieved", { duration: 0.2, xPercent: 50, opacity: 0 });
    gsap.from("#today", { duration: 0.2, xPercent: 50, opacity: 0 });
    gsap.from("#report", { duration: 0.2, xPercent: 50, opacity: 0 });
}
function BackTransform() {
    gsap.from("#restore", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#basic", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#target", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#achieved", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#today", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#report", { duration: 0.2, xPercent: -50, opacity: 0 });
}
function Continue() {
    let x = document.getElementById("users").value || 1;
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
    document.getElementById("achievedsuperkix").value = localStorage.getItem("achievedsuperkix.4agent." + x);
    document.getElementById("targetsuperkix").value = localStorage.getItem("targetsuperkix.4agent." + x);
    document.getElementById("achievedtaz").value = localStorage.getItem("achievedtaz.4agent." + x);
    document.getElementById("targettaz").value = localStorage.getItem("targettaz.4agent." + x);
    document.getElementById("achievedweclub").value = localStorage.getItem("achievedweclub.4agent." + x);
    document.getElementById("targetweclub").value = localStorage.getItem("targetweclub.4agent." + x);
    document.getElementById("achievedwemix").value = localStorage.getItem("achievedwemix.4agent." + x);
    document.getElementById("targetwemix").value = localStorage.getItem("targetwemix.4agent." + x);
    document.getElementById("achievedindigoandgold").value = localStorage.getItem("achievedindigoandgold.4agent." + x);
    document.getElementById("targetindigoandgold").value = localStorage.getItem("targetindigoandgold.4agent." + x);
    document.getElementById("achievedtkafol").value = localStorage.getItem("achievedtkafol.4agent." + x);
    document.getElementById("achievedadsl").value = localStorage.getItem("achievedadsl.4agent." + x);
    document.getElementById("targetadsl").value = localStorage.getItem("targetadsl.4agent." + x);
    document.getElementById("achievedfixed").value = localStorage.getItem("achievedfixed.4agent." + x);
    document.getElementById("targetfixed").value = localStorage.getItem("targetfixed.4agent." + x);
    document.getElementById("achievedmifi").value = localStorage.getItem("achievedmifi.4agent." + x);
    document.getElementById("targetmifi").value = localStorage.getItem("targetmifi.4agent." + x);
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
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
    document.getElementById("todaygold200").value = "";
    document.getElementById("todaygold400").value = "";
    document.getElementById("todaygold600").value = "";
    document.getElementById("todaygold800").value = "";
    document.getElementById("todaygold1000").value = "";
    document.getElementById("todaygold1500").value = "";
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
    document.getElementById("users").innerHTML = "";
}
function NewMonth() {
    let x = document.getElementById("users").value || 1;
    localStorage.setItem("currentUser", x);
    restore.style.display = "none";
    basic.style.display = "block";
    document.getElementById("yourname").value = "";
    document.getElementById("achievedpayg").value = "";
    document.getElementById("targetpayg").value = "";
    document.getElementById("achieveddata").value = "";
    document.getElementById("targetdata").value = "";
    document.getElementById("achievedsuperkix").value = "";
    document.getElementById("targetsuperkix").value = "";
    document.getElementById("achievedtaz").value = "";
    document.getElementById("targettaz").value = "";
    document.getElementById("achievedweclub").value = "";
    document.getElementById("targetweclub").value = "";
    document.getElementById("achievedwemix").value = "";
    document.getElementById("targetwemix").value = "";
    document.getElementById("achievedindigoandgold").value = "";
    document.getElementById("targetindigoandgold").value = "";
    document.getElementById("achievedtkafol").value = "";
    document.getElementById("achievedadsl").value = "";
    document.getElementById("targetadsl").value = "";
    document.getElementById("achievedfixed").value = "";
    document.getElementById("targetfixed").value = "";
    document.getElementById("achievedmifi").value = "";
    document.getElementById("targetmifi").value = "";
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
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
    document.getElementById("todaygold200").value = "";
    document.getElementById("todaygold400").value = "";
    document.getElementById("todaygold600").value = "";
    document.getElementById("todaygold800").value = "";
    document.getElementById("todaygold1000").value = "";
    document.getElementById("todaygold1500").value = "";
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
    document.getElementById("users").innerHTML = "";
}
function NewUser() {
    users = parseInt(localStorage.getItem("users"));
    x = users + 1;
    sessionStorage.setItem("users", x);
    localStorage.setItem("currentUser", x);
    restore.style.display = "none";
    basic.style.display = "block";
    document.getElementById("yourname").value = "";
    document.getElementById("achievedpayg").value = "";
    document.getElementById("targetpayg").value = "";
    document.getElementById("achieveddata").value = "";
    document.getElementById("targetdata").value = "";
    document.getElementById("achievedsuperkix").value = "";
    document.getElementById("targetsuperkix").value = "";
    document.getElementById("achievedtaz").value = "";
    document.getElementById("targettaz").value = "";
    document.getElementById("achievedweclub").value = "";
    document.getElementById("targetweclub").value = "";
    document.getElementById("achievedwemix").value = "";
    document.getElementById("targetwemix").value = "";
    document.getElementById("achievedindigoandgold").value = "";
    document.getElementById("targetindigoandgold").value = "";
    document.getElementById("achievedtkafol").value = "";
    document.getElementById("achievedadsl").value = "";
    document.getElementById("targetadsl").value = "";
    document.getElementById("achievedfixed").value = "";
    document.getElementById("targetfixed").value = "";
    document.getElementById("achievedmifi").value = "";
    document.getElementById("targetmifi").value = "";
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
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
    document.getElementById("todaygold200").value = "";
    document.getElementById("todaygold400").value = "";
    document.getElementById("todaygold600").value = "";
    document.getElementById("todaygold800").value = "";
    document.getElementById("todaygold1000").value = "";
    document.getElementById("todaygold1500").value = "";
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
    document.getElementById("users").innerHTML = "";
}
function Next1() {
    Next2();
}
function Back1() {
    if (basic.style.display === "block") {
        basic.style.display = "none";
        restore.style.display = "block";
    }
    if (localStorage.getItem("users") > "1") {
        multi.style.display = "block";
        let x = localStorage.getItem("users");
        for (i = 0; i < x; i++) {
            value = parseInt([i]) + 1;
            document.getElementById("users").options.add(new Option(localStorage.getItem("yourname.4agent." + value), value));
        }
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
        achieved.style.display = "block";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    NextTransform();
}
function Back3() {
    if (achieved.style.display === "block") {
        achieved.style.display = "none";
        target.style.display = "block";
    }
    basic.style.display = "none";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
}
function Next4() {
    if (achieved.style.display === "block") {
        achieved.style.display = "none";
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
        achieved.style.display = "block";
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
    yourname = document.getElementById("yourname").value;
    day = parseInt(document.getElementById("day").value);
    month = parseInt(document.getElementById("month").value);
    year = parseInt(document.getElementById("year").value);
    date = day + "-" + month + "-" + year;
    daysinmonth = new Date(year, month, 0).getDate();
    todaypayg = parseInt(document.getElementById("todaypayg").value) || 0;
    achievedpayg = parseInt(document.getElementById("achievedpayg").value) || 0;
    utdpayg = todaypayg + achievedpayg || 0;
    targetpayg = parseInt(document.getElementById("targetpayg").value) || 0;
    todaydata = parseInt(document.getElementById("todaydata").value) || 0;
    achieveddata = parseInt(document.getElementById("achieveddata").value) || 0;
    utddata = todaydata + achieveddata || 0;
    targetdata = parseInt(document.getElementById("targetdata").value) || 0;
    todayskix20 = parseInt(document.getElementById("todayskix20").value) || 0;
    todayskix25 = parseInt(document.getElementById("todayskix25").value) || 0;
    todayskix35 = parseInt(document.getElementById("todayskix35").value) || 0;
    todayskix45 = parseInt(document.getElementById("todayskix45").value) || 0;
    todayskix65 = parseInt(document.getElementById("todayskix65").value) || 0;
    todayskix80 = parseInt(document.getElementById("todayskix80").value) || 0;
    todayskix100 = parseInt(document.getElementById("todayskix100").value) || 0;
    achievedsuperkix = parseInt(document.getElementById("achievedsuperkix").value) || 0;
    utdsuperkix = todayskix20 + todayskix25 + todayskix35 + todayskix45 + todayskix65 + todayskix80 + todayskix100 + achievedsuperkix || 0;
    targetsuperkix = parseInt(document.getElementById("targetsuperkix").value) || 0;
    todaytazbeet30 = parseInt(document.getElementById("todaytazbeet30").value) || 0;
    todaytazbeet40 = parseInt(document.getElementById("todaytazbeet40").value) || 0;
    todaytazbeet70 = parseInt(document.getElementById("todaytazbeet70").value) || 0;
    todaytazbeet110 = parseInt(document.getElementById("todaytazbeet110").value) || 0;
    achievedtaz = parseInt(document.getElementById("achievedtaz").value) || 0;
    utdtaz = todaytazbeet30 + todaytazbeet40 + todaytazbeet70 + todaytazbeet110 + achievedtaz || 0;
    targettaz = parseInt(document.getElementById("targettaz").value) || 0;
    todayweclub25 = parseInt(document.getElementById("todayweclub25").value) || 0;
    todayweclub40 = parseInt(document.getElementById("todayweclub40").value) || 0;
    todayweclub65 = parseInt(document.getElementById("todayweclub65").value) || 0;
    todayweclub100 = parseInt(document.getElementById("todayweclub100").value) || 0;
    achievedweclub = parseInt(document.getElementById("achievedweclub").value) || 0;
    utdweclub = todayweclub25 + todayweclub40 + todayweclub65 + todayweclub100 + achievedweclub || 0;
    targetweclub = parseInt(document.getElementById("targetweclub").value) || 0;
    todaywemix165 = parseInt(document.getElementById("todaywemix165").value) || 0;
    todaywemix240 = parseInt(document.getElementById("todaywemix240").value) || 0;
    achievedwemix = parseInt(document.getElementById("achievedwemix").value) || 0;
    utdwemix = todaywemix165 + todaywemix240 + achievedwemix || 0;
    targetwemix = parseInt(document.getElementById("targetwemix").value) || 0;
    todayindigofmc = parseInt(document.getElementById("todayindigofmc").value) || 0;
    todayindigoopen = parseInt(document.getElementById("todayindigoopen").value) || 0;
    todayindigocl = parseInt(document.getElementById("todayindigocl").value) || 0;
    todaygold200 = parseInt(document.getElementById("todaygold200").value) || 0;
    todaygold400 = parseInt(document.getElementById("todaygold400").value) || 0;
    todaygold600 = parseInt(document.getElementById("todaygold600").value) || 0;
    todaygold800 = parseInt(document.getElementById("todaygold800").value) || 0;
    todaygold1000 = parseInt(document.getElementById("todaygold1000").value) || 0;
    todaygold1500 = parseInt(document.getElementById("todaygold1500").value) || 0;
    achievedindigoandgold = parseInt(document.getElementById("achievedindigoandgold").value) || 0;
    utdindigoandgold = todayindigofmc + todayindigoopen + todayindigocl + todaygold200 + todaygold400 + todaygold600 + todaygold800 + todaygold1000 + todaygold1500 + achievedindigoandgold || 0;
    targetindigoandgold = parseInt(document.getElementById("targetindigoandgold").value) || 0;
    todaytkafol = parseInt(document.getElementById("todaytkafol").value) || 0;
    achievedtkafol = parseInt(document.getElementById("achievedtkafol").value) || 0;
    utdtkafol = todaytkafol + achievedtkafol || 0;
    todayadsl = parseInt(document.getElementById("todayadsl").value) || 0;
    achievedadsl = parseInt(document.getElementById("achievedadsl").value) || 0;
    utdadsl = todayadsl + achievedadsl || 0;
    targetadsl = parseInt(document.getElementById("targetadsl").value) || 0;
    todayfixed = parseInt(document.getElementById("todayfixed").value) || 0;
    achievedfixed = parseInt(document.getElementById("achievedfixed").value) || 0;
    utdfixed = todayfixed + achievedfixed || 0;
    targetfixed = parseInt(document.getElementById("targetfixed").value) || 0;
    todaymifi = parseInt(document.getElementById("todaymifi").value) || 0;
    achievedmifi = parseInt(document.getElementById("achievedmifi").value) || 0;
    utdmifi = todaymifi + achievedmifi || 0;
    targetmifi = parseInt(document.getElementById("targetmifi").value) || 0;
    todaybillfixed = parseInt(document.getElementById("todaybillfixed").value) || 0;
    todaybillindigo = parseInt(document.getElementById("todaybillindigo").value) || 0;
    todaybilladsl = parseInt(document.getElementById("todaybilladsl").value) || 0;
    todaysimswap = parseInt(document.getElementById("todaysimswap").value) || 0;
    todaymnp = parseInt(document.getElementById("todaymnp").value) || 0;
    todaybssamount = parseInt(document.getElementById("todaybssamount").value) || 0;
    todayossamount = parseInt(document.getElementById("todayossamount").value) || 0;
    utdmobile = utdpayg + utddata + utdsuperkix + utdtaz + utdweclub + utdwemix + utdindigoandgold || 0;
    targetmobile = targetpayg + targetdata + targetsuperkix + targettaz + targetwemix + targetweclub + targetindigoandgold || 0;
    vsMobile = ~~Number(Math.round((utdmobile / targetmobile) * 100)) || 0;
    reMobile = ~~Number(Math.round((((utdmobile / targetmobile) * 100) / day) * daysinmonth)) || 0;
    dailymobile =
        todaypayg +
            todaydata +
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
            todayindigoopen +
            todayindigocl +
            todaygold200 +
            todaygold400 +
            todaygold600 +
            todaygold800 +
            todaygold1000 +
            todaygold1500 || 0;
    if (todayskix20 == "0") {
        todayskix20report = "";
    } else {
        todayskix20report = todayskix20 + "*20 ";
    }
    if (todayskix25 == "0") {
        todayskix25report = "";
    } else {
        todayskix25report = todayskix25 + "*25 ";
    }
    if (todayskix35 == "0") {
        todayskix35report = "";
    } else {
        todayskix35report = todayskix35 + "*35 ";
    }
    if (todayskix45 == "0") {
        todayskix45report = "";
    } else {
        todayskix45report = todayskix45 + "*45 ";
    }
    if (todayskix65 == "0") {
        todayskix65report = "";
    } else {
        todayskix65report = todayskix65 + "*65 ";
    }
    if (todayskix80 == "0") {
        todayskix80report = "";
    } else {
        todayskix80report = todayskix80 + "*80 ";
    }
    if (todayskix100 == "0") {
        todayskix100report = "";
    } else {
        todayskix100report = todayskix100 + "*100 ";
    }
    todayskixreport = todayskix20report + todayskix25report + todayskix35report + todayskix45report + todayskix65report + todayskix80report + todayskix100report;
    if (todayskixreport == "") {
        skixreport = "";
    } else {
        skixreport = "\n" + "Super Kix: " + todayskixreport;
    }
    if (todaytazbeet30 == "0") {
        todaytazbeet30report = "";
    } else {
        todaytazbeet30report = todaytazbeet30 + "*30 ";
    }
    if (todaytazbeet40 == "0") {
        todaytazbeet40report = "";
    } else {
        todaytazbeet40report = todaytazbeet40 + "*40 ";
    }
    if (todaytazbeet70 == "0") {
        todaytazbeet70report = "";
    } else {
        todaytazbeet70report = todaytazbeet70 + "*70 ";
    }
    if (todaytazbeet110 == "0") {
        todaytazbeet110report = "";
    } else {
        todaytazbeet110report = todaytazbeet110 + "*110 ";
    }
    todaytazbeetreport = todaytazbeet30report + todaytazbeet40report + todaytazbeet70report + todaytazbeet110report;
    if (todaytazbeetreport == "") {
        tazbeetreport = "";
    } else {
        tazbeetreport = "\n" + "Tazbeet: " + todaytazbeetreport;
    }
    if (todayweclub25 == "0") {
        todayweclub25report = "";
    } else {
        todayweclub25report = todayweclub25 + "*25 ";
    }
    if (todayweclub40 == "0") {
        todayweclub40report = "";
    } else {
        todayweclub40report = todayweclub40 + "*40 ";
    }
    if (todayweclub65 == "0") {
        todayweclub65report = "";
    } else {
        todayweclub65report = todayweclub65 + "*65 ";
    }
    if (todayweclub100 == "0") {
        todayweclub100report = "";
    } else {
        todayweclub100report = todayweclub100 + "*100 ";
    }
    todayweclubreport = todayweclub25report + todayweclub40report + todayweclub65report + todayweclub100report;
    if (todayweclubreport == "") {
        weclubreport = "";
    } else {
        weclubreport = "\n" + "We Club: " + todayweclubreport;
    }
    if (todaywemix165 == "0") {
        todaywemix165report = "";
    } else {
        todaywemix165report = todaywemix165 + "*165 ";
    }
    if (todaywemix240 == "0") {
        todaywemix240report = "";
    } else {
        todaywemix240report = todaywemix240 + "*240 ";
    }
    todaywemixreport = todaywemix165report + todaywemix240report;
    if (todaywemixreport == "") {
        wemixreport = "";
    } else {
        wemixreport = "\n" + "We Mix: " + todaywemixreport;
    }
    if (todayindigofmc == "0") {
        todayindigofmcreport = "";
    } else {
        todayindigofmcreport = todayindigofmc + "*FMC ";
    }
    if (todayindigoopen == "0") {
        todayindigoopenreport = "";
    } else {
        todayindigoopenreport = todayindigoopen + "*Open ";
    }
    if (todayindigocl == "0") {
        todayindigoclreport = "";
    } else {
        todayindigoclreport = todayindigocl + "*CL ";
    }
    todayindigo = todayindigofmcreport + todayindigoopenreport + todayindigoclreport || 0;
    if (todayindigo == "0") {
        todayindigoreport = "";
    } else {
        todayindigoreport = "\n" + "Indigo: " + todayindigo;
    }
    if (todaygold200 == "0") {
        todaygold200ofmcreport = "";
    } else {
        todaygold200ofmcreport = todaygold200 + "*200 ";
    }
    if (todaygold400 == "0") {
        todaygold400ofmcreport = "";
    } else {
        todaygold400ofmcreport = todaygold400 + "*400 ";
    }
    if (todaygold600 == "0") {
        todaygold600ofmcreport = "";
    } else {
        todaygold600ofmcreport = todaygold600 + "*600 ";
    }
    if (todaygold800 == "0") {
        todaygold800ofmcreport = "";
    } else {
        todaygold800ofmcreport = todaygold800 + "*800 ";
    }
    if (todaygold1000 == "0") {
        todaygold1000ofmcreport = "";
    } else {
        todaygold1000ofmcreport = todaygold1000 + "*1000 ";
    }
    if (todaygold1500 == "0") {
        todaygold1500ofmcreport = "";
    } else {
        todaygold1500ofmcreport = todaygold1500 + "*1500 ";
    }
    todaygold = todaygold200ofmcreport + todaygold400ofmcreport + todaygold600ofmcreport + todaygold800ofmcreport + todaygold1000ofmcreport + todaygold1500ofmcreport || 0;
    if (todaygold == "0") {
        todaygoldreport = "";
    } else {
        todaygoldreport = "We Gold: " + todaygold;
    }
    if (todaytkafol == "0") {
        todaytkafolreport = "";
    } else {
        todaytkafolreport = "\n" + "Tkafol: " + todaytkafol;
    }
    if (todayadsl == "0") {
        todayadslreport = "";
    } else {
        todayadslreport = "\n" + "ADSL: " + todayadsl;
    }
    if (todayfixed == "0") {
        todayfixedreport = "";
    } else {
        todayfixedreport = "\n" + "Fixed: " + todayfixed;
    }
    if (todaymifi == "0") {
        todaymifireport = "";
    } else {
        todaymifireport = "\n" + "MIFI: " + todaymifi;
    }
    if (todaypayg == "0") {
        todaypaygreport = "";
    } else {
        todaypaygreport = "\n" + "PAYG: " + todaypayg;
    }
    if (todaydata == "0") {
        todaydatareport = "";
    } else {
        todaydatareport = "\n" + "Data: " + todaydata;
    }
    if (todayadsl == "0") {
        todayadslfordailysales = "";
    } else {
        todayadslfordailysales = " + " + todayadsl + " ADSL";
    }
    if (todayfixed == "0") {
        todayfixedfordailysales = "";
    } else {
        todayfixedfordailysales = " + " + todayfixed + " Fixed";
    }
    if (todaymifi == "0") {
        todaymififordailysales = "";
    } else {
        todaymififordailysales = " + " + todaymifi + " MIFI";
    }
    todaysales = todaygoldreport + todayindigoreport + todaypaygreport + todaydatareport + skixreport + tazbeetreport + weclubreport + wemixreport + todaytkafolreport + todayadslreport + todayfixedreport + todaymifireport;
    totaltoday = "------------------------- " + "\n" + "Total Today: " + dailymobile + " Mob" + todayadslfordailysales + todayfixedfordailysales + todaymififordailysales + "\n" + "------------------------- ";
    if (todaysales == "") {
        todaysalesreport = "No Sales Today";
        totaltodayreport = "------------------------- ";
    } else {
        todaysalesreport = todaysales;
        totaltodayreport = totaltoday;
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
        "ADSL Bills: " +
        todaybilladsl +
        "\n" +
        "Postpaid Bills: " +
        todaybillindigo +
        "\n" +
        "Landline Bills: " +
        todaybillfixed +
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
        "PAYG: " +
        utdpayg +
        "/" +
        targetpayg +
        "\n" +
        "Data: " +
        utddata +
        "/" +
        targetdata +
        "\n" +
        "Super Kix: " +
        utdsuperkix +
        "/" +
        targetsuperkix +
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
        "Postpaid: " +
        utdindigoandgold +
        "/" +
        targetindigoandgold +
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
        "MIFI: " +
        utdmifi +
        "/" +
        targetmifi +
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
        "Tkafol & Karama: " +
        utdtkafol;
    document.getElementById("save1").disabled = false;
    document.getElementById("save2").disabled = false;
    document.getElementById("copy1").disabled = false;
    document.getElementById("copy2").disabled = false;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    NextTransform();
}
function Copy1() {
    salesreportValue = document.getElementById("salesreport").value;
    navigator.clipboard.writeText(salesreportValue);
    document.getElementById("copy1").disabled = true;
    document.getElementById("copy2").disabled = true;
}
function Share1() {
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
function Save1() {
    let x = parseInt(localStorage.getItem("currentUser"));
    localStorage.setItem("yourname.4agent." + x, document.getElementById("yourname").value || "Agent " + x);
    localStorage.setItem("achievedpayg.4agent." + x, utdpayg);
    localStorage.setItem("targetpayg.4agent." + x, document.getElementById("targetpayg").value);
    localStorage.setItem("achieveddata.4agent." + x, utddata);
    localStorage.setItem("targetdata.4agent." + x, document.getElementById("targetdata").value);
    localStorage.setItem("achievedsuperkix.4agent." + x, utdsuperkix);
    localStorage.setItem("targetsuperkix.4agent." + x, document.getElementById("targetsuperkix").value);
    localStorage.setItem("achievedtaz.4agent." + x, utdtaz);
    localStorage.setItem("targettaz.4agent." + x, document.getElementById("targettaz").value);
    localStorage.setItem("achievedweclub.4agent." + x, utdweclub);
    localStorage.setItem("targetweclub.4agent." + x, document.getElementById("targetweclub").value);
    localStorage.setItem("achievedwemix.4agent." + x, utdwemix);
    localStorage.setItem("targetwemix.4agent." + x, document.getElementById("targetwemix").value);
    localStorage.setItem("achievedindigoandgold.4agent." + x, utdindigoandgold);
    localStorage.setItem("targetindigoandgold.4agent." + x, document.getElementById("targetindigoandgold").value);
    localStorage.setItem("achievedtkafol.4agent." + x, utdtkafol);
    localStorage.setItem("achievedadsl.4agent." + x, utdadsl);
    localStorage.setItem("targetadsl.4agent." + x, document.getElementById("targetadsl").value);
    localStorage.setItem("achievedfixed.4agent." + x, utdfixed);
    localStorage.setItem("targetfixed.4agent." + x, document.getElementById("targetfixed").value);
    localStorage.setItem("achievedmifi.4agent." + x, utdmifi);
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
