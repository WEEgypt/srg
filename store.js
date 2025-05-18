function EnableRestore() {
    if (localStorage.getItem("storeRestore") == "true") {
        basic.style.display = "none";
        restore.style.display = "block";
        row__1.style.display = "none";
        row__2.style.display = "block";
        sessionStorage.removeItem("stores");
        sessionStorage.removeItem("newstore");
    } else {
        sessionStorage.setItem("stores", localStorage.getItem("stores") || 1);
        localStorage.setItem("currentStore", "1");
    }
    if (localStorage.getItem("stores") > "1") {
        let x = localStorage.getItem("stores");
        for (i = 1; i <= x; i++) {
            if (localStorage.getItem("deleteStore" + i) == "true") continue;
            value = parseInt([i]);
            document.getElementById("stores").options.add(new Option(localStorage.getItem("storename.store." + value), value));
        }
        document.getElementById("stores").options.add(new Option("Add Another Store", "newstore"));
    }
    if (localStorage.getItem("activeStores") > "1") {
        multi.style.display = "block";
        restore.style.display = "none";
    }
    document.getElementById("stores").value = localStorage.getItem("selectedStore");
}
function RestoreSelected() {
    if (document.getElementById("stores").value !== "newstore") {
        localStorage.setItem("selectedStore", document.getElementById("stores").value);
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
    gsap.from("#summarize", { duration: 0.2, xPercent: 50, opacity: 0 });
}
function BackTransform() {
    gsap.from("#multi", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#restore", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#basic", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#target", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#achieved", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#today", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#report", { duration: 0.2, xPercent: -50, opacity: 0 });
    gsap.from("#summarize", { duration: 0.2, xPercent: -50, opacity: 0 });
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
    window.location.href = "index.html";
}
function Back__2() {
    if (localStorage.getItem("activeStores") > "1") {
        document.getElementById("stores").innerHTML = "";
        multi.style.display = "block";
        restore.style.display = "none";
        let x = localStorage.getItem("stores");
        for (i = 1; i <= x; i++) {
            if (localStorage.getItem("deleteStore" + i) == "true") continue;
            value = parseInt([i]);
            document.getElementById("stores").options.add(new Option(localStorage.getItem("storename.store." + value), value));
        }
        document.getElementById("stores").options.add(new Option("Add Another Store", "newstore"));
        document.getElementById("stores").value = localStorage.getItem("selectedStore");
        BackTransform();
    } else {
        Back__1();
    }
}
function Back__3() {
    if (basic.style.display === "block" && localStorage.getItem("activeStores") > "1" && sessionStorage.getItem("newstore") == "true") {
        basic.style.display = "none";
        multi.style.display = "block";
        document.getElementById("stores").innerHTML = "";
        let x = localStorage.getItem("stores");
        for (i = 1; i <= x; i++) {
            if (localStorage.getItem("deleteStore" + i) == "true") continue;
            value = parseInt([i]);
            document.getElementById("stores").options.add(new Option(localStorage.getItem("storename.store." + value), value));
        }
        document.getElementById("stores").options.add(new Option("Add Another Store", "newstore"));
        document.getElementById("stores").value = localStorage.getItem("selectedStore");
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
function Back__9() {
    summarize.style.display = "none";
    report.style.display = "block";
    document.getElementById("copy__1").disabled = false;
    document.getElementById("copy__2").disabled = false;
    document.getElementById("copy__1").innerHTML = "Copy";
    document.getElementById("copy__2").innerHTML = "Copy";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
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
    document.getElementById("achievedwegoldfmc").value = localStorage.getItem("achievedwegoldfmc.store." + x);
    document.getElementById("achievedwegoldsa").value = localStorage.getItem("achievedwegoldsa.store." + x);
    document.getElementById("targetwegold").value = localStorage.getItem("targetwegold.store." + x);
    document.getElementById("achievedadsl140").value = localStorage.getItem("achievedadsl140.store." + x);
    document.getElementById("achievedadslht").value = localStorage.getItem("achievedadslht.store." + x);
    document.getElementById("targetadsl").value = localStorage.getItem("targetadsl.store." + x);
    document.getElementById("achievedfixed").value = localStorage.getItem("achievedfixed.store." + x);
    document.getElementById("targetfixed").value = localStorage.getItem("targetfixed.store." + x);
    document.getElementById("achievedwallet").value = localStorage.getItem("achievedwallet.store." + x);
    document.getElementById("targetwallet").value = localStorage.getItem("targetwallet.store." + x);
    document.getElementById("achievedweair").value = localStorage.getItem("achievedweair.store." + x);
    document.getElementById("achievedmifi").value = localStorage.getItem("achievedmifi.store." + x);
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
    document.getElementById("todaysuperkix25").value = "";
    document.getElementById("todaysuperkix32").value = "";
    document.getElementById("todaysuperkix45").value = "";
    document.getElementById("todaysuperkix60").value = "";
    document.getElementById("todaysuperkix85").value = "";
    document.getElementById("todaysuperkix105").value = "";
    document.getElementById("todaysuperkix130").value = "";
    document.getElementById("todaytazbeet40").value = "";
    document.getElementById("todaytazbeet50").value = "";
    document.getElementById("todaytazbeet90").value = "";
    document.getElementById("todaytazbeet145").value = "";
    document.getElementById("todayweclub32").value = "";
    document.getElementById("todayweclub50").value = "";
    document.getElementById("todayweclub85").value = "";
    document.getElementById("todayweclub130").value = "";
    document.getElementById("todaywemix215").value = "";
    document.getElementById("todaywemix310").value = "";
    document.getElementById("todaygold260fmc").value = "";
    document.getElementById("todaygold525fmc").value = "";
    document.getElementById("todaygold775fmc").value = "";
    document.getElementById("todaygold1050fmc").value = "";
    document.getElementById("todaygold1300fmc").value = "";
    document.getElementById("todaygold2000fmc").value = "";
    document.getElementById("todaygold260sa").value = "";
    document.getElementById("todaygold525sa").value = "";
    document.getElementById("todaygold775sa").value = "";
    document.getElementById("todaygold1050sa").value = "";
    document.getElementById("todaygold1300sa").value = "";
    document.getElementById("todaygold2000sa").value = "";
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
    document.getElementById("todayweair").value = "";
    document.getElementById("todaymifi").value = "";
    document.getElementById("todayadslbills").value = "";
    document.getElementById("todaypostpaidbills").value = "";
    document.getElementById("todayfixedbills").value = "";
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
    document.getElementById("achievedweair").value = "";
    document.getElementById("achievedmifi").value = "";
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
    document.getElementById("todaysuperkix25").value = "";
    document.getElementById("todaysuperkix32").value = "";
    document.getElementById("todaysuperkix45").value = "";
    document.getElementById("todaysuperkix60").value = "";
    document.getElementById("todaysuperkix85").value = "";
    document.getElementById("todaysuperkix105").value = "";
    document.getElementById("todaysuperkix130").value = "";
    document.getElementById("todaytazbeet40").value = "";
    document.getElementById("todaytazbeet50").value = "";
    document.getElementById("todaytazbeet90").value = "";
    document.getElementById("todaytazbeet145").value = "";
    document.getElementById("todayweclub32").value = "";
    document.getElementById("todayweclub50").value = "";
    document.getElementById("todayweclub85").value = "";
    document.getElementById("todayweclub130").value = "";
    document.getElementById("todaywemix215").value = "";
    document.getElementById("todaywemix310").value = "";
    document.getElementById("todaygold260fmc").value = "";
    document.getElementById("todaygold525fmc").value = "";
    document.getElementById("todaygold775fmc").value = "";
    document.getElementById("todaygold1050fmc").value = "";
    document.getElementById("todaygold1300fmc").value = "";
    document.getElementById("todaygold2000fmc").value = "";
    document.getElementById("todaygold260sa").value = "";
    document.getElementById("todaygold525sa").value = "";
    document.getElementById("todaygold775sa").value = "";
    document.getElementById("todaygold1050sa").value = "";
    document.getElementById("todaygold1300sa").value = "";
    document.getElementById("todaygold2000sa").value = "";
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
    document.getElementById("todayweair").value = "";
    document.getElementById("todaymifi").value = "";
    document.getElementById("todayadslbills").value = "";
    document.getElementById("todaypostpaidbills").value = "";
    document.getElementById("todayfixedbills").value = "";
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
    document.getElementById("achievedweair").value = "";
    document.getElementById("achievedmifi").value = "";
    document.getElementById("targetwallet").value = "";
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
    document.getElementById("todaysuperkix25").value = "";
    document.getElementById("todaysuperkix32").value = "";
    document.getElementById("todaysuperkix45").value = "";
    document.getElementById("todaysuperkix60").value = "";
    document.getElementById("todaysuperkix85").value = "";
    document.getElementById("todaysuperkix105").value = "";
    document.getElementById("todaysuperkix130").value = "";
    document.getElementById("todaytazbeet40").value = "";
    document.getElementById("todaytazbeet50").value = "";
    document.getElementById("todaytazbeet90").value = "";
    document.getElementById("todaytazbeet145").value = "";
    document.getElementById("todayweclub32").value = "";
    document.getElementById("todayweclub50").value = "";
    document.getElementById("todayweclub85").value = "";
    document.getElementById("todayweclub130").value = "";
    document.getElementById("todaywemix215").value = "";
    document.getElementById("todaywemix310").value = "";
    document.getElementById("todaygold260fmc").value = "";
    document.getElementById("todaygold525fmc").value = "";
    document.getElementById("todaygold775fmc").value = "";
    document.getElementById("todaygold1050fmc").value = "";
    document.getElementById("todaygold1300fmc").value = "";
    document.getElementById("todaygold2000fmc").value = "";
    document.getElementById("todaygold260sa").value = "";
    document.getElementById("todaygold525sa").value = "";
    document.getElementById("todaygold775sa").value = "";
    document.getElementById("todaygold1050sa").value = "";
    document.getElementById("todaygold1300sa").value = "";
    document.getElementById("todaygold2000sa").value = "";
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
    document.getElementById("todayweair").value = "";
    document.getElementById("todaymifi").value = "";
    document.getElementById("todayadslbills").value = "";
    document.getElementById("todaypostpaidbills").value = "";
    document.getElementById("todayfixedbills").value = "";
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
    todaysuperkix25Input = document.getElementById("todaysuperkix25").value.split(" ");
    todaysuperkix25 = 0;
    for (i = 0; i < todaysuperkix25Input.length; i++) {
        todaysuperkix25 += parseInt(todaysuperkix25Input[i]) || 0;
    }
    todaysuperkix32Input = document.getElementById("todaysuperkix32").value.split(" ");
    todaysuperkix32 = 0;
    for (i = 0; i < todaysuperkix32Input.length; i++) {
        todaysuperkix32 += parseInt(todaysuperkix32Input[i]) || 0;
    }
    todaysuperkix45Input = document.getElementById("todaysuperkix45").value.split(" ");
    todaysuperkix45 = 0;
    for (i = 0; i < todaysuperkix45Input.length; i++) {
        todaysuperkix45 += parseInt(todaysuperkix45Input[i]) || 0;
    }
    todaysuperkix60Input = document.getElementById("todaysuperkix60").value.split(" ");
    todaysuperkix60 = 0;
    for (i = 0; i < todaysuperkix60Input.length; i++) {
        todaysuperkix60 += parseInt(todaysuperkix60Input[i]) || 0;
    }
    todaysuperkix85Input = document.getElementById("todaysuperkix85").value.split(" ");
    todaysuperkix85 = 0;
    for (i = 0; i < todaysuperkix85Input.length; i++) {
        todaysuperkix85 += parseInt(todaysuperkix85Input[i]) || 0;
    }
    todaysuperkix105Input = document.getElementById("todaysuperkix105").value.split(" ");
    todaysuperkix105 = 0;
    for (i = 0; i < todaysuperkix105Input.length; i++) {
        todaysuperkix105 += parseInt(todaysuperkix105Input[i]) || 0;
    }
    todaysuperkix130Input = document.getElementById("todaysuperkix130").value.split(" ");
    todaysuperkix130 = 0;
    for (i = 0; i < todaysuperkix130Input.length; i++) {
        todaysuperkix130 += parseInt(todaysuperkix130Input[i]) || 0;
    }
    todaysuperkix = todaysuperkix25 + todaysuperkix32 + todaysuperkix45 + todaysuperkix60 + todaysuperkix85 + todaysuperkix105 + todaysuperkix130 || 0;
    achievedsuperkix = parseInt(document.getElementById("achievedsuperkix").value) || 0;
    utdsuperkix = todaysuperkix25 + todaysuperkix32 + todaysuperkix45 + todaysuperkix60 + todaysuperkix85 + todaysuperkix105 + todaysuperkix130 + achievedsuperkix || 0;
    targetsuperkix = parseInt(document.getElementById("targetsuperkix").value) || 0;
    todaytazbeet40Input = document.getElementById("todaytazbeet40").value.split(" ");
    todaytazbeet40 = 0;
    for (i = 0; i < todaytazbeet40Input.length; i++) {
        todaytazbeet40 += parseInt(todaytazbeet40Input[i]) || 0;
    }
    todaytazbeet50Input = document.getElementById("todaytazbeet50").value.split(" ");
    todaytazbeet50 = 0;
    for (i = 0; i < todaytazbeet50Input.length; i++) {
        todaytazbeet50 += parseInt(todaytazbeet50Input[i]) || 0;
    }
    todaytazbeet90Input = document.getElementById("todaytazbeet90").value.split(" ");
    todaytazbeet90 = 0;
    for (i = 0; i < todaytazbeet90Input.length; i++) {
        todaytazbeet90 += parseInt(todaytazbeet90Input[i]) || 0;
    }
    todaytazbeet145Input = document.getElementById("todaytazbeet145").value.split(" ");
    todaytazbeet145 = 0;
    for (i = 0; i < todaytazbeet145Input.length; i++) {
        todaytazbeet145 += parseInt(todaytazbeet145Input[i]) || 0;
    }
    todaytazbeet = todaytazbeet40 + todaytazbeet50 + todaytazbeet90 + todaytazbeet145 || 0;
    achievedtaz = parseInt(document.getElementById("achievedtaz").value) || 0;
    utdtaz = todaytazbeet40 + todaytazbeet50 + todaytazbeet90 + todaytazbeet145 + achievedtaz || 0;
    targettaz = parseInt(document.getElementById("targettaz").value) || 0;
    todayweclub32Input = document.getElementById("todayweclub32").value.split(" ");
    todayweclub32 = 0;
    for (i = 0; i < todayweclub32Input.length; i++) {
        todayweclub32 += parseInt(todayweclub32Input[i]) || 0;
    }
    todayweclub50Input = document.getElementById("todayweclub50").value.split(" ");
    todayweclub50 = 0;
    for (i = 0; i < todayweclub50Input.length; i++) {
        todayweclub50 += parseInt(todayweclub50Input[i]) || 0;
    }
    todayweclub85Input = document.getElementById("todayweclub85").value.split(" ");
    todayweclub85 = 0;
    for (i = 0; i < todayweclub85Input.length; i++) {
        todayweclub85 += parseInt(todayweclub85Input[i]) || 0;
    }
    todayweclub130Input = document.getElementById("todayweclub130").value.split(" ");
    todayweclub130 = 0;
    for (i = 0; i < todayweclub130Input.length; i++) {
        todayweclub130 += parseInt(todayweclub130Input[i]) || 0;
    }
    todayweclub = todayweclub32 + todayweclub50 + todayweclub85 + todayweclub130 || 0;
    achievedweclub = parseInt(document.getElementById("achievedweclub").value) || 0;
    utdweclub = todayweclub32 + todayweclub50 + todayweclub85 + todayweclub130 + achievedweclub || 0;
    targetweclub = parseInt(document.getElementById("targetweclub").value) || 0;
    todaywemix215Input = document.getElementById("todaywemix215").value.split(" ");
    todaywemix215 = 0;
    for (i = 0; i < todaywemix215Input.length; i++) {
        todaywemix215 += parseInt(todaywemix215Input[i]) || 0;
    }
    todaywemix310Input = document.getElementById("todaywemix310").value.split(" ");
    todaywemix310 = 0;
    for (i = 0; i < todaywemix310Input.length; i++) {
        todaywemix310 += parseInt(todaywemix310Input[i]) || 0;
    }
    todaywemix = todaywemix215 + todaywemix310 || 0;
    achievedwemix = parseInt(document.getElementById("achievedwemix").value) || 0;
    utdwemix = todaywemix215 + todaywemix310 + achievedwemix || 0;
    targetwemix = parseInt(document.getElementById("targetwemix").value) || 0;
    todaygold260fmcInput = document.getElementById("todaygold260fmc").value.split(" ");
    todaygold260fmc = 0;
    for (i = 0; i < todaygold260fmcInput.length; i++) {
        todaygold260fmc += parseInt(todaygold260fmcInput[i]) || 0;
    }
    todaygold525fmcInput = document.getElementById("todaygold525fmc").value.split(" ");
    todaygold525fmc = 0;
    for (i = 0; i < todaygold525fmcInput.length; i++) {
        todaygold525fmc += parseInt(todaygold525fmcInput[i]) || 0;
    }
    todaygold775fmcInput = document.getElementById("todaygold775fmc").value.split(" ");
    todaygold775fmc = 0;
    for (i = 0; i < todaygold775fmcInput.length; i++) {
        todaygold775fmc += parseInt(todaygold775fmcInput[i]) || 0;
    }
    todaygold1050fmcInput = document.getElementById("todaygold1050fmc").value.split(" ");
    todaygold1050fmc = 0;
    for (i = 0; i < todaygold1050fmcInput.length; i++) {
        todaygold1050fmc += parseInt(todaygold1050fmcInput[i]) || 0;
    }
    todaygold1300fmcInput = document.getElementById("todaygold1300fmc").value.split(" ");
    todaygold1300fmc = 0;
    for (i = 0; i < todaygold1300fmcInput.length; i++) {
        todaygold1300fmc += parseInt(todaygold1300fmcInput[i]) || 0;
    }
    todaygold2000fmcInput = document.getElementById("todaygold2000fmc").value.split(" ");
    todaygold2000fmc = 0;
    for (i = 0; i < todaygold2000fmcInput.length; i++) {
        todaygold2000fmc += parseInt(todaygold2000fmcInput[i]) || 0;
    }
    todaygold260saInput = document.getElementById("todaygold260sa").value.split(" ");
    todaygold260sa = 0;
    for (i = 0; i < todaygold260saInput.length; i++) {
        todaygold260sa += parseInt(todaygold260saInput[i]) || 0;
    }
    todaygold525saInput = document.getElementById("todaygold525sa").value.split(" ");
    todaygold525sa = 0;
    for (i = 0; i < todaygold525saInput.length; i++) {
        todaygold525sa += parseInt(todaygold525saInput[i]) || 0;
    }
    todaygold775saInput = document.getElementById("todaygold775sa").value.split(" ");
    todaygold775sa = 0;
    for (i = 0; i < todaygold775saInput.length; i++) {
        todaygold775sa += parseInt(todaygold775saInput[i]) || 0;
    }
    todaygold1050saInput = document.getElementById("todaygold1050sa").value.split(" ");
    todaygold1050sa = 0;
    for (i = 0; i < todaygold1050saInput.length; i++) {
        todaygold1050sa += parseInt(todaygold1050saInput[i]) || 0;
    }
    todaygold1300saInput = document.getElementById("todaygold1300sa").value.split(" ");
    todaygold1300sa = 0;
    for (i = 0; i < todaygold1300saInput.length; i++) {
        todaygold1300sa += parseInt(todaygold1300saInput[i]) || 0;
    }
    todaygold2000saInput = document.getElementById("todaygold2000sa").value.split(" ");
    todaygold2000sa = 0;
    for (i = 0; i < todaygold2000saInput.length; i++) {
        todaygold2000sa += parseInt(todaygold2000saInput[i]) || 0;
    }
    todaygoldfmc = todaygold260fmc + todaygold525fmc + todaygold775fmc + todaygold1050fmc + todaygold1300fmc + todaygold2000fmc || 0;
    todaygoldsa = todaygold260sa + todaygold525sa + todaygold775sa + todaygold1050sa + todaygold1300sa + todaygold2000sa || 0;
    todaygold = todaygoldfmc + todaygoldsa || 0;
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
    todayweairInput = document.getElementById("todayweair").value.split(" ");
    todayweair = 0;
    for (i = 0; i < todayweairInput.length; i++) {
        todayweair += parseInt(todayweairInput[i]) || 0;
    }
    achievedweair = parseInt(document.getElementById("achievedweair").value) || 0;
    utdweair = todayweair + achievedweair || 0;
    todaymifiInput = document.getElementById("todaymifi").value.split(" ");
    todaymifi = 0;
    for (i = 0; i < todaymifiInput.length; i++) {
        todaymifi += parseInt(todaymifiInput[i]) || 0;
    }
    achievedmifi = parseInt(document.getElementById("achievedmifi").value) || 0;
    utdmifi = todaymifi + achievedmifi || 0;
    var todaysalesArray = [
        todaypayg.toString(),
        todaydata.toString(),
        todaysuperkix25.toString(),
        todaysuperkix32.toString(),
        todaysuperkix45.toString(),
        todaysuperkix60.toString(),
        todaysuperkix85.toString(),
        todaysuperkix105.toString(),
        todaysuperkix130.toString(),
        todaytazbeet40.toString(),
        todaytazbeet50.toString(),
        todaytazbeet90.toString(),
        todaytazbeet145.toString(),
        todayweclub32.toString(),
        todayweclub50.toString(),
        todayweclub85.toString(),
        todayweclub130.toString(),
        todaywemix215.toString(),
        todaywemix310.toString(),
        todaygold260fmc.toString(),
        todaygold525fmc.toString(),
        todaygold775fmc.toString(),
        todaygold1050fmc.toString(),
        todaygold1300fmc.toString(),
        todaygold2000fmc.toString(),
        todaygold260sa.toString(),
        todaygold525sa.toString(),
        todaygold775sa.toString(),
        todaygold1050sa.toString(),
        todaygold1300sa.toString(),
        todaygold2000sa.toString(),
        todayadsl140.toString(),
        todayadsl200.toString(),
        todayadsl250.toString(),
        todayadsl300.toString(),
        todayadsl400.toString(),
        todayadsl500.toString(),
        todayadsl600.toString(),
        todayadsl1000.toString(),
        todayadsl1500.toString(),
        todayadslannual.toString(),
        todayfixed.toString(),
        todaywallet.toString(),
        todayweair.toString(),
        todaymifi.toString(),
    ];
    let maxToday = Math.max(...todaysalesArray).toString().length;
    var todaysalesArrayAdjusted = correctLength(todaysalesArray, maxToday);
    function correctLength(array, length) {
        array.map(function (v, i) {
            if (array[i].length < length) {
                array[i] += Array(length + 1 - array[i].length).join(" ");
            }
        });
        return array;
    }
    todaypaygAdjusted = todaysalesArrayAdjusted[0];
    todaydataAdjusted = todaysalesArrayAdjusted[1];
    todaysuperkix25Adjusted = todaysalesArrayAdjusted[2];
    todaysuperkix32Adjusted = todaysalesArrayAdjusted[3];
    todaysuperkix45Adjusted = todaysalesArrayAdjusted[4];
    todaysuperkix60Adjusted = todaysalesArrayAdjusted[5];
    todaysuperkix85Adjusted = todaysalesArrayAdjusted[6];
    todaysuperkix105Adjusted = todaysalesArrayAdjusted[7];
    todaysuperkix130Adjusted = todaysalesArrayAdjusted[8];
    todaytazbeet40Adjusted = todaysalesArrayAdjusted[9];
    todaytazbeet50Adjusted = todaysalesArrayAdjusted[10];
    todaytazbeet90Adjusted = todaysalesArrayAdjusted[11];
    todaytazbeet145Adjusted = todaysalesArrayAdjusted[12];
    todayweclub32Adjusted = todaysalesArrayAdjusted[13];
    todayweclub50Adjusted = todaysalesArrayAdjusted[14];
    todayweclub85Adjusted = todaysalesArrayAdjusted[15];
    todayweclub130Adjusted = todaysalesArrayAdjusted[16];
    todaywemix215Adjusted = todaysalesArrayAdjusted[17];
    todaywemix310Adjusted = todaysalesArrayAdjusted[18];
    todaygold260fmcAdjusted = todaysalesArrayAdjusted[19];
    todaygold525fmcAdjusted = todaysalesArrayAdjusted[20];
    todaygold775fmcAdjusted = todaysalesArrayAdjusted[21];
    todaygold1050fmcAdjusted = todaysalesArrayAdjusted[22];
    todaygold1300fmcAdjusted = todaysalesArrayAdjusted[23];
    todaygold2000fmcAdjusted = todaysalesArrayAdjusted[24];
    todaygold260saAdjusted = todaysalesArrayAdjusted[25];
    todaygold525saAdjusted = todaysalesArrayAdjusted[26];
    todaygold775saAdjusted = todaysalesArrayAdjusted[27];
    todaygold1050saAdjusted = todaysalesArrayAdjusted[28];
    todaygold1300saAdjusted = todaysalesArrayAdjusted[29];
    todaygold2000saAdjusted = todaysalesArrayAdjusted[30];
    todayadsl140Adjusted = todaysalesArrayAdjusted[31];
    todayadsl200Adjusted = todaysalesArrayAdjusted[32];
    todayadsl250Adjusted = todaysalesArrayAdjusted[33];
    todayadsl300Adjusted = todaysalesArrayAdjusted[34];
    todayadsl400Adjusted = todaysalesArrayAdjusted[35];
    todayadsl500Adjusted = todaysalesArrayAdjusted[36];
    todayadsl600Adjusted = todaysalesArrayAdjusted[37];
    todayadsl1000Adjusted = todaysalesArrayAdjusted[38];
    todayadsl1500Adjusted = todaysalesArrayAdjusted[39];
    todayadslannualAdjusted = todaysalesArrayAdjusted[40];
    todayfixedAdjusted = todaysalesArrayAdjusted[41];
    todaywalletAdjusted = todaysalesArrayAdjusted[42];
    todayweairAdjusted = todaysalesArrayAdjusted[43];
    todaymifiAdjusted = todaysalesArrayAdjusted[44];
    if (todaypayg == "0") {
        todaypaygreport = "";
        todaypaygreportForSharing = "";
    } else {
        todaypaygreport = "\n" + todaypaygAdjusted + " * PAYG";
        todaypaygreportForSharing = "\n" + "```" + todaypaygAdjusted + "```" + " * PAYG";
    }
    if (todaydata == "0") {
        todaydatareport = "";
        todaydatareportForSharing = "";
    } else {
        todaydatareport = "\n" + todaydataAdjusted + " * Data";
        todaydatareportForSharing = "\n" + "```" + todaydataAdjusted + "```" + " * Data";
    }
    if (todaysuperkix25 == "0") {
        todaysuperkix25report = "";
        todaysuperkix25reportForSharing = "";
    } else {
        todaysuperkix25report = "\n" + todaysuperkix25Adjusted + " * Kix 25";
        todaysuperkix25reportForSharing = "\n" + "```" + todaysuperkix25Adjusted + "```" + " * Kix 25";
    }
    if (todaysuperkix32 == "0") {
        todaysuperkix32report = "";
        todaysuperkix32reportForSharing = "";
    } else {
        todaysuperkix32report = "\n" + todaysuperkix32Adjusted + " * Kix 32";
        todaysuperkix32reportForSharing = "\n" + "```" + todaysuperkix32Adjusted + "```" + " * Kix 32";
    }
    if (todaysuperkix45 == "0") {
        todaysuperkix45report = "";
        todaysuperkix45reportForSharing = "";
    } else {
        todaysuperkix45report = "\n" + todaysuperkix45Adjusted + " * Kix 45";
        todaysuperkix45reportForSharing = "\n" + "```" + todaysuperkix45Adjusted + "```" + " * Kix 45";
    }
    if (todaysuperkix60 == "0") {
        todaysuperkix60report = "";
        todaysuperkix60reportForSharing = "";
    } else {
        todaysuperkix60report = "\n" + todaysuperkix60Adjusted + " * Kix 60";
        todaysuperkix60reportForSharing = "\n" + "```" + todaysuperkix60Adjusted + "```" + " * Kix 60";
    }
    if (todaysuperkix85 == "0") {
        todaysuperkix85report = "";
        todaysuperkix85reportForSharing = "";
    } else {
        todaysuperkix85report = "\n" + todaysuperkix85Adjusted + " * Kix 85";
        todaysuperkix85reportForSharing = "\n" + "```" + todaysuperkix85Adjusted + "```" + " * Kix 85";
    }
    if (todaysuperkix105 == "0") {
        todaysuperkix105report = "";
        todaysuperkix105reportForSharing = "";
    } else {
        todaysuperkix105report = "\n" + todaysuperkix105Adjusted + " * Kix 105";
        todaysuperkix105reportForSharing = "\n" + "```" + todaysuperkix105Adjusted + "```" + " * Kix 105";
    }
    if (todaysuperkix130 == "0") {
        todaysuperkix130report = "";
        todaysuperkix130reportForSharing = "";
    } else {
        todaysuperkix130report = "\n" + todaysuperkix130Adjusted + " * Kix 130";
        todaysuperkix130reportForSharing = "\n" + "```" + todaysuperkix130Adjusted + "```" + " * Kix 130";
    }
    if (todaytazbeet40 == "0") {
        todaytazbeet40report = "";
        todaytazbeet40reportForSharing = "";
    } else {
        todaytazbeet40report = "\n" + todaytazbeet40Adjusted + " * Tazbeet 40";
        todaytazbeet40reportForSharing = "\n" + "```" + todaytazbeet40Adjusted + "```" + " * Tazbeet 40";
    }
    if (todaytazbeet50 == "0") {
        todaytazbeet50report = "";
        todaytazbeet50reportForSharing = "";
    } else {
        todaytazbeet50report = "\n" + todaytazbeet50Adjusted + " * Tazbeet 50";
        todaytazbeet50reportForSharing = "\n" + "```" + todaytazbeet50Adjusted + "```" + " * Tazbeet 50";
    }
    if (todaytazbeet90 == "0") {
        todaytazbeet90report = "";
        todaytazbeet90reportForSharing = "";
    } else {
        todaytazbeet90report = "\n" + todaytazbeet90Adjusted + " * Tazbeet 90";
        todaytazbeet90reportForSharing = "\n" + "```" + todaytazbeet90Adjusted + "```" + " * Tazbeet 90";
    }
    if (todaytazbeet145 == "0") {
        todaytazbeet145report = "";
        todaytazbeet145reportForSharing = "";
    } else {
        todaytazbeet145report = "\n" + todaytazbeet145Adjusted + " * Tazbeet 145";
        todaytazbeet145reportForSharing = "\n" + "```" + todaytazbeet145Adjusted + "```" + " * Tazbeet 145";
    }
    if (todayweclub32 == "0") {
        todayweclub32report = "";
        todayweclub32reportForSharing = "";
    } else {
        todayweclub32report = "\n" + todayweclub32Adjusted + " * We Club 32";
        todayweclub32reportForSharing = "\n" + "```" + todayweclub32Adjusted + "```" + " * We Club 32";
    }
    if (todayweclub50 == "0") {
        todayweclub50report = "";
        todayweclub50reportForSharing = "";
    } else {
        todayweclub50report = "\n" + todayweclub50Adjusted + " * We Club 50";
        todayweclub50reportForSharing = "\n" + "```" + todayweclub50Adjusted + "```" + " * We Club 50";
    }
    if (todayweclub85 == "0") {
        todayweclub85report = "";
        todayweclub85reportForSharing = "";
    } else {
        todayweclub85report = "\n" + todayweclub85Adjusted + " * We Club 85";
        todayweclub85reportForSharing = "\n" + "```" + todayweclub85Adjusted + "```" + " * We Club 85";
    }
    if (todayweclub130 == "0") {
        todayweclub130report = "";
        todayweclub130reportForSharing = "";
    } else {
        todayweclub130report = "\n" + todayweclub130Adjusted + " * We Club 130";
        todayweclub130reportForSharing = "\n" + "```" + todayweclub130Adjusted + "```" + " * We Club 130";
    }
    if (todaywemix215 == "0") {
        todaywemix215report = "";
        todaywemix215reportForSharing = "";
    } else {
        todaywemix215report = "\n" + todaywemix215Adjusted + " * We Mix 215";
        todaywemix215reportForSharing = "\n" + "```" + todaywemix215Adjusted + "```" + " * We Mix 215";
    }
    if (todaywemix310 == "0") {
        todaywemix310report = "";
        todaywemix310reportForSharing = "";
    } else {
        todaywemix310report = "\n" + todaywemix310Adjusted + " * We Mix 310";
        todaywemix310reportForSharing = "\n" + "```" + todaywemix310Adjusted + "```" + " * We Mix 310";
    }
    if (todaygold260fmc == "0") {
        todaygold260fmcreport = "";
        todaygold260fmcreportForSharing = "";
    } else {
        todaygold260fmcreport = "\n" + todaygold260fmcAdjusted + " * We Gold 260 FMC";
        todaygold260fmcreportForSharing = "\n" + "```" + todaygold260fmcAdjusted + "```" + " * We Gold 260 FMC";
    }
    if (todaygold525fmc == "0") {
        todaygold525fmcreport = "";
        todaygold525fmcreportForSharing = "";
    } else {
        todaygold525fmcreport = "\n" + todaygold525fmcAdjusted + " * We Gold 525 FMC";
        todaygold525fmcreportForSharing = "\n" + "```" + todaygold525fmcAdjusted + "```" + " * We Gold 525 FMC";
    }
    if (todaygold775fmc == "0") {
        todaygold775fmcreport = "";
        todaygold775fmcreportForSharing = "";
    } else {
        todaygold775fmcreport = "\n" + todaygold775fmcAdjusted + " * We Gold 775 FMC";
        todaygold775fmcreportForSharing = "\n" + "```" + todaygold775fmcAdjusted + "```" + " * We Gold 775 FMC";
    }
    if (todaygold1050fmc == "0") {
        todaygold1050fmcreport = "";
        todaygold1050fmcreportForSharing = "";
    } else {
        todaygold1050fmcreport = "\n" + todaygold1050fmcAdjusted + " * We Gold 1050 FMC";
        todaygold1050fmcreportForSharing = "\n" + "```" + todaygold1050fmcAdjusted + "```" + " * We Gold 1050 FMC";
    }
    if (todaygold1300fmc == "0") {
        todaygold1300fmcreport = "";
        todaygold1300fmcreportForSharing = "";
    } else {
        todaygold1300fmcreport = "\n" + todaygold1300fmcAdjusted + " * We Gold 1300 FMC";
        todaygold1300fmcreportForSharing = "\n" + "```" + todaygold1300fmcAdjusted + "```" + " * We Gold 1300 FMC";
    }
    if (todaygold2000fmc == "0") {
        todaygold2000fmcreport = "";
        todaygold2000fmcreportForSharing = "";
    } else {
        todaygold2000fmcreport = "\n" + todaygold2000fmcAdjusted + " * We Gold 2000 FMC";
        todaygold2000fmcreportForSharing = "\n" + "```" + todaygold2000fmcAdjusted + "```" + " * We Gold 2000 FMC";
    }
    if (todaygold260sa == "0") {
        todaygold260sareport = "";
        todaygold260sareportForSharing = "";
    } else {
        todaygold260sareport = "\n" + todaygold260saAdjusted + " * We Gold 260 SA";
        todaygold260sareportForSharing = "\n" + "```" + todaygold260saAdjusted + "```" + " * We Gold 260 SA";
    }
    if (todaygold525sa == "0") {
        todaygold525sareport = "";
        todaygold525sareportForSharing = "";
    } else {
        todaygold525sareport = "\n" + todaygold525saAdjusted + " * We Gold 525 SA";
        todaygold525sareportForSharing = "\n" + "```" + todaygold525saAdjusted + "```" + " * We Gold 525 SA";
    }
    if (todaygold775sa == "0") {
        todaygold775sareport = "";
        todaygold775sareportForSharing = "";
    } else {
        todaygold775sareport = "\n" + todaygold775saAdjusted + " * We Gold 775 SA";
        todaygold775sareportForSharing = "\n" + "```" + todaygold775saAdjusted + "```" + " * We Gold 775 SA";
    }
    if (todaygold1050sa == "0") {
        todaygold1050sareport = "";
        todaygold1050sareportForSharing = "";
    } else {
        todaygold1050sareport = "\n" + todaygold1050saAdjusted + " * We Gold 1050 SA";
        todaygold1050sareportForSharing = "\n" + "```" + todaygold1050saAdjusted + "```" + " * We Gold 1050 SA";
    }
    if (todaygold1300sa == "0") {
        todaygold1300sareport = "";
        todaygold1300sareportForSharing = "";
    } else {
        todaygold1300sareport = "\n" + todaygold1300saAdjusted + " * We Gold 1300 SA";
        todaygold1300sareportForSharing = "\n" + "```" + todaygold1300saAdjusted + "```" + " * We Gold 1300 SA";
    }
    if (todaygold2000sa == "0") {
        todaygold2000sareport = "";
        todaygold2000sareportForSharing = "";
    } else {
        todaygold2000sareport = "\n" + todaygold2000saAdjusted + " * We Gold 2000 SA";
        todaygold2000sareportForSharing = "\n" + "```" + todaygold2000saAdjusted + "```" + " * We Gold 2000 SA";
    }
    if (todayadsl140 == "0") {
        todayadsl140report = "";
        todayadsl140reportForSharing = "";
    } else {
        todayadsl140report = "\n" + todayadsl140Adjusted + " * ADSL 140GB";
        todayadsl140reportForSharing = "\n" + "```" + todayadsl140Adjusted + "```" + " * ADSL 140GB";
    }
    if (todayadsl200 == "0") {
        todayadsl200report = "";
        todayadsl200reportForSharing = "";
    } else {
        todayadsl200report = "\n" + todayadsl200Adjusted + " * ADSL 200GB";
        todayadsl200reportForSharing = "\n" + "```" + todayadsl200Adjusted + "```" + " * ADSL 200GB";
    }
    if (todayadsl250 == "0") {
        todayadsl250report = "";
        todayadsl250reportForSharing = "";
    } else {
        todayadsl250report = "\n" + todayadsl250Adjusted + " * ADSL 250GB";
        todayadsl250reportForSharing = "\n" + "```" + todayadsl250Adjusted + "```" + " * ADSL 250GB";
    }
    if (todayadsl300 == "0") {
        todayadsl300report = "";
        todayadsl300reportForSharing = "";
    } else {
        todayadsl300report = "\n" + todayadsl300Adjusted + " * ADSL 300GB";
        todayadsl300reportForSharing = "\n" + "```" + todayadsl300Adjusted + "```" + " * ADSL 300GB";
    }
    if (todayadsl400 == "0") {
        todayadsl400report = "";
        todayadsl400reportForSharing = "";
    } else {
        todayadsl400report = "\n" + todayadsl400Adjusted + " * ADSL 400GB";
        todayadsl400reportForSharing = "\n" + "```" + todayadsl400Adjusted + "```" + " * ADSL 400GB";
    }
    if (todayadsl500 == "0") {
        todayadsl500report = "";
        todayadsl500reportForSharing = "";
    } else {
        todayadsl500report = "\n" + todayadsl500Adjusted + " * ADSL 500GB";
        todayadsl500reportForSharing = "\n" + "```" + todayadsl500Adjusted + "```" + " * ADSL 500GB";
    }
    if (todayadsl600 == "0") {
        todayadsl600report = "";
        todayadsl600reportForSharing = "";
    } else {
        todayadsl600report = "\n" + todayadsl600Adjusted + " * ADSL 600GB";
        todayadsl600reportForSharing = "\n" + "```" + todayadsl600Adjusted + "```" + " * ADSL 600GB";
    }
    if (todayadsl1000 == "0") {
        todayadsl1000report = "";
        todayadsl1000reportForSharing = "";
    } else {
        todayadsl1000report = "\n" + todayadsl1000Adjusted + " * ADSL 1TB";
        todayadsl1000reportForSharing = "\n" + "```" + todayadsl1000Adjusted + "```" + " * ADSL 1TB";
    }
    if (todayadsl1500 == "0") {
        todayadsl1500report = "";
        todayadsl1500reportForSharing = "";
    } else {
        todayadsl1500report = "\n" + todayadsl1500Adjusted + " * ADSL 1.5TB";
        todayadsl1500reportForSharing = "\n" + "```" + todayadsl1500Adjusted + "```" + " * ADSL 1.5TB";
    }
    if (todayadslannual == "0") {
        todayadslannualreport = "";
        todayadslannualreportForSharing = "";
    } else {
        todayadslannualreport = "\n" + todayadslannualAdjusted + " * ADSL Annual";
        todayadslannualreportForSharing = "\n" + "```" + todayadslannualAdjusted + "```" + " * ADSL Annual";
    }
    if (todayfixed == "0") {
        todayfixedreport = "";
        todayfixedreportForSharing = "";
    } else {
        todayfixedreport = "\n" + todayfixedAdjusted + " * Fixed";
        todayfixedreportForSharing = "\n" + "```" + todayfixedAdjusted + "```" + " * Fixed";
    }
    if (todaywallet == "0") {
        todaywalletreport = "";
        todaywalletreportForSharing = "";
    } else {
        todaywalletreport = "\n" + todaywalletAdjusted + " * Wallet";
        todaywalletreportForSharing = "\n" + "```" + todaywalletAdjusted + "```" + " * Wallet";
    }
    if (todayweair == "0") {
        todayweairreport = "";
        todayweairreportForSharing = "";
    } else {
        todayweairreport = "\n" + todayweairAdjusted + " * We Air";
        todayweairreportForSharing = "\n" + "```" + todayweairAdjusted + "```" + " * We Air";
    }
    if (todaymifi == "0") {
        todaymifireport = "";
        todaymifireportForSharing = "";
    } else {
        todaymifireport = "\n" + todaymifiAdjusted + " * MiFi";
        todaymifireportForSharing = "\n" + "```" + todaymifiAdjusted + "```" + " * MiFi";
    }
    todaysales =
        todaypaygreport +
        todaydatareport +
        todaysuperkix25report +
        todaysuperkix32report +
        todaysuperkix45report +
        todaysuperkix60report +
        todaysuperkix85report +
        todaysuperkix105report +
        todaysuperkix130report +
        todaytazbeet40report +
        todaytazbeet50report +
        todaytazbeet90report +
        todaytazbeet145report +
        todayweclub32report +
        todayweclub50report +
        todayweclub85report +
        todayweclub130report +
        todaywemix215report +
        todaywemix310report +
        todaygold260fmcreport +
        todaygold525fmcreport +
        todaygold775fmcreport +
        todaygold1050fmcreport +
        todaygold1300fmcreport +
        todaygold2000fmcreport +
        todaygold260sareport +
        todaygold525sareport +
        todaygold775sareport +
        todaygold1050sareport +
        todaygold1300sareport +
        todaygold2000sareport +
        todayadsl140report +
        todayadsl200report +
        todayadsl250report +
        todayadsl300report +
        todayadsl400report +
        todayadsl500report +
        todayadsl600report +
        todayadsl1000report +
        todayadsl1500report +
        todayadslannualreport +
        todayfixedreport +
        todaywalletreport +
        todayweairreport +
        todaymifireport;
    todaysalesForSharing =
        todaypaygreportForSharing +
        todaydatareportForSharing +
        todaysuperkix25reportForSharing +
        todaysuperkix32reportForSharing +
        todaysuperkix45reportForSharing +
        todaysuperkix60reportForSharing +
        todaysuperkix85reportForSharing +
        todaysuperkix105reportForSharing +
        todaysuperkix130reportForSharing +
        todaytazbeet40reportForSharing +
        todaytazbeet50reportForSharing +
        todaytazbeet90reportForSharing +
        todaytazbeet145reportForSharing +
        todayweclub32reportForSharing +
        todayweclub50reportForSharing +
        todayweclub85reportForSharing +
        todayweclub130reportForSharing +
        todaywemix215reportForSharing +
        todaywemix310reportForSharing +
        todaygold260fmcreportForSharing +
        todaygold525fmcreportForSharing +
        todaygold775fmcreportForSharing +
        todaygold1050fmcreportForSharing +
        todaygold1300fmcreportForSharing +
        todaygold2000fmcreportForSharing +
        todaygold260sareportForSharing +
        todaygold525sareportForSharing +
        todaygold775sareportForSharing +
        todaygold1050sareportForSharing +
        todaygold1300sareportForSharing +
        todaygold2000sareportForSharing +
        todayadsl140reportForSharing +
        todayadsl200reportForSharing +
        todayadsl250reportForSharing +
        todayadsl300reportForSharing +
        todayadsl400reportForSharing +
        todayadsl500reportForSharing +
        todayadsl600reportForSharing +
        todayadsl1000reportForSharing +
        todayadsl1500reportForSharing +
        todayadslannualreportForSharing +
        todayfixedreportForSharing +
        todaywalletreportForSharing +
        todayweairreportForSharing +
        todaymifireportForSharing;
    if (todaysales == "") {
        todaysalesreport = "";
        todaysalesreportForSharing = "";
    } else {
        todaysalesreport = todaysales + "\n" + "--------------------------";
        todaysalesreportForSharing = todaysalesForSharing + "\n" + "```--------------------------```";
    }
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
    dailyrequiredGold = ~~Number(Math.ceil((targetwegold - utdwegold) / (daysinmonth - day))) || 0;
    if (daysinmonth - day == "0" || dailyrequiredGold <= "0") {
        dailyrequiredGoldreport = "-";
    } else {
        dailyrequiredGoldreport = dailyrequiredGold;
    }
    dailyrequiredWallet = ~~Number(Math.ceil((targetwallet - utdwallet) / (daysinmonth - day))) || 0;
    if (daysinmonth - day == "0" || dailyrequiredWallet <= "0") {
        dailyrequiredWalletreport = "-";
    } else {
        dailyrequiredWalletreport = dailyrequiredWallet;
    }
    if (daysinmonth - day == "0") {
        reMobilereport = "-";
    } else {
        reMobilereport = reMobile + "%";
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
        todaysalesreport +
        "\n" +
        "* Today Lines: " +
        dailymobile +
        "\n" +
        "* Daily Required: " +
        dailyrequiredreport +
        "\n" +
        "* RE: " +
        reMobilereport +
        "\n" +
        "* We Air: " +
        utdweair +
        "\n" +
        "* MiFi: " +
        utdmifi +
        "\n" +
        "--------------------------" +
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
        "--------------------------" +
        "\n" +
        "* ADSL Bills: " +
        todayadslbills +
        "\n" +
        "* Postpaid Bills: " +
        todaypostpaidbills +
        "\n" +
        "* Fixed Bills: " +
        todayfixedbills +
        "\n" +
        "* Cash: " +
        todaycash +
        " LE";
    salesreportForSharing =
        "Date: " +
        date +
        "\n" +
        "Store: " +
        storename +
        "\n" +
        "```--------------------------```" +
        todaysalesreportForSharing +
        "\n" +
        "* Today Lines: " +
        dailymobile +
        "\n" +
        "* Daily Required: " +
        dailyrequiredreport +
        "\n" +
        "* RE: " +
        reMobilereport +
        "\n" +
        "* We Air: " +
        utdweair +
        "\n" +
        "* MiFi: " +
        utdmifi +
        "\n" +
        "```--------------------------" +
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
        "--------------------------```" +
        "\n" +
        "* ADSL Bills: " +
        todayadslbills +
        "\n" +
        "* Postpaid Bills: " +
        todaypostpaidbills +
        "\n" +
        "* Fixed Bills: " +
        todayfixedbills +
        "\n" +
        "* Cash: " +
        todaycash +
        " LE";
    document.getElementById("save__1").disabled = false;
    document.getElementById("save__2").disabled = false;
    document.getElementById("save__3").disabled = false;
    document.getElementById("copy__1").disabled = false;
    document.getElementById("copy__2").disabled = false;
    document.getElementById("copy__3").disabled = false;
    document.getElementById("save__1").innerHTML = "Save";
    document.getElementById("save__2").innerHTML = "Save";
    document.getElementById("save__3").innerHTML = "Save";
    document.getElementById("copy__1").innerHTML = "Copy";
    document.getElementById("copy__2").innerHTML = "Copy";
    document.getElementById("copy__3").innerHTML = "Copy";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    NextTransform();
}
function Summarize__1() {
    report.style.display = "none";
    summarize.style.display = "block";
    document.getElementById("summarizedreport").value =
        "Date: " +
        date +
        "\n" +
        "Store: " +
        storename +
        "\n" +
        "--------------------------" +
        "\n" +
        "Lines Daily Required: " +
        dailyrequiredreport +
        "\n" +
        "Lines Today: " +
        dailymobile +
        "\n" +
        "Total Lines: " +
        utdmobile +
        "\n" +
        "Per: " +
        vsMobile +
        "%" +
        "\n" +
        "--------------------------" +
        "\n" +
        "WE Gold Daily Required: " +
        dailyrequiredGoldreport +
        "\n" +
        "WE Gold Today: " +
        todaygold +
        "\n" +
        "Total WE Gold: " +
        utdwegold +
        "\n" +
        "--------------------------" +
        "\n" +
        "WE Pay Daily Required: " +
        dailyrequiredWalletreport +
        "\n" +
        "WE Pay Today: " +
        todaywallet +
        "\n" +
        "Total WE Pay: " +
        utdwallet +
        "\n" +
        "--------------------------" +
        "\n" +
        "WE Air Today: " +
        todayweair +
        "\n" +
        "Total WE Air: " +
        utdweair +
        "\n" +
        "--------------------------" +
        "\n" +
        "MiFi Today: " +
        todaymifi +
        "\n" +
        "Total MiFi: " +
        utdmifi +
        "\n" +
        "--------------------------" +
        "\n" +
        "Today Cash Box: " +
        todaycash +
        " LE";
    summarizedreportForSharing =
        "*Date:* " +
        "*" +
        date +
        "*" +
        "\n" +
        "*Store:* " +
        "*" +
        storename +
        "*" +
        "\n" +
        "```--------------------------```" +
        "\n" +
        "*Lines Daily Required:* " +
        "*" +
        dailyrequiredreport +
        "*" +
        "\n" +
        "*Lines Today:* " +
        "*" +
        dailymobile +
        "*" +
        "\n" +
        "*Total Lines:* " +
        "*" +
        utdmobile +
        "*" +
        "\n" +
        "*Per:* " +
        "*" +
        vsMobile +
        "%*" +
        "\n" +
        "```--------------------------```" +
        "\n" +
        "*WE Gold Daily Required:* " +
        "*" +
        dailyrequiredGoldreport +
        "*" +
        "\n" +
        "*WE Gold Today:* " +
        "*" +
        todaygold +
        "*" +
        "\n" +
        "*Total WE Gold:* " +
        "*" +
        utdwegold +
        "*" +
        "\n" +
        "```--------------------------```" +
        "\n" +
        "*WE Pay Daily Required:* " +
        "*" +
        dailyrequiredWalletreport +
        "*" +
        "\n" +
        "*WE Pay Today:* " +
        "*" +
        todaywallet +
        "*" +
        "\n" +
        "*Total WE Pay:* " +
        "*" +
        utdwallet +
        "*" +
        "\n" +
        "```--------------------------```" +
        "\n" +
        "*WE Air Today:* " +
        "*" +
        todayweair +
        "*" +
        "\n" +
        "*Total WE Air:* " +
        "*" +
        utdweair +
        "*" +
        "\n" +
        "```--------------------------```" +
        "\n" +
        "*MiFi Today:* " +
        "*" +
        todaymifi +
        "*" +
        "\n" +
        "*Total MiFi:* " +
        "*" +
        utdmifi +
        "*" +
        "\n" +
        "```--------------------------```" +
        "\n" +
        "*Today Cash Box:* " +
        "*" +
        todaycash +
        " LE*";
    document.getElementById("copy__3").disabled = false;
    document.getElementById("copy__3").innerHTML = "Copy";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    NextTransform();
}
function Summarize__2() {
    Summarize__1();
}
function Copy__1() {
    navigator.clipboard.writeText(salesreportForSharing);
    document.getElementById("copy__1").disabled = true;
    document.getElementById("copy__2").disabled = true;
    document.getElementById("copy__1").innerHTML = "Copied";
    document.getElementById("copy__2").innerHTML = "Copied";
}
function Copy__2() {
    Copy__1();
}
function Copy__3() {
    navigator.clipboard.writeText(summarizedreportForSharing);
    document.getElementById("copy__3").disabled = true;
    document.getElementById("copy__3").innerHTML = "Copied";
}
function Share__1() {
    if (navigator.share) {
        navigator.share({
            title: "Sales Report",
            text: salesreportForSharing,
        });
    } else {
        message = window.encodeURIComponent(salesreportForSharing);
        link = "https://api.whatsapp.com/send?text=";
        window.open(link + message);
    }
}
function Share__2() {
    Share__1();
}
function Share__3() {
    if (navigator.share) {
        navigator.share({
            title: "Summarized Report",
            text: summarizedreportForSharing,
        });
    } else {
        message = window.encodeURIComponent(summarizedreportForSharing);
        link = "https://api.whatsapp.com/send?text=";
        window.open(link + message);
    }
}
function Print__1() {
    doc = document.getElementById("printFrame").contentWindow;
    doc.document.open();
    doc.document.write("<html lang=en><head><title>Sales Report</title><style>body {font-family: monospace; display: flex;} div {margin: 0px auto 0px auto;}</style></head><body><div>");
    doc.document.write(document.getElementById("salesreport").value.replace(/  /gi, "&nbsp;&nbsp;").replace(/\n/gi, "<br>"));
    doc.document.write("</div></body></html>");
    doc.document.close();
    document.getElementById("printFrame").contentWindow.print();
}
function Print__2() {
    doc = document.getElementById("printFrame").contentWindow;
    doc.document.open();
    doc.document.write("<html lang=en><head><title>Summarized Report</title><style>body {font-family: monospace; display: flex;} div {margin: 0px auto 0px auto;}</style></head><body><div>");
    doc.document.write(document.getElementById("summarizedreport").value.replace(/  /gi, "&nbsp;&nbsp;").replace(/\n/gi, "<br>"));
    doc.document.write("</div></body></html>");
    doc.document.close();
    document.getElementById("printFrame").contentWindow.print();
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
    localStorage.setItem("achievedweair.store." + x, utdweair);
    localStorage.setItem("achievedmifi.store." + x, utdmifi);
    document.getElementById("save__1").disabled = true;
    document.getElementById("save__2").disabled = true;
    document.getElementById("save__3").disabled = true;
    document.getElementById("save__1").innerHTML = "Saved";
    document.getElementById("save__2").innerHTML = "Saved";
    document.getElementById("save__3").innerHTML = "Saved";
    localStorage.setItem("storeRestore", "true");
    localStorage.setItem("stores", sessionStorage.getItem("stores"));
    localStorage.setItem("selectedStore", localStorage.getItem("currentStore"));
    localStorage.setItem("activeStores", localStorage.getItem("stores") - localStorage.getItem("removedStores"));
}
function Save__2() {
    Save__1();
}
function Save__3() {
    Save__1();
}
function RemoveStore() {
    let x = parseInt(localStorage.getItem("selectedStore"));
    let text = "Are you sure you want to delete " + '"' + localStorage.getItem("storename.store." + x) + '"?';
    if (confirm(text) == true) {
        localStorage.setItem("deleteStore" + x, "true");
        localStorage.removeItem("storename.store." + x);
        localStorage.removeItem("achievedpayg.store." + x);
        localStorage.removeItem("targetpayg.store." + x);
        localStorage.removeItem("achieveddata.store." + x);
        localStorage.removeItem("targetdata.store." + x);
        localStorage.removeItem("achievedsuperkix.store." + x);
        localStorage.removeItem("targetsuperkix.store." + x);
        localStorage.removeItem("achievedtaz.store." + x);
        localStorage.removeItem("targettaz.store." + x);
        localStorage.removeItem("achievedweclub.store." + x);
        localStorage.removeItem("targetweclub.store." + x);
        localStorage.removeItem("achievedwemix.store." + x);
        localStorage.removeItem("targetwemix.store." + x);
        localStorage.removeItem("achievedwegoldfmc.store." + x);
        localStorage.removeItem("achievedwegoldsa.store." + x);
        localStorage.removeItem("targetwegold.store." + x);
        localStorage.removeItem("achievedadsl140.store." + x);
        localStorage.removeItem("achievedadslht.store." + x);
        localStorage.removeItem("targetadsl.store." + x);
        localStorage.removeItem("achievedfixed.store." + x);
        localStorage.removeItem("targetfixed.store." + x);
        localStorage.removeItem("achievedwallet.store." + x);
        localStorage.removeItem("targetwallet.store." + x);
        localStorage.removeItem("achievedweair.store." + x);
        localStorage.removeItem("achievedmifi.store." + x);
        let selectedStore = localStorage.getItem("stores");
        for (i = 1; i <= selectedStore; i++) {
            if (localStorage.getItem("deleteStore" + i) == "true") continue;
            selectedStore = parseInt([i]);
            localStorage.setItem("selectedStore", selectedStore);
        }
        localStorage.setItem("activeStores", localStorage.getItem("activeStores") - 1);
        localStorage.setItem("removedStores", parseInt(localStorage.getItem("removedStores")) + 1 || 1);
        if (localStorage.getItem("activeStores") < "1") {
            for (i = 1; i <= localStorage.getItem("stores"); i++) {
                localStorage.removeItem("deleteStore" + i);
            }
            localStorage.removeItem("activeStores");
            localStorage.removeItem("currentStore");
            localStorage.removeItem("selectedStore");
            localStorage.removeItem("removedStores");
            localStorage.removeItem("storeRestore");
            localStorage.removeItem("stores");
        }
        window.location.href = "store.html";
    } else {
        return false;
    }
}
