console.log("JS Script fired");

const resDiv = document.querySelector("#responseDiv");

const req = new XMLHttpRequest();
req.addEventListener("progress", updateProgress);




req.addEventListener("load", function(){
    let array = loadData(this.response);
    console.log("Data in array ----------");
    console.log(array);

    localStorage.setItem('DataJson',this.response);

    let savedData = localStorage.getItem('DataArray');
    //console.log("Data from localstorage array--------------\n"+loadData(savedData));
});
req.open("GET", "https://datausa.io/api/data?drilldowns=Nation&measures=Population");
req.send();



function loadData(jsonStr){
    let array =[];
    array = JSON.parse(jsonStr);

    let nodeArray = [];
    array.data.forEach(element => {
        
        const node = new DataNode(element['ID Nation'], element['Nation'], element['ID Year'],element['Year'],element['Population'],element['Slug Nation']);
        
        nodeArray.push(node);
        
    });

    
    return nodeArray;
}


function updateProgress(event) {
    if (event.lengthComputable) {
      const percentComplete = (event.loaded / event.total) * 100;
      console.log(percentComplete);
      // ...
    } else {
        console.log("Progress not computable");
      // Unable to compute progress information since the total size is unknown
    }
}
//#region <Employee class>
class DataNode{

    id_nation;
    nation;
    id_year;
    year;
    population;
    slug_nation;

    constructor(id_nation,nation,id_year,year,population,slug_nation){
        this.id_nation = id_nation;
        this.nation = nation;
        this.id_year = id_year;
        this.year = year;
        this.population = population;
        this.slug_nation = slug_nation;
    }

}
//#endregion
