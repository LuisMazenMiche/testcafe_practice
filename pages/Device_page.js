import { Selector, t, ClientFunction } from "testcafe";
import New_Device from "./New_Device_page";

class DevicePage {
    constructor () { 
        //Selectors of the main page of the devices.}
        //this.deviceName = Selector('.list-devices').firstChild.firstChild.firstElementChild
        
        this.LastdeviceInTheList = Selector('.list-devices').nth(-1)
        this.firstDeviceInTheList = Selector('.list-devices').nth(0);
        //this.DeviceListCount = Selector('.list-devices').count;

        this.deleteDeviceButton = Selector('.device-remove');
        this.editDeviceButton = Selector('.device-edit');

        this.FirstDeviceEditButton = Selector('.device-edit').nth(0);
        this.LastDeviceDeleteOption = Selector('.device-remove').nth(-1);
    }
    async validateDeviceExist(name, system_name, capacity){

    }
    async deleteDevice(id){
        await t
            .click(deleteDeviceButton)
    }
    async DeleteLastDeviceDisplayed(){
        //Will click the delete buton of the last device displayed.
        await t
            .click(this.LastDeviceDeleteOption)        
    }
    async UpdateFirstDevice(id){
        await t
            .click(FirstDeviceEditButton)
    }
    async refresh () {
        await ClientFunction(() => {
          document.location.reload();
        })();
      }
    
}
export default new DevicePage();