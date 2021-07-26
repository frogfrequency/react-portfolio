import "./PageTitle.css"

const PageTitle = ({colorScheme, title, subHeader}) => {
    let shadowSizeString = '-5px 5px 20px '
    let shadowColor = 'rgba(0, 0, 0, 0.75)';
    let textShadowString = shadowSizeString + shadowColor
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
