const webpush = require("web-push");
const fs = require('fs');

const VAPID = {
  publicKey:
    "BCIXQbt6YBfQWqVgy_MZDOSKQ0SHil7eeq0ldaFAO7wIPYS2AJTOA50RJkbEmfkgFjeOKJzOHm4cUyOMktB6G_M",
  privateKey: "xyy6ZlnDbJjyV1Igh6MbTjkuozKRuqi5h6hwCzoKV6A",
};
webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  VAPID.publicKey,
  VAPID.privateKey
);

function sendNotification(pushSubscription) {
  return webpush
    .sendNotification(
      pushSubscription,
     "JUST TEXT"
    )
    .catch((err) => {
      console.log(err);
    });
}

const pushSubscription = JSON.parse(fs.readFileSync("subscription.json"));
sendNotification(pushSubscription);


