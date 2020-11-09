var apiKey = "46978084";
var sessionId = "1_MX40Njk3ODA4NH5-MTYwNDc5MzQ3MDQ3NX51c0ZOTjc5eGRVaHBQL1cxcFRHbFpSbVN-fg";
var token = "T1==cGFydG5lcl9pZD00Njk3ODA4NCZzaWc9MmQ3OTRhM2U4MWY3ZjllOTA0MTZkMTI3NDcyODlmZjhkOTkxYmIxZDpzZXNzaW9uX2lkPTFfTVg0ME5qazNPREE0Tkg1LU1UWXdORGM1TXpRM01EUTNOWDUxYzBaT1RqYzVlR1JWYUhCUUwxY3hjRlJIYkZwU2JWTi1mZyZjcmVhdGVfdGltZT0xNjA0NzkzNTk4Jm5vbmNlPTAuODY3NTIwMjQzNTAwNTg5NSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjA3Mzg1NTk3JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

function handleError(error) {
    if (error) {
      alert(error.message);
    }
}
  
function initializeSession() {

    var session = OT.initSession(apiKey, sessionId);

    var publisher = OT.initPublisher('publisher', {
        insertMode: 'append',
        width: '100%',
        height: '100%'
    }, handleError);

    session.connect(token, function(error) {
        if (error) {
        handleError(error);
        } else {
        session.publish(publisher, handleError);
        }
    });

    session.on('streamCreated', function(event) {
        session.subscribe(event.stream, 'subscriber', {
          insertMode: 'append',
          width: '100%',
          height: '100%'
        }, handleError);
      });

}

// (optional) add server code here
initializeSession();