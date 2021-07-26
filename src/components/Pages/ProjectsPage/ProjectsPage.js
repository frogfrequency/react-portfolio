import "../../Pages/Page.css";
import PageTitle from "../PageTitle";


const ProjectsPage = ({activePage, colorScheme, title, subHeader}) => {


    
    return (
        <div className='page'>
            { activePage === 'ProjectsPage' ? (
                    <>
                        <PageTitle

                        />
                        hi there i am the about ProjectsPage
                        <br></br>
                        <br></br><br></br>
                        Project           
                        <br></br>            
                        Project           
                        <br></br>            
                        Project    
                    </>
                ) : (
                        null
                )
            }    
        </div>
    )
}

export default ProjectsPage