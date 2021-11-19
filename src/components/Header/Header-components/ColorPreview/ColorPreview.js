import "./ColorPreview.css"
import"../../Header.css"


const ColorPreview = ({colorScheme}) => {

    return (
        <div
            className='header-element'
        >
            <div className='color-box' style={{ backgroundColor: colorScheme.color1 }}>{colorScheme.schemeId}</div>
            <div className='color-box' style={{ backgroundColor: colorScheme.color2 }}></div>
            <div className='color-box' style={{ backgroundColor: colorScheme.color3 }}></div>
            <div className='color-box' style={{ backgroundColor: colorScheme.color4 }}></div>
        </div>
    )
}

export default ColorPreview
