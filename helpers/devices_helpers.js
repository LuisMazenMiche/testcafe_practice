
import { Selector, t } from "testcafe";

//this method helps me get a list of devices using the API.
export async function getDevicesAPI(){
    const responseBody  = await t.request(`http://localhost:3000/devices`).body;
    return responseBody
}

export async function updateDeviceAPI(){
    const deviceIdList = await getDevicesAPI()
    const urldevice = 'http://localhost:3000/devices/'+deviceIdList.at(-1).id
    console.log(urldevice)
    await t.request.put({
        url: urldevice,
        body: {
            system_name: 'Rename Device',
            type: "WINDOWS_WORKSTATION",
            hdd_capacity: "10"
        }
    });
}

//This method delets the last element 
export async function deleteDeviceAPI(){
    const deviceIdList = await getDevicesAPI()
    await t.request.delete('http://localhost:3000/devices/' + deviceIdList.at(-1).id)
    }

//This method helps me get a list of devices using UI
export async function getDevicesUI(inex){
    var devices = []
    var devicesNames = await getDevicesNamesAPI()
    //This Way I can get an Array of the actual devices displayed on the front page.
    const ListOfDevicesUI = Selector('#submit-button').exists;

    for(let i= 0; i<devicesNames.lenght; i++){
        const device = Selector('.list-devices')
            .child('div')
            .child('div')
            .child('spam').withExactText(devicesNames[i]);
        //await t.expect(device).exists()
        console.log('Dispositivo name ' + devicesNames[i] + 'Existe')   
    } 
}