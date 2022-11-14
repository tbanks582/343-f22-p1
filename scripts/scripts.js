function printStats(numRows){
    var node = document.getElementById("print");
    data.items.forEach(item=>{
        printRow(item);
    });
}

function printRow(item){
    var row=`
    <tr>
        <td style="padding: 8px;">${item.hero}</td>
        <td style="padding: 8px;">${item.winrate}%</td>
        <td style="padding: 8px;">${item.pickrate}%</td>
        <td style="padding: 8px;"> ${item.kda}</td>
    <tr>
    `
    var node = document.getElementById("print");
    node.innerHTML += row;
    return row;
}
const data = {
    items:[
        {
            hero: "Aatrox",
            winrate: 50,
            pickrate: 15,
            kda: 1
        },
        {
            hero: "Ahri",
            winrate: 50,
            pickrate: 5,
            kda: 1
        },
        {
            hero: "Akali",
            winrate: 50,
            pickrate: 15,
            kda: 1
        },
        {
            hero: "Akshan",
            winrate: 50,
            pickrate: 15,
            kda: 1
        },
        {
            hero: "Alistar",
            winrate: 50,
            pickrate: 15,
            kda: 1
        },
        {
            hero: "Amumu",
            winrate: 50,
            pickrate: 15,
            kda: 1
        },
        {
            hero: "Anivia",
            winrate: 50,
            pickrate: 15,
            kda: 1
        },
        {
            hero: "Annie",
            winrate: 50,
            pickrate: 15,
            kda: 1
        },
        {
            hero: "Aphelios",
            winrate: 50,
            pickrate: 15,
            kda: 1
        },
        {
            hero: "Ashe",
            winrate: 50,
            pickrate: 15,
            kda: 1
        },
        {
            hero: "Aurelion Sol",
            winrate: 45,
            pickrate: 15,
            kda: 1
        },
        {
            hero: "Azir",
            winrate: 50,
            pickrate: 15,
            kda: 1
        },
        {
            hero: "Bard",
            winrate: 50,
            pickrate: 15,
            kda: 1
        },
        {
            hero: "Bel'Veth",
            winrate: 50,
            pickrate: 15,
            kda: 1
        },
        {
            hero: "Blitzcrank",
            winrate: 100,
            pickrate: 1,
            kda: 5
        },
    ]
}

