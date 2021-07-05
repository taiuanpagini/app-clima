import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect width="100" height="100" fill="url(#pattern0)"/>
    <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlink:href="#image0" transform="scale(0.01)"/>
    </pattern>
    <image id="image0" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAE5klEQVR4nO2dz48URRSAXy3MIgeUoKJeiaDx4IaoJIIHrkgChwVcdAVMFIxw8+KPgyEkJMbEf4HEmHjhwE1ucMQL68GE2RgXE3VZTyQrGYIz7Oeha6Sprd7pmenuqu59XzLZnZnufq/qm6rq3y3SAIAZYCZ0HoqIAKeAnn2dCp3PusbKeMgjVoAzofNal3hkqJRQ2DGj55HR5yFwMnSe6wLgnQEy0lJOhM630VgZ3Rwy+vRUSkkAs56W4RtD3M96wGzo/BsFcMzTMlaAjz1CPsiQ8n7ocjSCDBn/D9quDfuZb9DXljIuwFGPjB6pNSifEPv5TMa8KmUUgCMZFXrCmc4rxH7nWwnoAe9VW5qak1eGnTZTiP1epYzDGjK8g/IgIXYa3zjUA94ttzQ1B5gG/vVUXGa/n0eInS5rPFIpPoDDngrrMmC3el4hdlrfQN8FDhVbmgYAzHsq6liO+XILsdP7uq92MaVoEMDPjoyjOecbSoidx+2+5sbLvoEAe4A5oD1MFzKKEDvfIdsqbwJvjJZ18ZjQCYyLK8EYU+syTYROQHkcFRIZKiQyVEhkqJDIUCGRoUIiQ4VEhgqJDBUSGSokMlRIZKiQyFAhkaFCIkOFRIYKiQwVEhkqJDJUSGQ0Qcjvqf9vB8tCSQAOAH/a14HQ+SiKoiiKoiiKoiiKoiiKoiijArSAWl9b2Bjsded3geW8l1IrJQIspa6KXgydz7jUvpnrZdFKqaiQyFAhkaFCIkOFRIYKiQwVEhkqJDIKFwJMAnuBZ4tediwALwCvA3H/oIGNwA27G+MeMF1BzJHuKDdGvGmgY8NdjVoK8KZTP13gSMkxKxOC/57Cr5YZcyxsU75fpRRgIRVrocQ4Phkd4JmyYhaCbdK+e+OWIoUKzn7PkNGlgi65EMi+Q3Xt7iK9RlmOh85tKJogpTEy+tRZSuNk9KmjlMbK6EP2oFjqKvEo1CnXscgo6ANgZ+jc+gC7PC2jUhkbqwpkjLlMst32QyrupIhMiciveZcDbBWR/SKyW0ReFpHn7V8jIvMisiQibRG5KSLXjTF3h0hzSkRaqfc9ETlujLk8xDLqhW0pD+yv7w9gW455ngBOAtfI95TPdL9/neS5uZtzxHna5tRvvc3qprIAdpIMnGvKINlR+SmPn+ozKkt2WZMDYm6zuUXTlUYBsI/VD3kpgjawL3T5agNggC/J7pruAVeA01baDmAzSbe2A3jLfnfFTuujC3yBnn66NsAG4FJGJS4AHwKbhljeJjvPQsYyLwEbyixTbQEmgO89ldYBzgKtwUvJXHYLOMej4xhpviPmYxqhAC56KmsemCowxivAL544F4qK0QiAgyRPf04zR7LNUXSsrSTPnUqzArxddKxaYito0amgNrC9xJjbWb0G9xfwVFkxawPwjVMxHWBXBXFfYvXRza/Ljhs1wHOeSvmswvifO7Hvl9kyowc471TILaCy/Wska1+3nBy+qip+VJBsAN52KuOTAHmcdXL4jfW4wQi85lTEMrAlQB5P2thpdledR5+QG0T7nfc/GmP+qToJY8yyiFx1PnZzq4yQQvY4738KkoU/drBn44YU8qLz/kaQLPyxS1/tzsIAsyLyrYg09uTomnBHRM4ZoCMiA4+mKZWwOCEipZ8xruSmNSEiH4nI36EzUeSOiJz5D4jwJAB9WWSxAAAAAElFTkSuQmCC"/>
    </defs>
  </svg>
`;

export default () => <SvgXml xml={xml} />;