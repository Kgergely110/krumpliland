const elements = [
    {
        time: 2,
        type: 'water',
        shape: [[1,1,1],
                [0,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'town',
        shape: [[1,1,1],
                [0,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false        
    },
    {
        time: 1,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1,1,1],
                [0,0,1],
                [0,0,0]],
            rotation: 0,
            mirrored: false  
        },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,1],
                [0,0,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'town',
        shape: [[1,1,1],
                [0,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1,1,1],
                [0,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'town',
        shape: [[1,1,0],
                [1,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'town',
        shape: [[1,1,1],
                [1,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'farm',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'farm',
        shape: [[0,1,0],
                [1,1,1],
                [0,1,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,1,1],
                [1,0,0],
                [1,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,0,0],
                [1,1,1],
                [1,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,1]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,1,0],
                [1,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
]

const missions = 
{
  "basic": [
    {
      "title": "Az erdő széle",
      "description": "A térképed szélével szomszédos erdőmezőidért egy-egy pontot kapsz.",
      "active": false
    },
    {
      "title": "Álmos-völgy",
      "description": "Minden olyan sorért, amelyben három erdőmező van, négy-négy pontot kapsz.",
        "active": false
    },
    {
      "title": "Krumpliöntözés",
      "description": "A farmmezőiddel szomszédos vízmezőidért két-két pontot kapsz.",
        "active": false
    },
    {
      "title": "Határvidék",
      "description": "Minden teli sorért vagy oszlopért 6-6 pontot kapsz.",
        "active": false
    },
    {
      "title": "Fasor",
      "description": "A leghosszabb, függőlegesen megszakítás nélkül egybefüggő erdőmezők mindegyikéért kettő-kettő pontot kapsz. Két azonos hosszúságú esetén csak az egyikért.",
        "active": false
    },
    {
      "title": "Gazdag város",
      "description": "A legalább három különböző tereptípussal szomszédos falurégióidért három-három pontot kapsz.",
        "active": false
    },
    {
      "title": "Öntözőcsatorna",
      "description": "Minden olyan oszlopodért, amelyben a farm illetve a vízmezők száma megegyezik, négy-négy pontot kapsz. Mindkét tereptípusból legalább egy-egy mezőnek lennie kell az oszlopban ahhoz, hogy pontot kaphass érte.",
        "active": false
    },
    {
      "title": "Mágusok völgye",
      "description": "A hegymezőiddel szomszédos vízmezőidért három-három pontot kapsz.",
        "active": false
    },
    {
      "title": "Üres telek",
      "description": "A városmezőiddel szomszédos üres mezőkért 2-2 pontot kapsz.",
        "active": false
    },
    {
      "title": "Sorház",
      "description": "A leghosszabb, vízszintesen megszakítás nélkül egybefüggő falumezők mindegyikéért kettő-kettő pontot kapsz.",
        "active": false
    },
    {
      "title": "Páratlan silók",
      "description": "Minden páratlan sorszámú teli oszlopodért 10-10 pontot kapsz.",
        "active": false
    },
    {
      "title": "Gazdag vidék",
      "description": "Minden legalább öt különböző tereptípust tartalmazó sorért négy-négy pontot kapsz.",
        "active": false
    }
  ],
}

gameTable = document.getElementById("gameTable");
let gameTableArray = [[]];
for(let i=0; i<=10; i++)
{
    gameTableArray[i] = [];
    for(let j=0; j<=10; j++)
    {
        gameTableArray[i][j] = 0;
    }
}

gameTableArray[1][1] = 1;
gameTableArray[3][8] = 1;
gameTableArray[5][3] = 1;
gameTableArray[8][9] = 1;
gameTableArray[9][5] = 1;

renderGameTable = function(){
    gameTable.innerHTML = "";
    for(let i=0; i<=10; i++)
    {
        var row = document.createElement("tr");
        for(let j=0; j<=10; j++)
        {
            var cell = document.createElement("td");
            switch(gameTableArray[i][j])
            {
                case 0:
                    cell.className = "empty";
                    break;
                case 1:
                    cell.className = "mountain";
                    break;
                case 2:
                    cell.className = "town";
                    break;
                case 3:
                    cell.className = "water";
                    break;
                case 4:
                    cell.className = "farm";
                    break;
                case 5:
                    cell.className = "forest";
                    break;
            }
            row.appendChild(cell);
        }
        gameTable.appendChild(row);
    }
};

let Apoints = 0;
let Bpoints = 0;
let Cpoints = 0;
let Dpoints = 0;

let remaining = 28;
let season = document.querySelector("#season");
let time = document.querySelector("#time");
let currentState;
let currentSeason;
Cseason = function()
{
    if(remaining/7>3)
    {
        currentSeason = "Tavasz (AB)";
    }
    else if(remaining/7>2)
    {
        currentSeason = "Nyár (BC)";
    }
    else if(remaining/7>1)
    {
        currentSeason = "Ősz (CD)";
    }
    else if(remaining/7>0)
    {
        currentSeason = "Tél (DA)";
    }
    else
    {
        currentSeason = "Vége";
    }
    if(remaining>0)
    {
        if(remaining%7==0)
        {
            currentState = 7; 
        }
        else
        {
            currentState = remaining%7;
        }
    }
    else
    {
        currentState = 0;
    }
    season.innerHTML = currentSeason;
    time.innerHTML = currentState + "/7";
}

let springPoints = 0;
let summerPoints = 0;
let autumnPoints = 0;
let winterPoints = 0;
let allPoints = 0;

let round = 0;

let springData = document.getElementById("springData");
let summerData = document.getElementById("summerData");
let autumnData = document.getElementById("autumnData");
let winterData = document.getElementById("winterData");
let allData = document.getElementById("allData");

updatePoints = function()
{
    if(seasonOver() == "Tavasz (AB)")
    {
        springPoints = Apoints + Bpoints;
    }
    if(seasonOver() == "Nyár (BC)")
    {
        summerPoints = Bpoints + Cpoints;
    }
    if(seasonOver() == "Ősz (CD)")
    {
        autumnPoints = Cpoints + Dpoints;
    }
    if(seasonOver() == "Tél (DA)")
    {
        winterPoints = Dpoints + Apoints;
        allPoints = springPoints + summerPoints + autumnPoints + winterPoints + mountainPoints();
    }
    springData.innerHTML = "Tavasz:<br>" + springPoints + " pont";
    summerData.innerHTML = "Nyár:<br>" + summerPoints + " pont";
    autumnData.innerHTML = "Ősz:<br>" + autumnPoints + " pont";
    winterData.innerHTML = "Tél:<br>" + winterPoints + " pont";
    allData.innerHTML = "Összesen: " + allPoints + " pont";
}

seasonOver = function()
{
    if(currentSeason == "Tavasz (AB)" && (time.innerHTML == "1/7" || (time.innerHTML == "2/7" && elementArray[round].time == 2)))
    {
        return "Tavasz (AB)";
    }
    else if(currentSeason == "Nyár (BC)" && (time.innerHTML == "1/7" || (time.innerHTML == "2/7" && elementArray[round].time == 2)))
    {
        return "Nyár (BC)";
    }
    else if(currentSeason == "Ősz (CD)" && (time.innerHTML == "1/7" || (time.innerHTML == "2/7" && elementArray[round].time == 2)))
    {
        return "Ősz (CD)";
    }
    else if((currentSeason == "Tél (DA)" && (time.innerHTML == "1/7" || (time.innerHTML == "2/7" && elementArray[round].time == 2))) || round+1 == elementArray.length)
    {
        return "Tél (DA)";
    }
    else
    {
        return "Nincs";
    }
}

shuffleArray = function(elements)
{
    let currentIndex = elements.length;
    let randomIndex;
    while (currentIndex>0)
    {
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex--;
        [elements[currentIndex], elements[randomIndex]] = [elements[randomIndex], elements[currentIndex]];
    }
    return elements;
}

let elementTable = document.getElementById("elementTable");

renderElement = function(index)
{
    elementTable.innerHTML = "";
    let element = elements[index];
    let time = element.time;
    let type;
    let shape = element.shape;

    let timetag = document.getElementById("p");
    let img = document.getElementById("img");
    img.src = "media/clock.png";
    img.style.width = "18px";
    img.style.height = "auto";
    timetag.innerHTML = "";
    timetag.innerHTML = time;
    timetag.appendChild(img);
    elementTable.parentElement.appendChild(timetag);

    if(element.type=="water")
    {
        type = 3;
    }
    else if(element.type=="town")
    {
        type = 2;
    }
    else if(element.type=="forest")
    {
        type = 5;
    }
    else
    {
        type = 4;
    }

    for(let i=0; i<3; i++)
    {
        const row = document.createElement("tr");
        for(let j=0; j<3; j++)
        {
            const cell = document.createElement("td");
            if(shape[i][j]==1)
            {
                if(type==3)
                {
                    cell.className = "water";
                }
                else if(type==2)
                {
                    cell.className = "town";
                }
                else if(type==5)
                {
                    cell.className = "forest";
                }
                else if(type==4)
                {
                    cell.className = "farm";
                }
            }
            else
            {
                cell.className = "empty";
            }
            row.appendChild(cell);
        }
        elementTable.appendChild(row);
    }
}

addListeners = function()
{
    let cells = document.querySelectorAll("#gameTable td");
    for(let cell of cells)
    {
        cell.addEventListener("dragover", function(e){
            e.preventDefault();
            if(validatePlacement(e.target.parentElement.rowIndex, e.target.cellIndex))
            {
                e.target.style.border = "2px solid green";
            }
            else
            {
                e.target.style.border = "2px solid red";
            }
        });
        cell.addEventListener("dragleave", function(e){
            e.target.style.border = 0;
        });
        cell.addEventListener("drop", function(e)
        {
            e.target.style.border = 0;
            if(validatePlacement(e.target.parentElement.rowIndex, e.target.cellIndex))
            {
                placeElement(e.target.parentElement.rowIndex, e.target.cellIndex);
            }
        });
    }
}

elementTable.addEventListener("mouseover", function(e)
{
    if(e.target.parentElement.rowIndex == 1 && e.target.cellIndex == 1 && isOver==false)
    {
        e.target.style.cursor = "grab";
        elementTable.draggable = true;
    }
    else
    {
        e.target.style.cursor = "not-allowed";
        elementTable.draggable = false;
    }

});

elementTable.addEventListener("dragstart", function(e)
{
    e.target.style.opacity = 0.3;
    e.target.style.padding = 0;
});

elementTable.addEventListener("dragend", function(e)
{
    if(isOver==false)
    {
        e.target.style.opacity = 1;
    }
    else
    {
        e.target.style.opacity = 0.5;
        e.target.parentElement.style.opacity = 0.7;
    }
    e.target.style.padding = "0.3em";
});

let isOver = false;
let elementArray = shuffleArray(elements);

rotate = document.querySelector("#rotate");
rotate.addEventListener("click", function(){
    if(round<elements.length)
    {
        if(elementArray[round].rotation<3)
        {
            
            elementArray[round].rotation++;
        }
        else
        {
            elementArray[round].rotation = 0;
        }
        mirror(elementArray[round].shape);
        elementArray[round].shape.map(row => row.reverse());
        renderElement(round);
    }
});

mirrorButton = document.querySelector("#mirror");
mirrorButton.addEventListener("click", function(){
    if(round<elementArray.length)
    {
        mirror(elementArray[round].shape);
        elementArray[round].mirrored = !elementArray[round].mirrored;
        renderElement(round);
    }
});


mirror = function(array)
{
    if(round<elementArray.length)
    {
        for(let i=0; i<3; i++)
        {
            for(let j=0; j<=i; j++)
            {
                let temp;
                temp = array[i][j];
                array[i][j] = array[j][i];
                array[j][i] = temp;
            }
        }
    
    }
}

checkHatarvidek = function()
{
    let points = 0;
    let currentRow = 0;
    let currentCol = 0;
    for(let i=0; i<11; i++)
    {
        for(let j=0; j<11; j++)
        {
            if(gameTableArray[i][j]!=0)
            {
                currentRow++;
            }
            if(gameTableArray[j][i]!=0)
            {
                currentCol++;
            }
        }
        if(currentCol==11)
        {
            points = points + 6;
        }
        if(currentRow==11)
        {
            points = points + 6;
        }
        currentCol = 0;
        currentRow = 0;
    }
    return points;
}

checkErdoszele = function()
{
    let points = 0;
    for(let i=0; i<11; i++)
    {
        for(let j=0; j<11; j++)
        {
            if((i==0 || i==10 || j==0 || j ==10) && gameTableArray[i][j]==5)
            {
                points++;
            }
        }
    }
    return points;
}

checkAlmosvolgy = function()
{
    let points = 0;
    for(let i=0; i<11; i++)
    {
        let current = 0;
        for(let j=0; j<11; j++)
        {
            if(gameTableArray[i][j]==5)
            {
                current++;
            }
        }
        if(current==3)
        {
            points = points + 4;
        }
    }
    return points;
}

checkKrumpliontozes = function()
{
    let points = 0;
    for(let i=0; i<11; i++)
    {
        for(let j=0; j<11; j++)
        {
            if(gameTableArray[i][j]==3)
            {
                if((i>0 && gameTableArray[i-1][j]==4) || (i<10 && gameTableArray[i+1][j]==4) || (j>0 && gameTableArray[i][j-1]==4) || (j<10 && gameTableArray[i][j+1]==4))
                {
                    points = points + 2;
                }
            }
        }   
    }
    return points;
}

checkOntozocsatorna = function()
{
    let points = 0;
    for(let i=0; i<11; i++)
    {
        let farm = 0;
        let water = 0;
        for(let j=0; j<11; j++)
        {
            if(gameTableArray[j][i]==4)
            {
                farm++;
            }
            if(gameTableArray[j][i]==3)
            {
                water++;
            }
        }
        if(farm==water && farm!=0)
        {
            points = points + 4;
        }
    }
    return points;

}

mountainPoints = function()
{
    let points = 0;
    for(let i=0; i<11; i++)
    {
        for(let j=0; j<11; j++)
        {
            if(gameTableArray[i][j]==1 && (i>0 && gameTableArray[i-1][j]!=0) && (i<10 && gameTableArray[i+1][j]!=0) && (j>0 && gameTableArray[i][j-1]!=0) && (j<10 && gameTableArray[i][j+1]!=0))
            {
                points++;
            }
        }
    }
    return points;

}

checkFasor = function()
{
    let points = 0;
    let currentCol = 0;
    let max = 0;
    for(let i=0; i<11; i++)
    {
        for(let j=0; j<11; j++)
        {
            if(gameTableArray[j][i]==5)
            {
                currentCol++;
            }
        }
        if(currentCol>max)
        {
            max = currentCol;
        }
        currentCol = 0;
    }
    points = max*2;
    return points;
}

checkGazdagvaros = function()
{
    let points = 0;
    for(let i=0; i<11; i++)
    {
        for(let j=0; j<11; j++)
        {
            if(gameTableArray[i][j]==2)
            {
                let neighbors = [];
                if(i>0 && (!neighbors.includes(gameTableArray[i-1][j])))
                {
                    neighbors.push(gameTableArray[i-1][j]);
                }
                if(i<10 && (!neighbors.includes(gameTableArray[i+1][j])))
                {
                    neighbors.push(gameTableArray[i+1][j]);
                }
                if(j>0 && (!neighbors.includes(gameTableArray[i][j-1])))
                {
                    neighbors.push(gameTableArray[i][j-1]);
                }
                if(j<10 && (!neighbors.includes(gameTableArray[i][j+1])))
                {
                    neighbors.push(gameTableArray[i][j+1]);
                }
                if(neighbors.length>=3)
                {
                    points = points + 3;
                }
            }
        
        }
    }
    return points;
}

checkSorhaz = function()
{
    let points = 0;
    let currentRow = 0;
    let max = 0;
    for(let i=0; i<11; i++)
    {
        for(let j=0; j<11; j++)
        {
            if(gameTableArray[i][j]==2)
            {
                currentRow++;
            }
        }
        if(currentRow>max)
        {
            max = currentRow;
        }
        currentRow = 0;
    }
    points = max*2;
    return points;
}

checkMagusokvolgye = function()
{
    let points = 0;
    for(let i=0; i<11; i++)
    {
        for(let j=0; j<11; j++)
        {
            if(gameTableArray[i][j]==1)
            {
                if((i>0 && gameTableArray[i-1][j]==3))
                {
                    points = points + 3;
                }
                if((i<10 && gameTableArray[i+1][j]==3))
                {
                    points = points + 3;
                }
                if((j>0 && gameTableArray[i][j-1]==3))
                {
                    points = points + 3;
                }
                if((j<10 && gameTableArray[i][j+1]==3))
                {
                    points = points + 3;
                }
            }
        }
    }
    return points;

}

checkUrestelek = function()
{
    let points = 0;
    for(let i=0; i<11; i++)
    {
        for(let j=0; j<11; j++)
        {
            if(gameTableArray[i][j]==0)
            {
                if((i>0 && gameTableArray[i-1][j]==2) || (i<10 && gameTableArray[i+1][j]==2) || (j>0 && gameTableArray[i][j-1]==2) || (j<10 && gameTableArray[i][j+1]==2))
                {
                    points = points + 2;
                }
            }
        }
    }
    return points;

}

checkParatlansilok = function()
{
    let points = 0;
    let currentCol = 0;
    for(let i=0; i<11; i++)
    {
        if(i%2==0)
        {
            for(let j=0; j<11; j++)
            {
                if(gameTableArray[j][i]!=0)
                {
                    currentCol++;
                }
            }
            if(currentCol==11)
            {
                points = points + 10;
            }
            currentCol = 0;
        }
    }
    return points;

}

checkGazdagvidek = function()
{
    let points = 0;
    for(let i=0; i<11; i++)
    {
        let uniqueElements = [];
        for(let j=0; j<11; j++)
        {
            if(!uniqueElements.includes(gameTableArray[i][j]))
            {
                uniqueElements.push(gameTableArray[i][j]);
            }
        }
        if(uniqueElements.length>=5)
        {
            points = points + 4;
        }
    }
    return points;
}

questHandler = function(challenge)
{
    let points = 0;
    switch(challenge.title)
    {
        case "Az erdő széle":
            if(challenge.active)
            {
                points = checkErdoszele();
            }
            break;
        case "Álmos-völgy":
            if(challenge.active)
            {
                points = checkAlmosvolgy();
            }
            break;
        case "Krumpliöntözés":
            if(challenge.active)
            {
                points = checkKrumpliontozes();
            }
            break;
        case "Határvidék":
            if(challenge.active)
            {
                points = checkHatarvidek();
            }
            break;
        case "Fasor":
            if(challenge.active)
            {
                points = checkFasor();
            }
            break;
        case "Gazdag város":
            if(challenge.active)
            {
                points = checkGazdagvaros();
            }
            break;
        case "Öntözőcsatorna":
            if(challenge.active)
            {
                points = checkOntozocsatorna();
            }
            break;
        case "Mágusok völgye":
            if(challenge.active)
            {
                points = checkMagusokvolgye();
            }
            break;
        case "Üres telek":
            if(challenge.active)
            {
                points = checkUrestelek();
            }
            break;
        case "Sorház":
            if(challenge.active)
            {
                points = checkSorhaz();
            }
            break;
        case "Páratlan silók":
            if(challenge.active)
            {
                points = checkParatlansilok();
            }
            break;
        case "Gazdag vidék":
            if(challenge.active)
            {
                points = checkGazdagvidek();
            }
            break;
    }
    return points;
}

renderGameTable();
addListeners();
Cseason();
updatePoints();
renderElement(round);

let shuffledBasics = shuffleArray(missions.basic);

let A = shuffledBasics[0];
let B = shuffledBasics[1];
let C = shuffledBasics[2];
let D = shuffledBasics[3];

let c1 = document.querySelector("#c1");
let c2 = document.querySelector("#c2");
let c3 = document.querySelector("#c3");
let c4 = document.querySelector("#c4");

renderMissions = function()
{
    if(questHandler(A)!=0)
    {
        Apoints = questHandler(A);
    }
    if(questHandler(B)!=0)
    {
        Bpoints = questHandler(B);
    }
    if(questHandler(C)!=0)
    {
        Cpoints = questHandler(C);
    }
    if(questHandler(D)!=0)
    {
        Dpoints = questHandler(D);
    }
    c1.innerHTML = "";
    c2.innerHTML = "";
    c3.innerHTML = "";
    c4.innerHTML = "";
    c1.innerHTML = A.title + "<br>" + "<p>" + A.description + "</p><br>A\t(" + Apoints + " pont)";
    c2.innerHTML = B.title + "<br>" + "<p>" + B.description + "</p><br>B\t(" + Bpoints + " pont)";
    c3.innerHTML = C.title + "<br>" + "<p>" + C.description + "</p><br>C\t(" + Cpoints + " pont)";
    c4.innerHTML = D.title + "<br>" + "<p>" + D.description + "</p><br>D\t(" + Dpoints + " pont)";
}

renderMissions();

setActive = function()
{
    if(currentSeason == "Tavasz (AB)")
    {
        c1.classList.add("active");
        A.active = true;
        c2.classList.add("active");
        B.active = true;
        c3.classList.remove("active");
        C.active = false;
        c4.classList.remove("active");
        D.active = false; 
    }
    else if(currentSeason == "Nyár (BC)")
    {
        c1.classList.remove("active");
        A.active = false;
        c2.classList.add("active");
        B.active = true;
        c3.classList.add("active");
        C.active = true;
        c4.classList.remove("active");
        D.active = false;
    }
    else if(currentSeason == "Ősz (CD)")
    {
        c1.classList.remove("active");
        A.active = false;
        c2.classList.remove("active");
        B.active = false;
        c3.classList.add("active");
        C.active = true;
        c4.classList.add("active");
        D.active = true;
    }
    else if(currentSeason == "Tél (DA)")
    {
        c1.classList.add("active");
        A.active = true;
        c2.classList.remove("active");
        B.active = false;
        c3.classList.remove("active");
        C.active = false;
        c4.classList.add("active"); 
        D.active = true;
    }
    else
    {
        c1.classList.remove("active");
        A.active = false;
        c2.classList.remove("active");
        B.active = false;
        c3.classList.remove("active");
        C.active = false;
        c4.classList.remove("active");
        D.active = false;
    
    }
}

validatePlacement = function(cellRow, cellCol)
{
    for(let i=0; i<3; i++)
    {
        for(let j=0; j<3; j++)
        {
            if(elementArray[round].shape[i][j]==1)
            {
                if((cellRow-1+i < 0) || (cellRow-1+i > 11) || (cellCol-1+j < 0) || (cellCol-1+j > 11) || gameTableArray[cellRow-(1-i)][cellCol-(1-j)]!=0)
                {
                    return false;
                }
            }
        }
    }
    return true;
}

placeElement = function(cellRow, cellCol)
{
    for(let i=0; i<3; i++)
    {
        for(let j=0; j<3; j++)
        {
            if(elementArray[round].shape[i][j]==1)
            {
                switch(elementArray[round].type)
                {
                    case "water":
                        gameTableArray[cellRow-(1-i)][cellCol-(1-j)] = 3;
                        break;
                    case "town":
                        gameTableArray[cellRow-(1-i)][cellCol-(1-j)] = 2;
                        break;
                    case "forest":
                        gameTableArray[cellRow-(1-i)][cellCol-(1-j)] = 5;
                        break;
                    case "farm":
                        gameTableArray[cellRow-(1-i)][cellCol-(1-j)] = 4;
                        break;
                }
            }
        }
    }
    renderGameTable();
    addListeners();

    if(round+1<elementArray.length)
    {
        if(seasonOver() != "Nincs")
        {
            updatePoints();
        }
        if(elementArray[round].time == 2 && time.innerHTML == "1/7")
        {
            remaining--;
        }
        else
        {
            remaining = remaining - elementArray[round].time;
        }
        round++;
        renderElement(round);
        Cseason();
        renderMissions();
        setActive();
    }
    else if(round+1 == elementArray.length)
    {
        renderMissions();
        if(seasonOver() != "Nincs")
        {
            updatePoints();
        }
        round++;
        isOver = true;
        Cseason();
    }
    else
    {
        isOver = true;
        renderMissions();
        updatePoints();
        remaining = 0;
        Cseason();
        elementTable.draggable = false;
        elementTable.style.opacity = 0.5;
        rotate.disabled = true;
        rotate.style.opacity = 0.7;
        mirrorButton.disabled = true;
        mirrorButton.style.opacity = 0.7;
    }

}

setActive();