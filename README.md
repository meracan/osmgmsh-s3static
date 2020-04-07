# osmgmsh-s3static
Store and publish osmgmsh mbtiles on a static s3 site. [Example](https://polar-public.s3.amazonaws.com/index.html)

## Installation
[AWS cli](https://aws.amazon.com/cli/) and [NodeJS](https://nodejs.org/en/) needs to be installed.
Node 6 must be installed via nvm for [mapbox-tile-copy](https://github.com/mapbox/mapbox-tile-copy). It does not work with latest NodeJS.
```
nvm install 6
nvm use 6
npm init
npm install @mapbox/mapbox-tile-copy
```
### Credentials
Credentials needs to be stored in `~/.aws/credentials` using different profiles
```
[default]
aws_access_key_id=xxx
aws_secret_access_key=xxx

[project1]
aws_access_key_id=xxx
aws_secret_access_key=xxx
```

### Mapbox ToKen
The site use [mapboxgl](https://docs.mapbox.com/mapbox-gl-js/api/) to display the basemap and mesh.
A token needs to be changed in `s3/mapbox.js`
```
mapboxgl.accessToken = 'TOKEN';
```
The style, initial location and zoom level can be changed in the `s3/mapbox.js`


### Usage
#### Transfer static html/javascript to s3.
```bash
AWS_PROFILE=project1 aws s3 cp ./s3 s3://polar-public/ --recursive
```

#### Transfer mbtiles to s3. 
It is recommended to create mbtiles from zoom 0 to 10/12. Uploading mesh size of 150k nodes takes around 1h30min.
```bash
AWS_PROFILE=project1 mapbox-tile-copy ./mesh.mbtiles s3://bucketname/mbtiles/mesh/{z}/{x}/{y}
```
Please note the `./mesh.mbtiles` is the file path of the mbtiles. `bucketname` needs to be changed to the AWS bucket name.

