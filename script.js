console.log("JS Script fired");

const resDiv = document.querySelector("#responseDiv");

const req = new XMLHttpRequest();
req.addEventListener("load", function(){
    loadData(this.response);
});
req.open("GET", "https://datausa.io/api/data?drilldowns=Nation&measures=Population");
req.send();



function loadData(jsonStr){
    let array =[];
    array = JSON.parse(jsonStr);
    console.log(array);
    console.log(array.data);


    array.data.forEach(element => {

        const node = new DataNode(element['ID Nation']);





        for(const property in element){
            console.log(property+" | "+element[property]);
        }
    });
    
}

//#region <Employee class>
class DataNode{

    id_nation;
    nation;
    id_year;
    year;
    population;
    slug_nation;

    Employee(id,name,position,salary,start_date,office,extn){
        this.id = id;
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.start_date = start_date;
        this.office = office;
        this.extn = extn;
    }

}
//#endregion
