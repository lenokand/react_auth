import SeoSubmenu from './SeoSubmenu'

function General() {
    const data = [
        { 
            title: 'Ваши проекты:',
            data:'data from backend'
    
        },
        { 
            title: 'Динамика позиций за текущий месяц:',
            data:'data from backend'
    
        },
    ]
return(
    <div className="general">
        <div className="wrapper">
            <div className="title">
                SEO - Общее
            </div>
            
            <div className="general-block">

                     {data.map((item, index )=>
                         (   <div className="general-progects">
                                <div className="general-title">
                                    {item.title}
                                </div> 

                                <div className="general-body">
                                {item.data}
                                </div> 
      
                            </div>
                            ))}

               
               
            </div>
        </div>
        
        <SeoSubmenu/>
        
       
        
    </div>
)
}

export default General;