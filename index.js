import {useEffect, useState} from 'react'

const themeTagId = 'tbb-id'

exports.useThemedBrowserBar = (color) => {
    const [element, setElement] = useState<HTMLMetaElement | null>(null)
    useEffect(() => {
        if (color) {
            const head = document.getElementsByTagName('head')?.item(0)
            if(head) {
                let existingThemeTag = document.getElementById(themeTagId)
                if(existingThemeTag) {
                    head.removeChild(existingThemeTag)
                }
                const meta = document.createElement('meta')
                meta.name = 'theme-color'
                meta.content = colors.primary
                meta.id = themeTagId
                head.appendChild(meta)
                setElement(meta)
            }
        }
    }, [color])

    return element
}