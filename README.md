<div align="center">
	<h3>crop-aspect</h3>
  <div>
    <img src="https://cloud.githubusercontent.com/assets/399657/23590290/ede73772-01aa-11e7-8915-181ef21027bc.png" />
  </div>
	<a href="https://npmjs.org/package/crop-aspect">
		<img src="https://img.shields.io/npm/v/crop-aspect.svg?style=flat-square" />
	</a>
	<div>crop an image by a nearby aspect-ratio</div>
  <sub>
    by
    <a href="http://spencermounta.in/">Spencer Kelly</a>
  </sub>
</div>

<div align="center">
  <code>npm i crop-aspect</code>
</div>

<p></p>

here's an image of an Apollo guidance computer:

![agc_user_interface](https://user-images.githubusercontent.com/399657/51630193-83f39b80-1f17-11e9-892e-9ecc1d072282.jpg)

#### it's **500x391px**.

this is a ratio of `1:0.782`  *(or `4:2.346`)*

that is *almost* `4:3`, which is one of the most-commonly used aspect ratios ever.

This is a nodejs CLI script that chops-off a bit of the image, so that it fit's a nearby aspect ratio.


```
crop-aspect ./apolloComputer.jpg
```

this creates a file, `./apolloComputer-500.jpg`
that is **500x375px**.

this also works:
```
crop-aspect ./myImg.jpg 16:9
crop-aspect ./myImg.jpg golden
```


[sharp](https://sharp.pixelplumbing.com) is doing all the heavy-lifting. This library is simply placing some opinionated aspect-ratios on top of it.

i mean, davinci thought math-sizes were nicer, so I figure ... well, i don't know.

it's using [fit-aspect-ratio](https://github.com/spencermountain/fit-aspect-ratio/) for the maths

work-in-progress

MIT
