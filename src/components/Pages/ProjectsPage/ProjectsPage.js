import"../../Pages/Page.css"

const ProjectsPage = ({activePage}) => {

    return (
        <div className='page'>
            { activePage === 'ProjectsPage' ? (
                    <>
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