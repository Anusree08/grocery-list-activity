function getRelevantData(arr,drpdwn){
    return arr.filter((el)=>{ return el.Department===drpdwn});
}
async function getGroceryList(e){
    try{
        const res=await axios.get('list.json');
        
        let list=res.data;
        console.log(e.target.value);
        let relevantData=e.target.value==='all'?list:getRelevantData(list,e.target.value);
        console.log(relevantData);
        let tableData=``;
        relevantData.forEach((el)=>{
            tableData +=`<tr>
            <td data-th="Sl.no">${el.Slno}</td>
            <td data-th="Name">${el.Name}</td>
            <td data-th="Quantity">${el.Quantity}</td>
            <td data-th="Unit">${el.Unit}</td>
            <td data-th="Department">${el.Department}</td>
            <td data-th="Notes">${el.Notes}</td>
        </tr>`;
        });
        const tbl1=document.querySelector('#tbl1');
        tbl1.innerHTML=tableData;
        tablelist=document.querySelector('#tablelist');
        tablelist.classList.remove('hidden');


    }
    catch(err){
        console.log('error occured:',err);
    }
    
}
document.querySelector('#drpdwn').addEventListener('input',getGroceryList);
document.querySelector('#drpdwn').addEventListener('input',(e)=>{
if(!e.target.value){
    tablelist=document.querySelector('#tablelist');
    tablelist.classList.add('hidden');
}
});