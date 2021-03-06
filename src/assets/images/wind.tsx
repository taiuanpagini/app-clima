import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect width="100" height="100" fill="url(#pattern0)"/>
    <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlink:href="#image0" transform="scale(0.01)"/>
    </pattern>
    <image id="image0" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAGS0lEQVR4nO2dW6hUVRjH/6vjtTRvXcgLlNoNkTS1MiorfUhL0cyiyLcyCyTEoijNbkRPFZL5UppUptGboNnNWyFhggkpUabH21HLtCBvnTO/HtaI45o945nZe2bNzF6/t33Y863/Wt9Zt2+vixQIBAKBQCAQCAQC1cVUIxGgo6SxksZLGiFpkKSekpokHZW0U9KPkr6UtMYY8181dKUOoAcwD/iD9nMYeBbo4lt/QwFMAw6W4AiXXcBk3/moe4Am4M0Yjsglk7V1ge981SVZZ6woULhHgPeA+4D+QBfgIuA6YBLwQfadKD4KTikDYEFEYZ4AXgK6t+P33YHXgH8j7MyvRh4aBmBKRCHuAoaWYWsYsMex1QZMrIT2hgT4xSnA3UD/GPb6As2OzWagc5K6GxLAcO7Q9iQwLAG7NwLHHac8nYTmdqQ9AJgJLAa2AvuzWk5h+7otwMfZd66qhqaSAB7H9hfHgYcTtPuq45AW7EQzcYALgIeA9dkmsr1kgA3Z39bO4AM7akq0ScFOLv9yCmB8kmlk0xkH/FSCEwrxM3BX0vpqCuyQOJe3E7TdFXg3+1+eFBlgIY3a3wFTnQx/n5DdPsCmIoW6EXgGuAO4Ajt36gRcDtwGzMX2JYXYBPRJQmtNAQx2MtqSgM1Lge0RhdgKfAgMKsHW1cByomvZNuCSuHprCqCXk8kTMe11Br6LKLwdwKgYdkdnbbhspJGaL+BCJ4OnY9pbFFFoa4BuCWjtDayLsL8gru2aARjiZK7sJgsYQ37T8gXQKUG9nYHVThoZ4O6k0vAK8KDbBMSw5XbCO4AeSerNptMbGzrKZSu1NE8pF+AzJ2NvxbD1d46dNmB0klqdtEaRP8F8oFLpVQXsEPOEk6mxMezNzbHzcpJaC6S33NG+odJpVhTst5BcdgNNMW1eCwxOSuN50hrq1JIMMYKuXgHuJ78DftK3rlIhf9Q107emksHOjt2manPc2uED7Gw/lyW+NZUE8ESEM04RY9LmE+B2Jy9bfGtqF8BIYBX5ZIBHfOsrF+zHtlwO+taUB9AB6AfcAjyH/Z4QFQvKALN9640DdqKYy8lyjEwgf2JTbY4BUypQRlWFfIeUHosD9lW//M/hG0qIuNYywEAnb4cLvVtsGk8FtJ0PJK2VdKcxZqwxZqcHDZVgiPO8t9CLHYoYmSFpoaRKfcBvlXRI0gFJu2QXWq82xhyoUHo+cRd8bPOiImAh/0PYDN+aUgtwq+OMNqCvb12pBfutJZevfGtKLcCjEaPHe33rSiXANcCfjjM2AlXZtRbIAbvdYrfjjFMksLw2UCLYlfu/RjRVz/vWliqw64JnkR+lBvg0NFVVIuuIaUSvxwIbvQ4bWCsB0BEboR4BTAc+ofgO4/cpcXlRwWoETJANnVwZNyMp5B9Js40xi0v9YTGH7JPUL46qFJKRtEzSC8aYggHEYhQLLvqI9tYrRyWtkLTAGLMjjqFiNWS8KhvtrVeOSTqis8eBrJe0zhgTa71xIBAIBAKBQCAQCAQCgVqkkaK9rZIOS2rR2YV3q4wx+72qKpE0RHvXS3rFGLPWt5D2UGtreyvBGEnfYreVVWVfYRyKOWSGbNVvFMZI2gJM9S0kFWA3APUFbsIexLyOwkcuzfGtN5VgjwhcGeGQDDDdt77UAjxG/tmNp4GbfWtLLdidsK5TtlCH26wbBmByRL/ylG9dqQZY6jhkT6glHgEui2i6xvnWdYb6P7upRIwxhyWtdP5cM3s2UueQLJ87zyO9qIggrQ7Z7jzXfEiloSHhQzWTJK01xN0e0OZFRQRpdUhv5/moFxURpNUh7l6/372oiCCtDnFvV/jBi4p6g8pcf9GT/Osv7kkyjYaEsxfEnCDZC2Jed5xRsQtiGgair1AanoDdkeTvkp2VhOaGh/xLxpqBATHsRV0ytjvpJrFhwYbKXZqBG8qwNRzY69hqI5w7UhrAOxFOOQnMp30XVV4MvEF+dBdgXjXy0FBgN+UviyhMsCOlRcBE7BV3XYFuwPXZ2rWE/NHUGZYSTlYoDypz2XFwRlyw58C3xHDGTmCS73w0FNg7DV8EDpXgiIPAHOpkNFWXVRfoIGmsbAhkhKSBknpJapINFP4mabOkNZK+Nsa0epIaCAQCgUAgEAgEAjXP/0sUsY0UKOUcAAAAAElFTkSuQmCC"/>
    </defs>
  </svg>
`;

export default () => <SvgXml xml={xml} />;