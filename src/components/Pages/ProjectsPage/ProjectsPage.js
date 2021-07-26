import "../../Pages/Page.css";
import PageTitle from "../PageTitle";


const ProjectsPage = ({activePage, colorScheme, title, subHeader}) => {
    return (
        <div className='page'>
            { activePage === 'ProjectsPage' ? (
                    <>
                        <PageTitle
                            colorScheme={colorScheme}
                            title={title}
                            subHeader={subHeader}
                        />
                        
                        <br></br>
                        <br></br><br></br>
                        project        
                        <br></br>            
                        project        
                        <br></br>            
                        project
                    </>
                ) : (
                        null
                )
            }    
        </div>
    )
}

export default ProjectsPage