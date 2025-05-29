async function getData(){
    try{
        const response = await fetch("assest/data/data.json");
        const data = await response.json();
        console.log(data)
    } catch(err){
        console.log(err);
    }
}
getData();