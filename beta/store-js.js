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
    if (daysinmonth < 31) {
        document.getElementById("d31").disabled = true;
    } else {
        document.getElementById("d31").disabled = false;
    }
    if (daysinmonth < 31 && document.getElementById("day").value == 31) {
        document.getElementById("day").selectedIndex = "30";
    }
    if (daysinmonth < 30) {
        document.getElementById("d30").disabled = true;
    } else {
        document.getElementById("d30").disabled = false;
    }
    if (daysinmonth < 30 && document.getElementById("day").value == 30) {
        document.getElementById("day").selectedIndex = "29";
    }
    if (daysinmonth < 29) {
        document.getElementById("d29").disabled = true;
    } else {
        document.getElementById("d29").disabled = false;
    }
    if (daysinmonth < 29 && document.getElementById("day").value == 29) {
        document.getElementById("day").selectedIndex = "28";
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
    document.getElementById("achievedwegold").value = localStorage.getItem("achievedwegold.store." + x);
    document.getElementById("targetwegold").value = localStorage.getItem("targetwegold.store." + x);
    document.getElementById("achievedadsl").value = localStorage.getItem("achievedadsl.store." + x);
    document.getElementById("targetadsl").value = localStorage.getItem("targetadsl.store." + x);
    document.getElementById("achievedfixed").value = localStorage.getItem("achievedfixed.store." + x);
    document.getElementById("targetfixed").value = localStorage.getItem("targetfixed.store." + x);
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
    document.getElementById("todaysuperkix").value = "";
    document.getElementById("todaytazbeet").value = "";
    document.getElementById("todayweclub").value = "";
    document.getElementById("todaywemix").value = "";
    document.getElementById("todaygold200").value = "";
    document.getElementById("todaygold400").value = "";
    document.getElementById("todaygold600").value = "";
    document.getElementById("todaygold800").value = "";
    document.getElementById("todaygold1000").value = "";
    document.getElementById("todaygold1500").value = "";
    document.getElementById("todayadsl140").value = "";
    document.getElementById("todayadsl200").value = "";
    document.getElementById("todayadsl250").value = "";
    document.getElementById("todayadsl400").value = "";
    document.getElementById("todayadsl600").value = "";
    document.getElementById("todayadsl1000").value = "";
    document.getElementById("todayfixed").value = "";
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
    document.getElementById("storename").value = localStorage.getItem("storename.store." + x);
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
    document.getElementById("targetwegold").value = "";
    document.getElementById("achievedadsl").value = "";
    document.getElementById("targetadsl").value = "";
    document.getElementById("achievedfixed").value = "";
    document.getElementById("targetfixed").value = "";
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
    document.getElementById("todaysuperkix").value = "";
    document.getElementById("todaytazbeet").value = "";
    document.getElementById("todayweclub").value = "";
    document.getElementById("todaywemix").value = "";
    document.getElementById("todaygold200").value = "";
    document.getElementById("todaygold400").value = "";
    document.getElementById("todaygold600").value = "";
    document.getElementById("todaygold800").value = "";
    document.getElementById("todaygold1000").value = "";
    document.getElementById("todaygold1500").value = "";
    document.getElementById("todayadsl140").value = "";
    document.getElementById("todayadsl200").value = "";
    document.getElementById("todayadsl250").value = "";
    document.getElementById("todayadsl400").value = "";
    document.getElementById("todayadsl600").value = "";
    document.getElementById("todayadsl1000").value = "";
    document.getElementById("todayfixed").value = "";
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
    document.getElementById("achievedwegold").value = "";
    document.getElementById("targetwegold").value = "";
    document.getElementById("achievedadsl").value = "";
    document.getElementById("targetadsl").value = "";
    document.getElementById("achievedfixed").value = "";
    document.getElementById("targetfixed").value = "";
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
    document.getElementById("todaysuperkix").value = "";
    document.getElementById("todaytazbeet").value = "";
    document.getElementById("todayweclub").value = "";
    document.getElementById("todaywemix").value = "";
    document.getElementById("todaygold200").value = "";
    document.getElementById("todaygold400").value = "";
    document.getElementById("todaygold600").value = "";
    document.getElementById("todaygold800").value = "";
    document.getElementById("todaygold1000").value = "";
    document.getElementById("todaygold1500").value = "";
    document.getElementById("todayadsl140").value = "";
    document.getElementById("todayadsl200").value = "";
    document.getElementById("todayadsl250").value = "";
    document.getElementById("todayadsl400").value = "";
    document.getElementById("todayadsl600").value = "";
    document.getElementById("todayadsl1000").value = "";
    document.getElementById("todayfixed").value = "";
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
    todaysuperkixInput = document.getElementById("todaysuperkix").value.split(" ");
    todaysuperkix = 0;
    for (i = 0; i < todaysuperkixInput.length; i++) {
        todaysuperkix += parseInt(todaysuperkixInput[i]) || 0;
    }
    achievedsuperkix = parseInt(document.getElementById("achievedsuperkix").value) || 0;
    utdsuperkix = todaysuperkix + achievedsuperkix || 0;
    targetsuperkix = parseInt(document.getElementById("targetsuperkix").value) || 0;
    todaytazbeetInput = document.getElementById("todaytazbeet").value.split(" ");
    todaytazbeet = 0;
    for (i = 0; i < todaytazbeetInput.length; i++) {
        todaytazbeet += parseInt(todaytazbeetInput[i]) || 0;
    }
    achievedtaz = parseInt(document.getElementById("achievedtaz").value) || 0;
    utdtaz = todaytazbeet + achievedtaz || 0;
    targettaz = parseInt(document.getElementById("targettaz").value) || 0;
    todayweclubInput = document.getElementById("todayweclub").value.split(" ");
    todayweclub = 0;
    for (i = 0; i < todayweclubInput.length; i++) {
        todayweclub += parseInt(todayweclubInput[i]) || 0;
    }
    achievedweclub = parseInt(document.getElementById("achievedweclub").value) || 0;
    utdweclub = todayweclub + achievedweclub || 0;
    targetweclub = parseInt(document.getElementById("targetweclub").value) || 0;
    todaywemixInput = document.getElementById("todaywemix").value.split(" ");
    todaywemix = 0;
    for (i = 0; i < todaywemixInput.length; i++) {
        todaywemix += parseInt(todaywemixInput[i]) || 0;
    }
    achievedwemix = parseInt(document.getElementById("achievedwemix").value) || 0;
    utdwemix = todaywemix + achievedwemix || 0;
    targetwemix = parseInt(document.getElementById("targetwemix").value) || 0;
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
    todaygoldreport = todaygold200report + todaygold400report + todaygold600report + todaygold800report + todaygold1000report + todaygold1500report || 0;
    achievedwegold = parseInt(document.getElementById("achievedwegold").value) || 0;
    utdwegold = todaygold + achievedwegold || 0;
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
    todayadsl400Input = document.getElementById("todayadsl400").value.split(" ");
    todayadsl400 = 0;
    for (i = 0; i < todayadsl400Input.length; i++) {
        todayadsl400 += parseInt(todayadsl400Input[i]) || 0;
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
    todayadsl = todayadsl140 + todayadsl200 + todayadsl250 + todayadsl400 + todayadsl600 + todayadsl1000 || 0;
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
    if (todayadsl400 == "0") {
        todayadsl400report = "";
    } else {
        todayadsl400report = todayadsl400 + "*400GB ";
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
    todayadslreport = todayadsl140report + todayadsl200report + todayadsl250report + todayadsl400report + todayadsl600report + todayadsl1000report || 0;
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
    utdmobile = utdpayg + utddata + utdsuperkix + utdtaz + utdweclub + utdwemix + utdwegold;
    targetmobile = targetpayg + targetdata + targetsuperkix + targettaz + targetwemix + targetweclub + targetwegold;
    dailymobile = todaypayg + todaydata + todaysuperkix + todaytazbeet + todayweclub + todaywemix + todaygold;
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
    vsGold = ~~Number(Math.round((utdwegold / targetwegold) * 100)) || 0;
    if (targetwegold < "10") {
        targetwegoldSpace = "      ";
    } else if (targetwegold >= "10" && targetwegold < "100") {
        targetwegoldSpace = "     ";
    } else if (targetwegold >= "100" && targetwegold < "1000") {
        targetwegoldSpace = "    ";
    } else if (targetwegold >= "1000" && targetwegold < "10000") {
        targetwegoldSpace = "   ";
    } else if (targetwegold >= "10000" && targetwegold < "100000") {
        targetwegoldSpace = "  ";
    } else {
        targetwegoldSpace = " ";
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
    if (utdwegold < "10") {
        utdwegoldSpace = "      ";
    } else if (utdwegold >= "10" && utdwegold < "100") {
        utdwegoldSpace = "     ";
    } else if (utdwegold >= "100" && utdwegold < "1000") {
        utdwegoldSpace = "    ";
    } else if (utdwegold >= "1000" && utdwegold < "10000") {
        utdwegoldSpace = "   ";
    } else if (utdwegold >= "10000" && utdwegold < "100000") {
        utdwegoldSpace = "  ";
    } else {
        utdwegoldSpace = " ";
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
        "ADSL: " +
        todayadslreport +
        "\n" +
        "Fixed: " +
        todayfixed +
        "\n" +
        "-------------------------" +
        "\n" +
        "Today Sales: " +
        dailymobile +
        " Mob" +
        todayadslfordailysales +
        todayfixedfordailysales +
        "\n" +
        "-------------------------```" +
        "\n" +
        "Products    T.     Ach.   Per." +
        "\n" +
        "We Gold:    " +
        targetwegold +
        targetwegoldSpace +
        utdwegold +
        utdwegoldSpace +
        vsGold +
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
    document.getElementById("save__1").innerHTML = "Save";
    document.getElementById("save__2").innerHTML = "Save";
    document.getElementById("copy__1").innerHTML = "Copy";
    document.getElementById("copy__2").innerHTML = "Copy";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    NextTransform();
}
function Copy__1() {
    salesreportValue = document.getElementById("salesreport").value;
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
    localStorage.setItem("achievedwegold.store." + x, utdwegold);
    localStorage.setItem("targetwegold.store." + x, document.getElementById("targetwegold").value);
    localStorage.setItem("achievedadsl.store." + x, utdadsl);
    localStorage.setItem("targetadsl.store." + x, document.getElementById("targetadsl").value);
    localStorage.setItem("achievedfixed.store." + x, utdfixed);
    localStorage.setItem("targetfixed.store." + x, document.getElementById("targetfixed").value);
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
    doc.document.write(document.getElementById("salesreport").value.replace(/`/gi, "").replace(/  /gi, "&nbsp;&nbsp;").replace(/\n/gi, "<br>"));
    doc.document.write("</div></body></html>");
    doc.document.close();
}
