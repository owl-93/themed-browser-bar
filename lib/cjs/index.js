"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThemedBrowserBar = void 0;
var react_1 = require("react");
var useThemedBrowserBar = function (color) {
    var _a = (0, react_1.useState)(null), element = _a[0], setElement = _a[1];
    (0, react_1.useEffect)(function () {
        var _a;
        if (color) {
            var head = (_a = document.getElementsByTagName("head")) === null || _a === void 0 ? void 0 : _a.item(0);
            if (head) {
                var metaElements = head.getElementsByTagName("meta");
                for (var i = 0; metaElements && i < metaElements.length; i++) {
                    if (metaElements[i].name === 'theme-color') {
                        metaElements[i].content = color;
                        setElement(metaElements[i]);
                        return undefined;
                    }
                }
                var themeElement = document.createElement("meta");
                themeElement.name = 'theme-color';
                themeElement.content = color;
                head.appendChild(themeElement);
                setElement(themeElement);
            }
            else {
                console.log("unable to locate document head");
            }
        }
        else {
            console.warn("no color provided to useThemedBrowserBar");
        }
        return undefined;
    }, [color]);
    return element;
};
exports.useThemedBrowserBar = useThemedBrowserBar;
