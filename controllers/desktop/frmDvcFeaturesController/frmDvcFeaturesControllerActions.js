define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_f4b153f0fcab4275a6671d98cb6197f0: function AS_Button_f4b153f0fcab4275a6671d98cb6197f0(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmHome");
        ntf.navigate();
    },
    /** onClick defined for btnAccMtr **/
    AS_Button_eb51af6b8fb14e5e89ea54c32a3c8ddd: function AS_Button_eb51af6b8fb14e5e89ea54c32a3c8ddd(eventobject) {
        var self = this;
        if (kony.os.deviceInfo().model != "iPhone Simulator" && kony.os.userAgent() != "google_sdk") {
            var ntf = new kony.mvc.Navigation("frmAclmeterOptions");
            ntf.navigate();
        } else {
            alert("Works only on device");
        }
    },
    /** onClick defined for btnBadge **/
    AS_Button_cdf0083bea9a47f08c81ce13dfa3212e: function AS_Button_cdf0083bea9a47f08c81ce13dfa3212e(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmBadge");
        ntf.navigate();
    },
    /** onClick defined for btnAppSetngs **/
    AS_Button_bdf812cb3535494a9e3570ab6a12a5e0: function AS_Button_bdf812cb3535494a9e3570ab6a12a5e0(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmAppSettings");
        ntf.navigate();
    },
    /** onClick defined for btnCamera **/
    AS_Button_e983bb9496be47638ebce8d7a5537360: function AS_Button_e983bb9496be47638ebce8d7a5537360(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmCameraOptions");
        ntf.navigate();
    },
    /** onClick defined for btnGeolocatn **/
    AS_Button_c7ab47f45bfe43d8895aa8fc807e2d1f: function AS_Button_c7ab47f45bfe43d8895aa8fc807e2d1f(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmGeoCurrentNWatch");
        ntf.navigate();
    },
    /** onClick defined for btnEmail **/
    AS_Button_dd8d0acfb68b4634840b51189f5f32b7: function AS_Button_dd8d0acfb68b4634840b51189f5f32b7(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmEmail");
        ntf.navigate();
    },
    /** onClick defined for btnAddrs **/
    AS_Button_d5af7e986374470298f20c337f43c7c4: function AS_Button_d5af7e986374470298f20c337f43c7c4(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmContact");
        ntf.navigate();
    },
    /** onClick defined for btnSms **/
    AS_Button_e2c89aa872c64017957d6aaa7aee3e5b: function AS_Button_e2c89aa872c64017957d6aaa7aee3e5b(eventobject) {
        var self = this;
        return self.sendSMS.call(this);
    },
    /** onClick defined for btnDevcInfo **/
    AS_Button_h78bae73414b4782bfe2925cd6a57ac7: function AS_Button_h78bae73414b4782bfe2925cd6a57ac7(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDeviceInfo");
        ntf.navigate();
    },
    /** onClick defined for btnLocalStrg **/
    AS_Button_dde4022a4d4a403994e8a6f50ca63a36: function AS_Button_dde4022a4d4a403994e8a6f50ca63a36(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLocalStore");
        ntf.navigate();
    },
    /** onClick defined for btnWbSQL **/
    AS_Button_bb50d838316b4267bf657df514e38890: function AS_Button_bb50d838316b4267bf657df514e38890(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmWebSQL");
        ntf.navigate();
    },
    /** onClick defined for btnCrypto **/
    AS_Button_edecd2315e694af190a8ad84f9600b29: function AS_Button_edecd2315e694af190a8ad84f9600b29(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmCrypto");
        ntf.navigate();
    },
    /** onClick defined for btnAsyncData **/
    AS_Button_a5a638d1b51e4c0188ce538276bd9780: function AS_Button_a5a638d1b51e4c0188ce538276bd9780(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmAsyncDataDisplay");
        ntf.navigate();
    },
    /** onClick defined for btnCalEvents **/
    AS_Button_e642ab31d9fc4836ac46dbe6b2637eab: function AS_Button_e642ab31d9fc4836ac46dbe6b2637eab(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmCalendarEvents");
        ntf.navigate();
    }
});