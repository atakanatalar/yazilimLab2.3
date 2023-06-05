function draw(id,type) {
    console.log(id)
    cypher = ""
    if(id === undefined){
        cypher = "match n=(:Arastirmaci)-[a]->(b)-[c]->(d) RETURN n"
    }else if(type == "Arastirmaci"){
        cypher = "match n=(a:Arastirmaci{aid : '" + id + "'})-[:Yayin_Yazari]->(y:Yayinlar) match m=(a:Arastirmaci{aid : '" + id + "'})-[:Ortak_Calisir]->(a2:Arastirmaci) return n,m"
    }else{
        cypher = "match n=(y:Yayinlar{yid : '" + id + "'})-[:Yayinlanir]->(t:Tur) match m=(a:Arastirmaci)-[:Yayin_Yazari]->(y:Yayinlar{yid : '" + id + "'}) return n,m"
    }

    console.log("cypher : " + cypher)

    var config = {
        container_id: "viz",
        server_url: "bolt://localhost:7687",
        server_user: "neo4j",
        server_password: "test",
        labels: {
            "Arastirmaci": {
                caption: "isim",
                size: 2,
                image : "https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"
            },
            "Yayinlar": {
                size : 2,
                image : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Circle-icons-computer.svg/1024px-Circle-icons-computer.svg.png"
            }
        },
        relationships: {
            
        },
    
        initial_cypher: cypher
    }

    var viz = new NeoVis.default(config);
    viz.render();
}