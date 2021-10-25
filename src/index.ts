import {useEffect} from 'react'

const useThemedBrowserBar = (color: string): null => {
    //const [element, setElement] = useState<HTMLMetaElement | null>(null)
    useEffect(() => {
        if (color) {
            const head = document.getElementsByTagName("head")?.item(0)
            if (head) {
                const metaElements = head.getElementsByTagName("meta")
                for (let i = 0; metaElements && i < metaElements.length; i++) {
                    if (metaElements[i].name === 'theme-color') {
                        metaElements[i].content = color
                        //setElement(metaElements[i])
                        return undefined
                    }
                }
                
                const themeElement = document.createElement("meta")
                themeElement.name = 'theme-color'
                themeElement.content = color
                head.appendChild(themeElement)
                //setElement(themeElement)
            } else {
                console.log("unable to locate document head")
            }
        } else {
            console.warn("no color provided to useThemedBrowserBar")
        }
        return undefined
    }, [color])

    return null
}

export { useThemedBrowserBar }