## Install

```
<link rel="stylesheet" href="https://unpkg.com/css-skeletons@latest/css/css-skeletons.min.css">
```

## Custom Variables

| Custom Variable | Description                                                             |   Default   |
| :-------------- | :---------------------------------------------------------------------- | :---------: |
| --lines         | Count of the lines.                                                     |      1      |
| --l-h           | (line-height) Height of the lines.                                      |    20px     |
| --l-gap         | (line-gap) Gap between the lines.                                       |    10px     |
| --g-gap         | (group-gap) Gap between the groups. E.g. circle and other lines.        |    15px     |
| --c-w           | (container-width) Width of the container.                               |    300px    |
| --c-p           | (container-padding) Padding of the container.                           |    10px     |
| --bg            | Background of the shapes.                                               |   #e2e1eb   |
| --c-bg          | Background of the container.                                            | transparent |
| --shine         | Color of the shine animation.                                           |   #eaeaf1   |
| --t             | Duration of the shine animation.                                        |     2s      |
| --c-s           | (circle-size) Size of the circles.                                      |    40px     |
| --rect-h        | (rectangle-height) Height of the rectangle at the top.                  |    80px     |
| --chart-h       | (chart-height) Height of the chart.                                     |    200px    |
| --chart-btm     | (chart-bottom) Height of the bottom area of the ".skeleton-chart-area". |    40px     |
| --cols          | Columns count of the ".skeleton-chart-columns". Can be up to 10.        |      5      |
| --col-w         | Width of the columns.                                                   |    25px     |
| --col-gap       | Gap between the columns.                                                |    25px     |
| --card-h        | Height of the cards.                                                    |    150px    |

## Classes

| Class                        | Required Classes/Variables  |              Valid Variables               |
| :--------------------------- | :-------------------------: | :----------------------------------------: |
| VALID FOR ALL                |              -              |  --bg, --c-bg, --c-w, --c-p, --shine, --t  |
| .skeleton-line               |              -              |          --l-h, --lines, --l-gap           |
| .skeleton-circle             |              -              |                   --c-s                    |
| .skeleton-circle-line        |              -              |          --c-s, --g-gap, --l-gap           |
| .skeleton-circle--multi-line |              -              |  --c-s, --l-h, --lines, --l-gap, --g-gap   |
| .adapt-to-circle             | .skeleton-circle-multi-line |  --c-s, --l-h, --lines, --l-gap, --g-gap   |
| .skeleton-rect               |              -              | --rect-h, --l-h, --lines, --l-gap, --g-gap |
| .skeleton-chart-columns      |              -              |   --cols, --col-w, --col-gap, --chart-h    |
| .skeleton-chart-area         |              -              |           --chart-btm, --chart-h           |
| .skeleton-card-1             |              -              |          --card-h, --g-gap, --c-s          |
