// function searchPlayer() {
            
//             $("#information").empty();
            
//             //Player basic infor API
//             $.ajax({
//                 type: "GET",
//                 url: "https://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part=%27" + $("#playerName").val() + "%27 ",
//                 dataType: "json",
//                 success: function(data, status) {
//                         $('#information').append("<br>Name: " + data["search_player_all"]["queryResults"]["row"]["name_display_first_last"]);
//                         $('#information').append("<br>Birth City: " + data["search_player_all"]["queryResults"]["row"]["birth_city"]);
//                         $('#information').append("<br>Position: " + data["search_player_all"]["queryResults"]["row"]["position"]);
//                         $('#information').append("<br>Current Team: " + data["search_player_all"]["queryResults"]["row"]["team_full"]);
//                         x = (data["search_player_all"]["queryResults"]["row"]["player_id"]);
//                         y = (data["search_player_all"]["queryResults"]["row"]["birth_city"]);
                        
//                     //Stats API
//                     $.ajax({
//                         type: "GET",
//                         url: "https://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season=" + $("#year").val() + "&player_id=" + x,
//                         dataType:"json",
//                         success: function(data, status) {
//                             $('#p_season').append(data["sport_hitting_tm"]["queryResults"]["row"]["season"]);
//                             $('#p_team').append(data["sport_hitting_tm"]["queryResults"]["row"]["team_full"]);
//                             $('#p_avg').append(data["sport_hitting_tm"]["queryResults"]["row"]["avg"]);
//                             $('#p_walks').append(data["sport_hitting_tm"]["queryResults"]["row"]["bb"]);
//                             $('#p_rbis').append(data["sport_hitting_tm"]["queryResults"]["row"]["rbi"]);
//                             $('#p_hrs').append(data["sport_hitting_tm"]["queryResults"]["row"]["hr"]);
//                         }
//                      });
//                 }
//             });
// }

function mattOlson() {
    $.ajax({
                type: "GET",
                url: "https://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2022'&player_id='621566'",
                dataType: "json",
                success: function(data, status) {
                        $('#olson_information').append("Current Team: " + data["sport_hitting_tm"]["queryResults"]["row"]["team_full"]);
                        $('#olson_information').append("<br>Games played this season: " + data["sport_hitting_tm"]["queryResults"]["row"]["g"]);
                        $('#olson_information').append("<br>Average: " + data["sport_hitting_tm"]["queryResults"]["row"]["avg"]);
                        $('#olson_information').append("<br>Walks: " + data["sport_hitting_tm"]["queryResults"]["row"]["bb"]);
                        $('#olson_information').append("<br>RBIs: " + data["sport_hitting_tm"]["queryResults"]["row"]["rbi"]);
                        $('#olson_information').append("<br>Homeruns: " + data["sport_hitting_tm"]["queryResults"]["row"]["hr"]);
                }
            });
}

function mattChapman(){
    $.ajax({
                type: "GET",
                url: "https://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2022'&player_id='656305'",
                dataType: "json",
                success: function(data, status) {
                        $('#chapman_information').append("Current Team: " + data["sport_hitting_tm"]["queryResults"]["row"]["team_full"]);
                        $('#chapman_information').append("<br>Games played this season: " + data["sport_hitting_tm"]["queryResults"]["row"]["g"]);
                        $('#chapman_information').append("<br>Average: " + data["sport_hitting_tm"]["queryResults"]["row"]["avg"]);
                        $('#chapman_information').append("<br>Walks: " + data["sport_hitting_tm"]["queryResults"]["row"]["bb"]);
                        $('#chapman_information').append("<br>RBIs: " + data["sport_hitting_tm"]["queryResults"]["row"]["rbi"]);
                        $('#chapman_information').append("<br>Homeruns: " + data["sport_hitting_tm"]["queryResults"]["row"]["hr"]);
                }
            });
}

function markCanha(){
    $.ajax({
                type: "GET",
                url: "https://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2022'&player_id='592192'",
                dataType: "json",
                success: function(data, status) {
                        $('#canha_information').append("Current Team: " + data["sport_hitting_tm"]["queryResults"]["row"]["team_full"]);
                        $('#canha_information').append("<br>Games played this season: " + data["sport_hitting_tm"]["queryResults"]["row"]["g"]);
                        $('#canha_information').append("<br>Average: " + data["sport_hitting_tm"]["queryResults"]["row"]["avg"]);
                        $('#canha_information').append("<br>Walks: " + data["sport_hitting_tm"]["queryResults"]["row"]["bb"]);
                        $('#canha_information').append("<br>RBIs: " + data["sport_hitting_tm"]["queryResults"]["row"]["rbi"]);
                        $('#canha_information').append("<br>Homeruns: " + data["sport_hitting_tm"]["queryResults"]["row"]["hr"]);
                }
            });
}

function starlingMarte(){
    $.ajax({
                type: "GET",
                url: "https://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2022'&player_id='516782'",
                dataType: "json",
                success: function(data, status) {
                        $('#marte_information').append("Current Team: " + data["sport_hitting_tm"]["queryResults"]["row"]["team_full"]);
                        $('#marte_information').append("<br>Homeruns: " + data["sport_hitting_tm"]["queryResults"]["row"]["hr"]);
                        
                }
            });
}

function joshHarrison(){
    $.ajax({
                type: "GET",
                url: "https://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2022'&player_id='543281'",
                dataType: "json",
                success: function(data, status) {
                        $('#harrison_information').append("Current Team: " + data["sport_hitting_tm"]["queryResults"]["row"]["team_full"]);
                        $('#harrison_information').append("<br>Homeruns: " + data["sport_hitting_tm"]["queryResults"]["row"]["hr"]);
                        
                }
            });
}

function seanManaea(){
    $.ajax({
                type: "GET",
                url: "https://lookup-service-prod.mlb.com/json/named.sport_pitching_tm.bam?league_list_id='mlb'&game_type='R'&season='2022'&player_id='640455'",
                dataType: "json",
                success: function(data, status) {
                        $('#manaea_information').append("Current Team: " + data["sport_pitching_tm"]["queryResults"]["row"]["team_full"]);
                        $('#manaea_information').append("<br>Strikeouts: " + data["sport_pitching_tm"]["queryResults"]["row"]["so"]);
                        
                }
            });
}

function christBassitt(){
    $.ajax({
                type: "GET",
                url: "https://lookup-service-prod.mlb.com/json/named.sport_pitching_tm.bam?league_list_id='mlb'&game_type='R'&season='2022'&player_id='605135'",
                dataType: "json",
                success: function(data, status) {
                        $('#bassitt_information').append("Current Team: " + data["sport_pitching_tm"]["queryResults"]["row"]["team_full"]);
                        $('#bassitt_information').append("<br>Strikeouts: " + data["sport_pitching_tm"]["queryResults"]["row"]["so"]);
                        
                }
            });
}

function sergioRomo(){
    $.ajax({
                type: "GET",
                url: "https://lookup-service-prod.mlb.com/json/named.sport_pitching_tm.bam?league_list_id='mlb'&game_type='R'&season='2022'&player_id='489265'",
                dataType: "json",
                success: function(data, status) {
                        $('#romo_information').append("Current Team: " + data["sport_pitching_tm"]["queryResults"]["row"]["team_full"]);
                        $('#romo_information').append("<br>Strikeouts: " + data["sport_pitching_tm"]["queryResults"]["row"]["so"]);
                        
                }
            });
}

function jakeDiekman(){
    $.ajax({
                type: "GET",
                url: "https://lookup-service-prod.mlb.com/json/named.sport_pitching_tm.bam?league_list_id='mlb'&game_type='R'&season='2022'&player_id='518617'",
                dataType: "json",
                success: function(data, status) {
                        $('#diekman_information').append("Current Team: " + data["sport_pitching_tm"]["queryResults"]["row"]["team_full"]);
                        $('#diekman_information').append("<br>Strikeouts: " + data["sport_pitching_tm"]["queryResults"]["row"]["so"]);
                        
                }
            });
}

function jesusLuzardo(){
    $.ajax({
                type: "GET",
                url: "https://lookup-service-prod.mlb.com/json/named.sport_pitching_tm.bam?league_list_id='mlb'&game_type='R'&season='2022'&player_id='666200'",
                dataType: "json",
                success: function(data, status) {
                        $('#luzardo_information').append("Current Team: " + data["sport_pitching_tm"]["queryResults"]["row"]["team_full"]);
                        $('#luzardo_information').append("<br>Strikeouts: " + data["sport_pitching_tm"]["queryResults"]["row"]["so"]);
                        
                }
            });
}