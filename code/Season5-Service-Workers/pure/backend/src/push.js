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

const payload = JSON.stringify({
  "notification": {
    "title": "New Video!",
    "icon": "https://yt3.googleusercontent.com/-wKHZxmgNZaBcyC9ISvoeK24IYV9Bg5IoNtZATU0YPPKCqFPF36FeF9hb8UIo629zOKzQm0u=s176-c-k-c0x00ffffff-no-rj",
    "data": {
      "onActionClick": {
        "default": {"operation": "openWindow", "url": "https://www.youtube.com/channel/UCLZX5mWyQ0v1Z4ssk9uJw-g"}
      }
    }
  }
});

function sendNotification(pushSubscription) {
  return webpush
    .sendNotification(
      pushSubscription,
      payload
    )
    .catch((err) => {
      console.log(err);
    });
}

const pushSubscription = JSON.parse(fs.readFileSync("subscription.json"));
sendNotification(pushSubscription);


