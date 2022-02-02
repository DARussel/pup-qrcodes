qrData = document.getElementById('dataInput');
qrLastname = document.getElementById('lastname');
qrfirstname = document.getElementById('firstname');
qrmiddlename = document.getElementById('middlename');
qraddress = document.getElementById('address');
qrcpnumber = document.getElementById('cpnumber');
qremail = document.getElementById('email');
qrdob = document.getElementById('dob');

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  data: "Please enter the data and then try to scan me.",
  image: "pup.logo.png",
  dotsOptions: {
    color: "#000",
    type: "square"
  },
});

const updateQrData = () => {
  newQrData = qrData.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrlastname = () => {
  newQrData = qrData.value+qrLastname.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrfirsrname = () => {
  newQrData = qrData.value+qrLastname.value+qrfirstname.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrmiddlename = () => {
  newQrData = qrData.value+qrLastname.value+qrfirstname.value+qrmiddlename.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQraddress = () => {
  newQrData = qrData.value+qrLastname.value+qrfirstname.value+qrmiddlename.value+qraddress.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrcpnumber = () => {
  newQrData = qrData.value+qrLastname.value+qrfirstname.value+qrmiddlename.value+qraddress.value+cpnumber.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQremail = () => {
  newQrData = qrData.value+qrLastname.value+qrfirstname.value+qrmiddlename.value+qraddress.value+qrcpnumber.value+qremail.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrdob = () => {
  newQrData = "Student Number:"+qrData.value+"   "+"Last Name:"+qrLastname.value+"   "+"First Name:"+qrfirstname.value+"   "+"Middle Name:"+qrmiddlename.value+"   "+"Address:"+qraddress.value+"  "+"Contact Number:"+qrcpnumber.value+" "+"Email:"+qremail.value+" "+"Birthday:"+qrdob.value;
  qrCode.update({
    data: newQrData
  });
};


const updateQrImg = () => {
  newQrImage = URL.createObjectURL(qrImage.files[0]);
  console.log(newQrImage);
  qrCode.update({
    image: newQrImage
  });
};

const updateQrColor = () => {
  newQrColor = qrColor.value;
  qrCode.update({
    dotsOptions: {
      color: newQrColor
    }
  });
};

const updateQrType = () => {
  newQrType = qrType.value;
  qrCode.update({
    dotsOptions: {
      type: newQrType
    }
  });
};

const download = () => qrCode.download("jpeg");

qrCode.append(document.getElementById('canvas'));