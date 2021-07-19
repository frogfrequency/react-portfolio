import "./Colorpreview.css"

const ColorPreview = ({colorScheme}) => {

    return (
        <div
            className='color-preview'
        >
            <div className='color-box' style={{ backgroundColor: colorScheme.color1 }}></div>
            <div className='color-box' style={{ backgroundColor: colorScheme.color2 }}></div>
            <div className='color-box' style={{ backgroundColor: colorScheme.color3 }}></div>
            <div className='color-box' style={{ backgroundColor: colorScheme.color4 }}></div>

        </div>
    )
}

export default ColorPreview
