import ColorPreview from "../../ColorPreview/ColorPreview"

const ColorSchemePage = ({ colorScheme, activePage }) => {
    return (
        <div className="page">
            {activePage === 'ColorSchemePage' ? (
                <>
                    hi i am the ColorSchemePage
                    <ColorPreview colorScheme={colorScheme} />
                    <ColorPreview colorScheme={colorScheme} />
                    <ColorPreview colorScheme={colorScheme} />
                    <ColorPreview colorScheme={colorScheme} />
                    <ColorPreview colorScheme={colorScheme} />
                </>
            ) : (
                null
            )
            }
        </div>
    )
}

export default ColorSchemePage
