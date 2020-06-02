// /**
//  * AuthHelper.js
//  *
//  * Helper class to encapsulate all login related functions.
//  *
//  * @author Ryan Ayers
//  */

// define( [
// 	"dojo/_base/declare",
// 	"rda/config/Store",
// 	"rda/backend/RDAServer",
// 	"rda/login/LoginResult",
// 	"rda/login/LoginStatus"
// ], function( declare, Store, RDAServer, LoginResult, LoginStatus )
// {

// 	return declare( null, {

// 		_oStore: null,
// 		_sVersion: "",
// 		_rgsVersion: null,
// 		_sServer: "",
// 		_oServer: null,

// 		constructor: function()
// 		{
// 			this._oStore = Store.getInstance();
// 			this._sVersion = this._oStore.get( "sVersion" );
// 			this._rgsVersion = this._sVersion.split( "." );

// 			this._oServer = new RDAServer();

// 			this.setServer( '' );
// 			this.storeServer();
// 			if ( arguments.length > 0 ) {
// 				this.setServer( arguments[ 0 ] );
// 				this.storeServer();
// 			}
// 		},

	const	buildServerString = ( sServer ) => {
      if ( sServer == '' ) {
          return sServer; 
      }
			return 'http://' + sServer;
    };

	const	setServer = ( sServer ) => {
            try {
                this._sServer = sServer;

                this._oServer.setServer( this._buildServerString( sServer ) );

            } catch ( e ) {
                console.debug ( 'Error setting server for login [' + e + ']' );
            }
		}

	const getServer = () => {
    return this._sServer;
  }

	const	storeServer = () => {
			this._oStore.set( "sServer", this._sServer );
			this._oStore.set( "sServerLive", this._buildServerString( this._sServer ) + "/live/?limit=1&cam=" );
			this._oStore.set( "sServerLiveMPE", this._buildServerString( this._sServer ) + "/mpe/" );
			this._oStore.set( "sServerPlayback", this._buildServerString( this._sServer ) + this._oStore.get( 'sServerPlaybackPath' ) );
			this._oStore.set( "oServer", this._oServer );
		};

	const	doLogout = ( sSess ) => {
			try {
				// Logout
				if ( sSess != null )
					this._oServer.Query( "auth.logoutUser", sSess );

			} catch ( e ) {
				// Eat any exceptions since logout might be while trying to close
			}
    };
    
  const queryServer = ()

	const loginSession = ( sName, sPass, fForce ) => {
			try {
				// Make sure server is online first
				try {
					this._oServer.Query( "info.isAlive" );
				} catch ( e ) {
					return new LoginResult( LoginStatus.ERROR, "offline" );
				}

				// Attempt Login (respecting force)
				sSess = this._oServer.Query( "auth.loginUser", sName, sPass, fForce, true );

				// Login Failed
				if ( sSess == "noauth" )
					return new LoginResult( LoginStatus.NOAUTH );

				// No remote rights
				if ( sSess == "noremote" )
					return new LoginResult( LoginStatus.NOREMOTE );

				// Login succeeded, but we have another active session
				if ( sSess == "exists" )
					return new LoginResult( LoginStatus.EXISTS );

				// Login Failed, max sessions exceeded
				if ( sSess == "maxsession" )
					return new LoginResult( LoginStatus.MAXSESSION );
					
				return new LoginResult( LoginStatus.SUCCESS, sSess, sName, sPass );

			} catch ( e ) {
				return new LoginResult( LoginStatus.ERROR, e );
			}
		};

	const	loginSessionDividia = ( sSess, fForce ) => {
			try {
				// Make sure server is online first
				try {
					this._oServer.Query( "info.isAlive" );
				} catch ( e ) {
					return new LoginResult( LoginStatus.ERROR, "offline" );
				}

				// Attempt Login (respecting force)
				sName = this._oServer.Query( "auth.loginSession", sSess, fForce, true );

				// Login Failed
				if ( sName == "noauth" )
					return new LoginResult( LoginStatus.NOAUTH );

				// No remote rights
				if ( sName == "noremote" )
					return new LoginResult( LoginStatus.NOREMOTE );

				// Login succeeded, but we have another active session
				if ( sName == "exists" )
					return new LoginResult( LoginStatus.EXISTS );

				// Login Failed, max sessions exceeded
				if ( sName == "maxsession" )
					return new LoginResult( LoginStatus.MAXSESSION );
					
				return new LoginResult( LoginStatus.SUCCESS, sSess, sName, '__NOTSET__' );

			} catch ( e ) {
				return new LoginResult( LoginStatus.ERROR, e );
			}
		};

	const	whichIP = ( sIPbase, oServ ) => {
			var oServerTemp = new RDAServer();
			var sServer;
			var sUrl;

			/*
			 * Since we use rpcproxy.cgi and the standard case is
			 * we probably are not local, try public first.
			 * This fixes bug: http://tickets.dividia.net/show_bug.cgi?id=16612
			 */

			// Special case so we can direct connect back to our sIPbase
			if ( sIPbase != '' ) {
				sServer = oServ.getIP();
				if ( oServ.getPort() != 80 )
					sServer += ":" + oServ.getPort();
				if ( sIPbase == sServer )
					return sServer;
			};

			// Try Public IP
			try {
				sServer = oServ.getIP();
				if ( oServ.getPort() != 80 )
					sServer += ":" + oServ.getPort();
				sUrl = "http://" + sServer;
				oServerTemp.setServer( sUrl );
				oServerTemp.Query( "info.isAlive" );
				return sServer;
			} catch ( e ) {
        console.log(e)
			};

			// Try local IP with non-standard port
			sServer = oServ.getLocalIP();
			if ( oServ.getPort() != 80 )
				sServer += ":" + oServ.getPort();

			try {
				sServer = oServ.getLocalIP() + ":" + oServ.getPort();
				sUrl = "http://" + sServer;
				oServerTemp.setServer( sUrl );
				oServerTemp.Query( "info.isAlive" );
				return sServer;
			} catch ( e ) {
        console.log(e)
			};

			// Could not connect
			throw new Error( "offline" );
		};

	const checkExists = ( sSess ) => {
			try {
				return this._oServer.Query( "auth.checkExists", sSess );

			} catch ( e ) {
				return false;
			}
		};
