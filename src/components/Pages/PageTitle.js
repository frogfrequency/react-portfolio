import "./PageTitle.css"

const PageTitle = ({colorScheme, title, subHeader}) => {
    
    return (
        <div>
            <h3
                className="main-title"
                style={{borderColor:colorScheme.color2}}
            >
                {title}
            </h3>

            <h4
                className="sub-header"
                style={{color: colorScheme.color3}}
            >
               - {subHeader} -
            </h4>
        </div>
    )
}

export default PageTitle
