    function plannerq(num) {
        for (var id = 1; id <= 4; id++) {
            var MrJin = "planner_con" + id;
            if (id == num)
                document.getElementById(MrJin).style.display = "block";
            else
                document.getElementById(MrJin).style.display = "none";
        }
        if (num == 1)
            document.getElementById("plannertitle").className = "planner_title planner_title_bg1";
        if (num == 2)
            document.getElementById("plannertitle").className = "planner_title planner_title_bg2";
    }