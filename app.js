// PLEASE NOTE: Did not want to create an account due to privacy reasons but believe this is the general layout of the code

const CallfireClient = require('callfire-api-client-js');
const client = new CallfireClient('api-login', 'api-password');

app.post("/call", function(req, res) {

    function callEMS(getCurrentPosition) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        const emergency = "Choking";
        client.ready((lat, long) => {
            client.texts.sendTexts({
              body: [
                {
                  phoneNumber: '12135551100',
                  message: `Emergency at: ${lat}, ${long}', ${emergency}`,
                  attributes: {
                    contact_name: 'OneTwoFix',
                    external_user_id: '45450007002'
                  }
                }
              ]
            })
              .then((response) => {
                console.log(response.obj);
              })
              .catch((err) => {
                console.log('request error ' + err.data);
              });
          },
          (clientError) => {
            console.log('client error ' + clientError);
          }
        );
    }
    })
