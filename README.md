# Test Zapping:

## General comments

- The project took around 7 hours of coding
- But before that, it took me about 3 to 4 hours of reading about HLS, as I had no previous experience in such component and technology.

### I read the following documentation

## Library:
- https://www.npmjs.com/package/hls.js?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library
- https://videojs.com/

## HTTP Live Streaming:

- https://support.google.com/admanager/answer/7245661?hl=en
- https://developer.apple.com/documentation/http_live_streaming/example_playlists_for_http_live_streaming/live_playlist_sliding_window_construction
- https://datatracker.ietf.org/doc/html/draft-pantos-hls-rfc8216bis

## HLS Documents

- https://hls-js.netlify.app/api-docs/
- https://github.com/video-dev/hls.js/blob/master/docs/API.md

## Buffer measurement 

- https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/buffering_seeking_time_ranges

### Things to be improved

- HTML code redundancy -> It would be necessary to add an express-handlebars or structure for a Layout to include all the libraries used and not to repeat code.
- Authorization handling structures
- HLS microservice provision
- The order of the code in the HTML section is not the best, because something happened with my VISUAL STUDIO extension, and it stopped working. 


### Final consideration

- This work has been done with priority in achieving an object in a limited time. But that does not mean that I have not tried to get all the points in the best possible way in a limited time, and take care of the details.

### Run Project

- .env was left for testing purposes

- Do you have the "Make" command? NOT: 
    - 1) Install https://chocolatey.org/install through the console 
        - command: Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
    - 2) https://community.chocolatey.org/packages/make#individual
        - command: choco install make

- Do you have the "Make" command? YES:
    - 1) located in the project address we will write in the console: "Make network"
        - This going to do: "docker network create -d bridge postgres-network"
    - 1) located in the project address we will write in the console: "Make run"
        - This will cause a docker image to be generated.
        - when we see that the console says "zapping_api_db | CREATE DATABASE", we can type the next step.
    - 2) and while the above command is running, open a new console and type: "Make enter-db"
        - located in the Postgres DB, we going to write:
        - CREATE TABLE "user" (id SERIAL, name VARCHAR(100), mail VARCHAR(100), password VARCHAR(100));

- We update the page where the project is being uploaded, the APP is now ready 

## Total Commands:

- 1.- git clone https://github.com/FelipeGaticaL/test-zapping.git
- 2- console 1: make network
- 3.- Console 1: make run (running) -> we wait for "zapping_api_db | CREATE DATABASE" in console.
- 4.- Console 2: make enter-db
- 5.- Console 2: CREATE TABLE "user" (id SERIAL, name VARCHAR(100), mail VARCHAR(100), password VARCHAR(100));


## reference images

### CONSOLE 1
![Image text](https://github.com/FelipeGaticaL/test-zapping/blob/main/readme_image/comando1.PNG)

### CONSOLE 2
![Image text](https://github.com/FelipeGaticaL/test-zapping/blob/main/readme_image/comando2.PNG)



## https://github.com/FelipeGaticaL/test-zapping

