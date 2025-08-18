## Note for Tejas

I understand the website is a work in progress, but since it is public facing I couldn't help making a couple of suggestions for improvements. It's intended to be constructive, I'm not just trying to pick holes in your work!

I found a couple of glitches in the routing and traced them to the way React deals with URL hash fragments.

* Clicking the "Get started", "See the full details" and "Our roadmap" buttons results in "Page Not Found" errors.
* After clicking the "Blog" button in the navigation bar, clicking any of the other buttons in the navigation bar does nothing.

Potentially one way to avoid this sort of thing is to use a behavior driven development approach, so as well as fixing the bugs I prototyped a few functions in [Cypress](https://www.cypress.io) that could be used to do E2E testing of the UI.

Hope this helps, but feel free to totally ignore everything ;)
