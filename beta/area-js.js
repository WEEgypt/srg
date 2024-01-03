function EnableRestore() {
    if (localStorage.getItem("areaRestore") == "true") {
        basic.style.display = "none";
        restore.style.display = "block";
        row__1.style.display = "none";
        row__2.style.display = "block";
        sessionStorage.removeItem("areas");
        sessionStorage.removeItem("newarea");
    } else {
        sessionStorage.setItem("areas", "1");
        localStorage.setItem("currentArea", "1");
    }
    if (localStorage.getItem("areas") > "1") {
        multi.style.display = "block";
        restore.style.display = "none";
        let x = localStorage.getItem("areas");
        for (i = 0; i < x; i++) {
            value = parseInt([i]) + 1;
            document.getElementById("areas").options.add(new Option(localStorage.getItem("areaname.area." + value), value));
        }
        document.getElementById("areas").options.add(new Option("Add Another Area", "newarea"));
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
    if (document.getElementById("areas").value == "newarea") {
        multi.style.display = "none";
        NewArea();
    } else {
        multi.style.display = "none";
        restore.style.display = "block";
        newarea.style.display = "none";
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
    if (localStorage.getItem("areas") > "1") {
        document.getElementById("areas").innerHTML = "";
        multi.style.display = "block";
        restore.style.display = "none";
        let x = localStorage.getItem("areas");
        for (i = 0; i < x; i++) {
            value = parseInt([i]) + 1;
            document.getElementById("areas").options.add(new Option(localStorage.getItem("areaname.area." + value), value));
        }
        document.getElementById("areas").options.add(new Option("Add Another Area", "newarea"));
        BackTransform();
    } else {
        Back__1();
    }
}
function Back__3() {
    if (basic.style.display === "block" && localStorage.getItem("areas") > "1" && sessionStorage.getItem("newarea") == "true") {
        basic.style.display = "none";
        multi.style.display = "block";
        document.getElementById("areas").innerHTML = "";
        let x = localStorage.getItem("areas");
        for (i = 0; i < x; i++) {
            value = parseInt([i]) + 1;
            document.getElementById("areas").options.add(new Option(localStorage.getItem("areaname.area." + value), value));
        }
        document.getElementById("areas").options.add(new Option("Add Another Area", "newarea"));
    } else if (basic.style.display === "block") {
        basic.style.display = "none";
        restore.style.display = "block";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    BackTransform();
    sessionStorage.removeItem("areas");
    sessionStorage.removeItem("newarea");
}
function Back__4() {
    if (target.style.display === "block") {
        target.style.display = "none";
        basic.style.display = "block";
        area.style.display = "block";
    }
    if (localStorage.getItem("areaRestore") == "true") {
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
    area.style.display = "none";
}
function Continue() {
    let x = document.getElementById("areas").value || 1;
    localStorage.setItem("currentArea", x);
    restore.style.display = "none";
    basic.style.display = "block";
    area.style.display = "none";
    row__1.style.display = "none";
    row__2.style.display = "none";
    today.style.display = "block";
    document.getElementById("areaname").value = localStorage.getItem("areaname.area." + x);
    document.getElementById("achievedpayg").value = localStorage.getItem("achievedpayg.area." + x);
    document.getElementById("targetpayg").value = localStorage.getItem("targetpayg.area." + x);
    document.getElementById("achieveddata").value = localStorage.getItem("achieveddata.area." + x);
    document.getElementById("targetdata").value = localStorage.getItem("targetdata.area." + x);
    document.getElementById("achievedsuperkix").value = localStorage.getItem("achievedsuperkix.area." + x);
    document.getElementById("targetsuperkix").value = localStorage.getItem("targetsuperkix.area." + x);
    document.getElementById("achievedtaz").value = localStorage.getItem("achievedtaz.area." + x);
    document.getElementById("targettaz").value = localStorage.getItem("targettaz.area." + x);
    document.getElementById("achievedweclub").value = localStorage.getItem("achievedweclub.area." + x);
    document.getElementById("targetweclub").value = localStorage.getItem("targetweclub.area." + x);
    document.getElementById("achievedwemix").value = localStorage.getItem("achievedwemix.area." + x);
    document.getElementById("targetwemix").value = localStorage.getItem("targetwemix.area." + x);
    document.getElementById("achievedwegold").value = localStorage.getItem("achievedwegold.area." + x);
    document.getElementById("targetwegold").value = localStorage.getItem("targetwegold.area." + x);
    document.getElementById("achievedadsl").value = localStorage.getItem("achievedadsl.area." + x);
    document.getElementById("targetadsl").value = localStorage.getItem("targetadsl.area." + x);
    document.getElementById("achievedfixed").value = localStorage.getItem("achievedfixed.area." + x);
    document.getElementById("targetfixed").value = localStorage.getItem("targetfixed.area." + x);
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
    document.getElementById("todaysuperkix").value = "";
    document.getElementById("todaytazbeet").value = "";
    document.getElementById("todayweclub").value = "";
    document.getElementById("todaywemix").value = "";
    document.getElementById("todaygold").value = "";
    document.getElementById("todayadsl").value = "";
    document.getElementById("todayfixed").value = "";
    NextTransform();
    sessionStorage.setItem("areas", localStorage.getItem("areas"));
}
function NewMonth() {
    let x = document.getElementById("areas").value || 1;
    localStorage.setItem("currentArea", x);
    restore.style.display = "none";
    basic.style.display = "block";
    document.getElementById("areaname").value = localStorage.getItem("areaname.area." + x);
    document.getElementById("achievedpayg").value = "";
    document.getElementById("targetpayg").value = localStorage.getItem("targetpayg.area." + x);
    document.getElementById("achieveddata").value = "";
    document.getElementById("targetdata").value = localStorage.getItem("targetdata.area." + x);
    document.getElementById("achievedsuperkix").value = "";
    document.getElementById("targetsuperkix").value = localStorage.getItem("targetsuperkix.area." + x);
    document.getElementById("achievedtaz").value = "";
    document.getElementById("targettaz").value = localStorage.getItem("targettaz.area." + x);
    document.getElementById("achievedweclub").value = "";
    document.getElementById("targetweclub").value = localStorage.getItem("targetweclub.area." + x);
    document.getElementById("achievedwemix").value = "";
    document.getElementById("targetwemix").value = localStorage.getItem("targetwemix.area." + x);
    document.getElementById("achievedwegold").value = "";
    document.getElementById("targetwegold").value = localStorage.getItem("targetwegold.area." + x);
    document.getElementById("achievedadsl").value = "";
    document.getElementById("targetadsl").value = localStorage.getItem("targetadsl.area." + x);
    document.getElementById("achievedfixed").value = "";
    document.getElementById("targetfixed").value = localStorage.getItem("targetfixed.area." + x);
    document.getElementById("todaypayg").value = "";
    document.getElementById("todaydata").value = "";
    document.getElementById("todaysuperkix").value = "";
    document.getElementById("todaytazbeet").value = "";
    document.getElementById("todayweclub").value = "";
    document.getElementById("todaywemix").value = "";
    document.getElementById("todaygold").value = "";
    document.getElementById("todayadsl").value = "";
    document.getElementById("todayfixed").value = "";
    NextTransform();
    sessionStorage.setItem("areas", localStorage.getItem("areas"));
}
function NewArea() {
    sessionStorage.setItem("newarea", "true");
    areas = parseInt(localStorage.getItem("areas"));
    x = areas + 1;
    sessionStorage.setItem("areas", x);
    localStorage.setItem("currentArea", x);
    restore.style.display = "none";
    basic.style.display = "block";
    document.getElementById("areaname").value = "";
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
    document.getElementById("todaygold").value = "";
    document.getElementById("todayadsl").value = "";
    document.getElementById("todayfixed").value = "";
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
    areaname = document.getElementById("areaname").value;
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
    todaygoldInput = document.getElementById("todaygold").value.split(" ");
    todaygold = 0;
    for (i = 0; i < todaygoldInput.length; i++) {
        todaygold += parseInt(todaygoldInput[i]) || 0;
    }
    achievedwegold = parseInt(document.getElementById("achievedwegold").value) || 0;
    utdwegold = todaygold + achievedwegold || 0;
    targetwegold = parseInt(document.getElementById("targetwegold").value) || 0;
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
    utdmobile = utdpayg + utddata + utdsuperkix + utdtaz + utdweclub + utdwemix + utdwegold;
    targetmobile = targetpayg + targetdata + targetsuperkix + targettaz + targetwemix + targetweclub + targetwegold;
    dailymobile = todaypayg + todaydata + todaysuperkix + todaytazbeet + todayweclub + todaywemix + todaygold;
    vsPAYG = ~~Number(Math.round((utdpayg / targetpayg) * 100)) || 0;
    vsSuperKix = ~~Number(Math.round((utdsuperkix / targetsuperkix) * 100)) || 0;
    vsTaz = ~~Number(Math.round((utdtaz / targettaz) * 100)) || 0;
    vsWeClub = ~~Number(Math.round((utdweclub / targetweclub) * 100)) || 0;
    vsWeMix = ~~Number(Math.round((utdwemix / targetwemix) * 100)) || 0;
    vsMobile = ~~Number(Math.round((utdmobile / targetmobile) * 100)) || 0;
    vsFixed = ~~Number(Math.round((utdfixed / targetfixed) * 100)) || 0;
    vsAdsl = ~~Number(Math.round((utdadsl / targetadsl) * 100)) || 0;
    vsWemix = ~~Number(Math.round((utdwemix / targetwemix) * 100)) || 0;
    vsGold = ~~Number(Math.round((utdwegold / targetwegold) * 100)) || 0;
    if (targetpayg < "10") {
        PAYGTGTSPACE = "   ";
    } else if (targetpayg >= "10" && targetpayg < "100") {
        PAYGTGTSPACE = "  ";
    } else if (targetpayg >= "100" && targetpayg < "1000") {
        PAYGTGTSPACE = " ";
    } else {
        PAYGTGTSPACE = " ";
    }
    if (targetsuperkix < "10") {
        SKIXTGTSPACE = "   ";
    } else if (targetsuperkix >= "10" && targetsuperkix < "100") {
        SKIXTGTSPACE = "  ";
    } else if (targetsuperkix >= "100" && targetsuperkix < "1000") {
        SKIXTGTSPACE = " ";
    } else {
        SKIXTGTSPACE = " ";
    }
    if (targettaz < "10") {
        TAZTGTSPACE = "   ";
    } else if (targettaz >= "10" && targettaz < "100") {
        TAZTGTSPACE = "  ";
    } else if (targettaz >= "100" && targettaz < "1000") {
        TAZTGTSPACE = " ";
    } else {
        TAZTGTSPACE = " ";
    }
    if (targetweclub < "10") {
        WECLUBTGTSPACE = "   ";
    } else if (targetweclub >= "10" && targetweclub < "100") {
        WECLUBTGTSPACE = "  ";
    } else if (targetweclub >= "100" && targetweclub < "1000") {
        WECLUBTGTSPACE = " ";
    } else {
        WECLUBTGTSPACE = " ";
    }
    if (targetwemix < "10") {
        WEMIXTGTSPACE = "   ";
    } else if (targetwemix >= "10" && targetwemix < "100") {
        WEMIXTGTSPACE = "  ";
    } else if (targetwemix >= "100" && targetwemix < "1000") {
        WEMIXTGTSPACE = " ";
    } else {
        WEMIXTGTSPACE = " ";
    }
    if (utdpayg < "10") {
        PAYGUTDSPACE = "   ";
    } else if (utdpayg >= "10" && utdpayg < "100") {
        PAYGUTDSPACE = "  ";
    } else if (utdpayg >= "100" && utdpayg < "1000") {
        PAYGUTDSPACE = " ";
    } else {
        PAYGUTDSPACE = " ";
    }
    if (utdsuperkix < "10") {
        SKIXUTDSPACE = "   ";
    } else if (utdsuperkix >= "10" && utdsuperkix < "100") {
        SKIXUTDSPACE = "  ";
    } else if (utdsuperkix >= "100" && utdsuperkix < "1000") {
        SKIXUTDSPACE = " ";
    } else {
        SKIXUTDSPACE = " ";
    }
    if (utdtaz < "10") {
        TAZUTDSPACE = "   ";
    } else if (utdtaz >= "10" && utdtaz < "100") {
        TAZUTDSPACE = "  ";
    } else if (utdtaz >= "100" && utdtaz < "1000") {
        TAZUTDSPACE = " ";
    } else {
        TAZUTDSPACE = " ";
    }
    if (utdweclub < "10") {
        WECLUBUTDSPACE = "   ";
    } else if (utdweclub >= "10" && utdweclub < "100") {
        WECLUBUTDSPACE = "  ";
    } else if (utdweclub >= "100" && utdweclub < "1000") {
        WECLUBUTDSPACE = " ";
    } else {
        WECLUBUTDSPACE = " ";
    }
    if (utdwemix < "10") {
        WEMIXUTDSPACE = "   ";
    } else if (utdwemix >= "10" && utdwemix < "100") {
        WEMIXUTDSPACE = "  ";
    } else if (utdwemix >= "100" && utdwemix < "1000") {
        WEMIXUTDSPACE = " ";
    } else {
        WEMIXUTDSPACE = " ";
    }
    document.getElementById("salesreport").value =
        "Date: " +
        date +
        "\n" +
        "Area: " +
        areaname +
        "\n" +
        "--------------------------" +
        "\n" +
        "PAYG:    " +
        "T:" +
        targetpayg +
        PAYGTGTSPACE +
        "A:" +
        utdpayg +
        PAYGUTDSPACE +
        "VS:" +
        vsPAYG +
        "%" +
        "\n" +
        "C Kix:   " +
        "T:" +
        targetsuperkix +
        SKIXTGTSPACE +
        "A:" +
        utdsuperkix +
        SKIXUTDSPACE +
        "VS:" +
        vsSuperKix +
        "%" +
        "\n" +
        "Cont T:  " +
        "T:" +
        targettaz +
        TAZTGTSPACE +
        "A:" +
        utdtaz +
        TAZUTDSPACE +
        "VS:" +
        vsTaz +
        "%" +
        "\n" +
        "We Club: " +
        "T:" +
        targetweclub +
        WECLUBTGTSPACE +
        "A:" +
        utdweclub +
        WECLUBUTDSPACE +
        "VS:" +
        vsWeClub +
        "%" +
        "\n" +
        "We Mix:  " +
        "T:" +
        targetwemix +
        WEMIXTGTSPACE +
        "A:" +
        utdwemix +
        WEMIXUTDSPACE +
        "VS:" +
        vsWeMix +
        "%" +
        "\n" +
        "\n" +
        "Today Sales: " +
        dailymobile +
        " Mob" +
        "\n" +
        "--------------------------" +
        "\n" +
        "We Gold" +
        "\n" +
        "Today: " +
        todaygold +
        "\n" +
        "TGT: " +
        targetwegold +
        " /Ach: " +
        utdwegold +
        " /VS: " +
        vsGold +
        "%" +
        "\n" +
        "-------------------------" +
        "\n" +
        "ADSL" +
        "\n" +
        "Today: " +
        todayadsl +
        "\n" +
        "TGT: " +
        targetadsl +
        " /Ach: " +
        utdadsl +
        " /VS: " +
        vsAdsl +
        "%" +
        "\n" +
        "-------------------------" +
        "\n" +
        "Fixed" +
        "\n" +
        "Today: " +
        todayfixed +
        "\n" +
        "TGT: " +
        targetfixed +
        " /Ach: " +
        utdfixed +
        " /VS: " +
        vsFixed +
        "%" +
        "\n" +
        "-------------------------" +
        "\n" +
        "Total Activation: " +
        utdmobile +
        "\n" +
        "TGT: " +
        targetmobile +
        "\n" +
        "VS: " +
        vsMobile +
        "%";
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
    salesreportValue = document.getElementById("salesreport").value.replace(/--------------------------/gi, "```--------------------------");
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
    salesreportValue = document.getElementById("salesreport").value.replace(/--------------------------/gi, "```--------------------------");
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
    let x = parseInt(localStorage.getItem("currentArea"));
    localStorage.setItem("areaname.area." + x, document.getElementById("areaname").value || "Area " + x);
    localStorage.setItem("achievedpayg.area." + x, utdpayg);
    localStorage.setItem("targetpayg.area." + x, document.getElementById("targetpayg").value);
    localStorage.setItem("achieveddata.area." + x, utddata);
    localStorage.setItem("targetdata.area." + x, document.getElementById("targetdata").value);
    localStorage.setItem("achievedsuperkix.area." + x, utdsuperkix);
    localStorage.setItem("targetsuperkix.area." + x, document.getElementById("targetsuperkix").value);
    localStorage.setItem("achievedtaz.area." + x, utdtaz);
    localStorage.setItem("targettaz.area." + x, document.getElementById("targettaz").value);
    localStorage.setItem("achievedweclub.area." + x, utdweclub);
    localStorage.setItem("targetweclub.area." + x, document.getElementById("targetweclub").value);
    localStorage.setItem("achievedwemix.area." + x, utdwemix);
    localStorage.setItem("targetwemix.area." + x, document.getElementById("targetwemix").value);
    localStorage.setItem("achievedwegold.area." + x, utdwegold);
    localStorage.setItem("targetwegold.area." + x, document.getElementById("targetwegold").value);
    localStorage.setItem("achievedadsl.area." + x, utdadsl);
    localStorage.setItem("targetadsl.area." + x, document.getElementById("targetadsl").value);
    localStorage.setItem("achievedfixed.area." + x, utdfixed);
    localStorage.setItem("targetfixed.area." + x, document.getElementById("targetfixed").value);
    document.getElementById("save__1").disabled = true;
    document.getElementById("save__2").disabled = true;
    document.getElementById("save__1").innerHTML = "Saved";
    document.getElementById("save__2").innerHTML = "Saved";
    localStorage.setItem("areaRestore", "true");
    localStorage.setItem("areas", sessionStorage.getItem("areas"));
}
function Save__2() {
    Save__1();
}
function Print__1() {
    doc = window.open("", "_blank");
    doc.document.open();
    doc.document.write("<html lang=en><head><title>Sales Report</title><style>body {font-family: monospace; display: flex;} div {margin: 0px auto 0px auto;}</style></head><body onload=window.print();setTimeout(window.close,1000);><div>");
    doc.document.write(document.getElementById("salesreport").value.replace(/  /gi, "&nbsp;&nbsp;").replace(/\n/gi, "<br>"));
    doc.document.write("</div></body></html>");
    doc.document.close();
}
