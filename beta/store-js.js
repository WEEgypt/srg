function EnableRestore() {
    if (localStorage.getItem("storeRestore") == "true") {
        basic.style.display = "none";
        restore.style.display = "block";
        row__1.style.display = "none";
        row__2.style.display = "block";
        sessionStorage.removeItem("stores");
        sessionStorage.removeItem("newstore");
    } else {
        sessionStorage.setItem("stores", "1");
        localStorage.setItem("currentStore", "1");
    }
    if (localStorage.getItem("stores") > "1") {
        multi.style.display = "block";
        restore.style.display = "none";
        let x = localStorage.getItem("stores");
        for (i = 0; i < x; i++) {
            value = parseInt([i]) + 1;
            document.getElementById("stores").options.add(new Option(localStorage.getItem("storename.store." + value), value));
        }
        document.getElementById("stores").options.add(new Option("Add Another Store", "newstore"));
    }
}
function GetDate() {
    document.getElementById("day").value = new Date().getDate();
    document.getElementById("month").value = new Date().getMonth() + 1;
    document.getElementById("year").value = new Date().getFullYear();
    DaysFix();
}
function DaysFix() {
    var daysinmonth = new Date(document.getElementById("year").value, document.getElementById("month").value, 0).getDate();
    if (daysinmonth < 31 && document.getElementById("day").value == 31) {
        document.getElementById("day").selectedIndex = "30";
    }
    if (daysinmonth < 30 && document.getElementById("day").value == 30) {
        document.getElementById("day").selectedIndex = "29";
    }
    if (daysinmonth < 29 && document.getElementById("day").value == 29) {
        document.getElementById("day").selectedIndex = "28";
    }
    if (daysinmonth < 31 && document.getElementById("day").length == "32") {
        const list = document.getElementById("day");
        list.removeChild(list.lastElementChild);
    }
    if (daysinmonth < 30 && document.getElementById("day").length == "31") {
        const list = document.getElementById("day");
        list.removeChild(list.lastElementChild);
    }
    if (daysinmonth < 29 && document.getElementById("day").length == "30") {
        const list = document.getElementById("day");
        list.removeChild(list.lastElementChild);
    }
    if (daysinmonth == 31 && document.getElementById("day").length == "31") {
        document.getElementById("day").options.add(new Option("31", "31"));
    }
    if (daysinmonth == 31 && document.getElementById("day").length == "30") {
        document.getElementById("day").options.add(new Option("30", "30"));
        document.getElementById("day").options.add(new Option("31", "31"));
    }
    if (daysinmonth == 31 && document.getElementById("day").length == "29") {
        document.getElementById("day").options.add(new Option("29", "29"));
        document.getElementById("day").options.add(new Option("30", "30"));
        document.getElementById("day").options.add(new Option("31", "31"));
    }
    if (daysinmonth == 30 && document.getElementById("day").length == "30") {
        document.getElementById("day").options.add(new Option("30", "30"));
    }
    if (daysinmonth == 30 && document.getElementById("day").length == "29") {
        document.getElementById("day").options.add(new Option("29", "29"));
        document.getElementById("day").options.add(new Option("30", "30"));
    }
    if (daysinmonth == 29 && document.getElementById("day").length == "29") {
        document.getElementById("day").options.add(new Option("29", "29"));
    }
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
    if (document.getElementById("stores").value == "newstore") {
        multi.style.display = "none";
        NewStore();
    } else {
        multi.style.display = "none";
        restore.style.display = "block";
        newstore.style.display = "none";
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
    if (localStorage.getItem("stores") > "1") {
        document.getElementById("stores").innerHTML = "";
        multi.style.display = "block";
        restore.style.display = "none";
        let x = localStorage.getItem("stores");
        for (i = 0; i < x; i++) {
            value = parseInt([i]) + 1;
            document.getElementById("stores").options.add(new Option(localStorage.getItem("storename.store." + value), value));
        }
        document.getElementById("stores").options.add(new Option("Add Another Store", "newstore"));
        BackTransform();
    } else {
        Back__1();
    }
}
function Back__3() {
    if (basic.style.display === "block" && localStorage.getItem("stores") > "1" && sessionStorage.getItem("newstore") == "true") {
        basic.style.display = "none";
        multi.style.display = "block";
        document.getElementById("stores").innerHTML = "";
        let x = localStorage.getItem("stores");
        for (i = 0; i < x; i++) {
            value = parseInt([i]) + 1;
            document.getElementById("stores").options.add(new Option(localStorage.getItem("storename.store." + value), value));
        }
        document.getElementById("stores").options.add(new Option("Add Another Store", "newstore"));
    } else if (basic.style.display === "block") {
        basic.style.display = "none";
        restore.style.display = "block";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
    sessionStorage.removeItem("stores");
    sessionStorage.removeItem("newstore");
}
function Back__4() {
    if (target.style.display === "block") {
        target.style.display = "none";
        basic.style.display = "block";
        store.style.display = "block";
    }
    if (localStorage.getItem("storeRestore") == "true") {
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
    store.style.display = "none";
}
function Continue() {
    let x = document.getElementById("stores").value || 1;
    localStorage.setItem("currentStore", x);
    restore.style.display = "none";
    basic.style.display = "block";
    store.style.display = "none";
    row__1.style.display = "none";
    row__2.style.display = "none";
    today.style.display = "block";
    document.getElementById("storename").value = localStorage.getItem("storename.store." + x);
    document.getElementById("achievedpayg").value = localStorage.getItem("achievedpayg.store." + x);
    document.getElementById("targetpayg").value = localStorage.getItem("targetpayg.store." + x);
    document.getElementById("achieveddata").value = localStorage.getItem("achieveddata.store." + x);
    document.getElementById("targetdata").value = localStorage.getItem("targetdata.store." + x);
    document.getElementById("achievedsuperkix").value = localStorage.getItem("achievedsuperkix.store." + x);
    document.getElementById("targetsuperkix").value = localStorage.getItem("targetsuperkix.store." + x);
    document.getElementById("achievedtaz").value = localStorage.getItem("achievedtaz.store." + x);
    document.getElementById("targettaz").value = localStorage.getItem("targettaz.store." + x);
    document.getElementById("achievedweclub").value = localStorage.getItem("achievedweclub.store." + x);
    document.getElementById("targetweclub").value = localStorage.getItem("targetweclub.store." + x);
    document.getElementById("achievedwemix").value = localStorage.getItem("achievedwemix.store." + x);
    document.getElementById("targetwemix").value = localStorage.getItem("targetwemix.store." + x);
    document.getElementById("achievedwegoldfmc").value = localStorage.getItem("achievedwegoldfmc.store." + x) || localStorage.getItem("achievedwegold.store." + x);
    document.getElementById("achievedwegoldsa").value = localStorage.getItem("achievedwegoldsa.store." + x);
    document.getElementById("targetwegold").value = localStorage.getItem("targetwegold.store." + x);
    document.getElementById("achievedadsl140").value = localStorage.getItem("achievedadsl140.store." + x) || localStorage.getItem("achievedadsl.store." + x);
    document.getElementById("achievedadslht").value = localStorage.getItem("achievedadslht.store." + x);
    document.getElementById("targetadsl").value = localStorage.getItem("targetadsl.store." + x);
    document.getElementById("achievedfixed").value = localStorage.getItem("achievedfixed.store." + x);
    document.getElementById("targetfixed").value = localStorage.getItem("targetfixed.store." + x);
    document.getElementById("achievedwallet").value = localStorage.getItem("achievedwallet.store." + x);
    document.getElementById("targetwallet").value = localStorage.getItem("targetwallet.store." + x);
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
    document.getElementById("todaygold200fmc").value = "";
    document.getElementById("todaygold400fmc").value = "";
    document.getElementById("todaygold600fmc").value = "";
    document.getElementById("todaygold800fmc").value = "";
    document.getElementById("todaygold1000fmc").value = "";
    document.getElementById("todaygold1500fmc").value = "";
    document.getElementById("todaygold200sa").value = "";
    document.getElementById("todaygold400sa").value = "";
    document.getElementById("todaygold600sa").value = "";
    document.getElementById("todaygold800sa").value = "";
    document.getElementById("todaygold1000sa").value = "";
    document.getElementById("todaygold1500sa").value = "";
    document.getElementById("todayadsl140").value = "";
    document.getElementById("todayadsl200").value = "";
    document.getElementById("todayadsl250").value = "";
    document.getElementById("todayadsl300").value = "";
    document.getElementById("todayadsl400").value = "";
    document.getElementById("todayadsl500").value = "";
    document.getElementById("todayadsl600").value = "";
    document.getElementById("todayadsl1000").value = "";
    document.getElementById("todayadsl1500").value = "";
    document.getElementById("todayadslannual").value = "";
    document.getElementById("todayfixed").value = "";
    document.getElementById("todaywallet").value = "";
    document.getElementById("todayadslbills").value = "";
    document.getElementById("todaypostpaidbills").value = "";
    document.getElementById("todayfixedbills").value = "";
    document.getElementById("todaysimswap").value = "";
    document.getElementById("todaycash").value = "";
    NextTransform();
    sessionStorage.setItem("stores", localStorage.getItem("stores"));
}
function NewMonth() {
    let x = document.getElementById("stores").value || 1;
    localStorage.setItem("currentStore", x);
    restore.style.display = "none";
    basic.style.display = "block";
    document.getElementById("storename").value = localStorage.getItem("storename.store." + x);
    document.getElementById("achievedpayg").value = "";
    document.getElementById("targetpayg").value = localStorage.getItem("targetpayg.store." + x);
    document.getElementById("achieveddata").value = "";
    document.getElementById("targetdata").value = localStorage.getItem("targetdata.store." + x);
    document.getElementById("achievedsuperkix").value = "";
    document.getElementById("targetsuperkix").value = localStorage.getItem("targetsuperkix.store." + x);
    document.getElementById("achievedtaz").value = "";
    document.getElementById("targettaz").value = localStorage.getItem("targettaz.store." + x);
    document.getElementById("achievedweclub").value = "";
    document.getElementById("targetweclub").value = localStorage.getItem("targetweclub.store." + x);
    document.getElementById("achievedwemix").value = "";
    document.getElementById("targetwemix").value = localStorage.getItem("targetwemix.store." + x);
    document.getElementById("achievedwegoldfmc").value = "";
    document.getElementById("achievedwegoldsa").value = "";
    document.getElementById("targetwegold").value = localStorage.getItem("targetwegold.store." + x);
    document.getElementById("achievedadsl140").value = "";
    document.getElementById("achievedadslht").value = "";
    document.getElementById("targetadsl").value = localStorage.getItem("targetadsl.store." + x);
    document.getElementById("achievedfixed").value = "";
    document.getElementById("targetfixed").value = localStorage.getItem("targetfixed.store." + x);
    document.getElementById("achievedwallet").value = "";
    document.getElementById("targetwallet").value = localStorage.getItem("targetwallet.store." + x);
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
    document.getElementById("todaygold200fmc").value = "";
    document.getElementById("todaygold400fmc").value = "";
    document.getElementById("todaygold600fmc").value = "";
    document.getElementById("todaygold800fmc").value = "";
    document.getElementById("todaygold1000fmc").value = "";
    document.getElementById("todaygold1500fmc").value = "";
    document.getElementById("todaygold200sa").value = "";
    document.getElementById("todaygold400sa").value = "";
    document.getElementById("todaygold600sa").value = "";
    document.getElementById("todaygold800sa").value = "";
    document.getElementById("todaygold1000sa").value = "";
    document.getElementById("todaygold1500sa").value = "";
    document.getElementById("todayadsl140").value = "";
    document.getElementById("todayadsl200").value = "";
    document.getElementById("todayadsl250").value = "";
    document.getElementById("todayadsl300").value = "";
    document.getElementById("todayadsl400").value = "";
    document.getElementById("todayadsl500").value = "";
    document.getElementById("todayadsl600").value = "";
    document.getElementById("todayadsl1000").value = "";
    document.getElementById("todayadsl1500").value = "";
    document.getElementById("todayadslannual").value = "";
    document.getElementById("todayfixed").value = "";
    document.getElementById("todaywallet").value = "";
    document.getElementById("todayadslbills").value = "";
    document.getElementById("todaypostpaidbills").value = "";
    document.getElementById("todayfixedbills").value = "";
    document.getElementById("todaysimswap").value = "";
    document.getElementById("todaycash").value = "";
    NextTransform();
    sessionStorage.setItem("stores", localStorage.getItem("stores"));
}
function NewStore() {
    sessionStorage.setItem("newstore", "true");
    stores = parseInt(localStorage.getItem("stores"));
    x = stores + 1;
    sessionStorage.setItem("stores", x);
    localStorage.setItem("currentStore", x);
    restore.style.display = "none";
    basic.style.display = "block";
    document.getElementById("storename").value = "";
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
    document.getElementById("achievedwegoldfmc").value = "";
    document.getElementById("achievedwegoldsa").value = "";
    document.getElementById("targetwegold").value = "";
    document.getElementById("achievedadsl140").value = "";
    document.getElementById("achievedadslht").value = "";
    document.getElementById("targetadsl").value = "";
    document.getElementById("achievedfixed").value = "";
    document.getElementById("targetfixed").value = "";
    document.getElementById("achievedwallet").value = "";
    document.getElementById("targetwallet").value = "";
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
    document.getElementById("todaygold200fmc").value = "";
    document.getElementById("todaygold400fmc").value = "";
    document.getElementById("todaygold600fmc").value = "";
    document.getElementById("todaygold800fmc").value = "";
    document.getElementById("todaygold1000fmc").value = "";
    document.getElementById("todaygold1500fmc").value = "";
    document.getElementById("todaygold200sa").value = "";
    document.getElementById("todaygold400sa").value = "";
    document.getElementById("todaygold600sa").value = "";
    document.getElementById("todaygold800sa").value = "";
    document.getElementById("todaygold1000sa").value = "";
    document.getElementById("todaygold1500sa").value = "";
    document.getElementById("todayadsl140").value = "";
    document.getElementById("todayadsl200").value = "";
    document.getElementById("todayadsl250").value = "";
    document.getElementById("todayadsl300").value = "";
    document.getElementById("todayadsl400").value = "";
    document.getElementById("todayadsl500").value = "";
    document.getElementById("todayadsl600").value = "";
    document.getElementById("todayadsl1000").value = "";
    document.getElementById("todayadsl1500").value = "";
    document.getElementById("todayadslannual").value = "";
    document.getElementById("todayfixed").value = "";
    document.getElementById("todaywallet").value = "";
    document.getElementById("todayadslbills").value = "";
    document.getElementById("todaypostpaidbills").value = "";
    document.getElementById("todayfixedbills").value = "";
    document.getElementById("todaysimswap").value = "";
    document.getElementById("todaycash").value = "";
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
    day = parseInt(document.getElementById("day").value);
    month = parseInt(document.getElementById("month").value);
    year = parseInt(document.getElementById("year").value);
    date = day + "-" + month + "-" + year;
    daysinmonth = new Date(year, month, 0).getDate();
    storename = document.getElementById("storename").value;
    todaypaygInput = document.getElementById("todaypayg").value.split(" ");
    todaypayg = 0;
    for (i = 0; i < todaypaygInput.length; i++) {
        todaypayg += parseInt(todaypaygInput[i]) || 0;
    }
    achievedpayg = parseInt(document.getElementById("achievedpayg").value) || 0;
    utdpayg = todaypayg + achievedpayg || 0;
    targetpayg = parseInt(document.getElementById("targetpayg").value) || 0;
    todaydataInput = document.getElementById("todaydata").value.split(" ");
    todaydata = 0;
    for (i = 0; i < todaydataInput.length; i++) {
        todaydata += parseInt(todaydataInput[i]) || 0;
    }
    achieveddata = parseInt(document.getElementById("achieveddata").value) || 0;
    utddata = todaydata + achieveddata || 0;
    targetdata = parseInt(document.getElementById("targetdata").value) || 0;
    todaysuperkix20Input = document.getElementById("todaysuperkix20").value.split(" ");
    todaysuperkix20 = 0;
    for (i = 0; i < todaysuperkix20Input.length; i++) {
        todaysuperkix20 += parseInt(todaysuperkix20Input[i]) || 0;
    }
    todaysuperkix25Input = document.getElementById("todaysuperkix25").value.split(" ");
    todaysuperkix25 = 0;
    for (i = 0; i < todaysuperkix25Input.length; i++) {
        todaysuperkix25 += parseInt(todaysuperkix25Input[i]) || 0;
    }
    todaysuperkix35Input = document.getElementById("todaysuperkix35").value.split(" ");
    todaysuperkix35 = 0;
    for (i = 0; i < todaysuperkix35Input.length; i++) {
        todaysuperkix35 += parseInt(todaysuperkix35Input[i]) || 0;
    }
    todaysuperkix45Input = document.getElementById("todaysuperkix45").value.split(" ");
    todaysuperkix45 = 0;
    for (i = 0; i < todaysuperkix45Input.length; i++) {
        todaysuperkix45 += parseInt(todaysuperkix45Input[i]) || 0;
    }
    todaysuperkix65Input = document.getElementById("todaysuperkix65").value.split(" ");
    todaysuperkix65 = 0;
    for (i = 0; i < todaysuperkix65Input.length; i++) {
        todaysuperkix65 += parseInt(todaysuperkix65Input[i]) || 0;
    }
    todaysuperkix80Input = document.getElementById("todaysuperkix80").value.split(" ");
    todaysuperkix80 = 0;
    for (i = 0; i < todaysuperkix80Input.length; i++) {
        todaysuperkix80 += parseInt(todaysuperkix80Input[i]) || 0;
    }
    todaysuperkix100Input = document.getElementById("todaysuperkix100").value.split(" ");
    todaysuperkix100 = 0;
    for (i = 0; i < todaysuperkix100Input.length; i++) {
        todaysuperkix100 += parseInt(todaysuperkix100Input[i]) || 0;
    }
    todaysuperkix = todaysuperkix20 + todaysuperkix25 + todaysuperkix35 + todaysuperkix45 + todaysuperkix65 + todaysuperkix80 + todaysuperkix100 || 0;
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
    achievedsuperkix = parseInt(document.getElementById("achievedsuperkix").value) || 0;
    utdsuperkix = todaysuperkix20 + todaysuperkix25 + todaysuperkix35 + todaysuperkix45 + todaysuperkix65 + todaysuperkix80 + todaysuperkix100 + achievedsuperkix || 0;
    targetsuperkix = parseInt(document.getElementById("targetsuperkix").value) || 0;
    todaytazbeet30Input = document.getElementById("todaytazbeet30").value.split(" ");
    todaytazbeet30 = 0;
    for (i = 0; i < todaytazbeet30Input.length; i++) {
        todaytazbeet30 += parseInt(todaytazbeet30Input[i]) || 0;
    }
    todaytazbeet40Input = document.getElementById("todaytazbeet40").value.split(" ");
    todaytazbeet40 = 0;
    for (i = 0; i < todaytazbeet40Input.length; i++) {
        todaytazbeet40 += parseInt(todaytazbeet40Input[i]) || 0;
    }
    todaytazbeet70Input = document.getElementById("todaytazbeet70").value.split(" ");
    todaytazbeet70 = 0;
    for (i = 0; i < todaytazbeet70Input.length; i++) {
        todaytazbeet70 += parseInt(todaytazbeet70Input[i]) || 0;
    }
    todaytazbeet110Input = document.getElementById("todaytazbeet110").value.split(" ");
    todaytazbeet110 = 0;
    for (i = 0; i < todaytazbeet110Input.length; i++) {
        todaytazbeet110 += parseInt(todaytazbeet110Input[i]) || 0;
    }
    todaytazbeet = todaytazbeet30 + todaytazbeet40 + todaytazbeet70 + todaytazbeet110 || 0;
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
    achievedtaz = parseInt(document.getElementById("achievedtaz").value) || 0;
    utdtaz = todaytazbeet30 + todaytazbeet40 + todaytazbeet70 + todaytazbeet110 + achievedtaz || 0;
    targettaz = parseInt(document.getElementById("targettaz").value) || 0;
    todayweclub25Input = document.getElementById("todayweclub25").value.split(" ");
    todayweclub25 = 0;
    for (i = 0; i < todayweclub25Input.length; i++) {
        todayweclub25 += parseInt(todayweclub25Input[i]) || 0;
    }
    todayweclub40Input = document.getElementById("todayweclub40").value.split(" ");
    todayweclub40 = 0;
    for (i = 0; i < todayweclub40Input.length; i++) {
        todayweclub40 += parseInt(todayweclub40Input[i]) || 0;
    }
    todayweclub65Input = document.getElementById("todayweclub65").value.split(" ");
    todayweclub65 = 0;
    for (i = 0; i < todayweclub65Input.length; i++) {
        todayweclub65 += parseInt(todayweclub65Input[i]) || 0;
    }
    todayweclub100Input = document.getElementById("todayweclub100").value.split(" ");
    todayweclub100 = 0;
    for (i = 0; i < todayweclub100Input.length; i++) {
        todayweclub100 += parseInt(todayweclub100Input[i]) || 0;
    }
    todayweclub = todayweclub25 + todayweclub40 + todayweclub65 + todayweclub100 || 0;
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
    achievedweclub = parseInt(document.getElementById("achievedweclub").value) || 0;
    utdweclub = todayweclub25 + todayweclub40 + todayweclub65 + todayweclub100 + achievedweclub || 0;
    targetweclub = parseInt(document.getElementById("targetweclub").value) || 0;
    todaywemix165Input = document.getElementById("todaywemix165").value.split(" ");
    todaywemix165 = 0;
    for (i = 0; i < todaywemix165Input.length; i++) {
        todaywemix165 += parseInt(todaywemix165Input[i]) || 0;
    }
    todaywemix240Input = document.getElementById("todaywemix240").value.split(" ");
    todaywemix240 = 0;
    for (i = 0; i < todaywemix240Input.length; i++) {
        todaywemix240 += parseInt(todaywemix240Input[i]) || 0;
    }
    todaywemix = todaywemix165 + todaywemix240 || 0;
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
    achievedwemix = parseInt(document.getElementById("achievedwemix").value) || 0;
    utdwemix = todaywemix165 + todaywemix240 + achievedwemix || 0;
    targetwemix = parseInt(document.getElementById("targetwemix").value) || 0;
    todaygold200fmcInput = document.getElementById("todaygold200fmc").value.split(" ");
    todaygold200fmc = 0;
    for (i = 0; i < todaygold200fmcInput.length; i++) {
        todaygold200fmc += parseInt(todaygold200fmcInput[i]) || 0;
    }
    todaygold400fmcInput = document.getElementById("todaygold400fmc").value.split(" ");
    todaygold400fmc = 0;
    for (i = 0; i < todaygold400fmcInput.length; i++) {
        todaygold400fmc += parseInt(todaygold400fmcInput[i]) || 0;
    }
    todaygold600fmcInput = document.getElementById("todaygold600fmc").value.split(" ");
    todaygold600fmc = 0;
    for (i = 0; i < todaygold600fmcInput.length; i++) {
        todaygold600fmc += parseInt(todaygold600fmcInput[i]) || 0;
    }
    todaygold800fmcInput = document.getElementById("todaygold800fmc").value.split(" ");
    todaygold800fmc = 0;
    for (i = 0; i < todaygold800fmcInput.length; i++) {
        todaygold800fmc += parseInt(todaygold800fmcInput[i]) || 0;
    }
    todaygold1000fmcInput = document.getElementById("todaygold1000fmc").value.split(" ");
    todaygold1000fmc = 0;
    for (i = 0; i < todaygold1000fmcInput.length; i++) {
        todaygold1000fmc += parseInt(todaygold1000fmcInput[i]) || 0;
    }
    todaygold1500fmcInput = document.getElementById("todaygold1500fmc").value.split(" ");
    todaygold1500fmc = 0;
    for (i = 0; i < todaygold1500fmcInput.length; i++) {
        todaygold1500fmc += parseInt(todaygold1500fmcInput[i]) || 0;
    }
    todaygold200saInput = document.getElementById("todaygold200sa").value.split(" ");
    todaygold200sa = 0;
    for (i = 0; i < todaygold200saInput.length; i++) {
        todaygold200sa += parseInt(todaygold200saInput[i]) || 0;
    }
    todaygold400saInput = document.getElementById("todaygold400sa").value.split(" ");
    todaygold400sa = 0;
    for (i = 0; i < todaygold400saInput.length; i++) {
        todaygold400sa += parseInt(todaygold400saInput[i]) || 0;
    }
    todaygold600saInput = document.getElementById("todaygold600sa").value.split(" ");
    todaygold600sa = 0;
    for (i = 0; i < todaygold600saInput.length; i++) {
        todaygold600sa += parseInt(todaygold600saInput[i]) || 0;
    }
    todaygold800saInput = document.getElementById("todaygold800sa").value.split(" ");
    todaygold800sa = 0;
    for (i = 0; i < todaygold800saInput.length; i++) {
        todaygold800sa += parseInt(todaygold800saInput[i]) || 0;
    }
    todaygold1000saInput = document.getElementById("todaygold1000sa").value.split(" ");
    todaygold1000sa = 0;
    for (i = 0; i < todaygold1000saInput.length; i++) {
        todaygold1000sa += parseInt(todaygold1000saInput[i]) || 0;
    }
    todaygold1500saInput = document.getElementById("todaygold1500sa").value.split(" ");
    todaygold1500sa = 0;
    for (i = 0; i < todaygold1500saInput.length; i++) {
        todaygold1500sa += parseInt(todaygold1500saInput[i]) || 0;
    }
    todaygoldfmc = todaygold200fmc + todaygold400fmc + todaygold600fmc + todaygold800fmc + todaygold1000fmc + todaygold1500fmc || 0;
    todaygoldsa = todaygold200sa + todaygold400sa + todaygold600sa + todaygold800sa + todaygold1000sa + todaygold1500sa || 0;
    todaygold = todaygoldfmc + todaygoldsa || 0;
    if (todaygold200fmc == "0") {
        todaygold200fmcreport = "";
    } else {
        todaygold200fmcreport = todaygold200fmc + "*200FMC ";
    }
    if (todaygold400fmc == "0") {
        todaygold400fmcreport = "";
    } else {
        todaygold400fmcreport = todaygold400fmc + "*400FMC ";
    }
    if (todaygold600fmc == "0") {
        todaygold600fmcreport = "";
    } else {
        todaygold600fmcreport = todaygold600fmc + "*600FMC ";
    }
    if (todaygold800fmc == "0") {
        todaygold800fmcreport = "";
    } else {
        todaygold800fmcreport = todaygold800fmc + "*800FMC ";
    }
    if (todaygold1000fmc == "0") {
        todaygold1000fmcreport = "";
    } else {
        todaygold1000fmcreport = todaygold1000fmc + "*1000FMC ";
    }
    if (todaygold1500fmc == "0") {
        todaygold1500fmcreport = "";
    } else {
        todaygold1500fmcreport = todaygold1500fmc + "*1500FMC ";
    }
    if (todaygold200sa == "0") {
        todaygold200sareport = "";
    } else {
        todaygold200sareport = todaygold200sa + "*200SA ";
    }
    if (todaygold400sa == "0") {
        todaygold400sareport = "";
    } else {
        todaygold400sareport = todaygold400sa + "*400SA ";
    }
    if (todaygold600sa == "0") {
        todaygold600sareport = "";
    } else {
        todaygold600sareport = todaygold600sa + "*600SA ";
    }
    if (todaygold800sa == "0") {
        todaygold800sareport = "";
    } else {
        todaygold800sareport = todaygold800sa + "*800SA ";
    }
    if (todaygold1000sa == "0") {
        todaygold1000sareport = "";
    } else {
        todaygold1000sareport = todaygold1000sa + "*1000SA ";
    }
    if (todaygold1500sa == "0") {
        todaygold1500sareport = "";
    } else {
        todaygold1500sareport = todaygold1500sa + "*1500SA ";
    }
    todaygoldreport =
        todaygold200fmcreport +
            todaygold400fmcreport +
            todaygold600fmcreport +
            todaygold800fmcreport +
            todaygold1000fmcreport +
            todaygold1500fmcreport +
            todaygold200sareport +
            todaygold400sareport +
            todaygold600sareport +
            todaygold800sareport +
            todaygold1000sareport +
            todaygold1500sareport || 0;
    achievedwegoldfmc = parseInt(document.getElementById("achievedwegoldfmc").value) || 0;
    achievedwegoldsa = parseInt(document.getElementById("achievedwegoldsa").value) || 0;
    utdwegoldfmc = todaygoldfmc + achievedwegoldfmc || 0;
    utdwegoldsa = todaygoldsa + achievedwegoldsa || 0;
    utdwegold = utdwegoldfmc + utdwegoldsa || 0;
    targetwegold = parseInt(document.getElementById("targetwegold").value) || 0;
    todayadsl140Input = document.getElementById("todayadsl140").value.split(" ");
    todayadsl140 = 0;
    for (i = 0; i < todayadsl140Input.length; i++) {
        todayadsl140 += parseInt(todayadsl140Input[i]) || 0;
    }
    todayadsl200Input = document.getElementById("todayadsl200").value.split(" ");
    todayadsl200 = 0;
    for (i = 0; i < todayadsl200Input.length; i++) {
        todayadsl200 += parseInt(todayadsl200Input[i]) || 0;
    }
    todayadsl250Input = document.getElementById("todayadsl250").value.split(" ");
    todayadsl250 = 0;
    for (i = 0; i < todayadsl250Input.length; i++) {
        todayadsl250 += parseInt(todayadsl250Input[i]) || 0;
    }
    todayadsl300Input = document.getElementById("todayadsl300").value.split(" ");
    todayadsl300 = 0;
    for (i = 0; i < todayadsl300Input.length; i++) {
        todayadsl300 += parseInt(todayadsl300Input[i]) || 0;
    }
    todayadsl400Input = document.getElementById("todayadsl400").value.split(" ");
    todayadsl400 = 0;
    for (i = 0; i < todayadsl400Input.length; i++) {
        todayadsl400 += parseInt(todayadsl400Input[i]) || 0;
    }
    todayadsl500Input = document.getElementById("todayadsl500").value.split(" ");
    todayadsl500 = 0;
    for (i = 0; i < todayadsl500Input.length; i++) {
        todayadsl500 += parseInt(todayadsl500Input[i]) || 0;
    }
    todayadsl600Input = document.getElementById("todayadsl600").value.split(" ");
    todayadsl600 = 0;
    for (i = 0; i < todayadsl600Input.length; i++) {
        todayadsl600 += parseInt(todayadsl600Input[i]) || 0;
    }
    todayadsl1000Input = document.getElementById("todayadsl1000").value.split(" ");
    todayadsl1000 = 0;
    for (i = 0; i < todayadsl1000Input.length; i++) {
        todayadsl1000 += parseInt(todayadsl1000Input[i]) || 0;
    }
    todayadsl1500Input = document.getElementById("todayadsl1500").value.split(" ");
    todayadsl1500 = 0;
    for (i = 0; i < todayadsl1500Input.length; i++) {
        todayadsl1500 += parseInt(todayadsl1500Input[i]) || 0;
    }
    todayadslannualInput = document.getElementById("todayadslannual").value.split(" ");
    todayadslannual = 0;
    for (i = 0; i < todayadslannualInput.length; i++) {
        todayadslannual += parseInt(todayadslannualInput[i]) || 0;
    }
    todayadsl140 = todayadsl140 || 0;
    todayadslht = todayadsl200 + todayadsl250 + todayadsl300 + todayadsl400 + todayadsl500 + todayadsl600 + todayadsl1000 + todayadsl1500 + todayadslannual || 0;
    todayadsl = todayadsl140 + todayadslht || 0;
    if (todayadsl140 == "0") {
        todayadsl140report = "";
    } else {
        todayadsl140report = todayadsl140 + "*140GB ";
    }
    if (todayadsl200 == "0") {
        todayadsl200report = "";
    } else {
        todayadsl200report = todayadsl200 + "*200GB ";
    }
    if (todayadsl250 == "0") {
        todayadsl250report = "";
    } else {
        todayadsl250report = todayadsl250 + "*250GB ";
    }
    if (todayadsl300 == "0") {
        todayadsl300report = "";
    } else {
        todayadsl300report = todayadsl300 + "*300GB ";
    }
    if (todayadsl400 == "0") {
        todayadsl400report = "";
    } else {
        todayadsl400report = todayadsl400 + "*400GB ";
    }
    if (todayadsl500 == "0") {
        todayadsl500report = "";
    } else {
        todayadsl500report = todayadsl500 + "*500GB ";
    }
    if (todayadsl600 == "0") {
        todayadsl600report = "";
    } else {
        todayadsl600report = todayadsl600 + "*600GB ";
    }
    if (todayadsl1000 == "0") {
        todayadsl1000report = "";
    } else {
        todayadsl1000report = todayadsl1000 + "*1TB ";
    }
    if (todayadsl1500 == "0") {
        todayadsl1500report = "";
    } else {
        todayadsl1500report = todayadsl1500 + "*1.5TB ";
    }
    if (todayadslannual == "0") {
        todayadslannualreport = "";
    } else {
        todayadslannualreport = todayadslannual + "*Annual ";
    }
    todayadslreport = todayadsl140report + todayadsl200report + todayadsl250report + todayadsl300report + todayadsl400report + todayadsl500report + todayadsl600report + todayadsl1000report + todayadsl1500report + todayadslannualreport || 0;
    achievedadsl140 = parseInt(document.getElementById("achievedadsl140").value) || 0;
    achievedadslht = parseInt(document.getElementById("achievedadslht").value) || 0;
    utdadsl140 = todayadsl140 + achievedadsl140 || 0;
    utdadslht = todayadslht + achievedadslht || 0;
    utdadsl = utdadsl140 + utdadslht || 0;
    targetadsl = parseInt(document.getElementById("targetadsl").value) || 0;
    todayfixedInput = document.getElementById("todayfixed").value.split(" ");
    todayfixed = 0;
    for (i = 0; i < todayfixedInput.length; i++) {
        todayfixed += parseInt(todayfixedInput[i]) || 0;
    }
    achievedfixed = parseInt(document.getElementById("achievedfixed").value) || 0;
    utdfixed = todayfixed + achievedfixed || 0;
    targetfixed = parseInt(document.getElementById("targetfixed").value) || 0;
    todaywalletInput = document.getElementById("todaywallet").value.split(" ");
    todaywallet = 0;
    for (i = 0; i < todaywalletInput.length; i++) {
        todaywallet += parseInt(todaywalletInput[i]) || 0;
    }
    achievedwallet = parseInt(document.getElementById("achievedwallet").value) || 0;
    utdwallet = todaywallet + achievedwallet || 0;
    targetwallet = parseInt(document.getElementById("targetwallet").value) || 0;
    todayadslbillsInput = document.getElementById("todayadslbills").value.split(" ");
    todayadslbills = 0;
    for (i = 0; i < todayadslbillsInput.length; i++) {
        todayadslbills += parseInt(todayadslbillsInput[i]) || 0;
    }
    todaypostpaidbillsInput = document.getElementById("todaypostpaidbills").value.split(" ");
    todaypostpaidbills = 0;
    for (i = 0; i < todaypostpaidbillsInput.length; i++) {
        todaypostpaidbills += parseInt(todaypostpaidbillsInput[i]) || 0;
    }
    todayfixedbillsInput = document.getElementById("todayfixedbills").value.split(" ");
    todayfixedbills = 0;
    for (i = 0; i < todayfixedbillsInput.length; i++) {
        todayfixedbills += parseInt(todayfixedbillsInput[i]) || 0;
    }
    todaysimswapInput = document.getElementById("todaysimswap").value.split(" ");
    todaysimswap = 0;
    for (i = 0; i < todaysimswapInput.length; i++) {
        todaysimswap += parseInt(todaysimswapInput[i]) || 0;
    }
    todaycashInput = document.getElementById("todaycash").value.split(" ");
    todaycash = 0;
    for (i = 0; i < todaycashInput.length; i++) {
        todaycash += parseInt(todaycashInput[i]) || 0;
    }
    dailymobile = todaypayg + todaydata + todaysuperkix + todaytazbeet + todayweclub + todaywemix + todaygold || 0;
    utdmobile = utdpayg + utddata + utdsuperkix + utdtaz + utdweclub + utdwemix + utdwegold || 0;
    targetmobile = targetpayg + targetdata + targetsuperkix + targettaz + targetwemix + targetweclub + targetwegold || 0;
    vsPAYG = ~~Number(Math.round((utdpayg / targetpayg) * 100)) || 0;
    vsData = ~~Number(Math.round((utddata / targetdata) * 100)) || 0;
    vsSuperKix = ~~Number(Math.round((utdsuperkix / targetsuperkix) * 100)) || 0;
    vsTaz = ~~Number(Math.round((utdtaz / targettaz) * 100)) || 0;
    vsWeClub = ~~Number(Math.round((utdweclub / targetweclub) * 100)) || 0;
    vsWeMix = ~~Number(Math.round((utdwemix / targetwemix) * 100)) || 0;
    vsGold = ~~Number(Math.round((utdwegold / targetwegold) * 100)) || 0;
    vsGoldSa = ~~Number(Math.round((utdwegoldsa / utdwegold) * 100)) || 0;
    vsAdsl = ~~Number(Math.round((utdadsl / targetadsl) * 100)) || 0;
    vsAdslHt = ~~Number(Math.round((utdadslht / utdadsl) * 100)) || 0;
    vsFixed = ~~Number(Math.round((utdfixed / targetfixed) * 100)) || 0;
    vsWallet = ~~Number(Math.round((utdwallet / targetwallet) * 100)) || 0;
    vsMobile = ~~Number(Math.round((utdmobile / targetmobile) * 100)) || 0;
    reMobile = ~~Number(Math.round((((utdmobile / targetmobile) * 100) / day) * daysinmonth)) || 0;
    dailyrequired = ~~Number(Math.ceil((targetmobile - utdmobile) / (daysinmonth - day))) || 0;
    if (daysinmonth - day == "0" || dailyrequired <= "0") {
        dailyrequiredreport = "-";
    } else {
        dailyrequiredreport = dailyrequired;
    }
    if (daysinmonth - day == "0") {
        reMobilereport = "-";
    } else {
        reMobilereport = reMobile + "%";
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
    var targetArray = [
        "T",
        targetpayg.toString(),
        targetdata.toString(),
        targetsuperkix.toString(),
        targettaz.toString(),
        targetweclub.toString(),
        targetwemix.toString(),
        targetwegold.toString(),
        targetadsl.toString(),
        targetfixed.toString(),
        targetwallet.toString(),
        targetmobile.toString(),
    ];
    var fakeTargetArray = [
        targetpayg.toString(),
        targetdata.toString(),
        targetsuperkix.toString(),
        targettaz.toString(),
        targetweclub.toString(),
        targetwemix.toString(),
        targetwegold.toString(),
        targetadsl.toString(),
        targetfixed.toString(),
        targetwallet.toString(),
        targetmobile.toString(),
    ];
    let maxTarget = Math.max(...fakeTargetArray).toString().length;
    if (maxTarget < 5) {
        newMaxTarget = 5;
    } else {
        newMaxTarget = maxTarget;
    }
    var targetArrayAdjusted = correctLength(targetArray, newMaxTarget);
    function correctLength(array, length) {
        array.map(function (v, i) {
            if (array[i].length < length) {
                array[i] += Array(length + 1 - array[i].length).join(" ");
            }
        });
        return array;
    }
    targetHeader = targetArrayAdjusted[0];
    targetpaygAdjusted = targetArrayAdjusted[1];
    targetdataAdjusted = targetArrayAdjusted[2];
    targetsuperkixAdjusted = targetArrayAdjusted[3];
    targettazAdjusted = targetArrayAdjusted[4];
    targetweclubAdjusted = targetArrayAdjusted[5];
    targetwemixAdjusted = targetArrayAdjusted[6];
    targetwegoldAdjusted = targetArrayAdjusted[7];
    targetadslAdjusted = targetArrayAdjusted[8];
    targetfixedAdjusted = targetArrayAdjusted[9];
    targetwalletAdjusted = targetArrayAdjusted[10];
    targetmobileAdjusted = targetArrayAdjusted[11];
    var utdArray = [
        "A",
        utdpayg.toString(),
        utddata.toString(),
        utdsuperkix.toString(),
        utdtaz.toString(),
        utdweclub.toString(),
        utdwemix.toString(),
        utdwegold.toString(),
        utdadsl.toString(),
        utdfixed.toString(),
        utdwallet.toString(),
        utdmobile.toString(),
    ];
    var fakeUtdArray = [
        utdpayg.toString(),
        utddata.toString(),
        utdsuperkix.toString(),
        utdtaz.toString(),
        utdweclub.toString(),
        utdwemix.toString(),
        utdwegold.toString(),
        utdadsl.toString(),
        utdfixed.toString(),
        utdwallet.toString(),
        utdmobile.toString(),
    ];
    let maxUtd = Math.max(...fakeUtdArray).toString().length;
    if (maxUtd < 5) {
        newMaxUtd = 5;
    } else {
        newMaxUtd = maxUtd;
    }
    var utdArrayAdjusted = correctLength(utdArray, newMaxUtd);
    function correctLength(array, length) {
        array.map(function (v, i) {
            if (array[i].length < length) {
                array[i] += Array(length + 1 - array[i].length).join(" ");
            }
        });
        return array;
    }
    achievedHeader = utdArrayAdjusted[0];
    utdpaygAdjusted = utdArrayAdjusted[1];
    utddataAdjusted = utdArrayAdjusted[2];
    utdsuperkixAdjusted = utdArrayAdjusted[3];
    utdtazAdjusted = utdArrayAdjusted[4];
    utdweclubAdjusted = utdArrayAdjusted[5];
    utdwemixAdjusted = utdArrayAdjusted[6];
    utdwegoldAdjusted = utdArrayAdjusted[7];
    utdadslAdjusted = utdArrayAdjusted[8];
    utdfixedAdjusted = utdArrayAdjusted[9];
    utdwalletAdjusted = utdArrayAdjusted[10];
    utdmobileAdjusted = utdArrayAdjusted[11];
    document.getElementById("salesreport").value =
        "Date: " +
        date +
        "\n" +
        "Store: " +
        storename +
        "\n" +
        "--------------------------" +
        "\n" +
        "PAYG: " +
        todaypayg +
        "\n" +
        "Data: " +
        todaydata +
        "\n" +
        "Kix: " +
        todaysuperkixreport +
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
        "We Gold: " +
        todaygoldreport +
        "\n" +
        "ADSL: " +
        todayadslreport +
        "\n" +
        "Fixed: " +
        todayfixed +
        "\n" +
        "Wallet: " +
        todaywallet +
        "\n" +
        "--------------------------" +
        "\n" +
        "Today Sales: " +
        +dailymobile +
        " Mob" +
        todayadslfordailysales +
        todayfixedfordailysales +
        "\n" +
        "--------------------------" +
        "\n" +
        "Daily Required: " +
        dailyrequiredreport +
        "\n" +
        "RE: " +
        reMobilereport +
        "\n" +
        "--------------------------" +
        "\n" +
        "We Gold SA: " +
        vsGoldSa +
        "%" +
        "\n" +
        "ADSL HT: " +
        vsAdslHt +
        "%" +
        "\n" +
        "#--------------------------" +
        "\n" +
        "Product:   " +
        targetHeader +
        " " +
        achievedHeader +
        " VS" +
        "\n" +
        "--------------------------" +
        "\n" +
        "PAYG   :   " +
        targetpaygAdjusted +
        " " +
        utdpaygAdjusted +
        " " +
        vsPAYG +
        "%" +
        "\n" +
        "Data   :   " +
        targetdataAdjusted +
        " " +
        utddataAdjusted +
        " " +
        vsData +
        "%" +
        "\n" +
        "Kix    :   " +
        targetsuperkixAdjusted +
        " " +
        utdsuperkixAdjusted +
        " " +
        vsSuperKix +
        "%" +
        "\n" +
        "Tazbeet:   " +
        targettazAdjusted +
        " " +
        utdtazAdjusted +
        " " +
        vsTaz +
        "%" +
        "\n" +
        "We Club:   " +
        targetweclubAdjusted +
        " " +
        utdweclubAdjusted +
        " " +
        vsWeClub +
        "%" +
        "\n" +
        "We Mix :   " +
        targetwemixAdjusted +
        " " +
        utdwemixAdjusted +
        " " +
        vsWeMix +
        "%" +
        "\n" +
        "We Gold:   " +
        targetwegoldAdjusted +
        " " +
        utdwegoldAdjusted +
        " " +
        vsGold +
        "%" +
        "\n" +
        "ADSL   :   " +
        targetadslAdjusted +
        " " +
        utdadslAdjusted +
        " " +
        vsAdsl +
        "%" +
        "\n" +
        "Fixed  :   " +
        targetfixedAdjusted +
        " " +
        utdfixedAdjusted +
        " " +
        vsFixed +
        "%" +
        "\n" +
        "Wallet :   " +
        targetwalletAdjusted +
        " " +
        utdwalletAdjusted +
        " " +
        vsWallet +
        "%" +
        "\n" +
        "--------------------------" +
        "\n" +
        "Total  :   " +
        targetmobileAdjusted +
        " " +
        utdmobileAdjusted +
        " " +
        vsMobile +
        "%" +
        "\n" +
        "--------------------------#" +
        "\n" +
        "ADSL Bills: " +
        todayadslbills +
        "\n" +
        "Postpaid Bills: " +
        todaypostpaidbills +
        "\n" +
        "Fixed Bills: " +
        todayfixedbills +
        "\n" +
        "SIM Swap: " +
        todaysimswap +
        "\n" +
        "Cash: " +
        todaycash +
        " LE";
    document.getElementById("save__1").disabled = false;
    document.getElementById("save__2").disabled = false;
    document.getElementById("copy__1").disabled = false;
    document.getElementById("copy__2").disabled = false;
    document.getElementById("save__1").innerHTML = "Save";
    document.getElementById("save__2").innerHTML = "Save";
    document.getElementById("copy__1").innerHTML = "Copy";
    document.getElementById("copy__2").innerHTML = "Copy";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    NextTransform();
}
function Copy__1() {
    salesreportValue = document.getElementById("salesreport").value.replace(/#/gi, "```");
    navigator.clipboard.writeText(salesreportValue);
    document.getElementById("copy__1").disabled = true;
    document.getElementById("copy__2").disabled = true;
    document.getElementById("copy__1").innerHTML = "Copied";
    document.getElementById("copy__2").innerHTML = "Copied";
}
function Copy__2() {
    Copy__1();
}
function Share__1() {
    salesreportValue = document.getElementById("salesreport").value.replace(/#/gi, "```");
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
    let x = parseInt(localStorage.getItem("currentStore"));
    localStorage.setItem("storename.store." + x, document.getElementById("storename").value || "Store " + x);
    localStorage.setItem("achievedpayg.store." + x, utdpayg);
    localStorage.setItem("targetpayg.store." + x, document.getElementById("targetpayg").value);
    localStorage.setItem("achieveddata.store." + x, utddata);
    localStorage.setItem("targetdata.store." + x, document.getElementById("targetdata").value);
    localStorage.setItem("achievedsuperkix.store." + x, utdsuperkix);
    localStorage.setItem("targetsuperkix.store." + x, document.getElementById("targetsuperkix").value);
    localStorage.setItem("achievedtaz.store." + x, utdtaz);
    localStorage.setItem("targettaz.store." + x, document.getElementById("targettaz").value);
    localStorage.setItem("achievedweclub.store." + x, utdweclub);
    localStorage.setItem("targetweclub.store." + x, document.getElementById("targetweclub").value);
    localStorage.setItem("achievedwemix.store." + x, utdwemix);
    localStorage.setItem("targetwemix.store." + x, document.getElementById("targetwemix").value);
    localStorage.setItem("achievedwegoldfmc.store." + x, utdwegoldfmc);
    localStorage.setItem("achievedwegoldsa.store." + x, utdwegoldsa);
    localStorage.setItem("targetwegold.store." + x, document.getElementById("targetwegold").value);
    localStorage.setItem("achievedadsl140.store." + x, utdadsl140);
    localStorage.setItem("achievedadslht.store." + x, utdadslht);
    localStorage.setItem("targetadsl.store." + x, document.getElementById("targetadsl").value);
    localStorage.setItem("achievedfixed.store." + x, utdfixed);
    localStorage.setItem("targetfixed.store." + x, document.getElementById("targetfixed").value);
    localStorage.setItem("achievedwallet.store." + x, utdwallet);
    localStorage.setItem("targetwallet.store." + x, document.getElementById("targetwallet").value);
    document.getElementById("save__1").disabled = true;
    document.getElementById("save__2").disabled = true;
    document.getElementById("save__1").innerHTML = "Saved";
    document.getElementById("save__2").innerHTML = "Saved";
    localStorage.setItem("storeRestore", "true");
    localStorage.setItem("stores", sessionStorage.getItem("stores"));
}
function Save__2() {
    Save__1();
}
function Print__1() {
    doc = window.open("", "_blank");
    doc.document.open();
    doc.document.write("<html lang=en><head><title>Sales Report</title><style>body {font-family: monospace; display: flex;} div {margin: 0px auto 0px auto;}</style></head><body onload=window.print();setTimeout(window.close,1000);><div>");
    doc.document.write(document.getElementById("salesreport").value.replace(/  /gi, "&nbsp;&nbsp;").replace(/\n/gi, "<br>").replace(/#/gi, ""));
    doc.document.write("</div></body></html>");
    doc.document.close();
}
