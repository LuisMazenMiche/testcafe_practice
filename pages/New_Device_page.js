import { Selector, t } from "testcafe";

class NewDevicePage {
    constructor () { 
        //Selectors needed to create a new device
        this.addDeviceButton = Selector('a[href="/devices/add"]');
        this.system_name = Selector('#system_name');
        this.typeSelect = Selector('#type');
        this.TypeOption = this.typeSelect.find('option')
        this.hdd_capacity = Selector('#hdd_capacity');
        this.submitButton = Selector('.submitButton');
    }

    async createNewDevice (name,option,capacity) {
        //normal flow to create a new device using UI
        await t
            .click(this.addDeviceButton)
            .typeText(this.system_name, name)
            .click(this.typeSelect)
            .click(this.TypeOption.withText(option))
            .typeText(this.hdd_capacity,capacity)
            .click(this.submitButton);
    }
}

export default new NewDevicePage();