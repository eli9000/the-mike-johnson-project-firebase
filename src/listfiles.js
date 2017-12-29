const Storage = require('@google-cloud/storage');
// const { storage } = require('./firebase');

const gcs = new Storage();

const bucketName = 'the-mike-johnson-project.appspot.com'

gcs
  .bucket(bucketName)
  .getFiles()
  .then(results => {
    const files = results[0];
    const promises = [];

    files.forEach(file => {
      // console.log(Object.keys(file));
      // console.log(file.metadata.metadata);
      // promises.push(new Promise(() => store.getDownloadURL(file)));
      console.log("https://firebasestorage.googleapis.com/v0/b/" + bucketName + "/o/" + encodeURIComponent(file.name) + "?alt=media&token=" + file.metadata.metadata.firebaseStorageDownloadTokens);
      // console.log("https://firebasestorage.googleapis.com/v0/b/" + bucketName + "/o/" + file.name + "?alt=media&token=" + file.metadata.metadata.firebaseStorageDownloadTokens);
    });
    // return Promise.all(promises)
  })
  // .then((urls) => console.log(urls))
  .catch(err => {
    console.log('ERROR:', err);
  });


// https://firebasestorage.googleapis.com/v0/b/the-mike-johnson-project.appspot.com/o/images%2F?alt=media&token=c852f42f-b079-4286-b9de-86b06724f27a
// https://firebasestorage.googleapis.com/v0/b/the-mike-johnson-project.appspot.com/o/images/lhdc.jpg?alt=media&token=3f66c0f0-e66d-489e-bdfd-5dad877425c9

// https://firebasestorage.googleapis.com/v0/b/the-mike-johnson-project.appspot.com/o/images/axeman.jpg?alt=media&token=9cae1108-6750-4b36-954a-ddcfa67f6ead
// https://firebasestorage.googleapis.com/v0/b/the-mike-johnson-project.appspot.com/o/images%2Flhdc.jpg?alt=media&token=3f66c0f0-e66d-489e-bdfd-5dad877425c9