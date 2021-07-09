define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_c391ee0d6f0748ee94edcb877424fa88: function AS_Button_c391ee0d6f0748ee94edcb877424fa88(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmHome");
        ntf.navigate();
    },
    /** onClick defined for btnAccMtr **/
    AS_Button_e5920e84ecf84918a0c3c9149f31d382: function AS_Button_e5920e84ecf84918a0c3c9149f31d382(eventobject) {
        var self = this;
        if (kony.os.deviceInfo().model != "iPhone Simulator" && kony.os.userAgent() != "google_sdk") {
            var ntf = new kony.mvc.Navigation("frmAclmeterOptions");
            ntf.navigate();
        } else {
            alert("Works only on device");
        }
    },
    /** onClick defined for btnBadge **/
    AS_Button_b8fecbcb8a964b5ea11856aaf802de24: function AS_Button_b8fecbcb8a964b5ea11856aaf802de24(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmBadge");
        ntf.navigate();
    },
    /** onClick defined for btnAppSetngs **/
    AS_Button_dcc3b3fbdb4a47599088f9fe3b5d4ffb: function AS_Button_dcc3b3fbdb4a47599088f9fe3b5d4ffb(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmAppSettings");
        ntf.navigate();
    },
    /** onClick defined for btnCamera **/
    AS_Button_b5aa8f0bf1df4912ad228a1c69f26b53: function AS_Button_b5aa8f0bf1df4912ad228a1c69f26b53(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmCameraOptions");
        ntf.navigate();
    },
    /** onClick defined for btnGeolocatn **/
    AS_Button_adb082d4944440d7bc8d744a8a9032b0: function AS_Button_adb082d4944440d7bc8d744a8a9032b0(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmGeoCurrentNWatch");
        ntf.navigate();
    },
    /** onClick defined for btnEmail **/
    AS_Button_ff29d21843104105aade09c59e660e78: function AS_Button_ff29d21843104105aade09c59e660e78(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmEmail");
        ntf.navigate();
    },
    /** onClick defined for btnAddrs **/
    AS_Button_b1e146c024c44f84870c1d286f8f7c5f: function AS_Button_b1e146c024c44f84870c1d286f8f7c5f(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmContact");
        ntf.navigate();
    },
    /** onClick defined for btnSms **/
    AS_Button_j717757c7b524ab98db54a4ce040a5b0: function AS_Button_j717757c7b524ab98db54a4ce040a5b0(eventobject) {
        var self = this;
        return self.sendSMS.call(this);
    },
    /** onClick defined for btnDevcInfo **/
    AS_Button_b60c52935bad46fe84b2705d7f6c4502: function AS_Button_b60c52935bad46fe84b2705d7f6c4502(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDeviceInfo");
        ntf.navigate();
    },
    /** onClick defined for btnLocalStrg **/
    AS_Button_ea7ebd7221a04aabbf1f708d222efb4e: function AS_Button_ea7ebd7221a04aabbf1f708d222efb4e(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLocalStore");
        ntf.navigate();
    },
    /** onClick defined for btnWbSQL **/
    AS_Button_d89024bfd9694ee38c334d2a567632f7: function AS_Button_d89024bfd9694ee38c334d2a567632f7(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmWebSQL");
        ntf.navigate();
    },
    /** onClick defined for btnCrypto **/
    AS_Button_f0a472c6550449c3b7dfd47ad2487661: function AS_Button_f0a472c6550449c3b7dfd47ad2487661(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmCrypto");
        ntf.navigate();
    },
    /** onClick defined for btnAsyncData **/
    AS_Button_c08c0b13f2e847f3ae4e560ddf75454a: function AS_Button_c08c0b13f2e847f3ae4e560ddf75454a(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmAsyncDataDisplay");
        ntf.navigate();
    },
    /** onClick defined for btnCalEvents **/
    AS_Button_cba629082b14495e97ab706829a51126: function AS_Button_cba629082b14495e97ab706829a51126(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmCalendarEvents");
        ntf.navigate();
    }
});