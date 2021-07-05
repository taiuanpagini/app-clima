import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect width="100" height="100" fill="url(#pattern0)"/>
    <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlink:href="#image0" transform="scale(0.01)"/>
    </pattern>
    <image id="image0" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAC2UlEQVR4nO3bO08UARRA4TtGkd5CxM5HbDRGsdBSKzH4AkvQxtjY+QILY/wR/gw1JhaS+Co0sdRKowmNYEIMEQsxgnosZoBlmX2MO+uiOV9CQrI757Iz2Z2luBGSJEmSJEnSfwo4DkwDn4CTbegPATPZz6D9+sN6gVmWzQI9Jfa3tLnf85f7X4AtZfWrhyXAA1a7U2L/Xrv62Yy7HejfB5KyZlQOu5EzbNGlEvpX29y/0sH+9Vb71cMuAL/qDPwJDLfQP5s12tUf6XD/F3D+T/uVg9YBt3Iuxivgdc7QaxR4e5J+TI3l9F+X2B9dQ/2bwLpm+9XD9gAvWO0zsB3Yycob2KKnwK4m+ruAZznHz2btnaQ3xWpPCvSfdrC/o8b5eQ7sbuYCdJOe6HPAY/Lfgt+B/opjjgPzOc/7CYwDw8C2rN2d/T6SPZbXnwcGKvongIUa/Yc1+sNrqD9A7fPziPSjehvQXXkhjgETOQdV+wqcyLmQg8BcE8c3MgeczukPAd/a2D9TYn/V/x3AKdJz18gE0B/AZBNPfgPsrfPu6gPe/ekryY7d38H+AeB9i/2+Ov19wNsmOpONLsgH4DLQVWtYxdCNpDe4jwVeyBTpjXRjk/2xNdgfbbLfRfrVvt75nkxI7wm3I2JzRMxExGREvIyIxxExniTJj0bDqgZviIj+iDgcEQcjYmtEbMoenomIqaz/JCIeJkmysIb7hyKit+T++og4GhFHsv7i3z8dEReLtCRJkiRJkiRJkiRJUh24H9LRfvUw90OK9d0PaTDD/ZACffdDCgxzP6S1vvshFX33Q3A/xP0Q3A9ZOt79kOW++yEl9d0PybgfspL7IQ367odIkiRJkiRJkiRJkvSvwv2Qjvarh7kfUqzvfkiDGe6HFOi7H1JgmPshrfXdD6noux+C+yHuh+B+yNLx7ocs990PKanvfkjG/ZCV3A9p0Hc/RJIkSZIkSarhNxcgAIZc0henAAAAAElFTkSuQmCC"/>
    </defs>
  </svg>
`;

export default () => <SvgXml xml={xml} />;