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
    document.getElementById("achievedpostpaid").value = localStorage.getItem("achievedpostpaid.store." + x);
    document.getElementById("targetpostpaid").value = localStorage.getItem("targetpostpaid.store." + x);
    document.getElementById("achievedadsl").value = localStorage.getItem("achievedadsl.store." + x);
    document.getElementById("targetadsl").value = localStorage.getItem("targetadsl.store." + x);
    document.getElementById("achievedfixed").value = localStorage.getItem("achievedfixed.store." + x);
    document.getElementById("targetfixed").value = localStorage.getItem("targetfixed.store." + x);
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
    let x = document.getElementById("stores").value || 1;
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
    document.getElementById("achievedpostpaid").value = "";
    document.getElementById("targetpostpaid").value = "";
    document.getElementById("achievedadsl").value = "";
    document.getElementById("targetadsl").value = "";
    document.getElementById("achievedfixed").value = "";
    document.getElementById("targetfixed").value = "";
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
    document.getElementById("achievedpostpaid").value = "";
    document.getElementById("targetpostpaid").value = "";
    document.getElementById("achievedadsl").value = "";
    document.getElementById("targetadsl").value = "";
    document.getElementById("achievedfixed").value = "";
    document.getElementById("targetfixed").value = "";
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
    storename = document.getElementById("storename").value;
    day = parseInt(document.getElementById("day").value);
    month = parseInt(document.getElementById("month").value);
    year = parseInt(document.getElementById("year").value);
    date = day + "-" + month + "-" + year;
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
    todaysuperkixreport = todaysuperkix20report + todaysuperkix25report + todaysuperkix35report + todaysuperkix45report + todaysuperkix65report + todaysuperkix80report + todaysuperkix100report || 0;
    achievedsuperkix = parseInt(document.getElementById("achievedsuperkix").value) || 0;
    utdsuperkix = todaysuperkix + achievedsuperkix || 0;
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
    todaytazbeetreport = todaytazbeet30report + todaytazbeet40report + todaytazbeet70report + todaytazbeet110report || 0;
    achievedtaz = parseInt(document.getElementById("achievedtaz").value) || 0;
    utdtaz = todaytazbeet + achievedtaz || 0;
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
    todayweclubreport = todayweclub25report + todayweclub40report + todayweclub65report + todayweclub100report || 0;
    achievedweclub = parseInt(document.getElementById("achievedweclub").value) || 0;
    utdweclub = todayweclub + achievedweclub || 0;
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
    todaywemixreport = todaywemix165report + todaywemix240report || 0;
    achievedwemix = parseInt(document.getElementById("achievedwemix").value) || 0;
    utdwemix = todaywemix + achievedwemix || 0;
    targetwemix = parseInt(document.getElementById("targetwemix").value) || 0;
    todayindigofmcInput = document.getElementById("todayindigofmc").value.split(" ");
    todayindigofmc = 0;
    for (i = 0; i < todayindigofmcInput.length; i++) {
        todayindigofmc += parseInt(todayindigofmcInput[i]) || 0;
    }
    todayindigoopenInput = document.getElementById("todayindigoopen").value.split(" ");
    todayindigoopen = 0;
    for (i = 0; i < todayindigoopenInput.length; i++) {
        todayindigoopen += parseInt(todayindigoopenInput[i]) || 0;
    }
    todayindigoclInput = document.getElementById("todayindigocl").value.split(" ");
    todayindigocl = 0;
    for (i = 0; i < todayindigoclInput.length; i++) {
        todayindigocl += parseInt(todayindigoclInput[i]) || 0;
    }
    todayindigo = todayindigofmc + todayindigoopen + todayindigocl || 0;
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
    todaygold200Input = document.getElementById("todaygold200").value.split(" ");
    todaygold200 = 0;
    for (i = 0; i < todaygold200Input.length; i++) {
        todaygold200 += parseInt(todaygold200Input[i]) || 0;
    }
    todaygold400Input = document.getElementById("todaygold400").value.split(" ");
    todaygold400 = 0;
    for (i = 0; i < todaygold400Input.length; i++) {
        todaygold400 += parseInt(todaygold400Input[i]) || 0;
    }
    todaygold600Input = document.getElementById("todaygold600").value.split(" ");
    todaygold600 = 0;
    for (i = 0; i < todaygold600Input.length; i++) {
        todaygold600 += parseInt(todaygold600Input[i]) || 0;
    }
    todaygold800Input = document.getElementById("todaygold800").value.split(" ");
    todaygold800 = 0;
    for (i = 0; i < todaygold800Input.length; i++) {
        todaygold800 += parseInt(todaygold800Input[i]) || 0;
    }
    todaygold1000Input = document.getElementById("todaygold1000").value.split(" ");
    todaygold1000 = 0;
    for (i = 0; i < todaygold1000Input.length; i++) {
        todaygold1000 += parseInt(todaygold1000Input[i]) || 0;
    }
    todaygold1500Input = document.getElementById("todaygold1500").value.split(" ");
    todaygold1500 = 0;
    for (i = 0; i < todaygold1500Input.length; i++) {
        todaygold1500 += parseInt(todaygold1500Input[i]) || 0;
    }
    todaygold = todaygold200 + todaygold400 + todaygold600 + todaygold800 + todaygold1000 + todaygold1500 || 0;
    if (todaygold200 == "0") {
        todaygold200report = "";
    } else {
        todaygold200report = todaygold200 + "*200 ";
    }
    if (todaygold400 == "0") {
        todaygold400report = "";
    } else {
        todaygold400report = todaygold400 + "*400 ";
    }
    if (todaygold600 == "0") {
        todaygold600report = "";
    } else {
        todaygold600report = todaygold600 + "*600 ";
    }
    if (todaygold800 == "0") {
        todaygold800report = "";
    } else {
        todaygold800report = todaygold800 + "*800 ";
    }
    if (todaygold1000 == "0") {
        todaygold1000report = "";
    } else {
        todaygold1000report = todaygold1000 + "*1000 ";
    }
    if (todaygold1500 == "0") {
        todaygold1500report = "";
    } else {
        todaygold1500report = todaygold1500 + "*1500 ";
    }
    todayindigoreport = todayindigofmcreport + todayindigoopenreport + todayindigoclreport || 0;
    todaygoldreport = todaygold200report + todaygold400report + todaygold600report + todaygold800report + todaygold1000report + todaygold1500report || 0;
    achievedpostpaid = parseInt(document.getElementById("achievedpostpaid").value) || 0;
    utdpostpaid = todayindigo + todaygold + achievedpostpaid || 0;
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
    todaybillfixedInput = document.getElementById("todaybillfixed").value.split(" ");
    todaybillfixed = 0;
    for (i = 0; i < todaybillfixedInput.length; i++) {
        todaybillfixed += parseInt(todaybillfixedInput[i]) || 0;
    }
    todaybillindigoInput = document.getElementById("todaybillindigo").value.split(" ");
    todaybillindigo = 0;
    for (i = 0; i < todaybillindigoInput.length; i++) {
        todaybillindigo += parseInt(todaybillindigoInput[i]) || 0;
    }
    todaybilladslInput = document.getElementById("todaybilladsl").value.split(" ");
    todaybilladsl = 0;
    for (i = 0; i < todaybilladslInput.length; i++) {
        todaybilladsl += parseInt(todaybilladslInput[i]) || 0;
    }
    todaysimswapInput = document.getElementById("todaysimswap").value.split(" ");
    todaysimswap = 0;
    for (i = 0; i < todaysimswapInput.length; i++) {
        todaysimswap += parseInt(todaysimswapInput[i]) || 0;
    }
    todaybssamountInput = document.getElementById("todaybssamount").value.split(" ");
    todaybssamount = 0;
    for (i = 0; i < todaybssamountInput.length; i++) {
        todaybssamount += parseInt(todaybssamountInput[i]) || 0;
    }
    todayossamountInput = document.getElementById("todayossamount").value.split(" ");
    todayossamount = 0;
    for (i = 0; i < todayossamountInput.length; i++) {
        todayossamount += parseInt(todayossamountInput[i]) || 0;
    }
    utdmobile = utdpayg + utddata + utdsuperkix + utdtaz + utdweclub + utdwemix + utdpostpaid;
    targetmobile = targetpayg + targetdata + targetsuperkix + targettaz + targetwemix + targetweclub + targetpostpaid;
    dailymobile = todaypayg + todaydata + todaysuperkix + todaytazbeet + todayweclub + todaywemix + todayindigo + todaygold;
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
    vsMobile = ~~Number(Math.round((utdmobile / targetmobile) * 100)) || 0;
    vsFixed = ~~Number(Math.round((utdfixed / targetfixed) * 100)) || 0;
    vsAdsl = ~~Number(Math.round((utdadsl / targetadsl) * 100)) || 0;
    vsWemix = ~~Number(Math.round((utdwemix / targetwemix) * 100)) || 0;
    vsIndigo = ~~Number(Math.round((utdpostpaid / targetpostpaid) * 100)) || 0;
    if (targetpostpaid < "10") {
        targetindigoSpace = "      ";
    } else if (targetpostpaid >= "10" && targetpostpaid < "100") {
        targetindigoSpace = "     ";
    } else if (targetpostpaid >= "100" && targetpostpaid < "1000") {
        targetindigoSpace = "    ";
    } else if (targetpostpaid >= "1000" && targetpostpaid < "10000") {
        targetindigoSpace = "   ";
    } else if (targetpostpaid >= "10000" && targetpostpaid < "100000") {
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
    if (utdpostpaid < "10") {
        utdindigoSpace = "      ";
    } else if (utdpostpaid >= "10" && utdpostpaid < "100") {
        utdindigoSpace = "     ";
    } else if (utdpostpaid >= "100" && utdpostpaid < "1000") {
        utdindigoSpace = "    ";
    } else if (utdpostpaid >= "1000" && utdpostpaid < "10000") {
        utdindigoSpace = "   ";
    } else if (utdpostpaid >= "10000" && utdpostpaid < "100000") {
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
        "We Gold: " +
        todaygoldreport +
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
        "Super Kix: " +
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
        "Postpaid Bills: " +
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
        "Postpaid:   " +
        targetpostpaid +
        targetindigoSpace +
        utdpostpaid +
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
    localStorage.setItem("achievedpostpaid.store." + x, utdpostpaid);
    localStorage.setItem("targetpostpaid.store." + x, document.getElementById("targetpostpaid").value);
    localStorage.setItem("achievedadsl.store." + x, utdadsl);
    localStorage.setItem("targetadsl.store." + x, document.getElementById("targetadsl").value);
    localStorage.setItem("achievedfixed.store." + x, utdfixed);
    localStorage.setItem("targetfixed.store." + x, document.getElementById("targetfixed").value);
    document.getElementById("save__1").disabled = true;
    document.getElementById("save__2").disabled = true;
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
    doc.document.write(document.getElementById("salesreport").value.replace(/`/gi, "").replace(/  /gi, "&nbsp;&nbsp;").replace(/\n/gi, "<br>"));
    doc.document.write("</div></body></html>");
    doc.document.close();
}
