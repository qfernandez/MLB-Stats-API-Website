function searchPlayer() {
            
            $("#information").empty();
            
            //Player basic infor API
            $.ajax({
                type: "GET",
                url: "https://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part=%27" + $("#playerName").val() + "%27 ",
                dataType: "json",
                success: function(data, status) {
                        $('#information').append("<br>Name: " + data["search_player_all"]["queryResults"]["row"]["name_display_first_last"]);
                        $('#information').append("<br>Birth City: " + data["search_player_all"]["queryResults"]["row"]["birth_city"]);
                        $('#information').append("<br>Position: " + data["search_player_all"]["queryResults"]["row"]["position"]);
                        $('#information').append("<br>Current Team: " + data["search_player_all"]["queryResults"]["row"]["team_full"]);
                        x = (data["search_player_all"]["queryResults"]["row"]["player_id"]);
                        y = (data["search_player_all"]["queryResults"]["row"]["birth_city"]);
                        
                    //Stats API
                    $.ajax({
                        type: "GET",
                        url: "https://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season=" + $("#year").val() + "&player_id=" + x,
                        dataType:"json",
                        success: function(data, status) {
                            $('#p_season').append(data["sport_hitting_tm"]["queryResults"]["row"]["season"]);
                            $('#p_team').append(data["sport_hitting_tm"]["queryResults"]["row"]["team_full"]);
                            $('#p_avg').append(data["sport_hitting_tm"]["queryResults"]["row"]["avg"]);
                            $('#p_walks').append(data["sport_hitting_tm"]["queryResults"]["row"]["bb"]);
                            $('#p_rbis').append(data["sport_hitting_tm"]["queryResults"]["row"]["rbi"]);
                            $('#p_hrs').append(data["sport_hitting_tm"]["queryResults"]["row"]["hr"]);
                            
                            //Image API
                            // $.ajax({
                            //     type: "GET",
                            //     url: " https://serpapi.com/search.html?q=" + y + "&tbm=isch&ijn=0",
                            //     dataType:"json",
                            //     success: function(data, status) {
                            //         console.log(data)
                            //         $('#information').append("<br>Birth City Picture: " + data["image_results"]["original"]);
                            //     }
                            // });
                        }
                     });
                }
            });
}
