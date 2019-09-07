import React from 'react';

export default function  Title({name,title,name1,title1,title2}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-family-Trebuchet MS">
                    {name} 
                    <strong className="text-blue">
                      {title}
                    </strong>
                </h1>
            </div>  
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-family-Trebuchet MS">
                    {name1} 
                    <strong className="text-blue">
                      {title1}
                    </strong>
                </h1>
            </div>   
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-family-Trebuchet MS">                     
                    <strong className="text-blue">
                      {title2}
                    </strong>
                </h1>
            </div>      
        </div>
    )
}
