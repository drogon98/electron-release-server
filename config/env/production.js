/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {
  // The full base url at which your site will be primarily available.
  // Include an http:// prefix
  // ex. 'http://my-site.com'
  appUrl: "https://shyminder.co.ke",

  auth: {
    // Provide a set of credentials that can be used to access the admin interface.
    static: {
      username: "drogon",
      password: "drogon",
    },
    // You can also specify an ldap connection that can be used for authentication.
    //ldap: {
    //  usernameField: 'USERNAME_FIELD', // Key at which the username is stored
    //  server: {
    //    url: 'ldap://LDAP_SERVER_FQDN:389',
    //    bindDn: 'INSERT_LDAP_SERVICE_ACCOUNT_USERNAME_HERE',
    //    bindCredentials: 'INSERT_PASSWORD_HERE',
    //    searchBase: 'USER_SEARCH_SPACE', // ex: ou=Our Users,dc=companyname,dc=com
    //    searchFilter: '(USERNAME_FIELD={{username}})'
    //  }
    //}
  },

  jwt: {
    // Recommended: 63 random alpha-numeric characters for secret
    // Generate using: https://www.grc.com/passwords.htm
    token_secret:
      "RMduPh67FefD2wbO7suC6l01CLCR0G9RGAl6oQDqM0N3JnHbebZyQcBcqW79HZc",
  },

  models: {
    datastore: "postgresql",
    migrate: "safe",

    /******************************************************************************
     *                                                                             *
     * The set of DEKs (data encryption keys) for at-rest encryption.              *
     * i.e. when encrypting/decrypting data for attributes with `encrypt: true`.   *
     *                                                                             *
     * > The `default` DEK is used for all new encryptions, but multiple DEKs      *
     * > can be configured to allow for key rotation.  In production, be sure to   *
     * > manage these keys like you would any other sensitive credential.          *
     *                                                                             *
     * > For more info, see:                                                       *
     * > https://sailsjs.com/docs/concepts/orm/model-settings#?dataEncryptionKeys  *
     *                                                                             *
     ******************************************************************************/
    dataEncryptionKeys: {
      // DEKs should be 32 bytes long, and cryptographically random.
      // You can generate such a key by running the following:
      //   require('crypto').randomBytes(32).toString('base64')
      default: "dF45GpCsKszqvL3uj7C33UvkOHXvOia2kFpD5wovtF0=",
    },
  },

  datastores: {
    postgresql: {
      adapter: "sails-postgresql",
      host: "localhost",
      user: "postgres",
      password: "drogon",
      database: "electron_release_server",
    },
  },

  // session: {
  //   // Recommended: 63 random alpha-numeric characters for secret
  //   // Generate using: https://www.grc.com/passwords.htm
  //   secret: "RMduPh67FefD2wbO7suC6l01CLCR0G9RGAl6oQDqM0N3JnHbebZyQcBcqW79HZc",
  //   database: "electron_release_server_sessions",
  //   host: "localhost",
  //   user: "postgres",
  //   password: "drogon",
  //   port: 5432,
  // },

  files: {
    // Folder must exist and user running the server must have adequate perms
    dirname: "../assets",
    // Maximum allowed file size in bytes
    // Defaults to 500MB
    // maxBytes: 524288000
  },

  /***************************************************************************
   * Your SSL certificate and key, if you want to be able to serve HTTP      *
   * responses over https:// and/or use websockets over the wss:// protocol  *
   * (recommended for HTTP, strongly encouraged for WebSockets)              *
   *                                                                         *
   * In this example, we'll assume you created a folder in your project,     *
   * `config/ssl` and dumped your certificate/key files there:               *
   ***************************************************************************/

  // ssl: {
  //   ca: require('fs').readFileSync(__dirname + './ssl/my_apps_ssl_gd_bundle.crt'),
  //   key: require('fs').readFileSync(__dirname + './ssl/my_apps_ssl.key'),
  //   cert: require('fs').readFileSync(__dirname + './ssl/my_apps_ssl.crt')
  // },

  /***************************************************************************
   * The `port` setting determines which TCP port your app will be           *
   * deployed on.                                                            *
   *                                                                         *
   * Ports are a transport-layer concept designed to allow many different    *
   * networking applications run at the same time on a single computer.      *
   * More about ports:                                                       *
   * http://en.wikipedia.org/wiki/Port_(computer_networking)                 *
   *                                                                         *
   * By default, if it's set, Sails uses the `PORT` environment variable.    *
   * Otherwise it falls back to port 1337.                                   *
   *                                                                         *
   * In env/production.js, you'll probably want to change this setting       *
   * to 80 (http://) or 443 (https://) if you have an SSL certificate        *
   ***************************************************************************/

  // port: process.env.PORT || 1337,

  /***************************************************************************
   * The runtime "environment" of your Sails app is either typically         *
   * 'development' or 'production'.                                          *
   *                                                                         *
   * In development, your Sails app will go out of its way to help you       *
   * (for instance you will receive more descriptive error and               *
   * debugging output)                                                       *
   *                                                                         *
   * In production, Sails configures itself (and its dependencies) to        *
   * optimize performance. You should always put your app in production mode *
   * before you deploy it to a server.  This helps ensure that your Sails    *
   * app remains stable, performant, and scalable.                           *
   *                                                                         *
   * By default, Sails sets its environment using the `NODE_ENV` environment *
   * variable.  If NODE_ENV is not set, Sails will run in the                *
   * 'development' environment.                                              *
   ***************************************************************************/

  // environment: process.env.NODE_ENV || 'development'
};
