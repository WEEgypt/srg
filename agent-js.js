function EnableRestore() {
    if (localStorage.getItem("agentRestore") == "true") {
        basic.style.display = "none";
        restore.style.display = "block";
        row__1.style.display = "none";
        row__2.style.display = "block";
        sessionStorage.removeItem("users");
        sessionStorage.removeItem("newuser");
    } else {
        sessionStorage.setItem("users", "1");
        localStorage.setItem("currentUser", "1");
    }
    if (localStorage.getItem("users") > "1") {
        multi.style.display = "block";
        restore.style.display = "none";
        let x = localStorage.getItem("users");
        for (i = 0; i < x; i++) {
            value = parseInt([i]) + 1;
            document.getElementById("users").options.add(new Option(localStorage.getItem("yourname.4agent." + value), value));
        }
        document.getElementById("users").options.add(new Option("Add Another Agent", "newuser"));
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
    if (document.getElementById("users").value == "newuser") {
        multi.style.display = "none";
        NewUser();
    } else {
        multi.style.display = "none";
        restore.style.display = "block";
        newuser.style.display = "none";
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
    if (localStorage.getItem("users") > "1") {
        document.getElementById("users").innerHTML = "";
        multi.style.display = "block";
        restore.style.display = "none";
        let x = localStorage.getItem("users");
        for (i = 0; i < x; i++) {
            value = parseInt([i]) + 1;
            document.getElementById("users").options.add(new Option(localStorage.getItem("yourname.4agent." + value), value));
        }
        document.getElementById("users").options.add(new Option("Add Another Agent", "newuser"));
        BackTransform();
    } else {
        Back__1();
    }
}
function Back__3() {
    if (basic.style.display === "block" && localStorage.getItem("users") > "1" && sessionStorage.getItem("newuser") == "true") {
        basic.style.display = "none";
        multi.style.display = "block";
        document.getElementById("users").innerHTML = "";
        let x = localStorage.getItem("users");
        for (i = 0; i < x; i++) {
            value = parseInt([i]) + 1;
            document.getElementById("users").options.add(new Option(localStorage.getItem("yourname.4agent." + value), value));
        }
        document.getElementById("users").options.add(new Option("Add Another Agent", "newuser"));
    } else if (basic.style.display === "block") {
        basic.style.display = "none";
        restore.style.display = "block";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
    sessionStorage.removeItem("users");
    sessionStorage.removeItem("newuser");
}
function Back__4() {
    if (target.style.display === "block") {
        target.style.display = "none";
        basic.style.display = "block";
        agent.style.display = "block";
    }
    if (localStorage.getItem("agentRestore") == "true") {
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
    agent.style.display = "none";
}
function Continue() {
    let x = document.getElementById("users").value || 1;
    localStorage.setItem("currentUser", x);
    restore.style.display = "none";
    basic.style.display = "block";
    agent.style.display = "none";
    row__1.style.display = "none";
    row__2.style.display = "none";
    today.style.display = "block";
    document.getElementById("yourname").value = localStorage.getItem("yourname.4agent." + x);
    document.getElementById("achievedpayg").value = localStorage.getItem("achievedpayg.4agent." + x);
    document.getElementById("targetpayg").value = localStorage.getItem("targetpayg.4agent." + x);
    document.getElementById("achieveddata").value = localStorage.getItem("achieveddata.4agent." + x);
    document.getElementById("targetdata").value = localStorage.getItem("targetdata.4agent." + x);
    document.getElementById("achievedsuperkix").value = localStorage.getItem("achievedsuperkix.4agent." + x) || localStorage.getItem("achievedkixandsuper.4agent." + x);
    document.getElementById("targetsuperkix").value = localStorage.getItem("targetsuperkix.4agent." + x) || localStorage.getItem("targetkixandsuper.4agent." + x);
    document.getElementById("achievedtaz").value = localStorage.getItem("achievedtaz.4agent." + x);
    document.getElementById("targettaz").value = localStorage.getItem("targettaz.4agent." + x);
    document.getElementById("achievedweclub").value = localStorage.getItem("achievedweclub.4agent." + x);
    document.getElementById("targetweclub").value = localStorage.getItem("targetweclub.4agent." + x);
    document.getElementById("achievedwemix").value = localStorage.getItem("achievedwemix.4agent." + x);
    document.getElementById("targetwemix").value = localStorage.getItem("targetwemix.4agent." + x);
    document.getElementById("achievedwegold").value = localStorage.getItem("achievedwegold.4agent." + x);
    document.getElementById("achievedindigo").value = localStorage.getItem("achievedindigo.4agent." + x);
    document.getElementById("targetpostpaid").value = localStorage.getItem("targetpostpaid.4agent." + x) || localStorage.getItem("targetindigo.4agent." + x);
    document.getElementById("achievedtkafol").value = localStorage.getItem("achievedtkafol.4agent." + x);
    document.getElementById("achievedadsl").value = localStorage.getItem("achievedadsl.4agent." + x);
    document.getElementById("targetadsl").value = localStorage.getItem("targetadsl.4agent." + x);
    document.getElementById("achievedfixed").value = localStorage.getItem("achievedfixed.4agent." + x);
    document.getElementById("targetfixed").value = localStorage.getItem("targetfixed.4agent." + x);
    document.getElementById("achievedmifi").value = localStorage.getItem("achievedmifi.4agent." + x);
    document.getElementById("targetmifi").value = localStorage.getItem("targetmifi.4agent." + x);
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
    document.getElementById("todaysuperkix20").value = "";
    document.getElementById("todaysuperkix25").value = "";
    document.getElementById("todaysuperkix35").value = "";
    document.getElementById("todaysuperkix45").value = "";
    document.getElementById("todaysuperkix65").value = "";
    document.getElementById("todaysuperkix80").value = "";
    document.getElementById("todaysuperkix100").value = "";
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
    document.getElementById("achievedwegold").value = "";
    document.getElementById("achievedindigo").value = "";
    document.getElementById("targetpostpaid").value = "";
    document.getElementById("achievedtkafol").value = "";
    document.getElementById("achievedadsl").value = "";
    document.getElementById("targetadsl").value = "";
    document.getElementById("achievedfixed").value = "";
    document.getElementById("targetfixed").value = "";
    document.getElementById("achievedmifi").value = "";
    document.getElementById("targetmifi").value = "";
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
    document.getElementById("todaysuperkix20").value = "";
    document.getElementById("todaysuperkix25").value = "";
    document.getElementById("todaysuperkix35").value = "";
    document.getElementById("todaysuperkix45").value = "";
    document.getElementById("todaysuperkix65").value = "";
    document.getElementById("todaysuperkix80").value = "";
    document.getElementById("todaysuperkix100").value = "";
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
}
function NewUser() {
    sessionStorage.setItem("newuser", "true");
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
    document.getElementById("achievedwegold").value = "";
    document.getElementById("achievedindigo").value = "";
    document.getElementById("targetpostpaid").value = "";
    document.getElementById("achievedtkafol").value = "";
    document.getElementById("achievedadsl").value = "";
    document.getElementById("targetadsl").value = "";
    document.getElementById("achievedfixed").value = "";
    document.getElementById("targetfixed").value = "";
    document.getElementById("achievedmifi").value = "";
    document.getElementById("targetmifi").value = "";
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
    document.getElementById("todaysuperkix20").value = "";
    document.getElementById("todaysuperkix25").value = "";
    document.getElementById("todaysuperkix35").value = "";
    document.getElementById("todaysuperkix45").value = "";
    document.getElementById("todaysuperkix65").value = "";
    document.getElementById("todaysuperkix80").value = "";
    document.getElementById("todaysuperkix100").value = "";
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
    todaysuperkix20 = parseInt(document.getElementById("todaysuperkix20").value) || 0;
    todaysuperkix25 = parseInt(document.getElementById("todaysuperkix25").value) || 0;
    todaysuperkix35 = parseInt(document.getElementById("todaysuperkix35").value) || 0;
    todaysuperkix45 = parseInt(document.getElementById("todaysuperkix45").value) || 0;
    todaysuperkix65 = parseInt(document.getElementById("todaysuperkix65").value) || 0;
    todaysuperkix80 = parseInt(document.getElementById("todaysuperkix80").value) || 0;
    todaysuperkix100 = parseInt(document.getElementById("todaysuperkix100").value) || 0;
    achievedsuperkix = parseInt(document.getElementById("achievedsuperkix").value) || 0;
    utdsuperkix = todaysuperkix20 + todaysuperkix25 + todaysuperkix35 + todaysuperkix45 + todaysuperkix65 + todaysuperkix80 + todaysuperkix100 + achievedsuperkix || 0;
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
    todaygold200 = parseInt(document.getElementById("todaygold200").value) || 0;
    todaygold400 = parseInt(document.getElementById("todaygold400").value) || 0;
    todaygold600 = parseInt(document.getElementById("todaygold600").value) || 0;
    todaygold800 = parseInt(document.getElementById("todaygold800").value) || 0;
    todaygold1000 = parseInt(document.getElementById("todaygold1000").value) || 0;
    todaygold1500 = parseInt(document.getElementById("todaygold1500").value) || 0;
    achievedwegold = parseInt(document.getElementById("achievedwegold").value) || 0;
    utdwegold = todaygold200 + todaygold400 + todaygold600 + todaygold800 + todaygold1000 + todaygold1500 + achievedwegold || 0;
    todayindigofmc = parseInt(document.getElementById("todayindigofmc").value) || 0;
    todayindigoopen = parseInt(document.getElementById("todayindigoopen").value) || 0;
    todayindigocl = parseInt(document.getElementById("todayindigocl").value) || 0;
    achievedindigo = parseInt(document.getElementById("achievedindigo").value) || 0;
    utdindigo = todayindigofmc + todayindigoopen + todayindigocl + achievedindigo || 0;
    utdpostpaid = utdwegold + utdindigo || 0;
    targetpostpaid = parseInt(document.getElementById("targetpostpaid").value) || 0;
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
    utdmobile = utdpayg + utddata + utdsuperkix + utdtaz + utdweclub + utdwemix + utdpostpaid || 0;
    targetmobile = targetpayg + targetdata + targetsuperkix + targettaz + targetwemix + targetweclub + targetpostpaid || 0;
    vsMobile = ~~Number(Math.round((utdmobile / targetmobile) * 100)) || 0;
    reMobile = ~~Number(Math.round((((utdmobile / targetmobile) * 100) / day) * daysinmonth)) || 0;
    dailymobile =
        todaypayg +
            todaydata +
            todaysuperkix20 +
            todaysuperkix25 +
            todaysuperkix35 +
            todaysuperkix45 +
            todaysuperkix65 +
            todaysuperkix80 +
            todaysuperkix100 +
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
    if (todaysuperkix20 == "0") {
        todaysuperkix20report = "";
    } else {
        todaysuperkix20report = todaysuperkix20 + "*20 ";
    }
    if (todaysuperkix25 == "0") {
        todaysuperkix25report = "";
    } else {
        todaysuperkix25report = todaysuperkix25 + "*25 ";
    }
    if (todaysuperkix35 == "0") {
        todaysuperkix35report = "";
    } else {
        todaysuperkix35report = todaysuperkix35 + "*35 ";
    }
    if (todaysuperkix45 == "0") {
        todaysuperkix45report = "";
    } else {
        todaysuperkix45report = todaysuperkix45 + "*45 ";
    }
    if (todaysuperkix65 == "0") {
        todaysuperkix65report = "";
    } else {
        todaysuperkix65report = todaysuperkix65 + "*65 ";
    }
    if (todaysuperkix80 == "0") {
        todaysuperkix80report = "";
    } else {
        todaysuperkix80report = todaysuperkix80 + "*80 ";
    }
    if (todaysuperkix100 == "0") {
        todaysuperkix100report = "";
    } else {
        todaysuperkix100report = todaysuperkix100 + "*100 ";
    }
    todaysuperkixreport = todaysuperkix20report + todaysuperkix25report + todaysuperkix35report + todaysuperkix45report + todaysuperkix65report + todaysuperkix80report + todaysuperkix100report;
    if (todaysuperkixreport == "") {
        superkixreport = "";
    } else {
        superkixreport = "\n" + "Super Kix: " + todaysuperkixreport;
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
    todaysales = todaygoldreport + todayindigoreport + todaypaygreport + todaydatareport + superkixreport + tazbeetreport + weclubreport + wemixreport + todaytkafolreport + todayadslreport + todayfixedreport + todaymifireport;
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
        "We Gold: " +
        utdwegold +
        "\n" +
        "Indigo: " +
        utdindigo +
        "\n" +
        "Postpaid: " +
        utdpostpaid +
        "/" +
        targetpostpaid +
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
        "VS: " +
        vsMobile +
        "%" +
        "\n" +
        "RE: " +
        reMobile +
        "%" +
        "\n" +
        "\n" +
        "Tkafol & Karama: " +
        utdtkafol;
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
    localStorage.setItem("achievedwegold.4agent." + x, utdwegold);
    localStorage.setItem("achievedindigo.4agent." + x, utdindigo);
    localStorage.setItem("targetpostpaid.4agent." + x, document.getElementById("targetpostpaid").value);
    localStorage.setItem("achievedtkafol.4agent." + x, utdtkafol);
    localStorage.setItem("achievedadsl.4agent." + x, utdadsl);
    localStorage.setItem("targetadsl.4agent." + x, document.getElementById("targetadsl").value);
    localStorage.setItem("achievedfixed.4agent." + x, utdfixed);
    localStorage.setItem("targetfixed.4agent." + x, document.getElementById("targetfixed").value);
    localStorage.setItem("achievedmifi.4agent." + x, utdmifi);
    localStorage.setItem("targetmifi.4agent." + x, document.getElementById("targetmifi").value);
    document.getElementById("save__1").disabled = true;
    document.getElementById("save__2").disabled = true;
    localStorage.setItem("agentRestore", "true");
    localStorage.setItem("users", sessionStorage.getItem("users"));
}
function Save__2() {
    Save__1();
}
function Print__1() {
    doc = window.open("", "_blank");
    doc.document.open();
    doc.document.write("<html lang=en><head><title>Sales Report</title><style>body {font-family: monospace; display: flex;} div {margin: 0px auto 0px auto;}</style></head><body onload=window.print();setTimeout(window.close,1000);><div>");
    doc.document.write(document.getElementById("salesreport").value.replace(/\n/gi, "<br>"));
    doc.document.write("</div></body></html>");
    doc.document.close();
}
