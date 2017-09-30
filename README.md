# Mini SASS Grid
A simple boilerplate for starting SASS projects which need flexbox based responsive grid system.

![Mini SASS Grid Preview](https://res.cloudinary.com/sivadass/image/upload/v1506757990/mini-sass-grid.gif)

## Usage

First include the file **mini-sass-grid.min.css** to header
```
<link rel="stylesheet" href="mini-sass-grid.min.css">
```

or include the **_grid.scss** partial to your sass project
```
@import "_grid";
```

And markup your html elements like below:

```
<!-- Two Column Layout -->
<div class="row">
    <div class="col-6">
        Column 6
    </div>
    <div class="col-6">
        Column 6
    </div>
</div>

<!-- Three Column Layout -->
<div class="row">
    <div class="col-4">
        Column 4
    </div>
    <div class="col-4">
        Column 4
    </div>
    <div class="col-4">
        Column 4
    </div>
</div>

<!-- 3:9 Column Layout -->
<div class="row">
    <div class="col-3">
        Column 3
    </div>
    <div class="col-9">
        Column 9
    </div>
</div>
```


## Live Demo 
[https://sivadass.github.io/mini-sass-grid/](https://sivadass.github.io/mini-sass-grid/)