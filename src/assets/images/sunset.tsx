import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect width="100" height="100" fill="url(#pattern0)"/>
    <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlink:href="#image0" transform="scale(0.01)"/>
    </pattern>
    <image id="image0" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAE1klEQVR4nO2dQY8URRSAXy3MIgeVoCBeiaDx4IaIJogHDh5EYzwsIKsoa6JigJsXhYMxJibGxL9AYox64MBNDkY54gU8mLCrcT2oy3oiWckQnF0+D10jvbXVPT073V3Vve9LJpuZna736n1T3dUzPTUiDQc4AtwAFoHDofNZ9wAL3GU+dD6jYkInMCoA6fvGmEb3aSx0AspKVEhkqJDIUCGRoUIiQ4VEhgqJDBUSGSokMlRIZKiQyFAhkaFCIkOFRIYKiQwVEhkqJDJUSGSokMhQIZERjRBgB/AN8B3wXA3xXgZ+AX4Cnq46XuMAvkpdztMreo0VDgW3OWxj9Lk6WvYtBPjeqW0POFJgu6GE2Avres5mM+X0okUAz3sK1QOODtiusBDgaEaMl8rtTUsAJoF/nYItAcdytikkJGNkLAGvVtOblgAcyijc6xnPHyhEZYxIjpQ3PM/NFQK8ktHWa/X0piXkSDnuPC9TCP5jhspYK6yengIsp6VkCcmRkXk8UgqAf/+/DEzb/68SAkzZ4quMKsiQcgd41xUCvGmFuTK8kwJljQDHPK96t/C+x3RkVAX+GVMe3pmZUiJWijtSfCyrjJogmUHlSVkxE1NqAJj2HC8gOdifCJ3fusQjRWWExkpZsrfp0Pko8v8xJfdtekVRFEVRFEVRFEVRFEVRFCV2gA7Q6MUvWwO6bm9coOv2xgXour1KhaiQyFAhkaFCIkOFRIYKiQwVEhkqJDJKFwKMA88A28puOxaAh4G9QNwvaGAjcNm+jXETmKwh5gpqiDcJdG24i1FLAfY59ekBhyqOWZsQ/F/VfqLKmCNhh/KtOqUAc6lYcxXG8cnoAg9WFbMU7JD2LfBSiRTgIPCnvR2sKIZPRo8adsmlQPYiMo1bWySnL1OhcxuKNkhpjYw+TZbSOhl9miiltTL6kH1QrHRKvBaalOtIZHT0NrArdG59gN2ekVGrjI11BTLGnCc5b/s6FXdcRCZE5Nei7QBbROSAiOwRkcdEZIf9a0RkVkQWRGRGRK6IyCVjzI0h0pwQkU7q/pKITBljzg/RRrOwI+W2ffX9AWwtsM09wHHgB4otq5He718i+er05gJxHrA59Udvu3ZTWQC7SA6cuTJI3qh8j5WX+qyVBdvW+ICYW21u0exKowDYD8yWIMJlBtgfun+NATDAWbJ3TTeBC8A7VtpOYDPJbm0n8Kz93wX7XB894Ax6+Wk+wAbgXEYR54C3gE1DtLfJbjOX0eY5YEOVfWoswBjwpadoXeAU0BncSmbbHeA0dz/HSPMFMX+mEQrgE0+xZoGJEmM8DvzsifNxWTFaAfAiydJKaa6SnHOUHWsLcMWJdQd4oexYjcQWaN4p0AywvcKY21k9g/sLuL+qmI0B+MwpTBfYXUPcR1n96eanVceNGuAhT1HerzH+B07sW1WOzOgBPnIKcg2o7f01ktnXNSeHD+uKHxUkJ4C/O8U4GSCPU04Ov7EeTxiBJ51CLAL3BsjjPhs7zZ668+gT8oTogHP/W2PMP3UnYYxZFJGLzsNubrURUoj7U3U/BsnCH/upIFlIWCGPOPcvB8nCH7vyaXcWhuSXAz4XkdZeHN0QrovIaQN0RWTgp2lKLcyPiUjlV4wrhemMicjbIvJ36EwUuS4iJ/4D2YEhlk4LLNUAAAAASUVORK5CYII="/>
    </defs>
  </svg>
`;

export default () => <SvgXml xml={xml} />;