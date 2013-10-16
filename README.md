# Firefox OS App Experiments

This repo contains Firefox OS experiments from members of TechTonik
Labs (formerly known as Santa Barbara Hackerspace/Makerspace).


## How to run these apps in the Firefox OS Simulator

As of October 15, 2013 you should be able to do the following to run
this repo's Firefox OS apps in the Firefox OS Simulator:

1. Download the latest version of Firefox at
<http://nightly.mozilla.org/> (I'm using 27.0a1), then unpack it and
start Firefox (perhaps by running `./firefox-bin`)

2. From Firefox, download the latest stable version of the Firefox OS
Simulator _and_ ADB Helper from
<https://ftp.mozilla.org/pub/mozilla.org/labs/fxos-simulator/>

3. From Firefox, visit `about:app-manager`

4. In the bottom left, click `Add Hosted App`

5. Select a directory containing a Firefox OS app (e.g.,
`sbhx-firefoxos/check-battery`)

6. Click `Start Simulator` (bottom left-ish)

7. Click the version of the simulator you want to start up ("Firefox
1.2" for me)

8. Find a way to start the app. I'm doing this by typing "battery"
into the search bar on the home screen, then clicking "Check Battery".


The app should now be running in the Simulator! Congrats.


## Next Steps(?)

<https://developer.mozilla.org/en-US/docs/Mozilla/Firefox_OS/Application_development>
