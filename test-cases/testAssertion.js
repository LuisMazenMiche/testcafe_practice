import { Selector, t } from 'testcafe';
import { deleteDeviceAPI, getDeviceIdAPI, getDevicesAPI, getDevicesNamesAPI, getDevicesUI, updateDeviceAPI } from '../helpers/devices_helpers.js';
import Device_page from '../pages/Device_page.js';
//import getDevices from ''
import New_Device from '../pages/New_Device_page.js';

fixture('Getting Started')
    .page('http://localhost:3001');

/*
Test 1 (required)
Make an API call to retrieve the list of devices.
Use the list of devices to check the elements are visible in the DOM. Check the name,
type and capacity of each element of the list using the class names and make sure they are correctly displayed.
Verify that all devices contain the edit and delete buttons.

    GET http://localhost:3000/devices/ 
    1. Save the content of the json on an array
    2. Get the Dom elements on front to validate againts the json
    3. validate name, type, capacity  using clases.
    4. Validate edit delete buttons for each device

    getDevices().then(data => console.log(data));
    
    test('Click check boxes and then verify their state', async t => {
    for (const feature of page.featureList) {
        await t
            .click(feature.label)
            .expect(feature.checkbox.checked).ok();
    }
});
*/    
test('Testcase 1 - Validate all the devices on the API appear on the UI correctly', async t => {     
    var devicesNames = await getDevicesAPI()
    //This Way I can get an Array of the actual devices displayed on the front page.
    const ListOfDevicesUI = Selector('#submit-button').exists;

    for(let i= 0; i<devicesNames.lenght; i++){
        const device = Selector('.list-devices')
            .child('div')
            .child('spam').withExactText(devicesNames[i]);
        //await t.expect(device).exists()
    } 
});
/*

Test 2 (required)
Verify that devices can be created properly using the UI.
Verify the new device is now visible. Check name, type and capacity are visible and correctly displayed to the user.

    1.Create page object to open new device modal.
    2.Create its selectors to create a new device using UI
    3.Validate its creation, maybe using again the list of devices on UI 
   */

test('Testcase 2 Add new Device', async t => {
    //First use the method to create a new device from UI
    await New_Device.createNewDevice('new Device test','WINDOWS WORKSTATION','256GB')
    //Then Get the last device created on the API
    var devicesNames = await getDevicesAPI()
    //console.log(devicesNames)
    await t.
        expect(Device_page.LasdeviceInTheList)
            .eql(devicesNames.at(-1).id)
});
/*
Test 3 (required)
Make an API call that renames the first device of the list to “Rename Device”.
Reload the page and verify the modified device has the new name.

    1.I can Again use the array on the helper to get the first device of the list.
    2.Use the call PUT to change its name
    3.Use the helper to get the devices from UI
    4.Validate that the name has been changed

    */    




test('Testcase 3 Rename the first device', async t => {
    const deviceUpdate = Selector('.list-devices').child('span').withAttribute('device-info')
    //console.log(deviceUpdate.textContent)
    //this method gets the first device element and then changes its system name. 
    //Then reloads the page
        //And Finaly expects that the 
    await updateDeviceAPI();
    await Device_page.refresh();
    //await   t.expect(deviceUpdate).eql('Rename Device')
    
});
/*

Test 4 (required)
Make an API call that deletes the last element of the list.
Reload the page and verify the element is no longer visible and it doesn’t exist in the DOM.

    1.Using the array of Elements, get the last element created.
    2.Use the Delete call to delete the element. For all the calls to the API use the helpers.
    3.In the test case file, use the reload page, and then using the array of devices of the 
*/
test('Testcase 4 - Delete the last device of the list', async t => {
    //get a list of all the current devices on the API
    let devices = await getDevicesAPI();
    const devicesLastDevice = devices.at(-1).id; 
    console.log('the last device is' + devicesLastDevice)
    //This method delets the last device 
    await deleteDeviceAPI()
    //Refresh the page
    await Device_page.refresh()
});

