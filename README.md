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

## Configurations

- ENV
SECRET_KEY=s3cretk3y
POSTGRES_HOST=db #db -> para Docker //localhost
POSTGRES_USER=zapping-user
POSTGRES_PASSWORD=password
POSTGRES_DB=zapping-db
APP_CONTAINER_NAME=zapping_api_app
DB_CONTAINER_NAME=zapping_api_db
NODE_ENV=development
SECRET=SECRET
PORT=3000

- TABLE -> CREATE TABLE "user" (id SERIAL, name VARCHAR(100), mail VARCHAR(100), password VARCHAR(100));

## https://github.com/FelipeGaticaL/test-zapping