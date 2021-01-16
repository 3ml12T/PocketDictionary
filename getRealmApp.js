export function getRealmApp() {
    //public api key: SQXJBXVU
    if (app === undefined) {
      const appId = "pocketdictionary-udovv"; // Set Realm app ID here.
      const appConfig = {
        id: appId,
        timeout: 10000,
        app: {
          name: "default",
          version: "0",
        },
      };
      app = new Realm.App(appConfig);
    }
    return app;
  }