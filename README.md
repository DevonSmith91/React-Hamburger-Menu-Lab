In this lab we will be building out an animated hamburger menu with only CSS. 
This lab comes with a little bit of starter code that gives a generic set of links for navigation and a little bit of styling to make the page layout look good. 
When you run this starter code you can see that the navigation is in the middle of the page and the links can't be clicked on due to the current css. 
We will be adding onto the css more to style that navigation bar and making it animated. 
We will do so by targeting the prebuilt elements and using the class names or Ids along with minor tunneling through elements with CSS selectors.

Step One:

We will start out by targeting our .menu-container and giving it these properties: 

	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;

We are telling it the z-index to be on top of any previous CSS that is happening, and we are giving it the position of fixed to keep the container on the same spot of the page even when we scroll. The top and left properties are to explicitly say that the menu should live in the top left corner, these properties can change to be top, left, right, or bottom. But always need to be combined with the position property to work.

Step Two:

We will target our .toggler and give it the properties of :

	position: absolute;
	top: .05rem;
	left: .05rem;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	opacity: 0;
	z-index: 3;
	cursor: pointer;

Again here we are setting our position and telling it where to live with the top left properties as well as defining the height and width of our overall button. We set the border-radius to be 50% which turns our div into a circle. We set the opacity to 0 so that our checkbox is hidden but we set the cursor to be a pointer so that it will register when we hover over it. Our z-index gets set to 3 so that it lives above everything that we've established so far.

It is also important to note that .toggler is a class on a checkbox. We can are using this because we can see whether or not the checkbox is checked in css and render things differently based on if they are checked.

Step Three:

We now want to target our .hamburger and use the properties:

	position: absolute;
	top: 0.5rem;
	left: 0.5rem;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	background-color: #111;
	z-index: 2;
	display: flex;
	justify-content: center;
	align-items: center;

This is setting our position, top, left, width, height, and border-radius properties to be the same as our .toggler from the last step. We are setting the z-index to be 2 so it will live behind the .toggler so the user will still be able to click on the toggler to trigger it's checked functionality. We are also setting the background color to be black which will give our circle some color. The last thing we're going to do is setting our display to flex, and setting justify-content, and align-items to be centered. This will make everything that lives inside of this div be centered both vertically and horizontally.

Step Four:

Here we're going to do a couple of things. We are going to target a div that exists inside of our .hamburger and we will do that by writing: 

	.hamburger>div

and we will give this the properties of:

	position: absolute;
	width: 60%;
	height: 3px;
	border-radius: 1.5px;
	background-color: #fff44f;
	transition: .4s;

Here we're setting our poition to absolute again, and saying that the width should be 60% of the parent container, we're also going to set a height of 3px, and a border radius of 1.5px. this will just slightly curve the corners of our 3px line that we are making, and we are going to set the color to be a nice golden yellow color. 

When you look at this on your page you should see a nicely styled line that sits in the middle of our black circle in the top left corner.

We are also setting the transition property to this and telling it that if anything tries to run a transform on here, let it take .4s to run through it.

Step Five:

We are now going to target the same div, but call the :before and :after selectors. These selectors look at the content of the div, and create a new element that lives either before, or after the existing content. This is what it will look like:

	.hamburger>div:before, .hamburger>div:after

And writing this out on one line, with a ',' between them will allow you to put css on both of these elements with one block of code.

The properties we want to add are:

	content: "";
	position: absolute;
	width: 100%;
	height: 3px;
	border-radius: 1.5px;
	background-color: #fff44f;
	transition: .4s;

We start off by telling our code that the content of these new elements are an empty string, we are then giving it the same styling properties as our .hamburger>div element. 

We then want to target the :before selector and add the property of top: -10px; on it. This is what it would look like:

.hamburger>div:before {
	top: -10px;
}

we will then do the same thing for our :after selector but move it 10px farther away from the top with the property top: 10px. This is what that would look like:

.hamburger>div:after {
	top: 10px;
}

Step Six:

Here we can start working with our animations and using our .toggler check box to determine what type of CSS we want to be using. We can say:

	.toggler:checked + .hamburger>div

This selector is looking at if the input with the class name of toggler is checked, and if it is we're going to have some specific CSS written onto our .hamburger>div. The CSS that we are going to give to this specific situation is:

	transform: rotate(135deg)

Because previously when we wrote out our CSS for our .hamburger>div, we put a transition on it of .4s. When this transform is triggered it will utilize this transition property and take .4s to rotate the 135 degrees.

Step Seven:

Here we are going to target the same selector as last time, but we're also going to give a hover property to it. This is what it'll look like:

	.toggler:checked:hover + .hamburger>div

This is saying that if the toggler is checked, and the user hovers over the .toggler (remember that the z-index is set to be above everything still) then it will then add a new css property to the selected item. This is what we will add:

	transform: rotate(225deg)

Step Eight:

We are now going to adjust the CSS for the :before, and :after, that we created inside of our .hamburger>div earlier. We are going to also use our toggler:checked to only apply this CSS if the input has been clicked. This is what that selector will look like:

	.toggler:checked + .hamburger>div:after, .toggler:checked + .hamburger>div:before

And the properties that we will be adding to this will be:

	transform: rotate(90deg);
	top: 0;

What this will do is rotate our top and bottom lines an extra 90 degrees, and put them in the same position on the page which will make it look like one line, and that one line will turn our icon into an "X" in the browser when the user clicks on the icon.

Step Nine:

Here we are going to start working on the menu itself and we will do this by targeting our .menu element. We are going to put the following properties on it.

	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	transition: .6s;

This is going to set our .menu element to be in a fixed position again in the top left corner, but this element we're going to set the height and width to be the full page. We are also going to put a transition on this of .6s so that when we animate it later, it will take .6 seconds to complete the animation.

Step Ten:

Here we are going to target the first div inside of our .menu, and this is what that will look like:

	.menu>div

The properties that we will be adding to it will be:

	position: absolute;
	width: 140vw;
	height: 200vh;
	border-radius: 50%;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	background-color: rgba(0, 0, 0, 0.9);
	transition: .9s;
	display: flex;
	justify-content: center;
	align-items: center;

We are setting our position to be absolute, and we are going to give it a height and width that are larger than the screen. We are also going to give it a border-radius of 50%, This is going to make the sides of this curved, and when it's centered on the screen you won't be able to see the curve. But while the animation runs, you will see a nicely styled shaped element transition onto the page rather than it just being a straight vertical line. Our top and left properties here are moving your entire div 50% of the way down the screen and 50% of the way to the right. We counteract that with putting a transform and adjusting the X and Y axis by -50% and between the three of these we can see that the entire div is being centered nicely on tha page. We are then going to set the background color to be a transparent black to make it clear where our navbar is and to see the difference between the foreground and background. We have a transition of .9s on it for how long it will take to animate on the page. We finally set the display to flex and the justify-content/align-items to be centered to keep our links centered on the page.

Step Eleven:

We are then going to target a div, that is contained within a div, that is contained within .menu. The syntax is similar to the previous step and looks like this:

	.menu>div>div

The property we are going to add is:

	text-align: center;

Step Twelve:

Next we're going to target our .nav-container. this is our unordered list and we want to adjust our list-style property and we will set that to:

	list-style: none;

Step Thirteen:

We then want to target our individual links and we will do that by targeting our .nav-link and putting the following properties on it:

	text-decoration: none;
	margin: .5rem;
	display: inline-block;
	font-size: 2.2rem;
	font-weight: 550;
	text-transform: uppercase;
	color: #fff;
	transition: .3s

Here we are setting the text-decoration to none, which will remove the underline from it being a link. We are going to add a margin around each word and set the display to be an inline-block style element. We will adjust the font with font-size and font-weight, and make the text uppercase with text-transform. We are also going to make the color white, and add a transition property to be .3s for when we add our hover to them.

Step Fourteen:

We are going to target the same element as last time but here we are going to add our :hover property to it, and we will change the color to a nice golden yellow by adding the property:

	color: #fff44f

Step Fifteen:

At this point we are going to add a couple of things to our previous selectors to hide our nav bar. We are going to want to start by going into: 
	
	.menu>div>div 
	
and add the property of:

	opacity: 0

This will hide our link text. Next we want to go to:

	.menu>div

And we are going to change:

	transform: translateX(-50%)

to be:

	transform: translateX(-150%)

Doing this you will see that your transparent black background for your navbar div is no longer on the screen.

We then want to go into our .menu selector and add the property:

	visibility: hidden

Step Sixteen:

Here we need to build out the rest of our functionality to bring everything back onto the page when we click on our toggler. We are going to need to target everything that we just wrote on the previous step, and write some properties to be added to those divs. This is how we will write our selector for the first one:

	.toggler:checked ~ .menu

and we will add the property of:

	visibility: visible

We then want to target the selector:

  .toggler:checked ~ .menu>div

and give it the property of:

	transform: translateX(-50%) translateY(-50%)

and finally we are going to target the selector of:

	.toggler:checked ~ .menu>div>div

and we will give this the property of:

	opacity: 1