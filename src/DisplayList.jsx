export default function DisplayList({items}){
    return(
        <div className="items-list">
            {items.length>0? <h2>Ingredients list</h2>:null}
            <ul>
                {items.map((item)=>(
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}