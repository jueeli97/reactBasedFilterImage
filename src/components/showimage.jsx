import React from "react";


const Showimage =(props)=>{
     console.log(props);
     //let {d} = props;

     return(
         <div className ="row">
         {
             props.d.map(
                 items =>(
                     <div className = "col-md-6" key = {items.id}>
                        <div className="card text-left">
                         <img className="card-img-top" src={items.largeImageURL} alt={items.photo} />
                           <div className="card-body">
                           <h4 className="card-title">{items.user}</h4>
                           <p className="card-text">{items.tags}</p>
                           </div>
                        </div>
                     </div>
                 )
             )
         }
         </div>
     )
}

export default Showimage;