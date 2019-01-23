
here's an image of an Apollo guidance computer:
![agc_user_interface](https://user-images.githubusercontent.com/399657/51630193-83f39b80-1f17-11e9-892e-9ecc1d072282.jpg)

it's **500x391px**.

this is a ratio of `1:0.782`

that is *almost* `4:3`, which is one of the most-commonly used aspect ratios ever.

This is a nodejs CLI script that chops-off a bit of the image, so that it fit's a nearby aspect ratio.

```
aspect-crop ./apolloComputer.jpg
```

this creates a file, `./apolloComputer-500.jpg`
that is **500x375px**.

it's using [sharp](https://sharp.pixelplumbing.com) for image-processing, and [fit-aspect-ratio](https://github.com/spencermountain/fit-aspect-ratio/) for the maths

work-in-progress

MIT
